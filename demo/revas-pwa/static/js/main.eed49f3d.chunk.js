(this.webpackJsonprevas=this.webpackJsonprevas||[]).push([[0],{12:function(t,e,n){t.exports=n(20)},18:function(t,e,n){t.exports=n.p+"static/media/logo.48529616.png"},19:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r);function o(t){return r.createElement("View",t)}var i=n(6),s=n(8),c=n(11),h=n(1),u=n(2),l=n(4),d=n(3),f=n(5);function p(){}var g=Object.freeze({}),v=Object.freeze([]);function m(t,e){var n=t.children.indexOf(e);n>=0&&t.children.splice(n,1)}function y(t,e){m(t,e),t.children.push(e),e.parent=t}function b(t,e){m(t,e),e.parent=void 0}function w(t,e,n){m(t,e);var r=t.children.indexOf(n);t.children.splice(r,0,e),e.parent=t}function x(t){var e=t.props.style;return void 0===e?g:e}function _(t){return t.frame}function O(t,e){var n=x(t),r=x(e);return(n.zIndex||0)-(r.zIndex||0)}function j(t,e){return-O(t,e)}function C(t,e,n){return Math.min(Math.max(t,e),n)}var E=/\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]?|[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/g,k=/\w+|\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]?|[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/g;var S=function(){return new Image},T=[[],0];function F(t,e){switch(e){case"break-all":return t.match(E)||v;case"keep-all":return[t];default:return function(t){return t.match(k)||v}(t)}}function M(t,e){var n=e.textStyle,r=n.fontStyle,a=n.fontWeight,o=n.fontSize,i=n.fontFamily,s=n.textBaseline,c=n.color;t.font="".concat(r," ").concat(a," ").concat(o,"px ").concat(i),t.fillStyle=c,t.textBaseline=s}function R(t,e){var n=function(t,e,n,r){var a=[],o=0,i="",s=-1;function c(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",h=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if((h||i)&&a.push({width:o,text:i}),s<e.length&&r>0&&a.length>=r){var u=a[a.length-1];u.text=u.text+"...",u.width=t.measureText(u.text).width,s=e.length+1}else o=n,i=c}for(;s++<=e.length;)if(e.length>s){var h=e[s];if("\n"===h)c(0,"",!0);else{var u=t.measureText(h).width;u+o>n?c(u,h):(o+=u,i+=h)}}else c();return a}(t,F(e.content,e.textStyle.wordBreak),e.frame.width,e.numberOfLines);return[n,e.textStyle.lineHeight*n.length]}function Y(t,e,n){var r=e.textStyle,a=e.frame;r.textShadowColor&&(t.shadowBlur=r.textShadowBlur,t.shadowColor=r.textShadowColor,t.shadowOffsetX=r.textShadowOffsetX,t.shadowOffsetY=r.textShadowOffsetY);for(var o=0;o<n.length;o++){var i=n[o],s=a.x;switch(r.textAlign){case"center":s=s+a.width/2-i.width/2;break;case"right":s=s+a.width-i.width}t.fillText(i.text,s,r.lineHeight*(o+.5)+a.y)}}var B=function(t){function e(){var t,n;Object(h.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).state={height:0},n._measured=T,n._drawed=void 0,n.drawText=function(t,e){var r=H(e);if(r){var a={numberOfLines:e.props.numberOfLines||0,textStyle:A(e),frame:_(e),content:r};M(t,a),z(a,n._drawed)&&(n._measured=R(t,a),n._drawed=a);var o=Object(c.a)(n._measured,2),i=o[0],s=o[1];s!==n.state.height?n.setState({height:s}):Y(t,a,i)}},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props,e=t.children,n=t.numberOfLines,a=Object(s.a)(t,["children","numberOfLines"]);return r.createElement("View",a,r.createElement("Text",{content:e,customDrawer:this.drawText,textStyle:a.style,style:this.state,numberOfLines:n}))}}]),e}(r.Component),L=["fontStyle","fontWeight","fontSize","fontFamily","textBaseline","wordBreak","lineHeight"],D={fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",fontWeight:"normal",fontSize:14,color:"#000",fontStyle:"normal",textBaseline:"middle"};function z(t,e){return!e||(t.content!==e.content||(t.numberOfLines!==e.numberOfLines||(t.frame.width!==e.frame.width||function(t,e){for(var n=0;n<L.length;n++){var r=L[n];if(t[r]!==e[r])return!0}return!1}(t.textStyle,e.textStyle))))}function H(t){if(_(t).width>0){var e=t.props.content;if("string"===typeof e)return e;if(Array.isArray(e))return e.join("")}return""}function A(t){var e=Object(i.a)({},D,{},t.props.textStyle);return e.lineHeight=e.lineHeight||1.1*e.fontSize,e}var W=n(10),X=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;Object(h.a)(this,t),this.x=e,this.y=n,this.width=r,this.height=a},I=function t(e,n){Object(h.a)(this,t),this.type=e,this.props=n,this.children=[],this.frame=new X,this.parent=void 0},V=n.n(W)()({supportsHydration:!1,supportsPersistence:!1,supportsMutation:!0,isPrimaryRenderer:!0,createInstance:function(t,e,n){return new I(t,e)},createTextInstance:function(){throw new Error("Revas: string cannot be child out of <Text/>")},appendInitialChild:y,appendChild:y,appendChildToContainer:y,removeChild:b,removeChildFromContainer:b,insertBefore:w,insertInContainerBefore:w,finalizeInitialChildren:function(){return!1},getPublicInstance:function(t){return t},prepareUpdate:function(){return!0},commitUpdate:function(t,e,n,r,a){t.props=a},prepareForCommit:p,resetAfterCommit:function(t){t.draw(!0)},resetTextContent:p,getRootHostContext:function(){return{}},getChildHostContext:function(t){return t},shouldSetTextContent:function(){return!1},shouldDeprioritizeSubtree:function(){return!1},scheduleDeferredCallback:p,cancelDeferredCallback:p,setTimeout:setTimeout,clearTimeout:clearTimeout,noTimeout:-1,now:Date.now}),P=function(){function t(e){var n=this;if(Object(h.a)(this,t),this.src=e,this.image=S(),this.targets=[],this._ready=!1,this.onload=function(){n._ready=!0,V.batchedUpdates((function(){n.targets.forEach((function(t){return t(n.image)}))}))},this.onerror=function(){},!this.image)throw new Error("Revas: createImage must be initialized");this.image.onload=this.onload,this.image.onerror=this.onerror,this.image.src=e}return Object(u.a)(t,[{key:"empty",get:function(){return 0===this.targets.length}}]),Object(u.a)(t,[{key:"add",value:function(t){this.targets.indexOf(t)<0&&(this.targets.push(t),this._ready&&t(this.image))}},{key:"remove",value:function(t){var e=this.targets.indexOf(t);this.targets.splice(e,1)}}]),t}(),U=new Map;function q(t,e){U.has(t)||U.set(t,new P(t));var n=U.get(t);return e&&n.add(e),n.image}function G(t,e){if(U.has(t)){var n=U.get(t);n.remove(e),n.empty&&U.delete(t)}}function J(t,e){var n=q(e.props.src);if(!(n.height<=0)){var r=_(e),a=r.width,o=r.height,i=r.x,s=r.y;if(!(a<=0||o<=0)){var c=x(e),h={width:n.width,height:n.height},u=c.focusPoint||{x:.5*h.width,y:.5*h.height};if("contain"===c.resizeMode){var l=Math.min(a/h.width,o/h.height)||1,d={width:h.width*l,height:h.height*l},f=Math.round(h.width),p=Math.round(h.height),g=Math.round(d.width),v=Math.round(d.height),m=Math.round((a-d.width)/2+i),y=Math.round((o-d.height)/2+s);t.drawImage(n,0,0,f,p,m,y,g,v)}else{var b=Math.max(a/h.width,o/h.height)||1,w={width:h.width*b,height:h.height*b},O=Math.round(C(.5*a-u.x*b,a-w.width,0))*(-1/b),j=Math.round(C(.5*o-u.y*b,o-w.height,0))*(-1/b),E=Math.round(h.width-2*O),k=Math.round(h.height-2*j),S=Math.round(a),T=Math.round(o),F=Math.round(i),M=Math.round(s);t.drawImage(n,O,j,E,k,F,M,S,T)}}}}var N=function(t){function e(){var t,n;Object(h.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).state={ready:!1},n.onReady=function(){n.setState({ready:!0})},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.props.src&&q(this.props.src,this.onReady)}},{key:"componentDidUpdate",value:function(t){t.src!==this.props.src&&(t.src&&G(t.src,this.onReady),this.props.src&&q(this.props.src,this.onReady))}},{key:"componentWillUnmount",value:function(){this.props.src&&G(this.props.src,this.onReady)}},{key:"render",value:function(){return r.createElement("Image",Object(i.a)({customDrawer:this.state.ready?J:void 0},this.props))}}]),e}(r.Component),$=function(){function t(e){Object(h.a)(this,t),this._value=e,this._observer=void 0}return Object(u.a)(t,[{key:"setValue",value:function(t){this._value=t,this._observer&&this._observer(!1)}},{key:"getValue",value:function(t){return t&&(this._observer=t),this._value}}]),t}();function K(t,e,n){return e instanceof $?e.getValue(t):e||n}function Q(t,e){return t instanceof $?t.getValue():t||e}var Z=function(t){function e(){var t,n;Object(h.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).opacity=new $(1),n._start=void 0,n._tid=0,n._onTouchStart=function(t){n._tid=+Object.keys(t.touches)[0],n._start=t.touches[n._tid],n.opacity.setValue(n.props.activeOpacity)},n._onTouchEnd=function(t){n._start&&t.touches[n._tid]&&Math.abs(n._start.x-t.touches[n._tid].x)<3&&Math.abs(n._start.y-t.touches[n._tid].y)<3&&n.props.onPress&&n.props.onPress(),n.opacity.setValue(1)},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.createElement("Touchable",Object(i.a)({onTouchStart:this._onTouchStart,onTouchEnd:this._onTouchEnd},this.props,{style:Object(i.a)({},this.props.style,{opacity:this.opacity})}))}}]),e}(r.Component);Z.defaultProps={activeOpacity:.7};var tt=function(){function t(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;Object(h.a)(this,t),this.handler=e,this.max=r,this.top=0,this._lastY=-1,this._lastTimestamp=0,this._v=0,this._tid=0,this.touchStart=function(t){n._lastY<0&&(n._tid=+Object.keys(t.touches)[0],n._lastTimestamp=t.timestamp,n._lastY=t.touches[n._tid].y)},this.touchMove=function(t){if(n._lastY>=0&&t.touches[n._tid]){var e=t.touches[n._tid].y,r=n._lastY-e,a=t.timestamp-n._lastTimestamp;n._v=r/a,n._lastTimestamp=t.timestamp,n._lastY=e,n.change(r)}},this.touchEnd=function(t){n._lastY>=0&&(n._lastTimestamp=Date.now(),n._lastY=-1,requestAnimationFrame(n.afterEnd))},this.afterEnd=function(){if(n._lastY<0&&Math.abs(n._v)>.1){var t=Date.now(),e=t-n._lastTimestamp;n._v=et(n._v,e);var r=n._v*e;n._lastTimestamp=t,n.change(r),requestAnimationFrame(n.afterEnd)}}}return Object(u.a)(t,[{key:"change",value:function(t){var e=C(this.top+t,0,this.max>0?this.max:0);e!==this.top?(this.top=e,this.handler({y:this.top,vy:this._v,x:0,vx:0,timestamp:this._lastTimestamp})):this._lastY<0&&(this._v=0)}}]),t}();function et(t,e){return t-.005*e*t}var nt=function(t){function e(){var t,n;Object(h.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).translateY=new $(0),n._height=-1,n._contentHeight=-1,n._scroller=new tt((function(t){n.translateY.setValue(-t.y),n.props.onScroll&&n.props.onScroll(t)})),n._onLayout=function(t){n._height!==t.height&&(n._height=t.height,n._checkLayout())},n._onContentLayout=function(t){n._contentHeight!==t.height&&(n._contentHeight=t.height,n._checkLayout())},n._checkLayout=function(){var t=n._contentHeight-n._height;t>0&&t!==n._scroller.max&&(n._scroller.max=t,n._scroller.change(0))},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props,e=t.children,n=Object(s.a)(t,["children"]);return r.createElement("Scrollable",Object(i.a)({},n,{onTouchStart:this._scroller.touchStart,onTouchMove:this._scroller.touchMove,onTouchEnd:this._scroller.touchEnd,onLayout:this._onLayout}),r.createElement("ScrollContent",{onLayout:this._onContentLayout,style:{translateY:this.translateY},children:e}))}}]),e}(r.Component),rt=function(t){function e(){return Object(h.a)(this,e),Object(l.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.createElement("LinearGradient",Object(i.a)({},this.props,{customDrawer:at}))}}]),e}(r.Component);function at(t,e){var n=e.props.colors;if(n&&n.length>0){for(var r=e.props,a=r.start,o=void 0===a?{x:0,y:0}:a,i=r.end,s=void 0===i?{x:1,y:0}:i,c=_(e),h=t.createLinearGradient(o.x*c.width+c.x,o.y*c.height+c.y,s.x*c.width+c.x,s.y*c.height+c.y),u=0;u<n.length;u++)h.addColorStop(u/(n.length-1),n[u]);t.fillStyle=h,t.fill()}}var ot=n(7),it=n(17);function st(t){return{style:x(t),children:t.children.map(st),node:t}}function ct(t){var e=st(t);return e.style=t.props,function(){it(e),function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=e.layout,o=a.left,i=a.top,s=a.width,c=a.height,h=e.node,u=e.children;h.frame=new X(n+o,r+i,s,c),h.props.onLayout&&h.props.onLayout(h.frame);for(var l=0;l<u.length;l++)t(u[l],h.frame.x,h.frame.y)}(e)}}var ht={};function ut(t,e,n){if("touchstart"===e){var r=function t(e,n,r){if("none"!==e.props.pointerEvents){var a=e.children.slice().sort(j),o=x(e);n-=Q(o.translateX,0),r-=Q(o.translateY,0);for(var i=0;i<a.length;i++){var s=t(a[i],n,r);if(s)return s}if("box-none"!==e.props.pointerEvents){var c=_(e);return c.x<n&&c.y<r&&n<=c.x+c.width&&r<=c.y+c.height?e:void 0}}}(t,n.x,n.y);return ht[n.identifier]=r||t,ht[n.identifier]}if("touchmove"===e)return ht[n.identifier]||t;if("touchend"===e){var a=ht[n.identifier];return delete ht[n.identifier],a||t}return t}var lt={touchstart:"onTouchStart",touchmove:"onTouchMove",touchend:"onTouchEnd"};var dt=function(t){function e(t,n,r){var a;return Object(h.a)(this,e),(a=Object(l.a)(this,Object(d.a)(e).call(this,"root",{width:n,height:r})))._ready=!0,a._next=!1,a._reflow=!1,a._ctx=void 0,a.handleTouch=function(t){var e=new WeakSet;Object.values(t.touches).forEach((function(n){var r=ut(Object(ot.a)(a),t.type,n);r.parent&&!e.has(r)&&(e.add(r),function(t,e){var n=lt[e.type];if(n)for(;t;){if(t.props[n]&&"box-none"!==t.props.pointerEvents&&!1===t.props[n](e))return;t=t.parent}}(r,t))}))},a.handleResize=function(t,e){t!==a.props.width&&e!==a.props.height&&(a.props.width=t,a.props.height=e,a.draw(!0))},a.draw=function(t){a._reflow=a._reflow||t,!1!==a._ready?(a._ready=!1,a._ctx&&(a._reflow&&(ct(Object(ot.a)(a))(),a._reflow=!1),a._ctx.clearRect(0,0,a.props.width,a.props.height),function t(e,n,r){var a=x(n),o=_(n);if(!(a.opacity<=0)){e.save();var i=K(r.draw,a.opacity),s=K(r.draw,a.translateX,0),c=K(r.draw,a.translateY,0);if(null!==i&&i<1&&(e.globalAlpha=i),(s||c)&&e.translate(s,c),a.rotate||a.scaleX||a.scaleY||a.scale){var h=o.x+o.width/2,u=o.y+o.height/2;e.translate(h,u),a.rotate&&e.rotate(a.rotate),(a.scaleX||a.scaleY||a.scale)&&e.scale(a.scale||a.scaleX||0,a.scale||a.scaleY||0),e.translate(-h,-u)}var l=function(t){return{tl:t.borderTopLeftRadius||t.borderRadius||0,tr:t.borderTopRightRadius||t.borderRadius||0,bl:t.borderBottomLeftRadius||t.borderRadius||0,br:t.borderBottomRightRadius||t.borderRadius||0}}(a);e.beginPath(),e.moveTo(o.x+l.tl,o.y),e.arcTo(o.x+o.width,o.y,o.x+o.width,o.y+o.height,l.tr),e.arcTo(o.x+o.width,o.y+o.height,o.x,o.y+o.height,l.br),e.arcTo(o.x,o.y+o.height,o.x,o.y,l.bl),e.arcTo(o.x,o.y,o.x+o.width,o.y,l.tl),e.closePath(),"hidden"===a.overflow&&e.clip(),e.save();var d=a.backgroundColor||"transparent";"transparent"!==d&&(a.shadowColor&&(e.shadowBlur=a.shadowBlur,e.shadowColor=a.shadowColor,e.shadowOffsetX=a.shadowOffsetX,e.shadowOffsetY=a.shadowOffsetY),e.fillStyle=d,e.fill()),a.borderColor&&a.borderWidth>0&&(e.lineWidth=a.borderWidth,e.strokeStyle=a.borderColor,e.stroke()),e.restore(),n.props.customDrawer&&(e.save(),n.props.customDrawer(e,n),e.restore()),n.children.slice().sort(O).forEach((function(n){t(e,n,r)})),e.restore()}}(a._ctx,Object(ot.a)(a),Object(ot.a)(a)),requestAnimationFrame(a.ready))):a._next=!0},a.ready=function(){a._ready=!0,a._next&&(a._next=!1,a.draw(!1))},a._ctx=t,a}return Object(f.a)(e,t),Object(u.a)(e,[{key:"destory",value:function(){this._ctx&&(this._ctx.clearRect(0,0,this.props.width,this.props.height),this._ctx=null)}}]),e}(I);var ft=function(t){function e(){var t,n;Object(h.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).translateX=new $(0),n.translateY=new $(0),n._start={x:0,y:0},n._tid=0,n.touchStart=function(t){n._tid=+Object.keys(t.touches)[0];var e=t.touches[n._tid];n._start.x=e.x-n.translateX.getValue(),n._start.y=e.y-n.translateY.getValue()},n.touchMove=function(t){if(n._start&&t.touches[n._tid]){var e=t.touches[n._tid],r=e.x,a=e.y;n.translateX.setValue(r-n._start.x),n.translateY.setValue(a-n._start.y)}},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement(o,Object.assign({},this.props,{style:Object(i.a)({},this.props.style,{translateX:this.translateX,translateY:this.translateY}),onTouchStart:this.touchStart,onTouchMove:this.touchMove}))}}]),e}(a.a.Component);var pt={container:{flex:1,justifyContent:"center",backgroundColor:"#abcdef"},card:{padding:20,margin:10,borderRadius:10,shadowBlur:20,shadowColor:"rgba(0, 0, 0, 0.2)",shadowOffsetX:0,shadowOffsetY:5,backgroundColor:"#fff",zIndex:1,translateX:50},decorator:{height:4,borderRadius:2,margin:10,marginLeft:40,marginRight:40},title:{fontSize:20,textAlign:"center",fontWeight:"bold",marginBottom:10},text:{fontSize:14,lineHeight:20,textAlign:"center",padding:10,paddingBottom:0,color:"#333"},logo:{height:100,borderRadius:10,overflow:"hidden",resizeMode:"contain"},btn:{justifyContent:"center",height:40,backgroundColor:"blue"},btnText:{fontSize:20,textAlign:"center",height:30,lineHeight:30,color:"#fff",fontWeight:"bold"}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(19),function(t,e){var n=new dt(e.getContext("2d"),e.clientWidth,e.clientHeight);e.ontouchstart=e.ontouchmove=e.ontouchend=e.ontouchcancel=function(t){return n.handleTouch(function(t){var e={},n="touchcancel"===t.type?"touchend":t.type;return Object.values(t.changedTouches).forEach((function(t){var n=t.target,r=n.offsetLeft,a=n.offsetTop;e[t.identifier]={identifier:t.identifier,x:t.clientX-r,y:t.clientY-a}})),{type:n,touches:e,timestamp:t.timeStamp||Date.now()}}(t))},e.onresize=function(t){return n.handleResize(e.clientWidth,e.clientHeight)};var r=V.createContainer(n,!1,!1);V.updateContainer(t,r,null,p)}(a.a.createElement((function(){return a.a.createElement(o,{style:pt.container},a.a.createElement(ft,{style:pt.card},a.a.createElement(B,{style:pt.title},"Drag and Move! "),a.a.createElement(N,{style:pt.logo,src:n(18)}),a.a.createElement(B,{style:pt.text,numberOfLines:2},"Revas\u8ba9\u4f60\u53ef\u4ee5\u7528React\u548cCSS\uff0c\u5728Canvas\u4e0a\u7ed8\u5236\u9ad8\u6027\u80fd\u4ea4\u4e92\u754c\u9762\uff0c\u57fa\u4e8e\bReact v16\u548cYoga Layout\uff5e","\ud83c\udf89"),a.a.createElement(rt,{style:pt.decorator,colors:["#9254DE","#B37FEB","#91D5FF","#40A9FF"]}),a.a.createElement(Z,{style:pt.btn,onPress:function(){return alert("Enjoy!~\ud83c\udf89")}},a.a.createElement(B,{style:pt.btnText},"Go"))),a.a.createElement(nt,{style:{position:"absolute",top:0,left:0,right:0,bottom:0}},a.a.createElement(o,{style:{height:80,backgroundColor:"#9254DE"}}),a.a.createElement(o,{style:{height:80,backgroundColor:"#91D5FF"}}),a.a.createElement(o,{style:{height:80,backgroundColor:"#B37FEB"}}),a.a.createElement(o,{style:{height:80,backgroundColor:"#40A9FF"}}),a.a.createElement(o,{style:{height:80,backgroundColor:"#9254DE"}}),a.a.createElement(o,{style:{height:80,backgroundColor:"#91D5FF"}}),a.a.createElement(o,{style:{height:80,backgroundColor:"#B37FEB"}}),a.a.createElement(o,{style:{height:80,backgroundColor:"#40A9FF"}}),a.a.createElement(o,{style:{height:80,backgroundColor:"#9254DE"}}),a.a.createElement(o,{style:{height:80,backgroundColor:"#91D5FF"}}),a.a.createElement(o,{style:{height:80,backgroundColor:"#B37FEB"}}),a.a.createElement(o,{style:{height:80,backgroundColor:"#40A9FF"}}),a.a.createElement(o,{style:{height:80,backgroundColor:"#9254DE"}}),a.a.createElement(o,{style:{height:80,backgroundColor:"#91D5FF"}}),a.a.createElement(o,{style:{height:80,backgroundColor:"#B37FEB"}}),a.a.createElement(o,{style:{height:80,backgroundColor:"#40A9FF"}})))})),function(){var t=document.createElement("canvas"),e=t.getContext("2d");function n(n){if(window.innerHeight>0&&window.innerHeight>0&&(window.innerHeight!==t.clientHeight||window.innerWidth!==t.clientWidth)){var r=window.devicePixelRatio;t.width=window.innerWidth*r,t.height=window.innerHeight*r,t.style.width=window.innerWidth+"px",t.style.height=window.innerHeight+"px",e.resetTransform(),e.scale(r,r),n&&t.onresize&&t.onresize(n)}}return n(),t.className="canvas",document.body.appendChild(t),window.onorientationchange=window.onresize=function(){return requestAnimationFrame(n)},t}());"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.eed49f3d.chunk.js.map