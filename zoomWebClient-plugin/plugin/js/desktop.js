!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=38)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(40))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},,function(t,n,e){var r=e(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,e){var r=e(4),o=e(13),i=e(17);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(18),o=e(12);t.exports=function(t){return r(o(t))}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(7);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},,,function(t,n,e){var r=e(0),o=e(16).f,i=e(5),u=e(22),c=e(14),a=e(47),f=e(58);t.exports=function(t,n){var e,s,l,p,v,g=t.target,x=t.global,y=t.stat;if(e=x?r:y?r[g]||c(g,{}):(r[g]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(x?s:g+(y?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(e,s,p,t)}}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(4),o=e(21),i=e(8),u=e(20),c=Object.defineProperty;n.f=r?c:function(t,n,e){if(i(t),n=u(n,!0),i(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(0),o=e(5);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){"use strict";var r,o,i=e(64),u=e(65),c=RegExp.prototype.exec,a=String.prototype.replace,f=c,s=(r=/a/,o=/b*/g,c.call(r,"a"),c.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),l=u.UNSUPPORTED_Y||u.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(s||p||l)&&(f=function(t){var n,e,r,o,u=this,f=l&&u.sticky,v=i.call(u),g=u.source,x=0,y=t;return f&&(-1===(v=v.replace("y","")).indexOf("g")&&(v+="g"),y=String(t).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==t[u.lastIndex-1])&&(g="(?: "+g+")",y=" "+y,x++),e=new RegExp("^(?:"+g+")",v)),p&&(e=new RegExp("^"+g+"$(?!\\s)",v)),s&&(n=u.lastIndex),r=c.call(f?e:u,y),f?r?(r.input=r.input.slice(x),r[0]=r[0].slice(x),r.index=u.lastIndex,u.lastIndex+=r[0].length):u.lastIndex=0:s&&r&&(u.lastIndex=u.global?r.index+r[0].length:n),p&&r&&r.length>1&&a.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=f},function(t,n,e){var r=e(4),o=e(41),i=e(17),u=e(6),c=e(20),a=e(2),f=e(21),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=u(t),n=c(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(1),o=e(19),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(7);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(4),o=e(1),i=e(42);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(0),o=e(5),i=e(2),u=e(14),c=e(23),a=e(43),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,e,c){var a=!!c&&!!c.unsafe,f=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),s(e).source=l.join("string"==typeof n?n:"")),t!==r?(a?!p&&t[n]&&(f=!0):delete t[n],f?t[n]=e:o(t,n,e)):f?t[n]=e:u(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||c(this)}))},function(t,n,e){var r=e(24),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(0),o=e(14),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(46),o=e(24);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n){t.exports={}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,n,e){"use strict";var r=e(11),o=e(15);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,n,e){var r=e(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},,,,,,,function(t,n,e){"use strict";e.r(n);e(39),e(60),e(61),e(30),e(66);!function(t){var n=kintone.plugin.app.getConfig(t);if("api_key"in n&&"api_secret"in n){var e=n.api_key,r=n.api_secret;kintone.events.on("app.record.index.show",(function(){if(""!=window.location.search.substring(1)){var t=testTool.parseQuery(),n=kintone.getLoginUser().name,o={apiKey:e,meetingNumber:t.meetingNumber,userName:function(){if(n)try{return testTool.b64DecodeUnicode(n)}catch(t){return n}return"Guest"}(),passWord:t.password,leaveUrl:"/k/#/portal",role:parseInt(t.role,10)};testTool.isMobileDevice()&&(vConsole=new VConsole),ZoomMtg.preLoadWasm(),ZoomMtg.prepareJssdk();ZoomMtg.generateSignature({meetingNumber:o.meetingNumber,apiKey:e,apiSecret:r,role:o.role,success:function(t){var n;o.signature=t.result,o.apiKey=e,n=o.signature,ZoomMtg.init({leaveUrl:o.leaveUrl,success:function(){$.i18n.reload(o.lang),ZoomMtg.join({meetingNumber:o.meetingNumber,userName:o.userName,signature:n,apiKey:o.apiKey,passWord:o.passWord,success:function(t){ZoomMtg.getAttendeeslist({}),ZoomMtg.getCurrentUser({success:function(t){}})},error:function(t){console.log(t)}})},error:function(t){console.log(t)}})}})}else document.getElementById("zmmtg-root").remove()}))}}(kintone.$PLUGIN_ID)},function(t,n,e){"use strict";var r=e(11),o=e(18),i=e(6),u=e(59),c=[].join,a=o!=Object,f=u("join",",");r({target:"Array",proto:!0,forced:a||!f},{join:function(t){return c.call(i(this),void 0===t?",":t)}})},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(0),o=e(7),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,e){var r,o,i,u=e(44),c=e(0),a=e(7),f=e(5),s=e(2),l=e(45),p=e(27),v=c.WeakMap;if(u){var g=new v,x=g.get,y=g.has,d=g.set;r=function(t,n){return d.call(g,t,n),n},o=function(t){return x.call(g,t)||{}},i=function(t){return y.call(g,t)}}else{var m=l("state");p[m]=!0,r=function(t,n){return f(t,m,n),n},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(0),o=e(23),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(25),o=e(26),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports=!1},function(t,n,e){var r=e(2),o=e(48),i=e(16),u=e(13);t.exports=function(t,n){for(var e=o(n),c=u.f,a=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||c(t,s,a(n,s))}}},function(t,n,e){var r=e(49),o=e(51),i=e(57),u=e(8);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(u(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(50),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){var r=e(52),o=e(56).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(2),o=e(6),i=e(53).indexOf,u=e(27);t.exports=function(t,n){var e,c=o(t),a=0,f=[];for(e in c)!r(u,e)&&r(c,e)&&f.push(e);for(;n.length>a;)r(c,e=n[a++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(6),o=e(54),i=e(55),u=function(t){return function(n,e,u){var c,a=r(n),f=o(a.length),s=i(u,f);if(t&&e!=e){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,e){var r=e(28),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(28),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(1),o=/#|\.prototype\./,i=function(t,n){var e=c[u(t)];return e==f||e!=a&&("function"==typeof n?r(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,e){"use strict";var r=e(1);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},function(t,n,e){var r=e(4),o=e(13).f,i=Function.prototype,u=i.toString,c=/^\s*function ([^ (]*)/;r&&!("name"in i)&&o(i,"name",{configurable:!0,get:function(){try{return u.call(this).match(c)[1]}catch(t){return""}}})},function(t,n,e){var r=e(11),o=e(62);r({global:!0,forced:parseInt!=o},{parseInt:o})},function(t,n,e){var r=e(0),o=e(63).trim,i=e(29),u=r.parseInt,c=/^[+-]?0[Xx]/,a=8!==u(i+"08")||22!==u(i+"0x16");t.exports=a?function(t,n){var e=o(String(t));return u(e,n>>>0||(c.test(e)?16:10))}:u},function(t,n,e){var r=e(12),o="["+e(29)+"]",i=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),c=function(t){return function(n){var e=String(r(n));return 1&t&&(e=e.replace(i,"")),2&t&&(e=e.replace(u,"")),e}};t.exports={start:c(1),end:c(2),trim:c(3)}},function(t,n,e){"use strict";var r=e(8);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,e){"use strict";var r=e(1);function o(t,n){return RegExp(t,n)}n.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),n.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,n,e){"use strict";var r=e(67),o=e(8),i=e(12),u=e(70),c=e(71);r("search",1,(function(t,n,e){return[function(n){var e=i(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,e):new RegExp(n)[t](String(e))},function(t){var r=e(n,t,this);if(r.done)return r.value;var i=o(t),a=String(this),f=i.lastIndex;u(f,0)||(i.lastIndex=0);var s=c(i,a);return u(i.lastIndex,f)||(i.lastIndex=f),null===s?-1:s.index}]}))},function(t,n,e){"use strict";e(30);var r=e(22),o=e(1),i=e(68),u=e(15),c=e(5),a=i("species"),f=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s="$0"==="a".replace(/./,"$0"),l=i("replace"),p=!!/./[l]&&""===/./[l]("a","$0"),v=!o((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,n,e,l){var g=i(t),x=!o((function(){var n={};return n[g]=function(){return 7},7!=""[t](n)})),y=x&&!o((function(){var n=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[a]=function(){return e},e.flags="",e[g]=/./[g]),e.exec=function(){return n=!0,null},e[g](""),!n}));if(!x||!y||"replace"===t&&(!f||!s||p)||"split"===t&&!v){var d=/./[g],m=e(g,""[t],(function(t,n,e,r,o){return n.exec===u?x&&!o?{done:!0,value:d.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),h=m[0],b=m[1];r(String.prototype,t,h),r(RegExp.prototype,g,2==n?function(t,n){return b.call(t,this,n)}:function(t){return b.call(t,this)})}l&&c(RegExp.prototype[g],"sham",!0)}},function(t,n,e){var r=e(0),o=e(25),i=e(2),u=e(26),c=e(31),a=e(69),f=o("wks"),s=r.Symbol,l=a?s:s&&s.withoutSetter||u;t.exports=function(t){return i(f,t)||(c&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,n,e){var r=e(31);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n){t.exports=Object.is||function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},function(t,n,e){var r=e(19),o=e(15);t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var i=e.call(t,n);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}}]);