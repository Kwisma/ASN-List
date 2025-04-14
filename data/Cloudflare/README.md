
# ASN-List

实时更新 Cloudflare 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNCloudflare:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Cloudflare/ASN.Cloudflare.yaml"
    path: ./ruleset/ASN.Cloudflare.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNCloudflare:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Cloudflare/ASN.Cloudflare.yaml"
    path: ./ruleset/ASN.Cloudflare.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Cloudflarecidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Cloudflare/CIDR.Cloudflare.yaml"
    path: ./ruleset/Cloudflarecidr.yaml
</code></pre>