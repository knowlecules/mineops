/* Copyright (C) 9208-9721 Quebec, Inc - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written by Jason Rudland <jason.g.rudland@gmail.com>, September 2022
*/'use strict';const _0x3b72fa=_0x3f0c;function _0x3f0c(_0x872659,_0x599cc5){const _0x1a2ea7=_0x1a2e();return _0x3f0c=function(_0x3f0c32,_0x10f0d9){_0x3f0c32=_0x3f0c32-0x1d1;let _0x2fea72=_0x1a2ea7[_0x3f0c32];return _0x2fea72;},_0x3f0c(_0x872659,_0x599cc5);}(function(_0x3367e3,_0x46ff4b){const _0x28d219=_0x3f0c,_0x530e6f=_0x3367e3();while(!![]){try{const _0x966042=parseInt(_0x28d219(0x1e5))/0x1+-parseInt(_0x28d219(0x1db))/0x2*(-parseInt(_0x28d219(0x1df))/0x3)+parseInt(_0x28d219(0x1de))/0x4+parseInt(_0x28d219(0x1e2))/0x5*(parseInt(_0x28d219(0x1e7))/0x6)+-parseInt(_0x28d219(0x1e3))/0x7+-parseInt(_0x28d219(0x1d1))/0x8*(-parseInt(_0x28d219(0x1d3))/0x9)+-parseInt(_0x28d219(0x1d2))/0xa;if(_0x966042===_0x46ff4b)break;else _0x530e6f['push'](_0x530e6f['shift']());}catch(_0x11caa2){_0x530e6f['push'](_0x530e6f['shift']());}}}(_0x1a2e,0x7d94b));const getPlacement=(_0xaacd34,_0x5d4f48)=>{const _0x40a6aa=_0x3f0c;if(!_0xaacd34)return{};if(_0xaacd34[_0x40a6aa(0x1d7)]&&_0xaacd34[_0x40a6aa(0x1d7)][_0x40a6aa(0x1d9)])return _0xaacd34[_0x40a6aa(0x1d7)];const {cabinetName:_0xe706c2,placement:placement={},minerNumberFormat:minerNumberFormat='RRSSP'}=_0x5d4f48;let {workerName:_0x3b7c38,cabinetName:_0x2b9d18}=_0xaacd34;_0x3b7c38=_0x3b7c38[_0x40a6aa(0x1d6)](new RegExp('\x5cD(\x5cd{'+(minerNumberFormat[_0x40a6aa(0x1e4)]-0x1)+','+minerNumberFormat[_0x40a6aa(0x1e4)]+_0x40a6aa(0x1e1)),_0x40a6aa(0x1da));let _0x22c66b=(new RegExp(minerNumberFormat[_0x40a6aa(0x1d6)](/R/g,'\x5cd')['replace'](/((?:\\d)+)/,_0x40a6aa(0x1d5))[_0x40a6aa(0x1d6)](/[SP]/g,'\x5cd')+'$')[_0x40a6aa(0x1d4)](_0x3b7c38)||[])[0x1];if(!_0x22c66b)return{};_0x22c66b=parseInt(_0x22c66b||0x0);let _0x416cd0=(_0x2b9d18||placement[_0x40a6aa(0x1d9)]||_0xe706c2||'')[_0x40a6aa(0x1d6)](new RegExp(_0x40a6aa(0x1e6)+_0x22c66b+'$'),'')[_0x40a6aa(0x1d6)](/\.\d+\s*$/,''),_0x2ce5be=(new RegExp(minerNumberFormat[_0x40a6aa(0x1d6)](/S/g,'\x5cd')[_0x40a6aa(0x1d6)](/((?:\\d)+)/,_0x40a6aa(0x1d5))[_0x40a6aa(0x1d6)](/[RP]/g,'\x5cd')+'$')[_0x40a6aa(0x1d4)](_0x3b7c38)||[])[0x1];_0x2ce5be=parseInt(_0x2ce5be||0x0);let _0x1e6d2a=(new RegExp(minerNumberFormat['replace'](/P/g,'\x5cd')['replace'](/((?:\\d)+)/,_0x40a6aa(0x1d5))[_0x40a6aa(0x1d6)](/[RS]/g,'\x5cd')+'$')[_0x40a6aa(0x1d4)](_0x3b7c38)||[])[0x1];return _0x1e6d2a=parseInt(_0x1e6d2a||0x0),{'hall':_0x416cd0,'rack':_0x22c66b,'shelf':_0x2ce5be,'position':_0x1e6d2a};};function getWorkerNumber(_0x57a8cc,_0x41bd14,_0x49b8e1){const _0x1cbbb0=_0x3f0c,{rack:_0x1558fb,shelf:_0x3889eb,position:_0x19c1e1,hall:_0x1b704d}=_0x57a8cc;let _0x61c007;if(_0x41bd14){const _0x298e9e=!_0x41bd14?0x0:(_0x41bd14['match'](/P/ig)||[])[_0x1cbbb0(0x1e4)],_0xfda208=!_0x41bd14?0x0:(_0x41bd14[_0x1cbbb0(0x1dc)](/S/ig)||[])[_0x1cbbb0(0x1e4)],_0x5b6034=!_0x41bd14?0x0:(_0x41bd14[_0x1cbbb0(0x1dc)](/R/ig)||[])[_0x1cbbb0(0x1e4)];!_0x1558fb?_0x61c007=_0x41bd14[_0x1cbbb0(0x1d6)](/R+/,''):_0x61c007=_0x41bd14['replace'](/R+/,_0x5b6034<=0x1?_0x1558fb:(_0x1cbbb0(0x1e0)+_0x1558fb)[_0x1cbbb0(0x1d8)](-_0x5b6034)),_0x61c007=_0x61c007[_0x1cbbb0(0x1d6)](/P+/,_0x298e9e<=0x1?_0x19c1e1:(_0x1cbbb0(0x1e0)+_0x19c1e1)[_0x1cbbb0(0x1d8)](-_0x298e9e)),_0x61c007=_0x61c007['replace'](/S+/,_0xfda208<=0x1?_0x3889eb:(_0x1cbbb0(0x1e0)+_0x3889eb)[_0x1cbbb0(0x1d8)](-_0xfda208));}else _0x61c007=_0x1558fb+_0x3889eb+_0x19c1e1;return _0x49b8e1&&(_0x61c007=_0x1b704d+'_'+_0x61c007),_0x61c007;}function _0x1a2e(){const _0x10d313=['3870544UIitPz','29425030oDFLvH','18CYuWGz','exec','($1)','replace','placement','substr','hall','000$1','14OInKUV','match','exports','3827132ixRQWA','343113ObBWTg','00000000','}$)','14455ANqmrI','1893318qMKAfi','length','849117elcMlE','[\x5c.\x5c-_,;]','318EMxoHO'];_0x1a2e=function(){return _0x10d313;};return _0x1a2e();}module[_0x3b72fa(0x1dd)]={'getPlacement':getPlacement,'getWorkerNumber':getWorkerNumber};