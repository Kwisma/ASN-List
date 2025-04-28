
# ASN-List

实时更新 PY 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  PYasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PY/PY_ASN.yaml"
    path: ./ruleset/PY_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PYasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PY/PY_ASN.yaml"
    path: ./ruleset/PY_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PYcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PY/PY_IP.yaml"
    path: ./ruleset/PY_IP.yaml
</code></pre>