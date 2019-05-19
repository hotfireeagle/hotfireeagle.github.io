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

var precacheConfig = [["2018/10/13/hello-world/index.html","9c69fb08616fe5a658b423cae22134be"],["2018/10/13/文本换行/index.html","d41f0c09fa1497e4fc59e63b4010157a"],["2018/10/15/css实现轮播/index.html","46e01f065cbab7f68f2f4e270df58426"],["2018/10/15/puppeteer-API备忘/index.html","de9de51edff09826575ca96499fcffdf"],["2018/10/17/DOM操作/index.html","dffb77ee56fb60ae88c63936be29c271"],["2018/10/18/rust语法备忘/index.html","7cf1fd8a75445b232524c0e1312f70e2"],["2018/10/18/typeORM学习/index.html","f33e2dc60684a5bbc55af134aa34dccc"],["2018/10/25/typescript知识点/index.html","833a7d1713a435ee4966aa011ca476cc"],["2018/10/25/小程序思考/index.html","94654060af19b3e1c9797b3af871f580"],["2018/10/29/angular指令/index.html","c311bf0de0decf6c3b3396b82e7f0009"],["2018/10/31/css动画/index.html","55eb71471aaef15ef28e3ae1167e67d4"],["2018/10/31/css布局/index.html","c6ba9a100301137cab065bf91faf5089"],["2018/11/01/angular生命周期/index.html","2cbf8d5e780b644a0bab3bc3bb61ac1f"],["2018/11/01/angular组件交互/index.html","7c89d12f158f765a64b393f216503510"],["2018/11/02/angular模板语法/index.html","b0a1690c00bd2ed7bacc439e0ca07595"],["2018/11/03/mysql命令行/index.html","dd85fe78b51687b5fed779621dcc9526"],["2018/11/04/css知识点/index.html","c56ff932cfd408123d44ba92387d5070"],["2018/11/14/nest学习/index.html","3dae259d85545a390fd357ed64473190"],["2018/11/18/js注意点/index.html","f1f302ced5a1e39f250407d0b6e5eba5"],["2018/11/21/工作bug总结/index.html","2c635a89404a4eb41bbfb7723a62df9f"],["2018/11/22/mongodb学习/index.html","85a0788b1924b3cdfa3a9333c6c2b473"],["2018/11/26/react坑/index.html","3eff58e86da99eca33863d5a8f172b2a"],["2018/11/27/typescript实践/index.html","529a4d63995d3e1369a71cbf40931ceb"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","b4a720906b0f939f9479e8f8e44300e6"],["2018/12/01/vue学习/index.html","0ae1ce4bb4f0c6f06be99eb56315a200"],["2018/12/07/nodejs the right way 一/index.html","5ece7070e856b65505308822c1fb968b"],["2018/12/07/react生态基本使用笔记/index.html","6175761ba79f59e483e5ab4e9a7227ed"],["2018/12/11/rn基础一/index.html","a387df81c90b546bec3124d15fa0b2b1"],["2018/12/11/函数式一/index.html","950388ef31a5747d0ae19ac79c27cfb3"],["2018/12/12/nodejs之process/index.html","ba9642f58ef70373aebbc2940f5dbb9c"],["2018/12/12/node事件循环/index.html","47d7a3203e8440876a4620c942fbff76"],["2018/12/13/elasticsearch/index.html","63011e0c61ff5976bcfe41748e2e0591"],["2018/12/13/express/index.html","c4c622b6f2605c17096da5f801efd271"],["2018/12/18/小程序性能优化/index.html","570892fc082151a1716c896601db2933"],["2018/12/20/express2之database/index.html","7fef21c7392fba8ea0b64909dc65cf0c"],["2018/12/26/flutter学习1/index.html","5c1808f2702029185df3ed7475439d32"],["2018/12/27/flutter之包管理/index.html","f515acd49dfebc0864eb748b07cdc301"],["2018/12/28/express测试/index.html","83709eed5ff3f6a2686444e6711f2fb1"],["2018/12/28/flutter之widget基础/index.html","718a76d9c3764dd6056ad78b4919228d"],["2018/12/29/Express值请求体中间件解析/index.html","015932c87c8c3cb2f2d05479fc2a21a8"],["2019/01/02/express开发小结/index.html","4fb2499d3b4e2d0ebfae7f69df0d7053"],["2019/01/05/dart基础1/index.html","00215042e7b762823b7ec55c350ea297"],["2019/01/05/dart基础2/index.html","feec2b6e269f8f71102af0934d9d5f56"],["2019/01/07/dart基础3/index.html","c2e05cba00e78d9c79ec880915fdde38"],["2019/01/07/express学习/index.html","7fd818b68e59cfdb554c99d0004f0db3"],["2019/01/09/Flutter之文本/index.html","b9387de98121235016110e1545df202a"],["2019/01/11/Flutter之按钮/index.html","a327a5c9264cfce755410d87b2b865a4"],["2019/01/11/flutter之图片和icon/index.html","8def23fea8d2024bb4061953a903c158"],["2019/01/14/next-js学习/index.html","cefc708e930b59bfe2f759d0ec08529a"],["2019/01/15/flutter之弹性布局Flex/index.html","5602d28d6ee1971daa3d225d66a407eb"],["2019/01/15/flutter线性布局/index.html","4bf728354dc168e8beb1dbfbfd1d41b6"],["2019/01/15/rust2/index.html","807a975fa6b88ad51f0188ee966bd487"],["2019/01/20/express-ts上手记1/index.html","7bf1e1dc98e57e886968b44a63bf9303"],["2019/01/21/react遇上typescript/index.html","7e67d25d354ce499a75a607da435d597"],["2019/01/26/新点总结/index.html","5c32170af74e9f1650e8141cc5617b45"],["2019/02/11/angular架构概览/index.html","a866f0a1ce190500cac4d91b2e57a55c"],["2019/03/28/promise相关/index.html","dae2b0310b9fff33c7c8b38c23850820"],["2019/03/28/实现一个sleep方法/index.html","62e65e7e641be2b570e76b3028727bfa"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","d5670ad10be4e79b162807febff81746"],["2019/04/02/证书可信任/index.html","7295a5a4ea2e3599cbd70fa8f8ba1728"],["2019/04/09/从一道题目谈谈跨域/index.html","531b49f3fda1b3e0667824ea9f5113de"],["2019/04/18/关于滚动吸顶/index.html","0c31606f0406768411567f663c11f590"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","3cbb4fba1e39921affcc2112884ccbbb"],["2019/04/23/深入理解padding/index.html","36bd86028bf7d6734e9262ffbfa04a82"],["2019/04/24/css题目/index.html","e5c43fdadb7e979002ff773821d65e3d"],["2019/04/24/js题目/index.html","f751651b954695eed882ac9306a9392d"],["2019/04/25/好吧-EventLoop/index.html","3ae0066fe9c4deaafd00c31c19b91800"],["2019/04/26/轮播图实现/index.html","86f0894a5a34070beaaa5ee5f5fe671f"],["2019/04/27/深入理解margin/index.html","d21ae1251101b4182b076b3432d97b81"],["2019/05/07/FirstPaint/index.html","4d96644ba014209a78ee0fea239549d9"],["2019/05/14/图片懒加载/index.html","de7f64f3eb26e26ae8c9145571e24d34"],["2019/05/16/typescript学习二/index.html","68bcf8e1e143d7bd97b67c0c63cc8a24"],["2019/05/16/利用原生JS实现简易的v-model/index.html","76560bef049dd3a060db5df08a42130b"],["2019/05/16/利用原生JS实现简易的vue/index.html","a7ba140d5a570b985ec56d66e6b5fc5e"],["2019/05/16/利用原生js实现数据代理/index.html","faec78b4bb947d2b14b163a889e5e360"],["archives/2018/10/index.html","e6a139a5c00a49759f18038b697ffbd2"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","c5043e19c27776e53d1df37dfcfb1aec"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","d828a8039c49567daf2a0266faa6657e"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","49124d7d0a2f6836c2f7d2a07f7f90c0"],["archives/2018/page/2/index.html","f7c4116bc7f4ad2e4b1fbb9db52828ec"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","9e2dbb85c9ce05bd649d143301d3abf8"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","344fd2869b903522f72c3b21bd45fb07"],["archives/2019/03/index.html","1a21dc11e2e511060c2b2ee5658b597f"],["archives/2019/04/index.html","2be1d20c3fdba878c9b08d94ab89f501"],["archives/2019/05/index.html","a0e3d100be033f4b34b4632b30a0e694"],["archives/2019/index.html","8398069f57638fd7fbaf74d4457bcc93"],["archives/2019/page/2/index.html","0bf865642d6838233c1211541a8bc780"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","f589808b4f922b6f443b749a85f30828"],["archives/page/2/index.html","3fca8ade8ecd117ea997faa59498ff15"],["archives/page/3/index.html","d1ff264a8a16e616f9dbf12e4c74e10c"],["archives/page/4/index.html","2a5cfb6edd66e1c6d4b5a05629a3b0f3"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","ae2dbd0876c24618152f9b6827388cb8"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","faf87c5e1a03dd254b6605bf3b741927"],["page/3/index.html","cbaf87e2fda5d1ba527bb0c5517bb500"],["page/4/index.html","eba225f4731128f754951f8c46bf2c4c"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["sw.js","4b31dafb5db4d43e697384c74992645f"],["tags/JS/index.html","f664091302b842843772a0973c8fc1f8"],["tags/ReactNative/index.html","3e55a3a274016126dcb3d960e29150e3"],["tags/Rust/index.html","ab3201ab81f409e8e06e706195477b00"],["tags/angular/index.html","342fdc4d8d2b354d7ce2a5e1fd65f981"],["tags/css/index.html","f1f28a45445611a17f016af361b45a48"],["tags/dart/index.html","676960ae8073f937132fd4f59509ff87"],["tags/express/index.html","04bdc65f9f60916085f9d618287b53fb"],["tags/flutter/index.html","36f2c7cdfe4a503ddef9b6838d1857dd"],["tags/https/index.html","a141d8bf46fdfba9fc8e5690bf656f73"],["tags/javascript/index.html","51ee88d818a997519806951db3ed4477"],["tags/mongodb/index.html","645f3b19a2780a8f73a7158bb2b6b093"],["tags/mysql/index.html","c13fd996019a5d4b2d2f281bd8ea286b"],["tags/nest/index.html","c7e39295a6960185c263bfca81dfb366"],["tags/nestjs/index.html","4aeab4f30fb0aeb1a5bdf7190b590896"],["tags/next-js/index.html","be29fc9b059f6a5cd3be818890b8f3c7"],["tags/node/index.html","6fb33c3362f9b4928c57fbca65001a56"],["tags/nodejs/index.html","33fe566b0ae3e43dd8b98e4562f53c0a"],["tags/puppeteer/index.html","636d41535da108ee0fa7b6aa62737a77"],["tags/react/index.html","385bf9a38c6c18f717f46dd7aae8f2d6"],["tags/typeORM/index.html","ea6523989bb2a923cdecd1d0beb0c65f"],["tags/typescript/index.html","0008908761f6a0c92e86b36dcba16db8"],["tags/web/index.html","a9d270db0123ea95f87846c3e5194721"],["tags/work/index.html","467100b56079d96907c34414792874aa"],["tags/wxProgram/index.html","e71343643bc45e9ef0ccc626a16a612c"],["tags/效果/index.html","4b74d154174d79ce3fc22a1823285947"]];
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







