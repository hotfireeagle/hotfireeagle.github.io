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

var precacheConfig = [["2018/10/13/hello-world/index.html","fd2af5c1cf07aee2a7aa0f1c6cf3dc78"],["2018/10/13/文本换行/index.html","b1bf8d6fbb9cae112713d158be98ac29"],["2018/10/15/css实现轮播/index.html","da26ae63995cb9ee48fc36c86b3c221e"],["2018/10/15/puppeteer-API备忘/index.html","947f21e4bdb804116745f04e9641e2ae"],["2018/10/17/DOM操作/index.html","f4cb5cbc530920dc1d060f44992ce02a"],["2018/10/18/rust语法备忘/index.html","70b64f1514577323429c3a7bbd1d7211"],["2018/10/18/typeORM学习/index.html","5c0802b2f5fbb806088380b4bdb50108"],["2018/10/25/typescript知识点/index.html","229fdb0fa755d041b4bb0cfe4aa250aa"],["2018/10/25/小程序思考/index.html","ff172d77d37b1e7b3f988b74103dead4"],["2018/10/29/angular指令/index.html","d1f132d6fab3951da6698c249460ead3"],["2018/10/31/css动画/index.html","fc95d006c0f226c1b0c0d37684ecb623"],["2018/10/31/css布局/index.html","58fc7e5de7cabc0adb385e9c2334530a"],["2018/11/01/angular生命周期/index.html","1ec050f53013dc6bb5a6f9ded1154424"],["2018/11/01/angular组件交互/index.html","47c5b811d6ca8705022ec084cbf81330"],["2018/11/02/angular模板语法/index.html","df1af0caa7288b8ad0360aad1589713d"],["2018/11/03/mysql命令行/index.html","450f6db4d0d997d887da52a13d321f29"],["2018/11/04/css知识点/index.html","ee9e00d9d9044b0f5d9a3b4cf3af7a30"],["2018/11/14/nest学习/index.html","d6b702a34120e833b8985427595d425d"],["2018/11/18/js注意点/index.html","36ff4ddbf71e666d5447e18fa37dc54a"],["2018/11/21/工作bug总结/index.html","fcb90bee6dd68dc69210b7eee9395891"],["2018/11/22/mongodb学习/index.html","405b5cb20888258d5c0da76ea96e74ec"],["2018/11/26/react坑/index.html","026f712635d56bcc755733bde6d4fd6c"],["2018/11/27/typescript实践/index.html","9b8915d056faa5ddba138b1e96445f97"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","51d71e20c24a847dafc79a2ddfff05f5"],["2018/12/01/vue学习/index.html","efe14bf907922a5e795b0303f7cdaca1"],["2018/12/07/nodejs the right way 一/index.html","993bc4b0cb7a30d4e715c689cda881c6"],["2018/12/07/react生态基本使用笔记/index.html","76e0bab2d62e32cd8079a5e0c4392eda"],["2018/12/11/rn基础一/index.html","b3cb1b289aa38e376ae37d874366a0b2"],["2018/12/11/函数式一/index.html","6a16bf0f654cd634e9cb8040de61f8a5"],["2018/12/12/nodejs之process/index.html","96a4e000c2420904d145ea90fbe52d8f"],["2018/12/12/node事件循环/index.html","05eebdd8ecb28280229d25276746f9c9"],["2018/12/13/elasticsearch/index.html","99a0427150d5eabfe0e0f8b9fad85146"],["2018/12/13/express/index.html","c5fd542056d6028a71e84622e6098a74"],["2018/12/18/小程序性能优化/index.html","f242099e9299803caff7e1481cc5c010"],["2018/12/20/express2之database/index.html","db6d6b7369fd455b2d378903bea2c9f3"],["2018/12/26/flutter学习1/index.html","14478305964ef20f3d5dfe156fc26b41"],["2018/12/27/flutter之包管理/index.html","29496486ae91d30c5d7f3abad577bc5d"],["2018/12/28/express测试/index.html","18d5c944a116e70781fe798127daa01c"],["2018/12/28/flutter之widget基础/index.html","7e17b45a2b9daca510375927b1fe23ec"],["2018/12/29/Express值请求体中间件解析/index.html","3c0b508ba04dbec5fbd93d164737477b"],["2019/01/02/express开发小结/index.html","5d452109ef032f3e87a74ec1bafbb18f"],["2019/01/05/dart基础1/index.html","dd1239cb68ca8e15f61e0af2ea7e86dc"],["2019/01/05/dart基础2/index.html","850364271e94104386fa54ab52c33b45"],["2019/01/07/dart基础3/index.html","33da3d746f762944d2e00762b6c657a9"],["2019/01/07/express学习/index.html","d24fbaa7201c2530e97cf89f29524a17"],["2019/01/09/Flutter之文本/index.html","d67e9cace019438283febe5afcc2f78d"],["2019/01/11/Flutter之按钮/index.html","7cd978a75b6d9dd1d3f83316be436561"],["2019/01/11/flutter之图片和icon/index.html","96669876a0ea40e335ca09daed5e79b3"],["2019/01/14/next-js学习/index.html","bd39482e48ab159c330f46f90f524908"],["2019/01/15/flutter之弹性布局Flex/index.html","9616d30d17df33a9761cb3e93068d87f"],["2019/01/15/flutter线性布局/index.html","e19a3f768ec7f88ca3bcd5d0928f1768"],["2019/01/15/rust2/index.html","6ced38f3e59eed28c59e556e72ef250d"],["2019/01/20/express-ts上手记1/index.html","8646dc3a94e91a6db63f897b15742572"],["2019/01/21/react遇上typescript/index.html","635d10c289ff388b4607194118645614"],["2019/01/26/新点总结/index.html","a20c0adaab525792cd8ab32fe52e9edf"],["2019/02/11/angular架构概览/index.html","8fce54002b03c5bbe51f6d8fbc60293b"],["2019/03/28/promise相关/index.html","2c5d6f6088a5014e0399cc3c675f40f9"],["2019/03/28/实现一个sleep方法/index.html","a89a7ea0554a23069b69082d0e704786"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","262cc9171bbc0258ee4e7c181ec35514"],["2019/04/02/证书可信任/index.html","eae9e0cd7d8c00154c7be7544d935f5a"],["2019/04/09/从一道题目谈谈跨域/index.html","82687d45f4bdbca838a210e6e5529882"],["2019/04/18/关于滚动吸顶/index.html","69671066ea806637313812df1bc348b1"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","a9697d9e5ccf33b394eb0d4f00f8866a"],["2019/04/23/深入理解padding/index.html","2faa5fd9e83ccdd271607de5998cadf6"],["2019/04/24/css题目/index.html","3bce26fd59f79ba3cadc7bf09eee9dcb"],["2019/04/24/js题目/index.html","2d2407dc23d3a4f00e00fa1d68550020"],["2019/04/25/好吧-EventLoop/index.html","e4b63ab3b22e600d5cf3e908d0b5af3a"],["2019/04/26/轮播图实现/index.html","15102821c32aa37e3cf1cbbd5951c6c4"],["2019/04/27/深入理解margin/index.html","e7bc2b7b22d50f932ef0535541d916bb"],["2019/05/07/FirstPaint/index.html","70e343a04503270be2dcaf7a322a7f58"],["2019/05/14/图片懒加载/index.html","db5225d72388d22fd50ab95606eccfa0"],["2019/05/16/typescript学习二/index.html","2401a3a5539e68668d367b6341302a9d"],["2019/05/16/利用原生js实现数据代理/index.html","faec78b4bb947d2b14b163a889e5e360"],["archives/2018/10/index.html","e481f94bab7df6e369b2d1bf0a3d2431"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","9d9f2a9671ee75b7d47afdeb98854c37"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","f4f94f44b79b6ecbc89ff1952f1b1aaa"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","9c1345c217eb2737e063e66a71e23935"],["archives/2018/page/2/index.html","8346a2ee862d5987fded92d737bbc2f6"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","6ec81c325ceefb801db439bdd3bd1a60"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","70ba8c36eb010403cbc75c2e457b4fed"],["archives/2019/03/index.html","520de090ff4902842d162b30f5f70a48"],["archives/2019/04/index.html","db76253670f91e57d71972a03883818a"],["archives/2019/05/index.html","34ea8cbd41a87af3787a1b037d82aa5f"],["archives/2019/index.html","23c37a9f1a891dbd2d034a25ca51a2e8"],["archives/2019/page/2/index.html","a48b3992a630d33f3fa566f7a30baa2d"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","ef1b324b0276efb55999fc516666d2a7"],["archives/page/2/index.html","7ec2a8e315d45de81448da1a05846fd0"],["archives/page/3/index.html","2c7498bed3825a4253cb08fb9dc17f91"],["archives/page/4/index.html","2a5cfb6edd66e1c6d4b5a05629a3b0f3"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","d78255a0d8413667340302461be50f2e"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","deb3984cce13f9cb5f8b7ec5aa70b6bc"],["page/3/index.html","3f065e747e7677b0bb3e13ca5bf9f0a1"],["page/4/index.html","eba225f4731128f754951f8c46bf2c4c"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["sw.js","0c2ab47bb7e6f2faffa9be14d8adf35a"],["tags/JS/index.html","5cf5729b2707a3dc3e0036a4c9ded235"],["tags/ReactNative/index.html","d1df3213d36573b8347b59fb9d165015"],["tags/Rust/index.html","ab366351549ce8807c7aad9d75d5c19f"],["tags/angular/index.html","d83149abd0a676c7249428382c4631dd"],["tags/css/index.html","2a102a6367765a508c0b4aa935e1ca46"],["tags/dart/index.html","516cc53f57b25f4dcc48b19ec4f06a21"],["tags/express/index.html","365bf7dce6bc55fb0938cbc91b16444a"],["tags/flutter/index.html","1f653f9300fe5ab552c8377049ec3330"],["tags/https/index.html","f7a11fa2a4f941df51ed4b90c7ef1d4f"],["tags/javascript/index.html","ab5b8ebbdd04fbd66a5bb5857c125e0f"],["tags/mongodb/index.html","426cdac375e61958a5b9ec71d0f0a5c3"],["tags/mysql/index.html","1ac834358a696007199e30ed90582744"],["tags/nest/index.html","f380dcca9b0dd3ff2c96ba1f0eb04fd1"],["tags/nestjs/index.html","44618b50edb9cabf2dd32f43b7ab7e06"],["tags/next-js/index.html","2ee1b77142635acbe646da0b426850ab"],["tags/node/index.html","498c2c6a77fe0ee13f870864c3277010"],["tags/nodejs/index.html","3dddb7c1dbf23cd06e7578f5f08c9e61"],["tags/puppeteer/index.html","dfe6e1f6195acbc2566a5a60a1f72dd8"],["tags/react/index.html","24bb2c08e00ec3075c15eff46b1b5a9c"],["tags/typeORM/index.html","41ea68f17b56da1de49dc091b0477d46"],["tags/typescript/index.html","f040cdcc09a9b1e84cbccaa0eb979cc0"],["tags/web/index.html","93f611b3301936a0f5063a332e0d8950"],["tags/work/index.html","8f4e9536a9c29aa6e0852db0b159b9f3"],["tags/wxProgram/index.html","df639ba172ab3f35cb6ea38cb868f83e"],["tags/效果/index.html","fd24c412b5f5d4640b6e099856dd2b05"]];
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







