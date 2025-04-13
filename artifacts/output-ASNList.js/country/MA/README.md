
# ASN-List
    
实时更新 MA 的 ASN 和 IP 数据库。
    
## 特征
    
- 每日自动更新
- 可靠且准确的来源
    
## 在代理应用中使用
    
mihomo(clash.meta)
   
<pre><code class="language-javascript">
rule-providers:
  ASNMA:
  type: http
  behavior: classical
  url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MA/ASN.MA.yaml"
  path: ./ruleset/ASN.MA.yaml
  interval: 86400
  format: yaml
</code></pre>

或者

<pre><code class="language-javascript">
rule-providers:
  ASNMA:
  <<: *classical
  url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MA/ASN.MA.yaml"
  path: ./ruleset/ASN.MA.yaml
</code></pre>
    
Surge
    
<pre><code class="language-javascript">
[Rule]
# > MA ASN List
RULE-SET, https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MA/ASN.MA.list, Direct
</code></pre>
    
Quantumult X
    
<pre><code class="language-javascript">
[filter_remote]
# MA ASN List
https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MA/ASN.MA.list, tag=MAASN, force-policy=direct, update-interval=86400, opt-parser=true, enabled=true
</code></pre>
