
# ASN-List

实时更新 GP 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  GPasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GP/GP_ASN.yaml"
    path: ./ruleset/GP_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GPasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GP/GP_ASN.yaml"
    path: ./ruleset/GP_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GPcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GP/GP_IP.yaml"
    path: ./ruleset/GP_IP.yaml
</code></pre>