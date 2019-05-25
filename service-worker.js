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

var precacheConfig = [["2018/10/13/hello-world/index.html","8fab4f581fdb86ae739c0aaa95c32b8f"],["2018/10/13/文本换行/index.html","7f91809005bd771e0867c7d6706ee965"],["2018/10/15/css实现轮播/index.html","2a8260545fa4293ac652e0c32d9c6a23"],["2018/10/15/puppeteer-API备忘/index.html","df91ea689d838d1e1e0f4165b06b9e10"],["2018/10/17/DOM操作/index.html","ea581cbc0d3243ac5d9d515c768146f5"],["2018/10/18/rust语法备忘/index.html","72928885747f79513635a731ab58b0c3"],["2018/10/18/typeORM学习/index.html","1e914806f29c07efa90162c122ea644c"],["2018/10/25/typescript知识点/index.html","d8fda9de142b544b1928989e2ef85788"],["2018/10/25/小程序思考/index.html","a314c1c85511a79fea1c03d90875cf44"],["2018/10/29/angular指令/index.html","bb77ab87ad56d03373551c24e2911e3f"],["2018/10/31/css动画/index.html","883daa1b49bbf1041ededf48b95fc9d2"],["2018/10/31/css布局/index.html","85e7838103407d1f28d656e4ac5e3d9f"],["2018/11/01/angular生命周期/index.html","61cf77790988dc46a849bfc56204c0ce"],["2018/11/01/angular组件交互/index.html","40e3d98f34b592d611508e8823387ec0"],["2018/11/02/angular模板语法/index.html","04bc0856c1cf2c3fec320e8f3d2e6732"],["2018/11/03/mysql命令行/index.html","69d3dd5e74febf17109b7558c51fdc36"],["2018/11/04/css知识点/index.html","b6f817d66141a1b59854134b8fbe4123"],["2018/11/14/nest学习/index.html","dd8cb86fe1a65f4f2f0aa198e5c5c8df"],["2018/11/18/js注意点/index.html","249774fdf844498fb55ef3c08c5c4da6"],["2018/11/21/工作bug总结/index.html","374f9ad419fc5c64bd8fde78e9555c13"],["2018/11/22/mongodb学习/index.html","44b55a99d2fd6072e2737edb9396b5d6"],["2018/11/26/react坑/index.html","6cb00b55ddb313760faafed10627db49"],["2018/11/27/typescript实践/index.html","829abaea0224e84bde26129502b68faf"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","20be0d81d66847f344f6851daf923929"],["2018/12/01/vue学习/index.html","a4c96d3c0ca87eaba303149b7c8baa29"],["2018/12/07/nodejs the right way 一/index.html","38e09830f63a5c8014abb436f2c3acc4"],["2018/12/07/react生态基本使用笔记/index.html","c5af7468811f00a540d79cdfdd3448f2"],["2018/12/11/rn基础一/index.html","a04f54e6d6300813d3c05b6356d7110e"],["2018/12/11/函数式一/index.html","c8ba739a5fc057dd90f4edb759d8f8ca"],["2018/12/12/nodejs之process/index.html","d49ea0c66fa41dd03f025d06661f4b9c"],["2018/12/12/node事件循环/index.html","95cd054574cde6d67b7504be1799f7de"],["2018/12/13/elasticsearch/index.html","5dc418c380fd31e8d0c8cc1b7069bc8d"],["2018/12/13/express/index.html","3503b76f1996c0725332f7323f5e3a05"],["2018/12/18/小程序性能优化/index.html","63c124482fcd64ed28d255384eb84d99"],["2018/12/20/express2之database/index.html","4b0b99d3e7dc3b38e4e86f8e8e47a758"],["2018/12/26/flutter学习1/index.html","27a9af35ec4b624f37f2205cb06cf77f"],["2018/12/27/flutter之包管理/index.html","bec23c6d4ae0a4022b3b75855a946937"],["2018/12/28/express测试/index.html","cff0a96112f3a405610bdb584e5b6402"],["2018/12/28/flutter之widget基础/index.html","95d5c2127c5aa716084218f55d33c542"],["2018/12/29/Express值请求体中间件解析/index.html","336604070ca06b76c0cddd7bdbe3c1f9"],["2019/01/02/express开发小结/index.html","8e451347f4110869e66af4f2d22ee5cd"],["2019/01/05/dart基础1/index.html","a0e4590b333a6d01e05ff3422689a564"],["2019/01/05/dart基础2/index.html","a8480ce50155826979ff51c3f24daf49"],["2019/01/07/dart基础3/index.html","8eb14ab59e01dcb65b6959240f7d9753"],["2019/01/07/express学习/index.html","6fab0bc76cc5b243151531d1098cb225"],["2019/01/09/Flutter之文本/index.html","4d555468e5a9a9fd5158e75ba924f171"],["2019/01/11/Flutter之按钮/index.html","d6ce2406379eb0d00b846b62127de5a5"],["2019/01/11/flutter之图片和icon/index.html","9e981842f6c61bb1963648406e06329f"],["2019/01/14/next-js学习/index.html","76163a09cf904ce5f4a1ced1bb0216dd"],["2019/01/15/flutter之弹性布局Flex/index.html","4f597f1d925ed5a4fbd305112d750b7a"],["2019/01/15/flutter线性布局/index.html","a6bc9de6596719fe5cff16a56f78ac65"],["2019/01/15/rust2/index.html","e6019701608f371bcfdb38536bc96479"],["2019/01/20/express-ts上手记1/index.html","723d1a1fd5caa4fb3a7a742af97beee3"],["2019/01/21/react遇上typescript/index.html","d584254d24e87d8c93990903d84d910a"],["2019/01/26/新点总结/index.html","f5a8c018b7a9d4777caf73e83066901c"],["2019/02/11/angular架构概览/index.html","92747664cba120ceae19733cb1684415"],["2019/03/28/promise相关/index.html","de11b0ff4244bf1814c64096cee5422a"],["2019/03/28/实现一个sleep方法/index.html","ba559565d1c5f2350b00baa26bd82d9b"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","a640c7b647c2523f1eb77751428181b7"],["2019/04/02/证书可信任/index.html","20b11d86a52389077c8f05fdcc0a3043"],["2019/04/09/从一道题目谈谈跨域/index.html","3b166a549d73a7693e7256b50b1502b5"],["2019/04/18/关于滚动吸顶/index.html","3dbda712a09da1242392a2132454d0e0"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","569f9ccdfeb74b7d5f12c3a7a87ba7a5"],["2019/04/23/深入理解padding/index.html","2de85d90cec6044da87bb61db32fbebc"],["2019/04/24/css题目/index.html","8211e647898e9bfe897c7996ae571ca6"],["2019/04/24/js题目/index.html","c5c74a5168c653d158cc70e3c6e020d4"],["2019/04/25/好吧-EventLoop/index.html","fb1670df0e6bffa38297216ff4795259"],["2019/04/26/轮播图实现/index.html","f9270bc95588176131a1907c44ae992b"],["2019/04/27/深入理解margin/index.html","ba4a2961f41907bca011d143f9d10b6b"],["2019/05/07/FirstPaint/index.html","1d707aaa9f5d8d4843bf5f94a5344bbb"],["2019/05/14/图片懒加载/index.html","7ad96436641706d1d6bdd3e362b37518"],["2019/05/16/typescript学习二/index.html","7bd6506e71674a58c9faaf3c0afbb327"],["2019/05/16/利用原生JS实现简易的v-model/index.html","81ff497d0db1fd85f9ac08f59a0c75d8"],["2019/05/16/利用原生JS实现简易的vue/index.html","a7ba140d5a570b985ec56d66e6b5fc5e"],["2019/05/16/利用原生js实现数据代理/index.html","faec78b4bb947d2b14b163a889e5e360"],["2019/05/22/typescript搭配react使用笔记1/index.html","354dcdc3d4e5bc625e966a42bf140424"],["2019/05/23/typescript-react学习笔记2/index.html","9ed996741209324cc5c94df1c2eb462c"],["archives/2018/10/index.html","c789d1b0f0026941445ce83f1de8f2a3"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","94b7decfd9e8124341ea724a385356b3"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","88c55a31ecb07ba3d896097f2263b94c"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","efee89f3b18a0964ef77a23f2b86651f"],["archives/2018/page/2/index.html","81797107e145c6215ed414ab588aec3e"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","ad903d83971f1924ad36cd2cf3490611"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","10bcf9ae19d09f9c6bb3e616a72dff58"],["archives/2019/03/index.html","e12c356e769dc6586842ad2897ad5e40"],["archives/2019/04/index.html","4e07987976af4a7759776f8d23c28c59"],["archives/2019/05/index.html","11aeaf1f64012007a41a2623ff99e5c9"],["archives/2019/index.html","11c61efe88c08ea6a77f4597da83e9cf"],["archives/2019/page/2/index.html","fb7cc4b9915bb0bf2888da49c91659fa"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","c1c30b54551f8a469eb7b88ad14fcc15"],["archives/page/2/index.html","c47f39d8c18012bff3405c00a326b353"],["archives/page/3/index.html","a5526ae59e7a18947b79108c23c38ce6"],["archives/page/4/index.html","2a5cfb6edd66e1c6d4b5a05629a3b0f3"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","554c323b612bbcbeb986e08b9ecf8efa"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","aa50e755a6962a4f3ba0616e8c3e68ab"],["page/3/index.html","a4d4ce3309e1a982acf65c229a34a660"],["page/4/index.html","eba225f4731128f754951f8c46bf2c4c"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["sw.js","8e59598b2f4a1e387767ceb31015e1a1"],["tags/JS/index.html","ff5e20b6b422cb34c55fb02ab0a71d12"],["tags/ReactNative/index.html","02a49649d2c15609ce221b14f6baea64"],["tags/Rust/index.html","da4b8d437cd879d9229418fb1d7ac5f9"],["tags/angular/index.html","085dde7f27cfd6456a3f79a0c49952b2"],["tags/css/index.html","a165906191d289bf89274c9c0901cf1e"],["tags/dart/index.html","fdbbc21e9b611559ba1d80ebde4f3a87"],["tags/express/index.html","92bd6ea9c1197ea759fcab0190e2cb6a"],["tags/flutter/index.html","5b3ed372da6d63f3fd9b63088177e4cc"],["tags/https/index.html","0a2529b79936d507bca36684cb719fd9"],["tags/javascript/index.html","2bfd62cbb35a0c8f2fa8d965ef0cb382"],["tags/mongodb/index.html","230fce5c4b1422799ca7a9bbd170873d"],["tags/mysql/index.html","1e11c1fb9bdc0fff1703513442e3a4cb"],["tags/nest/index.html","9e353d1727854e7afb72fb3f42a4859c"],["tags/nestjs/index.html","0403eb1a339f2d2f6b525c0a41603092"],["tags/next-js/index.html","c6cd2c5df8b74a06ad2d3ca9d9bd5c29"],["tags/node/index.html","b4c2420878b734b93d1c2d46aebdf7d0"],["tags/nodejs/index.html","5248ef2c6980ddd3226036ebdf01df8f"],["tags/puppeteer/index.html","0d8a35968c5577b35d2f60542c1addec"],["tags/react/index.html","e17c3df53d8fe13556725533520a1521"],["tags/typeORM/index.html","879fac0166bfe89ffa22b28612c18b6b"],["tags/typescript/index.html","8c8be9990030a2abe8aac925d8d9e306"],["tags/web/index.html","e9935e4b68c0d2541c5a31cefe51454c"],["tags/work/index.html","d1cfa65e2aa0e642d3ff1a335dad6650"],["tags/wxProgram/index.html","62352c7bdda432cdacbf0b443a391d83"],["tags/效果/index.html","ce2ddcae5eaae3891ec1c8fcc705acb6"]];
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







