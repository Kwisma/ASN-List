
# ASN-List

实时更新 WF 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  WFasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/WF/WF_ASN.yaml"
    path: ./ruleset/WF_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  WFasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/WF/WF_ASN.yaml"
    path: ./ruleset/WF_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  WFcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/WF/WF_IP.yaml"
    path: ./ruleset/WF_IP.yaml
</code></pre>