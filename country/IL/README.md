
# ASN-List

实时更新 IL 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNIL:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IL/ASN.IL.yaml"
    path: ./ruleset/ASN.IL.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNIL:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IL/ASN.IL.yaml"
    path: ./ruleset/ASN.IL.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ILcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IL/CIDR.IL.yaml"
    path: ./ruleset/ILcidr.yaml
</code></pre>