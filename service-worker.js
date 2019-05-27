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

var precacheConfig = [["2018/10/13/hello-world/index.html","5c8f225cb35850b2f0e4863447f7ac2e"],["2018/10/13/文本换行/index.html","1176c75eb2b90561cb9411bce4508b4d"],["2018/10/15/css实现轮播/index.html","6b4c3ea8e9417116ff5a55c275a1bbc0"],["2018/10/15/puppeteer-API备忘/index.html","9526bce03ed195051ecf1ceccf1df37d"],["2018/10/17/DOM操作/index.html","812c5555df03864c45567bd054503b41"],["2018/10/18/rust语法备忘/index.html","eaf82af5fd8cbd2bcca4147e0fe65051"],["2018/10/18/typeORM学习/index.html","62bc48f028a4d40770910b0ec588d843"],["2018/10/25/typescript知识点/index.html","75be9ef102e9d13388a45ecd6fb35fae"],["2018/10/25/小程序思考/index.html","76bde731fc93888af1a9afd776cdd57e"],["2018/10/29/angular指令/index.html","7f16f5685d0dfaef37685c642196260f"],["2018/10/31/css动画/index.html","b6f23fa28f49b19a69685486fd95098c"],["2018/10/31/css布局/index.html","5bf388a5961d14fd1b035a80924c94a1"],["2018/11/01/angular生命周期/index.html","2f651079c97beba2de88bcaa9f054ab8"],["2018/11/01/angular组件交互/index.html","3d90d771415d2bcd017835d8cab4bc4d"],["2018/11/02/angular模板语法/index.html","4144967ba2a62cd5e901e4dc062d597e"],["2018/11/03/mysql命令行/index.html","c0bc145a644cb3c8929b96bec2f315bc"],["2018/11/04/css知识点/index.html","9bf4c789c011d3f16810f580d1d3401d"],["2018/11/14/nest学习/index.html","057610ba8beaaa88970bc8f22426598e"],["2018/11/18/js注意点/index.html","fe1e036006e77e5c2d9e26ee185293c1"],["2018/11/21/工作bug总结/index.html","9c483336ce88f0688c66fd248bbfa16e"],["2018/11/22/mongodb学习/index.html","4c5b1ea84b3cdc88ed5dbeba9c45fcda"],["2018/11/26/react坑/index.html","3a6aee0855c50cec985aa39cd01a488d"],["2018/11/27/typescript实践/index.html","5e9ea6c7a78fbe9fb7157f7cbcc6c35a"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","a6d293d8f017cc0de4a1c74f1594439a"],["2018/12/01/vue学习/index.html","02a3ddee668ba3f609b226777ef66365"],["2018/12/07/nodejs the right way 一/index.html","2ab0abb0456f416be173ef5a16e2082c"],["2018/12/07/react生态基本使用笔记/index.html","bbb7cf643aa75c3e976cb22d1ca7a43b"],["2018/12/11/rn基础一/index.html","2b7d1a6fe009685f68ebdfacdea1b9d9"],["2018/12/11/函数式一/index.html","20c75d6e42c1869484108af6727c7088"],["2018/12/12/nodejs之process/index.html","ff5c592805d94cb575ed9b6b2a198dfc"],["2018/12/12/node事件循环/index.html","af51113da06b06b3bfd8a0c51e44d31a"],["2018/12/13/elasticsearch/index.html","91aaafbcd88e299323520dd0561f34dc"],["2018/12/13/express/index.html","2486ac67af969ebeed16916eaad96496"],["2018/12/18/小程序性能优化/index.html","82f27bccbd6bb00eee2b9b1c4aa56734"],["2018/12/20/express2之database/index.html","871fd158495e71ed05e283102da609a5"],["2018/12/26/flutter学习1/index.html","8b0c37526328e29b32662963d6566649"],["2018/12/27/flutter之包管理/index.html","330d3410a7614d036e4078285433d9c8"],["2018/12/28/express测试/index.html","707ddff42e746e9eae698434690fe3f6"],["2018/12/28/flutter之widget基础/index.html","53ca986af02e24a744811e37c31b8e08"],["2018/12/29/Express值请求体中间件解析/index.html","220bd1fc613411862ecefe4091097f2a"],["2019/01/02/express开发小结/index.html","9e61faa5f17544257704c85b687732c1"],["2019/01/05/dart基础1/index.html","3b8dcda1e87bf28e4dc162c6a259c9c8"],["2019/01/05/dart基础2/index.html","a4e4abd8d23b07d060e2c5f45ed9f504"],["2019/01/07/dart基础3/index.html","993ca6dafaca00538e0b825b479e2cf9"],["2019/01/07/express学习/index.html","777f394815360c501741ac45d7db2414"],["2019/01/09/Flutter之文本/index.html","400f00b11af8887b0a168f700772cf54"],["2019/01/11/Flutter之按钮/index.html","f869edd6e729419e4f54add1d75288ab"],["2019/01/11/flutter之图片和icon/index.html","865f510ba724d64c0c28475235f9d385"],["2019/01/14/next-js学习/index.html","ee880aa9493011d5f43aa6156da54515"],["2019/01/15/flutter之弹性布局Flex/index.html","6f83049657b60622739d68ea3bf7e055"],["2019/01/15/flutter线性布局/index.html","5e22b7de3e91492009c391d52c9af2db"],["2019/01/15/rust2/index.html","ed3dd11c3a98e72bf175435df0bc7c80"],["2019/01/20/express-ts上手记1/index.html","0b5b0402b4d60ac4e2719f1a0ba0f3eb"],["2019/01/21/react遇上typescript/index.html","f10004089048b0c9482e8e7b60de8ae2"],["2019/01/26/新点总结/index.html","fc02408b0e6262343b330af58c3c0c8a"],["2019/02/11/angular架构概览/index.html","07c1ad570ffa94c9b1a8a0ff3ae6d86e"],["2019/03/28/promise相关/index.html","167f3e9da5d3a44695d6abd62bd61dc8"],["2019/03/28/实现一个sleep方法/index.html","41eec3cbdf73861b5c75fea075b42f9a"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","096db6f917c56ac5904d8d0c64006eef"],["2019/04/02/证书可信任/index.html","d63066d6aa8ba6221801ca39d6c6f0d4"],["2019/04/09/从一道题目谈谈跨域/index.html","9c0195334c5a73bac311df4a738a9549"],["2019/04/18/关于滚动吸顶/index.html","0b774d58bd5d9495e49959348b144777"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","048eed3057c8a528fa09eedd96e3dece"],["2019/04/23/深入理解padding/index.html","57c943d130477ce766b04e089ff84c3b"],["2019/04/24/css题目/index.html","7bd3499a2ea3232b822c4807f5f1f8ee"],["2019/04/24/js题目/index.html","5c1a53725b1f5a406ece8b83dc50d76e"],["2019/04/25/好吧-EventLoop/index.html","76c83f2ba3024fa48aab9eaabd4a6d12"],["2019/04/26/轮播图实现/index.html","3a94e03bd23d2842eb67a17da3d6ac36"],["2019/04/27/深入理解margin/index.html","a06edb31f5f90d5cf21e5c68969552fe"],["2019/05/07/FirstPaint/index.html","cb4cd474d3db7a2605ddfa28cfdc87a4"],["2019/05/14/图片懒加载/index.html","05606bd5a60571c4e5cc1cf60f0412c8"],["2019/05/16/typescript学习二/index.html","c71daf59bcd68bae4819c4b45c8bc7c2"],["2019/05/16/利用原生JS实现简易的v-model/index.html","78bdca3170797f41c6684609885c9df5"],["2019/05/16/利用原生JS实现简易的vue/index.html","a7ba140d5a570b985ec56d66e6b5fc5e"],["2019/05/16/利用原生js实现数据代理/index.html","faec78b4bb947d2b14b163a889e5e360"],["2019/05/22/typescript搭配react使用笔记1/index.html","f4bb33aa48d39e3f273283fb7ca4f0fc"],["2019/05/23/typescript-react学习笔记2/index.html","dc65786f0c5d2b9a728a263b6bc27aa3"],["2019/05/26/typescript-react学习笔记3/index.html","8ce85cf55c042310b725ef1d78e4a15e"],["archives/2018/10/index.html","d3d0ad01a30233b66368154e0f0448aa"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","bb30ea07a1e77afa01309237b56f59e6"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","d12e8ce6ee05de787a56c1c4c66314e9"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","903accbb6c54284370066119f7135629"],["archives/2018/page/2/index.html","1f683b6bbe553c362876a462c4e6d86a"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","d1b203887423f1249c34e00366902434"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","be213f63536fbfcbf1f987dbdb5a0c29"],["archives/2019/03/index.html","bd9efde8d72466c5197748c1e1db0354"],["archives/2019/04/index.html","574b471ce1a8bb558e11e2522c7ffd49"],["archives/2019/05/index.html","f994c94d2d7563dd8121c392d02593c7"],["archives/2019/index.html","a6d8150a729ac209165c0bddd0795a04"],["archives/2019/page/2/index.html","315409f73c38754e529cbfad0c6896a8"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","1a6a2d4d1fbde0cbcba45baa5b5c86a1"],["archives/page/2/index.html","163565a666498a06652523b08e8e969a"],["archives/page/3/index.html","07a057b670acb1dde4a54920bc142db1"],["archives/page/4/index.html","d69ef440e147cba132daae66246aad79"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","896e9330c6cd227368bc512eebd1ad71"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","eecf862e97a2333c547586b67f29c0e8"],["page/3/index.html","78d7360c8539b36d26fe36c550e264d3"],["page/4/index.html","e1358de2acb02d0fe196b50e58020c01"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["sw.js","7d47f1fcfbe2b4e8718f79c41def40fa"],["tags/JS/index.html","00077b01a545b19728647c49c3469148"],["tags/ReactNative/index.html","24028df947283883dc3997d33381bf5c"],["tags/Rust/index.html","ddef65a600e2b7da0c1febf0f0004f01"],["tags/angular/index.html","f9dd7e2b12cee04ae658e9d8a4253d71"],["tags/css/index.html","78ee6ee6ea5fda8849681b86c6654887"],["tags/dart/index.html","4d8582f9c131a10b1a25548627a4a8fc"],["tags/express/index.html","acd70e6bf01345101ee713f2692dda85"],["tags/flutter/index.html","a1802bc87c73bc37d092403155c0b45d"],["tags/https/index.html","4539112a95e0c6839f60b8f80e2efecb"],["tags/javascript/index.html","1619fdaa454fef93221a315671f1dbbe"],["tags/mongodb/index.html","8b8bb8b44ed9b31c612e0180b7dfe6d5"],["tags/mysql/index.html","b35cc3164e6df541aec77a1f4f238c7c"],["tags/nest/index.html","aa4b120a2df08b3584f5c85421438a69"],["tags/nestjs/index.html","82037e99c5b4028584ba8060aeb28c56"],["tags/next-js/index.html","67b0c300abb4fc872d945bb2789fb28b"],["tags/node/index.html","87ff837fff46053eda5b6b12c273151a"],["tags/nodejs/index.html","d6c6e4d4f9c1085c3b7b3b5e34e0234f"],["tags/puppeteer/index.html","ac5f000dbaad087d15e252d6ea947b48"],["tags/react/index.html","c312c04bde7ca490c0b3e9a92a97d49f"],["tags/typeORM/index.html","6678b1a3b2e42c3ecf87450c4bab7a4a"],["tags/typescript/index.html","bbd38b24fdd6597f8e86626c3ea6ae8a"],["tags/web/index.html","615e15ebb8783a79796e911434c1404b"],["tags/work/index.html","dd5bda3aad64468a926e0ed7643d8a6d"],["tags/wxProgram/index.html","17eb5eeba485a316a8d5c7600a681de6"],["tags/效果/index.html","0484a9cc2cad4784752ca82a84824708"]];
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







