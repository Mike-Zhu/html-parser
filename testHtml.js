// const { tokenizer, parser, toText } = require("./src")
const { tag, many, delNotes, addEndTag } = require("./utils")
const util = require('util')
let lispStr = `<div class="s_tab" id="s_tab"><div class="s_tab_inner"><b>网页</b><a href="https://www.baidu.com/s?rtt=1&amp;bsst=1&amp;cl=2&amp;tn=news&amp;word=%E6%AD%A3%E5%88%99%E5%8C%B9%E9%85%8D%E6%B1%89%E5%AD%97" wdfield="word" onmousedown="return c({'fm':'tab','tab':'news'})" sync="true">资讯</a>
<a href="/sf/vsearch?pd=video&amp;tn=vsearch&amp;lid=a72a379200007ac4&amp;ie=utf-8&amp;wd=%E6%AD%A3%E5%88%99%E5%8C%B9%E9%85%8D%E6%B1%89%E5%AD%97&amp;rsv_spt=7&amp;rsv_bp=1&amp;f=8&amp;oq=%E6%AD%A3%E5%88%99%E5%8C%B9%E9%85%8D%E6%B1%89%E5%AD%97&amp;rsv_pq=a72a379200007ac4&amp;rsv_t=76cb4JUMew1DK7VSui9vSLyfUUKL1ETU12jh5kKZ78KjAmmdLXbokaE9n2E" onmousedown="return c({'fm':'tab','tab':'video'})">视频</a>
<a href="http://image.baidu.com/i?tn=baiduimage&amp;ps=1&amp;ct=201326592&amp;lm=-1&amp;cl=2&amp;nc=1&amp;ie=utf-8&amp;word=%E6%AD%A3%E5%88%99%E5%8C%B9%E9%85%8D%E6%B1%89%E5%AD%97" wdfield="word" onmousedown="return c({'fm':'tab','tab':'pic'})">图片</a>
<a href="http://zhidao.baidu.com/q?ct=17&amp;pn=0&amp;tn=ikaslist&amp;rn=10&amp;fr=wwwt&amp;word=%E6%AD%A3%E5%88%99%E5%8C%B9%E9%85%8D%E6%B1%89%E5%AD%97" wdfield="word" onmousedown="return c({'fm':'tab','tab':'zhidao'})">知道</a>
<a href="http://wenku.baidu.com/search?lm=0&amp;od=0&amp;ie=utf-8&amp;word=%E6%AD%A3%E5%88%99%E5%8C%B9%E9%85%8D%E6%B1%89%E5%AD%97" wdfield="word" onmousedown="return c({'fm':'tab','tab':'wenku'})">文库</a>
<a href="http://tieba.baidu.com/f?fr=wwwt&amp;kw=%E6%AD%A3%E5%88%99%E5%8C%B9%E9%85%8D%E6%B1%89%E5%AD%97" wdfield="kw" onmousedown="return c({'fm':'tab','tab':'tieba'})">贴吧</a>
<a href="https://b2b.baidu.com/s?fr=wwwt&amp;q=%E6%AD%A3%E5%88%99%E5%8C%B9%E9%85%8D%E6%B1%89%E5%AD%97" wdfield="q" onmousedown="return c({'fm':'tab','tab':'b2b'})">采购</a>
<a href="http://map.baidu.com/m?fr=ps01000&amp;word=%E6%AD%A3%E5%88%99%E5%8C%B9%E9%85%8D%E6%B1%89%E5%AD%97" wdfield="word" onmousedown="return c({'fm':'tab','tab':'map'})">地图</a>
<a href="http://www.baidu.com/more/" onmousedown="return c({'fm':'tab','tab':'more'})">更多</a>
</div>
</div>`
var tokenizer = (input) => {
	let notNotes = delNotes(input)
	let tagNotes = addEndTag(notNotes)
	return tag(input)
}
var code = tokenizer(lispStr)
console.log(util.inspect(code, { showHidden: false, depth: null }))
// let ast = parser(code)
// let text = toText(ast)

// console.log({ text })