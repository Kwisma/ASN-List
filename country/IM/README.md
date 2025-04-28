
# ASN-List

实时更新 IM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  IMasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IM/IM_ASN.yaml"
    path: ./ruleset/IM_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  IMasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IM/IM_ASN.yaml"
    path: ./ruleset/IM_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  IMcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IM/IM_IP.yaml"
    path: ./ruleset/IM_IP.yaml
</code></pre>