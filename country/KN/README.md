
    # ASN-List
    
    实时更新 KN 的 ASN 和 IP 数据库。
    
    ## 特征
    
    - 每日自动更新
    - 可靠且准确的来源
    
    ## 在代理应用中使用
    
    mihomo(clash.meta)
   
    <pre><code class="language-javascript">
    rule-providers:
      ASNKN:
        type: http
        behavior: classical
        url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/KN/ASN.KN.yaml"
        path: ./ruleset/ASN.KN.yaml
        interval: 86400
        format: yaml
    </code></pre>

    或者

    <pre><code class="language-javascript">
    rule-providers:
      ASNKN:
        <<: *classical
        url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/KN/ASN.KN.yaml"
        path: ./ruleset/ASN.KN.yaml
    </code></pre>
    
    Surge
    
    <pre><code class="language-javascript">
    [Rule]
    # > KN ASN List
    RULE-SET, https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/KN/ASN.KN.list, Direct
    </code></pre>
    
    Quantumult X
    
    <pre><code class="language-javascript">
    [filter_remote]
    # KN ASN List
    https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/KN/ASN.KN.list, tag=KNASN, force-policy=direct, update-interval=86400, opt-parser=true, enabled=true
    </code></pre>
    