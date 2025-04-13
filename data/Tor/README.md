
# ASN-List

实时更新 Tor 的 ASN 和 IP 数据库。

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