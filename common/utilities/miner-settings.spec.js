/* Copyright (C) 9208-9721 Quebec, Inc - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written by Jason Rudland <jason.g.rudland@gmail.com>, September 2022
*/'use strict';const _0x19982a=_0x1a29;function _0x1a29(_0x4b4d0d,_0xa0069a){const _0x54ac73=_0x54ac();return _0x1a29=function(_0x1a29f6,_0x599f69){_0x1a29f6=_0x1a29f6-0x19c;let _0x6212e6=_0x54ac73[_0x1a29f6];return _0x6212e6;},_0x1a29(_0x4b4d0d,_0xa0069a);}function _0x54ac(){const _0x2df83e=['Number\x20of\x20pools\x20exceeded.\x20You\x20can\x20configure\x20up\x20to\x20','Specify\x20at\x20least\x20one\x20pool.','SHOULD\x20not\x20throw','WHEN\x20at\x20least\x20one\x20pool\x20pool\x20is\x20passed\x20in\x20to\x20buildSetMinerSettingsRequestBody','WHEN\x20three\x20pools\x20are\x20passed\x20in\x20to\x20buildSetMinerSettingsRequestBody','WHEN\x20a\x20null\x20IP\x20address\x20is\x20passed\x20to\x20getMinerSettingsUrl','&_ant_pool2user=','65qKEDfF','internet','Miner\x20IP\x20address\x20cannot\x20be\x20null.','fill','userName','faker','toThrow','&_ant_pool1user=','&_ant_pool3user=','toEqual','&_ant_pool3url=','SHOULD\x20return\x20a\x20valid\x20raw\x20form\x20body\x20for\x20the\x20miner\x20settings\x20update\x20endpoint.','besthashing.com:3333','&_ant_pool2pw=','11588ZXPhca','./miner-settings','&_ant_pool2url=','not','5025265dwmHtj','Miner\x20Settings\x20Utilities','WHEN\x20one\x20pool\x20pool\x20is\x20passed\x20in\x20to\x20buildSetMinerSettingsRequestBody','20778igNIin','WHEN\x20no\x20config\x20is\x20passed\x20in\x20to\x20buildSetMinerSettingsRequestBody','1704144eKmyCD','_ant_pool1url=','&_ant_nobeeper=false&_ant_notempoverctrl=false&_ant_fan_customize_switch=false&_ant_fan_customize_value=&_ant_freq=0&','password','url','SHOULD\x20return\x20a\x20valid\x20configuration','&_ant_pool3pw=','SHOULD\x20throw','12213072NriMug','947463NQHPBN','9454720otISBe','6FEuSnK','&_ant_pool1pw=','\x20pools.','1405UeYrMk'];_0x54ac=function(){return _0x2df83e;};return _0x54ac();}(function(_0x2689ed,_0x3bc4b5){const _0x497d26=_0x1a29,_0x4fbea3=_0x2689ed();while(!![]){try{const _0x1bece2=-parseInt(_0x497d26(0x1a1))/0x1*(parseInt(_0x497d26(0x1b6))/0x2)+-parseInt(_0x497d26(0x1c1))/0x3+-parseInt(_0x497d26(0x1af))/0x4*(-parseInt(_0x497d26(0x1c6))/0x5)+parseInt(_0x497d26(0x1c3))/0x6*(parseInt(_0x497d26(0x1b3))/0x7)+-parseInt(_0x497d26(0x1b8))/0x8+parseInt(_0x497d26(0x1c0))/0x9+-parseInt(_0x497d26(0x1c2))/0xa;if(_0x1bece2===_0x3bc4b5)break;else _0x4fbea3['push'](_0x4fbea3['shift']());}catch(_0x43b2bf){_0x4fbea3['push'](_0x4fbea3['shift']());}}}(_0x54ac,0xb4824));const faker=require(_0x19982a(0x1a6)),{buildSetMinerSettingsRequestBody,getUpdateMinerSettingsUrl,DEFAULT_MINER_FREQUENCY,DEFAULT_MINER_VOLTAGE,MAX_POOLS}=require(_0x19982a(0x1b0));describe(_0x19982a(0x1b4),()=>{const _0x3f7c7b=_0x19982a;describe(_0x3f7c7b(0x1b7),()=>{it('SHOULD\x20throw',()=>{const _0x20589f=_0x1a29;expect(()=>{buildSetMinerSettingsRequestBody();})['toThrow'](_0x20589f(0x1c8));});}),describe('WHEN\x20no\x20pools\x20are\x20defined\x20in\x20the\x20config\x20passed\x20in\x20to\x20buildSetMinerSettingsRequestBody',()=>{const _0x4835a1=_0x3f7c7b;it(_0x4835a1(0x1bf),()=>{const _0x94289=_0x4835a1;expect(()=>{buildSetMinerSettingsRequestBody({});})[_0x94289(0x1a7)]('Specify\x20at\x20least\x20one\x20pool.');});}),describe('WHEN\x20more\x20than\x20'+MAX_POOLS+'\x20pools\x20are\x20passed\x20in\x20to\x20buildSetMinerSettingsRequestBody',()=>{const _0x574570=_0x3f7c7b;it(_0x574570(0x1bf),()=>{const _0x18d6ae=_0x574570;expect(()=>{const _0xbddac=_0x1a29,_0x231166=new Array(0x4)[_0xbddac(0x1a4)]('');buildSetMinerSettingsRequestBody({'pools':_0x231166});})['not'][_0x18d6ae(0x1a7)](_0x18d6ae(0x1c7)+MAX_POOLS+_0x18d6ae(0x1c5));});}),describe(_0x3f7c7b(0x19d),()=>{const _0xd10da3=_0x3f7c7b;it(_0xd10da3(0x19c),()=>{const _0x23190a=_0xd10da3;expect(()=>{const _0x161f03=_0x1a29,_0x196599=[{'index':0x1,'url':faker['internet'][_0x161f03(0x1bc)](),'username':faker[_0x161f03(0x1a2)][_0x161f03(0x1a5)](),'password':faker[_0x161f03(0x1a2)]['password']()}];buildSetMinerSettingsRequestBody({'pools':_0x196599});})[_0x23190a(0x1b2)][_0x23190a(0x1a7)]();});}),describe(_0x3f7c7b(0x1b5),()=>{const _0x38e3df=_0x3f7c7b;it(_0x38e3df(0x1bd),()=>{const _0x3e52c5=_0x38e3df,_0x21204e=_0x3e52c5(0x1ad),_0x49b332=faker[_0x3e52c5(0x1a2)]['userName'](),_0x24734d=faker[_0x3e52c5(0x1a2)]['password'](),_0x1f4214=[{'index':0x1,'stratum':_0x21204e,'username':_0x49b332,'password':_0x24734d}],_0x3caf87='_ant_pool1url='+encodeURIComponent(_0x21204e)+_0x3e52c5(0x1a8)+encodeURIComponent(_0x49b332)+_0x3e52c5(0x1c4)+encodeURIComponent(_0x24734d)+'&_ant_pool2url=&_ant_pool2user=&_ant_pool2pw=&_ant_pool3url=&_ant_pool3user=&_ant_pool3pw=&_ant_nobeeper=false&_ant_notempoverctrl=false&_ant_fan_customize_switch=false&_ant_fan_customize_value=&_ant_freq=0&',_0x25a430=buildSetMinerSettingsRequestBody({'pools':_0x1f4214});expect(_0x25a430)[_0x3e52c5(0x1aa)](_0x3caf87);});}),describe('WHEN\x20two\x20pools\x20are\x20passed\x20in\x20to\x20buildSetMinerSettingsRequestBody',()=>{const _0x8998d0=_0x3f7c7b;it(_0x8998d0(0x1ac),()=>{const _0x2f52d7=_0x8998d0,_0x3954ce=faker['internet']['url'](),_0x576ccc=faker[_0x2f52d7(0x1a2)][_0x2f52d7(0x1a5)](),_0x1a3e98=faker['internet']['password'](),_0x444eba=faker[_0x2f52d7(0x1a2)][_0x2f52d7(0x1bc)](),_0x413573=faker[_0x2f52d7(0x1a2)][_0x2f52d7(0x1a5)](),_0x109e09=faker[_0x2f52d7(0x1a2)]['password'](),_0x1a7e30=[{'index':0x1,'stratum':_0x3954ce,'username':_0x576ccc,'password':_0x1a3e98},{'index':0x2,'stratum':_0x444eba,'username':_0x413573,'password':_0x109e09}],_0x5adc69=_0x2f52d7(0x1b9)+encodeURIComponent(_0x3954ce)+'&_ant_pool1user='+encodeURIComponent(_0x576ccc)+_0x2f52d7(0x1c4)+encodeURIComponent(_0x1a3e98)+_0x2f52d7(0x1b1)+encodeURIComponent(_0x444eba)+_0x2f52d7(0x1a0)+encodeURIComponent(_0x413573)+_0x2f52d7(0x1ae)+encodeURIComponent(_0x109e09)+'&_ant_pool3url=&_ant_pool3user=&_ant_pool3pw=&_ant_nobeeper=false&_ant_notempoverctrl=false&_ant_fan_customize_switch=false&_ant_fan_customize_value=&_ant_freq=0&',_0x1ea127=buildSetMinerSettingsRequestBody({'pools':_0x1a7e30});expect(_0x1ea127)[_0x2f52d7(0x1aa)](_0x5adc69);});}),describe(_0x3f7c7b(0x19e),()=>{const _0x310c23=_0x3f7c7b;it(_0x310c23(0x1ac),()=>{const _0xcf6eb2=_0x310c23,_0x360ffc=faker[_0xcf6eb2(0x1a2)]['url'](),_0x2aca31=faker['internet'][_0xcf6eb2(0x1a5)](),_0x459126=faker[_0xcf6eb2(0x1a2)]['password'](),_0x194c11=faker[_0xcf6eb2(0x1a2)][_0xcf6eb2(0x1bc)](),_0x3e2d31=faker[_0xcf6eb2(0x1a2)][_0xcf6eb2(0x1a5)](),_0x274f0d=faker[_0xcf6eb2(0x1a2)][_0xcf6eb2(0x1bb)](),_0x495264=faker[_0xcf6eb2(0x1a2)][_0xcf6eb2(0x1bc)](),_0x35fa12=faker['internet'][_0xcf6eb2(0x1a5)](),_0x1d2aa2=faker[_0xcf6eb2(0x1a2)][_0xcf6eb2(0x1bb)](),_0x531086=[{'index':0x1,'stratum':_0x360ffc,'username':_0x2aca31,'password':_0x459126},{'index':0x2,'stratum':_0x194c11,'username':_0x3e2d31,'password':_0x274f0d},{'index':0x3,'stratum':_0x495264,'username':_0x35fa12,'password':_0x1d2aa2}],_0x5b8680=_0xcf6eb2(0x1b9)+encodeURIComponent(_0x360ffc)+_0xcf6eb2(0x1a8)+encodeURIComponent(_0x2aca31)+_0xcf6eb2(0x1c4)+encodeURIComponent(_0x459126)+_0xcf6eb2(0x1b1)+encodeURIComponent(_0x194c11)+_0xcf6eb2(0x1a0)+encodeURIComponent(_0x3e2d31)+_0xcf6eb2(0x1ae)+encodeURIComponent(_0x274f0d)+_0xcf6eb2(0x1ab)+encodeURIComponent(_0x495264)+_0xcf6eb2(0x1a9)+encodeURIComponent(_0x35fa12)+_0xcf6eb2(0x1be)+encodeURIComponent(_0x1d2aa2)+_0xcf6eb2(0x1ba),_0x53fd97=buildSetMinerSettingsRequestBody({'pools':_0x531086});expect(_0x53fd97)[_0xcf6eb2(0x1aa)](_0x5b8680);});}),describe('WHEN\x20no\x20IP\x20address\x20is\x20passed\x20to\x20getMinerSettingsUrl',()=>{const _0x4d9d8c=_0x3f7c7b;it(_0x4d9d8c(0x1bf),()=>{const _0x5a2401=_0x4d9d8c;expect(()=>{getMinerSettingsUrl();})[_0x5a2401(0x1a7)](_0x5a2401(0x1a3));});}),describe(_0x3f7c7b(0x19f),()=>{const _0x4227bd=_0x3f7c7b;it(_0x4227bd(0x1bf),()=>{const _0x45181e=_0x4227bd;expect(()=>{getMinerSettingsUrl();})[_0x45181e(0x1a7)](_0x45181e(0x1a3));});});});