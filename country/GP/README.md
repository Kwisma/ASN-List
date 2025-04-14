
# ASN-List

实时更新 GP 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNGP:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GP/ASN.GP.yaml"
    path: ./ruleset/ASN.GP.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNGP:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GP/ASN.GP.yaml"
    path: ./ruleset/ASN.GP.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GPcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GP/CIDR.GP.yaml"
    path: ./ruleset/GPcidr.yaml
</code></pre>