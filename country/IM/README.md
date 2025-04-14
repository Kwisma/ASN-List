
# ASN-List

实时更新 IM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNIM:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IM/ASN.IM.yaml"
    path: ./ruleset/ASN.IM.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNIM:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IM/ASN.IM.yaml"
    path: ./ruleset/ASN.IM.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  IMcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IM/CIDR.IM.yaml"
    path: ./ruleset/IMcidr.yaml
</code></pre>