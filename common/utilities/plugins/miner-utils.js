/* Copyright (C) 9208-9721 Quebec, Inc - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written by Jason Rudland <jason.g.rudland@gmail.com>, September 2022
*/'use strict';const _0xcac3e9=_0x141d;(function(_0x55852d,_0x216179){const _0x3a2e74=_0x141d,_0x3ff996=_0x55852d();while(!![]){try{const _0x1e1145=parseInt(_0x3a2e74(0xcb))/0x1*(-parseInt(_0x3a2e74(0xc8))/0x2)+-parseInt(_0x3a2e74(0xc1))/0x3*(-parseInt(_0x3a2e74(0xbe))/0x4)+parseInt(_0x3a2e74(0xce))/0x5*(parseInt(_0x3a2e74(0xca))/0x6)+-parseInt(_0x3a2e74(0xd1))/0x7+parseInt(_0x3a2e74(0xcd))/0x8*(-parseInt(_0x3a2e74(0xcc))/0x9)+parseInt(_0x3a2e74(0xbf))/0xa*(-parseInt(_0x3a2e74(0xc9))/0xb)+parseInt(_0x3a2e74(0xb7))/0xc*(parseInt(_0x3a2e74(0xb8))/0xd);if(_0x1e1145===_0x216179)break;else _0x3ff996['push'](_0x3ff996['shift']());}catch(_0x2d445f){_0x3ff996['push'](_0x3ff996['shift']());}}}(_0x1d11,0x38360));const getPlacement=(_0x9b4f25,_0xa072b5)=>{const _0xbda57d=_0x141d;if(!_0x9b4f25)return{};if(_0x9b4f25['placement']&&_0x9b4f25[_0xbda57d(0xc5)]['hall'])return _0x9b4f25['placement'];const {cabinetName:_0x5156bc,placement:placement={},minerNumberFormat:minerNumberFormat=_0xbda57d(0xc0)}=_0xa072b5;let {workerName:_0xd9502a,cabinetName:_0x43a53f}=_0x9b4f25;_0xd9502a=_0xd9502a[_0xbda57d(0xb9)](new RegExp(_0xbda57d(0xd0)+(minerNumberFormat[_0xbda57d(0xc7)]-0x1)+','+minerNumberFormat[_0xbda57d(0xc7)]+_0xbda57d(0xba)),_0xbda57d(0xc4));let _0x3c139b=(new RegExp(minerNumberFormat[_0xbda57d(0xb9)](/R/g,'\x5cd')[_0xbda57d(0xb9)](/((?:\\d)+)/,_0xbda57d(0xc2))[_0xbda57d(0xb9)](/[SP]/g,'\x5cd')+'$')['exec'](_0xd9502a)||[])[0x1];if(!_0x3c139b)return{};_0x3c139b=parseInt(_0x3c139b||0x0);let _0x403d5c=(_0x43a53f||placement[_0xbda57d(0xbb)]||_0x5156bc||'')[_0xbda57d(0xb9)](new RegExp('[\x5c.\x5c-_,;]'+_0x3c139b+'$'),'')[_0xbda57d(0xb9)](/\.\d+\s*$/,''),_0x51f791=(new RegExp(minerNumberFormat[_0xbda57d(0xb9)](/S/g,'\x5cd')[_0xbda57d(0xb9)](/((?:\\d)+)/,_0xbda57d(0xc2))[_0xbda57d(0xb9)](/[RP]/g,'\x5cd')+'$')[_0xbda57d(0xbd)](_0xd9502a)||[])[0x1];_0x51f791=parseInt(_0x51f791||0x0);let _0xd02355=(new RegExp(minerNumberFormat[_0xbda57d(0xb9)](/P/g,'\x5cd')[_0xbda57d(0xb9)](/((?:\\d)+)/,_0xbda57d(0xc2))[_0xbda57d(0xb9)](/[RS]/g,'\x5cd')+'$')[_0xbda57d(0xbd)](_0xd9502a)||[])[0x1];return _0xd02355=parseInt(_0xd02355||0x0),{'hall':_0x403d5c,'rack':_0x3c139b,'shelf':_0x51f791,'position':_0xd02355};};function getWorkerNumber(_0x3e0013,_0x158774,_0x2bf93d){const _0x247ebf=_0x141d,{rack:_0x2f767c,shelf:_0x2b8ae6,position:_0x3e7c6f,hall:_0x13e44a}=_0x3e0013;let _0xcf5cf2;if(_0x158774){const _0x97cb9b=!_0x158774?0x0:(_0x158774['match'](/P/ig)||[])[_0x247ebf(0xc7)],_0xfd2e96=!_0x158774?0x0:(_0x158774[_0x247ebf(0xc6)](/S/ig)||[])['length'],_0x437208=!_0x158774?0x0:(_0x158774[_0x247ebf(0xc6)](/R/ig)||[])['length'];!_0x2f767c?_0xcf5cf2=_0x158774[_0x247ebf(0xb9)](/R+/,''):_0xcf5cf2=_0x158774[_0x247ebf(0xb9)](/R+/,_0x437208<=0x1?_0x2f767c:(_0x247ebf(0xcf)+_0x2f767c)[_0x247ebf(0xbc)](-_0x437208)),_0xcf5cf2=_0xcf5cf2[_0x247ebf(0xb9)](/P+/,_0x97cb9b<=0x1?_0x3e7c6f:(_0x247ebf(0xcf)+_0x3e7c6f)['substr'](-_0x97cb9b)),_0xcf5cf2=_0xcf5cf2[_0x247ebf(0xb9)](/S+/,_0xfd2e96<=0x1?_0x2b8ae6:(_0x247ebf(0xcf)+_0x2b8ae6)[_0x247ebf(0xbc)](-_0xfd2e96));}else _0xcf5cf2=_0x2f767c+_0x2b8ae6+_0x3e7c6f;return _0x2bf93d&&(_0xcf5cf2=_0x13e44a+'_'+_0xcf5cf2),_0xcf5cf2;}module[_0xcac3e9(0xc3)]={'getPlacement':getPlacement,'getWorkerNumber':getWorkerNumber};function _0x141d(_0x3f4295,_0x550b9d){const _0x1d110b=_0x1d11();return _0x141d=function(_0x141d5e,_0x18c55e){_0x141d5e=_0x141d5e-0xb7;let _0x378024=_0x1d110b[_0x141d5e];return _0x378024;},_0x141d(_0x3f4295,_0x550b9d);}function _0x1d11(){const _0x4a13ed=['placement','match','length','4IMISsm','11ExAbVz','12wbydQW','151157JjGCYl','98541tKnEvg','240fOsVku','1108090xGqUMM','00000000','\x5cD(\x5cd{','2022867BQWDnS','8837496kNPCxe','13jVzOEx','replace','}$)','hall','substr','exec','4rZOReV','4510320sQTgRa','RRSSP','1264029cVXPjF','($1)','exports','000$1'];_0x1d11=function(){return _0x4a13ed;};return _0x1d11();}