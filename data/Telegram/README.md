
# ASN-List

实时更新 Telegram 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNTelegram:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Telegram/ASN.Telegram.yaml"
    path: ./ruleset/ASN.Telegram.yaml
    interval: 86400
    format: yaml
</code></pre>