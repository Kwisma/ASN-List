
# ASN-List
    
实时更新 ZW 的 ASN 和 IP 数据库。
    
## 特征
    
- 每日自动更新
- 可靠且准确的来源
    
## 在代理应用中使用
    
mihomo(clash.meta)
   
<pre><code class="language-javascript">
rule-providers:
  ASNZW:
  type: http
  behavior: classical
  url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/ZW/ASN.ZW.yaml"
  path: ./ruleset/ASN.ZW.yaml
  interval: 86400
  format: yaml
</code></pre>

或者

<pre><code class="language-javascript">
rule-providers:
  ASNZW:
  <<: *classical
  url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/ZW/ASN.ZW.yaml"
  path: ./ruleset/ASN.ZW.yaml
</code></pre>
    
Surge
    
<pre><code class="language-javascript">
[Rule]
# > ZW ASN List
RULE-SET, https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/ZW/ASN.ZW.list, Direct
</code></pre>
    
Quantumult X
    
<pre><code class="language-javascript">
[filter_remote]
# ZW ASN List
https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/ZW/ASN.ZW.list, tag=ZWASN, force-policy=direct, update-interval=86400, opt-parser=true, enabled=true
</code></pre>
