import{e as Z,c as O,v as Ot,s as ve}from"./_page-cac04ded.js";var _e={exports:{}};/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */(function(n){(function(o,r,l,a){var u=["","webkit","Moz","MS","ms","o"],f=r.createElement("div"),m="function",d=Math.round,p=Math.abs,v=Date.now;function N(t,e,i){return setTimeout(Nt(t,i),e)}function P(t,e,i){return Array.isArray(t)?(T(t,i[e],i),!0):!1}function T(t,e,i){var s;if(!!t)if(t.forEach)t.forEach(e,i);else if(t.length!==a)for(s=0;s<t.length;)e.call(i,t[s],s,t),s++;else for(s in t)t.hasOwnProperty(s)&&e.call(i,t[s],s,t)}function y(t,e,i){var s="DEPRECATED METHOD: "+e+`
`+i+` AT 
`;return function(){var c=new Error("get-stack-trace"),h=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",g=o.console&&(o.console.warn||o.console.log);return g&&g.call(o.console,s,h),t.apply(this,arguments)}}var E;typeof Object.assign!="function"?E=function(e){if(e===a||e===null)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(e),s=1;s<arguments.length;s++){var c=arguments[s];if(c!==a&&c!==null)for(var h in c)c.hasOwnProperty(h)&&(i[h]=c[h])}return i}:E=Object.assign;var Q=y(function(e,i,s){for(var c=Object.keys(i),h=0;h<c.length;)(!s||s&&e[c[h]]===a)&&(e[c[h]]=i[c[h]]),h++;return e},"extend","Use `assign`."),Ue=y(function(e,i){return Q(e,i,!0)},"merge","Use `assign`.");function D(t,e,i){var s=e.prototype,c;c=t.prototype=Object.create(s),c.constructor=t,c._super=s,i&&E(c,i)}function Nt(t,e){return function(){return t.apply(e,arguments)}}function Ct(t,e){return typeof t==m?t.apply(e&&e[0]||a,e):t}function qt(t,e){return t===a?e:t}function ct(t,e,i){T(ht(e),function(s){t.addEventListener(s,i,!1)})}function ft(t,e,i){T(ht(e),function(s){t.removeEventListener(s,i,!1)})}function Gt(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function k(t,e){return t.indexOf(e)>-1}function ht(t){return t.trim().split(/\s+/g)}function K(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var s=0;s<t.length;){if(i&&t[s][i]==e||!i&&t[s]===e)return s;s++}return-1}function mt(t){return Array.prototype.slice.call(t,0)}function Bt(t,e,i){for(var s=[],c=[],h=0;h<t.length;){var g=e?t[h][e]:t[h];K(c,g)<0&&s.push(t[h]),c[h]=g,h++}return i&&(e?s=s.sort(function(S,M){return S[e]>M[e]}):s=s.sort()),s}function dt(t,e){for(var i,s,c=e[0].toUpperCase()+e.slice(1),h=0;h<u.length;){if(i=u[h],s=i?i+c:e,s in t)return s;h++}return a}var ze=1;function we(){return ze++}function jt(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||o}var Ye=/mobile|tablet|ip(ad|hone|od)|android/i,Kt="ontouchstart"in o,He=dt(o,"PointerEvent")!==a,Xe=Kt&&Ye.test(navigator.userAgent),$="touch",Fe="pen",Mt="mouse",Ve="kinect",We=25,C=1,q=2,x=4,A=8,pt=1,tt=2,et=4,nt=8,it=16,w=tt|et,G=nt|it,Jt=w|G,Qt=["x","y"],vt=["clientX","clientY"];function R(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(s){Ct(t.options.enable,[t])&&i.handler(s)},this.init()}R.prototype={handler:function(){},init:function(){this.evEl&&ct(this.element,this.evEl,this.domHandler),this.evTarget&&ct(this.target,this.evTarget,this.domHandler),this.evWin&&ct(jt(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&ft(this.element,this.evEl,this.domHandler),this.evTarget&&ft(this.target,this.evTarget,this.domHandler),this.evWin&&ft(jt(this.element),this.evWin,this.domHandler)}};function Ze(t){var e,i=t.options.inputClass;return i?e=i:He?e=bt:Xe?e=Et:Kt?e=Dt:e=Tt,new e(t,ke)}function ke(t,e,i){var s=i.pointers.length,c=i.changedPointers.length,h=e&C&&s-c===0,g=e&(x|A)&&s-c===0;i.isFirst=!!h,i.isFinal=!!g,h&&(t.session={}),i.eventType=e,qe(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function qe(t,e){var i=t.session,s=e.pointers,c=s.length;i.firstInput||(i.firstInput=$t(e)),c>1&&!i.firstMultiple?i.firstMultiple=$t(e):c===1&&(i.firstMultiple=!1);var h=i.firstInput,g=i.firstMultiple,_=g?g.center:h.center,S=e.center=te(s);e.timeStamp=v(),e.deltaTime=e.timeStamp-h.timeStamp,e.angle=At(_,S),e.distance=gt(_,S),Ge(i,e),e.offsetDirection=ne(e.deltaX,e.deltaY);var M=ee(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=M.x,e.overallVelocityY=M.y,e.overallVelocity=p(M.x)>p(M.y)?M.x:M.y,e.scale=g?Ke(g.pointers,s):1,e.rotation=g?je(g.pointers,s):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,Be(i,e);var H=t.element;Gt(e.srcEvent.target,H)&&(H=e.srcEvent.target),e.target=H}function Ge(t,e){var i=e.center,s=t.offsetDelta||{},c=t.prevDelta||{},h=t.prevInput||{};(e.eventType===C||h.eventType===x)&&(c=t.prevDelta={x:h.deltaX||0,y:h.deltaY||0},s=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=c.x+(i.x-s.x),e.deltaY=c.y+(i.y-s.y)}function Be(t,e){var i=t.lastInterval||e,s=e.timeStamp-i.timeStamp,c,h,g,_;if(e.eventType!=A&&(s>We||i.velocity===a)){var S=e.deltaX-i.deltaX,M=e.deltaY-i.deltaY,H=ee(s,S,M);h=H.x,g=H.y,c=p(H.x)>p(H.y)?H.x:H.y,_=ne(S,M),t.lastInterval=e}else c=i.velocity,h=i.velocityX,g=i.velocityY,_=i.direction;e.velocity=c,e.velocityX=h,e.velocityY=g,e.direction=_}function $t(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:d(t.pointers[i].clientX),clientY:d(t.pointers[i].clientY)},i++;return{timeStamp:v(),pointers:e,center:te(e),deltaX:t.deltaX,deltaY:t.deltaY}}function te(t){var e=t.length;if(e===1)return{x:d(t[0].clientX),y:d(t[0].clientY)};for(var i=0,s=0,c=0;c<e;)i+=t[c].clientX,s+=t[c].clientY,c++;return{x:d(i/e),y:d(s/e)}}function ee(t,e,i){return{x:e/t||0,y:i/t||0}}function ne(t,e){return t===e?pt:p(t)>=p(e)?t<0?tt:et:e<0?nt:it}function gt(t,e,i){i||(i=Qt);var s=e[i[0]]-t[i[0]],c=e[i[1]]-t[i[1]];return Math.sqrt(s*s+c*c)}function At(t,e,i){i||(i=Qt);var s=e[i[0]]-t[i[0]],c=e[i[1]]-t[i[1]];return Math.atan2(c,s)*180/Math.PI}function je(t,e){return At(e[1],e[0],vt)+At(t[1],t[0],vt)}function Ke(t,e){return gt(e[0],e[1],vt)/gt(t[0],t[1],vt)}var Je={mousedown:C,mousemove:q,mouseup:x},Qe="mousedown",$e="mousemove mouseup";function Tt(){this.evEl=Qe,this.evWin=$e,this.pressed=!1,R.apply(this,arguments)}D(Tt,R,{handler:function(e){var i=Je[e.type];i&C&&e.button===0&&(this.pressed=!0),i&q&&e.which!==1&&(i=x),this.pressed&&(i&x&&(this.pressed=!1),this.callback(this.manager,i,{pointers:[e],changedPointers:[e],pointerType:Mt,srcEvent:e}))}});var tn={pointerdown:C,pointermove:q,pointerup:x,pointercancel:A,pointerout:A},en={2:$,3:Fe,4:Mt,5:Ve},ie="pointerdown",oe="pointermove pointerup pointercancel";o.MSPointerEvent&&!o.PointerEvent&&(ie="MSPointerDown",oe="MSPointerMove MSPointerUp MSPointerCancel");function bt(){this.evEl=ie,this.evWin=oe,R.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}D(bt,R,{handler:function(e){var i=this.store,s=!1,c=e.type.toLowerCase().replace("ms",""),h=tn[c],g=en[e.pointerType]||e.pointerType,_=g==$,S=K(i,e.pointerId,"pointerId");h&C&&(e.button===0||_)?S<0&&(i.push(e),S=i.length-1):h&(x|A)&&(s=!0),!(S<0)&&(i[S]=e,this.callback(this.manager,h,{pointers:i,changedPointers:[e],pointerType:g,srcEvent:e}),s&&i.splice(S,1))}});var nn={touchstart:C,touchmove:q,touchend:x,touchcancel:A},on="touchstart",rn="touchstart touchmove touchend touchcancel";function re(){this.evTarget=on,this.evWin=rn,this.started=!1,R.apply(this,arguments)}D(re,R,{handler:function(e){var i=nn[e.type];if(i===C&&(this.started=!0),!!this.started){var s=sn.call(this,e,i);i&(x|A)&&s[0].length-s[1].length===0&&(this.started=!1),this.callback(this.manager,i,{pointers:s[0],changedPointers:s[1],pointerType:$,srcEvent:e})}}});function sn(t,e){var i=mt(t.touches),s=mt(t.changedTouches);return e&(x|A)&&(i=Bt(i.concat(s),"identifier",!0)),[i,s]}var an={touchstart:C,touchmove:q,touchend:x,touchcancel:A},ln="touchstart touchmove touchend touchcancel";function Et(){this.evTarget=ln,this.targetIds={},R.apply(this,arguments)}D(Et,R,{handler:function(e){var i=an[e.type],s=un.call(this,e,i);!s||this.callback(this.manager,i,{pointers:s[0],changedPointers:s[1],pointerType:$,srcEvent:e})}});function un(t,e){var i=mt(t.touches),s=this.targetIds;if(e&(C|q)&&i.length===1)return s[i[0].identifier]=!0,[i,i];var c,h,g=mt(t.changedTouches),_=[],S=this.target;if(h=i.filter(function(M){return Gt(M.target,S)}),e===C)for(c=0;c<h.length;)s[h[c].identifier]=!0,c++;for(c=0;c<g.length;)s[g[c].identifier]&&_.push(g[c]),e&(x|A)&&delete s[g[c].identifier],c++;if(!!_.length)return[Bt(h.concat(_),"identifier",!0),_]}var cn=2500,se=25;function Dt(){R.apply(this,arguments);var t=Nt(this.handler,this);this.touch=new Et(this.manager,t),this.mouse=new Tt(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}D(Dt,R,{handler:function(e,i,s){var c=s.pointerType==$,h=s.pointerType==Mt;if(!(h&&s.sourceCapabilities&&s.sourceCapabilities.firesTouchEvents)){if(c)fn.call(this,i,s);else if(h&&hn.call(this,s))return;this.callback(e,i,s)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function fn(t,e){t&C?(this.primaryTouch=e.changedPointers[0].identifier,ae.call(this,e)):t&(x|A)&&ae.call(this,e)}function ae(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var s=this.lastTouches,c=function(){var h=s.indexOf(i);h>-1&&s.splice(h,1)};setTimeout(c,cn)}}function hn(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,s=0;s<this.lastTouches.length;s++){var c=this.lastTouches[s],h=Math.abs(e-c.x),g=Math.abs(i-c.y);if(h<=se&&g<=se)return!0}return!1}var le=dt(f.style,"touchAction"),ue=le!==a,ce="compute",fe="auto",Rt="manipulation",B="none",ot="pan-x",rt="pan-y",yt=dn();function Lt(t,e){this.manager=t,this.set(e)}Lt.prototype={set:function(t){t==ce&&(t=this.compute()),ue&&this.manager.element.style&&yt[t]&&(this.manager.element.style[le]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return T(this.manager.recognizers,function(e){Ct(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),mn(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented){e.preventDefault();return}var s=this.actions,c=k(s,B)&&!yt[B],h=k(s,rt)&&!yt[rt],g=k(s,ot)&&!yt[ot];if(c){var _=t.pointers.length===1,S=t.distance<2,M=t.deltaTime<250;if(_&&S&&M)return}if(!(g&&h)&&(c||h&&i&w||g&&i&G))return this.preventSrc(e)},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};function mn(t){if(k(t,B))return B;var e=k(t,ot),i=k(t,rt);return e&&i?B:e||i?e?ot:rt:k(t,Rt)?Rt:fe}function dn(){if(!ue)return!1;var t={},e=o.CSS&&o.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(i){t[i]=e?o.CSS.supports("touch-action",i):!0}),t}var xt=1,L=2,J=4,W=8,X=W,st=16,Y=32;function F(t){this.options=E({},this.defaults,t||{}),this.id=we(),this.manager=null,this.options.enable=qt(this.options.enable,!0),this.state=xt,this.simultaneous={},this.requireFail=[]}F.prototype={defaults:{},set:function(t){return E(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(P(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=It(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return P(t,"dropRecognizeWith",this)?this:(t=It(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(P(t,"requireFailure",this))return this;var e=this.requireFail;return t=It(t,this),K(e,t)===-1&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(P(t,"dropRequireFailure",this))return this;t=It(t,this);var e=K(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,i=this.state;function s(c){e.manager.emit(c,t)}i<W&&s(e.options.event+he(i)),s(e.options.event),t.additionalEvent&&s(t.additionalEvent),i>=W&&s(e.options.event+he(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=Y},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(Y|xt)))return!1;t++}return!0},recognize:function(t){var e=E({},t);if(!Ct(this.options.enable,[this,e])){this.reset(),this.state=Y;return}this.state&(X|st|Y)&&(this.state=xt),this.state=this.process(e),this.state&(L|J|W|st)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}};function he(t){return t&st?"cancel":t&W?"end":t&J?"move":t&L?"start":""}function me(t){return t==it?"down":t==nt?"up":t==tt?"left":t==et?"right":""}function It(t,e){var i=e.manager;return i?i.get(t):t}function U(){F.apply(this,arguments)}D(U,F,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return e===0||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,s=e&(L|J),c=this.attrTest(t);return s&&(i&A||!c)?e|st:s||c?i&x?e|W:e&L?e|J:L:Y}});function Pt(){U.apply(this,arguments),this.pX=null,this.pY=null}D(Pt,U,{defaults:{event:"pan",threshold:10,pointers:1,direction:Jt},getTouchAction:function(){var t=this.options.direction,e=[];return t&w&&e.push(rt),t&G&&e.push(ot),e},directionTest:function(t){var e=this.options,i=!0,s=t.distance,c=t.direction,h=t.deltaX,g=t.deltaY;return c&e.direction||(e.direction&w?(c=h===0?pt:h<0?tt:et,i=h!=this.pX,s=Math.abs(t.deltaX)):(c=g===0?pt:g<0?nt:it,i=g!=this.pY,s=Math.abs(t.deltaY))),t.direction=c,i&&s>e.threshold&&c&e.direction},attrTest:function(t){return U.prototype.attrTest.call(this,t)&&(this.state&L||!(this.state&L)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=me(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}});function Ut(){U.apply(this,arguments)}D(Ut,U,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[B]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&L)},emit:function(t){if(t.scale!==1){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}});function zt(){F.apply(this,arguments),this._timer=null,this._input=null}D(zt,F,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[fe]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,s=t.distance<e.threshold,c=t.deltaTime>e.time;if(this._input=t,!s||!i||t.eventType&(x|A)&&!c)this.reset();else if(t.eventType&C)this.reset(),this._timer=N(function(){this.state=X,this.tryEmit()},e.time,this);else if(t.eventType&x)return X;return Y},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===X&&(t&&t.eventType&x?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=v(),this.manager.emit(this.options.event,this._input)))}});function wt(){U.apply(this,arguments)}D(wt,U,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[B]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&L)}});function Yt(){U.apply(this,arguments)}D(Yt,U,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:w|G,pointers:1},getTouchAction:function(){return Pt.prototype.getTouchAction.call(this)},attrTest:function(t){var e=this.options.direction,i;return e&(w|G)?i=t.overallVelocity:e&w?i=t.overallVelocityX:e&G&&(i=t.overallVelocityY),this._super.attrTest.call(this,t)&&e&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&p(i)>this.options.velocity&&t.eventType&x},emit:function(t){var e=me(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}});function _t(){F.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}D(_t,F,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Rt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,s=t.distance<e.threshold,c=t.deltaTime<e.time;if(this.reset(),t.eventType&C&&this.count===0)return this.failTimeout();if(s&&c&&i){if(t.eventType!=x)return this.failTimeout();var h=this.pTime?t.timeStamp-this.pTime<e.interval:!0,g=!this.pCenter||gt(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,!g||!h?this.count=1:this.count+=1,this._input=t;var _=this.count%e.taps;if(_===0)return this.hasRequireFailures()?(this._timer=N(function(){this.state=X,this.tryEmit()},e.interval,this),L):X}return Y},failTimeout:function(){return this._timer=N(function(){this.state=Y},this.options.interval,this),Y},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==X&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function V(t,e){return e=e||{},e.recognizers=qt(e.recognizers,V.defaults.preset),new Ht(t,e)}V.VERSION="2.0.7",V.defaults={domEvents:!1,touchAction:ce,enable:!0,inputTarget:null,inputClass:null,preset:[[wt,{enable:!1}],[Ut,{enable:!1},["rotate"]],[Yt,{direction:w}],[Pt,{direction:w},["swipe"]],[_t],[_t,{event:"doubletap",taps:2},["tap"]],[zt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var pn=1,de=2;function Ht(t,e){this.options=E({},V.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=Ze(this),this.touchAction=new Lt(this,this.options.touchAction),pe(this,!0),T(this.options.recognizers,function(i){var s=this.add(new i[0](i[1]));i[2]&&s.recognizeWith(i[2]),i[3]&&s.requireFailure(i[3])},this)}Ht.prototype={set:function(t){return E(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?de:pn},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,s=this.recognizers,c=e.curRecognizer;(!c||c&&c.state&X)&&(c=e.curRecognizer=null);for(var h=0;h<s.length;)i=s[h],e.stopped!==de&&(!c||i==c||i.canRecognizeWith(c))?i.recognize(t):i.reset(),!c&&i.state&(L|J|W)&&(c=e.curRecognizer=i),h++}},get:function(t){if(t instanceof F)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(P(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(P(t,"remove",this))return this;if(t=this.get(t),t){var e=this.recognizers,i=K(e,t);i!==-1&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(t!==a&&e!==a){var i=this.handlers;return T(ht(t),function(s){i[s]=i[s]||[],i[s].push(e)}),this}},off:function(t,e){if(t!==a){var i=this.handlers;return T(ht(t),function(s){e?i[s]&&i[s].splice(K(i[s],e),1):delete i[s]}),this}},emit:function(t,e){this.options.domEvents&&vn(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(!(!i||!i.length)){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var s=0;s<i.length;)i[s](e),s++}},destroy:function(){this.element&&pe(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function pe(t,e){var i=t.element;if(!!i.style){var s;T(t.options.cssProps,function(c,h){s=dt(i.style,h),e?(t.oldCssProps[s]=i.style[s],i.style[s]=c):i.style[s]=t.oldCssProps[s]||""}),e||(t.oldCssProps={})}}function vn(t,e){var i=r.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}E(V,{INPUT_START:C,INPUT_MOVE:q,INPUT_END:x,INPUT_CANCEL:A,STATE_POSSIBLE:xt,STATE_BEGAN:L,STATE_CHANGED:J,STATE_ENDED:W,STATE_RECOGNIZED:X,STATE_CANCELLED:st,STATE_FAILED:Y,DIRECTION_NONE:pt,DIRECTION_LEFT:tt,DIRECTION_RIGHT:et,DIRECTION_UP:nt,DIRECTION_DOWN:it,DIRECTION_HORIZONTAL:w,DIRECTION_VERTICAL:G,DIRECTION_ALL:Jt,Manager:Ht,Input:R,TouchAction:Lt,TouchInput:Et,MouseInput:Tt,PointerEventInput:bt,TouchMouseInput:Dt,SingleTouchInput:re,Recognizer:F,AttrRecognizer:U,Tap:_t,Pan:Pt,Swipe:Yt,Pinch:Ut,Rotate:wt,Press:zt,on:ct,off:ft,each:T,merge:Ue,extend:Q,assign:E,inherit:D,bindFn:Nt,prefixed:dt});var gn=typeof o<"u"?o:typeof self<"u"?self:{};gn.Hammer=V,typeof a=="function"&&a.amd?a(function(){return V}):n.exports?n.exports=V:o[l]=V})(window,document,"Hammer")})(_e);const at=_e.exports;/*!
* chartjs-plugin-zoom v1.2.1
* undefined
 * (c) 2016-2022 chartjs-plugin-zoom Contributors
 * Released under the MIT License
 */const lt=n=>n&&n.enabled&&n.modifierKey,Se=(n,o)=>n&&o[n+"Key"],Zt=(n,o)=>n&&!o[n+"Key"];function b(n,o,r){return n===void 0?!0:typeof n=="string"?n.indexOf(o)!==-1:typeof n=="function"?n({chart:r}).indexOf(o)!==-1:!1}function Tn(n,o){let r;return function(){return clearTimeout(r),r=setTimeout(n,o),o}}function En({x:n,y:o},r){const l=r.scales,a=Object.keys(l);for(let u=0;u<a.length;u++){const f=l[a[u]];if(o>=f.top&&o<=f.bottom&&n>=f.left&&n<=f.right)return f}return null}function Oe(n,o,r){const l=En(o,r);if(l&&b(n,l.axis,r))return[l];const a=[];return Z(r.scales,function(u){b(n,u.axis,r)||a.push(u)}),a}const Xt=new WeakMap;function I(n){let o=Xt.get(n);return o||(o={originalScaleLimits:{},updatedScaleLimits:{},handlers:{},panDelta:{}},Xt.set(n,o)),o}function yn(n){Xt.delete(n)}function Ne(n,o,r){const l=n.max-n.min,a=l*(o-1),u=n.isHorizontal()?r.x:r.y,f=Math.max(0,Math.min(1,(n.getValueForPixel(u)-n.min)/l||0)),m=1-f;return{min:a*f,max:a*m}}function ge(n,o,r,l,a){let u=r[l];if(u==="original"){const f=n.originalScaleLimits[o.id][l];u=Ot(f.options,f.scale)}return Ot(u,a)}function j(n,{min:o,max:r},l,a=!1){const u=I(n.chart),{id:f,axis:m,options:d}=n,p=l&&(l[f]||l[m])||{},{minRange:v=0}=p,N=ge(u,n,p,"min",-1/0),P=ge(u,n,p,"max",1/0),T=Math.max(o,N),y=Math.min(r,P),E=a?Math.max(y-T,v):n.max-n.min;if(y-T!==E)if(N>y-E)o=T,r=T+E;else if(P<T+E)r=y,o=y-E;else{const Q=(E-y+T)/2;o=T-Q,r=y+Q}else o=T,r=y;return d.min=o,d.max=r,u.updatedScaleLimits[n.id]={min:o,max:r},n.parse(o)!==n.min||n.parse(r)!==n.max}function xn(n,o,r,l){const a=Ne(n,o,r),u={min:n.min+a.min,max:n.max-a.max};return j(n,u,l,!0)}const Te=n=>n===0||isNaN(n)?0:n<0?Math.min(Math.round(n),-1):Math.max(Math.round(n),1);function In(n){const r=n.getLabels().length-1;n.min>0&&(n.min-=1),n.max<r&&(n.max+=1)}function Pn(n,o,r,l){const a=Ne(n,o,r);n.min===n.max&&o<1&&In(n);const u={min:n.min+Te(a.min),max:n.max-Te(a.max)};return j(n,u,l,!0)}function _n(n){return n.isHorizontal()?n.width:n.height}function Sn(n,o,r){const a=n.getLabels().length-1;let{min:u,max:f}=n;const m=Math.max(f-u,1),d=Math.round(_n(n)/Math.max(m,10)),p=Math.round(Math.abs(o/d));let v;return o<-d?(f=Math.min(f+p,a),u=m===1?f:f-m,v=f===a):o>d&&(u=Math.max(0,u-p),f=m===1?u:u+m,v=u===0),j(n,{min:u,max:f},r)||v}const On={second:500,minute:30*1e3,hour:30*60*1e3,day:12*60*60*1e3,week:3.5*24*60*60*1e3,month:15*24*60*60*1e3,quarter:60*24*60*60*1e3,year:182*24*60*60*1e3};function Ce(n,o,r,l=!1){const{min:a,max:u,options:f}=n,m=f.time&&f.time.round,d=On[m]||0,p=n.getValueForPixel(n.getPixelForValue(a+d)-o),v=n.getValueForPixel(n.getPixelForValue(u+d)-o),{min:N=-1/0,max:P=1/0}=l&&r&&r[n.axis]||{};return isNaN(p)||isNaN(v)||p<N||v>P?!0:j(n,{min:p,max:v},r,l)}function Ee(n,o,r){return Ce(n,o,r,!0)}const Ft={category:Pn,default:xn},Vt={category:Sn,default:Ce,logarithmic:Ee,timeseries:Ee};function Nn(n,o,r){const{id:l,options:{min:a,max:u}}=n;if(!o[l]||!r[l])return!0;const f=r[l];return f.min!==a||f.max!==u}function ye(n,o){Z(n,(r,l)=>{o[l]||delete n[l]})}function ut(n,o){const{scales:r}=n,{originalScaleLimits:l,updatedScaleLimits:a}=o;return Z(r,function(u){Nn(u,l,a)&&(l[u.id]={min:{scale:u.min,options:u.options.min},max:{scale:u.max,options:u.options.max}})}),ye(l,r),ye(a,r),l}function xe(n,o,r,l){const a=Ft[n.type]||Ft.default;O(a,[n,o,r,l])}function Cn(n){const o=n.chartArea;return{x:(o.left+o.right)/2,y:(o.top+o.bottom)/2}}function kt(n,o,r="none"){const{x:l=1,y:a=1,focalPoint:u=Cn(n)}=typeof o=="number"?{x:o,y:o}:o,f=I(n),{options:{limits:m,zoom:d}}=f,{mode:p="xy",overScaleMode:v}=d||{};ut(n,f);const N=l!==1&&b(p,"x",n),P=a!==1&&b(p,"y",n),T=v&&Oe(v,u,n);Z(T||n.scales,function(y){y.isHorizontal()&&N?xe(y,l,u,m):!y.isHorizontal()&&P&&xe(y,a,u,m)}),n.update(r),O(d.onZoom,[{chart:n}])}function Ie(n,o,r){const l=n.getValueForPixel(o),a=n.getValueForPixel(r);return{min:Math.min(l,a),max:Math.max(l,a)}}function Mn(n,o,r,l="none"){const a=I(n),{options:{limits:u,zoom:f}}=a,{mode:m="xy"}=f;ut(n,a);const d=b(m,"x",n),p=b(m,"y",n);Z(n.scales,function(v){v.isHorizontal()&&d?j(v,Ie(v,o.x,r.x),u,!0):!v.isHorizontal()&&p&&j(v,Ie(v,o.y,r.y),u,!0)}),n.update(l),O(f.onZoom,[{chart:n}])}function An(n,o,r,l="none"){ut(n,I(n));const a=n.scales[o];j(a,r,void 0,!0),n.update(l)}function bn(n,o="default"){const r=I(n),l=ut(n,r);Z(n.scales,function(a){const u=a.options;l[a.id]?(u.min=l[a.id].min.options,u.max=l[a.id].max.options):(delete u.min,delete u.max)}),n.update(o),O(r.options.zoom.onZoomComplete,[{chart:n}])}function Dn(n,o){const r=n.originalScaleLimits[o];if(!r)return;const{min:l,max:a}=r;return Ot(a.options,a.scale)-Ot(l.options,l.scale)}function Rn(n){const o=I(n);let r=1,l=1;return Z(n.scales,function(a){const u=Dn(o,a.id);if(u){const f=Math.round(u/(a.max-a.min)*100)/100;r=Math.min(r,f),l=Math.max(l,f)}}),r<1?r:l}function Pe(n,o,r,l){const{panDelta:a}=l,u=a[n.id]||0;ve(u)===ve(o)&&(o+=u);const f=Vt[n.type]||Vt.default;O(f,[n,o,r])?a[n.id]=0:a[n.id]=o}function Me(n,o,r,l="none"){const{x:a=0,y:u=0}=typeof o=="number"?{x:o,y:o}:o,f=I(n),{options:{pan:m,limits:d}}=f,{mode:p="xy",onPan:v}=m||{};ut(n,f);const N=a!==0&&b(p,"x",n),P=u!==0&&b(p,"y",n);Z(r||n.scales,function(T){T.isHorizontal()&&N?Pe(T,a,d,f):!T.isHorizontal()&&P&&Pe(T,u,d,f)}),n.update(l),O(v,[{chart:n}])}function Ae(n){const o=I(n),r={};for(const l of Object.keys(n.scales)){const{min:a,max:u}=o.originalScaleLimits[l]||{min:{},max:{}};r[l]={min:a.scale,max:u.scale}}return r}function Ln(n){const o=Ae(n);for(const r of Object.keys(n.scales)){const{min:l,max:a}=o[r];if(l!==void 0&&n.scales[r].min!==l||a!==void 0&&n.scales[r].max!==a)return!0}return!1}function z(n,o){const{handlers:r}=I(n),l=r[o];l&&l.target&&(l.target.removeEventListener(o,l),delete r[o])}function St(n,o,r,l){const{handlers:a,options:u}=I(n),f=a[r];f&&f.target===o||(z(n,r),a[r]=m=>l(n,m,u),a[r].target=o,o.addEventListener(r,a[r]))}function Un(n,o){const r=I(n);r.dragStart&&(r.dragging=!0,r.dragEnd=o,n.update("none"))}function be(n,o,r){const{onZoomStart:l,onZoomRejected:a}=r;if(l){const{left:u,top:f}=o.target.getBoundingClientRect(),m={x:o.clientX-u,y:o.clientY-f};if(O(l,[{chart:n,event:o,point:m}])===!1)return O(a,[{chart:n,event:o}]),!1}}function zn(n,o){const r=I(n),{pan:l,zoom:a={}}=r.options;if(Se(lt(l),o)||Zt(lt(a.drag),o))return O(a.onZoomRejected,[{chart:n,event:o}]);be(n,o,a)!==!1&&(r.dragStart=o,St(n,n.canvas,"mousemove",Un))}function De(n,o,r,l){const{left:a,top:u}=r.target.getBoundingClientRect(),f=b(o,"x",n),m=b(o,"y",n);let{top:d,left:p,right:v,bottom:N,width:P,height:T}=n.chartArea;f&&(p=Math.min(r.clientX,l.clientX)-a,v=Math.max(r.clientX,l.clientX)-a),m&&(d=Math.min(r.clientY,l.clientY)-u,N=Math.max(r.clientY,l.clientY)-u);const y=v-p,E=N-d;return{left:p,top:d,right:v,bottom:N,width:y,height:E,zoomX:f&&y?1+(P-y)/P:1,zoomY:m&&E?1+(T-E)/T:1}}function wn(n,o){const r=I(n);if(!r.dragStart)return;z(n,"mousemove");const{mode:l,onZoomComplete:a,drag:{threshold:u=0}}=r.options.zoom,f=De(n,l,r.dragStart,o),m=b(l,"x",n)?f.width:0,d=b(l,"y",n)?f.height:0,p=Math.sqrt(m*m+d*d);if(r.dragStart=r.dragEnd=null,p<=u){r.dragging=!1,n.update("none");return}Mn(n,{x:f.left,y:f.top},{x:f.right,y:f.bottom},"zoom"),setTimeout(()=>r.dragging=!1,500),O(a,[{chart:n}])}function Yn(n,o,r){if(Zt(lt(r.wheel),o)){O(r.onZoomRejected,[{chart:n,event:o}]);return}if(be(n,o,r)!==!1&&(o.cancelable&&o.preventDefault(),o.deltaY!==void 0))return!0}function Hn(n,o){const{handlers:{onZoomComplete:r},options:{zoom:l}}=I(n);if(!Yn(n,o,l))return;const a=o.target.getBoundingClientRect(),u=1+(o.deltaY>=0?-l.wheel.speed:l.wheel.speed),f={x:u,y:u,focalPoint:{x:o.clientX-a.left,y:o.clientY-a.top}};kt(n,f),r&&r()}function Xn(n,o,r,l){r&&(I(n).handlers[o]=Tn(()=>O(r,[{chart:n}]),l))}function Fn(n,o){const r=n.canvas,{wheel:l,drag:a,onZoomComplete:u}=o.zoom;l.enabled?(St(n,r,"wheel",Hn),Xn(n,"onZoomComplete",u,250)):z(n,"wheel"),a.enabled?(St(n,r,"mousedown",zn),St(n,r.ownerDocument,"mouseup",wn)):(z(n,"mousedown"),z(n,"mousemove"),z(n,"mouseup"))}function Vn(n){z(n,"mousedown"),z(n,"mousemove"),z(n,"mouseup"),z(n,"wheel"),z(n,"click")}function Wn(n,o){return function(r,l){const{pan:a,zoom:u={}}=o.options;if(!a||!a.enabled)return!1;const f=l&&l.srcEvent;return f&&!o.panning&&l.pointerType==="mouse"&&(Zt(lt(a),f)||Se(lt(u.drag),f))?(O(a.onPanRejected,[{chart:n,event:l}]),!1):!0}}function Zn(n,o){const r=Math.abs(n.clientX-o.clientX),l=Math.abs(n.clientY-o.clientY),a=r/l;let u,f;return a>.3&&a<1.7?u=f=!0:r>l?u=!0:f=!0,{x:u,y:f}}function Re(n,o,r){if(o.scale){const{center:l,pointers:a}=r,u=1/o.scale*r.scale,f=r.target.getBoundingClientRect(),m=Zn(a[0],a[1]),d=o.options.zoom.mode,p={x:m.x&&b(d,"x",n)?u:1,y:m.y&&b(d,"y",n)?u:1,focalPoint:{x:l.x-f.left,y:l.y-f.top}};kt(n,p),o.scale=r.scale}}function kn(n,o){o.options.zoom.pinch.enabled&&(o.scale=1)}function qn(n,o,r){o.scale&&(Re(n,o,r),o.scale=null,O(o.options.zoom.onZoomComplete,[{chart:n}]))}function Le(n,o,r){const l=o.delta;l&&(o.panning=!0,Me(n,{x:r.deltaX-l.x,y:r.deltaY-l.y},o.panScales),o.delta={x:r.deltaX,y:r.deltaY})}function Gn(n,o,r){const{enabled:l,overScaleMode:a,onPanStart:u,onPanRejected:f}=o.options.pan;if(!l)return;const m=r.target.getBoundingClientRect(),d={x:r.center.x-m.left,y:r.center.y-m.top};if(O(u,[{chart:n,event:r,point:d}])===!1)return O(f,[{chart:n,event:r}]);o.panScales=a&&Oe(a,d,n),o.delta={x:0,y:0},clearTimeout(o.panEndTimeout),Le(n,o,r)}function Bn(n,o){o.delta=null,o.panning&&(o.panEndTimeout=setTimeout(()=>o.panning=!1,500),O(o.options.pan.onPanComplete,[{chart:n}]))}const Wt=new WeakMap;function jn(n,o){const r=I(n),l=n.canvas,{pan:a,zoom:u}=o,f=new at.Manager(l);u&&u.pinch.enabled&&(f.add(new at.Pinch),f.on("pinchstart",()=>kn(n,r)),f.on("pinch",m=>Re(n,r,m)),f.on("pinchend",m=>qn(n,r,m))),a&&a.enabled&&(f.add(new at.Pan({threshold:a.threshold,enable:Wn(n,r)})),f.on("panstart",m=>Gn(n,r,m)),f.on("panmove",m=>Le(n,r,m)),f.on("panend",()=>Bn(n,r))),Wt.set(n,f)}function Kn(n){const o=Wt.get(n);o&&(o.remove("pinchstart"),o.remove("pinch"),o.remove("pinchend"),o.remove("panstart"),o.remove("pan"),o.remove("panend"),o.destroy(),Wt.delete(n))}var Jn="1.2.1",$n={id:"zoom",version:Jn,defaults:{pan:{enabled:!1,mode:"xy",threshold:10,modifierKey:null},zoom:{wheel:{enabled:!1,speed:.1,modifierKey:null},drag:{enabled:!1,modifierKey:null},pinch:{enabled:!1},mode:"xy"}},start:function(n,o,r){const l=I(n);l.options=r,Object.prototype.hasOwnProperty.call(r.zoom,"enabled")&&console.warn("The option `zoom.enabled` is no longer supported. Please use `zoom.wheel.enabled`, `zoom.drag.enabled`, or `zoom.pinch.enabled`."),at&&jn(n,r),n.pan=(a,u,f)=>Me(n,a,u,f),n.zoom=(a,u)=>kt(n,a,u),n.zoomScale=(a,u,f)=>An(n,a,u,f),n.resetZoom=a=>bn(n,a),n.getZoomLevel=()=>Rn(n),n.getInitialScaleBounds=()=>Ae(n),n.isZoomedOrPanned=()=>Ln(n)},beforeEvent(n){const o=I(n);if(o.panning||o.dragging)return!1},beforeUpdate:function(n,o,r){const l=I(n);l.options=r,Fn(n,r)},beforeDatasetsDraw:function(n,o,r){const{dragStart:l,dragEnd:a}=I(n);if(a){const{left:u,top:f,width:m,height:d}=De(n,r.zoom.mode,l,a),p=r.zoom.drag,v=n.ctx;v.save(),v.beginPath(),v.fillStyle=p.backgroundColor||"rgba(225,225,225,0.3)",v.fillRect(u,f,m,d),p.borderWidth>0&&(v.lineWidth=p.borderWidth,v.strokeStyle=p.borderColor||"rgba(225,225,225)",v.strokeRect(u,f,m,d)),v.restore()}},stop:function(n){Vn(n),at&&Kn(n),yn(n)},panFunctions:Vt,zoomFunctions:Ft};export{$n as default,Me as pan,bn as resetZoom,kt as zoom,An as zoomScale};
