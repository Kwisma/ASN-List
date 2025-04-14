
# ASN-List

实时更新 GA 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNGA:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GA/ASN.GA.yaml"
    path: ./ruleset/ASN.GA.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNGA:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GA/ASN.GA.yaml"
    path: ./ruleset/ASN.GA.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GAcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GA/CIDR.GA.yaml"
    path: ./ruleset/GAcidr.yaml
</code></pre>