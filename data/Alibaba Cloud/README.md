
# ASN-List

实时更新 Alibaba Cloud 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNAlibaba Cloud:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Alibaba Cloud/ASN.Alibaba Cloud.yaml"
    path: ./ruleset/ASN.Alibaba Cloud.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNAlibaba Cloud:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Alibaba Cloud/ASN.Alibaba Cloud.yaml"
    path: ./ruleset/ASN.Alibaba Cloud.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Alibaba Cloudcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Alibaba Cloud/CIDR.Alibaba Cloud.yaml"
    path: ./ruleset/Alibaba Cloudcidr.yaml
</code></pre>