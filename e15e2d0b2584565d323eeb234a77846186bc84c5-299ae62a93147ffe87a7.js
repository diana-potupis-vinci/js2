(self.webpackChunkmyjscourse=self.webpackChunkmyjscourse||[]).push([[8434],{8139:function(e){var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,n=/\n/g,r=/^\s*/,i=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,u=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,l=/^[;\s]*/,c=/^\s+|\s+$/g,s="";function a(e){return e?e.replace(c,s):s}e.exports=function(e,c){if("string"!=typeof e)throw new TypeError("First argument must be a string");if(!e)return[];c=c||{};var f=1,h=1;function p(e){var t=e.match(n);t&&(f+=t.length);var r=e.lastIndexOf("\n");h=~r?e.length-r:h+e.length}function g(){var e={line:f,column:h};return function(t){return t.position=new d(e),x(),t}}function d(e){this.start=e,this.end={line:f,column:h},this.source=c.source}d.prototype.content=e;var m=[];function k(t){var n=new Error(c.source+":"+f+":"+h+": "+t);if(n.reason=t,n.filename=c.source,n.line=f,n.column=h,n.source=e,!c.silent)throw n;m.push(n)}function b(t){var n=t.exec(e);if(n){var r=n[0];return p(r),e=e.slice(r.length),n}}function x(){b(r)}function F(e){var t;for(e=e||[];t=C();)!1!==t&&e.push(t);return e}function C(){var t=g();if("/"==e.charAt(0)&&"*"==e.charAt(1)){for(var n=2;s!=e.charAt(n)&&("*"!=e.charAt(n)||"/"!=e.charAt(n+1));)++n;if(n+=2,s===e.charAt(n-1))return k("End of comment missing");var r=e.slice(2,n-2);return h+=2,p(r),e=e.slice(n),h+=2,t({type:"comment",comment:r})}}function y(){var e=g(),n=b(i);if(n){if(C(),!b(o))return k("property missing ':'");var r=b(u),c=e({type:"declaration",property:a(n[0].replace(t,s)),value:r?a(r[0].replace(t,s)):s});return b(l),c}}return x(),function(){var e,t=[];for(F(t);e=y();)!1!==e&&(t.push(e),F(t));return t}()}},4301:function(e,t,n){"use strict";n.d(t,{T:function(){return i}});const r=document.createElement("i");function i(e){const t="&"+e+";";r.innerHTML=t;const n=r.textContent;return(59!==n.charCodeAt(n.length-1)||"semi"===e)&&(n!==t&&n)}},3402:function(e,t,n){"use strict";n.d(t,{w:function(){return o}});var r=n(2761),i=n(2473);const o={tokenize:function(e,t,n){return(0,r.f)(e,(function(e){return null===e||(0,i.Ch)(e)?t(e):n(e)}),"linePrefix")},partial:!0}},2761:function(e,t,n){"use strict";n.d(t,{f:function(){return i}});var r=n(2473);function i(e,t,n,i){const o=i?i-1:Number.POSITIVE_INFINITY;let u=0;return function(i){if((0,r.xz)(i))return e.enter(n),l(i);return t(i)};function l(i){return(0,r.xz)(i)&&u++<o?(e.consume(i),l):(e.exit(n),t(i))}}},2473:function(e,t,n){"use strict";n.d(t,{jv:function(){return r},H$:function(){return u},n9:function(){return c},Av:function(){return s},pY:function(){return i},AF:function(){return o},sR:function(){return l},Ch:function(){return f},z3:function(){return a},xz:function(){return h},Xh:function(){return g},B8:function(){return p}});const r=d(/[A-Za-z]/),i=d(/\d/),o=d(/[\dA-Fa-f]/),u=d(/[\dA-Za-z]/),l=d(/[!-/:-@[-`{-~]/),c=d(/[#-'*+\--9=?A-Z^-~]/);function s(e){return null!==e&&(e<32||127===e)}function a(e){return null!==e&&(e<0||32===e)}function f(e){return null!==e&&e<-2}function h(e){return-2===e||-1===e||32===e}const p=d(/\s/),g=d(/[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/);function d(e){return function(t){return null!==t&&e.test(String.fromCharCode(t))}}},1905:function(e,t,n){"use strict";function r(e,t,n,r){const i=e.length;let o,u=0;if(t=t<0?-t>i?0:i+t:t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),[].splice.apply(e,o);else for(n&&[].splice.apply(e,[t,n]);u<r.length;)o=r.slice(u,u+1e4),o.unshift(t,0),[].splice.apply(e,o),u+=1e4,t+=1e4}function i(e,t){return e.length>0?(r(e,e.length,0,t),e):t}n.d(t,{V:function(){return i},d:function(){return r}})},2987:function(e,t,n){"use strict";n.d(t,{r:function(){return i}});var r=n(2473);function i(e){return null===e||(0,r.z3)(e)||(0,r.B8)(e)?1:(0,r.Xh)(e)?2:void 0}},4663:function(e,t,n){"use strict";n.d(t,{W:function(){return o}});var r=n(1905);const i={}.hasOwnProperty;function o(e){const t={};let n=-1;for(;++n<e.length;)u(t,e[n]);return t}function u(e,t){let n;for(n in t){const r=(i.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let u;for(u in o){i.call(r,u)||(r[u]=[]);const e=o[u];l(r[u],Array.isArray(e)?e:e?[e]:[])}}}function l(e,t){let n=-1;const i=[];for(;++n<t.length;)("after"===t[n].add?e:i).push(t[n]);(0,r.d)(e,0,0,i)}},889:function(e,t,n){"use strict";function r(e,t){const n=Number.parseInt(e,t);return n<9||11===n||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||65535==(65535&n)||65534==(65535&n)||n>1114111?"�":String.fromCharCode(n)}n.d(t,{o:function(){return r}})},7881:function(e,t,n){"use strict";n.d(t,{v:function(){return u}});var r=n(4301),i=n(889);const o=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function u(e){return e.replace(o,l)}function l(e,t,n){if(t)return t;if(35===n.charCodeAt(0)){const e=n.charCodeAt(1),t=120===e||88===e;return(0,i.o)(n.slice(t?2:1),t?16:10)}return(0,r.T)(n)||e}},1098:function(e,t,n){"use strict";function r(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}n.d(t,{d:function(){return r}})},3233:function(e,t,n){"use strict";function r(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}n.d(t,{C:function(){return r}})},3147:function(e,t,n){"use strict";n.d(t,{Z:function(){return $e}});var r=n(4663),i=n(2473);const o={tokenize:function(e,t,n){let r=0;return function t(o){if((87===o||119===o)&&r<3)return r++,e.consume(o),t;if(46===o&&3===r)return e.consume(o),i;return n(o)};function i(e){return null===e?n(e):t(e)}},partial:!0},u={tokenize:function(e,t,n){let r,o,u;return l;function l(t){return 46===t||95===t?e.check(c,a,s)(t):null===t||(0,i.z3)(t)||(0,i.B8)(t)||45!==t&&(0,i.Xh)(t)?a(t):(u=!0,e.consume(t),l)}function s(t){return 95===t?r=!0:(o=r,r=void 0),e.consume(t),l}function a(e){return o||r||!u?n(e):t(e)}},partial:!0},l={tokenize:function(e,t){let n=0,r=0;return o;function o(l){return 40===l?(n++,e.consume(l),o):41===l&&r<n?u(l):33===l||34===l||38===l||39===l||41===l||42===l||44===l||46===l||58===l||59===l||60===l||63===l||93===l||95===l||126===l?e.check(c,t,u)(l):null===l||(0,i.z3)(l)||(0,i.B8)(l)?t(l):(e.consume(l),o)}function u(t){return 41===t&&r++,e.consume(t),o}},partial:!0},c={tokenize:function(e,t,n){return r;function r(l){return 33===l||34===l||39===l||41===l||42===l||44===l||46===l||58===l||59===l||63===l||95===l||126===l?(e.consume(l),r):38===l?(e.consume(l),u):93===l?(e.consume(l),o):60===l||null===l||(0,i.z3)(l)||(0,i.B8)(l)?t(l):n(l)}function o(e){return null===e||40===e||91===e||(0,i.z3)(e)||(0,i.B8)(e)?t(e):r(e)}function u(e){return(0,i.jv)(e)?l(e):n(e)}function l(t){return 59===t?(e.consume(t),r):(0,i.jv)(t)?(e.consume(t),l):n(t)}},partial:!0},s={tokenize:function(e,t,n){return function(t){return e.consume(t),r};function r(e){return(0,i.H$)(e)?n(e):t(e)}},partial:!0},a={tokenize:function(e,t,n){const r=this;return function(t){if(87!==t&&119!==t||!m.call(r,r.previous)||F(r.events))return n(t);return e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(o,e.attempt(u,e.attempt(l,i),n),n)(t)};function i(n){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(n)}},previous:m},f={tokenize:function(e,t,n){const r=this;let o="",c=!1;return function(t){if((72===t||104===t)&&k.call(r,r.previous)&&!F(r.events))return e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),o+=String.fromCodePoint(t),e.consume(t),s;return n(t)};function s(t){if((0,i.jv)(t)&&o.length<5)return o+=String.fromCodePoint(t),e.consume(t),s;if(58===t){const n=o.toLowerCase();if("http"===n||"https"===n)return e.consume(t),a}return n(t)}function a(t){return 47===t?(e.consume(t),c?f:(c=!0,a)):n(t)}function f(t){return null===t||(0,i.Av)(t)||(0,i.z3)(t)||(0,i.B8)(t)||(0,i.Xh)(t)?n(t):e.attempt(u,e.attempt(l,h),n)(t)}function h(n){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(n)}},previous:k},h={tokenize:function(e,t,n){const r=this;let o,u;return function(t){if(!x(t)||!b.call(r,r.previous)||F(r.events))return n(t);return e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),l(t)};function l(t){return x(t)?(e.consume(t),l):64===t?(e.consume(t),c):n(t)}function c(t){return 46===t?e.check(s,f,a)(t):45===t||95===t||(0,i.H$)(t)?(u=!0,e.consume(t),c):f(t)}function a(t){return e.consume(t),o=!0,c}function f(l){return u&&o&&(0,i.jv)(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(l)):n(l)}},previous:b},p={},g={text:p};let d=48;for(;d<123;)p[d]=h,d++,58===d?d=65:91===d&&(d=97);function m(e){return null===e||40===e||42===e||95===e||91===e||93===e||126===e||(0,i.z3)(e)}function k(e){return!(0,i.jv)(e)}function b(e){return!(47===e||x(e))}function x(e){return 43===e||45===e||46===e||95===e||(0,i.H$)(e)}function F(e){let t=e.length,n=!1;for(;t--;){const r=e[t][1];if(("labelLink"===r.type||"labelImage"===r.type)&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}p[43]=h,p[45]=h,p[46]=h,p[95]=h,p[72]=[h,f],p[104]=[h,f],p[87]=[h,a],p[119]=[h,a];var C=n(3402),y=n(2761),A=n(1098);const v={tokenize:function(e,t,n){const r=this;return(0,y.f)(e,(function(e){const i=r.events[r.events.length-1];return i&&"gfmFootnoteDefinitionIndent"===i[1].type&&4===i[2].sliceSerialize(i[1],!0).length?t(e):n(e)}),"gfmFootnoteDefinitionIndent",5)},partial:!0};function D(e,t,n){const r=this;let i=r.events.length;const o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let u;for(;i--;){const e=r.events[i][1];if("labelImage"===e.type){u=e;break}if("gfmFootnoteCall"===e.type||"labelLink"===e.type||"label"===e.type||"image"===e.type||"link"===e.type)break}return function(i){if(!u||!u._balanced)return n(i);const l=(0,A.d)(r.sliceSerialize({start:u.end,end:r.now()}));if(94!==l.codePointAt(0)||!o.includes(l.slice(1)))return n(i);return e.enter("gfmFootnoteCallLabelMarker"),e.consume(i),e.exit("gfmFootnoteCallLabelMarker"),t(i)}}function w(e,t){let n,r=e.length;for(;r--;)if("labelImage"===e[r][1].type&&"enter"===e[r][0]){n=e[r][1];break}e[r+1][1].type="data",e[r+3][1].type="gfmFootnoteCallLabelMarker";const i={type:"gfmFootnoteCall",start:Object.assign({},e[r+3][1].start),end:Object.assign({},e[e.length-1][1].end)},o={type:"gfmFootnoteCallMarker",start:Object.assign({},e[r+3][1].end),end:Object.assign({},e[r+3][1].end)};o.end.column++,o.end.offset++,o.end._bufferIndex++;const u={type:"gfmFootnoteCallString",start:Object.assign({},o.end),end:Object.assign({},e[e.length-1][1].start)},l={type:"chunkString",contentType:"string",start:Object.assign({},u.start),end:Object.assign({},u.end)},c=[e[r+1],e[r+2],["enter",i,t],e[r+3],e[r+4],["enter",o,t],["exit",o,t],["enter",u,t],["enter",l,t],["exit",l,t],["exit",u,t],e[e.length-2],e[e.length-1],["exit",i,t]];return e.splice(r,e.length-r+1,...c),e}function E(e,t,n){const r=this,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let u,l=0;return function(t){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(t),e.exit("gfmFootnoteCallLabelMarker"),c};function c(t){return 94!==t?n(t):(e.enter("gfmFootnoteCallMarker"),e.consume(t),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",s)}function s(c){if(l>999||93===c&&!u||null===c||91===c||(0,i.z3)(c))return n(c);if(93===c){e.exit("chunkString");const i=e.exit("gfmFootnoteCallString");return o.includes((0,A.d)(r.sliceSerialize(i)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(c)}return(0,i.z3)(c)||(u=!0),l++,e.consume(c),92===c?a:s}function a(t){return 91===t||92===t||93===t?(e.consume(t),l++,s):s(t)}}function z(e,t,n){const r=this,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let u,l,c=0;return function(t){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(t),e.exit("gfmFootnoteDefinitionLabelMarker"),s};function s(t){return 94===t?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(t),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",a):n(t)}function a(t){if(c>999||93===t&&!l||null===t||91===t||(0,i.z3)(t))return n(t);if(93===t){e.exit("chunkString");const n=e.exit("gfmFootnoteDefinitionLabelString");return u=(0,A.d)(r.sliceSerialize(n)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(t),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),h}return(0,i.z3)(t)||(l=!0),c++,e.consume(t),92===t?f:a}function f(t){return 91===t||92===t||93===t?(e.consume(t),c++,a):a(t)}function h(t){return 58===t?(e.enter("definitionMarker"),e.consume(t),e.exit("definitionMarker"),o.includes(u)||o.push(u),(0,y.f)(e,p,"gfmFootnoteDefinitionWhitespace")):n(t)}function p(e){return t(e)}}function B(e,t,n){return e.check(C.w,t,e.attempt(v,t,n))}function L(e){e.exit("gfmFootnoteDefinition")}var S=n(1905),T=n(2987),j=n(3233);function I(e){let t=(e||{}).singleTilde;const n={tokenize:function(e,n,r){const i=this.previous,o=this.events;let u=0;return function(t){if(126===i&&"characterEscape"!==o[o.length-1][1].type)return r(t);return e.enter("strikethroughSequenceTemporary"),l(t)};function l(o){const c=(0,T.r)(i);if(126===o)return u>1?r(o):(e.consume(o),u++,l);if(u<2&&!t)return r(o);const s=e.exit("strikethroughSequenceTemporary"),a=(0,T.r)(o);return s._open=!a||2===a&&Boolean(c),s._close=!c||2===c&&Boolean(a),n(o)}},resolveAll:function(e,t){let n=-1;for(;++n<e.length;)if("enter"===e[n][0]&&"strikethroughSequenceTemporary"===e[n][1].type&&e[n][1]._close){let r=n;for(;r--;)if("exit"===e[r][0]&&"strikethroughSequenceTemporary"===e[r][1].type&&e[r][1]._open&&e[n][1].end.offset-e[n][1].start.offset==e[r][1].end.offset-e[r][1].start.offset){e[n][1].type="strikethroughSequence",e[r][1].type="strikethroughSequence";const i={type:"strikethrough",start:Object.assign({},e[r][1].start),end:Object.assign({},e[n][1].end)},o={type:"strikethroughText",start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},u=[["enter",i,t],["enter",e[r][1],t],["exit",e[r][1],t],["enter",o,t]],l=t.parser.constructs.insideSpan.null;l&&(0,S.d)(u,u.length,0,(0,j.C)(l,e.slice(r+1,n),t)),(0,S.d)(u,u.length,0,[["exit",o,t],["enter",e[n][1],t],["exit",e[n][1],t],["exit",i,t]]),(0,S.d)(e,r-1,n-r+3,u),n=r+u.length-2;break}}n=-1;for(;++n<e.length;)"strikethroughSequenceTemporary"===e[n][1].type&&(e[n][1].type="data");return e}};return null==t&&(t=!0),{text:{126:n},insideSpan:{null:[n]},attentionMarkers:{null:[126]}}}const M={flow:{null:{tokenize:function(e,t,n){const r=this,o=[];let u,l,c=0;return function(t){if(e.enter("table")._align=o,e.enter("tableHead"),e.enter("tableRow"),124===t)return s(t);return c++,e.enter("temporaryTableCellContent"),h(t)};function s(t){return e.enter("tableCellDivider"),e.consume(t),e.exit("tableCellDivider"),u=!0,a}function a(t){return null===t||(0,i.Ch)(t)?function(t){if(null===t)return n(t);e.exit("tableRow"),e.exit("tableHead");const i=r.interrupt;return r.interrupt=!0,e.attempt({tokenize:L,partial:!0},(function(t){return r.interrupt=i,e.enter("tableDelimiterRow"),g(t)}),(function(e){return r.interrupt=i,n(e)}))(t)}(t):(0,i.xz)(t)?(e.enter("whitespace"),e.consume(t),f):(u&&(u=void 0,c++),124===t?s(t):(e.enter("temporaryTableCellContent"),h(t)))}function f(t){return(0,i.xz)(t)?(e.consume(t),f):(e.exit("whitespace"),a(t))}function h(t){return null===t||124===t||(0,i.z3)(t)?(e.exit("temporaryTableCellContent"),a(t)):(e.consume(t),92===t?p:h)}function p(t){return 92===t||124===t?(e.consume(t),h):h(t)}function g(t){return null===t||(0,i.Ch)(t)?x(t):(0,i.xz)(t)?(e.enter("whitespace"),e.consume(t),d):45===t?(e.enter("tableDelimiterFiller"),e.consume(t),l=!0,o.push("none"),m):58===t?(e.enter("tableDelimiterAlignment"),e.consume(t),e.exit("tableDelimiterAlignment"),o.push("left"),k):124===t?(e.enter("tableCellDivider"),e.consume(t),e.exit("tableCellDivider"),g):n(t)}function d(t){return(0,i.xz)(t)?(e.consume(t),d):(e.exit("whitespace"),g(t))}function m(t){return 45===t?(e.consume(t),m):(e.exit("tableDelimiterFiller"),58===t?(e.enter("tableDelimiterAlignment"),e.consume(t),e.exit("tableDelimiterAlignment"),o[o.length-1]="left"===o[o.length-1]?"center":"right",b):g(t))}function k(t){return 45===t?(e.enter("tableDelimiterFiller"),e.consume(t),l=!0,m):n(t)}function b(t){return null===t||(0,i.Ch)(t)?x(t):(0,i.xz)(t)?(e.enter("whitespace"),e.consume(t),d):124===t?(e.enter("tableCellDivider"),e.consume(t),e.exit("tableCellDivider"),g):n(t)}function x(t){return e.exit("tableDelimiterRow"),l&&c===o.length?null===t?F(t):e.check(O,F,e.attempt({tokenize:L,partial:!0},(0,y.f)(e,C,"linePrefix",4),F))(t):n(t)}function F(n){return e.exit("table"),t(n)}function C(t){return e.enter("tableBody"),A(t)}function A(t){return e.enter("tableRow"),124===t?v(t):(e.enter("temporaryTableCellContent"),E(t))}function v(t){return e.enter("tableCellDivider"),e.consume(t),e.exit("tableCellDivider"),D}function D(t){return null===t||(0,i.Ch)(t)?function(t){if(e.exit("tableRow"),null===t)return B(t);return e.check(O,B,e.attempt({tokenize:L,partial:!0},(0,y.f)(e,A,"linePrefix",4),B))(t)}(t):(0,i.xz)(t)?(e.enter("whitespace"),e.consume(t),w):124===t?v(t):(e.enter("temporaryTableCellContent"),E(t))}function w(t){return(0,i.xz)(t)?(e.consume(t),w):(e.exit("whitespace"),D(t))}function E(t){return null===t||124===t||(0,i.z3)(t)?(e.exit("temporaryTableCellContent"),D(t)):(e.consume(t),92===t?z:E)}function z(t){return 92===t||124===t?(e.consume(t),E):E(t)}function B(t){return e.exit("tableBody"),F(t)}function L(e,t,n){return function(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),(0,y.f)(e,o,"linePrefix")};function o(o){if(r.parser.lazy[r.now().line]||null===o||(0,i.Ch)(o))return n(o);const u=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&u&&"linePrefix"===u[1].type&&u[2].sliceSerialize(u[1],!0).length>=4?n(o):(r._gfmTableDynamicInterruptHack=!0,e.check(r.parser.constructs.flow,(function(e){return r._gfmTableDynamicInterruptHack=!1,n(e)}),(function(e){return r._gfmTableDynamicInterruptHack=!1,t(e)}))(o))}}},resolve:function(e,t){let n,r,i,o,u,l,c,s=-1;for(;++s<e.length;){const a=e[s][1];if(i&&("temporaryTableCellContent"===a.type&&(o=o||s,u=s),("tableCellDivider"===a.type||"tableRow"===a.type)&&u)){const n={type:"tableContent",start:e[o][1].start,end:e[u][1].end},r={type:"chunkText",start:n.start,end:n.end,contentType:"text"};e.splice(o,u-o+1,["enter",n,t],["enter",r,t],["exit",r,t],["exit",n,t]),s-=u-o-3,o=void 0,u=void 0}if("exit"===e[s][0]&&void 0!==l&&l+(c?0:1)<s&&("tableCellDivider"===a.type||"tableRow"===a.type&&(l+3<s||"whitespace"!==e[l][1].type))){const i={type:r?"tableDelimiter":n?"tableHeader":"tableData",start:e[l][1].start,end:e[s][1].end};e.splice(s+("tableCellDivider"===a.type?1:0),0,["exit",i,t]),e.splice(l,0,["enter",i,t]),s+=2,l=s+1,c=!0}"tableRow"===a.type&&(i="enter"===e[s][0],i&&(l=s+1,c=!1)),"tableDelimiterRow"===a.type&&(r="enter"===e[s][0],r&&(l=s+1,c=!1)),"tableHead"===a.type&&(n="enter"===e[s][0])}return e}}}},O={tokenize:function(e,t,n){let r=0;return function(t){return e.enter("check"),e.consume(t),o};function o(u){return-1===u||32===u?(e.consume(u),r++,4===r?t:o):null===u||(0,i.z3)(u)?t(u):n(u)}},partial:!0};const R={tokenize:function(e,t,n){const r=this;return function(t){if(null!==r.previous||!r._gfmTasklistFirstContentOfListItem)return n(t);return e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(t),e.exit("taskListCheckMarker"),o};function o(t){return(0,i.z3)(t)?(e.enter("taskListCheckValueUnchecked"),e.consume(t),e.exit("taskListCheckValueUnchecked"),u):88===t||120===t?(e.enter("taskListCheckValueChecked"),e.consume(t),e.exit("taskListCheckValueChecked"),u):n(t)}function u(t){return 93===t?(e.enter("taskListCheckMarker"),e.consume(t),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),l):n(t)}function l(r){return(0,i.Ch)(r)?t(r):(0,i.xz)(r)?e.check({tokenize:H},t,n)(r):n(r)}}},_={text:{91:R}};function H(e,t,n){return(0,y.f)(e,(function(e){return null===e?n(e):t(e)}),"whitespace")}function P(e,t){const n=String(e);if("string"!=typeof t)throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;-1!==i;)r++,i=n.indexOf(t,i+t.length);return r}const $=function(e){if(null==e)return V;if("string"==typeof e)return function(e){return W(t);function t(t){return t&&t.type===e}}(e);if("object"==typeof e)return Array.isArray(e)?function(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=$(e[n]);return W(r);function r(...e){let n=-1;for(;++n<t.length;)if(t[n].call(this,...e))return!0;return!1}}(e):function(e){return W(t);function t(t){let n;for(n in e)if(t[n]!==e[n])return!1;return!0}}(e);if("function"==typeof e)return W(e);throw new Error("Expected function, string, or object as test")};function W(e){return function(t,...n){return Boolean(t&&"object"==typeof t&&"type"in t&&Boolean(e.call(this,t,...n)))}}function V(){return!0}const q=function(e,t,n,r){"function"==typeof t&&"function"!=typeof n&&(r=n,n=t,t=null);const i=$(t),o=r?-1:1;!function e(u,l,c){const s=u&&"object"==typeof u?u:{};if("string"==typeof s.type){const e="string"==typeof s.tagName?s.tagName:"string"==typeof s.name?s.name:void 0;Object.defineProperty(a,"name",{value:"node ("+u.type+(e?"<"+e+">":"")+")"})}return a;function a(){let s,a,f,h=[];if((!t||i(u,l,c[c.length-1]||null))&&(h=function(e){if(Array.isArray(e))return e;if("number"==typeof e)return[true,e];return[e]}(n(u,c)),false===h[0]))return h;if(u.children&&"skip"!==h[0])for(a=(r?u.children.length:-1)+o,f=c.concat(u);a>-1&&a<u.children.length;){if(s=e(u.children[a],a,f)(),false===s[0])return s;a="number"==typeof s[1]?s[1]:a+o}return h}}(e,void 0,[])()};const N={}.hasOwnProperty,U=function(e,t,n,r){let i,o;"string"==typeof t||t instanceof RegExp?(o=[[t,n]],i=r):(o=t,i=n),i||(i={});const u=$(i.ignore||[]),l=function(e){const t=[];if("object"!=typeof e)throw new TypeError("Expected array or object as schema");if(Array.isArray(e)){let n=-1;for(;++n<e.length;)t.push([Z(e[n][0]),X(e[n][1])])}else{let n;for(n in e)N.call(e,n)&&t.push([Z(n),X(e[n])])}return t}(o);let c=-1;for(;++c<l.length;)q(e,"text",s);return e;function s(e,t){let n,r=-1;for(;++r<t.length;){const e=t[r];if(u(e,n?n.children.indexOf(e):void 0,n))return;n=e}if(n)return function(e,t){const n=t[t.length-1],r=l[c][0],i=l[c][1];let o=0;const u=n.children.indexOf(e);let s=!1,a=[];r.lastIndex=0;let f=r.exec(e.value);for(;f;){const n=f.index,u={index:f.index,input:f.input,stack:[...t,e]};let l=i(...f,u);if("string"==typeof l&&(l=l.length>0?{type:"text",value:l}:void 0),!1!==l&&(o!==n&&a.push({type:"text",value:e.value.slice(o,n)}),Array.isArray(l)?a.push(...l):l&&a.push(l),o=n+f[0].length,s=!0),!r.global)break;f=r.exec(e.value)}s?(o<e.value.length&&a.push({type:"text",value:e.value.slice(o)}),n.children.splice(u,1,...a)):a=[e];return u+a.length}(e,t)}};function Z(e){return"string"==typeof e?new RegExp(function(e){if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(e),"g"):e}function X(e){return"function"==typeof e?e:()=>e}const Y="phrasing",Q=["autolink","link","image","label"],G={transforms:[function(e){U(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,ee],[/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g,te]],{ignore:["link","linkReference"]})}],enter:{literalAutolink:function(e){this.enter({type:"link",title:null,url:"",children:[]},e)},literalAutolinkEmail:K,literalAutolinkHttp:K,literalAutolinkWww:K},exit:{literalAutolink:function(e){this.exit(e)},literalAutolinkEmail:function(e){this.config.exit.autolinkEmail.call(this,e)},literalAutolinkHttp:function(e){this.config.exit.autolinkProtocol.call(this,e)},literalAutolinkWww:function(e){this.config.exit.data.call(this,e);this.stack[this.stack.length-1].url="http://"+this.sliceSerialize(e)}}},J={unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Y,notInConstruct:Q},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Y,notInConstruct:Q},{character:":",before:"[ps]",after:"\\/",inConstruct:Y,notInConstruct:Q}]};function K(e){this.config.enter.autolinkProtocol.call(this,e)}function ee(e,t,n,r,i){let o="";if(!ne(i))return!1;if(/^w/i.test(t)&&(n=t+n,t="",o="http://"),!function(e){const t=e.split(".");if(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))return!1;return!0}(n))return!1;const u=function(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")");const i=P(e,"(");let o=P(e,")");for(;-1!==r&&i>o;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),o++;return[e,n]}(n+r);if(!u[0])return!1;const l={type:"link",title:null,url:o+t+u[0],children:[{type:"text",value:t+u[0]}]};return u[1]?[l,{type:"text",value:u[1]}]:l}function te(e,t,n,r){return!(!ne(r,!0)||/[-\d_]$/.test(n))&&{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function ne(e,t){const n=e.input.charCodeAt(e.index-1);return(0===e.index||(0,i.B8)(n)||(0,i.Xh)(n))&&(!t||47!==n)}var re=n(7881);function ie(e){return e.label||!e.identifier?e.label||"":(0,re.v)(e.identifier)}function oe(e,t,n,r){let i=r.join.length;for(;i--;){const o=r.join[i](e,t,n,r);if(!0===o||1===o)break;if("number"==typeof o)return"\n".repeat(1+o);if(!1===o)return"\n\n\x3c!----\x3e\n\n"}return"\n\n"}const ue=/\r?\n|\r/g;function le(e){if(!e._compiled){const t=(e.atBreak?"[\\r\\n][\\t ]*":"")+(e.before?"(?:"+e.before+")":"");e._compiled=new RegExp((t?"("+t+")":"")+(/[|\\{}()[\]^$+*?.-]/.test(e.character)?"\\":"")+e.character+(e.after?"(?:"+e.after+")":""),"g")}return e._compiled}function ce(e,t){return se(e,t.inConstruct,!0)&&!se(e,t.notInConstruct,!1)}function se(e,t,n){if("string"==typeof t&&(t=[t]),!t||0===t.length)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function ae(e,t,n){const r=(n.before||"")+(t||"")+(n.after||""),i=[],o=[],u={};let l=-1;for(;++l<e.unsafe.length;){const t=e.unsafe[l];if(!ce(e.stack,t))continue;const n=le(t);let o;for(;o=n.exec(r);){const e="before"in t||Boolean(t.atBreak),n="after"in t,r=o.index+(e?o[1].length:0);i.includes(r)?(u[r].before&&!e&&(u[r].before=!1),u[r].after&&!n&&(u[r].after=!1)):(i.push(r),u[r]={before:e,after:n})}}i.sort(fe);let c=n.before?n.before.length:0;const s=r.length-(n.after?n.after.length:0);for(l=-1;++l<i.length;){const e=i[l];e<c||e>=s||(e+1<s&&i[l+1]===e+1&&u[e].after&&!u[e+1].before&&!u[e+1].after||i[l-1]===e-1&&u[e].before&&!u[e-1].before&&!u[e-1].after||(c!==e&&o.push(he(r.slice(c,e),"\\")),c=e,!/[!-/:-@[-`{-~]/.test(r.charAt(e))||n.encode&&n.encode.includes(r.charAt(e))?(o.push("&#x"+r.charCodeAt(e).toString(16).toUpperCase()+";"),c++):o.push("\\")))}return o.push(he(r.slice(c,s),n.after)),o.join("")}function fe(e,t){return e-t}function he(e,t){const n=/\\(?=[!-/:-@[-`{-~])/g,r=[],i=[],o=e+t;let u,l=-1,c=0;for(;u=n.exec(o);)r.push(u.index);for(;++l<r.length;)c!==r[l]&&i.push(e.slice(c,r[l])),i.push("\\"),c=r[l];return i.push(e.slice(c)),i.join("")}function pe(e){const t=e||{},n=t.now||{};let r=t.lineShift||0,i=n.line||1,o=n.column||1;return{move:function(e){const t=e||"",n=t.split(/\r?\n|\r/g),u=n[n.length-1];return i+=n.length-1,o=1===n.length?o+u.length:1+u.length+r,t},current:function(){return{now:{line:i,column:o},lineShift:r}},shift:function(e){r+=e}}}function ge(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function de(){this.buffer()}function me(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=(0,A.d)(this.sliceSerialize(e)).toLowerCase()}function ke(e){this.exit(e)}function be(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function xe(){this.buffer()}function Fe(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=(0,A.d)(this.sliceSerialize(e)).toLowerCase()}function Ce(e){this.exit(e)}function ye(e,t,n,r){const i=pe(r);let o=i.move("[^");const u=n.enter("footnoteReference"),l=n.enter("reference");return o+=i.move(ae(n,ie(e),{...i.current(),before:o,after:"]"})),l(),u(),o+=i.move("]"),o}function Ae(e,t,n,r){const i=pe(r);let o=i.move("[^");const u=n.enter("footnoteDefinition"),l=n.enter("label");return o+=i.move(ae(n,ie(e),{...i.current(),before:o,after:"]"})),l(),o+=i.move("]:"+(e.children&&e.children.length>0?" ":"")),i.shift(4),o+=i.move(function(e,t){const n=[];let r,i=0,o=0;for(;r=ue.exec(e);)u(e.slice(i,r.index)),n.push(r[0]),i=r.index+r[0].length,o++;return u(e.slice(i)),n.join("");function u(e){n.push(t(e,o,!e))}}(function(e,t,n){const r=t.indexStack,i=e.children||[],o=t.createTracker(n),u=[];let l=-1;for(r.push(-1);++l<i.length;){const n=i[l];r[r.length-1]=l,u.push(o.move(t.handle(n,e,t,{before:"\n",after:"\n",...o.current()}))),"list"!==n.type&&(t.bulletLastUsed=void 0),l<i.length-1&&u.push(o.move(oe(n,i[l+1],e,t)))}return r.pop(),u.join("")}(e,n,i.current()),ve)),u(),o}function ve(e,t,n){return 0===t?e:(n?"":"    ")+e}function De(e,t,n){const r=t.indexStack,i=e.children||[],o=[];let u=-1,l=n.before;r.push(-1);let c=t.createTracker(n);for(;++u<i.length;){const s=i[u];let a;if(r[r.length-1]=u,u+1<i.length){let n=t.handle.handlers[i[u+1].type];n&&n.peek&&(n=n.peek),a=n?n(i[u+1],e,t,{before:"",after:"",...c.current()}).charAt(0):""}else a=n.after;o.length>0&&("\r"===l||"\n"===l)&&"html"===s.type&&(o[o.length-1]=o[o.length-1].replace(/(\r?\n|\r)$/," "),l=" ",c=t.createTracker(n),c.move(o.join(""))),o.push(c.move(t.handle(s,e,t,{...c.current(),before:l,after:a}))),l=o[o.length-1].slice(-1)}return r.pop(),o.join("")}ye.peek=function(){return"["};ze.peek=function(){return"~"};const we={canContainEols:["delete"],enter:{strikethrough:function(e){this.enter({type:"delete",children:[]},e)}},exit:{strikethrough:function(e){this.exit(e)}}},Ee={unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"]}],handlers:{delete:ze}};function ze(e,t,n,r){const i=pe(r),o=n.enter("strikethrough");let u=i.move("~~");return u+=De(e,n,{...i.current(),before:u,after:"~"}),u+=i.move("~~"),o(),u}function Be(e,t,n){let r=e.value||"",i="`",o=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++o<n.unsafe.length;){const e=n.unsafe[o],t=le(e);let i;if(e.atBreak)for(;i=t.exec(r);){let e=i.index;10===r.charCodeAt(e)&&13===r.charCodeAt(e-1)&&e--,r=r.slice(0,e)+" "+r.slice(i.index+1)}}return i+r+i}function Le(e){return e.length}function Se(e){const t="string"==typeof e?e.codePointAt(0):0;return 67===t||99===t?99:76===t||108===t?108:82===t||114===t?114:0}Be.peek=function(){return"`"};const Te={enter:{table:function(e){const t=e._align;this.enter({type:"table",align:t.map((e=>"none"===e?null:e)),children:[]},e),this.setData("inTable",!0)},tableData:Ie,tableHeader:Ie,tableRow:function(e){this.enter({type:"tableRow",children:[]},e)}},exit:{codeText:function(e){let t=this.resume();this.getData("inTable")&&(t=t.replace(/\\([\\|])/g,Me));this.stack[this.stack.length-1].value=t,this.exit(e)},table:function(e){this.exit(e),this.setData("inTable")},tableData:je,tableHeader:je,tableRow:je}};function je(e){this.exit(e)}function Ie(e){this.enter({type:"tableCell",children:[]},e)}function Me(e,t){return"|"===t?t:e}function Oe(e){const t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,o=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:"\n",inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[\t :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{table:function(e,t,n,r){return l(function(e,t,n){const r=e.children;let i=-1;const o=[],u=t.enter("table");for(;++i<r.length;)o[i]=c(r[i],t,n);return u(),o}(e,n,r),e.align)},tableRow:function(e,t,n,r){const i=l([c(e,n,r)]);return i.slice(0,i.indexOf("\n"))},tableCell:u,inlineCode:function(e,t,n){let r=Be(e,0,n);n.stack.includes("tableCell")&&(r=r.replace(/\|/g,"\\$&"));return r}}};function u(e,t,n,r){const i=n.enter("tableCell"),u=n.enter("phrasing"),l=De(e,n,{...r,before:o,after:o});return u(),i(),l}function l(e,t){return function(e,t={}){const n=(t.align||[]).concat(),r=t.stringLength||Le,i=[],o=[],u=[],l=[];let c=0,s=-1;for(;++s<e.length;){const n=[],i=[];let f=-1;for(e[s].length>c&&(c=e[s].length);++f<e[s].length;){const o=null==(a=e[s][f])?"":String(a);if(!1!==t.alignDelimiters){const e=r(o);i[f]=e,(void 0===l[f]||e>l[f])&&(l[f]=e)}n.push(o)}o[s]=n,u[s]=i}var a;let f=-1;if("object"==typeof n&&"length"in n)for(;++f<c;)i[f]=Se(n[f]);else{const e=Se(n);for(;++f<c;)i[f]=e}f=-1;const h=[],p=[];for(;++f<c;){const e=i[f];let n="",r="";99===e?(n=":",r=":"):108===e?n=":":114===e&&(r=":");let o=!1===t.alignDelimiters?1:Math.max(1,l[f]-n.length-r.length);const u=n+"-".repeat(o)+r;!1!==t.alignDelimiters&&(o=n.length+o+r.length,o>l[f]&&(l[f]=o),p[f]=o),h[f]=u}o.splice(1,0,h),u.splice(1,0,p),s=-1;const g=[];for(;++s<o.length;){const e=o[s],n=u[s];f=-1;const r=[];for(;++f<c;){const o=e[f]||"";let u="",s="";if(!1!==t.alignDelimiters){const e=l[f]-(n[f]||0),t=i[f];114===t?u=" ".repeat(e):99===t?e%2?(u=" ".repeat(e/2+.5),s=" ".repeat(e/2-.5)):(u=" ".repeat(e/2),s=u):s=" ".repeat(e)}!1===t.delimiterStart||f||r.push("|"),!1===t.padding||!1===t.alignDelimiters&&""===o||!1===t.delimiterStart&&!f||r.push(" "),!1!==t.alignDelimiters&&r.push(u),r.push(o),!1!==t.alignDelimiters&&r.push(s),!1!==t.padding&&r.push(" "),!1===t.delimiterEnd&&f===c-1||r.push("|")}g.push(!1===t.delimiterEnd?r.join("").replace(/ +$/,""):r.join(""))}return g.join("\n")}(e,{align:t,alignDelimiters:r,padding:n,stringLength:i})}function c(e,t,n){const r=e.children;let i=-1;const o=[],l=t.enter("tableRow");for(;++i<r.length;)o[i]=u(r[i],0,t,n);return l(),o}}function Re(e,t,n,r){const i=function(e){const t=e.options.listItemIndent||"tab";if(1===t||"1"===t)return"one";if("tab"!==t&&"one"!==t&&"mixed"!==t)throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}(n);let o=n.bulletCurrent||function(e){const t=e.options.bullet||"*";if("*"!==t&&"+"!==t&&"-"!==t)throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}(n);t&&"list"===t.type&&t.ordered&&(o=("number"==typeof t.start&&t.start>-1?t.start:1)+(!1===n.options.incrementListMarker?0:t.children.indexOf(e))+o);let u=o.length+1;("tab"===i||"mixed"===i&&(t&&"list"===t.type&&t.spread||e.spread))&&(u=4*Math.ceil(u/4));const l=n.createTracker(r);l.move(o+" ".repeat(u-o.length)),l.shift(u);const c=n.enter("listItem"),s=n.indentLines(n.containerFlow(e,l.current()),(function(e,t,n){if(t)return(n?"":" ".repeat(u))+e;return(n?o:o+" ".repeat(u-o.length))+e}));return c(),s}const _e={exit:{taskListCheckValueChecked:Pe,taskListCheckValueUnchecked:Pe,paragraph:function(e){const t=this.stack[this.stack.length-2];if(t&&"listItem"===t.type&&"boolean"==typeof t.checked){const e=this.stack[this.stack.length-1],n=e.children[0];if(n&&"text"===n.type){const r=t.children;let i,o=-1;for(;++o<r.length;){const e=r[o];if("paragraph"===e.type){i=e;break}}i===e&&(n.value=n.value.slice(1),0===n.value.length?e.children.shift():e.position&&n.position&&"number"==typeof n.position.start.offset&&(n.position.start.column++,n.position.start.offset++,e.position.start=Object.assign({},n.position.start)))}}this.exit(e)}}},He={unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:function(e,t,n,r){const i=e.children[0],o="boolean"==typeof e.checked&&i&&"paragraph"===i.type,u="["+(e.checked?"x":" ")+"] ",l=pe(r);o&&l.move(u);let c=Re(e,t,n,{...r,...l.current()});o&&(c=c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,(function(e){return e+u})));return c}}};function Pe(e){this.stack[this.stack.length-2].checked="taskListCheckValueChecked"===e.type}function $e(e={}){const t=this.data();function n(e,n){(t[e]?t[e]:t[e]=[]).push(n)}n("micromarkExtensions",function(e){return(0,r.W)([g,{document:{91:{tokenize:z,continuation:{tokenize:B},exit:L}},text:{91:{tokenize:E},93:{add:"after",tokenize:D,resolveTo:w}}},I(e),M,_])}(e)),n("fromMarkdownExtensions",[G,{enter:{gfmFootnoteDefinition:ge,gfmFootnoteDefinitionLabelString:de,gfmFootnoteCall:be,gfmFootnoteCallString:xe},exit:{gfmFootnoteDefinition:ke,gfmFootnoteDefinitionLabelString:me,gfmFootnoteCall:Ce,gfmFootnoteCallString:Fe}},we,Te,_e]),n("toMarkdownExtensions",function(e){return{extensions:[J,{unsafe:[{character:"[",inConstruct:["phrasing","label","reference"]}],handlers:{footnoteDefinition:Ae,footnoteReference:ye}},Ee,Oe(e),He]}}(e))}}}]);
//# sourceMappingURL=e15e2d0b2584565d323eeb234a77846186bc84c5-299ae62a93147ffe87a7.js.map