
    # ASN-List
    
    实时更新 MQ 的 ASN 和 IP 数据库。
    
    ## 特征
    
    - 每日自动更新
    - 可靠且准确的来源
    
    ## 在代理应用中使用
    
    mihomo(clash.meta)
   
    <pre><code class="language-javascript">
    rule-providers:
      ASNMQ:
        type: http
        behavior: classical
        url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MQ/ASN.MQ.yaml"
        path: ./ruleset/ASN.MQ.yaml
        interval: 86400
        format: yaml
    </code></pre>

    或者

    <pre><code class="language-javascript">
    rule-providers:
      ASNMQ:
        <<: *classical
        url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MQ/ASN.MQ.yaml"
        path: ./ruleset/ASN.MQ.yaml
    </code></pre>
    
    Surge
    
    <pre><code class="language-javascript">
    [Rule]
    # > MQ ASN List
    RULE-SET, https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MQ/ASN.MQ.list, Direct
    </code></pre>
    
    Quantumult X
    
    <pre><code class="language-javascript">
    [filter_remote]
    # MQ ASN List
    https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MQ/ASN.MQ.list, tag=MQASN, force-policy=direct, update-interval=86400, opt-parser=true, enabled=true
    </code></pre>
    