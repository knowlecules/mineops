/* Copyright (C) 9208-9721 Quebec, Inc - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written by Jason Rudland <jason.g.rudland@gmail.com>, September 2022
*/'use strict';const _0x5a2276=_0x18e6;(function(_0xe8f8e3,_0x2b10a6){const _0x10fd38=_0x18e6,_0x1caa6f=_0xe8f8e3();while(!![]){try{const _0x316a45=-parseInt(_0x10fd38(0xee))/0x1*(-parseInt(_0x10fd38(0xe8))/0x2)+-parseInt(_0x10fd38(0x100))/0x3*(parseInt(_0x10fd38(0xf4))/0x4)+-parseInt(_0x10fd38(0xfd))/0x5*(parseInt(_0x10fd38(0xf1))/0x6)+parseInt(_0x10fd38(0xe4))/0x7+-parseInt(_0x10fd38(0xf3))/0x8+parseInt(_0x10fd38(0xf8))/0x9+parseInt(_0x10fd38(0xfe))/0xa;if(_0x316a45===_0x2b10a6)break;else _0x1caa6f['push'](_0x1caa6f['shift']());}catch(_0x2561db){_0x1caa6f['push'](_0x1caa6f['shift']());}}}(_0x1311,0x76134));const wwwAuthenticate=require(_0x5a2276(0xf5)),http=require(_0x5a2276(0xfb)),util=require(_0x5a2276(0xf6));async function authRequest(_0x243311,_0x49c345,_0x88c1df,_0x2087c5){const _0x25c9b8=_0x5a2276,_0x278274=getAuthRequestOptions(_0x243311,_0x88c1df,_0x2087c5);_0x49c345[_0x25c9b8(0xfa)]&&(_0x278274[_0x25c9b8(0xfa)]=Buffer[_0x25c9b8(0xff)](_0x49c345[_0x25c9b8(0xfa)]));console[_0x25c9b8(0xf9)](global['colorize']['Yellow'],_0x25c9b8(0xec)+_0x88c1df+'\x20'+_0x2087c5,util[_0x25c9b8(0xf0)](_0x278274));const _0x4fcd9e=await request({..._0x278274});return _0x4fcd9e;}function request(_0x1ca79d){return new Promise((_0x267717,_0x42b3c8)=>{const _0x10f70c=_0x18e6,_0x26a12e=http[_0x10f70c(0xef)](_0x1ca79d,_0x4f47c6=>{const _0x320da0=_0x10f70c;if(/^(2|3)\d\d/[_0x320da0(0xf2)](_0x4f47c6[_0x320da0(0xe7)]))return _0x267717(_0x4f47c6);return _0x42b3c8(_0x4f47c6);});_0x26a12e['on']('error',_0x3000b1=>{const _0x5218bd=_0x10f70c;return console['error'](_0x5218bd(0xfc),_0x3000b1),_0x42b3c8(_0x3000b1);}),_0x26a12e['end']();});}function getAuthRequestOptions(_0x1e7328,_0x1bd8a7,_0x3b5d7c){const _0x1d9ff1=_0x5a2276,{path:_0x33710d,method:_0x30ee0d,_headers:_0xc396f7}=_0x1e7328[_0x1d9ff1(0xe3)];let _0x1dd503={'port':_0x1e7328[_0x1d9ff1(0xe3)][_0x1d9ff1(0xeb)]['remotePort'],'host':_0xc396f7['host'],'method':_0x30ee0d,'path':_0x33710d,'headers':_0xc396f7};var _0x7b80f5=wwwAuthenticate[_0x1d9ff1(0xed)](_0x1bd8a7,_0x3b5d7c);_0x7b80f5[_0x1d9ff1(0xe6)](_0x1e7328),_0x7b80f5[_0x1d9ff1(0xe5)](_0x1dd503);if(_0x7b80f5[_0x1d9ff1(0xea)])return console[_0x1d9ff1(0xe9)](_0x1d9ff1(0xf7),_0x7b80f5[_0x1d9ff1(0xea)]),_0x7b80f5[_0x1d9ff1(0xea)];return _0x1dd503;}function _0x18e6(_0x296b99,_0x5eeb6b){const _0x1311ba=_0x1311();return _0x18e6=function(_0x18e697,_0x48cde6){_0x18e697=_0x18e697-0xe3;let _0x3ff6ad=_0x1311ba[_0x18e697];return _0x3ff6ad;},_0x18e6(_0x296b99,_0x5eeb6b);}module['exports']={'authRequest':authRequest};function _0x1311(){const _0x1393f6=['inspect','399078MNvGmk','test','4652072WraSqF','54844jmIXUC','www-authenticate','util','Authentication\x20error:','4349961LsdomE','debug','body','http','Promise\x20request\x20error','25jqygCv','1136060nDhbpO','from','3vhHhKi','req','589526erYclo','authenticate_request_options','get_challenge','statusCode','44TiHOvb','error','err','connection','Auth\x20options\x20','authenticator','33194ZCuoeu','request'];_0x1311=function(){return _0x1393f6;};return _0x1311();}