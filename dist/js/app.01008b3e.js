(function(){var e={2729:function(e,n,t){"use strict";var a=t(3862),s=t(3396);const r={class:"navbar navbar-expand-lg navbar-light bg-light"},o=(0,s._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,s._)("span",{class:"navbar-toggler-icon"})],-1),i={class:"collapse navbar-collapse justify-content-around",id:"navbarNav"},l={class:"navbar-nav"},u={class:"nav-item"},d={class:"navbar-nav"},c={class:"nav-item"};function p(e,n,t,a,p,m){const y=(0,s.up)("router-link"),b=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("nav",r,[o,(0,s._)("div",i,[(0,s._)("ul",l,[(0,s._)("li",u,[(0,s._)("h5",null,[(0,s.Wm)(y,{class:"nav-link text-lg font-weight-bold",to:"/create"},{default:(0,s.w5)((()=>[(0,s.Uk)("Create")])),_:1})])])]),(0,s._)("ul",d,[(0,s._)("li",c,[(0,s._)("h5",null,[(0,s.Wm)(y,{class:"nav-link text-lg font-weight-bold",to:"/manage"},{default:(0,s.w5)((()=>[(0,s.Uk)("Manage")])),_:1})])])])])]),(0,s.Wm)(b)],64)}var m={name:"App"},y=t(89);const b=(0,y.Z)(m,[["render",p]]);var f=b,h=t(2483);const T={class:"d-flex justify-content-center align-items-center",style:{height:"75vh"}},k={class:"form-group"},w=(0,s._)("label",{for:"tokenAddress"},"Token address",-1),v=["value"],g={class:"form-group mt-3"},_={class:"form-group mt-3"};function C(e,n,t,r,o,i){const l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",T,[(0,s._)("form",{onSubmit:n[3]||(n[3]=(0,a.iM)((()=>{}),["prevent"])),class:"col-12 col-md-4 col-lg-4 col-xl-4"},[(0,s._)("div",k,[w,(0,s._)("input",{type:"text",class:"form-control form-control-lg",value:o.tokenContract,disabled:""},null,8,v),""!==o.tokenContract?((0,s.wg)(),(0,s.j4)(l,{key:0,disabled:"",class:"btn btn-primary mt-3",to:{name:"manage",query:{tokenContract:JSON.stringify(o.tokenContract)}}},{default:(0,s.w5)((()=>[(0,s.Uk)("Manage")])),_:1},8,["to"])):(0,s.kq)("",!0)]),(0,s._)("div",g,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>o.tokenName=e),placeholder:"Token name",class:"form-control"},null,512),[[a.nr,o.tokenName]])]),(0,s._)("div",_,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":n[1]||(n[1]=e=>o.tokenSymbol=e),placeholder:"Token symbol",class:"form-control"},null,512),[[a.nr,o.tokenSymbol]])]),(0,s._)("button",{onClick:n[2]||(n[2]=(...e)=>i.createContract&&i.createContract(...e)),class:"btn btn-primary mt-3"}," Create token ")],32)])}var M=JSON.parse('{"Mt":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"tokenAddress","type":"address"}],"name":"TokenCreated","type":"event"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"owner","type":"address"}],"name":"createToken","outputs":[],"stateMutability":"payable","type":"function"}]}'),x=t(6141),A=t(6796),B=t(501),O={data(){return{tokenContract:"",tokenName:"",tokenSymbol:""}},methods:{async getProvider(){if(window.ethereum)return new x.Q(window.ethereum);{const e=new B.Z({rpc:{137:"https://polygon-mainnet.g.alchemy.com/v2/rAKL_nklumf7Uicxi5BCq9rYd6DUsVMJ",5:"http://192.168.100.20:7545"}});return await e.enable(),e}},async getFactoryContract(){let e=await this.getProvider();const{chainId:n}=await e.getNetwork();return 5===n||137===n?"0xA19957583DaeD9DA82FE6c6b0b5D5b76A013b944":"0x84db0126e01Fd5ed96DFB0973Bd3106C7eBCA14A"},async getSigner(){let e=await this.getProvider();return await e.send("eth_requestAccounts"),e.getSigner()},async createContract(){const e=await this.getSigner(),n=await new A.CH(await this.getFactoryContract(),M.Mt,e);await n.createToken(this.tokenName,this.tokenSymbol,await e.getAddress()),n.on("TokenCreated",(async(e,n)=>{this.tokenContract=n.args[0]}))}}};const U=(0,y.Z)(O,[["render",C]]);var W=U,S=t(7139);const D=(0,s._)("label",{class:"mb-2"},"Token Contract Address",-1),F=(0,s._)("label",{class:"mb-2"},"Number of tokens to mint",-1),N=(0,s._)("label",{class:"mt-2 mb-2"},"Address to mint to ",-1),V=["disabled"],j={class:"form-check form-check-inline"},P=(0,s._)("label",{class:"form-check-label mb-2"},"Use your address",-1),q=(0,s._)("label",{class:"mb-2"},"Number of tokens to burn",-1),J=(0,s._)("label",{lass:"mb-2 mt-2"},"Address from where to burn ",-1),Z=["disabled"],H={class:"form-check form-check-inline"},I=(0,s._)("label",{class:"form-check-label mb-2"},"Use your address",-1),Y=(0,s._)("label",{class:"mb-2"},"Address to trensfer to",-1),$=(0,s._)("label",{class:"mb-2"},"Number of tokens to transfer",-1);function z(e,n,t,r,o,i){const l=(0,s.up)("CardWrapper");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(l,null,{default:(0,s.w5)((()=>[D,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control","onUpdate:modelValue":n[0]||(n[0]=e=>o.token.address=e),placeholder:"Token contract address"},null,512),[[a.nr,o.token.address]]),(0,s._)("button",{class:"btn btn-primary mt-3 mb-2",onClick:n[1]||(n[1]=(...e)=>i.validateTokenContract&&i.validateTokenContract(...e))}," See token contract "),(0,s._)("p",null,"Your balance is : "+(0,S.zw)(o.userBalance)+" "+(0,S.zw)(o.token.symbol),1)])),_:1}),(0,s.Wm)(l,null,{default:(0,s.w5)((()=>[F,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control mb-2","onUpdate:modelValue":n[2]||(n[2]=e=>o.mint.tokensToMint=e),placeholder:"Number of tokens to mint"},null,512),[[a.nr,o.mint.tokensToMint]]),N,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control mb-2","onUpdate:modelValue":n[3]||(n[3]=e=>o.mint.addressToMintTo=e),placeholder:"Address to mint to ",disabled:o.mint.isAddressToMintToDisabled},null,8,V),[[a.nr,o.mint.addressToMintTo]]),(0,s._)("div",j,[(0,s.wy)((0,s._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":n[4]||(n[4]=e=>o.mint.isMintCheckboxChecked=e)},null,512),[[a.e8,o.mint.isMintCheckboxChecked]]),P]),(0,s._)("div",null,[(0,s._)("button",{class:"btn btn-primary mt-3",onClick:n[5]||(n[5]=(...e)=>i.mintTokens&&i.mintTokens(...e))},"Mint")])])),_:1}),(0,s.Wm)(l,null,{default:(0,s.w5)((()=>[q,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control mb-2","onUpdate:modelValue":n[6]||(n[6]=e=>o.burn.tokensToBurn=e),placeholder:"Number of tokens to burn"},null,512),[[a.nr,o.burn.tokensToBurn]]),J,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control mb-2","onUpdate:modelValue":n[7]||(n[7]=e=>o.burn.addressFromWheretoBurn=e),placeholder:"Address from where to burn ",disabled:o.burn.isAddressFromWhereToBurnDisabled},null,8,Z),[[a.nr,o.burn.addressFromWheretoBurn]]),(0,s._)("div",H,[(0,s.wy)((0,s._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":n[8]||(n[8]=e=>o.burn.isBurnCheckboxChecked=e)},null,512),[[a.e8,o.burn.isBurnCheckboxChecked]]),I]),(0,s._)("div",null,[(0,s._)("button",{class:"btn btn-primary mt-3",onClick:n[9]||(n[9]=(...e)=>i.burnTokens&&i.burnTokens(...e))},"Burn")])])),_:1}),(0,s.Wm)(l,null,{default:(0,s.w5)((()=>[Y,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control mb-2","onUpdate:modelValue":n[10]||(n[10]=e=>o.addressToTransferTo=e),placeholder:"Address to trensfer to"},null,512),[[a.nr,o.addressToTransferTo]]),$,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control mb-2","onUpdate:modelValue":n[11]||(n[11]=e=>o.tokensToTransfer=e),placeholder:"Number of tokens to transfer"},null,512),[[a.nr,o.tokensToTransfer]]),(0,s._)("div",null,[(0,s._)("button",{class:"btn btn-primary mt-3",onClick:n[12]||(n[12]=(...e)=>i.transferTokens&&i.transferTokens(...e))}," Transfer ")])])),_:1})],64)}const E={class:"d-flex justify-content-center align-items-center mt-5"},Q={class:"form-group col-12 col-md-4 col-lg-4 col-xl-4"},K={class:"card shadow-sm"},L={class:"card-body"};function G(e,n,t,a,r,o){return(0,s.wg)(),(0,s.iD)("div",E,[(0,s._)("div",Q,[(0,s._)("div",K,[(0,s._)("div",L,[(0,s.WI)(e.$slots,"default")])])])])}var R={name:"CardWrapper"};const X=(0,y.Z)(R,[["render",G]]);var ee=X,ne=JSON.parse('{"Mt":[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"numberOfCoinsToMint","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');async function te(){let e=new x.Q(window.ethereum);return await e.send("eth_requestAccounts"),e.getSigner()}async function ae(e){const n=await te(),t=new A.CH(e,ne.Mt,n);return[t,n]}var se={components:{CardWrapper:ee},async created(){void 0!==this.$route.query.tokenContract&&(this.token.address=JSON.parse(this.$route.query.tokenContract),this.validateTokenContract());let e=this.changeCurrentAccountIfAccountChanges;window.ethereum.on("accountsChanged",(function(n){e(n)}))},data(){return{token:{address:"",symbol:""},userBalance:0,mint:{tokensToMint:0,addressToMintTo:"",isMintCheckboxChecked:!1,isAddressToMintToDisabled:!1},burn:{tokensToBurn:0,addressFromWheretoBurn:"",isBurnCheckboxChecked:!1,isAddressFromWhereToBurnDisabled:!1},addressToTransferTo:"",tokensToTransfer:0}},watch:{"burn.isBurnCheckboxChecked":async function(e){!0===e?(this.burn.addressFromWheretoBurn=await(await te()).getAddress(),this.burn.isAddressFromWhereToBurnDisabled=!0):!1===e&&(this.burn.addressFromWheretoBurn="",this.burn.isAddressFromWhereToBurnDisabled=!1)},"mint.isMintCheckboxChecked":async function(e){!0===e?(this.mint.addressToMintTo=await(await te()).getAddress(),this.mint.isAddressToMintToDisabled=!0):!1===e&&(this.mint.addressToMintTo="",this.mint.isAddressToMintToDisabled=!1)}},methods:{async changeCurrentAccountIfAccountChanges(e){this.mint.isMintCheckboxChecked&&(this.mint.addressToMintTo=e[0]),this.burn.isBurnCheckboxChecked&&(this.burn.addressFromWheretoBurn=e[0])},async seeUserTokenBalanace(e,n){this.token.symbol=(await e.functions.symbol())[0],this.userBalance=(await e.functions.balanceOf(await n.getAddress())).toString()},async validateTokenContract(){const[e,n]=await ae(this.token.address);await this.seeUserTokenBalanace(e,n)},async mintTokens(){const[e,n]=await ae(this.token.address);let t=await e.functions.mint(this.mint.addressToMintTo,this.mint.tokensToMint);await t.wait(),await this.seeUserTokenBalanace(e,n)},async burnTokens(){const[e,n]=await ae(this.token.address);let t=await e.functions.burn(this.burn.addressFromWheretoBurn,this.burn.tokensToBurn);await t.wait(),await this.seeUserTokenBalanace(e,n)},async transferTokens(){const[e,n]=await ae(this.token.address);let t=await e.functions.transfer(this.addressToTransferTo,this.tokensToTransfer);await t.wait(),await this.seeUserTokenBalanace(e,n)}}};const re=(0,y.Z)(se,[["render",z]]);var oe=re;const ie=(0,h.p7)({routes:[{path:"/createAndManageTokens",component:W},{path:"/create",component:W},{path:"/manage",name:"manage",component:oe}],history:(0,h.PO)()});var le=ie;t(2166);(0,a.ri)(f).use(le).mount("#app")},6563:function(){},6601:function(){},9214:function(){},5568:function(){},127:function(){},7790:function(){},2361:function(){},4616:function(){}},n={};function t(a){var s=n[a];if(void 0!==s)return s.exports;var r=n[a]={id:a,loaded:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,a,s,r){if(!a){var o=1/0;for(d=0;d<e.length;d++){a=e[d][0],s=e[d][1],r=e[d][2];for(var i=!0,l=0;l<a.length;l++)(!1&r||o>=r)&&Object.keys(t.O).every((function(e){return t.O[e](a[l])}))?a.splice(l--,1):(i=!1,r<o&&(o=r));if(i){e.splice(d--,1);var u=s();void 0!==u&&(n=u)}}return n}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[a,s,r]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,a){var s,r,o=a[0],i=a[1],l=a[2],u=0;if(o.some((function(n){return 0!==e[n]}))){for(s in i)t.o(i,s)&&(t.m[s]=i[s]);if(l)var d=l(t)}for(n&&n(a);u<o.length;u++)r=o[u],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(d)},a=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(2729)}));a=t.O(a)})();
//# sourceMappingURL=app.01008b3e.js.map