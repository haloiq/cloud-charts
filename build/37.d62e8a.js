(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{419:function(n,t,a){"use strict";a.r(t),a.d(t,"fetchList",(function(){return s}));var e=a(245),r=a.n(e),c=a(247),i=function n(t){return e.Feedback.toast.success(t)},o=function n(t,a){return e.Feedback.toast.error("".concat(t,": ").concat(String(a)))};function s(n){return c.default.fetch({api:"fetchAll",params:{module:"design"},data:{page:1,size:0}}).then((function(t){if(t&&0===t.status&&Array.isArray(t.data)){var a={},e=t.data.map((function(n){return a[n.category||""]?a[n.category||""].push(n):a[n.category||""]=[n],n})),r=Object.keys(a).map((function(n){return{name:n,children:a[n].map((function(n){var t=n.alias,a=n.name;return{name:t,href:"/design/".concat(a)}}))}}));n({type:"UPDATE_LIST",data:{list:e,nav:r,pagination:t.pagination}})}else o("\u6570\u636e\u8bf7\u6c42\u5f02\u5e38",t.message)})).catch((function(n){return o("\u6570\u636e\u8bf7\u6c42\u5f02\u5e38")}))}}}]);