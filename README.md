# ASN-List

实时更新的 ASN 和 IP 数据库。
data 目录ASN如下：

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