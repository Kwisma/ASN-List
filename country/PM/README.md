
# ASN-List

实时更新 PM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNPM:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PM/ASN.PM.yaml"
    path: ./ruleset/ASN.PM.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNPM:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PM/ASN.PM.yaml"
    path: ./ruleset/ASN.PM.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PMcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PM/CIDR.PM.yaml"
    path: ./ruleset/PMcidr.yaml
</code></pre>