
# ASN-List

实时更新 Facebook 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  Facebookasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Facebook/Facebook_ASN.yaml"
    path: ./ruleset/Facebook_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Facebookasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Facebook/Facebook_ASN.yaml"
    path: ./ruleset/Facebook_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Facebookcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Facebook/Facebook_IP.yaml"
    path: ./ruleset/Facebook_IP.yaml
</code></pre>