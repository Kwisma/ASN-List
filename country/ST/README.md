
# ASN-List

实时更新 ST 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  STasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/ST/ST_ASN.yaml"
    path: ./ruleset/ST_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  STasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ST/ST_ASN.yaml"
    path: ./ruleset/ST_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  STcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ST/ST_IP.yaml"
    path: ./ruleset/ST_IP.yaml
</code></pre>