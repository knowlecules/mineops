/* Copyright (C) 9208-9721 Quebec, Inc - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written by Jason Rudland <jason.g.rudland@gmail.com>, September 2022
*/'use strict';const _0x48860a=_0x51f3;(function(_0x50e32a,_0x519e50){const _0x237532=_0x51f3,_0x397c79=_0x50e32a();while(!![]){try{const _0x452a48=-parseInt(_0x237532(0x141))/0x1*(-parseInt(_0x237532(0x158))/0x2)+parseInt(_0x237532(0x162))/0x3*(-parseInt(_0x237532(0x100))/0x4)+-parseInt(_0x237532(0x15b))/0x5+-parseInt(_0x237532(0x132))/0x6*(parseInt(_0x237532(0xfc))/0x7)+-parseInt(_0x237532(0x14b))/0x8*(-parseInt(_0x237532(0x181))/0x9)+parseInt(_0x237532(0x110))/0xa+parseInt(_0x237532(0x173))/0xb;if(_0x452a48===_0x519e50)break;else _0x397c79['push'](_0x397c79['shift']());}catch(_0x4f95c7){_0x397c79['push'](_0x397c79['shift']());}}}(_0x89f1,0x7b06e));const _=require(_0x48860a(0x172)),dsConfig=require(_0x48860a(0x10c)),{getLocalInterface}=require(_0x48860a(0x140)),path=require(_0x48860a(0x171)),multer=require(_0x48860a(0x167)),upload=multer(),config=require('../../common/config.json'),crypto=require('crypto'),{parse}=require('csv-parse/sync'),{getMinerReboot,deriveApiVersion,getMinerFilterClause,getMinerLayoutFields,getMinerInfo,getMinerType,getMinerTypeMap,checkMinerStates,modifyMinerStates,updateMinerInfo,trendsAggregate}=require(_0x48860a(0x13f)),{syncMinerStatusJob,discoverMiners,compareMinerStatus,socketSendMiners,provisionMiner}=require('../../server/utilities/provision-miner'),{scanForMinerVersions}=require('../utilities/net-scan'),{registerProxy}=require(_0x48860a(0x176)),fs=require('fs'),user=require('../../common/models/user'),{minerTypeMap}=config;module[_0x48860a(0x146)]=function(_0x5063c5){const _0x2f8369=_0x48860a;var _0x1fb3f6=_0x5063c5[_0x2f8369(0x13d)][_0x2f8369(0x101)],_0x541c74=_0x5063c5['models'][_0x2f8369(0x111)],_0x45a7fa=_0x5063c5['models'][_0x2f8369(0x188)],_0x40a2ea=_0x5063c5[_0x2f8369(0x13d)]['dataCenterSettings'];_0x5063c5['get']('/',function(_0x420866,_0x48ceb7){const _0x5e69f4=_0x2f8369;if(!_0x420866[_0x5e69f4(0x143)]||!_0x420866[_0x5e69f4(0x143)]['id']){var _0x4e185f=dsConfig['emailDs'][_0x5e69f4(0x159)][0x0][_0x5e69f4(0x185)];return _0x48ceb7[_0x5e69f4(0x137)](_0x5e69f4(0x107),{'email':_0x4e185f[_0x5e69f4(0x186)],'password':_0x4e185f[_0x5e69f4(0x16f)]});}const _0x10fab7=_0x420866[_0x5e69f4(0x14f)][_0x5e69f4(0x121)];Promise[_0x5e69f4(0x17e)]([_0x1fb3f6[_0x5e69f4(0xf5)](_0x420866['accessToken']['userId'])])[_0x5e69f4(0x179)](([_0x17f252])=>{const _0x33c732=_0x5e69f4;if(!_0x17f252)return _0x48ceb7['render'](_0x33c732(0x107),{'email':'','password':''});_0x48ceb7[_0x33c732(0x137)]('home',{'email':_0x420866[_0x33c732(0x15c)][_0x33c732(0x151)],'accessToken':_0x420866[_0x33c732(0x143)]['id'],'user':_0x17f252,'webSocketHost':getLocalInterface()[_0x33c732(0x15d)]+':'+config[_0x33c732(0x18c)],'proxyPort':config[_0x33c732(0x113)],'redirectUrl':_0x33c732(0x105)});});}),_0x5063c5[_0x2f8369(0x168)](_0x2f8369(0x12c),function(_0x173c34,_0x5ce31b){const _0x5d190e=_0x2f8369;_0x5ce31b[_0x5d190e(0x137)](_0x5d190e(0x130));}),_0x5063c5['post'](_0x2f8369(0x108),function(_0x5dc1b4,_0x16ed77){const _0x37304b=_0x2f8369;_0x1fb3f6['login']({'email':_0x5dc1b4['body'][_0x37304b(0x151)],'password':_0x5dc1b4[_0x37304b(0x15c)]['password']},'user',function(_0xe7bbc1,_0xc2e835){const _0x4b740c=_0x37304b;if(_0xe7bbc1){_0xe7bbc1['details']&&_0xe7bbc1[_0x4b740c(0x147)]===_0x4b740c(0x157)?_0x16ed77[_0x4b740c(0x137)](_0x4b740c(0xf4),{'title':_0x4b740c(0x149),'content':_0xe7bbc1,'redirectToEmail':'/api/users/'+_0xe7bbc1[_0x4b740c(0x184)][_0x4b740c(0x156)]+'/verify','redirectTo':'/','redirectToLinkText':_0x4b740c(0x14c),'userId':_0xe7bbc1['details'][_0x4b740c(0x156)]}):_0x16ed77[_0x4b740c(0x137)](_0x4b740c(0x133),{'title':_0x4b740c(0x169),'content':_0xe7bbc1,'redirectTo':'/','redirectToLinkText':_0x4b740c(0x10a)});return;}_0x16ed77[_0x4b740c(0x120)](_0x4b740c(0x128),_0xc2e835['id'],{'signed':!![],'maxAge':_0xc2e835[_0x4b740c(0x170)]*0x3e8}),Promise['all']([_0x1fb3f6[_0x4b740c(0xf5)](_0xc2e835['userId'])])[_0x4b740c(0x179)](([_0x455cda])=>{const _0x3c21b7=_0x4b740c;if(!_0x455cda['validated'])return _0x16ed77[_0x3c21b7(0x137)]('response',{'title':_0x3c21b7(0x134),'content':'Contact\x20the\x20system\x20admmin\x20if\x20this\x20is\x20an\x20error','redirectTo':'/','redirectToLinkText':'Try\x20another\x20account'});_0x16ed77[_0x3c21b7(0x137)]('home',{'email':_0x5dc1b4[_0x3c21b7(0x15c)][_0x3c21b7(0x151)],'accessToken':_0xc2e835['id'],'user':_0x455cda,'webSocketHost':getLocalInterface()[_0x3c21b7(0x15d)]+':'+config[_0x3c21b7(0x18c)],'proxyPort':config[_0x3c21b7(0x113)],'redirectUrl':_0x3c21b7(0x105)});});});}),_0x5063c5['get']('/logout',function(_0x9eb2ee,_0x15db10,_0x5ac143){const _0x201791=_0x2f8369;_0x9eb2ee[_0x201791(0x143)]&&_0x9eb2ee[_0x201791(0x143)]['id']?_0x1fb3f6[_0x201791(0x11d)](_0x9eb2ee['accessToken']['id'],function(_0x527620){const _0x3dec91=_0x201791;if(_0x527620)return _0x5ac143(_0x527620);_0x15db10['clearCookie'](_0x3dec91(0x128)),_0x15db10[_0x3dec91(0x161)]('/');}):(_0x15db10[_0x201791(0x165)](_0x201791(0x128)),_0x15db10['redirect']('/'));}),_0x5063c5[_0x2f8369(0x104)](_0x2f8369(0x16b),function(_0x570967,_0x215431,_0x249cce){const _0x438e73=_0x2f8369;_0x1fb3f6['resetPassword']({'email':_0x570967[_0x438e73(0x15c)][_0x438e73(0x151)]},function(_0x3e2469){const _0x748966=_0x438e73;if(_0x3e2469)return _0x215431['status'](0x191)['send'](_0x3e2469);_0x215431[_0x748966(0x137)](_0x748966(0x133),{'title':_0x748966(0x148),'content':_0x748966(0x17a),'redirectTo':'/','redirectToLinkText':_0x748966(0x125)});});}),_0x5063c5[_0x2f8369(0x168)](_0x2f8369(0x10f),function(_0x37da13,_0x2646a9,_0x5ed833){const _0x4e8d6f=_0x2f8369;_0x2646a9['render'](_0x4e8d6f(0x115),{'redirectUrl':_0x4e8d6f(0xff)});}),_0x5063c5['get'](_0x2f8369(0x16a),function(_0x5e43cb,_0x449f41,_0x3d94f3){const _0x28bafb=_0x2f8369;if(!_0x5e43cb['accessToken']||!_0x5e43cb[_0x28bafb(0x143)]['id'])return _0x449f41[_0x28bafb(0x161)](_0x28bafb(0x174));Promise['all']([_0x1fb3f6[_0x28bafb(0xf5)](_0x5e43cb['accessToken'][_0x28bafb(0x156)])])[_0x28bafb(0x179)](([_0x3663b1])=>{const _0x5a775d=_0x28bafb;let _0x1a9733=getMinerFilterClause(_0x3663b1);return!/admin/[_0x5a775d(0x187)](_0x3663b1[_0x5a775d(0x13c)])&&_0x1a9733['where'][_0x5a775d(0x18b)]['push']({'workerName':/^(?!S9D|L3D).*$/}),Promise[_0x5a775d(0x17e)]([_0x541c74['find'](_0x1a9733)]);})[_0x28bafb(0x179)](([_0x42543e])=>{const _0x3e23db=_0x28bafb;_0x42543e[_0x3e23db(0x12e)](_0x100a58=>{let {workerName:_0x2b1b3a,accountName:_0x3df710,macAddress:_0x575d30,ipAddress:_0x52e7b0,apiVersion:_0x50c16f}=_0x100a58;registerProxy({'workerName':_0x2b1b3a,'accountName':_0x3df710,'macAddress':_0x575d30,'ipAddress':_0x52e7b0,'minerTyped':getMinerTypeMap(_0x100a58),'apiVersion':_0x50c16f});}),_0x449f41[_0x3e23db(0x137)](_0x3e23db(0x16c),{'minerInfos':_0x42543e,'minerTypeMap':minerTypeMap,'accessToken':_0x5e43cb[_0x3e23db(0x143)]['id'],'proxyPort':config[_0x3e23db(0x113)],'webSocketHost':getLocalInterface()[_0x3e23db(0x15d)]+':'+config[_0x3e23db(0x18c)]});});}),_0x5063c5[_0x2f8369(0x168)](_0x2f8369(0x175),function(_0x14f2aa,_0x5313d7,_0x54d903){const _0x389b31=_0x2f8369;if(!_0x14f2aa['accessToken']||!_0x14f2aa[_0x389b31(0x143)]['id'])return _0x5313d7[_0x389b31(0x161)](_0x389b31(0x174));const _0x5a180d=_0x14f2aa['query'][_0x389b31(0x121)];Promise['all']([_0x1fb3f6[_0x389b31(0xf5)](_0x14f2aa[_0x389b31(0x143)][_0x389b31(0x156)])])[_0x389b31(0x179)](([_0x3a4f05])=>{const _0x33447c=_0x389b31;let _0x44018c=getMinerFilterClause(_0x3a4f05);return Promise[_0x33447c(0x17e)]([getMinerLayoutFields(_0x44018c)]);})['then'](([_0x50af05])=>{const _0x1b903c=_0x389b31;_0x5313d7['render'](_0x1b903c(0xf8),{'minerInfos':_0x50af05,'minerTypeMap':minerTypeMap,'dataHall':_0x5a180d,'accessToken':_0x14f2aa[_0x1b903c(0x143)]['id'],'proxyPort':config['proxyPort'],'webSocketHost':getLocalInterface()[_0x1b903c(0x15d)]+':'+config['socketPort']});});}),_0x5063c5[_0x2f8369(0x168)](_0x2f8369(0xfe),function(_0x3ffd01,_0x2ef5f3,_0x3f29cc){const _0x58114b=_0x2f8369;if(!_0x3ffd01[_0x58114b(0x143)]||!_0x3ffd01[_0x58114b(0x143)]['id'])return _0x2ef5f3[_0x58114b(0x161)](_0x58114b(0x174));const _0x17e02b=_0x3ffd01[_0x58114b(0x14f)][_0x58114b(0x106)];Promise[_0x58114b(0x17e)]([_0x541c74[_0x58114b(0x112)]({'macAddress':_0x17e02b})])[_0x58114b(0x179)](([_0x2b9f9e])=>{const _0xad4ed9=_0x58114b;_0x2ef5f3[_0xad4ed9(0x137)](_0xad4ed9(0x142),{'minerInfos':_0x2b9f9e,'proxyPort':config['proxyPort']});});}),_0x5063c5[_0x2f8369(0x104)](_0x2f8369(0x13b),function(_0x2a0cc3,_0x11155b,_0x2632d0){const _0x512ea1=_0x2f8369;Promise[_0x512ea1(0x17e)]([_0x541c74[_0x512ea1(0x112)]()])['then'](([_0x1fe8f9])=>{const _0x40cd2f=_0x512ea1;_0x11155b[_0x40cd2f(0x137)](_0x40cd2f(0x142),{'minerInfos':_0x1fe8f9,'accessToken':_0x2a0cc3[_0x40cd2f(0x143)]['id'],'proxyPort':config['proxyPort']});});}),_0x5063c5['get'](_0x2f8369(0x17b),function(_0x43828f,_0x383c73,_0x5823c8){const _0x1a6976=_0x2f8369;if(!_0x43828f[_0x1a6976(0x143)]||!_0x43828f['accessToken']['id'])return _0x383c73[_0x1a6976(0x161)]('/logout');const _0x5612eb=_0x43828f['query']['dataHall'];Promise['all']([_0x1fb3f6[_0x1a6976(0xf5)](_0x43828f[_0x1a6976(0x143)]['userId'])])[_0x1a6976(0x179)](([_0x3c0406])=>{const _0x29040d=_0x1a6976;let _0x33d2e1=getMinerFilterClause(_0x3c0406);return Promise[_0x29040d(0x17e)]([_0x40a2ea[_0x29040d(0x103)]({'active':!![]}),_0x541c74[_0x29040d(0x112)](_0x33d2e1),_0x3c0406]);})['then'](([_0xd42c2,_0x4d073c,_0x6dde1a])=>{const _0x54838a=_0x1a6976;_0x383c73['render']('provision',{'minerTypeMap':config[_0x54838a(0x139)],'email':_0x43828f['body']['email'],'dataCenterSettings':_0xd42c2,'minerInfos':_0x4d073c,'dataHall':_0x5612eb,'accessToken':_0x43828f[_0x54838a(0x143)]['id'],'user':_0x6dde1a,'proxyPort':config['proxyPort'],'webSocketHost':getLocalInterface()[_0x54838a(0x15d)]+':'+config[_0x54838a(0x18c)]});});}),_0x5063c5[_0x2f8369(0x104)](_0x2f8369(0x136),function(_0x124165,_0x6524ed,_0x4782e7){const _0x3186b8=_0x2f8369,_0xdca7ce=_0x124165[_0x3186b8(0x15c)]['ipAddresses']||[],_0x23b06d=_0x124165[_0x3186b8(0x15c)][_0x3186b8(0x15a)],_0x432c38=_0x124165[_0x3186b8(0x15c)][_0x3186b8(0x14a)]||'',_0x53ef2d=_0x124165['body'][_0x3186b8(0x182)]||'';let _0x1d527d={};_0x23b06d&&(_0x1d527d={'where':{'hashAlgorithm':_0x23b06d},'order':[_0x3186b8(0x15a),_0x3186b8(0xfb)]});const _0x521d6a=path[_0x3186b8(0x166)](global[_0x3186b8(0x145)]);let _0xf6ab2a=fs[_0x3186b8(0x164)](_0x521d6a),_0x296734=[],_0x3700a2=[],_0x59c082=[];if(_0x53ef2d){let _0x324c81=new RegExp(_0x53ef2d,'i');_0x432c38==_0x3186b8(0x18a)&&(_0x324c81=new RegExp(_0x53ef2d[_0x3186b8(0x138)](0x1),'i'));_0xf6ab2a=_0xf6ab2a[_0x3186b8(0x17c)](_0x5d87de=>_0x324c81[_0x3186b8(0x187)](_0x5d87de));const _0x31ac14='Antminer\x20'+_0x53ef2d[_0x3186b8(0x131)](/(\w\d+)/)[0x1],_0x2e015d=getMinerTypeMap({'minerType':_0x31ac14});_0x2e015d&&_0x2e015d[_0x3186b8(0x135)]&&_0x2e015d[_0x3186b8(0x135)][_0x3186b8(0x12b)]&&(_0x296734=_0x2e015d[_0x3186b8(0x135)][_0x3186b8(0x12b)]||[],_0x3700a2=_0x2e015d[_0x3186b8(0x135)][_0x3186b8(0x180)]||[],_0x59c082=_0x2e015d[_0x3186b8(0x135)][_0x3186b8(0x153)]||[]);}Promise[_0x3186b8(0x17e)]([_0x45a7fa['find'](_0x1d527d),_0x1fb3f6[_0x3186b8(0xf5)](_0x124165['accessToken']['userId']),_0x541c74[_0x3186b8(0x112)]({'where':{'ipAddress':_0xdca7ce[0x0]}})])[_0x3186b8(0x179)](([_0x4e6b6e,_0x29edb5,_0x548953])=>{const _0x238bdc=_0x3186b8;_0x6524ed[_0x238bdc(0x137)](_0x238bdc(0x13e),{'pools':_0x4e6b6e[_0x238bdc(0x17f)]((_0xf274f8,_0x2ea4ae)=>_0xf274f8[_0x238bdc(0x183)]>_0x2ea4ae[_0x238bdc(0x183)]?0x1:-0x1),'user':_0x29edb5,'accountName':_0x432c38,'ipAddresses':_0xdca7ce,'accessToken':_0x124165[_0x238bdc(0x143)]['id'],'files':_0xf6ab2a,'frequencies':_0x296734,'voltages':_0x3700a2,'presets':_0x59c082,'poolIDs':_0x548953[0x0]?_0x548953[0x0]['poolIDs']||[]:[]});});}),_0x5063c5['get'](_0x2f8369(0x127),function(_0x26634c,_0x373b6f,_0x3c644e){const _0x3501cf=_0x2f8369;Promise[_0x3501cf(0x17e)]([_0x1fb3f6[_0x3501cf(0xf5)](_0x26634c[_0x3501cf(0x143)][_0x3501cf(0x156)])])[_0x3501cf(0x179)](([_0x571cec])=>{const _0xf9325=_0x3501cf;_0x373b6f[_0xf9325(0x137)](_0xf9325(0x12f),{'user':_0x571cec,'accessToken':_0x26634c[_0xf9325(0x143)]['id']});});}),_0x5063c5[_0x2f8369(0x104)]('/upload',upload[_0x2f8369(0x10e)](_0x2f8369(0x11f)),function(_0x13a373,_0xc9968){const _0x31457e=_0x2f8369,_0x3b25ce=_0x13a373[_0x31457e(0x15c)][_0x31457e(0x17d)],_0x25e897=_0x13a373[_0x31457e(0x11f)],_0x4b6eed=_0x25e897[_0x31457e(0x177)]['toString']();try{const _0x39e161=parse(_0x4b6eed,{'columns':!![],'trim':!![],'skip_empty_lines':!![]});let _0x50597c=Object[_0x31457e(0x11e)](_0x39e161[0x0])['find'](_0x3fa006=>/key\([^\)]+\)/[_0x31457e(0x187)](_0x3fa006)),_0x37ad48=_0x31457e(0x106);!_0x50597c?_0x50597c=_0x31457e(0x106):_0x37ad48=_0x50597c[_0x31457e(0x131)](/key\(([^\)]+)\)/)[0x1],_0x39e161[_0x31457e(0x189)](async _0x128b0=>{updateMinerInfo({'record':_0x128b0,'keyField':_0x37ad48,'keyFieldName':_0x50597c});}),_0xc9968[_0x31457e(0xf7)](0xc8);}catch(_0x16746e){_0xc9968[_0x31457e(0x109)](0x1f4,_0x16746e);}}),_0x5063c5[_0x2f8369(0x168)](_0x2f8369(0xfd),function(_0x6e3c17,_0x3858bf,_0x15fc0c){const _0x374388=_0x2f8369;Promise['all']([_0x45a7fa[_0x374388(0x112)]({'order':[_0x374388(0x15a),'priority',_0x374388(0x183)]}),_0x1fb3f6['findById'](_0x6e3c17['accessToken'][_0x374388(0x156)])])[_0x374388(0x179)](([_0x1eb4b2,_0x5d9bef])=>{const _0x4e4245=_0x374388;_0x3858bf['render'](_0x4e4245(0x13a),{'pools':_0x1eb4b2,'user':_0x5d9bef,'accessToken':_0x6e3c17[_0x4e4245(0x143)]['id']});});}),_0x5063c5[_0x2f8369(0x168)](_0x2f8369(0x150),function(_0x29f7dd,_0x4de72e,_0xd40446){const _0x1133b7=_0x2f8369,_0x484880=_0x1133b7(0x144);function _0x55d6ce(_0x498b91){const _0x789eba=_0x1133b7;return((_0x498b91||'')+'ZZ')['substr'](0x0,0x2)+crypto['randomBytes'](0x5)[_0x789eba(0x114)]('hex')[_0x789eba(0x12a)]()[_0x789eba(0xf6)](/(.{2})/g,_0x789eba(0x118));}let _0x270394=_0x55d6ce('ZZ');Promise[_0x1133b7(0x17e)]([_0x541c74[_0x1133b7(0x112)]({'where':{'macAddress':{'regexp':/^ZZ:/}}}),_0x541c74['count']({'macAddress':_0x270394})])['then'](([_0xd13239,_0x4e540e])=>{const _0x1756bf=_0x1133b7;if(_0x4e540e){const _0x365180=_[_0x1756bf(0x152)](_0xd13239,_0x1756bf(0x106));do{_0x270394=_0x55d6ce('ZZ');}while(!_0x365180[_0x270394]);}_0x4de72e[_0x1756bf(0x137)]('miner-place-holder',{'minerTypeMap':config[_0x1756bf(0x139)],'macAddress':_0x270394,'ipAddress':_0x484880});});}),_0x5063c5[_0x2f8369(0x168)](_0x2f8369(0x160),function(_0x476567,_0x3d6acc,_0x42c2e1){const _0x1320cf=_0x2f8369,{ipaddress:_0x20f964}=_0x476567[_0x1320cf(0x14f)];Promise[_0x1320cf(0x17e)]([_0x1fb3f6['findById'](_0x476567['accessToken'][_0x1320cf(0x156)]),getMinerInfo({'ipAddress':_0x20f964})])[_0x1320cf(0x179)](([_0x3314bf,_0x5503ce])=>{const _0x11c921=_0x1320cf;if(!_0x5503ce)return console['log'](_0x11c921(0xf9),_0x476567['query']),![];const _0xd14b63=getMinerTypeMap(_0x5503ce),_0x252322=deriveApiVersion({'minerInfo':_0x5503ce,'minerTyped':_0xd14b63});return getMinerReboot(_0x5503ce,_0xd14b63,_0x252322)[_0x11c921(0x179)](_0x91f819=>{const _0x2d77f7=_0x11c921;return _0x91f819?(_0x5503ce[_0x2d77f7(0x129)]=null,_0x5503ce[_0x2d77f7(0x10d)](),_0x3d6acc[_0x2d77f7(0x11c)](0xc8,{'Content-Type':'application/json'}),_0x3d6acc['end'](JSON[_0x2d77f7(0xf2)]({'reboot':!![]}))):_0x3d6acc[_0x2d77f7(0xf7)](0x191);});});}),_0x5063c5[_0x2f8369(0x104)](_0x2f8369(0x11b),function(_0x1afe74,_0x52a901,_0x4483be){const _0x35d50e=_0x2f8369,{ipaddress:_0x43a22b}=_0x1afe74[_0x35d50e(0x14f)];if(!_0x1afe74[_0x35d50e(0x143)]||!_0x1afe74[_0x35d50e(0x143)]['id'])return _0x52a901['redirect'](_0x35d50e(0x174));Promise['all']([_0x1fb3f6[_0x35d50e(0xf5)](_0x1afe74[_0x35d50e(0x143)][_0x35d50e(0x156)]),getMinerInfo({'ipAddress':_0x43a22b})])[_0x35d50e(0x179)](([_0x41d739,_0xcf7a8c])=>{const _0x2db2c1=_0x35d50e;if(!_0x41d739)return _0x52a901['redirect'](_0x2db2c1(0x174));if(!_0xcf7a8c)return console[_0x2db2c1(0x116)]('Hashrate\x20chart\x20lookup\x20failed',_0x1afe74[_0x2db2c1(0x14f)]),![];if(!_0xcf7a8c['trends'])return _0x52a901[_0x2db2c1(0x137)]('chart',{'points':JSON[_0x2db2c1(0xf2)]([{'x':Date[_0x2db2c1(0x11a)],'y':0x2}])});const {fine:_0x3a6bdf,hourly:_0x458e06}=_0xcf7a8c[_0x2db2c1(0x154)],_0x1e40d5=_0x3a6bdf['concat'](_0x458e06);_0x52a901[_0x2db2c1(0x137)](_0x2db2c1(0x117),{'points':JSON['stringify'](_0x1e40d5)});});}),_0x5063c5[_0x2f8369(0x168)](_0x2f8369(0x163),async function(_0x58003d,_0x12dfb9,_0x59fa10){const _0x411e91=_0x2f8369,_0x183192=await trendsAggregate(_0x58003d['query']);_0x12dfb9[_0x411e91(0x15f)](_0x183192);}),_0x5063c5[_0x2f8369(0x168)]('/provision-miner',async(_0x3d4c49,_0x4e5509)=>{const _0xf9f4ad=_0x2f8369;let {ipaddress:_0x491d60,ipAddress:_0x3a6e6b,ip:_0x1e46a9,brand:_0x36888f}=_0x3d4c49[_0xf9f4ad(0x14f)];_0x3a6e6b=_0x491d60||_0x3a6e6b||_0x1e46a9;const _0x4fa676=await provisionMiner({'ipAddress':_0x3a6e6b,'minerTyped':{'brand':_0x36888f}});_0x4e5509[_0xf9f4ad(0x15f)](_0x4fa676);}),_0x5063c5[_0x2f8369(0x168)]('/state-check',async(_0x7324d2,_0x1bf070)=>{const _0x25afb2=_0x2f8369;let {ipAddress:_0x58ca2a,ipaddress:_0x4a7a13,ip:_0x3b4bb4,commands:commands='',brand:_0x592205}=_0x7324d2[_0x25afb2(0x14f)];_0x58ca2a=_0x4a7a13||_0x58ca2a||_0x3b4bb4;commands&&(commands=commands[_0x25afb2(0x10b)](/\s*,\s*/));const _0x4b1bd3=_0x58ca2a?await checkMinerStates({'ipAddress':_0x58ca2a,'commands':commands,'brand':_0x592205}):{'usage':_0x25afb2(0xfa)};_0x1bf070[_0x25afb2(0x15f)](_0x4b1bd3);}),_0x5063c5[_0x2f8369(0x168)]('/state-modify',async(_0xff4fb8,_0x416d17)=>{const _0x1dc900=_0x2f8369;let {ipAddress:_0x50ddc1,ipaddress:_0xfa6904,ip:_0xd80a47,brand:_0x4aec07,user:_0x6329ef,username:_0x20a9fb,userName:_0x58fda2,worker:_0x5bd82b,workerName:_0x1a6ae2,workername:_0x2605c3}=_0xff4fb8[_0x1dc900(0x14f)];_0x50ddc1=_0xfa6904||_0x50ddc1||_0xd80a47,_0x20a9fb=_0x20a9fb||_0x58fda2||_0x6329ef,_0x5bd82b=_0x5bd82b||_0x2605c3||_0x1a6ae2;const _0x4ffde8=_0x50ddc1?await modifyMinerStates({'ipAddress':_0x50ddc1,'brand':_0x4aec07,'username':_0x20a9fb,'worker':_0x5bd82b}):{'usage':_0x1dc900(0x178)};_0x416d17[_0x1dc900(0x15f)](_0x4ffde8);}),_0x5063c5[_0x2f8369(0x168)]('/scan',async(_0x3ffb23,_0xb67915)=>{const _0x5d32fe=_0x2f8369;let {dhcpSettings:_0x518da0}=await _0x40a2ea[_0x5d32fe(0x103)]();const {settings:_0x2dad7f,mode:_0x26f241,reset:_0x388430,help:_0x54df65}=_0x3ffb23[_0x5d32fe(0x14f)];if(_0x2dad7f||_0x54df65)try{const _0x48fb48=JSON[_0x5d32fe(0x126)](_0x2dad7f);_0x518da0={..._0x518da0,..._0x48fb48};}catch(_0x10487a){return _0xb67915[_0x5d32fe(0x15f)]({'not-parseable':_0x2dad7f,'example':'?settings={\x22range\x22:[\x22192.168.0.2\x22,\x22192.168.4.254\x22],\x22netmask\x22:\x22255.255.242.0\x22,\x22scanThrottleCount\x22:20}&mode=discoverhttp','modes':[_0x5d32fe(0x119),_0x5d32fe(0x122),'http',_0x5d32fe(0xf3),_0x5d32fe(0x14d)],'error':{'message':_0x10487a['message'],'stack':_0x10487a[_0x5d32fe(0x16d)]}});}let _0x5f03e6;if(/discover/i[_0x5d32fe(0x187)](_0x26f241))_0x5f03e6=await discoverMiners(_0x518da0,/true/i[_0x5d32fe(0x187)](_0x388430),/http/i[_0x5d32fe(0x187)](_0x26f241));else/sync/i[_0x5d32fe(0x187)](_0x26f241)?_0x5f03e6=await compareMinerStatus(_0x518da0,/true/i[_0x5d32fe(0x187)](_0x388430),/http/i['test'](_0x26f241)):_0x5f03e6=await scanForMinerVersions(_0x518da0,/true/i['test'](_0x388430),/http/i[_0x5d32fe(0x187)](_0x26f241));_0xb67915[_0x5d32fe(0x15f)](_0x5f03e6);}),_0x5063c5['get'](_0x2f8369(0x102),async(_0x5fac61,_0x528e4e)=>{const _0x4cca5a=_0x2f8369,{ipaddress:_0x555baa}=_0x5fac61[_0x4cca5a(0x14f)];let _0x5c2353=await _0x541c74['findOne']({'where':{'ipAddress':_0x555baa}});const _0x51ae52=await syncMinerStatusJob(_0x5c2353,Date[_0x4cca5a(0x126)](new Date()),!![]);_0x528e4e[_0x4cca5a(0x15f)](_0x51ae52);}),_0x5063c5['get'](_0x2f8369(0x155),async(_0x5e6546,_0x14e18d)=>{const _0x22c635=_0x2f8369,_0x36e40d=['discovered',_0x22c635(0x16e),_0x22c635(0x123),_0x22c635(0x14e)];let {mac:_0x32dc0f,macAddress:_0x4950a3,macaddress:_0xaa12bf,ip:_0x25b335,ipAddress:_0x20f47f,ipaddress:_0x1c766e,state:_0x5a16d1}=_0x5e6546['query'];(!_0x5a16d1||_0x36e40d[_0x22c635(0x12d)](_0x5a16d1)<0x0)&&_0x14e18d[_0x22c635(0x15f)]({'miner-state-not-found':_0x5a16d1,'example':_0x22c635(0x124),'available-states':_0x36e40d});_0x25b335=_0x25b335||_0x20f47f||_0x1c766e,_0x32dc0f=_0x32dc0f||_0x4950a3||_0xaa12bf;var _0x53bdcb;if(_0x25b335&&_0x25b335[_0x22c635(0x15e)])_0x53bdcb={'where':{'ipAddress':{'inq':_0x25b335[_0x22c635(0x10b)](/\s*,\s*/)}}};else _0x32dc0f&&_0x32dc0f[_0x22c635(0x15e)]&&(_0x53bdcb={'where':{'macAddress':{'inq':_0x32dc0f[_0x22c635(0x10b)](/\s*,\s*/)}}});let _0x1a3593=await _0x541c74['find'](_0x53bdcb);socketSendMiners(_0x1a3593,_0x5a16d1),_0x14e18d[_0x22c635(0x15f)]({'broadcastSuccessful':!![]});});};function _0x51f3(_0x1f22db,_0x3df591){const _0x89f18d=_0x89f1();return _0x51f3=function(_0x51f3a3,_0x1307cd){_0x51f3a3=_0x51f3a3-0xf2;let _0x539f2d=_0x89f18d[_0x51f3a3];return _0x539f2d;},_0x51f3(_0x1f22db,_0x3df591);}function _0x89f1(){const _0x2e50dc=['post','/api/users/change-password','macAddress','login','/login','send','Try\x20login\x20again','split','../datasources.json','save','single','/reset-password','6548300ZmpxLX','minerInfo','find','proxyPort','toString','password-reset','log','chart',':$1','discover','now','/hashrate-chart','writeHead','logout','keys','file','cookie','dataHall','sync','configured','?ip=192.168.0.2,192.168.4.254&state=configured','Log\x20in','parse','/upload-miners','access_token','conditionPrime','toUpperCase','frequencies','/verified','indexOf','forEach','upload-miners','verified','match','246DfSCzu','response','Inactive\x20account','overclock','/bulk-provision','render','substr','minerTypeMap','prioritize-pools','/ticket','group','models','bulk-provision','../../common/utilities/miner-settings','../utilities/net-interfaces','1zzkIvg','tickets','accessToken','99.99.99.99','firmwareFolderPath','exports','code','Password\x20reset\x20requested','Login\x20failed','accountName','3472QUkQar','Click\x20here','synchttp','positioned','query','/miner-place-holder','email','indexBy','presets','trends','/broadcast-state','userId','LOGIN_FAILED_EMAIL_NOT_VERIFIED','464156dujPNV','transports','hashAlgorithm','3832380tYFcLC','body','address','length','json','/reboot-miner','redirect','10683aXKseX','/trends','readdirSync','clearCookie','resolve','multer','get','Wrong\x20username\x20or\x20password','/miners','/request-password-reset','miners','stack','setting','pass','ttl','path','lodash','8073582eSogJj','/logout','/layout','../../server/utilities/miner-proxy','buffer','?ipAddress=192.x.x.x&brand=Whatsminer&username=mineops&worker=S19DBD001','then','Check\x20your\x20email\x20for\x20further\x20instructions','/provision','filter','title','all','sort','voltages','17541QKGgno','minerType','name','details','auth','user','test','pool','map','antminer','and','socketPort','stringify','discoverhttp','reponseToTriggerEmail','findById','replace','sendStatus','layout','Reboot\x20miner\x20lookup\x20failed','state-check?ipAddress=192.x.x.x&brand=*override&commands=ALL,summary,pools,devs,stats,version,config,devdetails','priority','117313CzjUPQ','/prioritize-pools','/tickets','/api/users/reset-password','572QSoIia','User','/miner-state','findOne'];_0x89f1=function(){return _0x2e50dc;};return _0x89f1();}