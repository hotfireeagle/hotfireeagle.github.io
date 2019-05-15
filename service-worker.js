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

var precacheConfig = [["2018/10/13/hello-world/index.html","521c615e08996fa20610c8482204cb43"],["2018/10/13/文本换行/index.html","466caa48563a8f049c372b50b658e131"],["2018/10/15/css实现轮播/index.html","5b252666006388876a2d3c36eb58c1f4"],["2018/10/15/puppeteer-API备忘/index.html","4f7c4acfd0a641d5638d14eade75fbd9"],["2018/10/17/DOM操作/index.html","6d737fbe8b80288049dac67e1edb8b07"],["2018/10/18/rust语法备忘/index.html","9182c444d2ed3d77abeefadaac27d2c8"],["2018/10/18/typeORM学习/index.html","a5e85936c987a194b4dcf74d27b5ccb6"],["2018/10/25/typescript知识点/index.html","1b8b0834e9d7016886df818ab489fcf6"],["2018/10/25/小程序思考/index.html","18e2799608f39ffa2e1156fa6ecf0a36"],["2018/10/29/angular指令/index.html","7cff820836d050de69f4b22fcae3e97d"],["2018/10/31/css动画/index.html","4790a1c31514abaf826b7152695a358d"],["2018/10/31/css布局/index.html","db7ee0a52df629229d8c8d075a98fde6"],["2018/11/01/angular生命周期/index.html","fbfda5f38436c83ed3862205045c0133"],["2018/11/01/angular组件交互/index.html","f53c4e2f53add65778e3bf8b93ab603a"],["2018/11/02/angular模板语法/index.html","f068e4f6985a626b65e021e64cec416f"],["2018/11/03/mysql命令行/index.html","3685db6bc14d1aed7aa2324e0f9632b8"],["2018/11/04/css知识点/index.html","e5d0c59e3dde7829fb63a4b1cb15fc17"],["2018/11/14/nest学习/index.html","811d9ba59ccf706c2e1ef6ffa05c5581"],["2018/11/18/js注意点/index.html","a14e41e51f04b05ca0d8fb0779ac25cf"],["2018/11/21/工作bug总结/index.html","aa649a6ca60752f3ae6f72ed4f230e7c"],["2018/11/22/mongodb学习/index.html","57f7115ff1e7984c89e299551cb7cc1d"],["2018/11/26/react坑/index.html","8ee12c389f752fa2f37f02b5aa195f56"],["2018/11/27/typescript实践/index.html","f9339ff8a8ec5193cca5154955a1defe"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","898fbffbcfe15968a25de5345b5943be"],["2018/12/01/vue学习/index.html","e677512922c8bfc90139ac60053b7255"],["2018/12/07/nodejs the right way 一/index.html","6b04716187013773af3431f58e43536c"],["2018/12/07/react生态基本使用笔记/index.html","68cee0fefb58964b9d8563249871ebdb"],["2018/12/11/rn基础一/index.html","b0b42dc7d86248ac4db03920d6e239e8"],["2018/12/11/函数式一/index.html","d66fb782b733cec1b9e1d938b70b6993"],["2018/12/12/nodejs之process/index.html","dcf09db86df30885e2b8d446c8100f9b"],["2018/12/12/node事件循环/index.html","4f895aeea389fcf63df9bdb974304200"],["2018/12/13/elasticsearch/index.html","9833c8e34d92bbb26fc9f3fab65c6735"],["2018/12/13/express/index.html","3e27c8178f59ea3503bd5502dc12ce66"],["2018/12/18/小程序性能优化/index.html","ad8c26f4345e96de176881580c004369"],["2018/12/20/express2之database/index.html","3de709e4076eab80e1d14396441e3f1e"],["2018/12/26/flutter学习1/index.html","3ba3d0e771bfbd3b80d6778fa637b4bd"],["2018/12/27/flutter之包管理/index.html","256a7f767de006a5cf413ff6d3ed261a"],["2018/12/28/express测试/index.html","672d8da9d9a67090ad6a5aa5886cdeb0"],["2018/12/28/flutter之widget基础/index.html","532f3c5e6a2fbe000302e89083305fed"],["2018/12/29/Express值请求体中间件解析/index.html","acda64016cf5569a83b40304e05f6576"],["2019/01/02/express开发小结/index.html","2a7790425affa4689e30d41d47d7c886"],["2019/01/05/dart基础1/index.html","951d013cb2c6a7640b7db29669fcedc8"],["2019/01/05/dart基础2/index.html","82a45189c22e677738239b831d64eab0"],["2019/01/07/dart基础3/index.html","3cd70405557e66d25ebf74a2428b40fd"],["2019/01/07/express学习/index.html","c61f7c31b550fffe51b7e7942951d5f2"],["2019/01/09/Flutter之文本/index.html","9cdd6200be6947d585384c549b60fbfa"],["2019/01/11/Flutter之按钮/index.html","66b9accf4a8c61b6ea94f1de69e4ad27"],["2019/01/11/flutter之图片和icon/index.html","2dd41913aaa158344694a2f431a632fe"],["2019/01/14/next-js学习/index.html","ce70a112dd9a71b3bf60b00227dca9de"],["2019/01/15/flutter之弹性布局Flex/index.html","577824d41c034a889e0b7a74c7c70c65"],["2019/01/15/flutter线性布局/index.html","f6cedadc19dba9d8676457b88a5aef65"],["2019/01/15/rust2/index.html","7f8aaa0f7fc5d8c0345290656c17e501"],["2019/01/20/express-ts上手记1/index.html","c7c7d83aab3066d71aa9c34cc6616fdb"],["2019/01/21/react遇上typescript/index.html","37997b1138606113ea2d62840756ab7c"],["2019/01/26/新点总结/index.html","4c49b0b00e9be1da1235f8c8f9f1bc35"],["2019/02/11/angular架构概览/index.html","159fdb3def53b497d245c1216e40d7e8"],["2019/03/28/promise相关/index.html","bbf8c2c585910cae1441ffaf3c49cff5"],["2019/03/28/实现一个sleep方法/index.html","9a961b6a37e02edfd03bdf64597c248a"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","ca91131432b9de0c5d851fe99f60f6da"],["2019/04/02/证书可信任/index.html","8a21e7928e7c1de28df014e9e314df9b"],["2019/04/09/从一道题目谈谈跨域/index.html","cf2e448ce063d571f87e3cf288efad62"],["2019/04/18/关于滚动吸顶/index.html","158039be07a4b45721fde8f9b70e003a"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","05f57825a487c27f5a3a019195634539"],["2019/04/23/深入理解padding/index.html","2994e291a36028b89d63f4352e427135"],["2019/04/24/css题目/index.html","f52f635edbdebffa6ac9092e43f469ef"],["2019/04/24/js题目/index.html","3093f595212c1ce1b12e64067c238b3b"],["2019/04/25/好吧-EventLoop/index.html","e649053069ecb48638ecfdd8c36788b0"],["2019/04/26/轮播图实现/index.html","548a4a6b4c40227b09ec5834eba53781"],["2019/04/27/深入理解margin/index.html","2126705d81e52ca0031598816fcd6bfe"],["2019/05/07/FirstPaint/index.html","212b85538b2ea8cf8c8f31c49dfbdce9"],["2019/05/14/图片懒加载/index.html","4d951e56a5e49a4ffcfda6c67f9bbfb6"],["archives/2018/10/index.html","29b316ce671b98a67e3e88ca6d6d7ec1"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","68f95eba7dcce1a1886cf985511feb24"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","3a47776a194eaff9f6b7b31f6c64d008"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","970bc5d8e5f2b796d218a68a81f494e5"],["archives/2018/page/2/index.html","c85f4ce6e55e181287e8fff16bbd8d04"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","7c670dd9990fdcc0d165d47e52c8ee64"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","37c09341d275742de3d73f33501305c2"],["archives/2019/03/index.html","b34d52fe856e091745fa2d3494eb7ad4"],["archives/2019/04/index.html","706dfbca48b4a2c10e6f6c14c9279055"],["archives/2019/05/index.html","0d7fbc6cfb31abe9e0dace6c3eef3f41"],["archives/2019/index.html","5227d42cb5eea0beffaa73ad4351ae70"],["archives/2019/page/2/index.html","718a6f3fe632fd4790866aa37785cb6d"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","b4a9de55d0999ec540ab2b66a47d6659"],["archives/page/2/index.html","78470f2e8906b25536725d5d4e279814"],["archives/page/3/index.html","91cc7229857e2e765fd1a3fd5d3ef5c6"],["archives/page/4/index.html","2a5cfb6edd66e1c6d4b5a05629a3b0f3"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","e93be987c7c1d1f6c6dd5f6b388847f1"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","fd607ca95fb5505d660109353731a3b2"],["page/3/index.html","ac23db6ab7089969323f476deaa8036b"],["page/4/index.html","eba225f4731128f754951f8c46bf2c4c"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["sw.js","3ac25d9d33d07a122340dd5ae3d81e49"],["tags/JS/index.html","4c47f6f73d82b5620554b89b503506ca"],["tags/ReactNative/index.html","3986004617ab6c2ac982a87fb05e220c"],["tags/Rust/index.html","90135e7d6a9b4e92e112f2b39439e4b0"],["tags/angular/index.html","4caafe4f527580dadcbb72332f8e8ac3"],["tags/css/index.html","7e7e23bd7d262a7d6f81766bbf221706"],["tags/dart/index.html","1d65b57248a4971af9da32040977c9ff"],["tags/express/index.html","81e40a4da7cc82a11af52ae0e119d374"],["tags/flutter/index.html","5853b8fa9ffb8d102dc0d42d59b89570"],["tags/https/index.html","2f5f8bbe760b58da6cc5392ae388b4d6"],["tags/javascript/index.html","1d228b2e1a6ab29290878169e8e9f1f8"],["tags/mongodb/index.html","60434e947d5b64ff6cf8861ab47438e4"],["tags/mysql/index.html","2b30ee0dd529de0d647a5400a7241908"],["tags/nest/index.html","72bd96cae3636f85b9d0c59b58347c34"],["tags/nestjs/index.html","66c39bba6cedaccbdffd1da81ee4910d"],["tags/next-js/index.html","10edd273eb62fbfd38e5e5e588fa6bda"],["tags/node/index.html","a215b60aefcd5d77e850a7388462df09"],["tags/nodejs/index.html","4d3e8aa38a87f11d1c2b649859dd4959"],["tags/puppeteer/index.html","f838797b1ace2ed58bb9b438d2e1b827"],["tags/react/index.html","9ffaa43744aa65f072ab1190650eabf6"],["tags/typeORM/index.html","133e03c7316c94bd750a0d23980d2022"],["tags/typescript/index.html","e6b5ebe82d5cf0fa9d2567bc9405b3bd"],["tags/web/index.html","c16bd2b8bf4ea82d1f5b1b9dfb43e77b"],["tags/work/index.html","5bb9242b05717239b3d07b481238d41c"],["tags/wxProgram/index.html","badde29b28d907a6048e6047838c4462"],["tags/效果/index.html","5c954947cc03a34ef57d43423bd2cf87"]];
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







