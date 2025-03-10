
    # ASN-List
    
    实时更新 UK 的 ASN 和 IP 数据库。
    
    ## 特征
    
    - 每日自动更新
    - 可靠且准确的来源
    
    ## 在代理应用中使用
    
    mihomo(clash.meta)
   
    <pre><code class="language-javascript">
    rule-providers:
      ASNUK:
        type: http
        behavior: classical
        url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/UK/ASN.UK.yaml"
        path: ./ruleset/ASN.UK.yaml
        interval: 86400
        format: yaml
    </code></pre>

    或者

    <pre><code class="language-javascript">
    rule-providers:
      ASNUK:
        <<: *classical
        url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/UK/ASN.UK.yaml"
        path: ./ruleset/ASN.UK.yaml
    </code></pre>
    
    Surge
    
    <pre><code class="language-javascript">
    [Rule]
    # > UK ASN List
    RULE-SET, https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/UK/ASN.UK.list, Direct
    </code></pre>
    
    Quantumult X
    
    <pre><code class="language-javascript">
    [filter_remote]
    # UK ASN List
    https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/UK/ASN.UK.list, tag=UKASN, force-policy=direct, update-interval=86400, opt-parser=true, enabled=true
    </code></pre>
    