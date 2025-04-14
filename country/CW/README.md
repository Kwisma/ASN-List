
# ASN-List

实时更新 CW 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNCW:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CW/ASN.CW.yaml"
    path: ./ruleset/ASN.CW.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNCW:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CW/ASN.CW.yaml"
    path: ./ruleset/ASN.CW.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CWcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CW/CIDR.CW.yaml"
    path: ./ruleset/CWcidr.yaml
</code></pre>