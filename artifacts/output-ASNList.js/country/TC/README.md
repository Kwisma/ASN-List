
# ASN-List
    
实时更新 TC 的 ASN 和 IP 数据库。
    
## 特征
    
- 每日自动更新
- 可靠且准确的来源
    
## 在代理应用中使用
    
mihomo(clash.meta)
   
<pre><code class="language-javascript">
rule-providers:
  ASNTC:
  type: http
  behavior: classical
  url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TC/ASN.TC.yaml"
  path: ./ruleset/ASN.TC.yaml
  interval: 86400
  format: yaml
</code></pre>

或者

<pre><code class="language-javascript">
rule-providers:
  ASNTC:
  <<: *classical
  url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TC/ASN.TC.yaml"
  path: ./ruleset/ASN.TC.yaml
</code></pre>
    
Surge
    
<pre><code class="language-javascript">
[Rule]
# > TC ASN List
RULE-SET, https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TC/ASN.TC.list, Direct
</code></pre>
    
Quantumult X
    
<pre><code class="language-javascript">
[filter_remote]
# TC ASN List
https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TC/ASN.TC.list, tag=TCASN, force-policy=direct, update-interval=86400, opt-parser=true, enabled=true
</code></pre>
