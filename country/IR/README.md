
    # ASN-List
    
    实时更新 IR 的 ASN 和 IP 数据库。
    
    ## 特征
    
    - 每日自动更新
    - 可靠且准确的来源
    
    ## 在代理应用中使用
    
    mihomo(clash.meta)
   
    <pre><code class="language-javascript">
    rule-providers:
      ASNIR:
        type: http
        behavior: classical
        url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IR/ASN.IR.yaml"
        path: ./ruleset/ASN.IR.yaml
        interval: 86400
        format: yaml
    </code></pre>

    或者

    <pre><code class="language-javascript">
    rule-providers:
      ASNIR:
        <<: *classical
        url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IR/ASN.IR.yaml"
        path: ./ruleset/ASN.IR.yaml
    </code></pre>
    
    Surge
    
    <pre><code class="language-javascript">
    [Rule]
    # > IR ASN List
    RULE-SET, https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IR/ASN.IR.list, Direct
    </code></pre>
    
    Quantumult X
    
    <pre><code class="language-javascript">
    [filter_remote]
    # IR ASN List
    https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IR/ASN.IR.list, tag=IRASN, force-policy=direct, update-interval=86400, opt-parser=true, enabled=true
    </code></pre>
    