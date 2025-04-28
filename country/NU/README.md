
# ASN-List

实时更新 NU 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  NUasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NU/NU_ASN.yaml"
    path: ./ruleset/NU_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NUasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NU/NU_ASN.yaml"
    path: ./ruleset/NU_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NUcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NU/NU_IP.yaml"
    path: ./ruleset/NU_IP.yaml
</code></pre>