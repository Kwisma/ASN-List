
# ASN-List
    
实时更新 VG 的 ASN 和 IP 数据库。
    
## 特征
    
- 每日自动更新
- 可靠且准确的来源
    
## 在代理应用中使用
    
mihomo(clash.meta)
   
<pre><code class="language-javascript">
rule-providers:
  ASNVG:
  type: http
  behavior: classical
  url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/VG/ASN.VG.yaml"
  path: ./ruleset/ASN.VG.yaml
  interval: 86400
  format: yaml
</code></pre>

或者

<pre><code class="language-javascript">
rule-providers:
  ASNVG:
  <<: *classical
  url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/VG/ASN.VG.yaml"
  path: ./ruleset/ASN.VG.yaml
</code></pre>
    
Surge
    
<pre><code class="language-javascript">
[Rule]
# > VG ASN List
RULE-SET, https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/VG/ASN.VG.list, Direct
</code></pre>
    
Quantumult X
    
<pre><code class="language-javascript">
[filter_remote]
# VG ASN List
https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/VG/ASN.VG.list, tag=VGASN, force-policy=direct, update-interval=86400, opt-parser=true, enabled=true
</code></pre>
