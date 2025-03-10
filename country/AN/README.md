
    # ASN-List
    
    实时更新 AN 的 ASN 和 IP 数据库。
    
    ## 特征
    
    - 每日自动更新
    - 可靠且准确的来源
    
    ## 在代理应用中使用
    
    mihomo(clash.meta)
   
    <pre><code class="language-javascript">
    rule-providers:
      ASNAN:
        type: http
        behavior: classical
        url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AN/ASN.AN.yaml"
        path: ./ruleset/ASN.AN.yaml
        interval: 86400
        format: yaml
    </code></pre>

    或者

    <pre><code class="language-javascript">
    rule-providers:
      ASNAN:
        <<: *classical
        url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AN/ASN.AN.yaml"
        path: ./ruleset/ASN.AN.yaml
    </code></pre>
    
    Surge
    
    <pre><code class="language-javascript">
    [Rule]
    # > AN ASN List
    RULE-SET, https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AN/ASN.AN.list, Direct
    </code></pre>
    
    Quantumult X
    
    <pre><code class="language-javascript">
    [filter_remote]
    # AN ASN List
    https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AN/ASN.AN.list, tag=ANASN, force-policy=direct, update-interval=86400, opt-parser=true, enabled=true
    </code></pre>
    