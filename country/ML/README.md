
# ASN-List

实时更新 ML 的 ASN 和 IP 数据库。

## 特征

- 每日自动更新
- 可靠且准确的来源

## 在代理应用中使用

mihomo(clash.meta)

<pre><code class="language-javascript">
rule-providers:
  reject:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/ML/ASN.ML.yaml"
    path: ./ruleset/ASN.ML.yaml
    interval: 86400
</code></pre>

Surge

<pre><code class="language-javascript">
[Rule]
# > ML ASN List
RULE-SET, https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/ML/ASN.ML.list, Direct
</code></pre>

Quantumult X

<pre><code class="language-javascript">
[filter_remote]
# ML ASN List
https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/ML/ASN.ML.list, tag=MLASN, force-policy=direct, update-interval=86400, opt-parser=true, enabled=true
</code></pre>
