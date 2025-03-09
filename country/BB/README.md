
# ASN-List

实时更新 BB 的 ASN 和 IP 数据库。

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
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BB/ASN.BB.yaml"
    path: ./ruleset/ASN.BB.yaml
    interval: 86400
</code></pre>

Surge

<pre><code class="language-javascript">
[Rule]
# > BB ASN List
RULE-SET, https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BB/ASN.BB.list, Direct
</code></pre>

Quantumult X

<pre><code class="language-javascript">
[filter_remote]
# BB ASN List
https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BB/ASN.BB.list, tag=BBASN, force-policy=direct, update-interval=86400, opt-parser=true, enabled=true
</code></pre>
