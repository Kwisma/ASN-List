
# ASN-List

实时更新 CV 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNCV:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CV/ASN.CV.yaml"
    path: ./ruleset/ASN.CV.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNCV:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CV/ASN.CV.yaml"
    path: ./ruleset/ASN.CV.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CVcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CV/CIDR.CV.yaml"
    path: ./ruleset/CVcidr.yaml
</code></pre>