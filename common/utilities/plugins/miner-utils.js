/* Copyright (C) 9208-9721 Quebec, Inc - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written by Jason Rudland <jason.g.rudland@gmail.com>, September 2022
*/'use strict';function _0x11e9(_0x263956,_0x2cc0da){const _0x12b5e8=_0x12b5();return _0x11e9=function(_0x11e9a6,_0x23e123){_0x11e9a6=_0x11e9a6-0x74;let _0x24e1c3=_0x12b5e8[_0x11e9a6];return _0x24e1c3;},_0x11e9(_0x263956,_0x2cc0da);}(function(_0x5048c3,_0x5b43c2){const _0x28d11f=_0x11e9,_0x11f189=_0x5048c3();while(!![]){try{const _0x44a0a8=parseInt(_0x28d11f(0x82))/0x1*(parseInt(_0x28d11f(0x74))/0x2)+-parseInt(_0x28d11f(0x81))/0x3+-parseInt(_0x28d11f(0x7b))/0x4+parseInt(_0x28d11f(0x80))/0x5+parseInt(_0x28d11f(0x78))/0x6+-parseInt(_0x28d11f(0x7c))/0x7+parseInt(_0x28d11f(0x86))/0x8;if(_0x44a0a8===_0x5b43c2)break;else _0x11f189['push'](_0x11f189['shift']());}catch(_0x4521f9){_0x11f189['push'](_0x11f189['shift']());}}}(_0x12b5,0x8bb83));const getPlacement=(_0x335da5,_0x42bc62)=>{const _0xf318d5=_0x11e9;if(!_0x335da5)return{};if(_0x335da5[_0xf318d5(0x7a)]&&_0x335da5['placement'][_0xf318d5(0x7d)])return _0x335da5[_0xf318d5(0x7a)];const {cabinetName:_0x35d4d5,placement:placement={},minerNumberFormat:minerNumberFormat=_0xf318d5(0x76)}=_0x42bc62;let {workerName:_0x1cc840,cabinetName:_0x1d5fc8}=_0x335da5;_0x1cc840=_0x1cc840[_0xf318d5(0x7f)](new RegExp(_0xf318d5(0x7e)+(minerNumberFormat[_0xf318d5(0x77)]-0x1)+','+minerNumberFormat[_0xf318d5(0x77)]+_0xf318d5(0x75)),_0xf318d5(0x87));let _0x303f71=(new RegExp(minerNumberFormat['replace'](/R/g,'\x5cd')['replace'](/((?:\\d)+)/,_0xf318d5(0x84))[_0xf318d5(0x7f)](/[SP]/g,'\x5cd')+'$')[_0xf318d5(0x89)](_0x1cc840)||[])[0x1];if(!_0x303f71)return{};_0x303f71=parseInt(_0x303f71||0x0);let _0x53858c=(_0x1d5fc8||placement[_0xf318d5(0x7d)]||_0x35d4d5||'')['replace'](new RegExp(_0xf318d5(0x88)+_0x303f71+'$'),'')[_0xf318d5(0x7f)](/\.\d+\s*$/,''),_0x535157=(new RegExp(minerNumberFormat[_0xf318d5(0x7f)](/S/g,'\x5cd')[_0xf318d5(0x7f)](/((?:\\d)+)/,'($1)')[_0xf318d5(0x7f)](/[RP]/g,'\x5cd')+'$')[_0xf318d5(0x89)](_0x1cc840)||[])[0x1];_0x535157=parseInt(_0x535157||0x0);let _0x2fa7cb=(new RegExp(minerNumberFormat[_0xf318d5(0x7f)](/P/g,'\x5cd')[_0xf318d5(0x7f)](/((?:\\d)+)/,'($1)')[_0xf318d5(0x7f)](/[RS]/g,'\x5cd')+'$')['exec'](_0x1cc840)||[])[0x1];return _0x2fa7cb=parseInt(_0x2fa7cb||0x0),{'hall':_0x53858c,'rack':_0x303f71,'shelf':_0x535157,'position':_0x2fa7cb};};function getWorkerNumber(_0xa026e6,_0x2c40ad,_0x4d7d6e){const _0x5ed9c0=_0x11e9,{rack:_0x5edf01,shelf:_0x383cf8,position:_0x226915,hall:_0x4996cc}=_0xa026e6;let _0xad89f0;if(_0x2c40ad){const _0x5282dc=!_0x2c40ad?0x0:(_0x2c40ad[_0x5ed9c0(0x85)](/P/ig)||[])[_0x5ed9c0(0x77)],_0x69da6e=!_0x2c40ad?0x0:(_0x2c40ad[_0x5ed9c0(0x85)](/S/ig)||[])['length'],_0x32a1d8=!_0x2c40ad?0x0:(_0x2c40ad[_0x5ed9c0(0x85)](/R/ig)||[])[_0x5ed9c0(0x77)];!_0x5edf01?_0xad89f0=_0x2c40ad['replace'](/R+/,''):_0xad89f0=_0x2c40ad[_0x5ed9c0(0x7f)](/R+/,_0x32a1d8<=0x1?_0x5edf01:(_0x5ed9c0(0x83)+_0x5edf01)[_0x5ed9c0(0x79)](-_0x32a1d8)),_0xad89f0=_0xad89f0[_0x5ed9c0(0x7f)](/P+/,_0x5282dc<=0x1?_0x226915:(_0x5ed9c0(0x83)+_0x226915)['substr'](-_0x5282dc)),_0xad89f0=_0xad89f0[_0x5ed9c0(0x7f)](/S+/,_0x69da6e<=0x1?_0x383cf8:('00000000'+_0x383cf8)['substr'](-_0x69da6e));}else _0xad89f0=_0x5edf01+_0x383cf8+_0x226915;return _0x4d7d6e&&(_0xad89f0=_0x4996cc+'_'+_0xad89f0),_0xad89f0;}module['exports']={'getPlacement':getPlacement,'getWorkerNumber':getWorkerNumber};function _0x12b5(){const _0x3ce77b=['placement','4241404OHJjcs','1987594VkgPxL','hall','\x5cD(\x5cd{','replace','3104185MIzuBI','2607537BeESWb','5bKmtqQ','00000000','($1)','match','9381080YaQmkB','000$1','[\x5c.\x5c-_,;]','exec','69284MUGiQL','}$)','RRSSP','length','4914486IqzieP','substr'];_0x12b5=function(){return _0x3ce77b;};return _0x12b5();}