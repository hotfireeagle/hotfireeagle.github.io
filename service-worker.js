/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2018/10/13/hello-world/index.html","89134bf2e6d396c1e65a9d100d259faf"],["2018/10/13/文本换行/index.html","930a0fbe75b67e496c804a7783f630b0"],["2018/10/15/css实现轮播/index.html","4a1e766811b59651e0f6615b1bffe360"],["2018/10/15/puppeteer-API备忘/index.html","426ead19d3b91980d270d61baa5c21a3"],["2018/10/17/DOM操作/index.html","a3b404475a9dbf8d3c40c637c7c3d2c0"],["2018/10/18/rust语法备忘/index.html","09f6055b43543109c7b54792cd2add23"],["2018/10/18/typeORM学习/index.html","35dd3769d14eafed4ed735946209b9c5"],["2018/10/25/typescript知识点/index.html","4204e2000a5110089d98e2c8a2e5474b"],["2018/10/25/小程序思考/index.html","0caa115a36f08dec0ac65496a2bdb6c9"],["2018/10/29/angular指令/index.html","834cd8f03d9155d09f86630ad2495000"],["2018/10/31/css动画/index.html","bb334efaa70ebfced0f7e82a920710e5"],["2018/10/31/css布局/index.html","f4c6c1b168bc5b3e992b176ef8d937e8"],["2018/11/01/angular生命周期/index.html","b91f99d341e73cbd1dbdf31a7a42595f"],["2018/11/01/angular组件交互/index.html","4b7c5bf374b8031ba7ff2effb706ee25"],["2018/11/02/angular模板语法/index.html","28a933e01018c41914eb8649b3ac14aa"],["2018/11/03/mysql命令行/index.html","64adbd425764f1723432df3de2ed40e5"],["2018/11/04/css知识点/index.html","e4cddd3d7fe24b8c3c5e9fde200c7eb1"],["2018/11/14/nest学习/index.html","5b67eefde9140f0fa8eb5d6f6798a3a1"],["2018/11/18/js注意点/index.html","fddaae98ae409416932426d2fb7d0f13"],["2018/11/21/工作bug总结/index.html","4a138bb3970e15f30774e5c3ce6eb2d1"],["2018/11/22/mongodb学习/index.html","352406398049da464b052f2bf2a495c3"],["2018/11/26/react坑/index.html","93b84d124aa98eb7fd025eef87dd8b41"],["2018/11/27/typescript实践/index.html","4b74b4f7bf288cebb8a84eb57b9471a8"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","335eca2802a778131a4e9d6a4743102e"],["2018/12/01/vue学习/index.html","235399fa14c9303da7cb04ed9385d57b"],["2018/12/07/nodejs the right way 一/index.html","5e380daef88294de242e1f1b5d8677c6"],["2018/12/07/react生态基本使用笔记/index.html","094a7ef1c4dc6db866c4f6b6c2c3b82f"],["2018/12/11/rn基础一/index.html","4bd61403e6747fb8d79f450d4fc20552"],["2018/12/11/函数式一/index.html","9e49e5ad5ab52c1c216f88fa92f9ed36"],["2018/12/12/nodejs之process/index.html","5133219702320443d4840a82901944c1"],["2018/12/12/node事件循环/index.html","fca1711ee8cbd338026143cd30eb002c"],["2018/12/13/elasticsearch/index.html","22d65aa722a47f0ea74028f09191c464"],["2018/12/13/express/index.html","371010e560a6b87e52acc9dec35f97f5"],["2018/12/18/小程序性能优化/index.html","16d0e537478cbb00025cc58fe7082229"],["2018/12/20/express2之database/index.html","645cd40da4a03140b223f534545cf019"],["2018/12/26/flutter学习1/index.html","b59b59ba735460973caf8d7853349c08"],["2018/12/27/flutter之包管理/index.html","c720997699e2cda41314b77f70dc4365"],["2018/12/28/express测试/index.html","eb6b187e4eae680917858024d6ef8754"],["2018/12/28/flutter之widget基础/index.html","e7dd6b88cd6fa6360765a38daa9f5106"],["2018/12/29/Express值请求体中间件解析/index.html","d29d0339fd8787c1bf9cd90c2705b62c"],["2019/01/02/express开发小结/index.html","4d8ee545c6e5447f0c46f2f9ddec8064"],["2019/01/05/dart基础1/index.html","c2882564c0f8b19ba6c850aeda7119e4"],["2019/01/05/dart基础2/index.html","74991dd5b3c0f49ebba9a1610762c404"],["2019/01/07/dart基础3/index.html","e7b3ebd69364fe1be6f588cab163fd2d"],["2019/01/07/express学习/index.html","806d28801bf65382ff65c809c2376f02"],["2019/01/09/Flutter之文本/index.html","4f14a54d3d9c73420443715988e4e319"],["2019/01/11/Flutter之按钮/index.html","e87c2280f1352371c48cc2f9259ecb10"],["2019/01/11/flutter之图片和icon/index.html","fd1570fdbd9983be594680ed60a48008"],["2019/01/14/next-js学习/index.html","660c5ea781966559198573fea7152d1f"],["2019/01/15/flutter之弹性布局Flex/index.html","e13018dfae9ec8df3fdd30ce29971746"],["2019/01/15/flutter线性布局/index.html","79fee07b292aab89d2cd42a66484a443"],["2019/01/15/rust2/index.html","d2a25f746a666fd082c7a4584bbd7559"],["2019/01/20/express-ts上手记1/index.html","af84b288c7bd273d3033cf3a470c7223"],["2019/01/21/react遇上typescript/index.html","a41aa8b02576b1ef748ef1533b8f9146"],["2019/01/26/新点总结/index.html","53ab5e09bb261b84dadfe88adad8de52"],["2019/02/11/angular架构概览/index.html","560f64be88481b14cac67c83d7d7b8f0"],["2019/03/28/promise相关/index.html","85f014781f3ffed96f0bd041d443acef"],["2019/03/28/实现一个sleep方法/index.html","baf4826b07d76d1e91e8fac1b4250598"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","a5471b9363f568672bd60acefc105138"],["2019/04/02/证书可信任/index.html","370596df2a510161ef397e3b7ea4f0f8"],["2019/04/09/从一道题目谈谈跨域/index.html","12a15694cafd24b0a006268c9de0bc9f"],["2019/04/18/关于滚动吸顶/index.html","34e0fa497dda94d1ec3f89cb55d9cb46"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","cd2502c0f41f7a0f41bc67b069ef959f"],["2019/04/23/深入理解padding/index.html","ccc93d61bc6abb5d61f4dd5ec47313d4"],["2019/04/24/css题目/index.html","b0e42a9f1ec3510b0c33584b827b652e"],["2019/04/24/js题目/index.html","fe3bcd6f02f11210e8f374c6f3afc2a3"],["2019/04/25/好吧-EventLoop/index.html","e7762cce996f8a2fbb8c62850ba57877"],["2019/04/26/轮播图实现/index.html","f57ed1479709213551ff4c2fe737f22d"],["2019/04/27/深入理解margin/index.html","ba1486bcd8001deb7bcb9fd1b6414ef6"],["2019/05/07/FirstPaint/index.html","fd5104c992a1777bd0fdb1c812ef1788"],["2019/05/14/图片懒加载/index.html","c1dd54caeff8f844d33ccb5e1a3bf863"],["2019/05/16/typescript学习二/index.html","61d53a6877cb5cac66521b0dec219b42"],["2019/05/16/利用原生JS实现简易的v-model/index.html","90329938fa390de4c17498b5321c5093"],["2019/05/16/利用原生JS实现简易的vue/index.html","a7ba140d5a570b985ec56d66e6b5fc5e"],["2019/05/16/利用原生js实现数据代理/index.html","faec78b4bb947d2b14b163a889e5e360"],["2019/05/22/typescript搭配react使用笔记1/index.html","c350f8673d94f7cd40d75c35d8c50b1c"],["2019/05/23/typescript-react学习笔记2/index.html","4c40a8671d6ef5eeec857d3bab673963"],["2019/05/26/typescript-react学习笔记3/index.html","9194f88ccddf004baebd08992dad552b"],["archives/2018/10/index.html","3186fd27e01fca5895e4955acee57ca8"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","a7be37d66aa73e9b21442f6533ecfc97"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","9a9b08beee14cd1c076952f13fa8933e"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","8fd792494feb829c81f560ec94b4b6ca"],["archives/2018/page/2/index.html","1ee83d7060ed4345c6f4dc3a0a121095"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","f1eeed367bcf4bcece1c8e45501e853e"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","9487130adea008f9a2d1ab94e9f9a7fb"],["archives/2019/03/index.html","b8d3e744b20108b3fe1196cec8c39197"],["archives/2019/04/index.html","16aada40402343760d0b241455b0af34"],["archives/2019/05/index.html","9c732a188778462e7bc584a52b1307a2"],["archives/2019/index.html","92e5d80087b0b3920c3df3184a71eb1b"],["archives/2019/page/2/index.html","3ccba6ddc8b5c0d08202f40dffe27a88"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","77ec7ced8ad10a7622ddfc1b605e0a19"],["archives/page/2/index.html","f050de52ca433013c5f7bc1ac429c5e0"],["archives/page/3/index.html","acc6ef6e352f912b72dbdf9f33cda735"],["archives/page/4/index.html","86c483b3745d0209dce36b5cccd775f2"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","47b1a22a69b22a73ff518596feeb2715"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","023695e623eb57df573cca481ea2cb9b"],["page/3/index.html","08fce971c4b1c7b8a2ec1e01342f1362"],["page/4/index.html","c39728a2806d1215d3526372593642eb"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["sw.js","5f18efed1960714cc6029f134862b18d"],["tags/JS/index.html","16d7f74c5cce5c9e327f0a8906ca5f7a"],["tags/ReactNative/index.html","18aaa60fd0d3cef6161f09852052d26d"],["tags/Rust/index.html","0faa4c9ccfcaee19ab5153d9f4cf87e0"],["tags/angular/index.html","28a5de09b64a554210908dbc1f191ea7"],["tags/css/index.html","1ba5a5855f33c1bbf278fea105696223"],["tags/dart/index.html","05f37c3229ee845e61b6e32834e126b2"],["tags/express/index.html","b45f4e3b82324cc34fd68152a1a936cd"],["tags/flutter/index.html","890fa2cdde8a493d1b7845083ae024c1"],["tags/https/index.html","410e6105fda05cdcd4d5c96aac8e7757"],["tags/javascript/index.html","28077a87efff4654af759ef8aaed67ec"],["tags/mongodb/index.html","9b2ba4771ec8edf75022beca79852d00"],["tags/mysql/index.html","fe0183cbb5192e97e0ce40a5f5960320"],["tags/nest/index.html","5ae553399567842dcb6d2f07b1cc608d"],["tags/nestjs/index.html","afc81d3631d5eb54fc67630deb2325b9"],["tags/next-js/index.html","855011d9b4b346623213e938f4d06a1a"],["tags/node/index.html","3bce71eb0408165ab172f8250115803e"],["tags/nodejs/index.html","80b03c623d44d02de4fc4b88195809a5"],["tags/puppeteer/index.html","0d7edf414fddbd5025ef4badbd7f85d6"],["tags/react/index.html","df7ba4355eb46f7c01dc8b3e629a6cc2"],["tags/typeORM/index.html","b4965faf851c179fc408c7abe8fbfa07"],["tags/typescript/index.html","8868cf05b12892f64d28c8200abf1687"],["tags/web/index.html","7e7c26d12ace968d5cfc4c6e60b3bcfe"],["tags/work/index.html","a327ef9559e521157a7175af582a8039"],["tags/wxProgram/index.html","df70f3b71cf51bc7cf6ab98a6f81b219"],["tags/效果/index.html","da3be29b681a55de5084abcc0566b1ac"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







