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

var precacheConfig = [["2018/10/13/hello-world/index.html","bbe2985a34b1db4448112bd1f0b92375"],["2018/10/13/文本换行/index.html","0828a9482204f58db07c5387874fac93"],["2018/10/15/css实现轮播/index.html","bae03df26565b05ddd252dd82cdaab9d"],["2018/10/15/puppeteer-API备忘/index.html","184b95f10193b7321697646f68262476"],["2018/10/17/DOM操作/index.html","3fabdb04dfe45e1b62c0735e196dc772"],["2018/10/18/rust语法备忘/index.html","d36b52fbf55294c45df3998c37aea8d4"],["2018/10/18/typeORM学习/index.html","650384bea825c9e5bfee869356f3a3a5"],["2018/10/25/typescript知识点/index.html","ef2bc6ba0e560d43c51a034dfa84de05"],["2018/10/25/小程序思考/index.html","7f5e17bb87ebcaf9980b2e9a995d0d70"],["2018/10/29/angular指令/index.html","077d75b11aef2624c5a9539100a4a5b5"],["2018/10/31/css动画/index.html","fa9443562613da454a269115687ea15d"],["2018/10/31/css布局/index.html","be67e1cf4faa856ce2ef00500d3c7e86"],["2018/11/01/angular生命周期/index.html","02a555dd21e4ed5e4c6da75a28adee24"],["2018/11/01/angular组件交互/index.html","df119562142c7170e0c9558a89a6d1d2"],["2018/11/02/angular模板语法/index.html","65386ae2c5ecbbf4e37f3c0e7c6be78c"],["2018/11/03/mysql命令行/index.html","ffe4a3b68342a03ee31acacf64a7a229"],["2018/11/04/css知识点/index.html","06d052aa30ba273fe9b67e549b075c99"],["2018/11/14/nest学习/index.html","d42821549156ffa55fe3a13d540d68a1"],["2018/11/18/js注意点/index.html","1c9dd7718c2d25bb1f7805810e5fd04e"],["2018/11/21/工作bug总结/index.html","86b272aa27e5b34f3a6804a0441e754f"],["2018/11/22/mongodb学习/index.html","9f59a2b755868f1133d766540f96d5a8"],["2018/11/26/react坑/index.html","d8c1c67980b6220ec3b2278f2ba7ddba"],["2018/11/27/typescript实践/index.html","8d4411c0de8492d02ccf0be405580e92"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","c2a46ddc830b1f021dd55292f82931b1"],["2018/12/01/vue学习/index.html","c0a91d00dbaf3287f71e510439bf243e"],["2018/12/07/nodejs the right way 一/index.html","2d8081865fc8039739ffb8b55828e3a3"],["2018/12/07/react生态基本使用笔记/index.html","6eee1dbc7e2fc269ccacacff1662682c"],["2018/12/11/rn基础一/index.html","ce27b85ac031c41f61a11bf1d31db4c1"],["2018/12/11/函数式一/index.html","63c22584fa0692941904d65598ffb551"],["2018/12/12/nodejs之process/index.html","c0b36dec0eedd4d8f62b23287acffc91"],["2018/12/12/node事件循环/index.html","07df2ad3b9ab3dc6d1d8c1e3c45b716b"],["2018/12/13/elasticsearch/index.html","fa334c3d6d3274a8a3d185104e4857aa"],["2018/12/13/express/index.html","71fae6bf459b707e7bb1596f0adfe13f"],["2018/12/18/小程序性能优化/index.html","04cea30fdc0f2cb7fbf8ee5ae5335f15"],["2018/12/20/express2之database/index.html","e0f15731b3b246bed99019a9a6da475e"],["2018/12/26/flutter学习1/index.html","3d6ca6daa20f4b108fa124ff7b388eca"],["2018/12/27/flutter之包管理/index.html","0964c4779b9f871817ae5198ba86fa9d"],["2018/12/28/express测试/index.html","2b8d897b9f071b6fe70089bf2b4e391d"],["2018/12/28/flutter之widget基础/index.html","e4e9be606e05b07be71f909c9704e08a"],["2018/12/29/Express值请求体中间件解析/index.html","af283949988b020467c753b67f56e958"],["2019/01/02/express开发小结/index.html","b07b37911e4c6c59bb788dc050b72205"],["2019/01/05/dart基础1/index.html","78f2dfcc6d70a345c0373b9b47037809"],["2019/01/05/dart基础2/index.html","ad6c2daf6b1e45774614d6e0b11eb97c"],["2019/01/07/dart基础3/index.html","7b6dbb9fb7955e4715f61d739cbf1067"],["2019/01/07/express学习/index.html","739813f9315369a1b0e5fc36a76c8105"],["2019/01/09/Flutter之文本/index.html","150b35224f1ab28e457c3d7bd827e745"],["2019/01/11/Flutter之按钮/index.html","d4bdcfe50cb50b64f18e73d1220f3cda"],["2019/01/11/flutter之图片和icon/index.html","b8eb85d1c6e666d1fce98b1711cda7ec"],["2019/01/14/next-js学习/index.html","757e26084a04c015702cbfbfce5899f0"],["2019/01/15/flutter之弹性布局Flex/index.html","fea82df95396ab5240659b6a09fff647"],["2019/01/15/flutter线性布局/index.html","39e10e1237cdb581deff1a95d6a47468"],["2019/01/15/rust2/index.html","82378526488f5af83cc9c3fffc48e635"],["2019/01/20/express-ts上手记1/index.html","4156821d13ec65bf1175a891f9059614"],["2019/01/21/react遇上typescript/index.html","2cad78f34c57d1783bf795fd7ea4f7f5"],["2019/01/26/新点总结/index.html","448d32fb00aacaf8cd025fdb5431845f"],["2019/02/11/angular架构概览/index.html","9be11b708b5eb83d4956c3aee03ed4a8"],["2019/03/28/promise相关/index.html","af3d789737b8e6ddf33912db58d07c46"],["2019/03/28/实现一个sleep方法/index.html","6c887eb1882db76d44dfaf940b6c5beb"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","4c5cbc6072cabc9b1cec906747ad93f0"],["2019/04/02/证书可信任/index.html","24848a3e4504a057795171174b201bb1"],["2019/04/09/从一道题目谈谈跨域/index.html","07963a00404e0729f29790f47920f148"],["2019/04/18/关于滚动吸顶/index.html","e56e7a940b5211ea70368b3f8aa1c42b"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","aab4aeec42d4f9b41d1511157e01a0d2"],["2019/04/23/深入理解padding/index.html","541af2349268638651453ede6909c7e3"],["2019/04/24/css题目/index.html","41088c40f8820d294dacd463eafa299c"],["2019/04/24/js题目/index.html","54ed0707bd14139c1c757a19f526c6e5"],["2019/04/25/好吧-EventLoop/index.html","cb1f0223fd0fcce043b42143952e862d"],["2019/04/26/轮播图实现/index.html","e0d54e212d6395b97020e0d14ff7766e"],["2019/04/27/深入理解margin/index.html","f05de5ed0f67b724615c53182f5d1f43"],["2019/05/07/FirstPaint/index.html","90de46d44c18113ca90be76c8f116a2a"],["2019/05/14/图片懒加载/index.html","635b51739ef895a0678e58c184eed615"],["2019/05/16/typescript学习二/index.html","361e032680fc5845b2afbbcdc679dd33"],["2019/05/16/利用原生JS实现简易的v-model/index.html","951a282ce7bf24589d1fcc25f1efb303"],["2019/05/16/利用原生JS实现简易的vue/index.html","a7ba140d5a570b985ec56d66e6b5fc5e"],["2019/05/16/利用原生js实现数据代理/index.html","faec78b4bb947d2b14b163a889e5e360"],["archives/2018/10/index.html","792c03616540a3e73905db2d535ee3df"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","c131ac2084e491a71522ab51ac07234f"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","59dc7dadda55937eaf50e24ed97188b9"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","6292c08164d7a923126152573416410e"],["archives/2018/page/2/index.html","130a4d04d58b7df904c275ff7590ab0b"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","20a9d1be76ef346dc5534f265793be4e"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","8af0e9233a6b38007599006d9a1611b3"],["archives/2019/03/index.html","cc11bd06c2d34a16ca8d0c0277a4693e"],["archives/2019/04/index.html","0d0bbb4376a5d0e4abe5bb32e0982c4b"],["archives/2019/05/index.html","616f2eeb372ed661f1dbdd4dc62564e5"],["archives/2019/index.html","72efe87f4e020022fc12361f6c59497b"],["archives/2019/page/2/index.html","8cc79cca5780b534839fb36ad16b9f1d"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","987319b6492f4b321c538aa10372f672"],["archives/page/2/index.html","cefd96c5a0a9d1e16a8b686fac35feaf"],["archives/page/3/index.html","1ebd87721a8b87fd1c849fea7cbe5dc1"],["archives/page/4/index.html","2a5cfb6edd66e1c6d4b5a05629a3b0f3"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","a4bb0cabb7fbd4fdd826408e02f523d0"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","c45daa566e7fd4901d1c26c67729dfbf"],["page/3/index.html","d6d1f2df45e231f96b0d38b56d0894fe"],["page/4/index.html","eba225f4731128f754951f8c46bf2c4c"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["sw.js","f80f590a85e160790aade3175dca29bd"],["tags/JS/index.html","bf6834b946c863f8bf8d5d3ed52d948e"],["tags/ReactNative/index.html","7c5c17b68662aa514e81aca873c25ebb"],["tags/Rust/index.html","64f7e57fe75a92eefc86b773edb75cc1"],["tags/angular/index.html","7b1b70cbae630ace404a44caebceb800"],["tags/css/index.html","2a321785317d6d06bd386c8576d824df"],["tags/dart/index.html","348e6144503f7bc8b9867816a49e0f6f"],["tags/express/index.html","ef806e900df7c404c1540d1e07308e9d"],["tags/flutter/index.html","0fd276f739fa773787d9e76f8c617767"],["tags/https/index.html","0e63cd9a5a6697feaa802d34a26725c7"],["tags/javascript/index.html","cd3439bbc55d228e1ddc5669622e8654"],["tags/mongodb/index.html","4d20c1ca638f1c6a856b0c2852af0ccc"],["tags/mysql/index.html","03cc8fce8ebf87aed6b0f58c289cd7a0"],["tags/nest/index.html","d4964c9852430528bb11f04ddf19c8fa"],["tags/nestjs/index.html","e74fb1bc98c8ac284bf58a0985a571cd"],["tags/next-js/index.html","414fcce4259d62c4bf3e34439de821f4"],["tags/node/index.html","ddff57d8ad0c840adf3591e82c13d236"],["tags/nodejs/index.html","22cec3bd146b7b62338b7bfb59e3f506"],["tags/puppeteer/index.html","64f291adceab6c50e8ecb7d98829d66f"],["tags/react/index.html","8fdac045ef89f44514b75321a29be1bd"],["tags/typeORM/index.html","136658dbb4e78f9541ab45a2f888e723"],["tags/typescript/index.html","cb573252a0aba5ef85295b5a41546e35"],["tags/web/index.html","e17c0041db1c2139684955d2465746c7"],["tags/work/index.html","9ed10e70472db48a8716bb7db993f32b"],["tags/wxProgram/index.html","143d8d1a0256db00735c9dabbe8cbd68"],["tags/效果/index.html","e471073cf00806602add1e24732f10a3"]];
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







