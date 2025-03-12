
# ASN-List
    
实时更新 IT 的 ASN 和 IP 数据库。
    
## 特征
    
- 每日自动更新
- 可靠且准确的来源
    
## 在代理应用中使用
    
mihomo(clash.meta)
   
<pre><code class="language-javascript">
rule-providers:
  ASNIT:
  type: http
  behavior: classical
  url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IT/ASN.IT.yaml"
  path: ./ruleset/ASN.IT.yaml
  interval: 86400
  format: yaml
</code></pre>

或者

<pre><code class="language-javascript">
rule-providers:
  ASNIT:
  <<: *classical
  url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IT/ASN.IT.yaml"
  path: ./ruleset/ASN.IT.yaml
</code></pre>
    
Surge
    
<pre><code class="language-javascript">
[Rule]
# > IT ASN List
RULE-SET, https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IT/ASN.IT.list, Direct
</code></pre>
    
Quantumult X
    
<pre><code class="language-javascript">
[filter_remote]
# IT ASN List
https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IT/ASN.IT.list, tag=ITASN, force-policy=direct, update-interval=86400, opt-parser=true, enabled=true
</code></pre>
