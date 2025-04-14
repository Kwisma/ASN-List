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
- ASN-Alibaba

## 特征

- 每日自动更新
- 可靠且准确的来源

## 在代理应用中使用

## mihomo规则

<pre><code class="language-javascript">
rules:
  - RULE-SET,ASNFacebook,Proxy
  - RULE-SET,ASNFastly,Proxy
  - RULE-SET,ASNNetflix,Proxy
  - RULE-SET,ASNTelegram,Proxy
  - RULE-SET,ASNTwitter,Proxy
  - RULE-SET,ASNTor,Proxy
  - RULE-SET,ASNGoogle,Proxy
  - RULE-SET,ASNAmazon,Proxy
  - RULE-SET,ASNCloudflare,Proxy
  - RULE-SET,ASNMicrosoft,Proxy
  - RULE-SET,ASNAlibaba,Proxy

</code></pre>

## 常规配置

<pre><code class="language-javascript">
rule-providers:

  ASNFacebook:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Facebook/ASN.Facebook.yaml"
    path: ./ruleset/ASN.Facebook.yaml
    interval: 86400
    format: yaml

  ASNFastly:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Fastly/ASN.Fastly.yaml"
    path: ./ruleset/ASN.Fastly.yaml
    interval: 86400
    format: yaml

  ASNNetflix:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Netflix/ASN.Netflix.yaml"
    path: ./ruleset/ASN.Netflix.yaml
    interval: 86400
    format: yaml

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

  ASNTor:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Tor/ASN.Tor.yaml"
    path: ./ruleset/ASN.Tor.yaml
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

  ASNCloudflare:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Cloudflare/ASN.Cloudflare.yaml"
    path: ./ruleset/ASN.Cloudflare.yaml
    interval: 86400
    format: yaml

  ASNMicrosoft:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Microsoft/ASN.Microsoft.yaml"
    path: ./ruleset/ASN.Microsoft.yaml
    interval: 86400
    format: yaml

  ASNAlibaba:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Alibaba/ASN.Alibaba.yaml"
    path: ./ruleset/ASN.Alibaba.yaml
    interval: 86400
    format: yaml

</code></pre>

## 高级配置ASN

<pre><code class="language-javascript">
rule-providers:

  ASNFacebook:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Facebook/ASN.Facebook.yaml"
    path: ./ruleset/ASN.Facebook.yaml

  ASNFastly:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Fastly/ASN.Fastly.yaml"
    path: ./ruleset/ASN.Fastly.yaml

  ASNNetflix:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Netflix/ASN.Netflix.yaml"
    path: ./ruleset/ASN.Netflix.yaml

  ASNTelegram:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Telegram/ASN.Telegram.yaml"
    path: ./ruleset/ASN.Telegram.yaml

  ASNTwitter:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Twitter/ASN.Twitter.yaml"
    path: ./ruleset/ASN.Twitter.yaml

  ASNTor:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Tor/ASN.Tor.yaml"
    path: ./ruleset/ASN.Tor.yaml

  ASNGoogle:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Google/ASN.Google.yaml"
    path: ./ruleset/ASN.Google.yaml

  ASNAmazon:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Amazon/ASN.Amazon.yaml"
    path: ./ruleset/ASN.Amazon.yaml

  ASNCloudflare:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Cloudflare/ASN.Cloudflare.yaml"
    path: ./ruleset/ASN.Cloudflare.yaml

  ASNMicrosoft:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Microsoft/ASN.Microsoft.yaml"
    path: ./ruleset/ASN.Microsoft.yaml

  ASNAlibaba:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Alibaba/ASN.Alibaba.yaml"
    path: ./ruleset/ASN.Alibaba.yaml

</code></pre>

## 高级配置CIDR

<pre><code class="language-javascript">
rule-providers:

  Facebookcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Facebook/CIDR.Facebook.yaml"
    path: ./ruleset/Facebookcidr.yaml

  Fastlycidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Fastly/CIDR.Fastly.yaml"
    path: ./ruleset/Fastlycidr.yaml

  Netflixcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Netflix/CIDR.Netflix.yaml"
    path: ./ruleset/Netflixcidr.yaml

  Telegramcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Telegram/CIDR.Telegram.yaml"
    path: ./ruleset/Telegramcidr.yaml

  Twittercidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Twitter/CIDR.Twitter.yaml"
    path: ./ruleset/Twittercidr.yaml

  Torcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Tor/CIDR.Tor.yaml"
    path: ./ruleset/Torcidr.yaml

  Googlecidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Google/CIDR.Google.yaml"
    path: ./ruleset/Googlecidr.yaml

  Amazoncidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Amazon/CIDR.Amazon.yaml"
    path: ./ruleset/Amazoncidr.yaml

  Cloudflarecidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Cloudflare/CIDR.Cloudflare.yaml"
    path: ./ruleset/Cloudflarecidr.yaml

  Microsoftcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Microsoft/CIDR.Microsoft.yaml"
    path: ./ruleset/Microsoftcidr.yaml

  Alibabacidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Alibaba/CIDR.Alibaba.yaml"
    path: ./ruleset/Alibabacidr.yaml

</code></pre>