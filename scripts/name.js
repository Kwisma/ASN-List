import fs from 'fs';
import * as cheerio from 'cheerio';
import yaml from 'js-yaml';

// 读取 HTML 文件
const htmlFilePath = 'world.html'; // 请确保路径正确
const txtFilePath = 'output.yaml'; // 输出的 YAML 文件路径

// 读取 HTML 内容
fs.readFile(htmlFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('读取 HTML 文件时发生错误:', err);
    return;
  }

  // 使用 cheerio 解析 HTML
  const $ = cheerio.load(data);

  // 提取所有的 Description 和 CC 值
  const ccData = [];
  $('#table_countries tbody tr').each((index, element) => {
    const description = $(element).find('td:nth-child(1)').text().trim(); // 获取描述列
    const cc = $(element).find('td:nth-child(2)').text().trim(); // 获取 CC 列
    if (cc && description) {
      ccData.push({ cc, description }); // 将 CC 和描述配对
    }
  });

  // 构建要写入的文本内容
  let textData = 'country:\n';
  ccData.forEach(item => {
    textData += `  - ${item.cc} # ${item.description}\n`;
  });

  // 输出到文本文件
  fs.writeFileSync(txtFilePath, textData, 'utf8');
  console.log('文本文件已成功生成！');
});