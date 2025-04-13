
# ASN-List

实时更新 Tor 的 ASN 和 IP 数据库。

## 特征

- 每日自动更新
- 可靠且准确的来源

## 在代理应用中使用

mihomo(clash.meta)

<pre><code class="language-javascript">
rule-providers:
  ASNTor:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Tor/ASN.Tor.yaml"
    path: ./ruleset/ASN.Tor.yaml
    interval: 86400
    format: yaml
</code></pre>

或者

<pre><code class="language-javascript">
rule-providers:
  ASNTor:
    <<: *classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Tor/ASN.Tor.yaml"
    path: ./ruleset/ASN.Tor.yaml
</code></pre>

Surge

<pre><code class="language-javascript">
[Rule]
# > Tor ASN List
RULE-SET, https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Tor/ASN.Tor.list, Direct
</code></pre>

Quantumult X

<pre><code class="language-javascript">
[filter_remote]
# Tor ASN List
https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Tor/ASN.Tor.list, tag=TorASN, force-policy=direct, update-interval=86400, opt-parser=true, enabled=true
</code></pre>
