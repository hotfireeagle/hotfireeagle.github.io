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

var precacheConfig = [["2018/10/13/hello-world/index.html","bafe68250d3ac2ab8b1ebfdaff6e85cc"],["2018/10/13/文本换行/index.html","4a3dcbcee5331d91fa70572d6c6232bc"],["2018/10/15/css实现轮播/index.html","c049f72b4a90136113b8bfc46b310648"],["2018/10/15/puppeteer-API备忘/index.html","6b7f24e275a08ca3c9b50cd123282507"],["2018/10/17/DOM操作/index.html","f2f3a120821d61b26eb63a77ca14f7e9"],["2018/10/18/rust语法备忘/index.html","f0a097f7e408bc0696928a12a236479c"],["2018/10/18/typeORM学习/index.html","99d4be9041fae69a21e69a99ed308dc7"],["2018/10/25/typescript知识点/index.html","7437cec34816df3e9e128e660d312876"],["2018/10/25/小程序思考/index.html","ff1f0697c9d586c92e23d495394d7968"],["2018/10/29/angular指令/index.html","ba5edfad89812cbf2590c564ea0d741d"],["2018/10/31/css动画/index.html","a0bae199f8d1450e810220e11c93503d"],["2018/10/31/css布局/index.html","a2404b76310c548a7d06a3f038083c8b"],["2018/11/01/angular生命周期/index.html","1589f60a6d7921a8f550f35cef45bdbf"],["2018/11/01/angular组件交互/index.html","6e99fdb138bd7913657492ee1c5b2247"],["2018/11/02/angular模板语法/index.html","41e19228d53d289292cb3e5f5a1d7f78"],["2018/11/03/mysql命令行/index.html","100bc0a9385f66cc7bf16f1f9f850e7a"],["2018/11/04/css知识点/index.html","b93147defbf7981b7269ff59a9d0b88e"],["2018/11/14/nest学习/index.html","9809661461b0a4a4b9f1471834aec6f7"],["2018/11/18/js注意点/index.html","fe1e036006e77e5c2d9e26ee185293c1"],["2018/11/21/工作bug总结/index.html","dfa9c0accf068750092e7c4c69dafcf9"],["2018/11/22/mongodb学习/index.html","7051f32c1b0e2387896438899fb007ea"],["2018/11/26/react坑/index.html","7be9a6cc4f2fe252c5e6ae6a4442f62f"],["2018/11/27/typescript实践/index.html","2104572098760a381005d773ad556717"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","b4f513abeb8545f068e17e3da7e90560"],["2018/12/01/vue学习/index.html","a919f365484ae08decd85a172af5e613"],["2018/12/07/nodejs the right way 一/index.html","1fe36abe2fa4a7a9278dabf3fb53051f"],["2018/12/07/react生态基本使用笔记/index.html","258e9243949e193397906c530bad1da4"],["2018/12/11/rn基础一/index.html","ebb08af49c8784da99a4b40c0b3bb3c2"],["2018/12/11/函数式一/index.html","dcd3246ac3368dea9e7ea3ec56f68968"],["2018/12/12/nodejs之process/index.html","bed7937f1d937ec7b29d0726947ba97f"],["2018/12/12/node事件循环/index.html","484212fb7e707aaeb60903955c13b7e4"],["2018/12/13/elasticsearch/index.html","5dbf8ad6bf01efe2ce5ceb1e870dd8c4"],["2018/12/13/express/index.html","1dee4cfae8b391817b863719d61370de"],["2018/12/18/小程序性能优化/index.html","9203211447f6092ece1823c957ee6392"],["2018/12/20/express2之database/index.html","4740e3413ec2cbb0672d74356e76e13a"],["2018/12/26/flutter学习1/index.html","e172941dee33cb821a58b64976f52eae"],["2018/12/27/flutter之包管理/index.html","99ad03e5b41e9baeb86bc026f267e808"],["2018/12/28/express测试/index.html","34583b0b3f219cee14273d0252092a11"],["2018/12/28/flutter之widget基础/index.html","b0a4dbf11eebadb19f33e19b8b034958"],["2018/12/29/Express值请求体中间件解析/index.html","d1ed0b48112cfbeb76e68fc9c2a1b58f"],["2019/01/02/express开发小结/index.html","79f410b757431c1aec5190bef004443a"],["2019/01/05/dart基础1/index.html","30ff2db62bc717eb0d51f71b36fd9581"],["2019/01/05/dart基础2/index.html","5fc446b5d471e424c5e6d3aa81c332e6"],["2019/01/07/dart基础3/index.html","effc6cc0cdd754c53fc1a369fe00249d"],["2019/01/07/express学习/index.html","edecd553e02281fc7a22ca15c43f7f6a"],["2019/01/09/Flutter之文本/index.html","430cb82edfcf3b821e1f41b1077c65cc"],["2019/01/11/Flutter之按钮/index.html","e91a1d96fb0fbf34ba8994900203743c"],["2019/01/11/flutter之图片和icon/index.html","57ebc297e6b94e0d2fae73d762946c3b"],["2019/01/14/next-js学习/index.html","2816f4f0adc05d0d24871fa40539ef1c"],["2019/01/15/flutter之弹性布局Flex/index.html","3c94bb09254eb944ea4aa020986fa531"],["2019/01/15/flutter线性布局/index.html","be7f125ebc937e2e958d2b18ad8a3832"],["2019/01/15/rust2/index.html","726660802fe7f8b64574c2075370e396"],["2019/01/20/express-ts上手记1/index.html","1198c4c27d9e3e22389500a24dc071f2"],["2019/01/21/react遇上typescript/index.html","cc07738ba65a08f9757ab13dccf4459a"],["2019/01/26/新点总结/index.html","858770041d80e1b1f0ac48ec4926ae41"],["2019/02/11/angular架构概览/index.html","a7012f06ece451585cb38732873f4277"],["2019/03/28/promise相关/index.html","9ca9d895f057595f975c9263d811dac1"],["2019/03/28/实现一个sleep方法/index.html","bf7184ba2638553c6928e7e4bada5ad2"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","de5007007fcc746db3d76410d3f6572c"],["2019/04/02/证书可信任/index.html","6d437d05eb92d59def54654d075dd9cd"],["2019/04/09/从一道题目谈谈跨域/index.html","515fc1046a5ac27e1e43c238d04d1a97"],["2019/04/18/关于滚动吸顶/index.html","1ef4bee3cc20191778999f767a321fdf"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","108385410a3c1af9f429628985ca818b"],["2019/04/23/深入理解padding/index.html","9c5121697675fc776de47ecdb36a5e17"],["2019/04/24/css题目/index.html","68e3986eaa7d0d50276c758b378d292c"],["2019/04/24/js题目/index.html","26958c31c0a95fa28fd93bcec1476259"],["2019/04/25/好吧-EventLoop/index.html","8596162dd0848bd71da5c61040a1429f"],["2019/04/26/轮播图实现/index.html","c8cd283f8b14b9a706fb5c5bd716552f"],["2019/04/27/深入理解margin/index.html","8580430b60e5cbd4aea272842afd21ee"],["2019/05/07/FirstPaint/index.html","1f469f5456eba831f64cfc96f1f3b688"],["2019/05/14/图片懒加载/index.html","b3663d1f18bdd12670563e186e6bff6a"],["2019/05/16/typescript学习二/index.html","9ddcd78af1cf5974c93ab018003a9387"],["2019/05/16/利用原生JS实现简易的v-model/index.html","dc671e260d26455e43d94c475e76571a"],["2019/05/16/利用原生JS实现简易的vue/index.html","a7ba140d5a570b985ec56d66e6b5fc5e"],["2019/05/16/利用原生js实现数据代理/index.html","faec78b4bb947d2b14b163a889e5e360"],["2019/05/22/typescript搭配react使用笔记1/index.html","81462179446c86cba9f3f63e3cba8620"],["2019/05/23/typescript-react学习笔记2/index.html","7b53ad7d7ffee408d0bd5684bfca4dbf"],["2019/05/26/typescript-react学习笔记3/index.html","6904ca048b41757e6fa0af01ebec2217"],["2019/05/27/types/index.html","32d4b5e812c0d381eade0f522bfd125a"],["2019/05/29/learning-graphQL-笔记1/index.html","546b4c9ffc1336dbafe0c57a6aaeb4e5"],["2019/06/04/ramda笔记/index.html","1ed682b7de61216af3bbf4f56eeb06e0"],["2019/06/05/Sequelize学习/index.html","3201be925b85a34ef07e59b433b13e65"],["2019/06/17/serverless笔记1/index.html","c0cc0a3f704a1ea1d0a062b67bfa3e65"],["2019/06/21/函数式/index.html","2323e84d7e6158da02107b65650ab7ff"],["archives/2018/10/index.html","dd4b298154db8931d80ba3f42447d54d"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","8cf140e459a12b549f8ea756e0acb1cb"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","7d3a50143eefbbf18de2f97b41e1640f"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","396a8e48587638e12fda74cc5b028806"],["archives/2018/page/2/index.html","c32ad4c0b39891da1c4f10420c93e5e2"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","027acd064c20b5f01badc8b7ae364d5f"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","843d74e2902191e69788f797d45c1039"],["archives/2019/03/index.html","74d41be26eb8f1b0a7d42f2933741deb"],["archives/2019/04/index.html","97bf5e5a4c52e98b46e09eaef2c25d04"],["archives/2019/05/index.html","93e05daef2a0792052012faca56f88f9"],["archives/2019/06/index.html","82793dd8acb32a20505837d86482208a"],["archives/2019/index.html","d2dbc8290af1cbb155b4354731afeb0d"],["archives/2019/page/2/index.html","e872be80a79f19715f569f5645eed103"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","830144fe91ae10385cb71bcbf3680572"],["archives/page/2/index.html","3b98640e05e4f0cf685560c6ca2fc6f9"],["archives/page/3/index.html","8d0ed96770157fac70b932b5d70967e0"],["archives/page/4/index.html","866b44fdc71397762e04df8728526352"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","efabb69da237f653f81eefbbcc7012ba"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","0a4b634a92bf699e61b33f5da4be8bda"],["page/3/index.html","5914596ee462966114b8e4b5fc0563a3"],["page/4/index.html","2b38960047cb16e075f98a2925acb3a9"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["source/tags/JS/index.html","4e69136330b7ceb8bc4a02d80c96137c"],["source/tags/ReactNative/index.html","412e1562f4a78bb02fcc642954fbd0f6"],["source/tags/Rust/index.html","7f04b2c8959e8f26d20eba393411739f"],["source/tags/angular/index.html","86187b82d6fe7e0e11cbea52746acd83"],["source/tags/css/index.html","4cc7384faa36eedc809f9d331d715773"],["source/tags/dart/index.html","aa26e2677438fff077fe3559a9e1e084"],["source/tags/express/index.html","31aa23a493d72223220cb5c8ab618bf4"],["source/tags/flutter/index.html","85ebc4e5838635b2a961728c5d9003a7"],["source/tags/fp/index.html","6981c5b136cf0d81b78830300cac79d9"],["source/tags/graphQL/index.html","01555cc33164c4671e432d3f42a7f028"],["source/tags/https/index.html","d1611d7f18541c472b72f6e75a87f512"],["source/tags/mongodb/index.html","f4c58955109ef66ea9679e6f435e3614"],["source/tags/mysql/index.html","735c26cc0fcc27fd0785675b6414ff0d"],["source/tags/nest/index.html","168c8d889b89b71eb235346f9b776672"],["source/tags/nestjs/index.html","a5dfdff3cd5f8e21b632ce47f0d4b883"],["source/tags/next-js/index.html","8cc44b01619b29973c0dd89933a831c3"],["source/tags/node/index.html","9d1d827dc878faab063f68c0ccd818f1"],["source/tags/nodejs/index.html","a322fccfdecc401d42369ad9710214ee"],["source/tags/puppeteer/index.html","0c442030e46e958da9d07839b641c40c"],["source/tags/ramda-js-函数式/index.html","0ed74a5237c4ede403585ca96b0324a5"],["source/tags/react/index.html","a1e320bc4eca0d621a3f25d53325bec6"],["source/tags/sequelize/index.html","583b73881d5940096ffb8d43bb633a8f"],["source/tags/serverless/index.html","45e5d266ec8da8101daa0cd5993830c0"],["source/tags/typeORM/index.html","ae4b7334c3d1d601a86b5ed0be637097"],["source/tags/typescript/index.html","4b8c263899ee10e7f1e7092733f61303"],["source/tags/web/index.html","0fca2cd02dececdcc71207800564bf33"],["source/tags/work/index.html","a11e2fe8adfa94d9e48fc6e21b4ee0ac"],["source/tags/wxProgram/index.html","6f5ec54b6ed486b6525939f9c43efa96"],["source/tags/效果/index.html","458fd5851b28d6b7c0e1536e2c8c6674"],["sw.js","e2466e11e4c2035e19c7f8f03017ec1f"],["tags/JS/index.html","a496edf891398546cfbb92af6e2af540"],["tags/ReactNative/index.html","bc63ea8dd09b9a25a8c67ff3e4b694ee"],["tags/Rust/index.html","77a63d20371b755fd43be0b1fe0da6f3"],["tags/angular/index.html","1107e8478bec8018aadcd9bae0c201fc"],["tags/css/index.html","6076864768c681a5caa1440d3f441d81"],["tags/dart/index.html","d0987021860ffee5fcbf3cb8d41f7664"],["tags/express/index.html","2702d0cbbd061fa367adcaa784ee2996"],["tags/flutter/index.html","20a37202e892657e031d16cd52ad51fa"],["tags/fp/index.html","7b95a9e3384508957ef3bc8cca05f4be"],["tags/graphQL/index.html","27d169bf8a49ceddf9f2283ab1d574fe"],["tags/https/index.html","b1c09e356c4a34c1be0d4615414c3e4f"],["tags/index.html","890d2e6aae60dee913bcf2da5c6e2a34"],["tags/javascript/index.html","9b1d95cf0649e6d5e9e33c6fef9b8695"],["tags/mongodb/index.html","94955b974d2eea6c674639e50acc73e1"],["tags/mysql/index.html","a8eed85eec6a33ee5a9466dd3eb064ea"],["tags/nest/index.html","b6bffb53930503ae3223212d2d0f7d49"],["tags/nestjs/index.html","bb5adcdfe919f9e93fb9e99db9565bfd"],["tags/next-js/index.html","a5d69c12f49ba7ff25f0596b6e7c105d"],["tags/node/index.html","77c38a31105dc20189afd072fac71fb0"],["tags/nodejs/index.html","f9224555bb55805e6cfe3bf0396a3ee1"],["tags/puppeteer/index.html","1a68244058d09c78897ced09f604bc1f"],["tags/ramda-js-函数式/index.html","64e21cb8c870a890b21964ca6c1d6981"],["tags/react/index.html","d79099d5bb7e093677ca002d502d8f0e"],["tags/sequelize/index.html","09ca9749764b382aab608f049545d57f"],["tags/serverless/index.html","9cd27b23fe85f759e6e6153dd61a8781"],["tags/typeORM/index.html","32127efd27c453d957fe1f16ccc20f00"],["tags/typescript/index.html","494d7cae947f3b830c36e531a96d7eb6"],["tags/web/index.html","806cd43e14a01adb06553ea7da1c3c4c"],["tags/work/index.html","eee45e8d6c1f8ff2d56b65da19ede7e5"],["tags/wxProgram/index.html","989e31a49a498a43bcf9d810266357e6"],["tags/效果/index.html","aa728e0b2962acbd4e0e73e9d700784a"]];
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







