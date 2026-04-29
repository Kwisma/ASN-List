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
- ASN-Leaseweb
- ASN-Tencent

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
  - RULE-SET,ASNLeaseweb,Proxy
  - RULE-SET,ASNTencent,Proxy

</code></pre>

## 常规配置

<pre><code class="language-javascript">
rule-providers:

  Facebookasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Facebook/Facebook_ASN.yaml"
    path: ./ruleset/Facebook_ASN.yaml
    interval: 86400
    format: yaml

  Fastlyasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Fastly/Fastly_ASN.yaml"
    path: ./ruleset/Fastly_ASN.yaml
    interval: 86400
    format: yaml

  Netflixasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Netflix/Netflix_ASN.yaml"
    path: ./ruleset/Netflix_ASN.yaml
    interval: 86400
    format: yaml

  Telegramasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Telegram/Telegram_ASN.yaml"
    path: ./ruleset/Telegram_ASN.yaml
    interval: 86400
    format: yaml

  Twitterasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Twitter/Twitter_ASN.yaml"
    path: ./ruleset/Twitter_ASN.yaml
    interval: 86400
    format: yaml

  Torasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Tor/Tor_ASN.yaml"
    path: ./ruleset/Tor_ASN.yaml
    interval: 86400
    format: yaml

  Googleasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Google/Google_ASN.yaml"
    path: ./ruleset/Google_ASN.yaml
    interval: 86400
    format: yaml

  Amazonasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Amazon/Amazon_ASN.yaml"
    path: ./ruleset/Amazon_ASN.yaml
    interval: 86400
    format: yaml

  Cloudflareasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Cloudflare/Cloudflare_ASN.yaml"
    path: ./ruleset/Cloudflare_ASN.yaml
    interval: 86400
    format: yaml

  Microsoftasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Microsoft/Microsoft_ASN.yaml"
    path: ./ruleset/Microsoft_ASN.yaml
    interval: 86400
    format: yaml

  Alibabaasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Alibaba/Alibaba_ASN.yaml"
    path: ./ruleset/Alibaba_ASN.yaml
    interval: 86400
    format: yaml

  Leasewebasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Leaseweb/Leaseweb_ASN.yaml"
    path: ./ruleset/Leaseweb_ASN.yaml
    interval: 86400
    format: yaml

  Tencentasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Tencent/Tencent_ASN.yaml"
    path: ./ruleset/Tencent_ASN.yaml
    interval: 86400
    format: yaml

</code></pre>

## 高级配置ASN

<pre><code class="language-javascript">
rule-providers:

  Facebookasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Facebook/Facebook_ASN.yaml"
    path: ./ruleset/Facebook_ASN.yaml

  Fastlyasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Fastly/Fastly_ASN.yaml"
    path: ./ruleset/Fastly_ASN.yaml

  Netflixasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Netflix/Netflix_ASN.yaml"
    path: ./ruleset/Netflix_ASN.yaml

  Telegramasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Telegram/Telegram_ASN.yaml"
    path: ./ruleset/Telegram_ASN.yaml

  Twitterasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Twitter/Twitter_ASN.yaml"
    path: ./ruleset/Twitter_ASN.yaml

  Torasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Tor/Tor_ASN.yaml"
    path: ./ruleset/Tor_ASN.yaml

  Googleasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Google/Google_ASN.yaml"
    path: ./ruleset/Google_ASN.yaml

  Amazonasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Amazon/Amazon_ASN.yaml"
    path: ./ruleset/Amazon_ASN.yaml

  Cloudflareasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Cloudflare/Cloudflare_ASN.yaml"
    path: ./ruleset/Cloudflare_ASN.yaml

  Microsoftasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Microsoft/Microsoft_ASN.yaml"
    path: ./ruleset/Microsoft_ASN.yaml

  Alibabaasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Alibaba/Alibaba_ASN.yaml"
    path: ./ruleset/Alibaba_ASN.yaml

  Leasewebasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Leaseweb/Leaseweb_ASN.yaml"
    path: ./ruleset/Leaseweb_ASN.yaml

  Tencentasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Tencent/Tencent_ASN.yaml"
    path: ./ruleset/Tencent_ASN.yaml

</code></pre>

## 高级配置CIDR

<pre><code class="language-javascript">
rule-providers:

  Facebookcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Facebook/Facebook_IP.yaml"
    path: ./ruleset/Facebook_IP.yaml

  Fastlycidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Fastly/Fastly_IP.yaml"
    path: ./ruleset/Fastly_IP.yaml

  Netflixcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Netflix/Netflix_IP.yaml"
    path: ./ruleset/Netflix_IP.yaml

  Telegramcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Telegram/Telegram_IP.yaml"
    path: ./ruleset/Telegram_IP.yaml

  Twittercidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Twitter/Twitter_IP.yaml"
    path: ./ruleset/Twitter_IP.yaml

  Torcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Tor/Tor_IP.yaml"
    path: ./ruleset/Tor_IP.yaml

  Googlecidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Google/Google_IP.yaml"
    path: ./ruleset/Google_IP.yaml

  Amazoncidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Amazon/Amazon_IP.yaml"
    path: ./ruleset/Amazon_IP.yaml

  Cloudflarecidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Cloudflare/Cloudflare_IP.yaml"
    path: ./ruleset/Cloudflare_IP.yaml

  Microsoftcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Microsoft/Microsoft_IP.yaml"
    path: ./ruleset/Microsoft_IP.yaml

  Alibabacidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Alibaba/Alibaba_IP.yaml"
    path: ./ruleset/Alibaba_IP.yaml

  Leasewebcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Leaseweb/Leaseweb_IP.yaml"
    path: ./ruleset/Leaseweb_IP.yaml

  Tencentcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Tencent/Tencent_IP.yaml"
    path: ./ruleset/Tencent_IP.yaml

</code></pre>