(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{469:function(t,e,s){"use strict";s.r(e);var a=s(33),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"net-err-incomplete-chunked-encoding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#net-err-incomplete-chunked-encoding"}},[t._v("#")]),t._v(" Net::ERR_INCOMPLETE_CHUNKED_ENCODING")]),t._v(" "),s("h3",{attrs:{id:"_1-磁盘空间不足"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-磁盘空间不足"}},[t._v("#")]),t._v(" 1. 磁盘空间不足")]),t._v(" "),s("p",[t._v("首先查看 "),s("code",[t._v("nginx")]),t._v(" 的日志")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# tail -f error.log")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("/07/08 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(":43:44 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("crit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2176")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#0: *1 pwritev() "/etc/nginx/proxy_temp/1/00/0000000001" failed (28: No space left on device) while reading upstream')]),t._v("\n")])])]),s("p",[t._v("提示空间不足，再验证磁盘空间")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("df")]),t._v(" -h\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 果然是磁盘占满")]),t._v("\nFilesystem      Size  Used Avail Use% Mounted on\n/dev/vda1        99G   96G  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(".7G  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("% /\n")])])]),s("p",[t._v("清理出一部分空间即可使用了。")])])}),[],!1,null,null,null);e.default=n.exports}}]);