/* Copyright (C) 9208-9721 Quebec, Inc - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written by Jason Rudland <jason.g.rudland@gmail.com>, September 2022
*/'use strict';const _0xac192e=_0x89ea;(function(_0x300d22,_0x23a530){const _0x236ae8=_0x89ea,_0x2b8110=_0x300d22();while(!![]){try{const _0x2fee43=-parseInt(_0x236ae8(0x14d))/0x1*(-parseInt(_0x236ae8(0x14e))/0x2)+-parseInt(_0x236ae8(0x14c))/0x3+-parseInt(_0x236ae8(0x151))/0x4+parseInt(_0x236ae8(0x159))/0x5*(-parseInt(_0x236ae8(0x145))/0x6)+-parseInt(_0x236ae8(0x13f))/0x7+-parseInt(_0x236ae8(0x153))/0x8*(parseInt(_0x236ae8(0x156))/0x9)+parseInt(_0x236ae8(0x158))/0xa*(parseInt(_0x236ae8(0x149))/0xb);if(_0x2fee43===_0x23a530)break;else _0x2b8110['push'](_0x2b8110['shift']());}catch(_0x39ff96){_0x2b8110['push'](_0x2b8110['shift']());}}}(_0x51ed,0x85622));const dhcpd=require('dhcp'),iprange=require('iprange'),request=require(_0xac192e(0x155)),iface=require(_0xac192e(0x157));let server=null,ips={};function _0x89ea(_0x1721c1,_0x4191a9){const _0x51ed94=_0x51ed();return _0x89ea=function(_0x89eae5,_0x491c8f){_0x89eae5=_0x89eae5-0x13d;let _0x4dee06=_0x51ed94[_0x89eae5];return _0x4dee06;},_0x89ea(_0x1721c1,_0x4191a9);}function start(_0x31a17f,_0x5f26ee){const _0x3e3041=_0xac192e;if(!_0x5f26ee)return console[_0x3e3041(0x147)](_0x3e3041(0x15b),_0x3e3041(0x13d));const _0x16662d=iface['getLocalInterface'](_0x31a17f[_0x3e3041(0x148)][0x0],_0x31a17f[_0x3e3041(0x148)][0x1]);if(!_0x16662d){console['log']('\x1b[31m%s\x1b[0m',_0x3e3041(0x15a),_0x31a17f),console['log'](_0x3e3041(0x15b),'[dhcpd]\x20service\x20disabled!');return;}return _0x31a17f[_0x3e3041(0x142)]=_0x16662d['address'],_0x31a17f[_0x3e3041(0x150)]=_0x31a17f['router']||_0x16662d[_0x3e3041(0x154)][_0x3e3041(0x14a)](/\.\d+$/,'.1'),_0x31a17f[_0x3e3041(0x15c)]=_0x31a17f[_0x3e3041(0x15c)]||_0x31a17f['range'][0x1]['replace'](/\.\d+$/,'.255'),server=dhcpd['createServer'](_0x31a17f),server['on'](_0x3e3041(0x14f),function(_0x485f20){}),server['on']('bound',function(_0x5bab5f){const _0x3878d7=_0x3e3041;console[_0x3878d7(0x147)](_0x3878d7(0x140)),console[_0x3878d7(0x147)](_0x5bab5f);}),server['on'](_0x3e3041(0x143),function(_0x10d00b,_0x4c3f04){console['log'](_0x10d00b,_0x4c3f04);}),server['on']('listening',function(_0x242389){const _0x2e481f=_0x3e3041;var _0x23a2b6=_0x242389[_0x2e481f(0x154)]();console[_0x2e481f(0x147)](_0x2e481f(0x141),_0x2e481f(0x144)+_0x23a2b6[_0x2e481f(0x154)]+':'+_0x23a2b6['port']);}),server['on'](_0x3e3041(0x13e),function(){}),server[_0x3e3041(0x152)](),process['on'](_0x3e3041(0x14b),()=>{const _0x2e10bc=_0x3e3041;server[_0x2e10bc(0x13e)]();}),server;}function upsertLease(_0x4f55d3,_0x5b100c){const _0x9f40e0=_0xac192e;if(!server)return;server[_0x9f40e0(0x146)]({'ipAddress':_0x5b100c,'mac':_0x4f55d3});}function _0x51ed(){const _0x21c403=['[dhcpd]\x20Network\x20interface\x20not\x20found.\x20Verify\x20the\x20dhcpSettings\x20in\x20the\x20dataCenterSettings.\x20The\x20server\x20ip\x20must\x20fall\x20within\x20the\x20dhcp\x20range!','\x1b[31m%s\x1b[0m','broadcast','[dhcp]\x20service\x20disabled!','close','5541536IInnoC','BOUND:','\x1b[32m%s\x1b[0m','server','error','[dhcpd]\x20UDP\x20server\x20listening\x20to:\x20','487566gfKvHC','allocateIP','log','range','1067OLqeZa','replace','SIGINT','959892YiYXah','119hcBiWj','15014aDfUft','message','router','240868tfaZgn','listen','8ICLnJU','address','request','7936308zVjMRV','./net-interfaces','217830sRXWbV','25oISJrz'];_0x51ed=function(){return _0x21c403;};return _0x51ed();}module['exports']={'start':start,'upsertLease':upsertLease};