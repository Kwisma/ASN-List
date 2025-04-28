
# ASN-List

实时更新 BH 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  BHasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BH/BH_ASN.yaml"
    path: ./ruleset/BH_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BHasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BH/BH_ASN.yaml"
    path: ./ruleset/BH_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BHcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BH/BH_IP.yaml"
    path: ./ruleset/BH_IP.yaml
</code></pre>