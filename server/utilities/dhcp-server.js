/* Copyright (C) 9208-9721 Quebec, Inc - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written by Jason Rudland <jason.g.rudland@gmail.com>, September 2022
*/'use strict';const _0x37620c=_0x178c;(function(_0x3f5cf,_0x13e6f8){const _0x1b063a=_0x178c,_0x31ba1f=_0x3f5cf();while(!![]){try{const _0x3856ce=parseInt(_0x1b063a(0x1cd))/0x1+parseInt(_0x1b063a(0x1e8))/0x2*(parseInt(_0x1b063a(0x1da))/0x3)+parseInt(_0x1b063a(0x1d2))/0x4*(parseInt(_0x1b063a(0x1dc))/0x5)+parseInt(_0x1b063a(0x1e0))/0x6+parseInt(_0x1b063a(0x1d8))/0x7+-parseInt(_0x1b063a(0x1df))/0x8*(parseInt(_0x1b063a(0x1e4))/0x9)+-parseInt(_0x1b063a(0x1f1))/0xa*(parseInt(_0x1b063a(0x1e5))/0xb);if(_0x3856ce===_0x13e6f8)break;else _0x31ba1f['push'](_0x31ba1f['shift']());}catch(_0x1d16d4){_0x31ba1f['push'](_0x31ba1f['shift']());}}}(_0x3ef1,0xb979e));const dhcpd=require(_0x37620c(0x1ed)),iprange=require(_0x37620c(0x1ef)),request=require(_0x37620c(0x1d3)),iface=require('./net-interfaces');let server=null,ips={};function start(_0x439eb6,_0x3c9a1d){const _0x6fd376=_0x37620c;if(!_0x3c9a1d)return console[_0x6fd376(0x1d7)](_0x6fd376(0x1ee),_0x6fd376(0x1e9));const _0x4884a6=iface[_0x6fd376(0x1de)](_0x439eb6[_0x6fd376(0x1e3)][0x0],_0x439eb6['range'][0x1]);if(!_0x4884a6){console['log'](_0x6fd376(0x1ee),_0x6fd376(0x1cf),_0x439eb6),console[_0x6fd376(0x1d7)](_0x6fd376(0x1ee),_0x6fd376(0x1f0));return;}return _0x439eb6[_0x6fd376(0x1ce)]=_0x4884a6[_0x6fd376(0x1d4)],_0x439eb6[_0x6fd376(0x1d9)]=_0x439eb6[_0x6fd376(0x1d9)]||_0x4884a6['address'][_0x6fd376(0x1db)](/\.\d+$/,'.1'),_0x439eb6[_0x6fd376(0x1d0)]=_0x439eb6[_0x6fd376(0x1d0)]||_0x439eb6[_0x6fd376(0x1e3)][0x1][_0x6fd376(0x1db)](/\.\d+$/,_0x6fd376(0x1f2)),server=dhcpd['createServer'](_0x439eb6),server['on'](_0x6fd376(0x1d5),function(_0x4d6c60){}),server['on'](_0x6fd376(0x1ea),function(_0x36ddc7){const _0x529191=_0x6fd376;console[_0x529191(0x1d7)](_0x529191(0x1e1)),console['log'](_0x36ddc7);}),server['on'](_0x6fd376(0x1dd),function(_0x105311,_0x53fd4c){const _0x326c9f=_0x6fd376;console[_0x326c9f(0x1d7)](_0x105311,_0x53fd4c);}),server['on'](_0x6fd376(0x1e7),function(_0x19efa8){const _0x53b319=_0x6fd376;var _0x180c0a=_0x19efa8['address']();console[_0x53b319(0x1d7)](_0x53b319(0x1d6),_0x53b319(0x1ec)+_0x180c0a['address']+':'+_0x180c0a[_0x53b319(0x1eb)]);}),server['on'](_0x6fd376(0x1e6),function(){}),server['listen'](),process['on'](_0x6fd376(0x1f3),()=>{const _0x33f92e=_0x6fd376;server[_0x33f92e(0x1e6)]();}),server;}function _0x178c(_0x38fc5c,_0x1d4db2){const _0x3ef139=_0x3ef1();return _0x178c=function(_0x178c49,_0x3263a9){_0x178c49=_0x178c49-0x1cd;let _0x140fc2=_0x3ef139[_0x178c49];return _0x140fc2;},_0x178c(_0x38fc5c,_0x1d4db2);}function _0x3ef1(){const _0x27b8aa=['listening','398UoxQzH','[dhcp]\x20service\x20disabled!','bound','port','[dhcpd]\x20UDP\x20server\x20listening\x20to:\x20','dhcp','\x1b[31m%s\x1b[0m','iprange','[dhcpd]\x20service\x20disabled!','4610LXAGcJ','.255','SIGINT','555926UIMTKB','server','[dhcpd]\x20Network\x20interface\x20not\x20found.\x20Verify\x20the\x20dhcpSettings\x20in\x20the\x20dataCenterSettings.\x20The\x20server\x20ip\x20must\x20fall\x20within\x20the\x20dhcp\x20range!','broadcast','exports','4bgSBUc','request','address','message','\x1b[32m%s\x1b[0m','log','4167212XHlWsh','router','22881fQAqMG','replace','2734790soZjdN','error','getLocalInterface','8NrmINa','290886hVXgCn','BOUND:','allocateIP','range','11244969FGDYjo','29953YIpTKl','close'];_0x3ef1=function(){return _0x27b8aa;};return _0x3ef1();}function upsertLease(_0x798506,_0x256528){const _0x399f45=_0x37620c;if(!server)return;server[_0x399f45(0x1e2)]({'ipAddress':_0x256528,'mac':_0x798506});}module[_0x37620c(0x1d1)]={'start':start,'upsertLease':upsertLease};