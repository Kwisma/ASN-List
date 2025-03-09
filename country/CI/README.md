
# ASN-List

实时更新 CI 的 ASN 和 IP 数据库。

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
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CI/ASN.CI.yaml"
    path: ./ruleset/ASN.CI.yaml
    interval: 86400
</code></pre>

Surge

<pre><code class="language-javascript">
[Rule]
# > CI ASN List
RULE-SET, https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CI/ASN.CI.list, Direct
</code></pre>

Quantumult X

<pre><code class="language-javascript">
[filter_remote]
# CI ASN List
https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CI/ASN.CI.list, tag=CIASN, force-policy=direct, update-interval=86400, opt-parser=true, enabled=true
</code></pre>
