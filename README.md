
# ASN-List

实时更新的 ASN 和 IP 数据库。
data 目录ASN如下：
- ASN-Telegram null
- ASN-Twitter null
- ASN-Netflix null
- ASN-Microsoft null
- ASN-Fastly null
- ASN-Tor null
- ASN-Facebook null
- ASN-Cloudflare null
- ASN-Google null
- ASN-Amazon null

country 目录是各个国家的 ASN

## 特征

- 每日自动更新
- 可靠且准确的来源

## 在代理应用中使用

## mihomo规则

<pre><code class="language-javascript">
rules:
  - RULE-SET,ASNTelegram,Proxy
  - RULE-SET,ASNTwitter,Proxy
  - RULE-SET,ASNNetflix,Proxy
  - RULE-SET,ASNMicrosoft,Proxy
  - RULE-SET,ASNFastly,Proxy
  - RULE-SET,ASNTor,Proxy
  - RULE-SET,ASNFacebook,Proxy
  - RULE-SET,ASNCloudflare,Proxy
  - RULE-SET,ASNGoogle,Proxy
  - RULE-SET,ASNAmazon,Proxy

</code></pre>

## 常规配置

<pre><code class="language-javascript">
rule-providers:

  ASNTelegram:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Telegram/ASN.Telegram.yaml"
    path: ./ruleset/ASN.Telegram.yaml
    interval: 86400
    format: yaml

  ASNTwitter:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Twitter/ASN.Twitter.yaml"
    path: ./ruleset/ASN.Twitter.yaml
    interval: 86400
    format: yaml

  ASNNetflix:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Netflix/ASN.Netflix.yaml"
    path: ./ruleset/ASN.Netflix.yaml
    interval: 86400
    format: yaml

  ASNMicrosoft:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Microsoft/ASN.Microsoft.yaml"
    path: ./ruleset/ASN.Microsoft.yaml
    interval: 86400
    format: yaml

  ASNFastly:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Fastly/ASN.Fastly.yaml"
    path: ./ruleset/ASN.Fastly.yaml
    interval: 86400
    format: yaml

  ASNTor:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Tor/ASN.Tor.yaml"
    path: ./ruleset/ASN.Tor.yaml
    interval: 86400
    format: yaml

  ASNFacebook:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Facebook/ASN.Facebook.yaml"
    path: ./ruleset/ASN.Facebook.yaml
    interval: 86400
    format: yaml

  ASNCloudflare:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Cloudflare/ASN.Cloudflare.yaml"
    path: ./ruleset/ASN.Cloudflare.yaml
    interval: 86400
    format: yaml

  ASNGoogle:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Google/ASN.Google.yaml"
    path: ./ruleset/ASN.Google.yaml
    interval: 86400
    format: yaml

  ASNAmazon:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Amazon/ASN.Amazon.yaml"
    path: ./ruleset/ASN.Amazon.yaml
    interval: 86400
    format: yaml

</code></pre>

# 高级配置

<pre><code class="language-javascript">
rule-providers:

  ASNTelegram:
    <<: *classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Telegram/ASN.Telegram.yaml"
    path: ./ruleset/ASN.Telegram.yaml

  ASNTwitter:
    <<: *classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Twitter/ASN.Twitter.yaml"
    path: ./ruleset/ASN.Twitter.yaml

  ASNNetflix:
    <<: *classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Netflix/ASN.Netflix.yaml"
    path: ./ruleset/ASN.Netflix.yaml

  ASNMicrosoft:
    <<: *classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Microsoft/ASN.Microsoft.yaml"
    path: ./ruleset/ASN.Microsoft.yaml

  ASNFastly:
    <<: *classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Fastly/ASN.Fastly.yaml"
    path: ./ruleset/ASN.Fastly.yaml

  ASNTor:
    <<: *classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Tor/ASN.Tor.yaml"
    path: ./ruleset/ASN.Tor.yaml

  ASNFacebook:
    <<: *classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Facebook/ASN.Facebook.yaml"
    path: ./ruleset/ASN.Facebook.yaml

  ASNCloudflare:
    <<: *classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Cloudflare/ASN.Cloudflare.yaml"
    path: ./ruleset/ASN.Cloudflare.yaml

  ASNGoogle:
    <<: *classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Google/ASN.Google.yaml"
    path: ./ruleset/ASN.Google.yaml

  ASNAmazon:
    <<: *classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Amazon/ASN.Amazon.yaml"
    path: ./ruleset/ASN.Amazon.yaml

</code></pre>
        