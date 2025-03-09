
# ASN-List

实时更新 PL 的 ASN 和 IP 数据库。

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
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PL/ASN.PL.yaml"
    path: ./ruleset/ASN.PL.yaml
    interval: 86400
</code></pre>

Surge

<pre><code class="language-javascript">
[Rule]
# > PL ASN List
RULE-SET, https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PL/ASN.PL.list, Direct
</code></pre>

Quantumult X

<pre><code class="language-javascript">
[filter_remote]
# PL ASN List
https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PL/ASN.PL.list, tag=PLASN, force-policy=direct, update-interval=86400, opt-parser=true, enabled=true
</code></pre>
