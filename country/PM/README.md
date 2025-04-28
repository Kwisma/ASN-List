
# ASN-List

实时更新 PM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  PMasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PM/PM_ASN.yaml"
    path: ./ruleset/PM_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PMasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PM/PM_ASN.yaml"
    path: ./ruleset/PM_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PMcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PM/PM_IP.yaml"
    path: ./ruleset/PM_IP.yaml
</code></pre>