
# ASN-List

实时更新 AT 的 ASN 和 IP 数据库。

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
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AT/ASN.AT.yaml"
    path: ./ruleset/ASN.AT.yaml
    interval: 86400
</code></pre>

Surge

<pre><code class="language-javascript">
[Rule]
# > AT ASN List
RULE-SET, https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AT/ASN.AT.list, Direct
</code></pre>

Quantumult X

<pre><code class="language-javascript">
[filter_remote]
# AT ASN List
https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AT/ASN.AT.list, tag=ATASN, force-policy=direct, update-interval=86400, opt-parser=true, enabled=true
</code></pre>
