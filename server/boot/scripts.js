/* Copyright (C) 9208-9721 Quebec, Inc - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written by Jason Rudland <jason.g.rudland@gmail.com>, September 2022
*/'use strict';function _0xec07(_0x4fb17b,_0x3443c9){const _0xecdffd=_0xecdf();return _0xec07=function(_0xec078,_0x1843f0){_0xec078=_0xec078-0xae;let _0x608495=_0xecdffd[_0xec078];return _0x608495;},_0xec07(_0x4fb17b,_0x3443c9);}function _0xecdf(){const _0x4dab6d=['../../common/config','12AsYXzX','locationName','4289527lTqNaC','../utilities/provision-miner','email','../utilities/slack-messaging','models','then','../utilities/locator','enableDHCPServer','31006OwjDtu','3TbpJZk','3738492pHRRQo','enableDiscoveryOnStartup','../utilities/dhcp-server','dataCenterSettings','530445pOSkir','start','5685519SmGNff','resolve','760143iYLFWG','init','16208CeDauB','30WeLOVv','4572jMkUPd','exports','../utilities/email','enableSlack'];_0xecdf=function(){return _0x4dab6d;};return _0xecdf();}const _0x527525=_0xec07;(function(_0x2694fb,_0x39e2f7){const _0x1907c7=_0xec07,_0x2b3ede=_0x2694fb();while(!![]){try{const _0x2d3e4d=parseInt(_0x1907c7(0xb8))/0x1*(-parseInt(_0x1907c7(0xb7))/0x2)+parseInt(_0x1907c7(0xc1))/0x3*(-parseInt(_0x1907c7(0xca))/0x4)+parseInt(_0x1907c7(0xbd))/0x5+parseInt(_0x1907c7(0xb9))/0x6+parseInt(_0x1907c7(0xbf))/0x7+-parseInt(_0x1907c7(0xc3))/0x8*(-parseInt(_0x1907c7(0xc5))/0x9)+parseInt(_0x1907c7(0xc4))/0xa*(-parseInt(_0x1907c7(0xaf))/0xb);if(_0x2d3e4d===_0x39e2f7)break;else _0x2b3ede['push'](_0x2b3ede['shift']());}catch(_0x34672f){_0x2b3ede['push'](_0x2b3ede['shift']());}}}(_0xecdf,0x91099));const dhcp=require(_0x527525(0xbb)),locator=require(_0x527525(0xb5)),ws=require('../utilities/ws-server'),email=require(_0x527525(0xc7)),{compareMinerStatus,discoverMiners,setDataCenterSettings}=require(_0x527525(0xb0)),config=require(_0x527525(0xc9)),{slackMessage,enableSlack}=require(_0x527525(0xb2));module[_0x527525(0xc6)]=function(_0x37426b){const _0x37ac26=_0x527525;var _0x430731=_0x37426b[_0x37ac26(0xb3)][_0x37ac26(0xbc)];return _0x430731['updateAll']({'active':!![]},{'staticAssignment':!![],'configureMode':0x1})[_0x37ac26(0xb4)](()=>_0x430731['findOne']({'active':!![]}))[_0x37ac26(0xb4)](_0x5a29b8=>{const _0x57f36d=_0x37ac26,{dhcpSettings:_0x4891c4,networkScanInterval:_0x2712fe,useArpTable:_0x1e403d}=_0x5a29b8;ws[_0x57f36d(0xbe)](),email[_0x57f36d(0xc2)](_0x5a29b8[_0x57f36d(0xb1)]),enableSlack(_0x5a29b8[_0x57f36d(0xc8)]),setDataCenterSettings(_0x5a29b8);let _0x372ead=_0x5a29b8[_0x57f36d(0xba)]?discoverMiners:function(){const _0x24840d=_0x57f36d;return Promise[_0x24840d(0xc0)](null);};return _0x372ead(_0x4891c4)[_0x57f36d(0xb4)](()=>{const _0x273754=_0x57f36d;locator['start'](_0x4891c4,_0x2712fe),dhcp['start'](_0x4891c4,_0x5a29b8[_0x273754(0xb6)]);const _0x25be8f='['+_0x5a29b8['locationID']+']\x20miner\x20performance\x20inspection\x20enabled\x20at\x20'+_0x5a29b8[_0x273754(0xae)];slackMessage({'text':_0x25be8f}),_0x2712fe&&(compareMinerStatus(_0x4891c4,!![],!_0x1e403d),setInterval(function(){compareMinerStatus(_0x4891c4,![],!_0x1e403d);},_0x2712fe));});});};