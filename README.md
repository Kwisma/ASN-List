
# ASN-List

实时更新的 ASN 和 IP 数据库。
data 目录ASN如下：
- ASN-Facebook
- ASN-Fastly
- ASN-Netflix
- ASN-Telegram
- ASN-Twitter
- ASN-Tor
- ASN-Google
- ASN-Amazon
- ASN-Cloudflare
- ASN-Microsoft

country 目录是各个国家的 ASN

## 特征

- 每日自动更新
- 可靠且准确的来源

## 在代理应用中使用
## 常规配置

<pre><code class="language-javascript">
rule-providers:
  ASNFacebook:
    type: http
    behavior: classical
    url: https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Facebook/ASN.Facebook.yaml
    path: ./ruleset/ASN.Facebook.yaml
    interval: 86400
    format: yaml
  ASNFastly:
    type: http
    behavior: classical
    url: https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Fastly/ASN.Fastly.yaml
    path: ./ruleset/ASN.Fastly.yaml
    interval: 86400
    format: yaml
  ASNNetflix:
    type: http
    behavior: classical
    url: https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Netflix/ASN.Netflix.yaml
    path: ./ruleset/ASN.Netflix.yaml
    interval: 86400
    format: yaml
  ASNTelegram:
    type: http
    behavior: classical
    url: https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Telegram/ASN.Telegram.yaml
    path: ./ruleset/ASN.Telegram.yaml
    interval: 86400
    format: yaml
  ASNTwitter:
    type: http
    behavior: classical
    url: https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Twitter/ASN.Twitter.yaml
    path: ./ruleset/ASN.Twitter.yaml
    interval: 86400
    format: yaml
  ASNTor:
    type: http
    behavior: classical
    url: https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Tor/ASN.Tor.yaml
    path: ./ruleset/ASN.Tor.yaml
    interval: 86400
    format: yaml
  ASNGoogle:
    type: http
    behavior: classical
    url: https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Google/ASN.Google.yaml
    path: ./ruleset/ASN.Google.yaml
    interval: 86400
    format: yaml
  ASNAmazon:
    type: http
    behavior: classical
    url: https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Amazon/ASN.Amazon.yaml
    path: ./ruleset/ASN.Amazon.yaml
    interval: 86400
    format: yaml
  ASNCloudflare:
    type: http
    behavior: classical
    url: https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Cloudflare/ASN.Cloudflare.yaml
    path: ./ruleset/ASN.Cloudflare.yaml
    interval: 86400
    format: yaml
  ASNMicrosoft:
    type: http
    behavior: classical
    url: https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Microsoft/ASN.Microsoft.yaml
    path: ./ruleset/ASN.Microsoft.yaml
    interval: 86400
    format: yaml

</code></pre>

# 高级配置

<pre><code class="language-javascript">
rule-providers:
  ASNFacebook:
    <<: *classical
    url: https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Facebook/ASN.Facebook.yaml
    path: ./ruleset/ASN.Facebook.yaml
  ASNFastly:
    <<: *classical
    url: https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Fastly/ASN.Fastly.yaml
    path: ./ruleset/ASN.Fastly.yaml
  ASNNetflix:
    <<: *classical
    url: https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Netflix/ASN.Netflix.yaml
    path: ./ruleset/ASN.Netflix.yaml
  ASNTelegram:
    <<: *classical
    url: https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Telegram/ASN.Telegram.yaml
    path: ./ruleset/ASN.Telegram.yaml
  ASNTwitter:
    <<: *classical
    url: https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Twitter/ASN.Twitter.yaml
    path: ./ruleset/ASN.Twitter.yaml
  ASNTor:
    <<: *classical
    url: https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Tor/ASN.Tor.yaml
    path: ./ruleset/ASN.Tor.yaml
  ASNGoogle:
    <<: *classical
    url: https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Google/ASN.Google.yaml
    path: ./ruleset/ASN.Google.yaml
  ASNAmazon:
    <<: *classical
    url: https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Amazon/ASN.Amazon.yaml
    path: ./ruleset/ASN.Amazon.yaml
  ASNCloudflare:
    <<: *classical
    url: https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Cloudflare/ASN.Cloudflare.yaml
    path: ./ruleset/ASN.Cloudflare.yaml
  ASNMicrosoft:
    <<: *classical
    url: https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Microsoft/ASN.Microsoft.yaml
    path: ./ruleset/ASN.Microsoft.yaml

</code></pre>
        