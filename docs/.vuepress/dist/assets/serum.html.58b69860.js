import{_ as p,r as c,o as l,c as u,b as t,w as a,F as r,a as n,d as s}from"./app.55b1b60c.js";const i={},k=n("h1",{id:"serum",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#serum","aria-hidden":"true"},"#"),s(" Serum")],-1),d=n("p",null,"Serum\u306F\u3001Solana \u4E0A\u306B\u69CB\u7BC9\u3055\u308C\u305F\u5206\u6563\u578B\u53D6\u5F15\u6240\u306E\u30D7\u30ED\u30C8\u30B3\u30EB\u3067\u3059\u3002 Serum\u3092\u4F7F\u7528\u3057\u3066\u3001\u65B0\u3057\u3044\u5E02\u5834\u306E\u4F5C\u6210\u3001\u30AA\u30FC\u30C0\u30FC\u30D6\u30C3\u30AF\u306E\u53D6\u5F97\u3001\u53D6\u5F15\u306A\u3069\u3092\u884C\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002",-1),b=n("h2",{id:"serum\u30DE\u30FC\u30B1\u30C3\u30C8\u306E\u53D6\u5F97\u65B9\u6CD5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#serum\u30DE\u30FC\u30B1\u30C3\u30C8\u306E\u53D6\u5F97\u65B9\u6CD5","aria-hidden":"true"},"#"),s(" Serum\u30DE\u30FC\u30B1\u30C3\u30C8\u306E\u53D6\u5F97\u65B9\u6CD5")],-1),m=n("p",null,"Serum\u306E\u30DE\u30FC\u30B1\u30C3\u30C8\u306B\u306F\u3001Serum\u3067\u6CE8\u6587\u3059\u308B\u305F\u3081\u306E\u3059\u3079\u3066\u306E\u6CE8\u6587\u3068\u6A5F\u80FD\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002 Serum\u3067\u884C\u3046\u3059\u3079\u3066\u306E\u3053\u3068\u306B\u3064\u3044\u3066\u3001\u4F5C\u696D\u3057\u3066\u3044\u308B\u30DE\u30FC\u30B1\u30C3\u30C8\u3092\u77E5\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002",-1),y=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Connection"),n("span",{class:"token punctuation"},","),s(" PublicKey "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@solana/web3.js"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Market "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@project-serum/serum"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" marketAddress "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PublicKey"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" programAddress "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PublicKey"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" connection "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Connection"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"https://ssc-dao.genesysgo.net"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"confirmed"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" market "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" Market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"load"),n("span",{class:"token punctuation"},"("),s(`
    connection`),n("span",{class:"token punctuation"},","),s(`
    marketAddress`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    programAddress
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br")])],-1),w=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" market "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" Market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"load"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},","),s(" marketAddress"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" programAddress"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br")])],-1),g=n("h2",{id:"serum\u30AA\u30FC\u30BF\u3099\u30FC\u30D5\u3099\u30C3\u30AF\u306E\u5165\u624B\u65B9\u6CD5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#serum\u30AA\u30FC\u30BF\u3099\u30FC\u30D5\u3099\u30C3\u30AF\u306E\u5165\u624B\u65B9\u6CD5","aria-hidden":"true"},"#"),s(" Serum\u30AA\u30FC\u30C0\u30FC\u30D6\u30C3\u30AF\u306E\u5165\u624B\u65B9\u6CD5")],-1),f=n("p",null,"Serum\u30DE\u30FC\u30B1\u30C3\u30C8\u306F\u3001\u30D3\u30C3\u30C9\u3068\u30A2\u30B9\u30AF\u3092\u542B\u3080\u30AA\u30FC\u30C0\u30FC\u30D6\u30C3\u30AF\u3067\u69CB\u6210\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u60C5\u5831\u3092\u7167\u4F1A\u3057\u3066\u3001\u5E02\u5834\u3067\u4F55\u304C\u8D77\u3053\u3063\u3066\u3044\u308B\u304B\u3092\u78BA\u8A8D\u3057\u3001\u305D\u308C\u306B\u5FDC\u3058\u3066\u884C\u52D5\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002",-1),h=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Connection"),n("span",{class:"token punctuation"},","),s(" PublicKey "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@solana/web3.js"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Market "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@project-serum/serum"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" marketAddress "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PublicKey"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" programAddress "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PublicKey"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" connection "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Connection"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"https://ssc-dao.genesysgo.net"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"confirmed"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"let"),s(" market "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" Market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"load"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},","),s(" marketAddress"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" programAddress"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"let"),s(" bids "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadBids"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"["),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"of"),s(" bids"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getL2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"let"),s(" asks "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadAsks"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"["),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"of"),s(" asks"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getL2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br")])],-1),_=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"let"),s(" bids "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadBids"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"["),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"of"),s(" bids"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getL2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"let"),s(" asks "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadAsks"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"["),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"of"),s(" asks"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getL2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br")])],-1),v=n("h2",{id:"\u73FE\u5728\u306E\u30AA\u30FC\u30D5\u309A\u30F3\u306E\u6CE8\u6587\u3092\u53D6\u5F97\u3059\u308B\u65B9\u6CD5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u73FE\u5728\u306E\u30AA\u30FC\u30D5\u309A\u30F3\u306E\u6CE8\u6587\u3092\u53D6\u5F97\u3059\u308B\u65B9\u6CD5","aria-hidden":"true"},"#"),s(" \u73FE\u5728\u306E\u30AA\u30FC\u30D7\u30F3\u306E\u6CE8\u6587\u3092\u53D6\u5F97\u3059\u308B\u65B9\u6CD5")],-1),x=n("p",null,"\u30C8\u30EC\u30FC\u30C0\u30FC\u3068\u3057\u3066\u3001\u5E02\u5834\u3067\u73FE\u5728\u958B\u3044\u3066\u3044\u308B\u6CE8\u6587\u3092\u77E5\u308A\u305F\u3044\u3068\u601D\u3046\u3067\u3057\u3087\u3046\u3002Serum\u3092\u4F7F\u7528\u3057\u3066\u3001\u5E02\u5834\u3067\u306E\u81EA\u5206\u307E\u305F\u306F\u4ED6\u306E\u8AB0\u304B\u306E\u30AA\u30FC\u30D7\u30F3\u6CE8\u6587\u3092\u7167\u4F1A\u3067\u304D\u307E\u3059\u3002",-1),S=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Connection"),n("span",{class:"token punctuation"},","),s(" PublicKey "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@solana/web3.js"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Market "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@project-serum/serum"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" trader "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PublicKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"CuieVDEDtLo7FypA9SbLM9saXFdb1dsshEkyErMqkRQq"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" marketAddress "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PublicKey"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" programAddress "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PublicKey"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" connection "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Connection"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"https://ssc-dao.genesysgo.net"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"confirmed"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"let"),s(" market "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" Market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"load"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},","),s(" marketAddress"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" programAddress"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" orders "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadOrdersForOwner"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},","),s(" trader"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" order "),n("span",{class:"token keyword"},"of"),s(" orders"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("order"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br")])],-1),A=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" orders "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadOrdersForOwner"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},","),s(" traderPublicKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br")])],-1);function P(F,M){const e=c("SolanaCodeGroupItem"),o=c("SolanaCodeGroup");return l(),u(r,null,[k,d,b,m,t(o,null,{default:a(()=>[t(e,{title:"TS",active:""},{default:a(()=>[y]),preview:a(()=>[w]),_:1})]),_:1}),g,f,t(o,null,{default:a(()=>[t(e,{title:"TS",active:""},{default:a(()=>[h]),preview:a(()=>[_]),_:1})]),_:1}),v,x,t(o,null,{default:a(()=>[t(e,{title:"TS",active:""},{default:a(()=>[S]),preview:a(()=>[A]),_:1})]),_:1})],64)}var C=p(i,[["render",P]]);export{C as default};
