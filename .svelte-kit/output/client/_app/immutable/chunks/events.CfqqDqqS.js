import{t as b,q as y,d as v,i as k}from"./runtime.CBvvWpuP.js";const S=new Set,B=new Set;function q(r,t,n,e){function i(a){if(e.capture||E.call(t,a),!a.cancelBubble)return n.call(this,a)}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?y(()=>{t.addEventListener(r,i,e)}):t.addEventListener(r,i,e),i}function O(r,t,n,e,i){var a={capture:e,passive:i},u=q(r,t,n,a);(t===document.body||t===window||t===document)&&b(()=>{t.removeEventListener(r,u,a)})}function E(r){var _;var t=this,n=t.ownerDocument,e=r.type,i=((_=r.composedPath)==null?void 0:_.call(r))||[],a=i[0]||r.target,u=0,d=r.__root;if(d){var c=i.indexOf(d);if(c!==-1&&(t===document||t===window)){r.__root=t;return}var h=i.indexOf(t);if(h===-1)return;c<=h&&(u=c)}if(a=i[u]||r.target,a!==t){v(r,"currentTarget",{configurable:!0,get(){return a||n}});try{for(var l,p=[];a!==null;){var f=a.assignedSlot||a.parentNode||a.host||null;try{var o=a["__"+e];if(o!==void 0&&!a.disabled)if(k(o)){var[w,...g]=o;w.apply(a,[r,...g])}else o.call(a,r)}catch(s){l?p.push(s):l=s}if(r.cancelBubble||f===t||f===null)break;a=f}if(l){for(let s of p)queueMicrotask(()=>{throw s});throw l}}finally{r.__root=t,delete r.currentTarget}}}export{S as a,O as e,E as h,B as r};
