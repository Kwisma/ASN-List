
# ASN-List

实时更新 CL 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNCL:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CL/ASN.CL.yaml"
    path: ./ruleset/ASN.CL.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNCL:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CL/ASN.CL.yaml"
    path: ./ruleset/ASN.CL.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CLcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CL/CIDR.CL.yaml"
    path: ./ruleset/CLcidr.yaml
</code></pre>