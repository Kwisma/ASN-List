
# ASN-List
    
实时更新 QA 的 ASN 和 IP 数据库。
    
## 特征
    
- 每日自动更新
- 可靠且准确的来源
    
## 在代理应用中使用
    
mihomo(clash.meta)
   
<pre><code class="language-javascript">
rule-providers:
  ASNQA:
  type: http
  behavior: classical
  url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/QA/ASN.QA.yaml"
  path: ./ruleset/ASN.QA.yaml
  interval: 86400
  format: yaml
</code></pre>

或者

<pre><code class="language-javascript">
rule-providers:
  ASNQA:
  <<: *classical
  url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/QA/ASN.QA.yaml"
  path: ./ruleset/ASN.QA.yaml
</code></pre>
    
Surge
    
<pre><code class="language-javascript">
[Rule]
# > QA ASN List
RULE-SET, https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/QA/ASN.QA.list, Direct
</code></pre>
    
Quantumult X
    
<pre><code class="language-javascript">
[filter_remote]
# QA ASN List
https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/QA/ASN.QA.list, tag=QAASN, force-policy=direct, update-interval=86400, opt-parser=true, enabled=true
</code></pre>
