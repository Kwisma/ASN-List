
# ASN-List

实时更新 FK 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  FKasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/FK/FK_ASN.yaml"
    path: ./ruleset/FK_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  FKasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/FK/FK_ASN.yaml"
    path: ./ruleset/FK_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  FKcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/FK/FK_IP.yaml"
    path: ./ruleset/FK_IP.yaml
</code></pre>