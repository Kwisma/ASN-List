
# ASN-List
    
实时更新 CR 的 ASN 和 IP 数据库。
    
## 特征
    
- 每日自动更新
- 可靠且准确的来源
    
## 在代理应用中使用
    
mihomo(clash.meta)
   
<pre><code class="language-javascript">
rule-providers:
  ASNCR:
  type: http
  behavior: classical
  url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CR/ASN.CR.yaml"
  path: ./ruleset/ASN.CR.yaml
  interval: 86400
  format: yaml
</code></pre>

或者

<pre><code class="language-javascript">
rule-providers:
  ASNCR:
  <<: *classical
  url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CR/ASN.CR.yaml"
  path: ./ruleset/ASN.CR.yaml
</code></pre>
    
Surge
    
<pre><code class="language-javascript">
[Rule]
# > CR ASN List
RULE-SET, https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CR/ASN.CR.list, Direct
</code></pre>
    
Quantumult X
    
<pre><code class="language-javascript">
[filter_remote]
# CR ASN List
https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CR/ASN.CR.list, tag=CRASN, force-policy=direct, update-interval=86400, opt-parser=true, enabled=true
</code></pre>
