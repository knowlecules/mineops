/* Copyright (C) 9208-9721 Quebec, Inc - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written by Jason Rudland <jason.g.rudland@gmail.com>, September 2022
*/'use strict';const _0x4cf5b4=_0xc455;(function(_0x22c81c,_0x513d99){const _0x5a2949=_0xc455,_0x5c3a1f=_0x22c81c();while(!![]){try{const _0x58d944=-parseInt(_0x5a2949(0x13e))/0x1+parseInt(_0x5a2949(0x146))/0x2*(-parseInt(_0x5a2949(0x136))/0x3)+parseInt(_0x5a2949(0x13a))/0x4+-parseInt(_0x5a2949(0x135))/0x5+parseInt(_0x5a2949(0x13d))/0x6*(-parseInt(_0x5a2949(0x139))/0x7)+parseInt(_0x5a2949(0x134))/0x8*(parseInt(_0x5a2949(0x144))/0x9)+parseInt(_0x5a2949(0x145))/0xa;if(_0x58d944===_0x513d99)break;else _0x5c3a1f['push'](_0x5c3a1f['shift']());}catch(_0x4201d6){_0x5c3a1f['push'](_0x5c3a1f['shift']());}}}(_0x1f78,0xe4b8c));function _0xc455(_0x9af7dd,_0x3c5cfe){const _0x1f784e=_0x1f78();return _0xc455=function(_0xc45586,_0x124915){_0xc45586=_0xc45586-0x133;let _0x36b570=_0x1f784e[_0xc45586];return _0x36b570;},_0xc455(_0x9af7dd,_0x3c5cfe);}function _0x1f78(){const _0x2fe11c=['../config.json','6CFhPvO','69444URugkT','Slacked:\x20','apiKey','exports','postMessage','log','829809HFRCgH','10276010GchcSl','2670784swlBFJ','chat','#miners','152sUuYST','3169780cSuoFI','3NhTDzz','apis','slack','6251231YcCEeA','4356996ObBhjj','info'];_0x1f78=function(){return _0x2fe11c;};return _0x1f78();}const Slack=require(_0x4cf5b4(0x138)),config=require(_0x4cf5b4(0x13c));let isSlackEnabled=![];function slackMessage({text:_0x3c68ed}){const _0x39ccb9=_0x4cf5b4;if(!_0x3c68ed)return;const _0x2a4719=config[_0x39ccb9(0x137)][_0x39ccb9(0x138)][_0x39ccb9(0x140)],_0x1e7d34={'token':_0x2a4719,'text':_0x3c68ed,'channel':_0x39ccb9(0x133)};isSlackEnabled&&Slack[_0x39ccb9(0x147)][_0x39ccb9(0x142)](_0x1e7d34,console[_0x39ccb9(0x143)]),console[_0x39ccb9(0x13b)](_0x39ccb9(0x13f)+_0x3c68ed);}function enableSlack(_0x5cf76d){isSlackEnabled=_0x5cf76d;}module[_0x4cf5b4(0x141)]={'slackMessage':slackMessage,'enableSlack':enableSlack};