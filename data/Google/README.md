
# ASN-List

实时更新 Google 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNGoogle:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Google/ASN.Google.yaml"
    path: ./ruleset/ASN.Google.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNGoogle:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Google/ASN.Google.yaml"
    path: ./ruleset/ASN.Google.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Googlecidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Google/CIDR.Google.yaml"
    path: ./ruleset/Googlecidr.yaml
</code></pre>