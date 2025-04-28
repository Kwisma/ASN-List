
# ASN-List

实时更新 Cloudflare 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  Cloudflareasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Cloudflare/Cloudflare_ASN.yaml"
    path: ./ruleset/Cloudflare_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Cloudflareasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Cloudflare/Cloudflare_ASN.yaml"
    path: ./ruleset/Cloudflare_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Cloudflarecidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Cloudflare/Cloudflare_IP.yaml"
    path: ./ruleset/Cloudflare_IP.yaml
</code></pre>