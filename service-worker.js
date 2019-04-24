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

var precacheConfig = [["2018/10/13/hello-world/index.html","778b28aaf21de949d8935305c0e5c253"],["2018/10/13/文本换行/index.html","b5308c5f1a58bd7891ffb0a9c14dc4ad"],["2018/10/15/css实现轮播/index.html","98edcaa03e5436ac77e90af9940bebc5"],["2018/10/15/puppeteer-API备忘/index.html","6ff87167c23e80a5cab888a5354034c7"],["2018/10/17/DOM操作/index.html","9d8374ce165035b9bfc377f1db327d98"],["2018/10/18/rust语法备忘/index.html","910c4fff738eb940b91a9af3475e233d"],["2018/10/18/typeORM学习/index.html","4f1c8824ecd756b9b8d3f6fbe103f51c"],["2018/10/25/typescript知识点/index.html","bf8a0bfc38c365d25c74f2db3ef5c7f6"],["2018/10/25/小程序思考/index.html","f22a2d92480e80368cb4d03b387a0ca4"],["2018/10/29/angular指令/index.html","d98022faa5a8458f1e9bcbf7dbeb756f"],["2018/10/31/css动画/index.html","ac5d81d8a27b33cc2d51532bfa94ae2a"],["2018/10/31/css布局/index.html","c6c8936c1ccf40f0c925472e10cd0c25"],["2018/11/01/angular生命周期/index.html","354cb80187c2e2d909def5696a0e009a"],["2018/11/01/angular组件交互/index.html","2856a3e48bbd36362bad63e6ff3607b8"],["2018/11/02/angular模板语法/index.html","c863c70db331e84b4d31a26fe5c41840"],["2018/11/03/mysql命令行/index.html","3840d4799c22ae9209a1aab82d9208de"],["2018/11/04/css知识点/index.html","e9aeb7c53bf41487eae814d6dd40ce29"],["2018/11/14/nest学习/index.html","e80f7329092afde73b25cf919bab78eb"],["2018/11/18/js注意点/index.html","db9c76d38138617465a35452877eebce"],["2018/11/21/工作bug总结/index.html","a0d143df2ec5f0c73fbb8b20ed679125"],["2018/11/22/mongodb学习/index.html","e98f2499df795d1b759cad5cec59b2c2"],["2018/11/26/react坑/index.html","5ef68487e39532ad9a2eacd01a9eb3ff"],["2018/11/27/typescript实践/index.html","de863bb227aa590ec17f77229d0bac1f"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","d3a7eca1425bb648e1f93af998b8bd78"],["2018/12/01/vue学习/index.html","7f4e3c9cd7b581ffe0aba27f8d3616e5"],["2018/12/07/nodejs the right way 一/index.html","6089e9fbc119a1e11ab16c25f85ee56f"],["2018/12/07/react生态基本使用笔记/index.html","2957a1e9020fbded2cf47839371bbf11"],["2018/12/11/rn基础一/index.html","d1728efc07a498e1a674c53e7760219a"],["2018/12/11/函数式一/index.html","3c6e8e08562fe0ee87fc51c5d068ec47"],["2018/12/12/nodejs之process/index.html","53576e5306559e4dfbf6b3fa7de08bf9"],["2018/12/12/node事件循环/index.html","197ea9b81306a98bcd60c33058b0301e"],["2018/12/13/elasticsearch/index.html","6aa98cb73b69574c5b2126d843b312e1"],["2018/12/13/express/index.html","ed4eb4c78f96d31efd093659b96c4534"],["2018/12/18/小程序性能优化/index.html","c7acdba06c16f69c62745ab576d8cf96"],["2018/12/20/express2之database/index.html","2e0d066ae6fbc89836360d17e1809961"],["2018/12/26/flutter学习1/index.html","ad11f646828341b525148643c1088fee"],["2018/12/27/flutter之包管理/index.html","38a6ec173311628c1bd8de84e97f3c8d"],["2018/12/28/express测试/index.html","b0df229db25e29ea83ce56ed3f24eadb"],["2018/12/28/flutter之widget基础/index.html","dc3f3a6400e2d91728a794a4c5903bc5"],["2018/12/29/Express值请求体中间件解析/index.html","f20d0e3ae994e8a001df4e3fa6deb291"],["2019/01/02/express开发小结/index.html","ec848e9129d651bad4d65664ea58241e"],["2019/01/05/dart基础1/index.html","d067c5e5012b4acfcaf04353c027fcb1"],["2019/01/05/dart基础2/index.html","46ccd3781420b559a43f6e9a37224cdf"],["2019/01/07/dart基础3/index.html","0ff242401c032994e33710e96718eeb1"],["2019/01/07/express学习/index.html","31a05eb0991f6bbc217f39ae994e5de3"],["2019/01/09/Flutter之文本/index.html","778d10b32db92d1ba5ba247afd7c4d21"],["2019/01/11/Flutter之按钮/index.html","019c01e3426f00c8603761c7b3b60833"],["2019/01/11/flutter之图片和icon/index.html","9b62e4e868d6663a956896ad36526838"],["2019/01/14/next-js学习/index.html","aff16af19e004cf4c5cc25ff6e9a8212"],["2019/01/15/flutter之弹性布局Flex/index.html","a4564449f42f9e0bbb6684a1d836a9b9"],["2019/01/15/flutter线性布局/index.html","5f016255aff3ae4e1597437c8b160fff"],["2019/01/15/rust2/index.html","569faebe0aace94a79f865cf8ef54e3a"],["2019/01/20/express-ts上手记1/index.html","47de8baf9a04d4919d1077bee0329243"],["2019/01/21/react遇上typescript/index.html","190a8de30775b9628d3c15b4a04d0eeb"],["2019/01/26/新点总结/index.html","b2db8c783315cd1cf0d7c890a16932f8"],["2019/02/11/angular架构概览/index.html","d324aa21765aa400737c739a487b0283"],["2019/03/28/promise相关/index.html","159bdece84a090bf5c22fd54251221db"],["2019/03/28/实现一个sleep方法/index.html","64d8bda74adaa13ea3a808edf527b482"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","85309c523f8a389e0c043d0a7c0c1499"],["2019/04/02/证书可信任/index.html","b90d094ce41af653200b3656c997b963"],["2019/04/09/从一道题目谈谈跨域/index.html","9db7882eb3bc13d2307eca4aeaee8f69"],["2019/04/18/关于滚动吸顶/index.html","c515ee7fa7fd8893b77afc330e62666e"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","a9843c8d72ba0c5d4e2b051cc9a78411"],["2019/04/23/深入理解padding/index.html","74dd6292660ec5854a9ea0d4070cbde1"],["2019/04/24/css题目/index.html","c5e184b5afd1adbf6570260088a2adaa"],["2019/04/24/js题目/index.html","31efc377f20cdd3747bfa708367367e4"],["archives/2018/10/index.html","016b29ee766dd114f78bc0ce5f266eaf"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","81e1c90ad78b8f9d7565888f6b196789"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","6c8e75c5bad841fb0f3590bfadff2d5b"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","fc19511d6e67bca507806957d7e1d9cf"],["archives/2018/page/2/index.html","43ba90cca55da0c10b06d4a75a69aaac"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","648b499d5fa23d9888d70dbcfecd6320"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","2d8d99849b7f8b2a5cb56392cb2fc4bb"],["archives/2019/03/index.html","e0e3df0bb59682449f513ce49a5248e1"],["archives/2019/04/index.html","832bb7195f2d989abe0fa1003c6bcdc3"],["archives/2019/index.html","f7f7f2d624891855f644dd44cdc5f68c"],["archives/2019/page/2/index.html","33dc9108a85664990d699e3c53433c67"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","7779fed63bdf34a37dee5b8a50d020f9"],["archives/page/2/index.html","d4975c5728f328150656dee9256f7102"],["archives/page/3/index.html","a4da579b0b4b7126eae207222f408942"],["archives/page/4/index.html","2a5cfb6edd66e1c6d4b5a05629a3b0f3"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","ef19f22e76aa5112cefe69540d021e2b"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","389cc95d8fec34f6ee6183d1dca4877d"],["page/3/index.html","577262f8a911667afcf386d804bf91a1"],["page/4/index.html","eba225f4731128f754951f8c46bf2c4c"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["sw.js","174336a44626cc39363e65ea0ea3c14d"],["tags/JS/index.html","7218b52036c2cc9f7883b01b34946a98"],["tags/ReactNative/index.html","f7d7252c4407321cea9bc3f8cf14a89f"],["tags/Rust/index.html","1df440f9f897af56ea5c33c4785480d1"],["tags/angular/index.html","7b3ce85ce84b98605b7360fbf10bcf40"],["tags/css/index.html","875131c684ccb92333c084b07d89e8e6"],["tags/dart/index.html","cad21c5df2b781c8d7017e8e8bfacc58"],["tags/express/index.html","22da6025d4a62506583e8450d39c0cc4"],["tags/flutter/index.html","5ad73c2f2fe42fe759a6600e9fd64602"],["tags/https/index.html","9ed6a8d2eec611dc087b87017ff0768c"],["tags/javascript/index.html","774569f1680f0107977aaaad09f2d026"],["tags/mongodb/index.html","7e3c58d8d094ee114b39cb9d62eaac0b"],["tags/mysql/index.html","37e5e3f8a14ca224944d991e074e85d1"],["tags/nest/index.html","bbc1c14945827054a804cc072ed58fdd"],["tags/nestjs/index.html","767429411031b7ea3db2e23ef175d863"],["tags/next-js/index.html","94ca14db96ca8edcab41f071e6dff522"],["tags/node/index.html","38bd3b7f83f6350d242581f05ddbea73"],["tags/nodejs/index.html","923f5f3845fdac9458fb50e38c5a72e6"],["tags/puppeteer/index.html","5b29f19b33123195223b437685512fe0"],["tags/react/index.html","22613ba52dd880bd4757de077e240a04"],["tags/typeORM/index.html","bee78397cfe5a6e89c7ca7cd9865ac1d"],["tags/typescript/index.html","d4da097febae52b017a7fe098946c845"],["tags/web/index.html","624d03b6e9d408ceae3622b93434f1a0"],["tags/work/index.html","6dabaa5c2402c6daed9cae089822e137"],["tags/wxProgram/index.html","a2fdfe759f9785bfc0878f4b3dcae308"]];
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







