
    # ASN-List
    
    实时更新 NP 的 ASN 和 IP 数据库。
    
    ## 特征
    
    - 每日自动更新
    - 可靠且准确的来源
    
    ## 在代理应用中使用
    
    mihomo(clash.meta)
   
    <pre><code class="language-javascript">
    rule-providers:
      ASNNP:
        type: http
        behavior: classical
        url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NP/ASN.NP.yaml"
        path: ./ruleset/ASN.NP.yaml
        interval: 86400
        format: yaml
    </code></pre>

    或者

    <pre><code class="language-javascript">
    rule-providers:
      ASNNP:
        <<: *classical
        url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NP/ASN.NP.yaml"
        path: ./ruleset/ASN.NP.yaml
    </code></pre>
    
    Surge
    
    <pre><code class="language-javascript">
    [Rule]
    # > NP ASN List
    RULE-SET, https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NP/ASN.NP.list, Direct
    </code></pre>
    
    Quantumult X
    
    <pre><code class="language-javascript">
    [filter_remote]
    # NP ASN List
    https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NP/ASN.NP.list, tag=NPASN, force-policy=direct, update-interval=86400, opt-parser=true, enabled=true
    </code></pre>
    