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

var precacheConfig = [["2018/10/13/hello-world/index.html","d968d6e260f8578c964f38ae4805bef7"],["2018/10/13/文本换行/index.html","8ed4b9ae87834c81b864cfdef5f61fc9"],["2018/10/15/css实现轮播/index.html","277c2499bf40451d8f437cbe58d0c9d5"],["2018/10/15/puppeteer-API备忘/index.html","f58b40eb405da800f6c6161f6233dc04"],["2018/10/17/DOM操作/index.html","c07696edac9ee4cec12805e65e130837"],["2018/10/18/rust语法备忘/index.html","a8929f78c7fc0694f9f8dd79834af1c8"],["2018/10/18/typeORM学习/index.html","20705dbca067d924b63ccf378f6400c4"],["2018/10/25/typescript知识点/index.html","d7f5771397137a71192816033d697446"],["2018/10/25/小程序思考/index.html","d0bd53d24c7c4a45040078980239222b"],["2018/10/29/angular指令/index.html","43499a37cce4a659081301df594c0a07"],["2018/10/31/css动画/index.html","89e666d5f2249b5ed614692b9200bccd"],["2018/10/31/css布局/index.html","3b41779e1bd5bf52f7d8444568a5e477"],["2018/11/01/angular生命周期/index.html","9a59cf63bb35b6307ccfc27e94d75744"],["2018/11/01/angular组件交互/index.html","54ce6ad361150ea5aa4f5df9df8e8d98"],["2018/11/02/angular模板语法/index.html","50e5b9d9c8f2ed234bc5b1548437fe3d"],["2018/11/03/mysql命令行/index.html","c653a675bea5bdab2d983b1f64e5d0bf"],["2018/11/04/css知识点/index.html","c21b050993be72df64cd11f688de861a"],["2018/11/14/nest学习/index.html","f7a21f06e91b0f409f48051a50ee29c2"],["2018/11/18/js注意点/index.html","fe1e036006e77e5c2d9e26ee185293c1"],["2018/11/21/工作bug总结/index.html","ec0e5a965cc0277b110a6af89f5b05d5"],["2018/11/22/mongodb学习/index.html","d62873192108a6cb6a692f3fc2cf51a7"],["2018/11/26/react坑/index.html","32171a67c0dfa05977053160008938ba"],["2018/11/27/typescript实践/index.html","d2735e46c6180c52b4070e2ec7e8556c"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","ee97ea018884f83e77d1f34a02d66eee"],["2018/12/01/vue学习/index.html","6852c1f114147340999a97b90c184f07"],["2018/12/07/nodejs the right way 一/index.html","1c7a4a6f7e0e645ab7c0fe530a12bf22"],["2018/12/07/react生态基本使用笔记/index.html","36fa84f907b7bc3b0cf3fc2d364112b3"],["2018/12/11/rn基础一/index.html","83c867eb1b3d1cf56ba6f39a919db789"],["2018/12/11/函数式一/index.html","dcd3246ac3368dea9e7ea3ec56f68968"],["2018/12/12/nodejs之process/index.html","053a094dfb04dee1fbe742a78c2f728c"],["2018/12/12/node事件循环/index.html","0493c42082b26ad659765f5d3fcaf776"],["2018/12/13/elasticsearch/index.html","a3c6960dfc6e411f7397ac661b69e9df"],["2018/12/13/express/index.html","3965b05b53d2c14644a348b30cab1e42"],["2018/12/18/小程序性能优化/index.html","28c005c8228b0ecb50be2c9ee7d51a2e"],["2018/12/20/express2之database/index.html","2bcc616de62486bd2de430d308e1c759"],["2018/12/26/flutter学习1/index.html","0be55edc2a4788b163c4a80cadf00e42"],["2018/12/27/flutter之包管理/index.html","ed469fcad0eb3cbeb03cad87c16bc855"],["2018/12/28/express测试/index.html","c68cc5361a9ce156eab798adf4231121"],["2018/12/28/flutter之widget基础/index.html","4d460043347f0bcb2d7c1d9d9d131c8b"],["2018/12/29/Express值请求体中间件解析/index.html","d15d901636122f738350e56655725bc4"],["2019/01/02/express开发小结/index.html","f7921fb12584935f5f971e0e5ed07bc3"],["2019/01/05/dart基础1/index.html","e75ca3ce89262e38d90632a6319827f9"],["2019/01/05/dart基础2/index.html","1b130269423acb1c8a569d0716f8d86e"],["2019/01/07/dart基础3/index.html","ac9265bfdec1d2c88337272e200ba6fb"],["2019/01/07/express学习/index.html","276226996fed2a4e54631aa06fded322"],["2019/01/09/Flutter之文本/index.html","def7f968e5f4145aa93d3e220eda9a35"],["2019/01/11/Flutter之按钮/index.html","a5d0040de92ff338421be51eda05e295"],["2019/01/11/flutter之图片和icon/index.html","aeeba69614c947ae17ee2c9f4c0c2d00"],["2019/01/14/next-js学习/index.html","eab4131122e3cd495e337e99d3b942d5"],["2019/01/15/flutter之弹性布局Flex/index.html","a1a58f5fc9dc86c5e86c6a26237e42d0"],["2019/01/15/flutter线性布局/index.html","47e1270ca12a3153749f768b4c6ec3c1"],["2019/01/15/rust2/index.html","b342c34074829780b52c6b8b480fd3e6"],["2019/01/20/express-ts上手记1/index.html","4d876e52f42277415ea3b2daf51da7b8"],["2019/01/21/react遇上typescript/index.html","be6aa3eed385d3b82be8ec5f98aefcf6"],["2019/01/26/新点总结/index.html","f8dbabdf38066ba82097f4edbdd3cc18"],["2019/02/11/angular架构概览/index.html","f532f4711b465ca083e82a64ff2c6b18"],["2019/03/28/promise相关/index.html","1db3c67a0b38480581a046dad96a309e"],["2019/03/28/实现一个sleep方法/index.html","710cc17cefe04986893e01ef50aa1189"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","04e3add507c4c87043e5383b240f94a8"],["2019/04/02/证书可信任/index.html","abc236617fd25a9cb0650071c3b7ac54"],["2019/04/09/从一道题目谈谈跨域/index.html","f2fa63e9260404eea4467633ebdf43b8"],["2019/04/18/关于滚动吸顶/index.html","3c5ed3a4ed6bea4a5c365ec5499d9094"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","e391e774607e1c0c65bd3126792a8b9e"],["2019/04/23/深入理解padding/index.html","b369d3141bff88517a3fdf0b1a22a123"],["2019/04/24/css题目/index.html","11dced3af460ba658bbb96e40ce07c3a"],["2019/04/24/js题目/index.html","8b8363924ad557a99d963f0f5951d456"],["2019/04/25/好吧-EventLoop/index.html","0477cbff46e2630089be4b6c76ff3623"],["2019/04/26/轮播图实现/index.html","6540f7eb0f5e3824a1fa368d7388b5f8"],["2019/04/27/深入理解margin/index.html","4da8cafd949f77d4b12037603362972f"],["2019/05/07/FirstPaint/index.html","10725c995c3d82b41135dc0fa842c5de"],["2019/05/14/图片懒加载/index.html","3b9682d435a16788a77c27dc3137aeb5"],["2019/05/16/typescript学习二/index.html","ae62a1b61511642e99ae7160049d80ed"],["2019/05/16/利用原生JS实现简易的v-model/index.html","468e5504304f3692634f7fe0a238509e"],["2019/05/16/利用原生JS实现简易的vue/index.html","a7ba140d5a570b985ec56d66e6b5fc5e"],["2019/05/16/利用原生js实现数据代理/index.html","faec78b4bb947d2b14b163a889e5e360"],["2019/05/22/typescript搭配react使用笔记1/index.html","eb0146c9ef491751f85d27df73702413"],["2019/05/23/typescript-react学习笔记2/index.html","09231ad8002b241314aff9aab8108bd3"],["2019/05/26/typescript-react学习笔记3/index.html","97261a0223df408b94ceb69c08edbe33"],["2019/05/27/types/index.html","ddea3c9757ee542e48f73555720f9bd8"],["2019/05/29/learning-graphQL-笔记1/index.html","5b05754bd50d7367216c243717e651cb"],["2019/06/04/ramda笔记/index.html","12c62e83724276918350bd292f7f25bb"],["2019/06/05/Sequelize学习/index.html","c2289c6870260713089276f8842c1dcf"],["archives/2018/10/index.html","c88d9aab308ef1a10b36c1d62400a39f"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","a521bb27b6fc065f23b5e3b77c5faaec"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","d88b4bca75f989d3bd2ad56cb493fcf7"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","34e5e304b22b58528a2c0f71a4ba49ae"],["archives/2018/page/2/index.html","eee70eb9e55812512a466bbd08c507f4"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","b4f071bd3bf27f6f8ddbd13718b854dd"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","e8307a25a5cc43d87d1ca4cc6287a05c"],["archives/2019/03/index.html","ec00cc7e253f8fb18bd49e8865d50c2e"],["archives/2019/04/index.html","f9cc3cc8c2643f752bb0dd3fe06b9a0a"],["archives/2019/05/index.html","8733ee70928f198fdd50385b74397c34"],["archives/2019/06/index.html","64b01781df916a3f667ad7aa49d9904e"],["archives/2019/index.html","7bbe45e97c1276d7d5dfbdf4c37e5cf9"],["archives/2019/page/2/index.html","ce0842fae04458a304eb73d86241fcf7"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","f68ea3bc928c2520b12e8f8dcf509664"],["archives/page/2/index.html","aade52f37ca7cea174e066720ff24e65"],["archives/page/3/index.html","3a1e32d54f4d555d837730d4cf823262"],["archives/page/4/index.html","80537f6f98fcd68010b2a9767370a681"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","ac0621a1e74620bcfbeb68d8fe18997f"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","cc3b55d3d6f6e72fa45af50a63121582"],["page/3/index.html","ed866f8701204808d5d9dab5dc4e54db"],["page/4/index.html","7464c1da456af497d3f1af011607a3ef"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["sw.js","1859641357df00155cd0d864aed6ac1d"],["tags/JS/index.html","406fc657e0d71bac8ae5e286104f3838"],["tags/ReactNative/index.html","d34fa0a019e50286c9bdabdc4e2513ec"],["tags/Rust/index.html","688535f24b9193ad614b02d7c88b80e1"],["tags/angular/index.html","6dbc016465870d343593611de74d1357"],["tags/css/index.html","6572134012e64286b396a734d9c4640d"],["tags/dart/index.html","66da08cfbb54ee9311e760c66e6df3b8"],["tags/express/index.html","2529e13074ccf3883743f61f389c03b8"],["tags/flutter/index.html","1e42933eb598adc76080f6c7b993aed2"],["tags/graphQL/index.html","d957be55e85e918341bc5a3303e9fa0d"],["tags/https/index.html","2c1b4f939c8c0443981a667d137db282"],["tags/javascript/index.html","9b1d95cf0649e6d5e9e33c6fef9b8695"],["tags/mongodb/index.html","57baca5cd3ff8a90fbb24596e1eec260"],["tags/mysql/index.html","a701059db661e821652984aa82fd815d"],["tags/nest/index.html","2b7b3b61be261f87f24cb42ed5783c3d"],["tags/nestjs/index.html","a5aa17b79c88464c0ff3f44e6340d6bc"],["tags/next-js/index.html","1e57649b02ababd64c51a310e58e7b50"],["tags/node/index.html","4660c5bacc6e3213de8ab4cb76a41398"],["tags/nodejs/index.html","f22deed81f375db558120ff0bf309391"],["tags/puppeteer/index.html","3c30fe07f61b72d511339b46d85af033"],["tags/ramda-js-函数式/index.html","119ba41c9d333acefb9be327d333fdcf"],["tags/react/index.html","7aecf24c09db7a5252ee8793f3ec3907"],["tags/sequelize/index.html","e2d6ee7b251c93988f1352fc0b70ca6e"],["tags/typeORM/index.html","08f6a4c616c44dca36a85194990f3d42"],["tags/typescript/index.html","221016baf89925fe7bd78b83a0c2d5f0"],["tags/web/index.html","5b6d798cfaafcd09895e7dae94a57d5b"],["tags/work/index.html","e8de3d3c34553e15452c10b49caa0c30"],["tags/wxProgram/index.html","2103cb63b822284a16ceb9db326ebe89"],["tags/效果/index.html","8a35f1894e06bc84d860c753713b1ce1"]];
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







