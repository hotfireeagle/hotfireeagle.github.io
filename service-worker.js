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

var precacheConfig = [["2018/10/13/hello-world/index.html","2cee9683fae30633c080878fa48db07c"],["2018/10/13/文本换行/index.html","ada06e95c9079330998d81936f74e8c5"],["2018/10/15/css实现轮播/index.html","ed62afa4de9ba36caaf1290b636035d6"],["2018/10/15/puppeteer-API备忘/index.html","0002641b91a12fb85d975f1ede7805f7"],["2018/10/17/DOM操作/index.html","ce5e2b0b62cc44da87d8e6a5511dace8"],["2018/10/18/rust语法备忘/index.html","9054d3923670a9f921613f7c49a0b991"],["2018/10/18/typeORM学习/index.html","802e472db02ddfe4215c0eb51165b3ec"],["2018/10/25/typescript知识点/index.html","cf7370e1f7f3633334e367d119f9f041"],["2018/10/25/小程序思考/index.html","8ba1126b3cba8066a1edf31b5d5a0050"],["2018/10/29/angular指令/index.html","5eae8bc8ade779baf24bd53436f9c3c9"],["2018/10/31/css动画/index.html","9bd79f1b726a89e0fb88a32330fabbd3"],["2018/10/31/css布局/index.html","c225112504bfc63a070df1ecb670cc9a"],["2018/11/01/angular生命周期/index.html","4ea8b07bb9192ca23f8adffb486ed68d"],["2018/11/01/angular组件交互/index.html","650d5f28f4488c4053ae152f9c7c4bd3"],["2018/11/02/angular模板语法/index.html","e3938ebd6edfd19c782d8b998b88bf0e"],["2018/11/03/mysql命令行/index.html","9684975af5382e53686068b17fd035d9"],["2018/11/04/css知识点/index.html","0188eb29026dab212ed9944da0f6e94f"],["2018/11/14/nest学习/index.html","10e5c17f2d602d7c8854f4f3890d051f"],["2018/11/18/js注意点/index.html","fe1e036006e77e5c2d9e26ee185293c1"],["2018/11/21/工作bug总结/index.html","aafb1b807b8529bb252b9a06d9c237d0"],["2018/11/22/mongodb学习/index.html","54235f1a28249e0445ffc1188ccd3957"],["2018/11/26/react坑/index.html","3e74119912f3bdb61367188b4a0e01b2"],["2018/11/27/typescript实践/index.html","3e6e37bfa25f8076b328783ea5ec8c92"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","c93bc39a4ce15430bceb331e3605a172"],["2018/12/01/vue学习/index.html","0e999ab554592b3b47735b956ca3d906"],["2018/12/07/nodejs the right way 一/index.html","ecb9ced82780d5b4f502f7832cfa0bd6"],["2018/12/07/react生态基本使用笔记/index.html","50854d8cfb42398fb56275e5023e9ca9"],["2018/12/11/rn基础一/index.html","989581732582eede81f00d6bb3cedd82"],["2018/12/11/函数式一/index.html","dcd3246ac3368dea9e7ea3ec56f68968"],["2018/12/12/nodejs之process/index.html","d7e1ac6da651e467dbd9ac3ee3397724"],["2018/12/12/node事件循环/index.html","957a51029bc62926219854819d326852"],["2018/12/13/elasticsearch/index.html","546f35c746afd7d36c7603a23a5f00e0"],["2018/12/13/express/index.html","9c817f6fa2e9fa707cdac7efb6e81359"],["2018/12/18/小程序性能优化/index.html","6a01ce490c0c5c559715c701c4125cda"],["2018/12/20/express2之database/index.html","4fb7b3bdf5ab745898d4dd9a56bc22ad"],["2018/12/26/flutter学习1/index.html","c60bb5cc640eda0fe7db3712138d6b27"],["2018/12/27/flutter之包管理/index.html","e9b03cbd21e8a47da07d9516078ea7fb"],["2018/12/28/express测试/index.html","b3e56f49596f30b32878f33d75f0fc98"],["2018/12/28/flutter之widget基础/index.html","eb89b4fc49a3a47dae3e42687b5bd184"],["2018/12/29/Express值请求体中间件解析/index.html","70f383abcea721b83068c2106d8584b7"],["2019/01/02/express开发小结/index.html","3d9faef65887d916f9c654657c859280"],["2019/01/05/dart基础1/index.html","0f42dd5d085bb8fbf6b87f61b3bb3e2b"],["2019/01/05/dart基础2/index.html","d36a8cae18810a429b9d8941ee825b49"],["2019/01/07/dart基础3/index.html","e2f55b28c14646c1b9e3b48c4334b8d5"],["2019/01/07/express学习/index.html","bd8346eeeff38effdcf1443df1ffc39c"],["2019/01/09/Flutter之文本/index.html","72bfe4a1fcea2b57542a8f0df3ab8589"],["2019/01/11/Flutter之按钮/index.html","e3912dd402e0d3219d859e5877081078"],["2019/01/11/flutter之图片和icon/index.html","c5f9b7ca279a7ccad586d3b0690a3e77"],["2019/01/14/next-js学习/index.html","637342a6762d6926611cf0c641213e68"],["2019/01/15/flutter之弹性布局Flex/index.html","78b31dfcbcaad4eaeb9c60ba227f8528"],["2019/01/15/flutter线性布局/index.html","a15e54deb9683cc7907d1662ce797fb5"],["2019/01/15/rust2/index.html","76012af3ee148b83fd29cdf52e11e4dc"],["2019/01/20/express-ts上手记1/index.html","b4a3a2bf5203874bb16c33562e3b3a7f"],["2019/01/21/react遇上typescript/index.html","9b037b4dbb608294cef9cc98a685e762"],["2019/01/26/新点总结/index.html","aec48698a4201cda6c2413f20aaff8a9"],["2019/02/11/angular架构概览/index.html","be322f70dfc34fba93cd4f4a2676a4c9"],["2019/03/28/promise相关/index.html","b601658503ef24f6bc42a79de7b15762"],["2019/03/28/实现一个sleep方法/index.html","0655c93aa81f3e34b81a68c09bae2a39"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","2d4044237ed42a1a6688753ea998a43e"],["2019/04/02/证书可信任/index.html","b7e07389be2932524a1698276c336d36"],["2019/04/09/从一道题目谈谈跨域/index.html","daf3bbd5ece7703b6c5bd3ea1a1287c3"],["2019/04/18/关于滚动吸顶/index.html","9013276b622bcf5247e91555ccb78423"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","8d0001fca3d4306822b0cb304f775234"],["2019/04/23/深入理解padding/index.html","7405f9909473d5d63acc9bb9a5792161"],["2019/04/24/css题目/index.html","50e259cf89ae5324aa40eb3621185f9f"],["2019/04/24/js题目/index.html","6f756a172b193d11645a0141f01d617a"],["2019/04/25/好吧-EventLoop/index.html","5d3af131ce6bf58ce9171988f2b8ef4f"],["2019/04/26/轮播图实现/index.html","4b3dc349a497ec9b12168f55df2ce7d8"],["2019/04/27/深入理解margin/index.html","eb301dd1a0e4e123584ccb504da02499"],["2019/05/07/FirstPaint/index.html","5dd37dc6db408c2418c3f8de6ae27716"],["2019/05/14/图片懒加载/index.html","513131fa76ad85532d80db88b2404191"],["2019/05/16/typescript学习二/index.html","589aff82ad21fba4c03e630a09977275"],["2019/05/16/利用原生JS实现简易的v-model/index.html","24643d3d82542452f1ffaef6be09b384"],["2019/05/16/利用原生JS实现简易的vue/index.html","a7ba140d5a570b985ec56d66e6b5fc5e"],["2019/05/16/利用原生js实现数据代理/index.html","faec78b4bb947d2b14b163a889e5e360"],["2019/05/22/typescript搭配react使用笔记1/index.html","f04d6d806dfa160d944eab1656740a51"],["2019/05/23/typescript-react学习笔记2/index.html","be4e5347569cf6078c837f4b2e48b562"],["2019/05/26/typescript-react学习笔记3/index.html","8b7d2c8d7ecaf625f517e24d4f23e9e4"],["2019/05/27/types/index.html","7d3c29dc633c9d889bff2e236c0dad18"],["2019/05/29/learning-graphQL-笔记1/index.html","22deb80adfacf91a05f41ba2e85694d0"],["2019/06/04/ramda笔记/index.html","02750102be5be575168c625fdad14d30"],["2019/06/05/Sequelize学习/index.html","ccf468cbc87ef91cb889ba3da83f9175"],["2019/06/17/serverless笔记1/index.html","a96af0de46fef3a4ff0860de186f5f09"],["2019/06/21/函数式/index.html","eb315db5f847819f59b4808c988a4807"],["2019/08/04/定投/index.html","231abc8578f121071572db9227b47ca4"],["2019/08/06/Rust类型系统/index.html","c5ab78fe340c64216921a1a5f931e4ae"],["archives/2018/10/index.html","61ce933366966272dca1059bd50e3476"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","37be5d7778a31ed3adf59b81330c199e"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","eb917f88886acbe1457756ddf6d4792f"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","6cc25a7a74075d0631fbb2d3baa8fe09"],["archives/2018/page/2/index.html","dbe4b480daffdeaa89f3f31afc28cbbe"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","14d797510adf0f2a32706c1ea1686453"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","a51c8023f0578ba984f3f47e3333b523"],["archives/2019/03/index.html","680ef63e9df3b0547d7794b8d5fb8585"],["archives/2019/04/index.html","5ff4a8ecb6353ac6bbc06f47cade3abe"],["archives/2019/05/index.html","46483aef3f4123c24ae4247dc04c7d73"],["archives/2019/06/index.html","80d17f0a0fe939172bd9f8ecce4b4dd6"],["archives/2019/08/index.html","cf1bfa81b40a50ed2c4856bb8f182e04"],["archives/2019/index.html","3542d25fc4b47eaa94348bc6f5fe7968"],["archives/2019/page/2/index.html","c994a279fa6f08a09131444b6bde92b9"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","44281141d2bf22d432444758cc3fc315"],["archives/page/2/index.html","3aff0e57a0a11c6343b944e679b309dd"],["archives/page/3/index.html","714f1bcff8ca974eac47f33b9a931094"],["archives/page/4/index.html","9865d84e5b78e8deee5a7ef15f117e8a"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","c33cbf711f04bbee540b0f432be9d4b6"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","cc8e2b84bb49baa51eab2289e904e03d"],["page/3/index.html","c1cf2733c207af27237a93a9dcfeee3b"],["page/4/index.html","11103271dee8b48715b8a8cbe8f74bad"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["source/tags/JS/index.html","3cc7c96ff63dd3c23c2a6fbc135bdf30"],["source/tags/ReactNative/index.html","15c6df18c53a465b1f8c2349652e6592"],["source/tags/Rust/index.html","e13083a1f474106c99acd5b553dba2a2"],["source/tags/angular/index.html","817441a25396a1f1987c52197f2d83d6"],["source/tags/css/index.html","2585f15619cd5a9b43c9379207fcf71f"],["source/tags/dart/index.html","fa1470c2ec95a72d9d6a16b2def7c73c"],["source/tags/express/index.html","6b5b8528e2adafe219eb6d7bc6228aca"],["source/tags/flutter/index.html","1fa295a9b43a5c74cfe61cb3e040ea3c"],["source/tags/fp/index.html","829a4b16a08654e6c2cd7a51f945957b"],["source/tags/graphQL/index.html","68b7967cc2421cf24493c30eeb5230d7"],["source/tags/https/index.html","5b0056e31e0866a3cef782d70f4ef500"],["source/tags/life/index.html","6a07bcb0f4940b99e3fb32929b31ef7f"],["source/tags/mongodb/index.html","e49d84c37cc24c0c0f54deb2bb4da897"],["source/tags/mysql/index.html","7bafa8cf5535d3a6e4a8305086028193"],["source/tags/nest/index.html","a6ed9b79aefd018893310279f5b8ef4d"],["source/tags/nestjs/index.html","dbef063a9c4f2acc2039e0b01588141e"],["source/tags/next-js/index.html","e8f79001bea2f1f79493a231d1bd7336"],["source/tags/node/index.html","3c41f130735bf708f1438caf4a436fc4"],["source/tags/nodejs/index.html","1709c638706066a9438358d51411c8c4"],["source/tags/puppeteer/index.html","de5e738619dd17ce941151ee4bab6143"],["source/tags/ramda-js-函数式/index.html","53fba773cd20c7f20cf256d647a1b542"],["source/tags/react/index.html","fe2ce4b60bb3f066daa05d60aa2db05b"],["source/tags/sequelize/index.html","da8af5d10ac4e3b33e6bd8c1a010f825"],["source/tags/serverless/index.html","10f11a24a1680f101f0ea8708724b5d4"],["source/tags/typeORM/index.html","f5cedfb682715e765f5fcdcbd5f8b0a5"],["source/tags/typescript/index.html","69630618fa8332f0c72e098d23918e4e"],["source/tags/web/index.html","cda0651313c88176bc699c8210e98116"],["source/tags/work/index.html","d6abf367877b7eeae2e69d8e90fdbf24"],["source/tags/wxProgram/index.html","6ef1bde9822b49a8f42a2442b68f390d"],["source/tags/效果/index.html","9638c340cd92ad12bc70ea038ef35019"],["sw.js","e90acfd82b9eb0ccf20769875cde1ff6"],["tags/JS/index.html","a496edf891398546cfbb92af6e2af540"],["tags/ReactNative/index.html","bc63ea8dd09b9a25a8c67ff3e4b694ee"],["tags/Rust/index.html","77a63d20371b755fd43be0b1fe0da6f3"],["tags/angular/index.html","1107e8478bec8018aadcd9bae0c201fc"],["tags/css/index.html","6076864768c681a5caa1440d3f441d81"],["tags/dart/index.html","d0987021860ffee5fcbf3cb8d41f7664"],["tags/express/index.html","2702d0cbbd061fa367adcaa784ee2996"],["tags/flutter/index.html","20a37202e892657e031d16cd52ad51fa"],["tags/fp/index.html","7b95a9e3384508957ef3bc8cca05f4be"],["tags/graphQL/index.html","27d169bf8a49ceddf9f2283ab1d574fe"],["tags/https/index.html","b1c09e356c4a34c1be0d4615414c3e4f"],["tags/index.html","f5c46220d0ec5603c72065e84265e041"],["tags/javascript/index.html","9b1d95cf0649e6d5e9e33c6fef9b8695"],["tags/mongodb/index.html","94955b974d2eea6c674639e50acc73e1"],["tags/mysql/index.html","a8eed85eec6a33ee5a9466dd3eb064ea"],["tags/nest/index.html","b6bffb53930503ae3223212d2d0f7d49"],["tags/nestjs/index.html","bb5adcdfe919f9e93fb9e99db9565bfd"],["tags/next-js/index.html","a5d69c12f49ba7ff25f0596b6e7c105d"],["tags/node/index.html","77c38a31105dc20189afd072fac71fb0"],["tags/nodejs/index.html","f9224555bb55805e6cfe3bf0396a3ee1"],["tags/puppeteer/index.html","1a68244058d09c78897ced09f604bc1f"],["tags/ramda-js-函数式/index.html","64e21cb8c870a890b21964ca6c1d6981"],["tags/react/index.html","d79099d5bb7e093677ca002d502d8f0e"],["tags/sequelize/index.html","09ca9749764b382aab608f049545d57f"],["tags/serverless/index.html","9cd27b23fe85f759e6e6153dd61a8781"],["tags/typeORM/index.html","32127efd27c453d957fe1f16ccc20f00"],["tags/typescript/index.html","494d7cae947f3b830c36e531a96d7eb6"],["tags/web/index.html","806cd43e14a01adb06553ea7da1c3c4c"],["tags/work/index.html","eee45e8d6c1f8ff2d56b65da19ede7e5"],["tags/wxProgram/index.html","989e31a49a498a43bcf9d810266357e6"],["tags/效果/index.html","aa728e0b2962acbd4e0e73e9d700784a"]];
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







