import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

// 获取 base_dir 环境变量
const baseDir = process.env.base_dir; // 读取环境变量
// 设置最大重试次数
const maxRetries = 3;
// 设置重试间隔（单位：毫秒）
const retryInterval = 5000;

// 如果没有设置 base_dir 环境变量，则终止程序并提示错误
if (!baseDir) {
  console.error('Error: base_dir 环境变量未设置');
  process.exit(1);
}

// 递归读取目录中的所有 *_IP.yaml 和 *_IP.json 文件
const findFiles = (dir) => {
  let results = [];
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat && stat.isDirectory()) {
      results = [...results, ...findFiles(fullPath)]; // 递归查找子目录
    } else if (file.endsWith('_IP.yaml') || file.endsWith('_IP.json')) {
      results.push(fullPath);
    }
  });

  return results;
};

// 执行命令的封装，支持重试机制
const executeCommand = async (cmd, retries = 0) => {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.log(`命令失败，正在重试... (第 ${retries + 1} 次)`);
        if (retries < maxRetries) {
          setTimeout(() => resolve(executeCommand(cmd, retries + 1)), retryInterval);
        } else {
          reject(new Error(`命令执行失败: ${cmd}`));
        }
      } else {
        resolve(stdout);
      }
    });
  });
};

// 处理文件
const processFiles = async () => {
  const files = findFiles(baseDir);

  for (const srcFile of files) {
    let command, targetFile;

    if (srcFile.endsWith('_IP.yaml')) {
      targetFile = srcFile.replace('.yaml', '.mrs');
      command = `mihomo convert-ruleset ipcidr yaml "${srcFile}" "${targetFile}"`;
    } else if (srcFile.endsWith('_IP.json')) {
      targetFile = srcFile.replace('.json', '.srs');
      command = `sing-box rule-set compile --output "${targetFile}" "${srcFile}"`;
    } else {
      continue; // 忽略不符合条件的文件
    }

    try {
      await executeCommand(command);
      console.log(`转换成功: ${srcFile} -> ${targetFile}`);
    } catch (error) {
      console.log(`转换失败: ${srcFile} -> ${targetFile}，已达到最大重试次数`);
    }
  }
};

// 执行文件处理
processFiles();
