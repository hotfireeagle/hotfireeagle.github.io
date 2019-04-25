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

var precacheConfig = [["2018/10/13/hello-world/index.html","1ba3622b3a9fcb743bbcefa02ccb3d1f"],["2018/10/13/文本换行/index.html","ecc75886e34ea246032502509d6d52e5"],["2018/10/15/css实现轮播/index.html","eb5c8c6cbff0a7abc042048521e3a852"],["2018/10/15/puppeteer-API备忘/index.html","cbc3fa62da280c94e8be2fab42d29c1d"],["2018/10/17/DOM操作/index.html","7b9b3bcfd60870f2f1c997bec5992df0"],["2018/10/18/rust语法备忘/index.html","ff61262874fd7076e7d0c30cb9af275e"],["2018/10/18/typeORM学习/index.html","62bbb1a51c2f4661c821891c95ab0e3d"],["2018/10/25/typescript知识点/index.html","677f285f567c6e1a673841e97ba5ad98"],["2018/10/25/小程序思考/index.html","729c1f8ae16122b71567719d18163312"],["2018/10/29/angular指令/index.html","2fe88c2d001aa945ec8839ba5a940d07"],["2018/10/31/css动画/index.html","1bceb5997e1f96b25880d98195dcb9f5"],["2018/10/31/css布局/index.html","e18616325141d3a75aeeb1bcb89928b4"],["2018/11/01/angular生命周期/index.html","19c4079f50b67963b432fb28c794e57e"],["2018/11/01/angular组件交互/index.html","ef8864fa13cf16c88efcb1526dd57675"],["2018/11/02/angular模板语法/index.html","c982ca6dd60d1686fdc9fe42adc5ca7e"],["2018/11/03/mysql命令行/index.html","a0a924261ec62bcc0905e46e346dce78"],["2018/11/04/css知识点/index.html","9477e5135d6051089a8a8df73464557d"],["2018/11/14/nest学习/index.html","978bcca951a733e5e671bebccd7de71d"],["2018/11/18/js注意点/index.html","27b438f28220bbb1b634e585e2533b0d"],["2018/11/21/工作bug总结/index.html","c3771f6ee73eb6fc8f4092c5652dc6c4"],["2018/11/22/mongodb学习/index.html","87e35adcb9933619a27b625bef374b56"],["2018/11/26/react坑/index.html","96be0a8d9f9c9c34de3f7b50953d5da3"],["2018/11/27/typescript实践/index.html","ca0d43853eaa0e57e8439d2dd0d43e05"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","73f9e6816d12661e9f83a6def201e435"],["2018/12/01/vue学习/index.html","dc38adeec13cec3717823ce5027d118a"],["2018/12/07/nodejs the right way 一/index.html","b1c582b0da42c3107b340fe870aa9654"],["2018/12/07/react生态基本使用笔记/index.html","f543d83a01e65739baede7ea91813d51"],["2018/12/11/rn基础一/index.html","c29db4fc1542d69d1616c5f230cff31f"],["2018/12/11/函数式一/index.html","aa5ce3043ceabfaa71ae4c51eb558bc4"],["2018/12/12/nodejs之process/index.html","284cbf87812a05ccc64518755a02580a"],["2018/12/12/node事件循环/index.html","a80bb1bd5bab2a979bd2b08bf2b36e95"],["2018/12/13/elasticsearch/index.html","c89c846ff89b5079a2a5d61ca7530c50"],["2018/12/13/express/index.html","a582b6fa66a2561674e86e9a5140b71c"],["2018/12/18/小程序性能优化/index.html","e557356ab0f5a56a8e46dd57e576bc83"],["2018/12/20/express2之database/index.html","225fa963501a275b24fa3063a9a65e14"],["2018/12/26/flutter学习1/index.html","0c947be35ce3779c1976e623811859f4"],["2018/12/27/flutter之包管理/index.html","a1942a4756a24b4cf3a9b1037a9b609d"],["2018/12/28/express测试/index.html","ab8c5a9b47fee431acaa423b271e9e0e"],["2018/12/28/flutter之widget基础/index.html","7a25c2700408378ccd3d427a2384dcea"],["2018/12/29/Express值请求体中间件解析/index.html","efa26c37a3ea4fa0229225f65ec17d9c"],["2019/01/02/express开发小结/index.html","f95109f24f04172f9f0e637a0a018fe5"],["2019/01/05/dart基础1/index.html","d6365c043c653454e3dded6c4f7f9b63"],["2019/01/05/dart基础2/index.html","895c887458de96b86ede748ac7ce571d"],["2019/01/07/dart基础3/index.html","7371afc1837ee5120b0a14f5bb5b2bb8"],["2019/01/07/express学习/index.html","5734d559d2ed823d9cdadfe132a5d13b"],["2019/01/09/Flutter之文本/index.html","668ca4a10740fc4b4b9d61504374d320"],["2019/01/11/Flutter之按钮/index.html","a15fe77ee0b558f351d9fc243d42154e"],["2019/01/11/flutter之图片和icon/index.html","b2966119eb30b19db742120c51152ca9"],["2019/01/14/next-js学习/index.html","4953bb35a682b2ccc0d419b684f6153c"],["2019/01/15/flutter之弹性布局Flex/index.html","118dd3d9ddee44f5f6de720279e0d1b5"],["2019/01/15/flutter线性布局/index.html","31d12b8d7c2df6caa9b6e1239516934f"],["2019/01/15/rust2/index.html","12e8ca6b864c9d60c5c7a092c7da2454"],["2019/01/20/express-ts上手记1/index.html","12baf25211094ffd7b1f33dc09e89100"],["2019/01/21/react遇上typescript/index.html","6e83bca8788af29b531ab2657f110638"],["2019/01/26/新点总结/index.html","c98f6a7ebdc215c98ff100332728626e"],["2019/02/11/angular架构概览/index.html","c64addcd1b2fae820132925c0667e7e4"],["2019/03/28/promise相关/index.html","727a110a4754ee242c6ca0d948bf4902"],["2019/03/28/实现一个sleep方法/index.html","7375f14b6113e6294bb5ea7e0e8ccf7a"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","f6755beffc91579e94793ee2752b1b58"],["2019/04/02/证书可信任/index.html","168513d85cea9e8c21e46911e08e4214"],["2019/04/09/从一道题目谈谈跨域/index.html","6d0e2b0809b06a194b35057357d75aae"],["2019/04/18/关于滚动吸顶/index.html","447fb5226043c04101ca38da14a6c5a3"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","e7a819c37e6145b32eaa5d6d44d30635"],["2019/04/23/深入理解padding/index.html","1b1dfa238180d4f17deb664f0e325a47"],["2019/04/24/css题目/index.html","671da124a4b6a6449ede7a02f0aa57cd"],["2019/04/24/js题目/index.html","1671279a13a8f6d3cead44fcc088baa0"],["2019/04/25/好吧-EventLoop/index.html","9aebec9ad2f3f7bed726ae6e31091d31"],["archives/2018/10/index.html","d2f0fcd331b72594eebf4cd08a293f0f"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","75dd671b248d68004e1f5f226465c17d"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","ac99e7ea1dfa92518c139132711619e4"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","4666dd1eca46af3e943c929cbd2f75a5"],["archives/2018/page/2/index.html","0b9299d05ac26451a93401bca9ba35c9"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","4383eac7af475e0dbeff7a2495eeced3"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","207124809b5fa5cfd07fb7465186b5f0"],["archives/2019/03/index.html","4dfcf3aa4fd04211946b5afcec1d2094"],["archives/2019/04/index.html","a2b643f58506a33056710d1e77a06343"],["archives/2019/index.html","bf3bb201426fe7bb713f158557e1ed4e"],["archives/2019/page/2/index.html","1f6a47c973ffcfc58d1fe9255a7095df"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","645e94f49614cc562a06532633bd7e62"],["archives/page/2/index.html","98a9e8335b3095d31454e2aa99ea91c4"],["archives/page/3/index.html","209ba0d7f907a1d3cd61eb48efbd2c64"],["archives/page/4/index.html","2a5cfb6edd66e1c6d4b5a05629a3b0f3"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","913e756f4a6e71a078fc58f559fe5072"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","ff36acc14d7bf4886a09997e93efd3da"],["page/3/index.html","cad5cdcd8692b3dffcc0bcc269d2a6b7"],["page/4/index.html","eba225f4731128f754951f8c46bf2c4c"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["sw.js","bb7fda4edda719f983efe1ad48d698dc"],["tags/JS/index.html","121c049a1a58759b1d025cc5a75e2883"],["tags/ReactNative/index.html","036044352dada469cbd06c693e611392"],["tags/Rust/index.html","23eb25a9fb9242c978c20da4f3056a3d"],["tags/angular/index.html","96d4962b43c95d965a704c69d55d9987"],["tags/css/index.html","07a4cc63fa510230a235cc00b5610908"],["tags/dart/index.html","ac532d83ba34558e06c4c35e07292752"],["tags/express/index.html","a50e434ab3368d66cfa05f0c642f5f5d"],["tags/flutter/index.html","39e9207183b061c1c2c0d403e2108027"],["tags/https/index.html","e5536168217e7fefebf65e39c6d7364c"],["tags/javascript/index.html","89c4899290efd07bd5be0a1c89798e0a"],["tags/mongodb/index.html","2951d7ade55ce23695336df9b5e7dd33"],["tags/mysql/index.html","ede735ffe18e4fbe3f9cdc08a8e0b4b1"],["tags/nest/index.html","25e6a3b4c61ee919c188ae7e14c773ce"],["tags/nestjs/index.html","f4d30ca008003338271e9fa51363fbdc"],["tags/next-js/index.html","e3e224207b929d599907adfa09428000"],["tags/node/index.html","a4d40602e70783167058f9940ee08f54"],["tags/nodejs/index.html","a6be2b3e8372ca95050e96c69d47ccbe"],["tags/puppeteer/index.html","49bb5e2c43731403afba97b9a11b7476"],["tags/react/index.html","4de77384bed9db88483f21c6f37bc78b"],["tags/typeORM/index.html","089e6315e7213e26a9fb460cc07b15a9"],["tags/typescript/index.html","1189bd52ce25d94b46aa99f0ed8a59d6"],["tags/web/index.html","3339fbd6e5555466a67703760482d26a"],["tags/work/index.html","ba3788f9324ff2a28123addb9ea490cb"],["tags/wxProgram/index.html","edcd590c318f76bd2b5075246a19fd17"]];
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







