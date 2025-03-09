# ASN-List

实时更新的 ASN 和 IP 数据库。
data 目录ASN如下：

ASN-Google

ASN-Facebook

ASN-Fastly

ASN-Netflix

ASN-Telegram

ASN-Tor

ASN-Google

ASN-Amazon

ASN-Cloudflare

ASN-Microsoft

country 目录是各个国家的 ASN

## 特征

- 每日自动更新
- 可靠且准确的来源

## 在代理应用中使用

mihomo(clash.meta)

```
rule-providers:
  reject:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Lycofuture/ASN-China/main/ASN.China.yaml"
    path: ./ruleset/ASN.China.yaml
    interval: 86400
```

Surge

```
[Rule]
# > China ASN List
RULE-SET, https://raw.githubusercontent.com/Lycofuture/ASN-China/main/ASN.China.list, Direct
```

Quantumult X

```
[filter_remote]
# China ASN List
https://raw.githubusercontent.com/Lycofuture/ASN-China/main/ASN.China.list, tag=ChinaASN, force-policy=direct, update-interval=86400, opt-parser=true, enabled=true
```
