
# ASN-List

实时更新 PY 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNPY:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PY/ASN.PY.yaml"
    path: ./ruleset/ASN.PY.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNPY:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PY/ASN.PY.yaml"
    path: ./ruleset/ASN.PY.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PYcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PY/CIDR.PY.yaml"
    path: ./ruleset/PYcidr.yaml
</code></pre>