
# ASN-List

实时更新 Netflix 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNNetflix:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Netflix/ASN.Netflix.yaml"
    path: ./ruleset/ASN.Netflix.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNNetflix:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Netflix/ASN.Netflix.yaml"
    path: ./ruleset/ASN.Netflix.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Netflixcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Netflix/CIDR.Netflix.yaml"
    path: ./ruleset/Netflixcidr.yaml
</code></pre>