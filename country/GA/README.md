
# ASN-List

实时更新 GA 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  GAasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GA/GA_ASN.yaml"
    path: ./ruleset/GA_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GAasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GA/GA_ASN.yaml"
    path: ./ruleset/GA_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GAcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GA/GA_IP.yaml"
    path: ./ruleset/GA_IP.yaml
</code></pre>