
# ASN-List

实时更新 RE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  REasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/RE/RE_ASN.yaml"
    path: ./ruleset/RE_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  REasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/RE/RE_ASN.yaml"
    path: ./ruleset/RE_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  REcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/RE/RE_IP.yaml"
    path: ./ruleset/RE_IP.yaml
</code></pre>