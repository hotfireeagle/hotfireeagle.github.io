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

var precacheConfig = [["2018/10/13/hello-world/index.html","6fb2e82b6a507e50ca0f61f3853ac962"],["2018/10/13/文本换行/index.html","2127e73049579240ac5fe98d5ac8d63c"],["2018/10/15/css实现轮播/index.html","be5ada0f8e4a2184264bd83f20c3062c"],["2018/10/15/puppeteer-API备忘/index.html","c145f78f281d8d7bd99e61faaa0d531b"],["2018/10/17/DOM操作/index.html","149b28d32caa2274aefc253536faf17f"],["2018/10/18/rust语法备忘/index.html","34ca2869511eeec65a093e354cd9e3c9"],["2018/10/18/typeORM学习/index.html","e80de2bab70df2ca1e13345547c6dbf2"],["2018/10/25/typescript知识点/index.html","1a23a976539bc451ed1bbcd56b131895"],["2018/10/25/小程序思考/index.html","e2c91a7e74655816542d83ca688d0957"],["2018/10/29/angular指令/index.html","6ec940b1c4ba725e685144641bb5467d"],["2018/10/31/css动画/index.html","0c6b786f1e1b5291ec66238aa468af3c"],["2018/10/31/css布局/index.html","56149491a9c7b8b7289c2f693ad3414c"],["2018/11/01/angular生命周期/index.html","4daf6066f344d9087fa8e3721d3f8c88"],["2018/11/01/angular组件交互/index.html","edafb667c5721c069216e707a4c58a2f"],["2018/11/02/angular模板语法/index.html","30b345c12ebd3b96ddb1964c37d8a179"],["2018/11/03/mysql命令行/index.html","873b8afa26c92c6727c601f0311bea03"],["2018/11/04/css知识点/index.html","c61059705a6551dfcdd27d41b6464c3f"],["2018/11/14/nest学习/index.html","5e20db574ac6fad97e49b28832307563"],["2018/11/18/js注意点/index.html","0211ddd06c2f42d077435296fa57dce8"],["2018/11/21/工作bug总结/index.html","b1e82d99fbb16ccbf3440242a741f704"],["2018/11/22/mongodb学习/index.html","83fcfef7328e6d4b2283c6bf9af1882f"],["2018/11/26/react坑/index.html","635dc32e9ba8741da1e05d915d0e3fd1"],["2018/11/27/typescript实践/index.html","c3293bbb7358f99ef4a154832e746b28"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","6741fd237aaed622ed857a721f165081"],["2018/12/01/vue学习/index.html","b03112ddc6cd523790e7931634e72c95"],["2018/12/07/nodejs the right way 一/index.html","74cb55226dc46356aa35dc2302550ed2"],["2018/12/07/react生态基本使用笔记/index.html","6789fcac6c4419bf273749392536f83e"],["2018/12/11/rn基础一/index.html","8c6cfff0175165c440148081bfbd107b"],["2018/12/11/函数式一/index.html","993a4c41d3154b349d5c38caf9052120"],["2018/12/12/nodejs之process/index.html","88ca1913607b8807970af140b37e1bae"],["2018/12/12/node事件循环/index.html","79cd96187c2b64ab10c92d7470a06aa7"],["2018/12/13/elasticsearch/index.html","a6b45d0fb51ce1f91a1b26865646f209"],["2018/12/13/express/index.html","aac469086cf899aca9b517a29a76867e"],["2018/12/18/小程序性能优化/index.html","7ab0615a06ca9a335177ef3361ef03cd"],["2018/12/20/express2之database/index.html","f29b5cde478bf15cc53ecbac79e2c5c7"],["2018/12/26/flutter学习1/index.html","c597c205dc8f17fcf4cce11bf8d81fc9"],["2018/12/27/flutter之包管理/index.html","599a36b1cae773193713aa8b7b5d54ae"],["2018/12/28/express测试/index.html","b8ebd7a31e9cdbc6a6eca9a8d68b2c64"],["2018/12/28/flutter之widget基础/index.html","3d15cedd65af5405bf3339ffbd76c28a"],["2018/12/29/Express值请求体中间件解析/index.html","722c1a610510d3eca53a9841e68314ab"],["2019/01/02/express开发小结/index.html","8b40e24fb95bf88ecd1c75ec07d67826"],["2019/01/05/dart基础1/index.html","e29e9bcda3c065fa448518aa1a27a856"],["2019/01/05/dart基础2/index.html","d8f4265cb7a513e52667959bc5edec50"],["2019/01/07/dart基础3/index.html","20bbe8d44c57c4e5f2bb43caeb61d1c9"],["2019/01/07/express学习/index.html","65d3ffe39e938911cdb3e030da5805a1"],["2019/01/09/Flutter之文本/index.html","b8404e537eb01588433f89276f08b76b"],["2019/01/11/Flutter之按钮/index.html","47962b440790a08d0d9956c3631f08c5"],["2019/01/11/flutter之图片和icon/index.html","75da8de243bda1943181131920982b7b"],["2019/01/14/next-js学习/index.html","892aef9ba8b0c4859352207436b32355"],["2019/01/15/flutter之弹性布局Flex/index.html","247e6abd2264fb81591bbdf8ed8f2fae"],["2019/01/15/flutter线性布局/index.html","4c470ec4fa6882b00d778bf98f503b74"],["2019/01/15/rust2/index.html","98af3782cc1f47b9f0935e1cd3a68aba"],["2019/01/20/express-ts上手记1/index.html","3b44a65fe949d0af3f5f0f4d072908c8"],["2019/01/21/react遇上typescript/index.html","01761af2c924b82bb1d9d28b331ad7e5"],["2019/01/26/新点总结/index.html","b3ee5746dd1d6057ed192677873a992f"],["2019/02/11/angular架构概览/index.html","496583031cc98d28b4e45edd81f78938"],["2019/03/28/promise相关/index.html","485eb91a0a6f9d95bbb05d6668c8bfbd"],["2019/03/28/实现一个sleep方法/index.html","8aa2e5c8cbac15eb1127d66b727a2ace"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","d1c02e303ed5fedf4df5e5d662525da0"],["2019/04/02/证书可信任/index.html","d90e718c286ae8b96330533ea7612400"],["2019/04/09/从一道题目谈谈跨域/index.html","a2739a3f312476efcc9373ccd749cc57"],["2019/04/18/关于滚动吸顶/index.html","2744c4c3027b992dcf1b08fbecf76786"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","cf67d7ed80effa63b57543091cb5a2c5"],["2019/04/23/深入理解padding/index.html","48adeabda00b872378158aa3a44ceb42"],["2019/04/24/css题目/index.html","121eb8f77ae498521d07e6ca07e3d861"],["2019/04/24/js题目/index.html","1b9f900965d41bee8af1c8ce54a424af"],["2019/04/25/好吧-EventLoop/index.html","98c7ca86f78c83ca5cf06f48177c4aa6"],["2019/04/26/轮播图实现/index.html","00b978329bd19809c2200fcf78c5934b"],["2019/04/27/深入理解margin/index.html","6dccc56f955a6f615bf1bed4a2d6cfc1"],["2019/05/07/FirstPaint/index.html","9353918ac7447c43a7554009529e3082"],["2019/05/14/图片懒加载/index.html","048109f0b9859501c08e869a6c00fe6e"],["archives/2018/10/index.html","0dc1668b784439190eaee125ae9cb9e6"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","754e100dc8b7b2a7202b027718f44945"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","bc5c4d9efbfebe620df3286c479fa8d8"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","b781ec4f413090b9d6d6accbc0f46826"],["archives/2018/page/2/index.html","a7bdd78eb0171598261a7db4664e1a50"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","03b5c32f795f10775556b2ee3011e7fa"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","2e9f73cf1cfb904bcce948572bc45c4d"],["archives/2019/03/index.html","88da0b8922f7c042fd8338a6b7438640"],["archives/2019/04/index.html","0e0186788a5b0cd900d5d43145fc6bcc"],["archives/2019/05/index.html","04edcca83cef10e4e55e7d459e4daf83"],["archives/2019/index.html","2a206b72d2fc571b2f9525346a4c8aad"],["archives/2019/page/2/index.html","17a1b80fce0fb0921fcfa4b5743d5e7d"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","a3fc2008751a3b374ddf88c07e9f1c7c"],["archives/page/2/index.html","14d3393a1221ea72cd9d704ae8c8d30c"],["archives/page/3/index.html","b1847d2dc748fc120d7a910f15844a5e"],["archives/page/4/index.html","2a5cfb6edd66e1c6d4b5a05629a3b0f3"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","e755b02365eb4594edc0f5a89f56c475"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","cd3465bf16c0d9de358c3d50808ca7ee"],["page/3/index.html","5e02515b8da5e491e39b8159100ef155"],["page/4/index.html","eba225f4731128f754951f8c46bf2c4c"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["sw.js","2690b520bd0b5f8d544084ba59cd3371"],["tags/JS/index.html","68e9416f16e56db6b8307807f61305d6"],["tags/ReactNative/index.html","a7f946c229a23bd2c2992681903b4f70"],["tags/Rust/index.html","2b52a1b2eb9108806d74074bc60ac875"],["tags/angular/index.html","b41ba3b636d5a96cf6d118de27445a7f"],["tags/css/index.html","66e64ee46c61a80d6c53949cf0896183"],["tags/dart/index.html","f3df79cef436eb9e67e9d7f19610350a"],["tags/express/index.html","3b471a5d13122e81cee08fe310de738d"],["tags/flutter/index.html","52b803739cc0ecf5259cbacfa51b6267"],["tags/https/index.html","b9e8314cca35857f82d82f8918bbaed2"],["tags/javascript/index.html","5a068f567ec2d77ba6b17088ca12048e"],["tags/mongodb/index.html","7d454427bb78619a634a15e85616a0d1"],["tags/mysql/index.html","c3f7e35caf350ffb02213f870a7f6f4e"],["tags/nest/index.html","8f24a82ee65c7b407c85dea1c89e9bd0"],["tags/nestjs/index.html","0db1643690303558a7dfb8cc677de0c4"],["tags/next-js/index.html","754c970aeb7d9bf018b6e44aa81b4018"],["tags/node/index.html","8fa944736de9153857b251d850d1338e"],["tags/nodejs/index.html","9a5b1aed7429846ee578ccda0e58d817"],["tags/puppeteer/index.html","240c2e44f934cf822ed1bd71e9b82c13"],["tags/react/index.html","4cae7a327debf564d3c89fdbf3b38497"],["tags/typeORM/index.html","5198f00df6a80f58f6d22e7f20e2ff54"],["tags/typescript/index.html","5f0f65ee301d81b321b5c4a037719353"],["tags/web/index.html","263b484055a6aa0ba85dc87e431a58c3"],["tags/work/index.html","08067cba7e19fe6f7c4c13918d03d034"],["tags/wxProgram/index.html","b6fd7d1d979ef9d8919b5db857e5a3cc"],["tags/效果/index.html","1305cc32629fc834af1dc61b20d5c6d4"]];
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







