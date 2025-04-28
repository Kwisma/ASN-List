
# ASN-List

实时更新 AL 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ALasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AL/AL_ASN.yaml"
    path: ./ruleset/AL_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ALasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AL/AL_ASN.yaml"
    path: ./ruleset/AL_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ALcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AL/AL_IP.yaml"
    path: ./ruleset/AL_IP.yaml
</code></pre>