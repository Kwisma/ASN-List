
# ASN-List

实时更新 Telegram 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  Telegramasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Telegram/Telegram_ASN.yaml"
    path: ./ruleset/Telegram_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Telegramasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Telegram/Telegram_ASN.yaml"
    path: ./ruleset/Telegram_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Telegramcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Telegram/Telegram_IP.yaml"
    path: ./ruleset/Telegram_IP.yaml
</code></pre>