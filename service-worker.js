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

var precacheConfig = [["2018/10/13/hello-world/index.html","cabfba5ddcafd15cba0d453b7cfe2fec"],["2018/10/13/文本换行/index.html","8b879024cc5df1bc3e35b03120a85a90"],["2018/10/15/css实现轮播/index.html","1ae378aa76f239178c5f64c7d396efef"],["2018/10/15/puppeteer-API备忘/index.html","f9286510b00aa84ecd0aee5e53d4f43d"],["2018/10/17/DOM操作/index.html","cbff5f8e3224a1a3efb995a27cdb8601"],["2018/10/18/rust语法备忘/index.html","3913559695c544f9f014ea056991f2c6"],["2018/10/18/typeORM学习/index.html","f64c749a3dfb5830ad4d601293e1ba55"],["2018/10/25/typescript知识点/index.html","3a46d2730d2c2e74a9dea84354af61ee"],["2018/10/25/小程序思考/index.html","40e5b28fbaa942b186ac1eb1582d9792"],["2018/10/29/angular指令/index.html","326ecb6d44125be5832b9368bc8b11dd"],["2018/10/31/css动画/index.html","1357bb256bdbc51b7cecb3c27fa1b029"],["2018/10/31/css布局/index.html","bb32b0ba27c440f55ca3012e4237b82f"],["2018/11/01/angular生命周期/index.html","ab8e73ce26e94eaa0c5d5e99a989ee58"],["2018/11/01/angular组件交互/index.html","03476dab1bccb6085e5edaa1c21b980e"],["2018/11/02/angular模板语法/index.html","48336aecadc4df309b44572111fa579a"],["2018/11/03/mysql命令行/index.html","d0a863428d8930eea4a68727b7285b7e"],["2018/11/04/css知识点/index.html","3a67fb02ae4ae65cf0988396f17f906c"],["2018/11/14/nest学习/index.html","3822edf52bc7d56f2873d2e7e474b332"],["2018/11/18/js注意点/index.html","7bc0cc22c9342a316e64db156cd44347"],["2018/11/21/工作bug总结/index.html","f9b9f447644aabf47afe7a74cd0f1892"],["2018/11/22/mongodb学习/index.html","0fe3a8d5524a37eb47de32980e5b5799"],["2018/11/26/react坑/index.html","5c1f0ca6b52faec405ad9f56b72c9a9d"],["2018/11/27/typescript实践/index.html","d42316f211c7c10fb8a85819acd81e79"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","e58bc2a563256ace918c89096abeda58"],["2018/12/01/vue学习/index.html","053b84d94981c1a690d926e178ce6650"],["2018/12/07/nodejs the right way 一/index.html","babf18dc9778029c2ea9e22b263c958a"],["2018/12/07/react生态基本使用笔记/index.html","7c35ff28c107c45e294d49f5a5df75bf"],["2018/12/11/rn基础一/index.html","5c2d1aab94c268b72875f4221dfacab9"],["2018/12/11/函数式一/index.html","f380a00b7880acda6bf3bec9eb8b59e7"],["2018/12/12/nodejs之process/index.html","3fefcded6657aa1e2950443c58c3ebd9"],["2018/12/12/node事件循环/index.html","b22d8c35dc92f39fa1e255808da3b254"],["2018/12/13/elasticsearch/index.html","a593603ceae820435720184c7d1d6ea8"],["2018/12/13/express/index.html","bdb9d68db32b343256cc3bd58bc39f5b"],["2018/12/18/小程序性能优化/index.html","00b44ab44e8aebb6ff3c2c05ea2d4064"],["2018/12/20/express2之database/index.html","aea0f5c82dbaa219104e497ba24fa0ee"],["2018/12/26/flutter学习1/index.html","7b6db5605ad6bbb3d5a07a3e3a4c7232"],["2018/12/27/flutter之包管理/index.html","41418eadf941a8e233c4e71fc9d53b24"],["2018/12/28/express测试/index.html","d73c363ad52b4d088d2c2f4e0a7889d3"],["2018/12/28/flutter之widget基础/index.html","4bc19ebb7085ae31881c6df2211bce70"],["2018/12/29/Express值请求体中间件解析/index.html","55a9b5346674bb2d19eba2fabf104d09"],["2019/01/02/express开发小结/index.html","b4cb257064c728ee8eafdb60cd80e377"],["2019/01/05/dart基础1/index.html","5ae299be1ff2a3cf4f9374d083a9a8a2"],["2019/01/05/dart基础2/index.html","b31db0076510d2c59cf71d24574feee4"],["2019/01/07/dart基础3/index.html","fae79bc34594b95713d49ab7e0e80ef3"],["2019/01/07/express学习/index.html","400f6cb198ff879878e8d5411fce21a9"],["2019/01/09/Flutter之文本/index.html","d03adb23c5fb44309c0dbfaf40539eaa"],["2019/01/11/Flutter之按钮/index.html","c0ad41118b051bafb00bac904fc5c666"],["2019/01/11/flutter之图片和icon/index.html","71fd54dffd70c74f98a6569159e40652"],["2019/01/14/next-js学习/index.html","9252dde964cef1f479ef67774dfb3204"],["2019/01/15/flutter之弹性布局Flex/index.html","6a764a83b417800e767678dfece88bd0"],["2019/01/15/flutter线性布局/index.html","211a88b33d3cf2d73265c77b6289381d"],["2019/01/15/rust2/index.html","2755bf05f40223d7ff157edc34e7fbf7"],["2019/01/20/express-ts上手记1/index.html","cb4bb5b0331e519328b2d34f964032d2"],["2019/01/21/react遇上typescript/index.html","440d7408c5acba716b3aa2f467acde63"],["2019/01/26/新点总结/index.html","d171252f4b172829f02913781bff79cc"],["2019/02/11/angular架构概览/index.html","c66548fd04d776dd8000179e227ed7fe"],["2019/03/28/promise相关/index.html","826b5f76873910da479c26c74fcab020"],["2019/03/28/实现一个sleep方法/index.html","b0bd1902e04c8175e4fc87f0f3053ed9"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","7bb2b7efe46ccd0679697477df5551ad"],["2019/04/02/证书可信任/index.html","65e477ae4565dd86fbf2ca9137d7cbb2"],["2019/04/09/从一道题目谈谈跨域/index.html","297035f6d12b1b42165505b355a086ec"],["2019/04/18/关于滚动吸顶/index.html","08f13ef790d6b846184fbb9b36bd778a"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","d5ba36eaba4b2c9268c261516381f5ce"],["2019/04/23/深入理解padding/index.html","4c3c9bc8f8cc79e18f7681e30b1f0344"],["2019/04/24/css题目/index.html","6f8abd99271f3c903edcf5cc84cbcc28"],["2019/04/24/js题目/index.html","0e5be074ae21d9cbcb0e21fd4a604fd5"],["2019/04/25/好吧-EventLoop/index.html","94a8c0eb1fc945d1ab6e7a8494cb986d"],["2019/04/26/轮播图实现/index.html","c10bb6a6a5efa616c9661f2c599f9e29"],["2019/04/27/深入理解margin/index.html","acd9a020fc652e091ec4720a1e5c195d"],["2019/05/07/FirstPaint/index.html","13f9c8b5d423862c2eb7f0b56a4d2c0d"],["archives/2018/10/index.html","6c2e4d72f7d7de97689ab2a2d30b9782"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","2478991fbeb16f7d2d3a827d176bc256"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","892982f8a496194bf7cfad4f46120b39"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","ca03b952e8ffdc9e8034c8e37c2037c5"],["archives/2018/page/2/index.html","d1df3c88759186bca73aab04b8a2cd5d"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","a2f07dafbc8b2d4fadae7432c278f738"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","0d6df948d29a86ec59e3cb035cf31fc7"],["archives/2019/03/index.html","b6f5a3267f19ec3d0f35dc42c8d57d17"],["archives/2019/04/index.html","f9777da840161127bdd984313a17d816"],["archives/2019/05/index.html","5b8476e6d20255685d547d978cbe45ce"],["archives/2019/index.html","b7644f615d291b91932bf911e1620310"],["archives/2019/page/2/index.html","5813d4f15c6afc8a61e1f4b52f61c4e6"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","f28d2d9db009d82c6f2e6f71a4823d48"],["archives/page/2/index.html","ea71c2949d024c21060191746ffae0fd"],["archives/page/3/index.html","65938ae8738d668927a6d30540e74221"],["archives/page/4/index.html","2a5cfb6edd66e1c6d4b5a05629a3b0f3"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","37891a0f6f934443ec1cf7e3bb2dd359"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","d8d14425796a3332defd8d215c7d89d8"],["page/3/index.html","dae7913de39f04b0b7e25125463469d4"],["page/4/index.html","eba225f4731128f754951f8c46bf2c4c"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["sw.js","7ff6422ab320d031c301cd3af27e25d5"],["tags/JS/index.html","964d559d281d8c0d52281c21d073412b"],["tags/ReactNative/index.html","cd1c1bd7442d8aff203c7ceb4f8b004b"],["tags/Rust/index.html","348c4e582c1de84400a96f53ab320114"],["tags/angular/index.html","522d86e78a2f19050962805ace263308"],["tags/css/index.html","f6c6fc3db12ad322b19ec58fcbf518a3"],["tags/dart/index.html","5db6f6edbbe69aa792916b44c265616f"],["tags/express/index.html","3877e0d841f8584212e2fe6505ed54fe"],["tags/flutter/index.html","43acdec6d57d06f57d81ce02fc9ada3c"],["tags/https/index.html","6b81c364af4bf11951974dd17c0f4552"],["tags/javascript/index.html","09e11f968f36fcd040173f1315279fdc"],["tags/mongodb/index.html","3cfe84024fff7ba0851b521bbf3815c1"],["tags/mysql/index.html","4c7b4453b4f1e1856ab246678cfd264f"],["tags/nest/index.html","5fc0254c8b05670b1fd44a4337e39c80"],["tags/nestjs/index.html","d2e0f5a155e4eb1ec4c467c098f0d1d1"],["tags/next-js/index.html","e7df4da5cd569f172774cad37f7eb201"],["tags/node/index.html","eaa3a931f68c5e8636ae5bef8bef5b78"],["tags/nodejs/index.html","bfee281e621345442c0a0b542da59ded"],["tags/puppeteer/index.html","0c4229620959db6d9ee11b354a6801d7"],["tags/react/index.html","de7120ac1823d4328c5d9f05e3489537"],["tags/typeORM/index.html","32d070d6dbf822cf6e167328b48c05e5"],["tags/typescript/index.html","6cabe414803e298adb41ebdc31f66cf4"],["tags/web/index.html","8c78fa1ed2fbbb0ab7daf50ce9d77063"],["tags/work/index.html","115562303f30804ed28abbff6c64e7ff"],["tags/wxProgram/index.html","e1ff6bee6264e85659b55c10759e61ee"],["tags/效果/index.html","e311d5ac62c0f21fbbefef83653f673e"]];
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







