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

var precacheConfig = [["2018/10/13/hello-world/index.html","aa03a37f58b1729eb2c9ce1b18f6b352"],["2018/10/13/文本换行/index.html","daf5ac2fd52738d16a79d194923717d9"],["2018/10/15/css实现轮播/index.html","35605b5ec54c83377e0594b20c03becd"],["2018/10/15/puppeteer-API备忘/index.html","93b87ef4262758fecc036549ae40da57"],["2018/10/17/DOM操作/index.html","4e8d3c3f4775a1c19d25359c0c76585d"],["2018/10/18/rust语法备忘/index.html","ee5c9ab46afa2ca71951d2bf1c231134"],["2018/10/18/typeORM学习/index.html","c295f28ad3a217209c35bdb8c68c66ff"],["2018/10/25/typescript知识点/index.html","ab52854d1771de8e44734eeee79d4625"],["2018/10/25/小程序思考/index.html","7df767cd334fa9ceb58374c54c84687c"],["2018/10/29/angular指令/index.html","86d22aaa4b2c315273d2d0499c245fd7"],["2018/10/31/css动画/index.html","cef72a85b20f6f15fb384bc08606a485"],["2018/10/31/css布局/index.html","a7d63a0c32952f22798c019c11981706"],["2018/11/01/angular生命周期/index.html","7dfc3f47bfc8a0997dcde9f900b6b0b4"],["2018/11/01/angular组件交互/index.html","90ec0c78ce4b75bd848c6112dbcd15df"],["2018/11/02/angular模板语法/index.html","094d1fa40758183a4583d8b30f341ede"],["2018/11/03/mysql命令行/index.html","f140891e4b9a2e66855f6613704c5d3f"],["2018/11/04/css知识点/index.html","0aff08b504645bb3a7fb74f8ecac3660"],["2018/11/14/nest学习/index.html","cdd9b5d4c49f0f950a6be59fb22923d7"],["2018/11/18/js注意点/index.html","baef360d06de43a08ab343330cc0fc52"],["2018/11/21/工作bug总结/index.html","efc186b6ea5e57bb5e1a03b39a969d95"],["2018/11/22/mongodb学习/index.html","d9b0c3f5cacd560dff78a7e87e117ca7"],["2018/11/26/react坑/index.html","3e8a04e88f29d042ebb8d9754521eab0"],["2018/11/27/typescript实践/index.html","cca124f476395c8e818c1e5e3f327344"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","8ff8e97c973f13c6eb09fc46ba40b6ce"],["2018/12/01/vue学习/index.html","8665612da58d1707596a25c7ec2acb71"],["2018/12/07/nodejs the right way 一/index.html","f4eb9c9f1004e5ef7de09c89021389f1"],["2018/12/07/react生态基本使用笔记/index.html","9dcca27e68ae170b0c9b4f9ae1d3f10d"],["2018/12/11/rn基础一/index.html","97c42c76ebc79b0be9cf3f41f240249d"],["2018/12/11/函数式一/index.html","52b4f199360a0927c14cd9e2e68ad572"],["2018/12/12/nodejs之process/index.html","fdd394dc84ae30a40786711178361130"],["2018/12/12/node事件循环/index.html","2638ebf7ebff7d5ca2b0756651bbb9f5"],["2018/12/13/elasticsearch/index.html","6810fd07393566f5a7c9039030176098"],["2018/12/13/express/index.html","b046f4bc818ec59e1f27282a2b666b00"],["2018/12/18/小程序性能优化/index.html","c96124279b30a4e4ce1401ef787b6df4"],["2018/12/20/express2之database/index.html","f831efb0091485170b87c26e76ba6b3b"],["2018/12/26/flutter学习1/index.html","0d6b33ddb040254352353437c8b148f7"],["2018/12/27/flutter之包管理/index.html","43570cdadb91f84fe855f04c10980f9b"],["2018/12/28/express测试/index.html","c14c1fce730e0110dc7d4292794318c8"],["2018/12/28/flutter之widget基础/index.html","8035bb53239b395a52002526b9e7e4b2"],["2018/12/29/Express值请求体中间件解析/index.html","5205383228832a65bb223add071dffa4"],["2019/01/02/express开发小结/index.html","c4f8cccebc6f48177bd85eacfefc9956"],["2019/01/05/dart基础1/index.html","deb0e114580b4a5c4fb8020dbc006fbd"],["2019/01/05/dart基础2/index.html","0af007c91243ae81e84ecc9756ce8a7a"],["2019/01/07/dart基础3/index.html","1593a0e1beed8adc721475bd28a9fe3c"],["2019/01/07/express学习/index.html","611e1e6c43ae64e778f8f4f65847243d"],["2019/01/09/Flutter之文本/index.html","326c75d74694c0e6fd2d3b04b5be04e6"],["2019/01/11/Flutter之按钮/index.html","67ae186f466dfba766e4ffafef8b609a"],["2019/01/11/flutter之图片和icon/index.html","215de5cfc03f191a778588ff6c768fec"],["2019/01/14/next-js学习/index.html","7779632945188c6e41db1f06719c23e1"],["2019/01/15/flutter之弹性布局Flex/index.html","7ba523d1ff23d758cf8ecb5bd8abd69d"],["2019/01/15/flutter线性布局/index.html","21565189c323ebec07d1aed7c4a5b9c0"],["2019/01/15/rust2/index.html","323326c258d2b7303ae73f056418b180"],["2019/01/20/express-ts上手记1/index.html","dc388595f3ed3c01bf66463b80e494c1"],["2019/01/21/react遇上typescript/index.html","2c95676a21d1c40d991c53b498339fc4"],["2019/01/26/新点总结/index.html","b451fde4284ac7314735bf95c1352e2e"],["2019/02/11/angular架构概览/index.html","043fe92163edeb667caabe63f0a3d8a3"],["2019/03/28/promise相关/index.html","dac6a8f2104f08583933fb869daee0e1"],["2019/03/28/实现一个sleep方法/index.html","2d3625a14f87cf16ccb9ca3eb3870760"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","233c0e790ba45daea40d32eccf7098e2"],["2019/04/02/证书可信任/index.html","40ba13c6c086b09927e3b091b393c739"],["2019/04/09/从一道题目谈谈跨域/index.html","ef9404cb3a13451b99dc4f2437906ec2"],["2019/04/18/关于滚动吸顶/index.html","d10d84e738bdc9a70ed25ac45c747808"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","ced74b7a413c2de3efe34e3f55386a71"],["2019/04/23/深入理解padding/index.html","a54bd60a62300bd31eb51dcb59efe4c7"],["2019/04/24/css题目/index.html","64d0e2020c0080d35417bed74b0dd2bd"],["2019/04/24/js题目/index.html","eb2b9c193dfe41afa61e9469c1474538"],["2019/04/25/好吧-EventLoop/index.html","90ab002c2758b8b1082517e4757aed36"],["2019/04/26/轮播图实现/index.html","8fcfda2c6e287678ab5434a9bc3f8cdb"],["2019/04/27/深入理解margin/index.html","aead3b8c949f4ec3498195ce3ed1fc52"],["2019/05/07/FirstPaint/index.html","f540d5e5cf1c85d93e19ac40c3795f33"],["archives/2018/10/index.html","7d8cfb52128ff2a718054579509790e5"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","a1a6b88bffe133b7c2f926bfff0fca25"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","693423836d49d742f0e26138eb0faebc"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","70b8b0f608d0b8ab36c919f1977312b9"],["archives/2018/page/2/index.html","3ecb11ae514e7bfd153ac528e05f7499"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","8f11f90968fd8ddee8df325b4512c897"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","f396230f9face016b939c53ec17452ce"],["archives/2019/03/index.html","12acdd2797e5d698e729bb20be10bbb0"],["archives/2019/04/index.html","1f548b43e8cd8937421466f763d9451c"],["archives/2019/05/index.html","17d40865a344f0ec82771c68c7d2c167"],["archives/2019/index.html","000162d2110fff4ca747684f842b1b94"],["archives/2019/page/2/index.html","fb2f6fbb48feb74aee5dec6e41a2c77c"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","147670f3eaa5250be9fc4d06586b95f4"],["archives/page/2/index.html","4d10d64259caba38e1714e24cd41f551"],["archives/page/3/index.html","7994938d1382c7faaed3c03051230cb0"],["archives/page/4/index.html","2a5cfb6edd66e1c6d4b5a05629a3b0f3"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","6c48a88e1690de6132bba8a2d252a9d7"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","cc5654f881fcea4581c3511fb6e10c69"],["page/3/index.html","d36d45eddea0e252a723e36fe2d2bf2b"],["page/4/index.html","eba225f4731128f754951f8c46bf2c4c"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["sw.js","dc854e03f5a7deec2e62f519942cfced"],["tags/JS/index.html","a9435c4c4d16b655d0349e778046bb97"],["tags/ReactNative/index.html","17d47abedd1950ce8d481a73246f120b"],["tags/Rust/index.html","b5ae24d6d067d91a65494369f4613599"],["tags/angular/index.html","3ef7671e0d59f910bdca3fde766aae1f"],["tags/css/index.html","bc655d02846bf0b8d2d697b5434a8d51"],["tags/dart/index.html","fe64d8fb75b1a266641f75a92efc60ce"],["tags/express/index.html","d0e820408f0ca83622049078543a1cce"],["tags/flutter/index.html","97f5be2aa1d24540b25dbe61bca85d46"],["tags/https/index.html","1a505d0d8caadd0b6980a8e91a137c5d"],["tags/javascript/index.html","e9c301ba8303105761bdb7498dc43a28"],["tags/mongodb/index.html","8a471d9394e5cfe3f6dee902fb93aa8a"],["tags/mysql/index.html","b9f2a6111d87b09624e4f501705fe035"],["tags/nest/index.html","b93bb82839179a57d1a82a1670d3a9f6"],["tags/nestjs/index.html","c79714991097de724429fdb551978af7"],["tags/next-js/index.html","f3056a24bfe9c043727d73b46d867782"],["tags/node/index.html","6e90492bb966bef20b37b158dbb8f715"],["tags/nodejs/index.html","be67a1a008e89d1bc3b93d59d488572c"],["tags/puppeteer/index.html","9647ae5facc852dcade120f921cb4b1b"],["tags/react/index.html","a0a712f6263875144e945a25a3f901f9"],["tags/typeORM/index.html","1525fd5a279d241d378996e1baf52a91"],["tags/typescript/index.html","547257b8c3bad46bc2810bc5b4816163"],["tags/web/index.html","8599aea70f12963e532dd9bfa3f52624"],["tags/work/index.html","c8229531f47c167eff0dc25c8b54744c"],["tags/wxProgram/index.html","00b92c8bddf09a54a658dda4c158c6e7"],["tags/效果/index.html","45ef3e45308b483d79d64d74543033ac"]];
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







