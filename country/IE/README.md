
# ASN-List

实时更新 IE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  IEasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IE/IE_ASN.yaml"
    path: ./ruleset/IE_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  IEasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IE/IE_ASN.yaml"
    path: ./ruleset/IE_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  IEcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IE/IE_IP.yaml"
    path: ./ruleset/IE_IP.yaml
</code></pre>