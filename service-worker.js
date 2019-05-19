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

var precacheConfig = [["2018/10/13/hello-world/index.html","b34649fdb5d187e924e267efde284120"],["2018/10/13/文本换行/index.html","99bcdd754fe2bea0c4e59d78246baa65"],["2018/10/15/css实现轮播/index.html","3624d5a33a12408c8fe3ad6b1347b6c4"],["2018/10/15/puppeteer-API备忘/index.html","5c1da939e8ce7208e51c62998a94f8cd"],["2018/10/17/DOM操作/index.html","5b0cc49c7e7ddfbb8433c50d67c309ab"],["2018/10/18/rust语法备忘/index.html","171eb7fc5d67986f175591a524571262"],["2018/10/18/typeORM学习/index.html","504db2d61ed0ad68383e5f00aba5eb0e"],["2018/10/25/typescript知识点/index.html","b616315035dd54116eda69de9ac562d2"],["2018/10/25/小程序思考/index.html","a36496e5e1054b309b3088587ef84545"],["2018/10/29/angular指令/index.html","1890328c03ac7dc01a0db84560b8816f"],["2018/10/31/css动画/index.html","31fcc1bf28aa38867b1cfb21e4584d83"],["2018/10/31/css布局/index.html","be61e8cf33494c0cd7758b58e765c712"],["2018/11/01/angular生命周期/index.html","8b1fbf0b5e23977598e413acef2be536"],["2018/11/01/angular组件交互/index.html","d46767e52cfa67fee575162c51cb3e60"],["2018/11/02/angular模板语法/index.html","02541ef358bd104721e05bcc216b9223"],["2018/11/03/mysql命令行/index.html","f877e62dcd240c8a6dbd5484638419ce"],["2018/11/04/css知识点/index.html","2339d84e69d8af4aa8e1d7b737fdb215"],["2018/11/14/nest学习/index.html","96635beb0be466bc159a830bb0e4ac72"],["2018/11/18/js注意点/index.html","98b1d6a94df94eabb2052f808d412775"],["2018/11/21/工作bug总结/index.html","20b957765fcfaeb921d0f3d3f41d6d1d"],["2018/11/22/mongodb学习/index.html","1181e1b1c35d244a93904b2894c8bad8"],["2018/11/26/react坑/index.html","3ba16c04bfbdb29d5dd8afdef8b61a03"],["2018/11/27/typescript实践/index.html","a1399342f1977646f77ea824ee7b6382"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","0d10570d4ddb006124dfb61392531881"],["2018/12/01/vue学习/index.html","12192f7f25227404552015f3573ff531"],["2018/12/07/nodejs the right way 一/index.html","9589537efdbe7697d467429e1a67721f"],["2018/12/07/react生态基本使用笔记/index.html","6755e9f1fa41ff00f2876ba55cc52f22"],["2018/12/11/rn基础一/index.html","c8bc089f2cd078f04d4ba59f98897963"],["2018/12/11/函数式一/index.html","e9d9fd0fe141de61e5be5900e21b2e71"],["2018/12/12/nodejs之process/index.html","5fbffea9aaa51c2e8be4d7b580c7a0ef"],["2018/12/12/node事件循环/index.html","d7a2817a32faea443c0fe6bab037addf"],["2018/12/13/elasticsearch/index.html","c839c2b3882628bc376051cecb5bf578"],["2018/12/13/express/index.html","cf4c519d1dbf8fa4b65122b7d6ad30f2"],["2018/12/18/小程序性能优化/index.html","d687e4b83d136e89adc3d8dee5c6519d"],["2018/12/20/express2之database/index.html","7db89b6a02d8d7f713479631003a9de6"],["2018/12/26/flutter学习1/index.html","2561c094273d9dc36529e7d00d341060"],["2018/12/27/flutter之包管理/index.html","adcfca0ba704bed91ed402e0a47fb82e"],["2018/12/28/express测试/index.html","b6e97bf92e8f373274d44869309bd4dc"],["2018/12/28/flutter之widget基础/index.html","552b44ac6a49609aceb5bcebc8dd2a9f"],["2018/12/29/Express值请求体中间件解析/index.html","756865948077501127284e79d7389d04"],["2019/01/02/express开发小结/index.html","705be32b104f03d3b4e514ee96dcd069"],["2019/01/05/dart基础1/index.html","930c7e31358c336360a48f79efbb7660"],["2019/01/05/dart基础2/index.html","5a55ccd2310f251ada0491f493b6d1a3"],["2019/01/07/dart基础3/index.html","5d8b7c3c356bf669b2d31f9018e35701"],["2019/01/07/express学习/index.html","553fc9a14285f25a203c71e3ca6d56f7"],["2019/01/09/Flutter之文本/index.html","9be2766d0f3834bb6a960f9bc5d262a2"],["2019/01/11/Flutter之按钮/index.html","a1f33798dd445c9cd0fd5c9a1151a4ea"],["2019/01/11/flutter之图片和icon/index.html","0f6b657dced317ce838e944767c1fcdb"],["2019/01/14/next-js学习/index.html","4979cda33fb6ebdff8f7ad098a66cb4b"],["2019/01/15/flutter之弹性布局Flex/index.html","eea8d2c59eabcba68dec8eb413aad575"],["2019/01/15/flutter线性布局/index.html","8b468ad1fc2e5c0a7564a05e20a22718"],["2019/01/15/rust2/index.html","eaa3591ba7cfea32a8008d60867bc495"],["2019/01/20/express-ts上手记1/index.html","8cdf2e58df0c63369547cfd9fec955e8"],["2019/01/21/react遇上typescript/index.html","3e6b6c16432a78463feaa62b04860fdc"],["2019/01/26/新点总结/index.html","cdd0954747865a3ec1160453493bb75b"],["2019/02/11/angular架构概览/index.html","46205071c821993687d96d1492227863"],["2019/03/28/promise相关/index.html","9368a4d83689378d72a68f200be4846a"],["2019/03/28/实现一个sleep方法/index.html","33c3b4e30cda31ef335231e7a4484a40"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","27307acab96ab9e9ff5bdd91a1af3d38"],["2019/04/02/证书可信任/index.html","33c5bccd5f663b9f763550d7d6f24ca1"],["2019/04/09/从一道题目谈谈跨域/index.html","92f8c20116bb90334a6aa333a4427d1e"],["2019/04/18/关于滚动吸顶/index.html","b9261443c2abe487e0aa781590ecab79"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","0987e4750b61c15cb0d523ac041da8f0"],["2019/04/23/深入理解padding/index.html","2b3f7b65c29340566ad3dbdaba73c27a"],["2019/04/24/css题目/index.html","55f65a3a4891ffeb0b7087a50855977e"],["2019/04/24/js题目/index.html","74377a7568b87a2a3b6e5c918d516d72"],["2019/04/25/好吧-EventLoop/index.html","cdcadf8a796cf525a5825f086a85fd71"],["2019/04/26/轮播图实现/index.html","fcc42dadfe3e82d0bee31c58bb397476"],["2019/04/27/深入理解margin/index.html","b862080450801e1e6f970bacd46135d8"],["2019/05/07/FirstPaint/index.html","f5ca52d814d59d177df9417b57a67a8c"],["2019/05/14/图片懒加载/index.html","cc470514ab93c69a36b4edfc2da12db5"],["2019/05/16/typescript学习二/index.html","cddff17875b8cb7fb8b3128862cbbcf4"],["2019/05/16/利用原生JS实现简易的v-model/index.html","adfa729f5b934c5aca62b72636259506"],["2019/05/16/利用原生JS实现简易的vue/index.html","a7ba140d5a570b985ec56d66e6b5fc5e"],["2019/05/16/利用原生js实现数据代理/index.html","faec78b4bb947d2b14b163a889e5e360"],["archives/2018/10/index.html","caf8aaa6a5eec981ba056f5efe947cdd"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","105099f56f8c283f0627397f4f0ad281"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","ea754da7cafe2192f9658c1758f900cd"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","7b3f6122fae4571511c3d1a6d1159e9a"],["archives/2018/page/2/index.html","0194edbb998ea3e273ae7c8d63582224"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","6def52cde446b00a58111e776d7a9ac4"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","2021516a6dbd1bb5f302a30622fba144"],["archives/2019/03/index.html","8f33139be682eed7c0b0866a0ff4b718"],["archives/2019/04/index.html","e7bfc0a6b1829866522edcc9c43fea68"],["archives/2019/05/index.html","976c191c5253a9c33dff11f8b8069d56"],["archives/2019/index.html","d5a1676459e84cd078a19bf13dc2d161"],["archives/2019/page/2/index.html","fbf774b1845288e79b6b8844a9af2b87"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","24c35df9838d2f29451459ec5d030db0"],["archives/page/2/index.html","b0b81b855b7cbc8686e02dcb00a6e074"],["archives/page/3/index.html","c293e2621c4181d00fddd059aecc15ef"],["archives/page/4/index.html","2a5cfb6edd66e1c6d4b5a05629a3b0f3"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","507e15991b25f662c446e59fcbd66a1f"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","36b5d16d7803778a84f203071305ecee"],["page/3/index.html","5fb6718977e353ec7b0f3244a2d297c9"],["page/4/index.html","eba225f4731128f754951f8c46bf2c4c"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["sw.js","14071ed81fa1e6076e65de925f12c942"],["tags/JS/index.html","f2c8594796c38d9081ed887cef73256b"],["tags/ReactNative/index.html","5d51ec39734fa28e78ea5a865fab71e9"],["tags/Rust/index.html","653699f45a83e399bc31bddc64a6332a"],["tags/angular/index.html","763bad082c2f865ee12bc024d9003be7"],["tags/css/index.html","faf13c42c3a3522c2ecec30b5aa1a8bc"],["tags/dart/index.html","3aa55fc7c88ca2563b32e0836a36feac"],["tags/express/index.html","2fa2089903d61da7987afe3bc6acb3e6"],["tags/flutter/index.html","5a8862e4040f2f108bd9fe881476690b"],["tags/https/index.html","4997bf01bc7df77d10b1ffe887f341c0"],["tags/javascript/index.html","bdb0065f33fc28adc71dabfd3e86bb1a"],["tags/mongodb/index.html","230ff5d5e8f386dad65cf3ade8ae932d"],["tags/mysql/index.html","8a91e715c05843dd6b2dad8e959b3b73"],["tags/nest/index.html","10024aecd5f1eaf0149494ff4d8fe1fa"],["tags/nestjs/index.html","9b7126319098ea143dc763330eb8ce3a"],["tags/next-js/index.html","6339868134aa6bca044cbdc878cc65f6"],["tags/node/index.html","54bb44dab6d9a6a3dfba6c032f05604b"],["tags/nodejs/index.html","da93de13c74a7f9bf396afea979d5a39"],["tags/puppeteer/index.html","3b62d5868d740061a9d02aaaeca577f6"],["tags/react/index.html","4cc5990d35314ac4bdf699b1c29212ae"],["tags/typeORM/index.html","ce6e3615c2fefa6a38781587b7f4a3c7"],["tags/typescript/index.html","bf6cf5edd973cfa8f703c7b593fab368"],["tags/web/index.html","3c783253929a2e789975cf151cdbc7c2"],["tags/work/index.html","fc34444319f782a212868d37e42f1df6"],["tags/wxProgram/index.html","717efe791eef51b642365131f687e129"],["tags/效果/index.html","5a34ab6d7022e68dacf0ecbfac05674c"]];
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







