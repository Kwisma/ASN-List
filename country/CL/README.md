
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