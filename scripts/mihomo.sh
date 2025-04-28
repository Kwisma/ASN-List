#!/bin/bash

# 遍历 rukle 目录下所有子目录
find "$base_dir" -type f -name '*IP.yaml' | while read -r src_file; do
    # 定义目标文件路径
    # 假设目标文件与源文件同名，只是格式不同
    target_file="${src_file%.yaml}.converted.mrs"  # 可以修改目标文件的后缀名格式

    # 执行转化指令
    mihomo convert-ruleset ipcidr yaml "$src_file" "$target_file"

    # 打印已转换的文件信息
    echo "Converted: $src_file -> $target_file"
done
