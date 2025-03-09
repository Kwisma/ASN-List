
# ASN-List

实时更新 HR 的 ASN 和 IP 数据库。

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
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/HR/ASN.HR.yaml"
    path: ./ruleset/ASN.HR.yaml
    interval: 86400
</code></pre>

Surge

<pre><code class="language-javascript">
[Rule]
# > HR ASN List
RULE-SET, https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/HR/ASN.HR.list, Direct
</code></pre>

Quantumult X

<pre><code class="language-javascript">
[filter_remote]
# HR ASN List
https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/HR/ASN.HR.list, tag=HRASN, force-policy=direct, update-interval=86400, opt-parser=true, enabled=true
</code></pre>
