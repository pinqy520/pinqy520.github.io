(this.webpackJsonprevas=this.webpackJsonprevas||[]).push([[0],{12:function(t,e,n){t.exports=n(20)},18:function(t,e,n){t.exports=n.p+"static/media/logo.48529616.png"},19:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r);function a(t){return r.createElement("View",t)}var i=n(6),c=n(8),s=n(11),h=n(1),u=n(2),d=n(4),l=n(3),f=n(5);function p(){}var g=Object.freeze({}),m=Object.freeze([]);function y(t,e){var n=t.children.indexOf(e);n>=0&&t.children.splice(n,1)}function v(t,e){y(t,e),t.children.push(e),e.parent=t}function b(t,e){y(t,e),e.parent=void 0}function w(t,e,n){y(t,e);var r=t.children.indexOf(n);t.children.splice(r,0,e),e.parent=t}function x(t){var e=t.props.style;return void 0===e?g:e}function _(t){return t.frame}function O(t,e){var n=x(t),r=x(e);return(n.zIndex||0)-(r.zIndex||0)}function C(t,e){return-O(t,e)}function j(t,e,n){return Math.min(Math.max(t,e),n)}var E=/\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]?|[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/g,S=/\w+|\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]?|[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/g;var k={createImage:function(){return new Image},createOffscreenCanvas:p,requestAnimationFrame:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){return requestAnimationFrame(t)}))},T=[[],0];function F(t,e){switch(e){case"break-all":return t.match(E)||m;case"keep-all":return[t];default:return function(t){return t.match(S)||m}(t)}}function M(t,e){var n=e.textStyle,r=n.fontStyle,o=n.fontWeight,a=n.fontSize,i=n.fontFamily,c=n.textBaseline,s=n.color;t.font="".concat(r," ").concat(o," ").concat(a,"px ").concat(i),t.fillStyle=s,t.textBaseline=c}function R(t,e){var n=function(t,e,n,r){var o=[],a=0,i="",c=-1;function s(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",h=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if((h||i)&&o.push({width:a,text:i}),c<e.length&&r>0&&o.length>=r){var u=o[o.length-1];u.text=u.text+"...",u.width=t.measureText(u.text).width,c=e.length+1}else a=n,i=s}for(;c++<=e.length;)if(e.length>c){var h=e[c];if("\n"===h)s(0,"",!0);else{var u=t.measureText(h).width;u+a>n?s(u,h):(a+=u,i+=h)}}else s();return o}(t,F(e.content,e.textStyle.wordBreak),e.frame.width,e.numberOfLines);return[n,e.textStyle.lineHeight*n.length]}function B(t,e,n){var r=e.textStyle,o=e.frame;r.textShadowColor&&(t.shadowBlur=r.textShadowBlur,t.shadowColor=r.textShadowColor,t.shadowOffsetX=r.textShadowOffsetX,t.shadowOffsetY=r.textShadowOffsetY);for(var a=0;a<n.length;a++){var i=n[a],c=o.x;switch(r.textAlign){case"center":c=c+o.width/2-i.width/2;break;case"right":c=c+o.width-i.width}t.fillText(i.text,c,r.lineHeight*(a+.5)+o.y)}}var L=function(t){function e(){var t,n;Object(h.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(d.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(o)))).state={height:0},n._measured=T,n._drawed=void 0,n.drawText=function(t,e){var r=z(e);if(r){var o={numberOfLines:e.props.numberOfLines||0,textStyle:H(e),frame:_(e),content:r};M(t,o),A(o,n._drawed)&&(n._measured=R(t,o),n._drawed=o);var a=Object(s.a)(n._measured,2),i=a[0],c=a[1];c!==n.state.height?n.setState({height:c}):B(t,o,i)}},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props,e=t.children,n=t.numberOfLines,o=Object(c.a)(t,["children","numberOfLines"]);return r.createElement("View",o,r.createElement("Text",{content:e,customDrawer:this.drawText,textStyle:o.style,style:this.state,numberOfLines:n}))}}]),e}(r.Component),Y=["fontStyle","fontWeight","fontSize","fontFamily","textBaseline","wordBreak","lineHeight"],D={fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",fontWeight:"normal",fontSize:14,color:"#000",fontStyle:"normal",textBaseline:"middle"};function A(t,e){return!e||(t.content!==e.content||(t.numberOfLines!==e.numberOfLines||(t.frame.width!==e.frame.width||function(t,e){for(var n=0;n<Y.length;n++){var r=Y[n];if(t[r]!==e[r])return!0}return!1}(t.textStyle,e.textStyle))))}function z(t){if(_(t).width>0){var e=t.props.content;if("string"===typeof e)return e;if(Array.isArray(e))return e.join("")}return""}function H(t){var e=Object(i.a)({},D,{},t.props.textStyle);return e.lineHeight=e.lineHeight||1.1*e.fontSize,e}var W=n(10),I=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;Object(h.a)(this,t),this.x=e,this.y=n,this.width=r,this.height=o},X=function t(e,n){Object(h.a)(this,t),this.type=e,this.props=n,this.children=[],this.frame=new I,this.parent=void 0},P=n.n(W)()({supportsHydration:!1,supportsPersistence:!1,supportsMutation:!0,isPrimaryRenderer:!0,createInstance:function(t,e,n){return new X(t,e)},createTextInstance:function(){throw new Error("Revas: string cannot be child out of <Text/>")},appendInitialChild:v,appendChild:v,appendChildToContainer:v,removeChild:b,removeChildFromContainer:b,insertBefore:w,insertInContainerBefore:w,finalizeInitialChildren:function(){return!1},getPublicInstance:function(t){return t},prepareUpdate:function(){return!0},commitUpdate:function(t,e,n,r,o){t.props=o},prepareForCommit:p,resetAfterCommit:function(t){t.draw()},resetTextContent:p,getRootHostContext:function(){return{}},getChildHostContext:function(t){return t},shouldSetTextContent:function(){return!1},shouldDeprioritizeSubtree:function(){return!1},scheduleDeferredCallback:p,cancelDeferredCallback:p,setTimeout:setTimeout,clearTimeout:clearTimeout,noTimeout:-1,now:Date.now}),U=function(){function t(e){var n=this;if(Object(h.a)(this,t),this.src=e,this.image=k.createImage(),this.targets=[],this._ready=!1,this.onload=function(){n._ready=!0,P.batchedUpdates((function(){n.targets.forEach((function(t){return t(n.image)}))}))},this.onerror=function(){},!this.image)throw new Error("Revas: createImage must be initialized");this.image.onload=this.onload,this.image.onerror=this.onerror,this.image.src=e}return Object(u.a)(t,[{key:"empty",get:function(){return 0===this.targets.length}}]),Object(u.a)(t,[{key:"add",value:function(t){this.targets.indexOf(t)<0&&(this.targets.push(t),this._ready&&t(this.image))}},{key:"remove",value:function(t){var e=this.targets.indexOf(t);this.targets.splice(e,1)}}]),t}(),q=new Map;function G(t,e){q.has(t)||q.set(t,new U(t));var n=q.get(t);return e&&n.add(e),n.image}function J(t,e){if(q.has(t)){var n=q.get(t);n.remove(e),n.empty&&q.delete(t)}}function N(t,e){var n=G(e.props.src);if(!(n.height<=0)){var r=_(e),o=r.width,a=r.height,i=r.x,c=r.y;if(!(o<=0||a<=0)){var s=x(e),h={width:n.width,height:n.height},u=s.focusPoint||{x:.5*h.width,y:.5*h.height};if("contain"===s.resizeMode){var d=Math.min(o/h.width,a/h.height)||1,l={width:h.width*d,height:h.height*d},f=Math.round(h.width),p=Math.round(h.height),g=Math.round(l.width),m=Math.round(l.height),y=Math.round((o-l.width)/2+i),v=Math.round((a-l.height)/2+c);t.drawImage(n,0,0,f,p,y,v,g,m)}else{var b=Math.max(o/h.width,a/h.height)||1,w={width:h.width*b,height:h.height*b},O=Math.round(j(.5*o-u.x*b,o-w.width,0))*(-1/b),C=Math.round(j(.5*a-u.y*b,a-w.height,0))*(-1/b),E=Math.round(h.width-2*O),S=Math.round(h.height-2*C),k=Math.round(o),T=Math.round(a),F=Math.round(i),M=Math.round(c);t.drawImage(n,O,C,E,S,F,M,k,T)}}}}var V=function(t){function e(){var t,n;Object(h.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(d.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(o)))).state={ready:!1},n.onReady=function(){n.setState({ready:!0})},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.props.src&&G(this.props.src,this.onReady)}},{key:"componentDidUpdate",value:function(t){t.src!==this.props.src&&(t.src&&J(t.src,this.onReady),this.props.src&&G(this.props.src,this.onReady))}},{key:"componentWillUnmount",value:function(){this.props.src&&J(this.props.src,this.onReady)}},{key:"render",value:function(){return r.createElement("Image",Object(i.a)({customDrawer:this.state.ready?N:void 0},this.props))}}]),e}(r.Component),$=function(t){function e(){var t,n;Object(h.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(d.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(o)))).state={touching:!1},n._start=void 0,n._tid=0,n._onTouchStart=function(t){n._tid=+Object.keys(t.touches)[0],n._start=t.touches[n._tid],n.setState({touching:!0})},n._onTouchEnd=function(t){n._start&&t.touches[n._tid]&&Math.abs(n._start.x-t.touches[n._tid].x)<3&&Math.abs(n._start.y-t.touches[n._tid].y)<3&&n.props.onPress&&n.props.onPress(),n.setState({touching:!1})},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.createElement("Touchable",Object(i.a)({onTouchStart:this._onTouchStart,onTouchEnd:this._onTouchEnd},this.props,{style:Object(i.a)({},this.props.style,{opacity:this.state.touching?this.props.activeOpacity:1})}))}}]),e}(r.Component);$.defaultProps={activeOpacity:.7};var K=function(){function t(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;Object(h.a)(this,t),this.handler=e,this.max=r,this.top=0,this._lastY=-1,this._lastTimestamp=0,this._v=0,this._tid=0,this.touchStart=function(t){n._lastY<0&&(n._tid=+Object.keys(t.touches)[0],n._lastTimestamp=t.timestamp,n._lastY=t.touches[n._tid].y)},this.touchMove=function(t){if(n._lastY>=0&&t.touches[n._tid]){var e=t.touches[n._tid].y,r=n._lastY-e,o=t.timestamp-n._lastTimestamp;n._v=r/o,n._lastTimestamp=t.timestamp,n._lastY=e,n.change(r)}},this.touchEnd=function(t){n._lastY>=0&&(n._lastTimestamp=Date.now(),n._lastY=-1,k.requestAnimationFrame(n.afterEnd))},this.afterEnd=function(){if(n._lastY<0&&Math.abs(n._v)>.1){var t=Date.now(),e=t-n._lastTimestamp;n._v=Q(n._v,e);var r=n._v*e;n._lastTimestamp=t,n.change(r),k.requestAnimationFrame(n.afterEnd)}}}return Object(u.a)(t,[{key:"change",value:function(t){var e=j(this.top+t,0,this.max>0?this.max:0);e!==this.top?(this.top=e,this.handler({y:this.top,vy:this._v,x:0,vx:0,timestamp:this._lastTimestamp})):this._lastY<0&&(this._v=0)}}]),t}();function Q(t,e){return t-.005*e*t}var Z=function(t){function e(){var t,n;Object(h.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(d.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(o)))).state={top:0},n._height=-1,n._contentHeight=-1,n._scroller=new K((function(t){n.setState({top:t.y}),n.props.onScroll&&n.props.onScroll(t)})),n._onLayout=function(t){n._height!==t.height&&(n._height=t.height,n._checkLayout())},n._onContentLayout=function(t){n._contentHeight!==t.height&&(n._contentHeight=t.height,n._checkLayout())},n._checkLayout=function(){var t=n._contentHeight-n._height;t>0&&t!==n._scroller.max&&(n._scroller.max=t,n._scroller.change(0))},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props,e=t.children,n=Object(c.a)(t,["children"]);return r.createElement("Scrollable",Object(i.a)({},n,{onTouchStart:this._scroller.touchStart,onTouchMove:this._scroller.touchMove,onTouchEnd:this._scroller.touchEnd,onLayout:this._onLayout}),r.createElement("ScrollContent",{onLayout:this._onContentLayout,style:{translateY:-this.state.top},children:e}))}}]),e}(r.Component),tt=function(t){function e(){return Object(h.a)(this,e),Object(d.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.createElement("LinearGradient",Object(i.a)({},this.props,{customDrawer:et}))}}]),e}(r.Component);function et(t,e){var n=e.props.colors;if(n&&n.length>0){for(var r=e.props,o=r.start,a=void 0===o?{x:0,y:0}:o,i=r.end,c=void 0===i?{x:1,y:0}:i,s=_(e),h=t.createLinearGradient(a.x*s.width+s.x,a.y*s.height+s.y,c.x*s.width+s.x,c.y*s.height+s.y),u=0;u<n.length;u++)h.addColorStop(u/(n.length-1),n[u]);t.fillStyle=h,t.fill()}}var nt=n(7),rt=n(17);function ot(t){return{style:x(t),children:t.children.map(ot),node:t}}function at(t){var e=ot(t);return e.style=t.props,function(){rt(e),function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=e.layout,a=o.left,i=o.top,c=o.width,s=o.height,h=e.node,u=e.children;h.frame=new I(n+a,r+i,c,s),h.props.onLayout&&h.props.onLayout(h.frame);for(var d=0;d<u.length;d++)t(u[d],h.frame.x,h.frame.y)}(e)}}var it={};function ct(t,e,n){if("touchstart"===e){var r=function t(e,n,r){if("none"!==e.props.pointerEvents){var o=e.children.slice().sort(C),a=x(e);n-=a.translateX||0,r-=a.translateY||0;for(var i=0;i<o.length;i++){var c=t(o[i],n,r);if(c)return c}if("box-none"!==e.props.pointerEvents){var s=_(e);return s.x<n&&s.y<r&&n<=s.x+s.width&&r<=s.y+s.height?e:void 0}}}(t,n.x,n.y);return it[n.identifier]=r||t,it[n.identifier]}if("touchmove"===e)return it[n.identifier]||t;if("touchend"===e){var o=it[n.identifier];return delete it[n.identifier],o||t}return t}var st={touchstart:"onTouchStart",touchmove:"onTouchMove",touchend:"onTouchEnd"};var ht=function(t){function e(t,n,r){var o;return Object(h.a)(this,e),(o=Object(d.a)(this,Object(l.a)(e).call(this,"root",{width:n,height:r})))._ready=!0,o._next=!1,o._ctx=void 0,o.handleTouch=function(t){var e=new WeakSet;Object.values(t.touches).forEach((function(n){var r=ct(Object(nt.a)(o),t.type,n);r.parent&&!e.has(r)&&(e.add(r),function(t,e){var n=st[e.type];if(n)for(;t;){if(t.props[n]&&"box-none"!==t.props.pointerEvents&&!1===t.props[n](e))return;t=t.parent}}(r,t))}))},o.handleResize=function(t,e){t!==o.props.width&&e!==o.props.height&&(o.props.width=t,o.props.height=e,o.draw())},o.draw=function(){!1!==o._ready?(o._ready=!1,o._ctx&&(at(Object(nt.a)(o))(),o._ctx.clearRect(0,0,o.props.width,o.props.height),function t(e,n){var r=x(n),o=_(n);if(!(r.opacity<=0)){if(e.save(),null!==r.opacity&&r.opacity<1&&(e.globalAlpha=r.opacity),(r.translateX||r.translateY)&&e.translate(r.translateX||0,r.translateY||0),r.rotate||r.scaleX||r.scaleY||r.scale){var a=o.x+o.width/2,i=o.y+o.height/2;e.translate(a,i),r.rotate&&e.rotate(r.rotate),(r.scaleX||r.scaleY||r.scale)&&e.scale(r.scale||r.scaleX||0,r.scale||r.scaleY||0),e.translate(-a,-i)}var c=function(t){return{tl:t.borderTopLeftRadius||t.borderRadius||0,tr:t.borderTopRightRadius||t.borderRadius||0,bl:t.borderBottomLeftRadius||t.borderRadius||0,br:t.borderBottomRightRadius||t.borderRadius||0}}(r);e.beginPath(),e.moveTo(o.x+c.tl,o.y),e.arcTo(o.x+o.width,o.y,o.x+o.width,o.y+o.height,c.tr),e.arcTo(o.x+o.width,o.y+o.height,o.x,o.y+o.height,c.br),e.arcTo(o.x,o.y+o.height,o.x,o.y,c.bl),e.arcTo(o.x,o.y,o.x+o.width,o.y,c.tl),e.closePath(),"hidden"===r.overflow&&e.clip(),e.save();var s=r.backgroundColor||"transparent";"transparent"!==s&&(r.shadowColor&&(e.shadowBlur=r.shadowBlur,e.shadowColor=r.shadowColor,e.shadowOffsetX=r.shadowOffsetX,e.shadowOffsetY=r.shadowOffsetY),e.fillStyle=s,e.fill()),r.borderColor&&r.borderWidth>0&&(e.lineWidth=r.borderWidth,e.strokeStyle=r.borderColor,e.stroke()),e.restore(),n.props.customDrawer&&(e.save(),n.props.customDrawer(e,n),e.restore()),n.children.slice().sort(O).forEach((function(n){t(e,n)})),e.restore()}}(o._ctx,Object(nt.a)(o)),k.requestAnimationFrame(o.ready))):o._next=!0},o.ready=function(){o._ready=!0,o._next&&(o._next=!1,o.draw())},o._ctx=t,o}return Object(f.a)(e,t),Object(u.a)(e,[{key:"destory",value:function(){this._ctx&&(this._ctx.clearRect(0,0,this.props.width,this.props.height),this._ctx=null)}}]),e}(X);var ut=function(t){function e(){var t,n;Object(h.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(d.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(o)))).state={translateX:0,translateY:0},n._start={x:0,y:0},n._tid=0,n.touchStart=function(t){n._tid=+Object.keys(t.touches)[0];var e=t.touches[n._tid];n._start.x=e.x-n.state.translateX,n._start.y=e.y-n.state.translateY},n.touchMove=function(t){if(n._start&&t.touches[n._tid]){var e=t.touches[n._tid],r=e.x,o=e.y;n.setState({translateX:r-n._start.x,translateY:o-n._start.y})}},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement(a,Object.assign({},this.props,{style:Object(i.a)({},this.props.style,{},this.state),onTouchStart:this.touchStart,onTouchMove:this.touchMove}))}}]),e}(o.a.Component);var dt={container:{flex:1,justifyContent:"center",backgroundColor:"#abcdef"},card:{padding:20,margin:10,borderRadius:10,shadowBlur:20,shadowColor:"rgba(0, 0, 0, 0.2)",shadowOffsetX:0,shadowOffsetY:5,backgroundColor:"#fff",zIndex:1,translateX:50},decorator:{height:4,borderRadius:2,margin:10,marginLeft:40,marginRight:40},title:{fontSize:20,textAlign:"center",fontWeight:"bold",marginBottom:10},text:{fontSize:14,lineHeight:20,textAlign:"center",padding:10,paddingBottom:0,color:"#333"},logo:{height:100,borderRadius:10,overflow:"hidden",resizeMode:"contain"},btn:{justifyContent:"center",height:40,backgroundColor:"blue"},btnText:{fontSize:20,textAlign:"center",height:30,lineHeight:30,color:"#fff",fontWeight:"bold"}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(19),function(t,e){var n=new ht(e.getContext("2d"),e.clientWidth,e.clientHeight);e.ontouchstart=e.ontouchmove=e.ontouchend=e.ontouchcancel=function(t){return n.handleTouch(function(t){var e={},n="touchcancel"===t.type?"touchend":t.type;return Object.values(t.changedTouches).forEach((function(t){var n=t.target,r=n.offsetLeft,o=n.offsetTop;e[t.identifier]={identifier:t.identifier,x:t.clientX-r,y:t.clientY-o}})),{type:n,touches:e,timestamp:t.timeStamp||Date.now()}}(t))},e.onresize=function(t){return n.handleResize(e.clientWidth,e.clientHeight)};var r=P.createContainer(n,!1,!1);P.updateContainer(t,r,null,p)}(o.a.createElement((function(){return o.a.createElement(a,{style:dt.container},o.a.createElement(ut,{style:dt.card},o.a.createElement(L,{style:dt.title},"Drag and Move! "),o.a.createElement(V,{style:dt.logo,src:n(18)}),o.a.createElement(L,{style:dt.text,numberOfLines:2},"Revas\u8ba9\u4f60\u53ef\u4ee5\u7528React\u548cCSS\uff0c\u5728Canvas\u4e0a\u7ed8\u5236\u9ad8\u6027\u80fd\u4ea4\u4e92\u754c\u9762\uff0c\u57fa\u4e8e\bReact v16\u548cYoga Layout\uff5e","\ud83c\udf89"),o.a.createElement(tt,{style:dt.decorator,colors:["#9254DE","#B37FEB","#91D5FF","#40A9FF"]}),o.a.createElement($,{style:dt.btn,onPress:function(){return alert("Enjoy!~\ud83c\udf89")}},o.a.createElement(L,{style:dt.btnText},"Go"))),o.a.createElement(Z,{style:{position:"absolute",top:0,left:0,right:0,bottom:0}},o.a.createElement(a,{style:{height:80,backgroundColor:"#9254DE"}}),o.a.createElement(a,{style:{height:80,backgroundColor:"#91D5FF"}}),o.a.createElement(a,{style:{height:80,backgroundColor:"#B37FEB"}}),o.a.createElement(a,{style:{height:80,backgroundColor:"#40A9FF"}}),o.a.createElement(a,{style:{height:80,backgroundColor:"#9254DE"}}),o.a.createElement(a,{style:{height:80,backgroundColor:"#91D5FF"}}),o.a.createElement(a,{style:{height:80,backgroundColor:"#B37FEB"}}),o.a.createElement(a,{style:{height:80,backgroundColor:"#40A9FF"}}),o.a.createElement(a,{style:{height:80,backgroundColor:"#9254DE"}}),o.a.createElement(a,{style:{height:80,backgroundColor:"#91D5FF"}}),o.a.createElement(a,{style:{height:80,backgroundColor:"#B37FEB"}}),o.a.createElement(a,{style:{height:80,backgroundColor:"#40A9FF"}}),o.a.createElement(a,{style:{height:80,backgroundColor:"#9254DE"}}),o.a.createElement(a,{style:{height:80,backgroundColor:"#91D5FF"}}),o.a.createElement(a,{style:{height:80,backgroundColor:"#B37FEB"}}),o.a.createElement(a,{style:{height:80,backgroundColor:"#40A9FF"}})))})),function(){var t=document.createElement("canvas"),e=t.getContext("2d");function n(n){if(window.innerHeight>0&&window.innerHeight>0&&(window.innerHeight!==t.clientHeight||window.innerWidth!==t.clientWidth)){var r=window.devicePixelRatio;t.width=window.innerWidth*r,t.height=window.innerHeight*r,t.style.width=window.innerWidth+"px",t.style.height=window.innerHeight+"px",e.resetTransform(),e.scale(r,r),n&&t.onresize&&t.onresize(n)}}return n(),t.className="canvas",document.body.appendChild(t),window.onorientationchange=window.onresize=function(){return requestAnimationFrame(n)},t}());"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.3af23dd0.chunk.js.map