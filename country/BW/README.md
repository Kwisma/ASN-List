
# ASN-List

实时更新 BW 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNBW:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BW/ASN.BW.yaml"
    path: ./ruleset/ASN.BW.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNBW:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BW/ASN.BW.yaml"
    path: ./ruleset/ASN.BW.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BWcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BW/CIDR.BW.yaml"
    path: ./ruleset/BWcidr.yaml
</code></pre>