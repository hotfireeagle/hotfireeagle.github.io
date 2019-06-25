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

var precacheConfig = [["2018/10/13/hello-world/index.html","72f8bfa46fe0ddaadb5731228d0e7a4e"],["2018/10/13/文本换行/index.html","0c95466eea67aa28d9180844d63a3ff1"],["2018/10/15/css实现轮播/index.html","2df988a60c5c879a48b2e37d7e3d49a9"],["2018/10/15/puppeteer-API备忘/index.html","72d9ff9f32c76651fb11e2ff09fcdc2d"],["2018/10/17/DOM操作/index.html","aed6ee5cc9ac4f1df49905607d18a008"],["2018/10/18/rust语法备忘/index.html","402041c6680a4b3882a1ac0e4f24ca1e"],["2018/10/18/typeORM学习/index.html","f97f493c6d7e7af27323905b35a1d0e1"],["2018/10/25/typescript知识点/index.html","9192df23fbbb522d5a34f48658292924"],["2018/10/25/小程序思考/index.html","a86bcb10203d44f9eb0dea125f7c5acf"],["2018/10/29/angular指令/index.html","ef709730e7bd5f8a2b1e454ffc3c37e2"],["2018/10/31/css动画/index.html","8ff7abf78db8c99384863302290d2d69"],["2018/10/31/css布局/index.html","7c042678de044d7282f4aec4b4a68e3e"],["2018/11/01/angular生命周期/index.html","174be240c5f842deea6c717c24272d6a"],["2018/11/01/angular组件交互/index.html","9cfca6e10e4c5f4e60675edbb5134617"],["2018/11/02/angular模板语法/index.html","31e993d8068e26d69a6a850e6bdc31b1"],["2018/11/03/mysql命令行/index.html","815593cff5cb3a07d1899a570e1b3a08"],["2018/11/04/css知识点/index.html","b45f5f954ab0f7775421fd2bf964ce51"],["2018/11/14/nest学习/index.html","cebf487f032a3dd561d3401611feaad3"],["2018/11/18/js注意点/index.html","fe1e036006e77e5c2d9e26ee185293c1"],["2018/11/21/工作bug总结/index.html","114df21bb737b7de9b2a37ac33c5b028"],["2018/11/22/mongodb学习/index.html","9b06fdc12306b210c8f9f15c5907f90d"],["2018/11/26/react坑/index.html","9160a197226cd27cba9706e70ca7d5ed"],["2018/11/27/typescript实践/index.html","9aded142ec7a684916af39d966852a3f"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","87b7cbe6d5ab3a3de116743fa16f89bc"],["2018/12/01/vue学习/index.html","2b5b9ec4c87847f7638b28c07beb5252"],["2018/12/07/nodejs the right way 一/index.html","fdc2765e206212a67eb20649f465f958"],["2018/12/07/react生态基本使用笔记/index.html","9c9925347ac0bbbc13dfa57f76080838"],["2018/12/11/rn基础一/index.html","deaa018b3575ff15065298f5c4ff6f17"],["2018/12/11/函数式一/index.html","dcd3246ac3368dea9e7ea3ec56f68968"],["2018/12/12/nodejs之process/index.html","f9bbb875c77e68cb4aeaec8a41391545"],["2018/12/12/node事件循环/index.html","10af865043d7a94fe7aa5b6e1ff7d80a"],["2018/12/13/elasticsearch/index.html","4ab2b7cdb71c1e799dec0f262b506ba7"],["2018/12/13/express/index.html","79304c92978c1f8047f5a119e71b03bf"],["2018/12/18/小程序性能优化/index.html","1640e97c2c166c4339a19252e42fcebf"],["2018/12/20/express2之database/index.html","606b7b5fc65d83012425a8427bcd466b"],["2018/12/26/flutter学习1/index.html","40ec606859f3a69b1a5709509d2ab3ad"],["2018/12/27/flutter之包管理/index.html","818e92b322cb80f7725ce2b3bee6f021"],["2018/12/28/express测试/index.html","206b2545fd54166e5aa57a20cccedc64"],["2018/12/28/flutter之widget基础/index.html","e3bdc35889236133053aca0619cad401"],["2018/12/29/Express值请求体中间件解析/index.html","17eceda94fda61b9d3b37115d8fd28bf"],["2019/01/02/express开发小结/index.html","f952f95b148fd6140857071df2cecca0"],["2019/01/05/dart基础1/index.html","01911ea20dc7c61001f85d4d9cf46d2d"],["2019/01/05/dart基础2/index.html","8fac69ead8f6d9f7e14ccd60013ed9df"],["2019/01/07/dart基础3/index.html","5f2e4df5693ca19d930df5811bcc2f42"],["2019/01/07/express学习/index.html","c7afbac2cf48a0c107e1b0f9e7aa7b21"],["2019/01/09/Flutter之文本/index.html","a829eba639d722b5c8039734bc5df09b"],["2019/01/11/Flutter之按钮/index.html","e82152d6527304e158aefa6cde9435a3"],["2019/01/11/flutter之图片和icon/index.html","e845ddb9851645bbdc369375fb6dbd77"],["2019/01/14/next-js学习/index.html","fe2b373930dde8acbf899f1733f0d779"],["2019/01/15/flutter之弹性布局Flex/index.html","ba878fa7714e23fcf1146c65b0b8be01"],["2019/01/15/flutter线性布局/index.html","73baa158734b45da43e2bdd8d05ac819"],["2019/01/15/rust2/index.html","769a6a789e28b72bd7c9b11979383300"],["2019/01/20/express-ts上手记1/index.html","29b554a55886faf0fadb42c721396565"],["2019/01/21/react遇上typescript/index.html","b3de925f5113b8c8bb84a44539276a34"],["2019/01/26/新点总结/index.html","13ffc50660e0502f4e366743b327c8e3"],["2019/02/11/angular架构概览/index.html","2d96069013a0bb52fafc2f1e4d7162df"],["2019/03/28/promise相关/index.html","02d4e3e84fd43add0ccb25720179f738"],["2019/03/28/实现一个sleep方法/index.html","6e2c98722fb36010205f111e60194b12"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","f4d0b387be2583a53afbaefac9542a2e"],["2019/04/02/证书可信任/index.html","daf07251c8f9fdb0ccd22504b6bb6d20"],["2019/04/09/从一道题目谈谈跨域/index.html","0bb4de2ce976294c7270a1df03ed78d2"],["2019/04/18/关于滚动吸顶/index.html","52ef91374940d5edd9caaea593e01550"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","3673427d56a8cb1524d3fb589d32eb1a"],["2019/04/23/深入理解padding/index.html","3232b083a90b027c712afc6980009bb0"],["2019/04/24/css题目/index.html","09312d98422af44ef9ba372fefd73f1c"],["2019/04/24/js题目/index.html","bdfbe9f27fcd2aa40146df6e859ba1a9"],["2019/04/25/好吧-EventLoop/index.html","6a3b95ace3100db882cecbb13919745a"],["2019/04/26/轮播图实现/index.html","e1b26b8cbbf01d42a4958369839519fe"],["2019/04/27/深入理解margin/index.html","aa18bd9e57ad6e5e724b306cefbe7b54"],["2019/05/07/FirstPaint/index.html","dde7942460450580da9adf8d32c0c2f8"],["2019/05/14/图片懒加载/index.html","451c6c29e6a582e96eabcd2e82d2f180"],["2019/05/16/typescript学习二/index.html","071602583a69b042976b076ee2215dae"],["2019/05/16/利用原生JS实现简易的v-model/index.html","1389f7d5ba52abfc68627b148418b5db"],["2019/05/16/利用原生JS实现简易的vue/index.html","a7ba140d5a570b985ec56d66e6b5fc5e"],["2019/05/16/利用原生js实现数据代理/index.html","faec78b4bb947d2b14b163a889e5e360"],["2019/05/22/typescript搭配react使用笔记1/index.html","04e5194dfed05ae007704948c1dc7f78"],["2019/05/23/typescript-react学习笔记2/index.html","d176ebd764ac198723ec72871b8a0711"],["2019/05/26/typescript-react学习笔记3/index.html","4c6ea9781fef42c029a95783c863708f"],["2019/05/27/types/index.html","eb737b91196c91970cfc34955f60ed41"],["2019/05/29/learning-graphQL-笔记1/index.html","bb7d23a1bd1ce9af585753abb77202ce"],["2019/06/04/ramda笔记/index.html","16e5776a93b4462c8b4da000719561e4"],["2019/06/05/Sequelize学习/index.html","7e696fc4c3d9a9dc35704de6f99efbb1"],["2019/06/17/serverless笔记1/index.html","e3464e19f92ca240b635e11b65e814ab"],["2019/06/21/函数式/index.html","7446b51e90c03b8082720e2abeef0338"],["archives/2018/10/index.html","2fedd3688c5d0cafac0f42fec9674fe5"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","788936d52c919796462da24299e727f4"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","bc430d77b245fb0fd122d567816f0bf1"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","5c88320294d663e99ab36f8b1dfe56da"],["archives/2018/page/2/index.html","0885260e3294628d6a2f8cc682ff18bc"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","d841da2ed00e911b62303636e22e64ca"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","4176e8296a0f93196a6cb7c2127e74fb"],["archives/2019/03/index.html","a05f4dbd64a3f605c49355e632a17d18"],["archives/2019/04/index.html","fa626326b0089091cc827b72f2ec9c4d"],["archives/2019/05/index.html","0a38a85cdbfae103e981aa5b0ab4abc6"],["archives/2019/06/index.html","6557994a32264deb962ec6978c9fc9b1"],["archives/2019/index.html","4db9e85baeaa0b65bb0f551c0ffb7376"],["archives/2019/page/2/index.html","965748229ca838a2c45b35dff7ad2739"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","01ca995bd90bcd3275e517d81dcab0d9"],["archives/page/2/index.html","15abb3637ef4588e4cd5557d60c07688"],["archives/page/3/index.html","612946f39cbe07f648b8c7cc04c54724"],["archives/page/4/index.html","30f642a5a86b9a653348e7da3189e10f"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","095f5811ac9207cfbfca77e8ce9fd4e6"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","572846297e98f28ecfc5630e29690a1b"],["page/3/index.html","8c3c3f6b7dd4d21aab0817815187415f"],["page/4/index.html","5dcf7d84a3a1dda37c1002f943356324"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["source/tags/JS/index.html","267d1ea311ab9fddfd63a692c98f504c"],["source/tags/ReactNative/index.html","11e248c4b284369cbe3543117e3bbcf7"],["source/tags/Rust/index.html","e19835618d134557bed0408b0e983f83"],["source/tags/angular/index.html","cfd548ad43f366afac2d344c76627a76"],["source/tags/css/index.html","edae9ed55eb2ebda56de5e2cc815a45b"],["source/tags/dart/index.html","bde8f732aeb3101153883df382d085e5"],["source/tags/express/index.html","323c537b45d6c5267361ceb4e5da66b0"],["source/tags/flutter/index.html","2b6979b7f094888524b8098b06563567"],["source/tags/fp/index.html","0843377dc54470514fd96e144dc0e70b"],["source/tags/graphQL/index.html","9ff584b0b4bf7ebf7a001cc95cf8e72b"],["source/tags/https/index.html","bb50cac191203d52e8303ae89956ceb8"],["source/tags/mongodb/index.html","eef07b8bbea7f3c569e4a0906d28e5e7"],["source/tags/mysql/index.html","a6868c6606914c185e3375bddd45a3ce"],["source/tags/nest/index.html","2324eaab599bcc60f0c862e6eec8e01e"],["source/tags/nestjs/index.html","228207ba26710ed7eebf31a8f4cfdb27"],["source/tags/next-js/index.html","2118b552090bc619757a9f2d206d4e1e"],["source/tags/node/index.html","7b8bfa9307777dcb76d86da0343ca34b"],["source/tags/nodejs/index.html","60de13d15a994ee5b236c86414da6fbb"],["source/tags/puppeteer/index.html","6b3d244277bcaf74ab1a496247ec6374"],["source/tags/ramda-js-函数式/index.html","84c8ac93500fab5af0477646d0c92e36"],["source/tags/react/index.html","855134f741b5ca8159b38a140563f707"],["source/tags/sequelize/index.html","df0c62d34d3aa405c891c2b03333ac48"],["source/tags/serverless/index.html","1a6c36a579295d38b2b40ca0063debca"],["source/tags/typeORM/index.html","b9b8fcb5f3e02df44570148923d4c972"],["source/tags/typescript/index.html","2fd661c94272760fc7854546458ac809"],["source/tags/web/index.html","a72f1da036fc821030e1cde91c58944a"],["source/tags/work/index.html","b95e56c73839c6eed041cf1d5e4cc26f"],["source/tags/wxProgram/index.html","274d109675b554947d60c4f772c04e24"],["source/tags/效果/index.html","2d45c79e682794b97a40db4b4b62e428"],["sw.js","e909f64f2844b8b17a588e25ac6081ca"],["tags/JS/index.html","a496edf891398546cfbb92af6e2af540"],["tags/ReactNative/index.html","bc63ea8dd09b9a25a8c67ff3e4b694ee"],["tags/Rust/index.html","77a63d20371b755fd43be0b1fe0da6f3"],["tags/angular/index.html","1107e8478bec8018aadcd9bae0c201fc"],["tags/css/index.html","6076864768c681a5caa1440d3f441d81"],["tags/dart/index.html","d0987021860ffee5fcbf3cb8d41f7664"],["tags/express/index.html","2702d0cbbd061fa367adcaa784ee2996"],["tags/flutter/index.html","20a37202e892657e031d16cd52ad51fa"],["tags/fp/index.html","7b95a9e3384508957ef3bc8cca05f4be"],["tags/graphQL/index.html","27d169bf8a49ceddf9f2283ab1d574fe"],["tags/https/index.html","b1c09e356c4a34c1be0d4615414c3e4f"],["tags/index.html","c7cb5e403f3c6cdb5dda92ccbfe596c0"],["tags/javascript/index.html","9b1d95cf0649e6d5e9e33c6fef9b8695"],["tags/mongodb/index.html","94955b974d2eea6c674639e50acc73e1"],["tags/mysql/index.html","a8eed85eec6a33ee5a9466dd3eb064ea"],["tags/nest/index.html","b6bffb53930503ae3223212d2d0f7d49"],["tags/nestjs/index.html","bb5adcdfe919f9e93fb9e99db9565bfd"],["tags/next-js/index.html","a5d69c12f49ba7ff25f0596b6e7c105d"],["tags/node/index.html","77c38a31105dc20189afd072fac71fb0"],["tags/nodejs/index.html","f9224555bb55805e6cfe3bf0396a3ee1"],["tags/puppeteer/index.html","1a68244058d09c78897ced09f604bc1f"],["tags/ramda-js-函数式/index.html","64e21cb8c870a890b21964ca6c1d6981"],["tags/react/index.html","d79099d5bb7e093677ca002d502d8f0e"],["tags/sequelize/index.html","09ca9749764b382aab608f049545d57f"],["tags/serverless/index.html","9cd27b23fe85f759e6e6153dd61a8781"],["tags/typeORM/index.html","32127efd27c453d957fe1f16ccc20f00"],["tags/typescript/index.html","494d7cae947f3b830c36e531a96d7eb6"],["tags/web/index.html","806cd43e14a01adb06553ea7da1c3c4c"],["tags/work/index.html","eee45e8d6c1f8ff2d56b65da19ede7e5"],["tags/wxProgram/index.html","989e31a49a498a43bcf9d810266357e6"],["tags/效果/index.html","aa728e0b2962acbd4e0e73e9d700784a"]];
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







