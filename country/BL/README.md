
    # ASN-List
    
    实时更新 BL 的 ASN 和 IP 数据库。
    
    ## 特征
    
    - 每日自动更新
    - 可靠且准确的来源
    
    ## 在代理应用中使用
    
    mihomo(clash.meta)
   
    <pre><code class="language-javascript">
    rule-providers:
      ASNBL:
        type: http
        behavior: classical
        url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BL/ASN.BL.yaml"
        path: ./ruleset/ASN.BL.yaml
        interval: 86400
        format: yaml
    </code></pre>

    或者

    <pre><code class="language-javascript">
    rule-providers:
      ASNBL:
        <<: *classical
        url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BL/ASN.BL.yaml"
        path: ./ruleset/ASN.BL.yaml
    </code></pre>
    
    Surge
    
    <pre><code class="language-javascript">
    [Rule]
    # > BL ASN List
    RULE-SET, https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BL/ASN.BL.list, Direct
    </code></pre>
    
    Quantumult X
    
    <pre><code class="language-javascript">
    [filter_remote]
    # BL ASN List
    https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BL/ASN.BL.list, tag=BLASN, force-policy=direct, update-interval=86400, opt-parser=true, enabled=true
    </code></pre>
    