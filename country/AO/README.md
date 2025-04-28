
# ASN-List

实时更新 AO 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  AOasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AO/AO_ASN.yaml"
    path: ./ruleset/AO_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  AOasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AO/AO_ASN.yaml"
    path: ./ruleset/AO_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  AOcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AO/AO_IP.yaml"
    path: ./ruleset/AO_IP.yaml
</code></pre>