webpackJsonp([1],{1671:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function u(e){return{mainapp:e.mainapp}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(26),n=l(r),o=a(1),d=l(o),i=a(6),c=l(i),f=a(2),s=l(f),m=a(3),p=l(m),y=a(0),g=l(y),E=a(5),h=(l(E),a(34)),b=a(20),v=l(b),_=a(177),q=a(1694),k=l(q),S=function(e){function t(){return(0,d.default)(this,t),(0,s.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.mainapp,a=e.dispatch,l={dispatch:a,mainapp:t};return g.default.createElement(_.MyWalletToolsPageHeaderLayout,{title:v.default.get("comm.manageresource")},g.default.createElement(k.default,l))}}]),t}(y.PureComponent);t.default=(0,h.connect)(u)(S),e.exports=t.default},1678:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getScatterEosClient=void 0;var l=a(333),u=function(e){return e&&e.__esModule?e:{default:e}}(l);t.getScatterEosClient=function(e,t){var a={protocol:t.endpoint.protocol,blockchain:t.network.network,host:t.endpoint.url,port:t.endpoint.port,chainId:t.network.chainId},l={broadcast:!0,sign:!0,chainId:t.network.chainId},r=t.endpoint.protocol;return e.eos(a,u.default,l,r)}},1679:function(e,t,a){"use strict";a(17),a(1680)},1680:function(e,t){},1694:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=a(178),r=l(u),n=a(179),o=l(n),d=a(26),i=l(d),c=a(1),f=l(c),s=a(6),m=l(s),p=a(2),y=l(p),g=a(3),E=l(g);a(334),a(335);var h=a(0),b=l(h),v=a(5),_=(l(v),a(20)),q=(l(_),a(1695)),k=l(q),S=a(1696),x=l(S),O=a(1697),C=l(O),F=a(1698),L=l(F),w=function(e){function t(){return(0,f.default)(this,t),(0,y.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,E.default)(t,e),(0,m.default)(t,[{key:"render",value:function(){var e=this.props,t=e.dispatch,a=e.mainapp,l={mainapp:a,dispatch:t};return b.default.createElement(r.default,{gutter:8},b.default.createElement(o.default,{xl:12,lg:12,md:24,sm:24,xs:24},b.default.createElement(C.default,l)),b.default.createElement(o.default,{xl:12,lg:12,md:24,sm:24,xs:24},b.default.createElement(L.default,l)),b.default.createElement(o.default,{xl:12,lg:12,md:24,sm:24,xs:24},b.default.createElement(k.default,l)),b.default.createElement(o.default,{xl:12,lg:12,md:24,sm:24,xs:24},b.default.createElement(x.default,l)))}}]),t}(h.PureComponent);t.default=w,e.exports=t.default},1695:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=a(82),r=l(u),n=a(46),o=l(n),d=a(716),i=l(d),c=a(181),f=l(c),s=a(11),m=l(s),p=a(331),y=l(p),g=a(4),E=l(g),h=a(26),b=l(h),v=a(1),_=l(v),q=a(6),k=l(q),S=a(2),x=l(S),O=a(3),C=l(O),F=a(113),L=l(F),w=a(114),T=l(w),V=a(332),A=l(V);a(89),a(70),a(1679),a(720),a(33),a(228),a(138),a(715);var M=a(0),N=l(M),P=a(5),H=(l(P),a(21),a(20)),I=l(H),j=a(330),z=a(1678),B=A.default.Item,D=(T.default.TextArea,L.default.Option,function(e){function t(e){(0,_.default)(this,t);var a=(0,x.default)(this,(t.__proto__||(0,b.default)(t)).call(this,e));return a.formLayout={labelCol:{span:7},wrapperCol:{span:13}},a.OnHandleSave=function(){var e=a.props,t=e.mainapp,l=e.form;e.dispatch;l.validateFields(function(e,a){if(!e){if(!t)return void(0,j.msgError)("\u4f60\u7684eos\u8d26\u53f7\u8fd8\u6ca1\u6709\u767b\u5f55");console.log("values:",a);var l=(0,E.default)({},a),u=t.scatter,r=t.activeNetwork,n=t.eosAccount,o=t.eosAuthority,d=(0,z.getScatterEosClient)(u,r),i={authorization:[n+"@"+o]};console.log("create account eosClient:",d),console.log("create account permissionoptions:",i),console.log("create account payload:",l);1==l.buytype?d.buyram({payer:n,receiver:l.recipient,quant:Number(l.quantity).toFixed(4).toString()+" EOS"},i).then(function(e){(0,j.msgSuccess)(e.transaction_id)},function(e){console.error(e),(0,j.msgError)((0,y.default)(e))}):d.buyrambytes({payer:n,receiver:l.recipient,bytes:Number(l.rambytes)},i).then(function(e){(0,j.msgSuccess)(e.transaction_id)},function(e){console.error(e),(0,j.msgError)((0,y.default)(e))})}})},a.state={},a}return(0,C.default)(t,e),(0,k.default)(t,[{key:"render",value:function(){var e=this.props,t=(e.dispatch,e.mainapp),a=(e.createloading,e.form),l=a.getFieldDecorator,u=a.getFieldValue;return N.default.createElement(r.default,{style:{paddingTop:12,marginBottom:24},title:N.default.createElement("div",null,N.default.createElement(m.default,{type:"plus-circle-o"})," ",I.default.get("comm.buyram"))},N.default.createElement(A.default,{style:{marginTop:8}},N.default.createElement(B,(0,E.default)({key:"recipient",label:I.default.get("comm.recipient"),hasFeedback:!0},this.formLayout),l("recipient",{rules:[{required:!0,message:I.default.get("comm.required")}]})(N.default.createElement(T.default,null))),N.default.createElement(B,(0,E.default)({key:"payer",label:I.default.get("comm.payer"),hasFeedback:!0},this.formLayout),l("payer",{initialValue:t&&t.eosAccount,rules:[{required:!0,message:I.default.get("comm.required")}]})(N.default.createElement(T.default,{disabled:!0}))),N.default.createElement(B,(0,E.default)({key:"buytype",label:I.default.get("comm.buytype")},this.formLayout),l("buytype",{initialValue:1,rules:[{required:!0,message:I.default.get("comm.required")}]})(N.default.createElement(f.default.Group,null,N.default.createElement(f.default,{value:1},"EOS"),N.default.createElement(f.default,{value:2},I.default.get("comm.bytes"))))),1==u("buytype")?N.default.createElement(B,(0,E.default)({key:"quantity",label:I.default.get("comm.quantity")},this.formLayout),l("quantity",{initialValue:1,rules:[{type:"number",min:.1,max:99999,required:!0,message:I.default.get("comm.required")}]})(N.default.createElement(i.default,null))):N.default.createElement(B,(0,E.default)({key:"rambytes",label:I.default.get("comm.bytes")},this.formLayout),l("rambytes",{initialValue:1024,rules:[{type:"number",min:1024,max:99999,required:!0,message:I.default.get("comm.required")}]})(N.default.createElement(i.default,null))),N.default.createElement(B,(0,E.default)({},this.formLayout,{style:{marginTop:32}}),N.default.createElement(o.default,{type:"primary",onClick:this.OnHandleSave},I.default.get("comm.ok")))))}}]),t}(N.default.Component));t.default=A.default.create()(D),e.exports=t.default},1696:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=a(82),r=l(u),n=a(46),o=l(n),d=a(716),i=l(d),c=a(11),f=l(c),s=a(331),m=l(s),p=a(4),y=l(p),g=a(26),E=l(g),h=a(1),b=l(h),v=a(6),_=l(v),q=a(2),k=l(q),S=a(3),x=l(S),O=a(113),C=l(O),F=a(114),L=l(F),w=a(332),T=l(w);a(89),a(70),a(1679),a(33),a(228),a(138),a(715);var V=a(0),A=l(V),M=a(5),N=(l(M),a(21),a(20)),P=l(N),H=a(330),I=a(1678),j=T.default.Item,z=(L.default.TextArea,C.default.Option,function(e){function t(e){(0,b.default)(this,t);var a=(0,k.default)(this,(t.__proto__||(0,E.default)(t)).call(this,e));return a.formLayout={labelCol:{span:7},wrapperCol:{span:13}},a.OnHandleSave=function(){var e=a.props,t=e.mainapp,l=e.form;e.dispatch;l.validateFields(function(e,a){if(!e){if(!t)return void(0,H.msgError)("\u4f60\u7684eos\u8d26\u53f7\u8fd8\u6ca1\u6709\u767b\u5f55");console.log("values:",a);var l=(0,y.default)({},a),u=t.scatter,r=t.activeNetwork,n=t.eosAccount,o=t.eosAuthority,d=(0,I.getScatterEosClient)(u,r),i={authorization:[n+"@"+o]};console.log("create account eosClient:",d),console.log("create account permissionoptions:",i),console.log("create account payload:",l);1==l.buytype?d.buyram({payer:n,receiver:l.recipient,quant:Number(l.quantity).toFixed(4).toString()+" EOS"},i).then(function(e){(0,H.msgSuccess)(e.transaction_id)},function(e){console.error(e),(0,H.msgError)((0,m.default)(e))}):d.buyrambytes({payer:n,receiver:l.recipient,bytes:Number(l.rambytes)},i).then(function(e){(0,H.msgSuccess)(e.transaction_id)},function(e){console.error(e),(0,H.msgError)((0,m.default)(e))})}})},a.state={},a}return(0,x.default)(t,e),(0,_.default)(t,[{key:"render",value:function(){var e=this.props,t=(e.dispatch,e.mainapp),a=(e.createloading,e.form),l=a.getFieldDecorator;a.getFieldValue;return A.default.createElement(r.default,{style:{paddingTop:12,marginBottom:24},title:A.default.createElement("div",null,A.default.createElement(f.default,{type:"plus-circle-o"})," ",P.default.get("comm.sellram"))},A.default.createElement(T.default,{style:{marginTop:8}},A.default.createElement(j,(0,y.default)({key:"recipient",label:P.default.get("comm.recipient"),hasFeedback:!0},this.formLayout),l("recipient",{rules:[{required:!0,message:P.default.get("comm.required")}]})(A.default.createElement(L.default,null))),A.default.createElement(j,(0,y.default)({key:"payer",label:P.default.get("comm.payer"),hasFeedback:!0},this.formLayout),l("payer",{initialValue:t&&t.eosAccount,rules:[{required:!0,message:P.default.get("comm.required")}]})(A.default.createElement(L.default,{disabled:!0}))),A.default.createElement(j,(0,y.default)({key:"rambytes",label:P.default.get("comm.bytes")},this.formLayout),l("rambytes",{initialValue:1024,rules:[{type:"number",min:1024,max:99999,required:!0,message:P.default.get("comm.required")}]})(A.default.createElement(i.default,null))),A.default.createElement(j,(0,y.default)({},this.formLayout,{style:{marginTop:32}}),A.default.createElement(o.default,{type:"primary",onClick:this.OnHandleSave},P.default.get("comm.ok")))))}}]),t}(A.default.Component));t.default=T.default.create()(z),e.exports=t.default},1697:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=a(82),r=l(u),n=a(46),o=l(n),d=a(181),i=l(d),c=a(178),f=l(c),s=a(179),m=l(s),p=a(716),y=l(p),g=a(11),E=l(g),h=a(331),b=l(h),v=a(4),_=l(v),q=a(26),k=l(q),S=a(1),x=l(S),O=a(6),C=l(O),F=a(2),L=l(F),w=a(3),T=l(w),V=a(113),A=l(V),M=a(114),N=l(M),P=a(332),H=l(P);a(89),a(70),a(720),a(334),a(335),a(1679),a(33),a(228),a(138),a(715);var I=a(0),j=l(I),z=a(5),B=(l(z),a(21),a(20)),D=l(B),G=a(330),J=a(1678),W=H.default.Item,K=(N.default.TextArea,A.default.Option,function(e){function t(e){(0,x.default)(this,t);var a=(0,L.default)(this,(t.__proto__||(0,k.default)(t)).call(this,e));return a.formLayout={labelCol:{span:7},wrapperCol:{span:13}},a.OnHandleSave=function(){var e=a.props,t=e.mainapp,l=e.form;e.dispatch;l.validateFields(function(e,a){if(!e){if(!t)return void(0,G.msgError)("\u4f60\u7684eos\u8d26\u53f7\u8fd8\u6ca1\u6709\u767b\u5f55");console.log("values:",a);var l=(0,_.default)({},a),u=t.scatter,r=t.activeNetwork,n=t.eosAccount,o=t.eosAuthority,d=(0,J.getScatterEosClient)(u,r),i={authorization:[n+"@"+o]};console.log("create account eosClient:",d),console.log("create account permissionoptions:",i),console.log("create account payload:",l);l.transfer;n==l.recipient&&0,d.delegatebw({from:n,receiver:l.recipient,stake_cpu_quantity:Number(l.cpuquantity).toFixed(4).toString()+" EOS",stake_net_quantity:Number(l.netquantity).toFixed(4).toString()+" EOS",transfer:l.transfer?1:0},i).then(function(e){(0,G.msgSuccess)(e.transaction_id)},function(e){console.error(e),(0,G.msgError)((0,b.default)(e))})}})},a.state={},a}return(0,T.default)(t,e),(0,C.default)(t,[{key:"render",value:function(){var e=this.props,t=(e.dispatch,e.mainapp),a=(e.createloading,e.form),l=a.getFieldDecorator;a.getFieldValue;return j.default.createElement(r.default,{style:{paddingTop:12,marginBottom:24},title:j.default.createElement("div",null,j.default.createElement(E.default,{type:"plus-circle-o"})," ",D.default.get("comm.stake"))},j.default.createElement(H.default,{style:{marginTop:8}},j.default.createElement(W,(0,_.default)({key:"recipient",label:D.default.get("comm.recipient"),hasFeedback:!0},this.formLayout),l("recipient",{rules:[{required:!0,message:D.default.get("comm.required")}]})(j.default.createElement(N.default,null))),j.default.createElement(W,(0,_.default)({key:"payer",label:D.default.get("comm.payer"),hasFeedback:!0},this.formLayout),l("payer",{initialValue:t&&t.eosAccount,rules:[{required:!0,message:D.default.get("comm.required")}]})(j.default.createElement(N.default,{disabled:!0}))),j.default.createElement(f.default,null,j.default.createElement(m.default,{xl:12,lg:12,md:12,sm:12,xs:12},j.default.createElement(W,(0,_.default)({key:"cpuquantity",label:D.default.get("comm.cpu")},this.formLayout),l("cpuquantity",{initialValue:1e-4,rules:[{type:"number",min:1e-4,max:99999,required:!0,message:D.default.get("comm.required")}]})(j.default.createElement(y.default,null))," EOS")),j.default.createElement(m.default,{xl:12,lg:12,md:12,sm:12,xs:12},j.default.createElement(W,(0,_.default)({key:"netquantity",label:D.default.get("comm.net")},this.formLayout),l("netquantity",{initialValue:1e-4,rules:[{type:"number",min:1e-4,max:99999,required:!0,message:D.default.get("comm.required")}]})(j.default.createElement(y.default,null))," EOS"))),j.default.createElement(W,(0,_.default)({key:"transfer",label:D.default.get("mywallettools.stakingrights")},this.formLayout),l("transfer",{initialValue:1,rules:[{required:!0,type:"number",message:D.default.get("comm.required")}]})(j.default.createElement(i.default.Group,null,j.default.createElement(i.default,{value:1},D.default.get("comm.yes")),j.default.createElement(i.default,{value:0},D.default.get("comm.no"))))),j.default.createElement(W,(0,_.default)({},this.formLayout,{style:{marginTop:32}}),j.default.createElement(o.default,{type:"primary",onClick:this.OnHandleSave},D.default.get("comm.ok")))))}}]),t}(j.default.Component));t.default=H.default.create()(K),e.exports=t.default},1698:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=a(82),r=l(u),n=a(46),o=l(n),d=a(716),i=l(d),c=a(11),f=l(c),s=a(331),m=l(s),p=a(4),y=l(p),g=a(26),E=l(g),h=a(1),b=l(h),v=a(6),_=l(v),q=a(2),k=l(q),S=a(3),x=l(S),O=a(113),C=l(O),F=a(114),L=l(F),w=a(332),T=l(w);a(89),a(70),a(1679),a(33),a(228),a(138),a(715);var V=a(0),A=l(V),M=a(5),N=(l(M),a(21),a(20)),P=l(N),H=a(330),I=a(1678),j=T.default.Item,z=(L.default.TextArea,C.default.Option,function(e){function t(e){(0,b.default)(this,t);var a=(0,k.default)(this,(t.__proto__||(0,E.default)(t)).call(this,e));return a.formLayout={labelCol:{span:7},wrapperCol:{span:13}},a.OnHandleSave=function(){var e=a.props,t=e.mainapp,l=e.form;e.dispatch;l.validateFields(function(e,a){if(!e){if(!t)return void(0,H.msgError)("\u4f60\u7684eos\u8d26\u53f7\u8fd8\u6ca1\u6709\u767b\u5f55");console.log("values:",a);var l=(0,y.default)({},a),u=t.scatter,r=t.activeNetwork,n=t.eosAccount,o=t.eosAuthority,d=(0,I.getScatterEosClient)(u,r),i={authorization:[n+"@"+o]};console.log("create account eosClient:",d),console.log("create account permissionoptions:",i),console.log("create account payload:",l);d.undelegatebw({from:n,receiver:l.holder,unstake_cpu_quantity:Number(l.uncpuquantity).toFixed(4).toString()+" EOS",unstake_net_quantity:Number(l.netquantity).toFixed(4).toString()+" EOS"},i).then(function(e){(0,H.msgSuccess)(e.transaction_id)},function(e){console.error(e),(0,H.msgError)((0,m.default)(e))})}})},a.state={},a}return(0,x.default)(t,e),(0,_.default)(t,[{key:"render",value:function(){var e=this.props,t=(e.dispatch,e.mainapp),a=(e.createloading,e.form),l=a.getFieldDecorator;a.getFieldValue;return A.default.createElement(r.default,{style:{paddingTop:12,marginBottom:24},title:A.default.createElement("div",null,A.default.createElement(f.default,{type:"plus-circle-o"})," ",P.default.get("comm.unstake"))},A.default.createElement(T.default,{style:{marginTop:8}},A.default.createElement(j,(0,y.default)({key:"holder",label:P.default.get("comm.holder"),hasFeedback:!0},this.formLayout),l("holder",{rules:[{required:!0,message:P.default.get("comm.required")}]})(A.default.createElement(L.default,null))),A.default.createElement(j,(0,y.default)({key:"owner",label:P.default.get("comm.owner"),hasFeedback:!0},this.formLayout),l("owner",{initialValue:t&&t.eosAccount,rules:[{required:!0,message:P.default.get("comm.required")}]})(A.default.createElement(L.default,{disabled:!0}))),A.default.createElement(j,(0,y.default)({key:"uncpuquantity",label:P.default.get("comm.cpu")},this.formLayout),l("uncpuquantity",{initialValue:1e-4,rules:[{type:"number",min:1e-4,max:99999,required:!0,message:P.default.get("comm.required")}]})(A.default.createElement(i.default,null))," EOS"),A.default.createElement(j,(0,y.default)({key:"unnetquantity",label:P.default.get("comm.net")},this.formLayout),l("unnetquantity",{initialValue:1e-4,rules:[{type:"number",min:1e-4,max:99999,required:!0,message:P.default.get("comm.required")}]})(A.default.createElement(i.default,null))," EOS"),A.default.createElement(j,(0,y.default)({},this.formLayout,{style:{marginTop:32}}),A.default.createElement(o.default,{type:"primary",onClick:this.OnHandleSave},P.default.get("comm.ok")))))}}]),t}(A.default.Component));t.default=T.default.create()(z),e.exports=t.default}});