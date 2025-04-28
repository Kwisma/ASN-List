
# ASN-List

实时更新 BW 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  BWasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BW/BW_ASN.yaml"
    path: ./ruleset/BW_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BWasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BW/BW_ASN.yaml"
    path: ./ruleset/BW_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BWcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BW/BW_IP.yaml"
    path: ./ruleset/BW_IP.yaml
</code></pre>