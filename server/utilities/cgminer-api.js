/* Copyright (C) 9208-9721 Quebec, Inc - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written by Jason Rudland <jason.g.rudland@gmail.com>, September 2022
*/'use strict';const _0xae1e79=_0x5ea3;(function(_0x179f99,_0x493e3c){const _0x5d81b3=_0x5ea3,_0x3a3ab4=_0x179f99();while(!![]){try{const _0x22ca00=-parseInt(_0x5d81b3(0x1d8))/0x1*(-parseInt(_0x5d81b3(0x1f3))/0x2)+-parseInt(_0x5d81b3(0x1be))/0x3*(parseInt(_0x5d81b3(0x1f7))/0x4)+-parseInt(_0x5d81b3(0x1f2))/0x5*(parseInt(_0x5d81b3(0x1c4))/0x6)+-parseInt(_0x5d81b3(0x1d7))/0x7+parseInt(_0x5d81b3(0x1e7))/0x8+-parseInt(_0x5d81b3(0x203))/0x9*(parseInt(_0x5d81b3(0x1f8))/0xa)+parseInt(_0x5d81b3(0x1f4))/0xb;if(_0x22ca00===_0x493e3c)break;else _0x3a3ab4['push'](_0x3a3ab4['shift']());}catch(_0x3ae362){_0x3a3ab4['push'](_0x3a3ab4['shift']());}}}(_0x4f91,0x79fe8));const net=require(_0xae1e79(0x1d0)),{inspect}=require(_0xae1e79(0x1c7)),cgminerPort=0xfbc,CONN_TIMEOUT=0xbb8,SOCK_TIMEOUT=0xfa0,MSG_TIMEOUT=0x1f40,label=_0xae1e79(0x1ed),commandAlwaysArray={'pools':!![],'devs':!![],'edevs':!![],'procs':!![],'notify':!![],'devdetails':!![],'stats':!![],'estats':!![]};function _0x5ea3(_0x416714,_0x45933c){const _0x4f916d=_0x4f91();return _0x5ea3=function(_0x5ea337,_0x14dc43){_0x5ea337=_0x5ea337-0x1b5;let _0x1aa4d7=_0x4f916d[_0x5ea337];return _0x1aa4d7;},_0x5ea3(_0x416714,_0x45933c);}function MinerRPCClient(_0x4395d6,_0x387951){const _0xbc0159=_0xae1e79;let _0xe9390b=this;_0xe9390b[_0xbc0159(0x1cc)]=_0x4395d6||_0xbc0159(0x1dd),_0xe9390b[_0xbc0159(0x1f1)]=_0x387951||cgminerPort;}MinerRPCClient['prototype']['get']=function(_0x34b640,_0x200992,_0x4a4b27){const _0x2741c1=_0xae1e79;let _0x150aeb=this;if(/\+/[_0x2741c1(0x1e3)](_0x34b640))return _0x4a4b27(new Error(_0x2741c1(0x1d5)));typeof _0x200992==_0x2741c1(0x1da)&&(_0x4a4b27=_0x200992,_0x200992=undefined);let _0x47128c='',_0x3a852d=![],_0x3f2caa={'command':_0x34b640},_0x14f1aa=net['connect']({'host':_0x150aeb[_0x2741c1(0x1cc)],'port':_0x150aeb[_0x2741c1(0x1f1)]});_0x150aeb[_0x2741c1(0x1e2)]=_0x14f1aa,_0x14f1aa[_0x2741c1(0x1f5)](SOCK_TIMEOUT);const _0x3c101f={'label':label,'ipAddress':_0x150aeb['host']};console[_0x2741c1(0x20a)](_0x3c101f,_0x2741c1(0x1ca)+_0x34b640+',\x20'+(_0x200992||'')+'\x20for\x20'+_0x150aeb['host']+_0x2741c1(0x1ff)+SOCK_TIMEOUT);function _0x44ab81(_0x478757,_0x517cc5){return setTimeout(()=>{const _0x250ac0=_0x5ea3;console['warn'](_0x3c101f,'Timing\x20out\x20CGMiner\x20connection\x20'+_0x34b640+',\x20'+(_0x200992||'')+'\x20for\x20'+_0x150aeb['host']+_0x250ac0(0x205)+_0x517cc5),_0x43088e(_0x250ac0(0x1bf)+_0x517cc5+'!');},_0x478757);}var _0x1dff36=_0x44ab81(CONN_TIMEOUT,_0x2741c1(0x1e0)),_0x3510cc=null;typeof _0x200992!=_0x2741c1(0x1e8)&&(_0x3f2caa[_0x2741c1(0x1ea)]=_0x200992);function _0x43088e(_0x2f033a){const _0x4bf707=_0x2741c1;clearTimeout(_0x3510cc);var _0x11c093=new Error(_0x2f033a);return _0x11c093['cmd']=_0x34b640,_0x11c093[_0x4bf707(0x202)]=_0x200992,_0x11c093[_0x4bf707(0x1c9)]=_0x47128c,_0x4a4b27(_0x11c093),_0x4a4b27=()=>{};}function _0x1f0e39(_0x5748a7){_0x43088e('Error\x20while\x20connecting\x20to\x20miner:\x20'+_0x5748a7['message']);}_0x14f1aa['on'](_0x2741c1(0x1b5),_0x1f0e39),_0x14f1aa['on'](_0x2741c1(0x1cb),function(){const _0x14bd9e=_0x2741c1;console[_0x14bd9e(0x20a)](_0x3c101f,_0x14bd9e(0x1f9)+_0x34b640+',\x20'+(_0x200992||'')+_0x14bd9e(0x201)+_0x150aeb['host']),clearTimeout(_0x1dff36),_0x14f1aa[_0x14bd9e(0x1fe)](JSON[_0x14bd9e(0x1fa)](_0x3f2caa)),_0x3a852d=!![],_0x3510cc=_0x44ab81(MSG_TIMEOUT,_0x14bd9e(0x1ce));}),_0x14f1aa['on']('data',function(_0x3d7ba8){const _0x4ab0a5=_0x2741c1;console[_0x4ab0a5(0x20a)](_0x3c101f,_0x4ab0a5(0x1f6)+_0x34b640+',\x20'+(_0x200992||'')+'\x20for\x20'+_0x150aeb[_0x4ab0a5(0x1cc)]),clearTimeout(_0x3510cc),_0x47128c+=_0x3d7ba8['toString']();}),_0x14f1aa['on']('end',function(){const _0x5a563c=_0x2741c1;if(!_0x3a852d)return _0x43088e('Failed\x20to\x20connect\x20to\x20miner.');let _0x1247bd='';try{_0x1247bd=_0x47128c['replace'](/[\x00\n\u0000]/g,'')[_0x5a563c(0x1c5)](/^[^{]*{/g,'{')[_0x5a563c(0x1c5)](/}[^}]*$/g,'}')[_0x5a563c(0x1c5)](/\s*:\s*/g,':')['replace'](/":([^0-9\[{"ft][^,]*)\s*/,_0x5a563c(0x1c6))[_0x5a563c(0x1c5)](/"\s*}\s*{\s*"/,'\x22},{\x22'),_0x47128c=JSON[_0x5a563c(0x1fc)](_0x1247bd);}catch(_0x2de936){return console[_0x5a563c(0x1e9)](_0x5a563c(0x1d6),_0x1247bd),_0x43088e('Bad\x20JSON\x20response\x20from\x20miner:\x20'+_0x2de936['message']);}var _0x347838=_0x47128c[_0x5a563c(0x1cf)];if(_0x347838&&_0x347838[_0x5a563c(0x1c1)]==0x1)_0x347838=_0x347838[0x0];else{if(!/restart/[_0x5a563c(0x1e3)](_0x347838))return _0x43088e(_0x5a563c(0x1de)+_0x347838+_0x5a563c(0x1e5)+inspect(_0x47128c,![],0x5,!![]));}if(_0x347838[_0x5a563c(0x1cf)]=='E'||_0x347838[_0x5a563c(0x1cf)]=='F')return _0x43088e(_0x5a563c(0x1c8)+_0x347838[_0x5a563c(0x1d9)]+'.\x20'+inspect(_0x47128c,![],0x5,!![]));clearTimeout(_0x3510cc);var _0x5c661e=null;Object[_0x5a563c(0x1b7)](_0x47128c)[_0x5a563c(0x1d4)](function(_0xaf335e){const _0x13c9e6=_0x5a563c;_0xaf335e!=_0x13c9e6(0x1cf)&&_0xaf335e!='id'&&(_0x5c661e=_0xaf335e);});var _0x591cdf=_0x47128c[_0x5c661e];_0x591cdf?_0x591cdf['length']==0x1&&!commandAlwaysArray[_0x34b640]&&(_0x591cdf=_0x591cdf[0x0]):_0x591cdf=_0x347838,console['debug'](_0x3c101f,_0x5a563c(0x1cd)+_0x34b640+',\x20'+(_0x200992||'')+_0x5a563c(0x201)+_0x150aeb[_0x5a563c(0x1cc)]),_0x4a4b27(null,_0x591cdf,_0x47128c);});},MinerRPCClient[_0xae1e79(0x1ec)][_0xae1e79(0x1c0)]=function(_0x287e37){const _0x495517=_0xae1e79;let _0x205512=this;_0x205512[_0x495517(0x1e2)]&&_0x205512[_0x495517(0x1e2)][_0x495517(0x1c0)]();};function createClient(_0x58e4e3,_0xe71083){return new MinerRPCClient(_0x58e4e3,_0xe71083);};function getCommandFromCache(_0x4bb985,_0x183e63){const _0x1098e8=_0xae1e79,_0x40e692=_0x4bb985+_0x183e63,_0x5bf394=Date['now']();return cache?.[_0x40e692]?.[_0x1098e8(0x1c3)]<_0x5bf394-cacheMillis&&(cache[_0x40e692]=''),cache[_0x40e692];}function _0x4f91(){const _0x2ad493=['\x22:\x22$1\x22','util','Miner\x20error:\x20\x20','response','Invoking\x20CGMiner\x20command\x20','connect','host','Response\x20sent\x20on\x20for\x20CGMiner\x20command\x20','post\x20connect','STATUS','net','toLowerCase','exports','Innosilicon','forEach','Sending\x20multiple\x20commands\x20to\x20miners\x20is\x20not\x20supported.','Bad\x20JSON\x20response\x20from\x20miner:\x20','1897301GIouAv','43687nqmTUU','Msg','function','get','cgminer\x20','localhost','Invalid\x20STATUS\x20','data','connection','$1:','rpcClient','test','XX:','\x20in\x20response\x20from\x20miner.\x20','split','6923232YFCBZx','undefined','warn','parameter','map','prototype','cgminer-api','catch',':$1','[scan]\x20miner\x20found\x20at\x20','port','33055oYLpkd','16fbjbCR','10443356IrGAQF','setTimeout','Response\x20received\x20for\x20CGMiner\x20command\x20','214600yiaqEN','4310oHpStY','Connect\x20for\x20CGMiner\x20command\x20','stringify','toUpperCase','parse','summary','write','.\x20Socket\x20timeout\x20is\x20','AvalonMiner','\x20for\x20','params','8037FGhgyA','Whatsminer',',\x20During\x20','match','Firmware\x20Version','trim','RPC\x20\x22version\x22\x20command\x20failed\x20for\x20','debug','error','MAC','keys','stats','bmminer\x20','join','[scan]\x20miner\x20does\x20not\x20have\x20a\x20\x22version\x22\x20cgminer\x20command:','substr','info','15prMmhm','Forced\x20connection\x20timeout\x20during\x20','destroy','length','Type','timestamp','672zJrfSj','replace'];_0x4f91=function(){return _0x2ad493;};return _0x4f91();};const cacheMillis=0xc8*0x3e8,cache={};function saveCommandToCache(_0x3d93a6,_0xdfeec,_0x1f9294){const _0x3ed843=_0x3d93a6+_0xdfeec;cache[_0x3ed843]={'timestamp':Date['now'](),'data':_0x1f9294};};let clients={};async function sendCommand(_0x518da1,_0x21109e,_0x46d36a=undefined){const _0x316b03=_0xae1e79;if(cacheMillis){const _0x4649d8=getCommandFromCache(_0x518da1,_0x21109e);if(_0x4649d8)return _0x4649d8[_0x316b03(0x1df)];}const _0x4cc97e=await new Promise((_0x1d5694,_0x4a30e8)=>{const _0x5a62cc=_0x316b03,_0x8287a7=createClient(_0x518da1,cgminerPort);_0x8287a7[_0x5a62cc(0x1db)](_0x21109e,_0x46d36a,function(_0x2f3d19,_0x50f820,_0x331edb){_0x8287a7['destroy'](_0x264e3a=>{if(_0x264e3a)return _0x4a30e8(_0x264e3a);});if(_0x2f3d19)return _0x4a30e8(_0x2f3d19);_0x1d5694(_0x50f820);});});return cacheMillis&&saveCommandToCache(_0x518da1,_0x21109e,_0x4cc97e),_0x4cc97e;}async function getVersionInfo(_0xbf7d4c,_0x2343dd){const _0x46a56b=_0xae1e79;let _0x3f570f=await sendCommand(_0xbf7d4c,'version')[_0x46a56b(0x1ee)](_0x449e2f=>{const _0x22d10f=_0x46a56b;return console['warn'](_0x22d10f(0x209)+_0xbf7d4c+'\x20['+_0x2343dd+']',_0x449e2f),![];});if(!_0x3f570f)return'';else{if(_0x3f570f[_0x46a56b(0x1bc)]&&/^\w{2,}/i['test'](_0x3f570f)){const _0x2b166f=_0x3f570f[0x0][_0x46a56b(0x1fb)]()+_0x3f570f[_0x46a56b(0x1bc)](0x1);_0x3f570f={'API':_0x2b166f,'brand':_0x2b166f[_0x46a56b(0x206)](/(\S+)\s/)[0x1]};}}let {CGMiner:_0x4fa5cc,BMMiner:_0x5529ff,API:_0x473546,Miner:_0x5551cf,CompileTime:_0x2ae6c5,Type:_0x1033c8,PROD:_0x47d408,VERSION:_0x10928b,MAC:_0x569d22,brand:_0x2b07b0}=_0x3f570f,_0x5efd37,_0x37d890;if(_0x473546||/^E/i[_0x46a56b(0x1e3)](_0x3f570f)){console[_0x46a56b(0x1bd)]({'ipAddress':_0xbf7d4c,'macAddress':_0x2343dd},_0x46a56b(0x1f0)+_0xbf7d4c);_0x569d22&&!/:/[_0x46a56b(0x1e3)](_0x569d22)&&(_0x2343dd=_0x569d22[_0x46a56b(0x1c5)](/(.{2})/g,_0x46a56b(0x1ef))[_0x46a56b(0x1bc)](0x1));_0x47d408&&(_0x1033c8=_0x47d408,!_0x2b07b0&&(_0x2b07b0=_0x1033c8[_0x46a56b(0x206)](/(\S+)\s/)[0x1]));if(!_0x1033c8){const _0x552f41=await sendCommand(_0xbf7d4c,_0x46a56b(0x1b8));_0x1033c8=_0x552f41?.[0x0]?.[_0x46a56b(0x1c2)];}if(!_0x2b07b0||!_0x1033c8)try{const _0x256d5c=await sendCommand(_0xbf7d4c,'devdetails'),{Driver:_0xaff6bf,Model:_0x596e67}=_0x256d5c?.[0x0]||{};if(/bitmicro/i[_0x46a56b(0x1e3)](_0xaff6bf))_0x2b07b0=_0x2b07b0||_0x46a56b(0x204),_0x1033c8=_0x2b07b0+'\x20'+_0x596e67['replace'](/V\w?\d+$/i,''),_0x5551cf=_0x596e67;else{if(/(DragonmintT1|HLT_Coinflex)/i['test'](_0xaff6bf))_0x2b07b0=_0x46a56b(0x1d3);else/avalon/i[_0x46a56b(0x1e3)](_0xaff6bf)&&(_0x2b07b0=_0x46a56b(0x200));}}catch(_0x28c1e9){}if(!_0x2343dd){const _0x2a4678=await sendCommand(_0xbf7d4c,_0x46a56b(0x1fd));_0x2343dd=(_0x2a4678?.[_0x46a56b(0x1b6)]||'')[_0x46a56b(0x1d1)](),!_0x2343dd&&(_0x2343dd=_0x46a56b(0x1e4)+_0xbf7d4c[_0x46a56b(0x1e6)]('.')[_0x46a56b(0x1eb)](_0x3c1ee8=>('000'+_0x3c1ee8)[_0x46a56b(0x1bc)](_0x3c1ee8[_0x46a56b(0x1c1)]))[_0x46a56b(0x1ba)]('')['substr'](0x2)['replace'](/(\d{2})/g,_0x46a56b(0x1e1))[_0x46a56b(0x1c5)](/:$/,'')),_0x10928b=_0x2a4678?.[_0x46a56b(0x207)];}/\b\s\b/[_0x46a56b(0x1e3)](_0x1033c8)&&(!_0x2b07b0&&(_0x2b07b0=_0x1033c8[_0x46a56b(0x206)](/(\S+)\s/)[0x1]),_0x5efd37=_0x1033c8,_0x37d890=_0x1033c8[_0x46a56b(0x1c5)](/\s+\(.*$/,'')[_0x46a56b(0x208)]()[_0x46a56b(0x1c5)](/(\-[^\-]+)+$/,''));const _0x3c145b={'ipAddress':_0xbf7d4c,'macAddress':_0x2343dd,'brand':_0x2b07b0,'apiVersion':_0x2b07b0,'modelType':_0x5efd37,'minerType':_0x37d890,'systemKernelVersion':_0x473546,'hardwareVersion':_0x5551cf||_0x10928b,'fileSystemTimestamp':_0x2ae6c5,'softwareVersion':_0x4fa5cc?_0x46a56b(0x1dc)+_0x4fa5cc:!_0x5529ff?'':_0x46a56b(0x1b9)+_0x5529ff};return _0x3c145b;}else return console[_0x46a56b(0x1e9)]({'ipAddress':_0xbf7d4c,'macAddress':_0x2343dd},_0x46a56b(0x1bb)+_0xbf7d4c),'';}module[_0xae1e79(0x1d2)]={'sendCommand':sendCommand,'getVersionInfo':getVersionInfo};