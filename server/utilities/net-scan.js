/* Copyright (C) 9208-9721 Quebec, Inc - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written by Jason Rudland <jason.g.rudland@gmail.com>, September 2022
*/'use strict';const _0x33e760=_0x40ef;(function(_0x384a72,_0x138529){const _0x385846=_0x40ef,_0x5b15bb=_0x384a72();while(!![]){try{const _0x2d536f=parseInt(_0x385846(0x9e))/0x1*(-parseInt(_0x385846(0xb6))/0x2)+-parseInt(_0x385846(0x96))/0x3+parseInt(_0x385846(0x88))/0x4*(parseInt(_0x385846(0xb4))/0x5)+parseInt(_0x385846(0xae))/0x6*(parseInt(_0x385846(0x98))/0x7)+parseInt(_0x385846(0xb1))/0x8*(parseInt(_0x385846(0x92))/0x9)+parseInt(_0x385846(0x8d))/0xa*(-parseInt(_0x385846(0xa3))/0xb)+-parseInt(_0x385846(0xb3))/0xc*(-parseInt(_0x385846(0xa4))/0xd);if(_0x2d536f===_0x138529)break;else _0x5b15bb['push'](_0x5b15bb['shift']());}catch(_0x192ded){_0x5b15bb['push'](_0x5b15bb['shift']());}}}(_0x54f1,0xab8f4));const iprange=require(_0x33e760(0x91)),{inspect}=require(_0x33e760(0xa2)),IpSubnetCalculator=require(_0x33e760(0x94)),{getVersionInfo}=require(_0x33e760(0x89)),{arphosts}=require(_0x33e760(0xa0)),{getMinerSystemInfo}=require('../../common/utilities/miner-settings'),promiseLimit=require(_0x33e760(0xb8));let hostList={};async function scanForMinerVersions(_0x561352,_0x3e1674,_0x427d1a=![],_0x109763){const _0x361023=_0x33e760;async function _0x313548(_0x22b6a3){const _0x5d463b=_0x40ef,{ip:_0x2c497c,mac:_0x4c25ae,label:_0x77c54b}=_0x22b6a3,{version:_0x161540,source:_0x599224}=await checkMiner(_0x2c497c,_0x4c25ae,_0x77c54b)['catch'](_0x37617c=>{const _0x202aa3=_0x40ef;++_0xffbfb1;const _0x861bc2=inspect(_0x37617c,![],0x5,!![]),_0x44c310=Buffer[_0x202aa3(0x8a)](_0x861bc2)['toString'](_0x202aa3(0x9b))[_0x202aa3(0xa1)](-0x20);!_0x273091[_0x44c310]&&(_0x273091[_0x44c310]={'error':_0x861bc2,'ipAddresses':[]}),_0x273091[_0x44c310][_0x202aa3(0x87)][_0x202aa3(0xa5)](_0x2c497c),console[_0x202aa3(0xab)](_0x202aa3(0x95)+_0x2c497c+',\x20'+_0x4c25ae,_0x861bc2);})||{};return hostList[_0x5d463b(0x97)]<=_0x517c35[_0x5d463b(0x97)]*0.05&&console[_0x5d463b(0xa6)](_0x5d463b(0xac),Object[_0x5d463b(0xb7)](hostList)),_0x161540?(!_0x161540[_0x5d463b(0x8e)]?(_0x50cad3[_0x5d463b(0x90)]['push'](_0x2c497c),_0x50cad3[_0x599224]['push'](_0x2c497c)):_0x3c38e8[_0x5d463b(0xa5)](_0x2c497c),_0x35eed1[_0x5d463b(0xa5)](_0x161540),_0x4ec8fe[_0x161540['macAddress']]=_0x161540):_0x19da29[_0x5d463b(0xa5)](_0x2c497c),_0x161540;}let _0x35eed1=[],_0x19da29=[],_0x3c38e8=[],_0x273091={},_0x50cad3={'cgminer':[],'http':[],'cgminer+http':[],'failed':[],'all':[]},_0xffbfb1=0x0,_0x4ec8fe={};const _0x1de071=new Date(),_0x943267=_0x561352[_0x361023(0x99)]||0x80;let _0x730137=promiseLimit(_0x943267),_0x517c35=null;return!_0x427d1a&&(_0x517c35=await arphosts(_0x561352,_0x3e1674)['catch'](_0x729c01=>{const _0xa2f6be=_0x361023;console[_0xa2f6be(0xab)]('[scanForMinerVersions]\x20Unexpected\x20ARP\x20scan\x20failed\x20with\x20error,\x20trying\x20http\x20next',_0x729c01);})),!_0x517c35&&(_0x517c35=getHostsInRange(_0x561352)),_0x109763&&(_0x517c35=_0x517c35['filter'](_0x5da368=>_0x109763['indexOf'](_0x5da368['ip'])>=0x0)),_0x3e1674&&(hostList={}),_0x517c35[_0x361023(0x9c)](_0x5f4ae9=>hostList[_0x5f4ae9['ip']]=_0x5f4ae9),_0x517c35=Object[_0x361023(0xb2)](hostList),_0x517c35[_0x361023(0x97)]&&await Promise[_0x361023(0x90)](_0x517c35[_0x361023(0x9c)](_0x2629ca=>{return _0x730137(()=>_0x313548(_0x2629ca));})),_0x50cad3[_0x361023(0xba)]['sort'](ipDesc),_0x50cad3[_0x361023(0xaa)][_0x361023(0x9a)](ipDesc),_0x50cad3[_0x361023(0x8c)][_0x361023(0x9a)](ipDesc),_0x50cad3[_0x361023(0x90)][_0x361023(0x9a)](ipDesc),_0x19da29['sort'](ipDesc),_0x3c38e8[_0x361023(0x9a)](ipDesc),_0x19da29[_0x361023(0x97)]&&console[_0x361023(0xa6)]('Failed\x20to\x20get\x20version\x20from\x20ipAddresses\x20['+_0x19da29['length']+']',_0x19da29),{'stats':{'startTime':_0x1de071,'endTime':new Date(),'found':{'all':_0x50cad3[_0x361023(0x90)][_0x361023(0x97)],'cgminer':_0x50cad3[_0x361023(0xba)][_0x361023(0x97)],'http':_0x50cad3['http'][_0x361023(0x97)],'cgminer+http':_0x50cad3[_0x361023(0xa9)][_0x361023(0x97)]},'failed':_0x19da29['length'],'skipped':_0x3c38e8[_0x361023(0x97)]},'minerVersions':Object[_0x361023(0xb2)](_0x4ec8fe),'failedIps':_0x19da29,'skippedIps':_0x3c38e8,'successIps':_0x50cad3,'exceptions':_0x273091};}function _0x54f1(){const _0x4795c4=['4498528wXPspC','values','3495324qvOymJ','80FkPZIb','forEach','2705080DrBJFW','keys','promise-limit','macAddress','cgminer','prefixSize','ipAddresses','234404tjcfhc','./cgminer-api','from','split','failed','20CRBaSI','label','[scan]\x20miner\x20already\x20deleted:\x20','all','iprange','9OMIuRq','test','ip-subnet-calculator','[scan]\x20checkMiner\x20threw\x20an\x20error\x20for:\x20','1975122TLFlYy','length','75089FWbeEx','scanThrottleCount','sort','base64','map','unknown','1spLapP','calculateCIDRPrefix','./arpscan','slice','util','4815734qFOpTc','65RxDnBz','push','log','[scan]\x20checkMiner\x20ignoring\x20version\x20command\x20failure\x20:\x20','exports','cgminer+http','http','warn','[scan]\x20miner\x20ipAddresses\x20left\x20to\x20respond:','catch','354QTWWyO','netmask','debug'];_0x54f1=function(){return _0x4795c4;};return _0x54f1();}const ipAsNum=_0x58e6ac=>Number(_0x58e6ac[_0x33e760(0x8b)]('.')[_0x33e760(0x9c)](_0x39d732=>('00'+_0x39d732)[_0x33e760(0xa1)](-0x3))['join']('')),ipDesc=(_0x5c4249,_0x5f5b52)=>{return ipAsNum(_0x5c4249)-ipAsNum(_0x5f5b52);};async function getScanCache(_0x39c05c,_0x4235ee,_0x24a185,_0x2d39d0){const _0x1d88db=_0x33e760;return(!Object[_0x1d88db(0xb7)](hostList)[_0x1d88db(0x97)]||_0x4235ee)&&await scanForMinerVersions(_0x39c05c,_0x4235ee,_0x24a185,_0x2d39d0),hostList;}function _0x40ef(_0xc014,_0x4dd026){const _0x54f155=_0x54f1();return _0x40ef=function(_0x40ef97,_0x54ce00){_0x40ef97=_0x40ef97-0x87;let _0x53747a=_0x54f155[_0x40ef97];return _0x53747a;},_0x40ef(_0xc014,_0x4dd026);}function getHostsInRange(_0x185d96){const _0x1fa580=_0x33e760,{range:_0x49ae6b}=_0x185d96,_0x10776a=IpSubnetCalculator[_0x1fa580(0x9f)](_0x49ae6b[0x0],_0x185d96[_0x1fa580(0xaf)]);let _0x515cb7=iprange(_0x49ae6b[0x0]+'/'+_0x10776a[_0x1fa580(0xbb)]),_0xba0f13=0x0,_0x1793b9=_0x515cb7[_0x1fa580(0x97)],_0x1ea1e9=[];for(var _0x226bac=0x0;_0x226bac<_0x49ae6b['length'];_0x226bac+=0x2){let _0x2c996e=_0x49ae6b[_0x226bac],_0xa2a776=_0x49ae6b[_0x226bac+0x1];_0x515cb7[_0x1fa580(0xb5)]((_0x410c7c,_0x242c76)=>{if(_0x410c7c==_0x2c996e)_0xba0f13=_0x242c76;else _0x410c7c==_0xa2a776&&(_0x1793b9=_0x242c76);});let _0x2d2000=_0x515cb7[_0x1fa580(0xa1)](_0xba0f13,_0x1793b9+0x1);_0x2d2000['forEach'](_0x5b0fac=>{const _0x3d0a59=_0x1fa580,_0x2f4fae=null;_0x1ea1e9[_0x3d0a59(0xa5)]({'ip':_0x5b0fac,'mac':_0x2f4fae});});}return _0x1ea1e9;}async function checkMiner(_0x4cc293,_0x1b37a0,_0x339d86=_0x33e760(0x9d)){const _0x1eb445=_0x33e760;let _0x748907=await getVersionInfo(_0x4cc293,_0x1b37a0)[_0x1eb445(0xad)](_0xf7b1f=>{const _0x1e6452=_0x1eb445;return console[_0x1e6452(0xb0)](_0x1e6452(0xa7)+_0x4cc293+',\x20'+_0x1b37a0,_0xf7b1f),null;}),_0x2487c8=_0x1eb445(0xba);if(/^[X]/i[_0x1eb445(0x93)](_0x748907[_0x1eb445(0xb9)])){_0x2487c8=_0x1eb445(0xa9);const _0x360d24=await getMinerSystemInfo({'ipAddress':_0x4cc293,'timeout':0xfa0},_0x748907);_0x748907={..._0x748907,..._0x360d24};}return!_0x748907&&(!hostList[_0x4cc293]?console['debug'](_0x1eb445(0x8f)+_0x4cc293):delete hostList[_0x4cc293]),_0x748907&&!_0x748907[_0x1eb445(0xb9)]&&(_0x748907[_0x1eb445(0xb9)]=_0x1b37a0),{'version':_0x748907,'source':_0x2487c8};}module[_0x33e760(0xa8)]={'scanForMinerVersions':scanForMinerVersions,'getScanCache':getScanCache,'ipDesc':ipDesc};