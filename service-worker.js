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

var precacheConfig = [["2018/10/13/hello-world/index.html","b5016bece37152ffbe9300249c75c659"],["2018/10/13/文本换行/index.html","94765e4d4587e25e6d9137ec93c7cb2e"],["2018/10/15/css实现轮播/index.html","75040b64c7b5de5478cfee4de7b1e54c"],["2018/10/15/puppeteer-API备忘/index.html","6c827d483ac360ff38ab8d58d804b3c9"],["2018/10/17/DOM操作/index.html","df6815b95e157689b0be600b2f35451f"],["2018/10/18/rust语法备忘/index.html","1b8af1c9d6f3f7e69e437e1ea66d3d33"],["2018/10/18/typeORM学习/index.html","e80480a8d40fb1d047d790472d7792f4"],["2018/10/25/typescript知识点/index.html","9100eed6f5a251991cd85cbc7dc077aa"],["2018/10/25/小程序思考/index.html","7ba06aa6bdb017847203306250467b82"],["2018/10/29/angular指令/index.html","7a3841b587a82fac15fcfe61c61c6526"],["2018/10/31/css动画/index.html","848a5ed1efa45af8746adbbaf42e1702"],["2018/10/31/css布局/index.html","4f380c7f05fe8d855bc49c59e5f6e682"],["2018/11/01/angular生命周期/index.html","09a8a4f91d3525a649c09590d23d5680"],["2018/11/01/angular组件交互/index.html","e53d4a59ee7541054d7197407666df30"],["2018/11/02/angular模板语法/index.html","2fba9fe6ea21283f5c3280d2f41c865d"],["2018/11/03/mysql命令行/index.html","89113614508674f64eafa1da9ca425a2"],["2018/11/04/css知识点/index.html","13a9697a70f4d4a4cae6ee4393090f3a"],["2018/11/14/nest学习/index.html","519aa9e5cddc5bed40df5f1cf8343bca"],["2018/11/18/js注意点/index.html","fe1e036006e77e5c2d9e26ee185293c1"],["2018/11/21/工作bug总结/index.html","e412bf7f4972cfc845d16bf92596ee5a"],["2018/11/22/mongodb学习/index.html","a79e054e6ff9f6d34de8ffcbef09249e"],["2018/11/26/react坑/index.html","261e28e1fa376d65a19c4476e94b7052"],["2018/11/27/typescript实践/index.html","1665323c8597a304ded90616e16029ea"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","60ec66c78ce00453847da1fb90a28a96"],["2018/12/01/vue学习/index.html","36cefffac4aa1c63768af578f5697a1a"],["2018/12/07/nodejs the right way 一/index.html","633e6f726a3591c049622d391d5b2eb4"],["2018/12/07/react生态基本使用笔记/index.html","64ecb5a094c629139a73e77e4f4520d8"],["2018/12/11/rn基础一/index.html","d1f6ab67b0568c200be69afd0e803fb1"],["2018/12/11/函数式一/index.html","dcd3246ac3368dea9e7ea3ec56f68968"],["2018/12/12/nodejs之process/index.html","44df2d3ba6c9022ffcc2fd860ce032ad"],["2018/12/12/node事件循环/index.html","a2e332b77a9c187ea7439e3ad300a5f0"],["2018/12/13/elasticsearch/index.html","17a11f4ac1aa7e945c02fe998d1a55a3"],["2018/12/13/express/index.html","b8c861d10ae902c23627a1b1fe1bd629"],["2018/12/18/小程序性能优化/index.html","6a01ce490c0c5c559715c701c4125cda"],["2018/12/20/express2之database/index.html","0cc1aa29563bf040b8bc603d7820f398"],["2018/12/26/flutter学习1/index.html","f302f99b4eab955afb72e82b46fed44f"],["2018/12/27/flutter之包管理/index.html","5151a1add8d5a61ae3e1981599f07ab3"],["2018/12/28/express测试/index.html","fd0dc8ff3fdab6bf345ac32ca7280d3a"],["2018/12/28/flutter之widget基础/index.html","0c03707d859fa3f86d4f335770a77da1"],["2018/12/29/Express值请求体中间件解析/index.html","78988ed6bfad5d077bd2e80733fd077e"],["2019/01/02/express开发小结/index.html","68e81c7d3256b24e77bf16778d74f9f1"],["2019/01/05/dart基础1/index.html","31ab5eb73ff832be6f50f0ad8512c965"],["2019/01/05/dart基础2/index.html","b06e9195247026771aa97c8baa560bad"],["2019/01/07/dart基础3/index.html","07deadc7649304e9538f0bd069925013"],["2019/01/07/express学习/index.html","634caac02d361dbcbd045afc13671b9d"],["2019/01/09/Flutter之文本/index.html","839fa347451327fd7f22fa01b742177f"],["2019/01/11/Flutter之按钮/index.html","2ee77a1d4d419c3e2594b7f22fe9c58a"],["2019/01/11/flutter之图片和icon/index.html","d6a29188483756de885bdfb0e89ef733"],["2019/01/14/next-js学习/index.html","7a627ced850e122cb2b65568cbc5f49d"],["2019/01/15/flutter之弹性布局Flex/index.html","b2eca7949a1d21b81f68cda6c49f4538"],["2019/01/15/flutter线性布局/index.html","7c4aac7f7128fdbb46fdbedab5e89dc5"],["2019/01/15/rust2/index.html","320a443bb1823dd83b288a883f57f3de"],["2019/01/20/express-ts上手记1/index.html","e5cbf807360a9578f9ccf1d321e092bc"],["2019/01/21/react遇上typescript/index.html","ae7ef67f7397dd9485808d137762e95c"],["2019/01/26/新点总结/index.html","f165a8911a222d3e6e715f937a97376a"],["2019/02/11/angular架构概览/index.html","52d12b24b3e9108f99638a5055b33d31"],["2019/03/28/promise相关/index.html","b92891bd66d67ef2cf56415bcdac48f8"],["2019/03/28/实现一个sleep方法/index.html","14832df6bd6010b7e43d75155d6d83c4"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","dba01a94b479e982c7eb78b6f40eead2"],["2019/04/02/证书可信任/index.html","b9db139bd23d14c0377d79ac3e64b2ba"],["2019/04/09/从一道题目谈谈跨域/index.html","821bf568803ddf7e91054cbbdf43409d"],["2019/04/18/关于滚动吸顶/index.html","154bc705a48ff2fd874a8f20818322f0"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","b41a90b57d2305500dbc4fa03bb5a3e2"],["2019/04/23/深入理解padding/index.html","56e09560a719d65a3c5576471493f47b"],["2019/04/24/css题目/index.html","299fcd0d5fe92822b2178d01dffbf8e5"],["2019/04/24/js题目/index.html","fd2f7945479dbc0bc1d1dc3e96ca66d0"],["2019/04/25/好吧-EventLoop/index.html","32bef590417461684e7fcd2f236083d0"],["2019/04/26/轮播图实现/index.html","85fd1ed653491146edb22ab6d882b822"],["2019/04/27/深入理解margin/index.html","4c1496fbfb14d9be696c7d5cbd4c879d"],["2019/05/07/FirstPaint/index.html","e3807bf181f0dcff282fd2709b132cf6"],["2019/05/14/图片懒加载/index.html","b532fbff1e94dc5187b1bab6e18d2389"],["2019/05/16/typescript学习二/index.html","314caa11b7c9309278d6232d843616d3"],["2019/05/16/利用原生JS实现简易的v-model/index.html","1e2411b497c3f70dbea71993e6cbea5f"],["2019/05/16/利用原生JS实现简易的vue/index.html","a7ba140d5a570b985ec56d66e6b5fc5e"],["2019/05/16/利用原生js实现数据代理/index.html","faec78b4bb947d2b14b163a889e5e360"],["2019/05/22/typescript搭配react使用笔记1/index.html","f57c1536894869ff8118580e7da25ef2"],["2019/05/23/typescript-react学习笔记2/index.html","4c38f0ec096b915f1be55ac7ed648043"],["2019/05/26/typescript-react学习笔记3/index.html","e17927697db73e7142efe5e028e918ec"],["2019/05/27/types/index.html","131ee2ca014c40520668eda65c15ab5e"],["2019/05/29/learning-graphQL-笔记1/index.html","3c6307e5252d7c84997edb3fbb877699"],["2019/06/04/ramda笔记/index.html","c9b6c1a6ece151331d719424df838eb8"],["2019/06/05/Sequelize学习/index.html","8fdb55f6864ef8c44ca6c052ab631208"],["2019/06/17/serverless笔记1/index.html","f519a51c62ab90a1f1681d3c021fe055"],["2019/06/21/函数式/index.html","3c44c04a51d039c58c30d5b55dd3da0f"],["2019/08/04/定投/index.html","417f67e776398c94816161ba52e3d573"],["archives/2018/10/index.html","35dd45f785c35fb4a8eb24ae49655c76"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","a50bfda02cec8b71e30dc6170f628aa9"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","c20d33586474e61116c48e4167d1fb61"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","a4116fb928c85a07d156377698699214"],["archives/2018/page/2/index.html","8f3bae51b823cae9e838013cad345896"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","a8b01b42aa7be34c901c647841ea25e7"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","21a821928ba67154075ce6acdff86d94"],["archives/2019/03/index.html","801c8dce370d6b60d5644ed87e1970de"],["archives/2019/04/index.html","52713ed9bfa096cd7333f3aeea1c1b53"],["archives/2019/05/index.html","99bdeac9c58fe81e2c69ac2d1b58f7e1"],["archives/2019/06/index.html","bf95433fec64874607db40edd235b772"],["archives/2019/08/index.html","1228a734a94763b06996c76a4e900c69"],["archives/2019/index.html","8ac0198c21312ea9ea4f672810758e98"],["archives/2019/page/2/index.html","4fc0f1e3eb947d93e6be40208a3b342e"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","d03ed816bcfa9fc0ce9a5191cd16e4d6"],["archives/page/2/index.html","74dafc7d5a701069453fb351a937744d"],["archives/page/3/index.html","751e0b18e1f12e3e24dd40250d94cc79"],["archives/page/4/index.html","096371e471742df8cdba3fece64fd01b"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","cbd07805c426fef9c8cd786a3ae451bb"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","8c4ef22d1acb82dd4e5d02ac653d1233"],["page/3/index.html","3833fa0e24002bedd009071738f8f475"],["page/4/index.html","d6f2c1cd05671b88c59ca0f1f06df6fc"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["source/tags/JS/index.html","77f9465169c934614b23aae8b48172c8"],["source/tags/ReactNative/index.html","a2eb267f0e1024540fe71feb9a03f1d3"],["source/tags/Rust/index.html","5e5835d2234460ea2df4789c52ca0d13"],["source/tags/angular/index.html","0bddfe29cfc1fe13485daaecf1aa068b"],["source/tags/css/index.html","f606bb68cb3e724d1faa3fb9d8ac45c9"],["source/tags/dart/index.html","c2d6bb210cfaba6850b13615df16b056"],["source/tags/express/index.html","d99d16276bcaa24932390935efe86cde"],["source/tags/flutter/index.html","9531af5fc8974cdf18ac32b89aaa2cda"],["source/tags/fp/index.html","beaa293533e70fe76f5afe83bbce5990"],["source/tags/graphQL/index.html","3fc2f80033084ad32c44d326d6b7ab46"],["source/tags/https/index.html","7e1581a0fabbf96a6d1c3efd735f48e7"],["source/tags/life/index.html","e5b696737ef7ae862043f65a1fbfb0a7"],["source/tags/mongodb/index.html","13ec96c5cf8e8ad87359f913033ca143"],["source/tags/mysql/index.html","d51eab77d0402783272fae0adf930e5e"],["source/tags/nest/index.html","cede4a638bb67614570b33cfbfe3f9d7"],["source/tags/nestjs/index.html","58eda13023e832c7fe1a241446ee7ad3"],["source/tags/next-js/index.html","91392e481a34d8e4e1f0abd51e0ef023"],["source/tags/node/index.html","6ccb58aedef9d2e80159ed17556ffacd"],["source/tags/nodejs/index.html","425343821974ee06d079a181ab85871f"],["source/tags/puppeteer/index.html","fe5383f1b25517df53fb88098b755bdf"],["source/tags/ramda-js-函数式/index.html","548732022e9ff1a9e5a758647e8b36c1"],["source/tags/react/index.html","bccadd98202159afa0f36a05fc284316"],["source/tags/sequelize/index.html","047c50c6a7a9cc0cb0afc86232389327"],["source/tags/serverless/index.html","5260b904d092943d1d7a5b514a69bf59"],["source/tags/typeORM/index.html","e74ef45e88ecfa8d471eaacb2155d042"],["source/tags/typescript/index.html","18eb89c2d20485d6bad8abe333bbdc33"],["source/tags/web/index.html","a46ccae7980f1ee2f2073eb41c6c3c2c"],["source/tags/work/index.html","ae04883d3384c0c85bddc4e25e707fca"],["source/tags/wxProgram/index.html","ebf986ebd14c08cf08eadf9c81b8df08"],["source/tags/效果/index.html","02c6fd3625418a8e0670f7cd77950120"],["sw.js","b383900b2226b6cd496acdb113d46b8e"],["tags/JS/index.html","a496edf891398546cfbb92af6e2af540"],["tags/ReactNative/index.html","bc63ea8dd09b9a25a8c67ff3e4b694ee"],["tags/Rust/index.html","77a63d20371b755fd43be0b1fe0da6f3"],["tags/angular/index.html","1107e8478bec8018aadcd9bae0c201fc"],["tags/css/index.html","6076864768c681a5caa1440d3f441d81"],["tags/dart/index.html","d0987021860ffee5fcbf3cb8d41f7664"],["tags/express/index.html","2702d0cbbd061fa367adcaa784ee2996"],["tags/flutter/index.html","20a37202e892657e031d16cd52ad51fa"],["tags/fp/index.html","7b95a9e3384508957ef3bc8cca05f4be"],["tags/graphQL/index.html","27d169bf8a49ceddf9f2283ab1d574fe"],["tags/https/index.html","b1c09e356c4a34c1be0d4615414c3e4f"],["tags/index.html","88b4fd254d233d4f86beb5aa1a016ca2"],["tags/javascript/index.html","9b1d95cf0649e6d5e9e33c6fef9b8695"],["tags/mongodb/index.html","94955b974d2eea6c674639e50acc73e1"],["tags/mysql/index.html","a8eed85eec6a33ee5a9466dd3eb064ea"],["tags/nest/index.html","b6bffb53930503ae3223212d2d0f7d49"],["tags/nestjs/index.html","bb5adcdfe919f9e93fb9e99db9565bfd"],["tags/next-js/index.html","a5d69c12f49ba7ff25f0596b6e7c105d"],["tags/node/index.html","77c38a31105dc20189afd072fac71fb0"],["tags/nodejs/index.html","f9224555bb55805e6cfe3bf0396a3ee1"],["tags/puppeteer/index.html","1a68244058d09c78897ced09f604bc1f"],["tags/ramda-js-函数式/index.html","64e21cb8c870a890b21964ca6c1d6981"],["tags/react/index.html","d79099d5bb7e093677ca002d502d8f0e"],["tags/sequelize/index.html","09ca9749764b382aab608f049545d57f"],["tags/serverless/index.html","9cd27b23fe85f759e6e6153dd61a8781"],["tags/typeORM/index.html","32127efd27c453d957fe1f16ccc20f00"],["tags/typescript/index.html","494d7cae947f3b830c36e531a96d7eb6"],["tags/web/index.html","806cd43e14a01adb06553ea7da1c3c4c"],["tags/work/index.html","eee45e8d6c1f8ff2d56b65da19ede7e5"],["tags/wxProgram/index.html","989e31a49a498a43bcf9d810266357e6"],["tags/效果/index.html","aa728e0b2962acbd4e0e73e9d700784a"]];
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







