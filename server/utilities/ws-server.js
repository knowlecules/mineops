/* Copyright (C) 9208-9721 Quebec, Inc - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written by Jason Rudland <jason.g.rudland@gmail.com>, September 2022
*/'use strict';const _0x2fb418=_0x58eb;(function(_0x48b85d,_0x593182){const _0x19d915=_0x58eb,_0x3f7b46=_0x48b85d();while(!![]){try{const _0x4b31ab=-parseInt(_0x19d915(0x10c))/0x1+-parseInt(_0x19d915(0x10d))/0x2+parseInt(_0x19d915(0x116))/0x3*(parseInt(_0x19d915(0xfb))/0x4)+parseInt(_0x19d915(0x100))/0x5+-parseInt(_0x19d915(0x10f))/0x6*(parseInt(_0x19d915(0xf9))/0x7)+parseInt(_0x19d915(0x102))/0x8*(-parseInt(_0x19d915(0x101))/0x9)+parseInt(_0x19d915(0xfa))/0xa;if(_0x4b31ab===_0x593182)break;else _0x3f7b46['push'](_0x3f7b46['shift']());}catch(_0x30a0a2){_0x3f7b46['push'](_0x3f7b46['shift']());}}}(_0x1ca3,0x7eef4));const express=require(_0x2fb418(0x107)),http=require(_0x2fb418(0x10e)),url=require(_0x2fb418(0x115)),WebSocket=require('ws'),config=require(_0x2fb418(0x112)),svrConfig=require(_0x2fb418(0x104));let sockets={};function _0x1ca3(){const _0x50b03c=['564592sQMDON','\x1b[32m%s\x1b[0m','../config.json','keys','port','express','address','[web-sockets]\x20server\x20listening\x20','Server','log','218659FgmvCk','437488zwwxTZ','http','318aepeqd','hello','use','../../common/config.json','send','readyState','url','3MnmLKa','query','32445AdMTrc','1940780DGEiIG','627764LDdupc','MineOps\x20sockets\x20connected.','exports','OPEN','[web-sockets]\x20connected\x20to\x20session:\x20','4965555Onitev','18rVbuML'];_0x1ca3=function(){return _0x50b03c;};return _0x1ca3();}function start(){const _0x108e05=_0x2fb418,_0x3dd672=express();_0x3dd672[_0x108e05(0x111)](function(_0x165970,_0x246ad9){const _0x23df66=_0x108e05;_0x246ad9[_0x23df66(0x113)]({'msg':_0x23df66(0x110)});});const _0x47e3ec=http['createServer'](_0x3dd672),_0x1f341e=new WebSocket[(_0x108e05(0x10a))]({'server':_0x47e3ec});_0x1f341e['on']('connection',function _0x122e6b(_0x5e3f00,_0x3420aa){const _0x578f7b=_0x108e05,_0x367a5c=url['parse'](_0x3420aa[_0x578f7b(0x115)],!![]),_0x456ac0=_0x367a5c[_0x578f7b(0xf8)]['access_token'];sockets[_0x456ac0]=_0x5e3f00,socketSend({'text':_0x578f7b(0xfc),'accessToken':_0x456ac0}),console[_0x578f7b(0x10b)](_0x578f7b(0xff)+_0x456ac0);}),_0x47e3ec['listen'](config['socketPort'],function _0x33a4a0(){const _0x5f2e4f=_0x108e05,_0x41c62f=_0x47e3ec[_0x5f2e4f(0x108)]();console['log'](_0x5f2e4f(0x103),_0x5f2e4f(0x109)+_0x41c62f[_0x5f2e4f(0x108)]+':'+_0x41c62f[_0x5f2e4f(0x106)]);});}function _0x58eb(_0x3182e0,_0x26907b){const _0x1ca3d2=_0x1ca3();return _0x58eb=function(_0x58ebf7,_0x339f8b){_0x58ebf7=_0x58ebf7-0xf8;let _0x4f790a=_0x1ca3d2[_0x58ebf7];return _0x4f790a;},_0x58eb(_0x3182e0,_0x26907b);}function socketSend({text:_0x287c09,accessToken:_0x4db3b4}){const _0x3ee938=_0x2fb418;function _0x3cc041(_0x19b4c5,_0x1f6030){const _0x278e65=_0x58eb;sockets[_0x1f6030][_0x278e65(0x114)]===WebSocket[_0x278e65(0xfe)]?sockets[_0x1f6030]['send'](_0x19b4c5):delete sockets[_0x1f6030];}_0x4db3b4?_0x3cc041(_0x287c09,_0x4db3b4):Object[_0x3ee938(0x105)](sockets)['forEach'](_0x2d5161=>{_0x3cc041(_0x287c09,_0x2d5161);});}module[_0x2fb418(0xfd)]={'socketSend':socketSend,'start':start};