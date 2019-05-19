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

var precacheConfig = [["2018/10/13/hello-world/index.html","5d75079fb1cdbdf20591564d2652f544"],["2018/10/13/文本换行/index.html","0d5303537bd57d974f0bdc29796380c7"],["2018/10/15/css实现轮播/index.html","b47fc0ab5f6c532ebcca08407b375cf6"],["2018/10/15/puppeteer-API备忘/index.html","7e030d0ff9d4c85c06fb74c1b7928743"],["2018/10/17/DOM操作/index.html","724e01b4c51bc7acbd7bff321ea9218e"],["2018/10/18/rust语法备忘/index.html","bc077c8abcf99a9ff581f6d5e176027e"],["2018/10/18/typeORM学习/index.html","91a8d2792f519dddd8504f223807f23d"],["2018/10/25/typescript知识点/index.html","699b6535110e826d4c70eea1d29cc21b"],["2018/10/25/小程序思考/index.html","feeaceef13409aa32553f603e049323a"],["2018/10/29/angular指令/index.html","9086223e0a70d0127713321165a390cf"],["2018/10/31/css动画/index.html","3e52e9069ad31c86f857db531772ad66"],["2018/10/31/css布局/index.html","b94dfea4c35cbd951af5404c21e61e6b"],["2018/11/01/angular生命周期/index.html","972b9f9ac75d841cc2a5eb892a37a299"],["2018/11/01/angular组件交互/index.html","611af2d6d753eb3f133c3113ee78fbeb"],["2018/11/02/angular模板语法/index.html","b762b0f86ef81d923178ef96e6dbc6e5"],["2018/11/03/mysql命令行/index.html","9ed6cda3a559d5855de846d656fc3e34"],["2018/11/04/css知识点/index.html","ac21575b56a1f5b821d4a51f2490f9b2"],["2018/11/14/nest学习/index.html","126dfbed6fc235c6622b2d821cdf4bdc"],["2018/11/18/js注意点/index.html","adf97fd44f92cb51e78ad04a9516ca41"],["2018/11/21/工作bug总结/index.html","35790d1046705d0dab493436fce029a0"],["2018/11/22/mongodb学习/index.html","4f445228da2e366fa6ad1eb59be095be"],["2018/11/26/react坑/index.html","a0c4cfc955e6eae5c75ab36f4d58cf62"],["2018/11/27/typescript实践/index.html","60a332e78b4e272532f4221040fd246e"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","895f12912c12041f03178247d4b3d2d5"],["2018/12/01/vue学习/index.html","9a121737b0b510e503d5352f496af25e"],["2018/12/07/nodejs the right way 一/index.html","6b07f054f2e74aac5ec4d6f1b925df1f"],["2018/12/07/react生态基本使用笔记/index.html","707d222bd66df114d091de36c50d5f33"],["2018/12/11/rn基础一/index.html","c13c7abaa09f8fb3e89701b844fed580"],["2018/12/11/函数式一/index.html","2ef24aa43d35c06dd1ae1f7adf0aabce"],["2018/12/12/nodejs之process/index.html","f006cc21b316148329346720cf86305a"],["2018/12/12/node事件循环/index.html","aa4f579700703f33dd7eefc3e255d16b"],["2018/12/13/elasticsearch/index.html","854f3e7966a1f1ad6a7c69e0f697aa85"],["2018/12/13/express/index.html","debabea0f0566dd55cc1e14c469ad012"],["2018/12/18/小程序性能优化/index.html","872ded843351e1eca92770a963ee1d38"],["2018/12/20/express2之database/index.html","49ae59d957a19ef274788cdf753b7488"],["2018/12/26/flutter学习1/index.html","4e19fc51f55ea13bc6a12e19b7f366ca"],["2018/12/27/flutter之包管理/index.html","948344d01a11561cb0ca4aebc4ecf8e5"],["2018/12/28/express测试/index.html","42cbb2001c834ee563879312c5a554c7"],["2018/12/28/flutter之widget基础/index.html","5c94ac13b34e662469a116bbe11d2696"],["2018/12/29/Express值请求体中间件解析/index.html","587c41d782c5dfe75a60c5430542377a"],["2019/01/02/express开发小结/index.html","d3552fb1f371dbde7d5da70d4e24dd51"],["2019/01/05/dart基础1/index.html","31792c939a71f6e1fc39ecafd536b154"],["2019/01/05/dart基础2/index.html","d9e20a202b3bdb87c91d6d3e45482da2"],["2019/01/07/dart基础3/index.html","d4a817f3fb39a533be064daf1c49b4e8"],["2019/01/07/express学习/index.html","2ad1a8f5127c5277793b6d09052c8592"],["2019/01/09/Flutter之文本/index.html","628ab372e1d500a6ae6084fa19f88c7b"],["2019/01/11/Flutter之按钮/index.html","ad14e023d8d61f48241841eb703463ff"],["2019/01/11/flutter之图片和icon/index.html","44f4f3800ad555d1991ceb74f02d08a1"],["2019/01/14/next-js学习/index.html","e250cdc8c97d6aca2d44ed3917b13ff9"],["2019/01/15/flutter之弹性布局Flex/index.html","203025a578a612e2f8bc7da9c36feed4"],["2019/01/15/flutter线性布局/index.html","a39f30af6eb6dc3d612d2639c0ed841f"],["2019/01/15/rust2/index.html","92adcfe81bd5b995282c746af831c885"],["2019/01/20/express-ts上手记1/index.html","159c1a55174ea12b907279df8f935593"],["2019/01/21/react遇上typescript/index.html","d0bc0dfda77d10f1338d291223526298"],["2019/01/26/新点总结/index.html","3100371489ed1ab6b30668101970b126"],["2019/02/11/angular架构概览/index.html","498f6d456c768ce96b0070351defea09"],["2019/03/28/promise相关/index.html","f7ab1198c3c2046fbe6bfb20ea4efd88"],["2019/03/28/实现一个sleep方法/index.html","921b825ed7d16b3539244d2d4b130e29"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","a5b6c298567b1c790f71e49d21031ec6"],["2019/04/02/证书可信任/index.html","66a2b2a6536f457ad36c3e147d37122b"],["2019/04/09/从一道题目谈谈跨域/index.html","c77cd30485496a1a340ac7af32cc4d24"],["2019/04/18/关于滚动吸顶/index.html","7e88684ebcac7a173fae0c8a8c3de540"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","da718d26b460145bc5aa602643b4fcd0"],["2019/04/23/深入理解padding/index.html","b2bed2a27d05afb317643d767781c1c7"],["2019/04/24/css题目/index.html","cefff62be1d01dba3735d15218aef24d"],["2019/04/24/js题目/index.html","b40e4edbc3eea58d6d20399f8942a091"],["2019/04/25/好吧-EventLoop/index.html","89925c6eb5370a3cfd8c6160d6d3c6c1"],["2019/04/26/轮播图实现/index.html","e15e6ce046c69839df5e5669521500f9"],["2019/04/27/深入理解margin/index.html","970138be377856c4eb41f6dcb32e5a16"],["2019/05/07/FirstPaint/index.html","de46b8b67c953df2a8d8c9bce44e9ed1"],["2019/05/14/图片懒加载/index.html","843d1f5f26a3ea86de8179b79f8b6ef5"],["2019/05/16/typescript学习二/index.html","9bf4f0268321001683e7774a02b08221"],["2019/05/16/利用原生JS实现简易的vue/index.html","42561760e9acc8a07aad9f67f2ed59c7"],["2019/05/16/利用原生js实现数据代理/index.html","faec78b4bb947d2b14b163a889e5e360"],["archives/2018/10/index.html","45e661f25b9ebbdfea8c61ae4e36293b"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","665a010bec701cb1b231c9b81acce0a6"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","047199c228f7896b50833a92a4f3937e"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","ce3bc8a351b9f537e5c5117049ad13b6"],["archives/2018/page/2/index.html","708cffc0efed9b625a391613104b1424"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","6d2519af641016268523ad7cefec2a71"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","2476fce23b75fb16a1a8a16aed00191f"],["archives/2019/03/index.html","ed40fff5f65340281104869c86837109"],["archives/2019/04/index.html","90597f78d53f92ac60320511139bb28e"],["archives/2019/05/index.html","2cc15119cd0f831d7ecab465a7402046"],["archives/2019/index.html","3845c741f75ff6034755bd65bdfa40b5"],["archives/2019/page/2/index.html","8540c3e928888f54c2e778809573e9c7"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","375815ec75cfa12f20977decf1970acd"],["archives/page/2/index.html","db03645c34a67ce459a58d76dae4480b"],["archives/page/3/index.html","7cdc44f6ee9811ce2e05152db178a5b8"],["archives/page/4/index.html","2a5cfb6edd66e1c6d4b5a05629a3b0f3"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","eaa29b3fc26672d6777c9ced3fd7d165"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","76ed9796cfab5da2261675b605312fd3"],["page/3/index.html","2490c1ab3a16bc69839f72674a341809"],["page/4/index.html","eba225f4731128f754951f8c46bf2c4c"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["sw.js","64355b846ab581831bedf9aa35e0f1d4"],["tags/JS/index.html","1fe17e9d5613863a99ed1fdaec3ea5d1"],["tags/ReactNative/index.html","5084460b4405a8ff8201ceec0fdea667"],["tags/Rust/index.html","b57a86b458144cf326031c88eea94570"],["tags/angular/index.html","255d833aaedb3c4adcccd0ff2991bed1"],["tags/css/index.html","f014ddccaa7838c8e6bb69182b1f1554"],["tags/dart/index.html","e817bd0d6a6473ca8671b97bde4e5cd5"],["tags/express/index.html","0ddf470320bd46d9f3be2f3027b2d6a2"],["tags/flutter/index.html","45ef0a3327bfa4621d5564ceed828684"],["tags/https/index.html","532f70bc5a314bca83602070f1517298"],["tags/javascript/index.html","07f78636f61d24e49646cfb394164177"],["tags/mongodb/index.html","9d92f8a2f1943fd2dcefd039e67068f7"],["tags/mysql/index.html","530e6f5131eef3692578ff35b00f0b11"],["tags/nest/index.html","afe075433d2f0237b0d553227d711563"],["tags/nestjs/index.html","a9b534b457795009212dbfb6fe3e4d56"],["tags/next-js/index.html","ff81da03ed6fbf73cea17561925dd475"],["tags/node/index.html","4f6945049807cfbdb05b46ea6c7dbc6e"],["tags/nodejs/index.html","4380240c68c81f1f19aef2becdcc890a"],["tags/puppeteer/index.html","c261d61196018ac3d5e433e45576f7f6"],["tags/react/index.html","e610992f727c92c092ab6d5a7126e160"],["tags/typeORM/index.html","04dfa63b6fc77b78ea288b6623d2fb20"],["tags/typescript/index.html","3481d969ba951716f717230b4878a0d9"],["tags/web/index.html","b424c4a4f612b2f9e220d0501ffdc765"],["tags/work/index.html","b4be626ec0bf134e151a58dbed12b325"],["tags/wxProgram/index.html","c21686a41e03906ae3b7cf9f5703c251"],["tags/效果/index.html","d29d44a36e9a388654ca700da3d211ce"]];
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







