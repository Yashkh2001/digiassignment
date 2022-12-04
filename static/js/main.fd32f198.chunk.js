(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,n,a){e.exports=a(36)},29:function(e,n,a){},34:function(e,n,a){},35:function(e,n,a){},36:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(9),i=a.n(o),c=a(10),l=a(11),d=a(13),u=a(12),s=a(14),y=(a(29),a(2)),f=a(5),m=a(21),g=Object(m.actionCreatorFactory)("DIAGRAM"),b=g("INIT"),h=g("UPDATE_NODE_COLOR"),k=g("UPDATE_NODE_TEXT"),D=g("ADD_NODE"),p=g("REMOVE_NODE"),O=g("REMOVE_LINK"),A=g("NODE_SELECTED"),E=g("NODE_DESELECTED"),v=Object(f.b)(function(e){return Object(y.a)({},e)},function(e){var n=0;return{initHandler:function(){return e(b({nodeDataArray:[{key:"Alpha",label:"Alpha",color:"lightblue"},{key:"Beta",label:"Beta",color:"orange"},{key:"Gamma",label:"Gamma",color:"lightgreen"},{key:"Delta",label:"Delta",color:"pink"},{key:"Omega",label:"Omega",color:"grey"}],linkDataArray:[{key:-1,from:"Alpha",to:"Beta"},{key:-2,from:"Alpha",to:"Gamma"},{key:-3,from:"Beta",to:"Delta"},{key:-4,from:"Gamma",to:"Omega"}]}))},updateNodeColorHandler:function(){return e(h())},addNodeHandler:function(){e(D("node"+n)),n+=1}}})(function(e){var n=e.initHandler,a=e.updateNodeColorHandler,t=e.addNodeHandler;return r.a.createElement("div",{className:"centered-container"},r.a.createElement("div",{className:"inline-element"},r.a.createElement("button",{type:"button",onClick:function(){return n()}},"Init diagram")),r.a.createElement("div",{className:"inline-element"},r.a.createElement("button",{type:"button",onClick:function(){return a()}},"Update node color")),r.a.createElement("div",{className:"inline-element"},r.a.createElement("button",{type:"button",onClick:function(){return t()}},"Add node with selected node(s) as parent(s)")))}),j=a(7),N=a(1),w=a.n(N),C=a(23),T=(a(34),function(e){function n(e){var a;return Object(c.a)(this,n),(a=Object(d.a)(this,Object(u.a)(n).call(this,e))).diagramRef=void 0,a.diagramRef=r.a.createRef(),a.initDiagram=a.initDiagram.bind(Object(j.a)(a)),a.onTextEdited=a.onTextEdited.bind(Object(j.a)(a)),a}return Object(s.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(C.a,{ref:this.diagramRef,divClassName:"myDiagram",initDiagram:this.initDiagram,nodeDataArray:this.props.nodeDataArray,linkDataArray:this.props.linkDataArray,onModelChange:this.props.onModelChange,skipsDiagramUpdate:!1})}},{key:"initDiagram",value:function(){var e=this,n=w.a.GraphObject.make,a=n(w.a.Diagram,{initialContentAlignment:w.a.Spot.LeftCenter,"undoManager.isEnabled":!0,"animationManager.isInitial":!1,layout:n(w.a.TreeLayout,{angle:0,arrangement:w.a.TreeLayout.ArrangementVertical,treeStyle:w.a.TreeLayout.StyleLayered}),isReadOnly:!1,allowHorizontalScroll:!0,allowVerticalScroll:!0,allowZoom:!1,allowSelect:!0,autoScale:N.Diagram.Uniform,contentAlignment:w.a.Spot.LeftCenter,TextEdited:this.onTextEdited,model:n(w.a.GraphLinksModel,{linkKeyProperty:"key",makeUniqueLinkKeyFunction:function(e,n){for(var a=n.key||-1;e.findLinkDataForKey(a);)a--;return n.key=a,a}})});return a.toolManager.panningTool.isEnabled=!1,a.toolManager.mouseWheelBehavior=N.ToolManager.WheelScroll,a.nodeTemplate=n(w.a.Node,"Auto",{selectionChanged:function(n){return e.props.onNodeSelection(n.key,n.isSelected)}},n(w.a.Shape,"Diamond",{strokeWidth:0},new w.a.Binding("fill","color")),n(w.a.TextBlock,{margin:12,editable:!0},new w.a.Binding("text","label"))),a.linkTemplate=n(w.a.Link,new w.a.Binding("relinkableFrom","canRelink").ofModel(),new w.a.Binding("relinkableTo","canRelink").ofModel(),n(w.a.Shape),n(w.a.Shape,{toArrow:"Standard"})),a}},{key:"onTextEdited",value:function(e){var n=e.subject;if(null!==n){var a=n.part;a instanceof w.a.Node&&this.props.onTextChange&&this.props.onTextChange({key:a.key,text:n.text})}}}]),n}(r.a.PureComponent)),S=Object(f.b)(function(e){return{nodeDataArray:e.nodeDataArray,linkDataArray:e.linkDataArray}},function(e){return{onNodeSelection:function(n,a){e(a?A(n):E(n))},onModelChange:function(n){var a=n.removedNodeKeys;a&&a.forEach(function(n){e(p(n))});var t=n.removedLinkKeys;t&&t.forEach(function(n){return e(O(n))})},onTextChange:function(n){e(k(n))}}})(function(e){var n=e.nodeDataArray,a=e.linkDataArray,t=e.onNodeSelection,o=e.onModelChange,i=e.onTextChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{nodeDataArray:n,linkDataArray:a,onNodeSelection:t,onModelChange:o,onTextChange:i}))}),x=a(3),L=a(22),K=["lightblue","orange","lightgreen","pink","yellow","red","grey","magenta","cyan"],M=function(){return K[Math.floor(Math.random()*K.length)]},R=Object(L.reducerWithInitialState)({nodeDataArray:[{key:"Root",color:"lightblue",label:"Root"}],linkDataArray:[],selectedNodeKeys:[]}).case(b,function(e,n){return Object(y.a)({},e,{nodeDataArray:n.nodeDataArray,linkDataArray:n.linkDataArray})}).case(h,function(e){var n=e.nodeDataArray.map(function(e){return Object(y.a)({},e,{color:M()})});return Object(y.a)({},e,{nodeDataArray:n})}).case(k,function(e,n){var a=e.nodeDataArray.findIndex(function(e){return e.key===n.key});return Object(y.a)({},e,{nodeDataArray:[].concat(Object(x.a)(e.nodeDataArray.slice(0,a)),[Object(y.a)({},e.nodeDataArray[a],{label:n.text})],Object(x.a)(e.nodeDataArray.slice(a+1)))})}).case(D,function(e,n){var a=e.selectedNodeKeys.map(function(e){return{from:e,to:n}});return Object(y.a)({},e,{nodeDataArray:[].concat(Object(x.a)(e.nodeDataArray),[{key:n,label:n,color:M()}]),linkDataArray:a.length>0?Object(x.a)(e.linkDataArray).concat(a):Object(x.a)(e.linkDataArray)})}).case(p,function(e,n){var a=e.nodeDataArray.findIndex(function(e){return e.key===n});return-1===a?e:Object(y.a)({},e,{nodeDataArray:[].concat(Object(x.a)(e.nodeDataArray.slice(0,a)),Object(x.a)(e.nodeDataArray.slice(a+1)))})}).case(O,function(e,n){var a=e.linkDataArray.findIndex(function(e){return e.Key===n});return-1===a?e:Object(y.a)({},e,{linkDataArray:[].concat(Object(x.a)(e.linkDataArray.slice(0,a)),Object(x.a)(e.linkDataArray.slice(a+1)))})}).case(A,function(e,n){return Object(y.a)({},e,{selectedNodeKeys:[].concat(Object(x.a)(e.selectedNodeKeys),[n])})}).case(E,function(e,n){var a=e.selectedNodeKeys.findIndex(function(e){return e===n});return-1===a?e:Object(y.a)({},e,{selectedNodeKeys:[].concat(Object(x.a)(e.selectedNodeKeys.slice(0,a)),Object(x.a)(e.selectedNodeKeys.slice(a+1)))})}).build(),_=function(e){return e.selectedNodeKeys},B=Object(f.b)(function(e){return{nodes:_(e)}})(function(e){var n=e.nodes,a=n.reduce(function(e,n){return e+" "+n},"");return r.a.createElement("div",null,0===n.length?"No selection":"Selection: "+a)}),I=function(e){function n(){return Object(c.a)(this,n),Object(d.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(B,null),r.a.createElement(S,null))}}]),n}(r.a.Component),U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(35);var W,H=a(8),P=Object({NODE_ENV:"production",PUBLIC_URL:"/digiassignment"}).REACT_APP_GOJS_KEY;P&&(w.a.licenseKey=P),i.a.render(r.a.createElement(f.a,{store:(W=R,Object(H.c)(W,H.a.apply(void 0,[])))},r.a.createElement(I,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/digiassignment",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/digiassignment","/service-worker.js");U?function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):G(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):G(e)})}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.fd32f198.chunk.js.map