
# ASN-List

实时更新 Tor 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  Torasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Tor/Tor_ASN.yaml"
    path: ./ruleset/Tor_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Torasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Tor/Tor_ASN.yaml"
    path: ./ruleset/Tor_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Torcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Tor/Tor_IP.yaml"
    path: ./ruleset/Tor_IP.yaml
</code></pre>