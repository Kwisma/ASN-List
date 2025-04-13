
# ASN-List
    
实时更新 VE 的 ASN 和 IP 数据库。
    
## 特征
    
- 每日自动更新
- 可靠且准确的来源
    
## 在代理应用中使用
    
mihomo(clash.meta)
   
<pre><code class="language-javascript">
rule-providers:
  ASNVE:
  type: http
  behavior: classical
  url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/VE/ASN.VE.yaml"
  path: ./ruleset/ASN.VE.yaml
  interval: 86400
  format: yaml
</code></pre>

或者

<pre><code class="language-javascript">
rule-providers:
  ASNVE:
  <<: *classical
  url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/VE/ASN.VE.yaml"
  path: ./ruleset/ASN.VE.yaml
</code></pre>
    
Surge
    
<pre><code class="language-javascript">
[Rule]
# > VE ASN List
RULE-SET, https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/VE/ASN.VE.list, Direct
</code></pre>
    
Quantumult X
    
<pre><code class="language-javascript">
[filter_remote]
# VE ASN List
https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/VE/ASN.VE.list, tag=VEASN, force-policy=direct, update-interval=86400, opt-parser=true, enabled=true
</code></pre>
