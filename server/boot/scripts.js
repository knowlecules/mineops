/* Copyright (C) 9208-9721 Quebec, Inc - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written by Jason Rudland <jason.g.rudland@gmail.com>, September 2022
*/'use strict';function _0x1c2e(_0x29aeae,_0x4b6588){const _0x4b358f=_0x4b35();return _0x1c2e=function(_0x1c2e1d,_0x1b9a8){_0x1c2e1d=_0x1c2e1d-0x6b;let _0x79b5e7=_0x4b358f[_0x1c2e1d];return _0x79b5e7;},_0x1c2e(_0x29aeae,_0x4b6588);}const _0x4a19ef=_0x1c2e;(function(_0x47cfe3,_0x698af){const _0xb5b326=_0x1c2e,_0x3084a4=_0x47cfe3();while(!![]){try{const _0x445035=-parseInt(_0xb5b326(0x84))/0x1+-parseInt(_0xb5b326(0x70))/0x2+-parseInt(_0xb5b326(0x6b))/0x3+parseInt(_0xb5b326(0x7a))/0x4+parseInt(_0xb5b326(0x75))/0x5+parseInt(_0xb5b326(0x7d))/0x6*(-parseInt(_0xb5b326(0x6e))/0x7)+parseInt(_0xb5b326(0x78))/0x8;if(_0x445035===_0x698af)break;else _0x3084a4['push'](_0x3084a4['shift']());}catch(_0x4e9ec2){_0x3084a4['push'](_0x3084a4['shift']());}}}(_0x4b35,0x2af1b));const dhcp=require('../utilities/dhcp-server'),locator=require(_0x4a19ef(0x81)),ws=require(_0x4a19ef(0x80)),email=require(_0x4a19ef(0x74)),{compareMinerStatus,discoverMiners,setDataCenterSettings}=require(_0x4a19ef(0x7b)),config=require(_0x4a19ef(0x7e)),{slackMessage,enableSlack}=require(_0x4a19ef(0x6f));module[_0x4a19ef(0x71)]=function(_0x285c7a){const _0x2f8f62=_0x4a19ef;var _0xc8be5c=_0x285c7a['models']['dataCenterSettings'];return _0xc8be5c[_0x2f8f62(0x6d)]({'active':!![]},{'staticAssignment':!![],'configureMode':0x1})[_0x2f8f62(0x7f)](()=>_0xc8be5c['findOne']({'active':!![]}))[_0x2f8f62(0x7f)](_0x65f747=>{const _0x3ea829=_0x2f8f62,{dhcpSettings:_0x21eceb,networkScanInterval:_0x34ea56,useArpTable:_0x18c966}=_0x65f747;ws['start'](),email[_0x3ea829(0x76)](_0x65f747[_0x3ea829(0x77)]),enableSlack(_0x65f747[_0x3ea829(0x7c)]),setDataCenterSettings(_0x65f747);let _0x4c07c4=_0x65f747[_0x3ea829(0x83)]?discoverMiners:function(){const _0xce61c8=_0x3ea829;return Promise[_0xce61c8(0x82)](null);};return _0x4c07c4(_0x21eceb)['then'](()=>{const _0x296182=_0x3ea829;locator[_0x296182(0x72)](_0x21eceb,_0x34ea56),dhcp['start'](_0x21eceb,_0x65f747[_0x296182(0x73)]);const _0x5d9496='['+_0x65f747[_0x296182(0x6c)]+']\x20miner\x20performance\x20inspection\x20enabled\x20at\x20'+_0x65f747[_0x296182(0x79)];slackMessage({'text':_0x5d9496}),_0x34ea56&&(compareMinerStatus(_0x21eceb,!![],!_0x18c966),setInterval(function(){compareMinerStatus(_0x21eceb,![],!_0x18c966);},_0x34ea56));});});};function _0x4b35(){const _0x380a28=['enableDHCPServer','../utilities/email','520810NjRpHE','init','email','5756872gIwWQJ','locationName','149728PIIhwL','../utilities/provision-miner','enableSlack','164298EwVSTX','../../common/config','then','../utilities/ws-server','../utilities/locator','resolve','enableDiscoveryOnStartup','97455NRruLz','804636yqGFNe','locationID','updateAll','7XKXeeP','../utilities/slack-messaging','584508jCMGjs','exports','start'];_0x4b35=function(){return _0x380a28;};return _0x4b35();}