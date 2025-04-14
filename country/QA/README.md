
# ASN-List

实时更新 QA 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNQA:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/QA/ASN.QA.yaml"
    path: ./ruleset/ASN.QA.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNQA:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/QA/ASN.QA.yaml"
    path: ./ruleset/ASN.QA.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  QAcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/QA/CIDR.QA.yaml"
    path: ./ruleset/QAcidr.yaml
</code></pre>