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

var precacheConfig = [["2018/10/13/hello-world/index.html","61d2855d758728e0720f13b172d62c13"],["2018/10/13/文本换行/index.html","e30c67eb80b568102b4c35c46fb66dc2"],["2018/10/15/css实现轮播/index.html","479aee7005ff094e81a8493edd933ce9"],["2018/10/15/puppeteer-API备忘/index.html","add2d179d5ab2860118dd2e7d2bdb40e"],["2018/10/17/DOM操作/index.html","d8d5201a4d9c1a4bec3ffa02315c5fe0"],["2018/10/18/rust语法备忘/index.html","607c3dd676cbfa26c3c0af246036dddc"],["2018/10/18/typeORM学习/index.html","587856690c4b25b3785e945345aee1de"],["2018/10/25/typescript知识点/index.html","aba7ec933d522c9a9ab28cab866ec861"],["2018/10/25/小程序思考/index.html","18ab818e72b92a295fef75b13d1fc26d"],["2018/10/29/angular指令/index.html","52bb6c50cbef81e142d5e55ab6810302"],["2018/10/31/css动画/index.html","4369adad7373f6110fec3ae0cab3eae4"],["2018/10/31/css布局/index.html","86c58c8853fec2bf16e8cd2e08d8e464"],["2018/11/01/angular生命周期/index.html","5a4ca9aac97071fe8de826a1ff8db2ce"],["2018/11/01/angular组件交互/index.html","8c8a7afdd73f57454f21e24e00e50d44"],["2018/11/02/angular模板语法/index.html","462f9148a80550c34fd53f421bfbac78"],["2018/11/03/mysql命令行/index.html","3f33c1594ba41c860d76921aa0942ddf"],["2018/11/04/css知识点/index.html","df12aec7f71ef372438a8bec8ae3dfc4"],["2018/11/14/nest学习/index.html","04737edade10548880eb2a3f954a02b5"],["2018/11/18/js注意点/index.html","fe1e036006e77e5c2d9e26ee185293c1"],["2018/11/21/工作bug总结/index.html","aafb1b807b8529bb252b9a06d9c237d0"],["2018/11/21/工作笔记/index.html","365e0b00e12682be79a49498bd048db0"],["2018/11/22/mongodb学习/index.html","9a3e6e6965bd272f608b43e603a9e1c5"],["2018/11/26/react坑/index.html","fa83d15c3f03bac187cbcdaed2c68f2e"],["2018/11/27/typescript实践/index.html","ed798dc26b5d47bc2df515eb998603ba"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","4e64f394d6100e14b7966886287bcff3"],["2018/12/01/vue学习/index.html","48790069a57cb3b9f6699f0e099c3f00"],["2018/12/07/nodejs the right way 一/index.html","619f439af336518942a146f9efe6cf99"],["2018/12/07/react生态基本使用笔记/index.html","0c91391ccc72ccd7ef58fd4ff39087ec"],["2018/12/11/rn基础一/index.html","855584b74b3843c582eb12b5b31a8064"],["2018/12/11/函数式一/index.html","dcd3246ac3368dea9e7ea3ec56f68968"],["2018/12/12/nodejs之process/index.html","0864fb1ec0302c01b4e5bb3118f5fb64"],["2018/12/12/node事件循环/index.html","30a6c3d03d6d46eccf9d60c1cdfbdba3"],["2018/12/13/elasticsearch/index.html","7b595a4dfd2ee9d5be6141bf4b3ab24b"],["2018/12/13/express/index.html","8c843c5885524c0f6ca68d7e15e5b77e"],["2018/12/18/小程序性能优化/index.html","6a01ce490c0c5c559715c701c4125cda"],["2018/12/20/express2之database/index.html","9d7e6acf2c574327c9fafea38fdcf27f"],["2018/12/26/flutter学习1/index.html","21a955352b905b1c1ce092249bd119d7"],["2018/12/27/flutter之包管理/index.html","894265f5b69cf8c9c793b7033b6abf74"],["2018/12/28/express测试/index.html","6f7aeaca11016f96f426e4423bfeb34b"],["2018/12/28/flutter之widget基础/index.html","05b189c5940d4f32607eb88459e1e21f"],["2018/12/29/Express值请求体中间件解析/index.html","bd71fefbd53ba56e15e0059bd7ee31f5"],["2019/01/02/express开发小结/index.html","08bd71e4fe4f2609375dc10e708cb967"],["2019/01/05/dart基础1/index.html","c8a9aabde635f3499a95b39396f4b6eb"],["2019/01/05/dart基础2/index.html","d4fdc545595f0c9441faa3ce8e3b0ae2"],["2019/01/07/dart基础3/index.html","dae2c7a60888d883184ab6940d03f416"],["2019/01/07/express学习/index.html","8684b1daadf4c86440bf57fcfcd06568"],["2019/01/09/Flutter之文本/index.html","cb1b7645a8842ece768489d08fb894ac"],["2019/01/11/Flutter之按钮/index.html","8cf92b726f8225df682b87d1e6ecaa96"],["2019/01/11/flutter之图片和icon/index.html","b0976b8566bad0fa02d4cff0794ffb74"],["2019/01/14/next-js学习/index.html","d5c09f18bc377544afabc46ef75c8599"],["2019/01/15/flutter之弹性布局Flex/index.html","710d671138369db94b3b353dcbccfd48"],["2019/01/15/flutter线性布局/index.html","e8044b791c71dca9dbf69d856dfa2e2b"],["2019/01/15/rust2/index.html","c21f8a66a480245832d784ebdfc8d6a0"],["2019/01/20/express-ts上手记1/index.html","877a1a3059088dd1836030b0b0ab3b2c"],["2019/01/21/react遇上typescript/index.html","056b1215a375d68e517560a8f751f0b5"],["2019/01/26/新点总结/index.html","1e24558dcebc677014b0c5a55c81f69a"],["2019/02/11/angular架构概览/index.html","eda31d4c42188985707ce1a299b60d40"],["2019/03/28/promise相关/index.html","12d421a70d769209f7c7ec3e659176b9"],["2019/03/28/实现一个sleep方法/index.html","2fc68d390a5c05ca99d05234177ff382"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","7491cdc6f5cbe23c0dbbab6a5cf33eaa"],["2019/04/02/证书可信任/index.html","310ecdaf6e7bcd656314aed9d5709fce"],["2019/04/09/从一道题目谈谈跨域/index.html","df0c0349465fb51030ef480a0faef7f7"],["2019/04/18/关于滚动吸顶/index.html","d65abda358e3035445693c3e9c0d2d60"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","3de08996e750fd15824a9dec5e8b3829"],["2019/04/23/深入理解padding/index.html","42dd7ac18589f9e4d4df3a2a1d3d5818"],["2019/04/24/css题目/index.html","0c3881b8c198493c10f9228734b5472f"],["2019/04/24/js题目/index.html","f992d9b88049fd0552d83b6d3f877d0b"],["2019/04/25/好吧-EventLoop/index.html","2b510365e655fe8e2e8b7e63777a4d7c"],["2019/04/26/轮播图实现/index.html","1c97a607f3f052ed145c4eb8c489a4c0"],["2019/04/27/深入理解margin/index.html","222ec3059f28234ac5c6d673686243df"],["2019/05/07/FirstPaint/index.html","ca577830ac575346ac0d4c51596e81e3"],["2019/05/14/图片懒加载/index.html","f80f2fef5b14d9008fe1cb3f5835b11a"],["2019/05/16/typescript学习二/index.html","257b0c8b77b355e4c143aa0f30fa630f"],["2019/05/16/利用原生JS实现简易的v-model/index.html","088a32e264b2940a7bc924eeaba63ea9"],["2019/05/16/利用原生JS实现简易的vue/index.html","a7ba140d5a570b985ec56d66e6b5fc5e"],["2019/05/16/利用原生js实现数据代理/index.html","faec78b4bb947d2b14b163a889e5e360"],["2019/05/22/typescript搭配react使用笔记1/index.html","b373937f6ffbd831f589379cd86aba28"],["2019/05/23/typescript-react学习笔记2/index.html","117f3964888d0fa302592e117f6c7eb9"],["2019/05/26/typescript-react学习笔记3/index.html","1ef241c1c5a4b68aa2b654071b886eda"],["2019/05/27/types/index.html","71824a6b514302b20170e07dbe192f2f"],["2019/05/29/learning-graphQL-笔记1/index.html","0e3f4ec37af85efa496135eb06326c68"],["2019/06/04/ramda笔记/index.html","cd646b71173e5e76e0ffb9cc3c03a9ca"],["2019/06/05/Sequelize学习/index.html","2d80737c120f6df7643d3d45cac68003"],["2019/06/17/serverless笔记1/index.html","72532fb6227bc6e4593433a943c5adeb"],["2019/06/21/函数式/index.html","39c81b8026be6b5dc603acd118577ed5"],["2019/08/04/定投/index.html","30a824d66c70fd10a2e3e0975d97c7bf"],["2019/08/06/Rust类型系统/index.html","61a2e9c72ebb64e1d4aab994d39dd08e"],["2019/10/03/History1/index.html","8493ecb7c413047159e74accb8a30aef"],["2019/11/06/nestjs的模块/index.html","259fb975e56cd94269e3dc09ff0555db"],["2019/11/06/nest管道/index.html","d73bc3b88a276e6baaaaa19ef3230137"],["2019/11/07/nestjs守卫/index.html","be9bed0a1b87d4a917197b246054be75"],["archives/2018/10/index.html","e5029d2519e543c98ee9a212cbf772c0"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","ac065b680a8b8431f502412b10f576a2"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","96c78f22df8146343e13d6d8ad76b5f5"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","94c71fa909c1cbbd52eab0b906cd7696"],["archives/2018/page/2/index.html","86431082315b2b9a59b5052c268fb1f8"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","6f5b99aaacb98007590863e1638f8115"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","b935f6ea179a4464bd135de8a0c066f8"],["archives/2019/03/index.html","ab46a0847baee9484f6d4084c79f4b3d"],["archives/2019/04/index.html","9a8abe52ca3237930c5beffcc2426167"],["archives/2019/05/index.html","aad7dbaea22b1aaf6c899ca1586ce062"],["archives/2019/06/index.html","0d9a3017a77f6615b119e45e6c13d8a8"],["archives/2019/08/index.html","34eb522d142e7c65b2635e47eecd061a"],["archives/2019/10/index.html","8744e0a5014233284559c061e1dd96c0"],["archives/2019/11/index.html","03c180a4d1f48459dad9099cb359b9df"],["archives/2019/index.html","7f411da60a1402d95f6acd964ed73700"],["archives/2019/page/2/index.html","e70095146477bc974514e2f695fc276c"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","5c7be32a7bf4fc70fd97467943ab2949"],["archives/page/2/index.html","6c64d46f6ec37b0824c4d9062ab5bd36"],["archives/page/3/index.html","27793aeddea19fff2892366595666686"],["archives/page/4/index.html","b56a9341424273ebb649c43bb0adc92b"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","18cff2d79bb177ce3a3f8a6e7232f2e1"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","507d7959bd04939f522364f84bce7e75"],["page/3/index.html","aa6acbff2d0c97421f8c63cb27efb3ad"],["page/4/index.html","1ddd9099c15f5698e6b406cf40e7f136"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["source/tags/JS/index.html","90d934ac34ed9abdc586cfdd685b701b"],["source/tags/ReactNative/index.html","a7362c14ddec5aacaf48330a524f4bbb"],["source/tags/Rust/index.html","3351f8e6faaa87c7e821840c8a355c6f"],["source/tags/angular/index.html","aeadcda20e635afce685af52ccb120a8"],["source/tags/css/index.html","c704f31578fd8e844b944d7bb9c082d0"],["source/tags/dart/index.html","2a79634e63dbda9cfe65fad2a546fc5f"],["source/tags/express/index.html","8bb522bd36e9c727ba2b3f48add10f9f"],["source/tags/flutter/index.html","7a954aeb064546d779291799e2e52089"],["source/tags/fp/index.html","f17a3d5e52e80a6848611f9ebbc3890f"],["source/tags/graphQL/index.html","b1a3af5a73b70b29739d5eb8f6d6f104"],["source/tags/history/index.html","090dfe2fc88f3803b025dec50cb61354"],["source/tags/https/index.html","fe2854738ab2fd2ab4d862cee7471710"],["source/tags/life/index.html","7895c3c7f232093108b2d301ada08a84"],["source/tags/mongodb/index.html","99a84b7c66c1392694139738e28cead9"],["source/tags/mysql/index.html","def391314db8555ce228d99ea5d486b6"],["source/tags/nest/index.html","5827e632c8f68b17846080e73bc65017"],["source/tags/nestjs/index.html","b2228479ea05dd47405a0fc5b164e5df"],["source/tags/nest学习笔记/index.html","245467e5c67e7335800bfdb1f5a352ca"],["source/tags/next-js/index.html","3e1b90fbd00f3a14f028ecbdb81f1e5b"],["source/tags/node/index.html","1dd2ee01287c841a34a75eb77e30a77f"],["source/tags/nodejs/index.html","92b8b16b1db9557d5cf866b96a25d46f"],["source/tags/puppeteer/index.html","69d2e24ff9718e47d55e77d763ff0d9c"],["source/tags/ramda-js-函数式/index.html","066cd14d72fee70db27f567c2432aaa9"],["source/tags/react/index.html","cd0ba6750df13347429c5f2929496659"],["source/tags/sequelize/index.html","d427d044297a3291e29b2759a2c86ab9"],["source/tags/serverless/index.html","7099e3fb924389cc6cf8130efbe2a615"],["source/tags/typeORM/index.html","858d99c359cddf843f1a766943f042a2"],["source/tags/typescript/index.html","0c61b9fc501e049027845f28fc0a7461"],["source/tags/web/index.html","7559b15c83607d6d7964314539beea47"],["source/tags/work/index.html","785b9a8b0821c4368cf04c0c101ee3cf"],["source/tags/wxProgram/index.html","9e5f7a884dccc9b18f2e3b56b3adca03"],["source/tags/学习笔记/index.html","8c266913be49e88d419a1859b9dd552b"],["source/tags/效果/index.html","09c696fa1a3849ee7792d05cbc4f1fdb"],["sw.js","c6a67223bdd042b95f225114c4d94dbc"],["tags/JS/index.html","a496edf891398546cfbb92af6e2af540"],["tags/ReactNative/index.html","bc63ea8dd09b9a25a8c67ff3e4b694ee"],["tags/Rust/index.html","77a63d20371b755fd43be0b1fe0da6f3"],["tags/angular/index.html","1107e8478bec8018aadcd9bae0c201fc"],["tags/css/index.html","6076864768c681a5caa1440d3f441d81"],["tags/dart/index.html","d0987021860ffee5fcbf3cb8d41f7664"],["tags/express/index.html","2702d0cbbd061fa367adcaa784ee2996"],["tags/flutter/index.html","20a37202e892657e031d16cd52ad51fa"],["tags/fp/index.html","7b95a9e3384508957ef3bc8cca05f4be"],["tags/graphQL/index.html","27d169bf8a49ceddf9f2283ab1d574fe"],["tags/https/index.html","b1c09e356c4a34c1be0d4615414c3e4f"],["tags/index.html","e6eed0277242f704d6e899ea30e2a6ea"],["tags/javascript/index.html","9b1d95cf0649e6d5e9e33c6fef9b8695"],["tags/mongodb/index.html","94955b974d2eea6c674639e50acc73e1"],["tags/mysql/index.html","a8eed85eec6a33ee5a9466dd3eb064ea"],["tags/nest/index.html","b6bffb53930503ae3223212d2d0f7d49"],["tags/nestjs/index.html","bb5adcdfe919f9e93fb9e99db9565bfd"],["tags/next-js/index.html","a5d69c12f49ba7ff25f0596b6e7c105d"],["tags/node/index.html","77c38a31105dc20189afd072fac71fb0"],["tags/nodejs/index.html","f9224555bb55805e6cfe3bf0396a3ee1"],["tags/puppeteer/index.html","1a68244058d09c78897ced09f604bc1f"],["tags/ramda-js-函数式/index.html","64e21cb8c870a890b21964ca6c1d6981"],["tags/react/index.html","d79099d5bb7e093677ca002d502d8f0e"],["tags/sequelize/index.html","09ca9749764b382aab608f049545d57f"],["tags/serverless/index.html","9cd27b23fe85f759e6e6153dd61a8781"],["tags/typeORM/index.html","32127efd27c453d957fe1f16ccc20f00"],["tags/typescript/index.html","494d7cae947f3b830c36e531a96d7eb6"],["tags/web/index.html","806cd43e14a01adb06553ea7da1c3c4c"],["tags/work/index.html","eee45e8d6c1f8ff2d56b65da19ede7e5"],["tags/wxProgram/index.html","989e31a49a498a43bcf9d810266357e6"],["tags/效果/index.html","aa728e0b2962acbd4e0e73e9d700784a"]];
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







