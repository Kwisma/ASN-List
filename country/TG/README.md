
# ASN-List

实时更新 TG 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  TGasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TG/TG_ASN.yaml"
    path: ./ruleset/TG_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TGasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TG/TG_ASN.yaml"
    path: ./ruleset/TG_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TGcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TG/TG_IP.yaml"
    path: ./ruleset/TG_IP.yaml
</code></pre>