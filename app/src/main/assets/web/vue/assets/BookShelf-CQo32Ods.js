import{a2 as G,n as V,o as i,d,g as e,F as J,P as D,t as u,c as X,w as P,f as L,M as B,u as s,a3 as W,p as O,i as Z,s as j,z as S,a4 as ee,O as te,a5 as se,T as ae,k as y,e as C,A as oe,L as ne,v as M,I as ce,B as re}from"./vendor-CNdhk-0s.js";import{d as ie,u as le}from"./loading-CJtPJ5_F.js";import{_ as H,u as de,A as T}from"./index-eiEvjBAi.js";const F=a=>(O("data-v-f3c424c8"),a=a(),Z(),a),ue={class:"books-wrapper"},he={class:"wrapper"},pe=["onClick"],ve={class:"cover-img"},_e=["src"],ge={class:"info"},me={class:"name"},fe={class:"sub"},we={class:"author"},Ae={key:0,class:"tags"},Ie={key:1,class:"update-info"},ke=F(()=>e("div",{class:"dot"},"•",-1)),Be={class:"size"},Se=F(()=>e("div",{class:"dot"},"•",-1)),ye={class:"date"},Ce={key:0,class:"intro"},xe={key:1,class:"dur-chapter"},Re={class:"last-chapter"},Ee={__name:"BookItems",props:["books","isSearch"],emits:["bookClick"],setup(a,{emit:o}){G(l=>({"4876264a":s(z)}));const x=a,R=o,E=l=>R("bookClick",l),w=l=>/^data:/.test(l)?l:location.origin+"/cover?path="+encodeURIComponent(l),z=V(()=>x.isSearch?"space-between":"flex-start");return(l,n)=>{const A=W;return i(),d("div",ue,[e("div",he,[(i(!0),d(J,null,D(a.books,c=>{var m;return i(),d("div",{class:"book",key:c.bookUrl,onClick:f=>E(c)},[e("div",ve,[(i(),d("img",{class:"cover",src:w(c.coverUrl),key:c.coverUrl,alt:"",loading:"lazy"},null,8,_e))]),e("div",ge,[e("div",me,u(c.name),1),e("div",fe,[e("div",we,u(c.author),1),a.isSearch?(i(),d("div",Ae,[(i(!0),d(J,null,D((m=c.kind)==null?void 0:m.split(",").slice(0,2),f=>(i(),X(A,{key:f},{default:P(()=>[L(u(f),1)]),_:2},1024))),128))])):B("",!0),a.isSearch?B("",!0):(i(),d("div",Ie,[ke,e("div",Be,"共"+u(c.totalChapterNum)+"章",1),Se,e("div",ye,u(s(ie)(c.lastCheckTime)),1)]))]),a.isSearch?(i(),d("div",Ce,u(c.intro),1)):B("",!0),a.isSearch?B("",!0):(i(),d("div",xe," 已读："+u(c.durChapterTitle),1)),e("div",Re,"最新："+u(c.latestChapterTitle),1)])],8,pe)}),128))])])}}},ze=H(Ee,[["__scopeId","data-v-f3c424c8"]]),Me="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAECUlEQVRYR7WXTYhcRRDHq3pY9yKrYBQ8KBsjgvHgwRhiQBTjYZm4Xe8NusawhwS/o9GLoKhgBGPAgJd1NdGIXwtZTbRf9Rqzl6gHTVyDeIkIgnEOghAM6oKHzTJd0sO8Zaa338zb7NjwmJn++Ndv+lVVVyOsoM3Ozl69sLBAiHiDc26NUuoKv9w5d14p9aeI/DI4OMgjIyN/lJXFMhOttQ8BgBaR0TLzEXEGAKzW+lCv+V0BmLmGiLtF5M5eQrFxRPxaRCaI6LOi9YUAzPwGADxxMYYjayaJ6MkoZKyTmU8AwF19Mp7LfElEW0LNZTvAzIcBYFufjedy00T0QLt2B4AxZo9S6qX/yXhT1jn3cpqme3IbSwDM/DgAvNlu3Dm3Uyl1HAA2IOJ2EdleEu5Io9H4EBHPVCqVLSISRsMuInrLazUBpqamhoaGhr4TkRsDgLVpmtbzPmPMLQBwOwD4vvzxw8P5IyJztVrtVL4my7L1iPhTx7Yj/jw/P79pfHx8vgmQZdkLiPhK+O8GBgauqVarv5f819FpxpjLlVJ/hYMi8mKSJHubAMz8KwBcF1EYI6IjqwRIlFImonGWiNZhlmVVRDxWYGTVAMx8HwB8EtMXka1orT0gIo9GJrxNRLH+FW8IMx8EgEeW5QDEgx5gTkQ2Bk7yr9b60hVb6rKAmc8BwJWBne+x4P3XiWhtPwGstV9FzpSzHuBvALgsMHaaiDp2ZbUwWZZNIuKuQOcfD7AAAJeEcaq1Xr9ao+3rmdknnscCzQse4LdWEukYazQaa2q12vl+QTDztwCwOdCr+zA8iYi3RQwREdl+ADDz9QDwIwB0OLaInPJRcEhEHoyEyAmt9d39ALDW2lg1hYjv+lfgC4WJgkTxcJIkPcuqbpC+qgKATwvm7PYAGwDgdBeRZ4notYvZCWPMDqXUe13W3to8C6y10yJyv//u6zj/2R6ziPiRiBwt6xPMrBExFZEdRcYR8WOt9bb8MNoKAJ+3Jvtwed05d4dSKtz+c4h4VGsdrRWttZMici8AXFVix+4homNLBUmWZQcQMc/9x4mommXZ84i4t11MKbV5dHR06bxvH5uZmbnZOfdN6O0RmMNE1CxulgCstdeKyBcAcFPrVTyltZ4wxiSVSuXplkhda72zh9P1rClFZFOSJHMdAP5Hq3rxR6eH+IGIvIOuqFlr94nIc10WdRzxy6riAMJnr2nn3JlcME3TppMWNWvtfhF5pmB8WX0RvZgEEEtaYUUbM2KtfUdE/FUubNHipvBmZIxZp5TaDwBprlQGIHLqzSHiPq01x4B7Xk6Z2d8TfDwPlwFozfd1f90598Hi4uKrY2NjFwrzQVkP81nNi/byAWOMv8gOp2n6fhnt/wDqJrRWLmhIrwAAAABJRU5ErkJggg==",N=a=>(O("data-v-ee672f16"),a=a(),Z(),a),Te={class:"navigation-wrapper"},Ve=N(()=>e("div",{class:"navigation-title-wrapper"},[e("div",{class:"navigation-title"},"阅读"),e("div",{class:"navigation-sub-title"},"清风不识字，何故乱翻书")],-1)),Pe={class:"search-wrapper"},Le={class:"bottom-wrapper"},Ne={class:"recent-wrapper"},be=N(()=>e("div",{class:"recent-title"},"最近阅读",-1)),Je={class:"reading-recent"},De={class:"setting-wrapper"},We=N(()=>e("div",{class:"setting-title"},"基本设定",-1)),Oe={class:"setting-item"},Ze={class:"bottom-icons"},He={href:"https://github.com/gedoor/legado_web_bookshelf",target:"_blank"},Fe={class:"bottom-icon"},Ke=["src"],Ye={__name:"BookShelf",setup(a){const o=de(),{connectStatus:x,connectType:R,newConnect:E,shelf:w}=j(o),z=V(()=>o.config.theme),l=V(()=>z.value==6),n=S({name:"尚无阅读记录",author:"",url:"",chapterIndex:0,chapterPos:0}),A=S(null),{showLoading:c,closeLoading:m,loadingWrapper:f,isLoading:K}=le(A,"正在获取书籍信息"),g=ee([]),h=S(""),I=S(!1);te(()=>{if(!(I.value&&h.value!="")){if(I.value=!1,g.value=[],h.value==""){g.value=w.value;return}g.value=w.value.filter(t=>t.name.includes(h.value)||t.author.includes(h.value))}});const Y=()=>{h.value!=""&&(g.value=[],o.clearSearchBooks(),c(),I.value=!0,T.search(h.value,t=>{K&&m();try{o.setSearchBooks(JSON.parse(t)),g.value=o.searchBooks}catch(r){throw y.error("后端数据错误"),r}},()=>{m(),g.value.length==0&&y.info("搜索结果为空")}))},U=()=>{},Q=se(),q=async t=>{const{bookUrl:r,name:v,author:p,durChapterIndex:_=0,durChapterPos:k=0}=t;await T.saveBook(t),b(r,v,p,_,k)},b=(t,r,v,p,_)=>{r!=="尚无阅读记录"&&(sessionStorage.setItem("bookUrl",t),sessionStorage.setItem("bookName",r),sessionStorage.setItem("bookAuthor",v),sessionStorage.setItem("chapterIndex",p),sessionStorage.setItem("chapterPos",_),n.value={name:r,author:v,url:t,chapterIndex:p,chapterPos:_},localStorage.setItem("readingRecent",JSON.stringify(n.value)),Q.push({path:"/chapter"}))};ae(()=>{let t=localStorage.getItem("readingRecent");t!=null&&(n.value=JSON.parse(t),typeof n.value.chapterIndex>"u"&&(n.value.chapterIndex=0)),f(o.saveBookProgress().finally($))});const $=()=>T.getBookShelf().then(t=>{o.setConnectType("success"),t.data.isSuccess?o.addBooks(t.data.data.sort(function(r,v){var p=r.durChapterTime||0,_=v.durChapterTime||0;return _-p})):y.error(t.data.errorMsg),o.setConnectStatus("已连接 "),o.setNewConnect(!1)}).catch(function(t){throw o.setConnectType("danger"),o.setConnectStatus("连接失败"),y.error("后端连接失败"),o.setNewConnect(!1),t});return(t,r)=>{const v=ce,p=W,_=ze;return i(),d("div",{class:M({"index-wrapper":!0,night:s(l),day:!s(l)})},[e("div",Te,[Ve,e("div",Pe,[C(v,{placeholder:"搜索书籍，在线书籍自动加入书架",modelValue:s(h),"onUpdate:modelValue":r[0]||(r[0]=k=>oe(h)?h.value=k:null),class:"search-input","prefix-icon":s(re),onKeyup:ne(Y,["enter"])},null,8,["modelValue","prefix-icon"])]),e("div",Le,[e("div",Ne,[be,e("div",Je,[C(p,{type:s(n).name=="尚无阅读记录"?"warning":"",class:M(["recent-book",{"no-point":s(n).url==""}]),size:"large",onClick:r[1]||(r[1]=k=>b(s(n).url,s(n).name,s(n).author,s(n).chapterIndex,s(n).chapterPos))},{default:P(()=>[L(u(s(n).name),1)]),_:1},8,["type","class"])])]),e("div",De,[We,e("div",Oe,[C(p,{type:s(R),size:"large",class:M(["setting-connect",{"no-point":s(E)}]),onClick:U},{default:P(()=>[L(u(s(x)),1)]),_:1},8,["type","class"])])])]),e("div",Ze,[e("a",He,[e("div",Fe,[e("img",{src:s(Me),alt:""},null,8,Ke)])])])]),e("div",{class:"shelf-wrapper",ref_key:"shelfWrapper",ref:A},[C(_,{books:s(g),onBookClick:q,isSearch:s(I)},null,8,["books","isSearch"])],512)],2)}}},$e=H(Ye,[["__scopeId","data-v-ee672f16"]]);export{$e as default};
