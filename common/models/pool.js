/* Copyright (C) 9208-9721 Quebec, Inc - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written by Jason Rudland <jason.g.rudland@gmail.com>, September 2022
*/'use strict';const _0x326bf9=_0x553e;function _0x553e(_0x2fdf6b,_0x1c3c96){const _0x248da0=_0x248d();return _0x553e=function(_0x553efe,_0x4db5bb){_0x553efe=_0x553efe-0x1af;let _0x5bd041=_0x248da0[_0x553efe];return _0x5bd041;},_0x553e(_0x2fdf6b,_0x1c3c96);}(function(_0x16166f,_0x34a9bd){const _0x7aabfa=_0x553e,_0x4ffba5=_0x16166f();while(!![]){try{const _0x271897=parseInt(_0x7aabfa(0x1bb))/0x1*(-parseInt(_0x7aabfa(0x1b7))/0x2)+-parseInt(_0x7aabfa(0x1b2))/0x3*(-parseInt(_0x7aabfa(0x1b3))/0x4)+parseInt(_0x7aabfa(0x1b5))/0x5+-parseInt(_0x7aabfa(0x1af))/0x6*(parseInt(_0x7aabfa(0x1ba))/0x7)+parseInt(_0x7aabfa(0x1b8))/0x8*(-parseInt(_0x7aabfa(0x1b1))/0x9)+parseInt(_0x7aabfa(0x1b6))/0xa+parseInt(_0x7aabfa(0x1b0))/0xb;if(_0x271897===_0x34a9bd)break;else _0x4ffba5['push'](_0x4ffba5['shift']());}catch(_0x480193){_0x4ffba5['push'](_0x4ffba5['shift']());}}}(_0x248d,0xb7bab));function _0x248d(){const _0x2b590a=['91240EZSutd','A\x20valid\x20straturm\x20url\x20is\x20required,\x20e.g.\x20stratum+tcp://test.acme.com:1111','119868KwuKME','514393YrCBCq','6PMcYuE','5009433opmaQW','99UqHVxQ','3DHfQkp','1646144uQQRel','stratum','1227945qlDQSS','2969990QmJUjJ','2yOFaoJ'];_0x248d=function(){return _0x2b590a;};return _0x248d();}const reStratumUrl=/^(stratum\+tcp:\/\/)?((?:\d{1,3}\.){3}\d{1,3}|([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?)(:\d+)?$/,validStratumUrlRequiredErrorMessage=_0x326bf9(0x1b9);module['exports']=function(_0x3898bf){const _0x21fc5d=_0x326bf9;_0x3898bf['validatesFormatOf'](_0x21fc5d(0x1b4),{'with':reStratumUrl,'message':validStratumUrlRequiredErrorMessage});};