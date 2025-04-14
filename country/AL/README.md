
# ASN-List

实时更新 AL 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNAL:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AL/ASN.AL.yaml"
    path: ./ruleset/ASN.AL.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNAL:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AL/ASN.AL.yaml"
    path: ./ruleset/ASN.AL.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ALcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AL/CIDR.AL.yaml"
    path: ./ruleset/ALcidr.yaml
</code></pre>