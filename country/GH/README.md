
# ASN-List
    
实时更新 GH 的 ASN 和 IP 数据库。
    
## 特征
    
- 每日自动更新
- 可靠且准确的来源
    
## 在代理应用中使用
    
mihomo(clash.meta)
   
<pre><code class="language-javascript">
rule-providers:
  ASNGH:
  type: http
  behavior: classical
  url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GH/ASN.GH.yaml"
  path: ./ruleset/ASN.GH.yaml
  interval: 86400
  format: yaml
</code></pre>

或者

<pre><code class="language-javascript">
rule-providers:
  ASNGH:
  <<: *classical
  url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GH/ASN.GH.yaml"
  path: ./ruleset/ASN.GH.yaml
</code></pre>
    
Surge
    
<pre><code class="language-javascript">
[Rule]
# > GH ASN List
RULE-SET, https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GH/ASN.GH.list, Direct
</code></pre>
    
Quantumult X
    
<pre><code class="language-javascript">
[filter_remote]
# GH ASN List
https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GH/ASN.GH.list, tag=GHASN, force-policy=direct, update-interval=86400, opt-parser=true, enabled=true
</code></pre>
