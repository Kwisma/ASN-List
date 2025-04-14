
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

<pre><code class="language-javascript">
rule-providers:
  ASNTor:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Tor/ASN.Tor.yaml"
    path: ./ruleset/ASN.Tor.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Torcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Tor/CIDR.Tor.yaml"
    path: ./ruleset/Torcidr.yaml
</code></pre>