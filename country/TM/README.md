
# ASN-List

实时更新 TM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  TMasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TM/TM_ASN.yaml"
    path: ./ruleset/TM_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TMasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TM/TM_ASN.yaml"
    path: ./ruleset/TM_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TMcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TM/TM_IP.yaml"
    path: ./ruleset/TM_IP.yaml
</code></pre>