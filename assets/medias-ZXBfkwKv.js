import{_ as r}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as i,a as s,F as h,r as b,p as g,b as v,n as f,d as l,e as u,g as m}from"./index-CAZOAhbd.js";const $={name:"pitureLabel",data(){return{pitures:[{id:1,url:"./src/assets/imgs/梦境.png"},{id:2,url:"./src/assets/imgs/高跟鞋.png"},{id:3,url:"./src/assets/imgs/黑子退散.png"},{id:4,url:"./src/assets/imgs/Khristian.png"},{id:5,url:"./src/assets/imgs/荒漠孤车.png"},{id:6,url:"./src/assets/imgs/茅台.png"}]}},methods:{}},I={class:"page_pitures"},x={class:"page_content"},k={class:"items"},w={class:"card"},C=["src"];function L(e,c,_,p,a,n){return t(),i("div",I,[s("div",x,[s("div",k,[(t(!0),i(h,null,b(a.pitures,(o,d)=>(t(),i("div",{class:"item",key:d},[s("div",w,[s("img",{src:o.url,class:"imgs"},null,8,C)])]))),128))])])])}const S=r($,[["render",L],["__scopeId","data-v-49691125"]]),y={name:"videoLabel",data(){return{pitures:[{id:1,url:"/static/pitures/科幻 牢笼.png"},{id:2,url:"/static/pitures/红心A.png"},{id:3,url:"/static/pitures/黑子退散.png"},{id:4,url:"/static/pitures/增援未来计划1.png"},{id:5,url:"/static/pitures/雪碧图.png"},{id:6,url:"/static/pitures/专业团队.png"}]}},methods:{toPlay(e){uni.navigateTo({url:"/pages/webdiv/webdiv"})}}},B=e=>(g("data-v-ffbccb2a"),e=e(),v(),e),T={class:"page_video"},E=B(()=>s("div",{class:"page_content"},[s("div",{class:"unkown"},"尽请期待!")],-1)),A=[E];function F(e,c,_,p,a,n){return t(),i("div",T,A)}const N=r(y,[["render",F],["__scopeId","data-v-ffbccb2a"]]),V={name:"medias",data(){return{tabIndex:1}},components:{pitureLabel:S,videoLabel:N},methods:{changeTab(e){this.tabIndex=e}}},z=e=>(g("data-v-023dffdf"),e=e(),v(),e),G={class:"page_medias"},K=z(()=>s("div",{class:"page_header"},[s("div",{class:"title"},[s("text",{class:"cn"},"所有类别"),s("span",{class:"en"},"CATEGORIES")])],-1)),M={class:"page_content"},O={class:"tabs"},P={class:"items"},R={class:"content"};function j(e,c,_,p,a,n){const o=m("piture-label"),d=m("video-label");return t(),i("div",G,[K,s("div",M,[s("div",O,[s("div",P,[s("div",{class:f(["item",{active:a.tabIndex==1}]),onClick:c[0]||(c[0]=q=>n.changeTab(1))},"静态艺术",2)])]),s("div",R,[a.tabIndex==1?(t(),l(o,{key:0})):u("",!0),a.tabIndex==2?(t(),l(d,{key:1})):u("",!0)])])])}const J=r(V,[["render",j],["__scopeId","data-v-023dffdf"]]);export{J as default};
