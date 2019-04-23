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

var precacheConfig = [["2018/10/13/hello-world/index.html","471b53f1a0eb6aea10ef81379bba1ada"],["2018/10/13/文本换行/index.html","62f9b8c71be1812473a02c2b740ade34"],["2018/10/15/css实现轮播/index.html","a4d397e65d99bf7bb81fca0c4da7b28f"],["2018/10/15/puppeteer-API备忘/index.html","f3bc7a8a38be17ce86be1e3fe44c96ea"],["2018/10/17/DOM操作/index.html","b92b1e9225c21ec4519df2b80f938893"],["2018/10/18/rust语法备忘/index.html","efd5e54b05b371d75c2fa315a3dc92b4"],["2018/10/18/typeORM学习/index.html","9ebc43d4086cb3bc6419992b554d91a2"],["2018/10/25/typescript知识点/index.html","3a79b04b81b0d03b11806b5880ad540d"],["2018/10/25/小程序思考/index.html","9be06bb444124613a240a79806e4a73f"],["2018/10/29/angular指令/index.html","147d9db154aaf8489defb50d1eb09c6d"],["2018/10/31/css动画/index.html","37c7407607bdbcd346084dd6a9a7a420"],["2018/10/31/css布局/index.html","a50b3d18741407cc0f57dd2695e0d16c"],["2018/11/01/angular生命周期/index.html","2f9cd89df38a020125c06f28f74c9858"],["2018/11/01/angular组件交互/index.html","7192a0619609785ddaa8730edf0facf9"],["2018/11/02/angular模板语法/index.html","e9b0ae94b28f5aa4512ec399a05440a6"],["2018/11/03/mysql命令行/index.html","a84612250c45da97c9771ccbbeef8e8f"],["2018/11/04/css知识点/index.html","a5720b91eeebdcb80db67a19378e7450"],["2018/11/14/nest学习/index.html","dcdeb12bb9bcc7f7d008b99dc25ab629"],["2018/11/18/js注意点/index.html","39486735075d82e075403435c200bb3d"],["2018/11/21/工作bug总结/index.html","46311bb4f0a6b5a9f67c684218c34c4b"],["2018/11/22/mongodb学习/index.html","b6d9afe9c164890c08c57511f2a1cc7a"],["2018/11/26/react坑/index.html","d81bc6e9d39f9c0de057d8fc822aad46"],["2018/11/27/typescript实践/index.html","8907eee3652cb540f7bcc31668700e85"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","6acad7e83f36612729bd3e0f9e0cc6ce"],["2018/12/01/vue学习/index.html","d05793930a8f2b411bf22db55d95c053"],["2018/12/07/nodejs the right way 一/index.html","a3f3cd7cbdc38feae66e40264ebcfc71"],["2018/12/07/react生态基本使用笔记/index.html","89571dd3d8ad35b3fe9be23524427d5a"],["2018/12/11/rn基础一/index.html","a1c45ce827bd797daf6fd1c449daa27f"],["2018/12/11/函数式一/index.html","65ff24136651b4a9257dab0b1f3e89d7"],["2018/12/12/nodejs之process/index.html","16645bbbfcf764408c158512457d219b"],["2018/12/12/node事件循环/index.html","42801ab59822a16e99f66a175896ca71"],["2018/12/13/elasticsearch/index.html","f08d389c3c892b44d44c7bb01ad2d602"],["2018/12/13/express/index.html","f1fd34aebee36ced1fdd79d349e14f72"],["2018/12/18/小程序性能优化/index.html","a4b7bac5c9d96760271bb7a775fd7238"],["2018/12/20/express2之database/index.html","391c2bf96aa601b9090767c338249c73"],["2018/12/26/flutter学习1/index.html","ae723dc22dfb445b1f4ccf2d5a7cc2e6"],["2018/12/27/flutter之包管理/index.html","d4f1f28e9e482d579ba1b1c4126fec40"],["2018/12/28/express测试/index.html","2e26278dc1b804e68a748dd70f27ada0"],["2018/12/28/flutter之widget基础/index.html","145d62f725ce659ea30d0a02dee549a7"],["2018/12/29/Express值请求体中间件解析/index.html","d6bd7849b0e7ee657264d3d020c94ec3"],["2019/01/02/express开发小结/index.html","fbeb5b93c6eea396b4b4fa6349039a9b"],["2019/01/05/dart基础1/index.html","1b2e681d2e14386194590cb1c24cd3dd"],["2019/01/05/dart基础2/index.html","584ffe7e3aeea212ffa2582690f51ed0"],["2019/01/07/dart基础3/index.html","e96ba6e9fe90c88380cbf3e7950fa975"],["2019/01/07/express学习/index.html","3cf4a8498a118aa3061594a08bc41509"],["2019/01/09/Flutter之文本/index.html","607c8636752896f9ecb3c20ea4f1ef1f"],["2019/01/11/Flutter之按钮/index.html","cdaa248871fb63186c1aadd0dbded5b8"],["2019/01/11/flutter之图片和icon/index.html","f800862e3efad98e372b74cde699ff7d"],["2019/01/14/next-js学习/index.html","244f493c7697aef93e84b5e736cf2cca"],["2019/01/15/flutter之弹性布局Flex/index.html","327c82ebc714b808338b0d1f10192042"],["2019/01/15/flutter线性布局/index.html","c5806bbc8f851db4170491ea1bc98bad"],["2019/01/15/rust2/index.html","e24a73b3e81e9d6b57981eca6812fe44"],["2019/01/20/express-ts上手记1/index.html","dbd837bdd3fcd6f9730c5ba4d21eb436"],["2019/01/21/react遇上typescript/index.html","e10dfcc6d2adf46db0339f27f141d53d"],["2019/01/26/新点总结/index.html","fb51779c3916956bd9348d21c7948592"],["2019/02/11/angular架构概览/index.html","c5702c18f557e9febcb18dce6caa0f1d"],["2019/03/28/promise相关/index.html","8534aac9549f37830761e241189a1489"],["2019/03/28/实现一个sleep方法/index.html","719d8c2f96ce5c9c71becb099ba46673"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","e91126cc861bc49247eaa442602c343c"],["2019/04/02/证书可信任/index.html","2514d3f769c7f93b38beb9a77ac8036d"],["2019/04/09/从一道题目谈谈跨域/index.html","771ea111561ea4b2c2c3754d9af61fbd"],["2019/04/18/关于滚动吸顶/index.html","f35bf2dee90a7ef0a6d33fe521dd5659"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","8889d1ee0ff080a87eaddfb7049ab597"],["archives/2018/10/index.html","03a5eb58aab8a5466857fbac61463eab"],["archives/2018/10/page/2/index.html","d2bbfafd63cc1ab1dbcbbaa83aea7133"],["archives/2018/11/index.html","14f1581ec97f57dbcd75b86ed100f3b6"],["archives/2018/11/page/2/index.html","cf0740eeeb708b7fd2696fea93d5743d"],["archives/2018/12/index.html","296a464990cee8e8ed73cb65662ec7db"],["archives/2018/12/page/2/index.html","0b5620e378c94d0b1b4bcddfbf698e24"],["archives/2018/index.html","1cbfc3d464f1d438efbea2bceda0ec19"],["archives/2018/page/2/index.html","b25a01d59ebea1dca32a29d4350a08c6"],["archives/2018/page/3/index.html","663da0419ba69500b1e72d0f8c049ae7"],["archives/2018/page/4/index.html","04d78d90f45e07770ebe497cf8a35fad"],["archives/2019/01/index.html","c4a25267926738c97165a5b3781bd30b"],["archives/2019/01/page/2/index.html","fd3027e19204955c2cb613fd10dc81f0"],["archives/2019/02/index.html","5fca6e74e4a794fa7635f45b654e0508"],["archives/2019/03/index.html","b06ceece4bf6f581e53c24998c1ee09c"],["archives/2019/04/index.html","84a1c334c8fc59c8b41353feb431ce90"],["archives/2019/index.html","3d899282da21efca2cac21d3ce91f596"],["archives/2019/page/2/index.html","db7e351f77c721ae0b996a27a29ca7d1"],["archives/2019/page/3/index.html","4c653f4533fe73d2b178d84725b97251"],["archives/index.html","555d378f249ba7ae1df489e7aedd10d2"],["archives/page/2/index.html","a52b79f0f25dc8cbd543f02fc262806f"],["archives/page/3/index.html","6ed7cb7f4e662e33c386740a8046cd95"],["archives/page/4/index.html","1a5462e715841d1860aa7025dffd7711"],["archives/page/5/index.html","3f1f671e1751f10d00d688164f0f5f4c"],["archives/page/6/index.html","39b1d7138c46e62f65b163753880cf28"],["archives/page/7/index.html","5a359294d1a0e7bcdada14c75528fa33"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","2ad2765c4091cbdaaa412491f3728531"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","9e7cee589047ee4e2c28476297524af6"],["page/3/index.html","36283a45f108defac638b4fb224166f3"],["page/4/index.html","5c523197fcd0d96949ce90b9375afc2f"],["page/5/index.html","ecb97ffe3962990c6a3df2410e4b01da"],["page/6/index.html","e8c15db502cbd9c0b34da3f52c5ab4fe"],["page/7/index.html","4192d49d4e07d456d992829d9c39def5"],["sw.js","63f27fa273afe630bfe3daa1ec021d2d"],["tags/JS/index.html","475fad6d612776bc71d308675abb84ee"],["tags/ReactNative/index.html","13eae74d2eb58f57a8bf8d28ebc83203"],["tags/Rust/index.html","73b91d401719c28a9c20bf4d9efe31b8"],["tags/angular/index.html","56ac42127068c2ee417b25e9ac01a0e5"],["tags/css/index.html","36b6f61d4e1c7cc3e47074ddc6302313"],["tags/dart/index.html","af21595033da5af9e93b08513a4adc8a"],["tags/express/index.html","6e932e23e2a70f36ffb16877495b8655"],["tags/flutter/index.html","ed27d6833c5248985951f94c4c002640"],["tags/https/index.html","dce4564fb8ebd10559ad9d3eb14d0ce0"],["tags/javascript/index.html","eaa0d22fb1bcd33bb13fec07e3ddf796"],["tags/mongodb/index.html","fbf57c19d755cce6a3a4777fc50ae24a"],["tags/mysql/index.html","e85af6fbd7fa1215f5c6b2acdc7cdc26"],["tags/nest/index.html","ec2089fbe1ab57981205ad22b5dbbba4"],["tags/nestjs/index.html","8b4a7ed35102f1d9dee00d73da171127"],["tags/next-js/index.html","e9136fdf7e366e33eccc6339676110e1"],["tags/node/index.html","c597a210dd37938bf88e165616d1d6ce"],["tags/nodejs/index.html","b85182614c6a4383b510942b2f8129ab"],["tags/puppeteer/index.html","809513281e8e682c9ba12d38ff3ac8b7"],["tags/react/index.html","4f2d9d5ba97b6b77e9c17e352847532b"],["tags/typeORM/index.html","f7e5114da7e2daa40a42d80155807526"],["tags/typescript/index.html","d46b6126ebaac4a1a1ac0513b31b406f"],["tags/web/index.html","538f257938968e83943675b27458376c"],["tags/work/index.html","d4337d403e024046d0f08acdffa6992d"],["tags/wxProgram/index.html","d4f0fd2dca64f823a03352fb11870d48"]];
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







