/* Copyright (C) 9208-9721 Quebec, Inc - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written by Jason Rudland <jason.g.rudland@gmail.com>, September 2022
*/'use strict';const _0x2d7208=_0x3d29;function _0x47fb(){const _0x19241d=['locationID','entries','rack','accountName','8oneJhQ','minerVersion','minerCode','85YNPzSt','forEach','333UuGbLs','position','minerName','424208pCUBYh','\x5cs*%>','model','hall','AccountName','minerModel','5366760BHtwhw','exports','cabinetName','shelf','code','set','toString','version','388060cbIVld','288QrUIgu','5274726mAUcut','8969219jpiJDl','minerIndex','3301672jrNeAp','workerTypeNumber','The\x20template\x20cannot\x20be\x20empty.','name','wallet.','4237wruNXU','toUpperCase','replace'];_0x47fb=function(){return _0x19241d;};return _0x47fb();}function _0x3d29(_0x42eb7e,_0x400a18){const _0x47fb52=_0x47fb();return _0x3d29=function(_0x3d2978,_0x2d6cbb){_0x3d2978=_0x3d2978-0x180;let _0x5bb078=_0x47fb52[_0x3d2978];return _0x5bb078;},_0x3d29(_0x42eb7e,_0x400a18);}(function(_0x5d9f8f,_0x384ede){const _0x40b570=_0x3d29,_0x297beb=_0x5d9f8f();while(!![]){try{const _0x515ce3=parseInt(_0x40b570(0x191))/0x1*(-parseInt(_0x40b570(0x188))/0x2)+parseInt(_0x40b570(0x1a6))/0x3+-parseInt(_0x40b570(0x1a0))/0x4*(parseInt(_0x40b570(0x19b))/0x5)+-parseInt(_0x40b570(0x189))/0x6+-parseInt(_0x40b570(0x18a))/0x7*(-parseInt(_0x40b570(0x198))/0x8)+-parseInt(_0x40b570(0x19d))/0x9*(-parseInt(_0x40b570(0x187))/0xa)+-parseInt(_0x40b570(0x18c))/0xb;if(_0x515ce3===_0x384ede)break;else _0x297beb['push'](_0x297beb['shift']());}catch(_0x2e2994){_0x297beb['push'](_0x297beb['shift']());}}}(_0x47fb,0xdf16e));function replaceTokensWithValues(_0x419e15=null,_0x179186=new Map()){const _0x15e87c=_0x3d29;if(_0x419e15===null)throw new Error(_0x15e87c(0x18e));const _0x43cd8c=[..._0x179186[_0x15e87c(0x195)]()]['reduce']((_0x4e827b,_0x2cfec0)=>{const _0x5243de=_0x15e87c,[_0x41e9da,_0x5e0baa]=_0x2cfec0,_0x159c06=new RegExp('<%=\x5cs*'+_0x41e9da+_0x5243de(0x1a1),'g');return _0x4e827b[_0x5243de(0x193)](_0x159c06,_0x5e0baa);},_0x419e15);return _0x43cd8c;}function getTokenValueMapper({dataCenterSettings:_0x358328,wallets:wallets=[],minerInfo:minerInfo={},minerTyped:_0xe23740}){const _0x4d68a9=_0x3d29,_0x1994f0=new Map(),{cabinetName:_0x5c3744,minerIndex:_0x204813,placement:_0x2e4ff6}=minerInfo;_0x5c3744&&(_0x1994f0['set'](_0x4d68a9(0x181),_0x5c3744),_0x1994f0[_0x4d68a9(0x184)](_0x4d68a9(0x18b),_0x204813));if(_0x2e4ff6){const {hall:_0x4b66c1,rack:_0xa51893,shelf:_0x3aa009,position:_0x46e36b}=_0x2e4ff6;_0x1994f0[_0x4d68a9(0x184)](_0x4d68a9(0x1a3),_0x4b66c1),_0x1994f0[_0x4d68a9(0x184)](_0x4d68a9(0x196),_0xa51893),_0x1994f0[_0x4d68a9(0x184)](_0x4d68a9(0x182),_0x3aa009),_0x1994f0[_0x4d68a9(0x184)](_0x4d68a9(0x19e),_0x46e36b);}_0x1994f0[_0x4d68a9(0x184)]('workerTypeNumber',(minerInfo[_0x4d68a9(0x18d)]||'')[_0x4d68a9(0x185)]()[_0x4d68a9(0x193)](/[^a-z0-9]/i,'')),_0x1994f0[_0x4d68a9(0x184)](_0x4d68a9(0x19a),(minerInfo[_0x4d68a9(0x183)]||'')[_0x4d68a9(0x185)]()['replace'](/[^a-z0-9]/i,'')),_0x1994f0[_0x4d68a9(0x184)](_0x4d68a9(0x19f),(minerInfo[_0x4d68a9(0x18f)]||'')[_0x4d68a9(0x185)]()['replace'](/[^a-z0-9]/i,'')),_0x1994f0['set'](_0x4d68a9(0x1a5),(_0xe23740[_0x4d68a9(0x1a2)]||'')[_0x4d68a9(0x185)]()[_0x4d68a9(0x193)](/[^a-z0-9]/i,'')),_0x1994f0[_0x4d68a9(0x184)](_0x4d68a9(0x199),(_0xe23740[_0x4d68a9(0x186)]||'')[_0x4d68a9(0x185)]()[_0x4d68a9(0x193)](/[^a-z0-9]/i,'')),_0x1994f0['set'](_0x4d68a9(0x194),_0x358328[_0x4d68a9(0x194)]),_0x1994f0[_0x4d68a9(0x184)]('accountName',(minerInfo[_0x4d68a9(0x197)]||'')['toString']()['replace'](/[^a-z0-9]/i,''));let _0x538905=minerInfo[_0x4d68a9(0x197)];return _0x538905=_0x538905['substr'](0x0,0x1)[_0x4d68a9(0x192)]()+_0x538905['substr'](0x1),_0x1994f0[_0x4d68a9(0x184)](_0x4d68a9(0x1a4),_0x538905),wallets[_0x4d68a9(0x19c)](({walletID:_0x58d57f,coinCode:_0x19d788})=>{const _0x4360e9=_0x4d68a9;_0x1994f0[_0x4360e9(0x184)](_0x4360e9(0x190)+_0x19d788,_0x58d57f);}),_0x1994f0;}module[_0x2d7208(0x180)]={'replaceTokensWithValues':replaceTokensWithValues,'getTokenValueMapper':getTokenValueMapper};