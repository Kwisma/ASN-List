
# ASN-List

实时更新 Alibaba 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNAlibaba:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Alibaba/ASN.Alibaba.yaml"
    path: ./ruleset/ASN.Alibaba.yaml
    interval: 86400
    format: yaml
</code></pre>