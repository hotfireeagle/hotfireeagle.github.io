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

var precacheConfig = [["2018/10/13/hello-world/index.html","c6c5c618be52d011ceacc84a5d826df3"],["2018/10/13/文本换行/index.html","bb5d378d3a362de84ebf07d7903e8213"],["2018/10/15/css实现轮播/index.html","dc9c1403b50545ea7adc89ce98fd7eeb"],["2018/10/15/puppeteer-API备忘/index.html","cbb858c85fcaac0c188ec04929a2b9d1"],["2018/10/17/DOM操作/index.html","4dd0227e37bed8b8de289fb22c2b068b"],["2018/10/18/rust语法备忘/index.html","be096a25d6be823538bc8b285cbd793c"],["2018/10/18/typeORM学习/index.html","2a3813c3aba93aa4fcdbe4a83f26cb53"],["2018/10/25/typescript知识点/index.html","2e2535d9b67260be66b71e5304007baa"],["2018/10/25/小程序思考/index.html","a6894c236f519861c3e543966c9f7b0b"],["2018/10/29/angular指令/index.html","616ef04c75f441a40af13ea737bf4225"],["2018/10/31/css动画/index.html","100a7b100b235afd4d51af8cfbb391cb"],["2018/10/31/css布局/index.html","1b00e80c9e722e468cf8c3dd3ac6c8e5"],["2018/11/01/angular生命周期/index.html","5ff275df98a465ddd0e21b07390f1df9"],["2018/11/01/angular组件交互/index.html","e2f8eaaf2482f25d4143943c3424af16"],["2018/11/02/angular模板语法/index.html","54c6a91e699030e428b9b59204643b75"],["2018/11/03/mysql命令行/index.html","bdfcd9b195d8bb17cd7f613e474b05a4"],["2018/11/04/css知识点/index.html","cced1b139c66ffca560574ae313954a9"],["2018/11/14/nest学习/index.html","95abc0d961b6cc5fe56d8b6299ecd0ba"],["2018/11/18/js注意点/index.html","fe1e036006e77e5c2d9e26ee185293c1"],["2018/11/21/工作bug总结/index.html","e485d511026b9250bbe17d5405593aec"],["2018/11/22/mongodb学习/index.html","d08786c491b3b6d3461db60dce1b70ef"],["2018/11/26/react坑/index.html","7106e8b0f612ef1ca6189b40179e8747"],["2018/11/27/typescript实践/index.html","f3141a983aeb4d247019c2e6d5dcc1be"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","f4d7fe81f118a5cf90092ada4535aafa"],["2018/12/01/vue学习/index.html","7263859db7c6d7f18e41f5c56f08c15e"],["2018/12/07/nodejs the right way 一/index.html","6c07be190cf2b92af130e4c6b2e9d772"],["2018/12/07/react生态基本使用笔记/index.html","c63df7d24f8cb5cacd34773edbcf3f90"],["2018/12/11/rn基础一/index.html","5a27e3a009a6a06c25b1b89d2c74979f"],["2018/12/11/函数式一/index.html","dcd3246ac3368dea9e7ea3ec56f68968"],["2018/12/12/nodejs之process/index.html","2a66a4345c2594ad9a3739a2313116c2"],["2018/12/12/node事件循环/index.html","ba881049251eff4399018494712b5a2c"],["2018/12/13/elasticsearch/index.html","7fd3c6ef0ce116e959e5a283eada5feb"],["2018/12/13/express/index.html","8609dc117eac6a5109961f02e21af09c"],["2018/12/18/小程序性能优化/index.html","280f1407185d9dd248880f12617ee249"],["2018/12/20/express2之database/index.html","a9e8a3b7106be20774d967a67475c9e6"],["2018/12/26/flutter学习1/index.html","c054776fec890bc5b7bf73de51c91ca8"],["2018/12/27/flutter之包管理/index.html","81a5477fc1d20cb723cfff4459c96d3e"],["2018/12/28/express测试/index.html","4c3c60f7bd586fa39ee0760956e98933"],["2018/12/28/flutter之widget基础/index.html","43881c68c9b7824679dd1bcae947b3fa"],["2018/12/29/Express值请求体中间件解析/index.html","3804f83930c64976ff3aff94e1f83575"],["2019/01/02/express开发小结/index.html","754a3d6bd813737bf175d946dcf46214"],["2019/01/05/dart基础1/index.html","d12180b8800e3277bf047f13170c6c22"],["2019/01/05/dart基础2/index.html","5764160cb896b89ca100558a6d287017"],["2019/01/07/dart基础3/index.html","d3705f840a36a0b91a4d7535f46a3f04"],["2019/01/07/express学习/index.html","27d203b9d9e2d128cbcc3b8b1a2b5b31"],["2019/01/09/Flutter之文本/index.html","cdf80c45c2919d65f7cf25cd28ff84e8"],["2019/01/11/Flutter之按钮/index.html","0078a3169acca82b327e206f86837d7d"],["2019/01/11/flutter之图片和icon/index.html","c7d7b68bb08c7013a156c97b31a2ffaf"],["2019/01/14/next-js学习/index.html","4fe22e9091b1360ef65478b2db23d4e7"],["2019/01/15/flutter之弹性布局Flex/index.html","2cebd5dd11c10ef29fd9154e7da0f0d9"],["2019/01/15/flutter线性布局/index.html","b0b5849ce1408cc5a99d646faedb67d1"],["2019/01/15/rust2/index.html","8a386fadca1f96b2820e4f60541810a6"],["2019/01/20/express-ts上手记1/index.html","90dc4e76b36bd29d4feeb7f316f89b41"],["2019/01/21/react遇上typescript/index.html","64ee1467940aa8430e79a6e7b2c832bc"],["2019/01/26/新点总结/index.html","2b25dcf602edcf967ff142677df123eb"],["2019/02/11/angular架构概览/index.html","9d112f0d014ca5c4fb2f152325cbab8a"],["2019/03/28/promise相关/index.html","b1d8abbce22979e97788aae742a3a750"],["2019/03/28/实现一个sleep方法/index.html","6d3603201fe1acc5e2513efc3d4b02c1"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","1bc3ed8c4dd4d36d5eade91b9091ef28"],["2019/04/02/证书可信任/index.html","c96f8bc6a2d3fa13cfbd599b7a179cd8"],["2019/04/09/从一道题目谈谈跨域/index.html","caf4bf00d51915c3bae15a3faee70ce1"],["2019/04/18/关于滚动吸顶/index.html","a5d50092f60aefbd21f78ef2cae30a3c"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","7d130822f02c31d43fb3a7fbef7d0e7d"],["2019/04/23/深入理解padding/index.html","0bc4758efc9efe69acb22670b4145a52"],["2019/04/24/css题目/index.html","37b3fb51f6958a9d40c4ba145d59a630"],["2019/04/24/js题目/index.html","246eaed12f6f465171e848086a99ad24"],["2019/04/25/好吧-EventLoop/index.html","a50f535809e85c9cdf655e53be7455ed"],["2019/04/26/轮播图实现/index.html","7bb1295ed2de3a5216e8e3ec384619e1"],["2019/04/27/深入理解margin/index.html","db53051b8b96d4c3a6e425fe28c9b22d"],["2019/05/07/FirstPaint/index.html","f881cd9bab3f6309ce91a7f8a2b5021b"],["2019/05/14/图片懒加载/index.html","1a4dfb94fa846deb9f52215acdfdd9c9"],["2019/05/16/typescript学习二/index.html","f57791595a8cadf4d62220bdc40401e0"],["2019/05/16/利用原生JS实现简易的v-model/index.html","455dd8444eecf3836d0ebd637a172b49"],["2019/05/16/利用原生JS实现简易的vue/index.html","a7ba140d5a570b985ec56d66e6b5fc5e"],["2019/05/16/利用原生js实现数据代理/index.html","faec78b4bb947d2b14b163a889e5e360"],["2019/05/22/typescript搭配react使用笔记1/index.html","a78410bb636ddc821eff6e9182f178fc"],["2019/05/23/typescript-react学习笔记2/index.html","47b40b17d80a075abe51e0624ba0aa54"],["2019/05/26/typescript-react学习笔记3/index.html","e183b28fb7bd781baf89e29207ba4757"],["2019/05/27/types/index.html","c2fa0f9be9ca0f890086f9466ca5074b"],["2019/05/29/learning-graphQL-笔记1/index.html","dae8dab9928c574f2fb24145f4f6d7e5"],["2019/06/04/ramda笔记/index.html","e9e186094d0cf09a8ce99220fba9f8b2"],["2019/06/05/Sequelize学习/index.html","9569f60f490337e7f77abfd2d42a4120"],["2019/06/17/serverless笔记1/index.html","e62a3ba06b5a756ac7b5fd7b6bd8e79e"],["2019/06/21/函数式/index.html","65edfd081a21b79d8386c3715f5cbe46"],["archives/2018/10/index.html","518ab292ffde81e6ca72d8de546c465b"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","1f211a69b048b1f9310f0e9a7a4012d8"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","f47048b995c6e04d64e427a0eef5fa61"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","fc8d4fc9fb40acb999a3e31e19c30db0"],["archives/2018/page/2/index.html","cc2f60738f624384fdc0cd166eea13b7"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","dcba9c7eb3dc4923e8fea4f66270299e"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","d4ddc7b808edc7ea5fe7b4ad327d1fdc"],["archives/2019/03/index.html","313c1d60d802aa8e7b6b1a7050898f79"],["archives/2019/04/index.html","2fe5e5e7bd13537d5549c6230c3b1000"],["archives/2019/05/index.html","b72c420a0e9292de203d9494fd619065"],["archives/2019/06/index.html","d16ff62cec449246ae47655280202e9b"],["archives/2019/index.html","12c98003ead61a100f7d356fec1b70c7"],["archives/2019/page/2/index.html","31e711a4ff05764511c07d577bb99dfa"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","7b7eeaa9a4e9ec5d327f6b02b378a8a7"],["archives/page/2/index.html","1a3eb075563ec9740e510e27881383dc"],["archives/page/3/index.html","54361fc2e9ed2a8735906a5ae6e38f35"],["archives/page/4/index.html","7d8f9d243e4bf438c8fa656d47f45853"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","172e3a39ac49d26dc0cca148ed30a037"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","5b2af840f5728d0b38aafb076b053016"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","ae39da5616f270039a4a142847e858f1"],["page/3/index.html","95bdd435d709e6d18b3ae9f1f73ce8e9"],["page/4/index.html","c00d9b2faf8a8ca18683ac95ee4210f7"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["source/tags/JS/index.html","f09452704687d903cd3a3de10a87232f"],["source/tags/ReactNative/index.html","f87d3cf837c636b7c1c9fb04681c766e"],["source/tags/Rust/index.html","df3ecf2db934410eb6908b7eee0d1b00"],["source/tags/angular/index.html","9eaafb4298cadcc220a1f1f3e1cdc8b0"],["source/tags/css/index.html","a646f4cb08af845a7a810d8abe34c363"],["source/tags/dart/index.html","9b318f06839e44246d4ecaa8435e0bca"],["source/tags/express/index.html","e149744ac9d68d0c223a4fbfbee22dad"],["source/tags/flutter/index.html","dbee249693258aae7d2f768b09d9b334"],["source/tags/fp/index.html","363875e3e1c89912222309ece21511fb"],["source/tags/graphQL/index.html","21a39d7b8cdeb59c4225637e5dfd4f08"],["source/tags/https/index.html","49b63ace696a809534a9210fbc05f327"],["source/tags/mongodb/index.html","bc80d712eb50af22d2e8c9ba112ab4b9"],["source/tags/mysql/index.html","2251270475904b75dbf40b749211a833"],["source/tags/nest/index.html","c0cd30ba0f854bd9edfb5f7a2a2d2ff5"],["source/tags/nestjs/index.html","bb82bd05f3db0e2a0b375fe40a58899a"],["source/tags/next-js/index.html","826a60df2e6611bd3f6321b48cadf210"],["source/tags/node/index.html","69d83c196fd26852cce2a2ac9f13f7f1"],["source/tags/nodejs/index.html","8c0ba5bfb68b45ecf635efbafe9961f3"],["source/tags/puppeteer/index.html","3f67c50ad11f96e93a1cf3bdde6275e5"],["source/tags/ramda-js-函数式/index.html","32f4df718c00e4d53eb7fefbea24f135"],["source/tags/react/index.html","ebc0c0a8ca7ef16989fe6a5e0793e998"],["source/tags/sequelize/index.html","d058e5ca9f9989b112b54d1bf9d1e61b"],["source/tags/serverless/index.html","6d9694bad4e205e1a3d03104b74a7c84"],["source/tags/typeORM/index.html","28e58c3d0bf32f071deda80a43e47c98"],["source/tags/typescript/index.html","1728c10034df61124115a0d6d837a87b"],["source/tags/web/index.html","ad8f854e47b55ac23b83e397864c9fda"],["source/tags/work/index.html","48b87ca51e6d163a41fe4d89f4e06b91"],["source/tags/wxProgram/index.html","dc6933ce151e900ca95cf76a2af78c8f"],["source/tags/效果/index.html","137248ce705277604108eb27260d55a7"],["sw.js","e2466e11e4c2035e19c7f8f03017ec1f"],["tags/JS/index.html","a496edf891398546cfbb92af6e2af540"],["tags/ReactNative/index.html","bc63ea8dd09b9a25a8c67ff3e4b694ee"],["tags/Rust/index.html","77a63d20371b755fd43be0b1fe0da6f3"],["tags/angular/index.html","1107e8478bec8018aadcd9bae0c201fc"],["tags/css/index.html","6076864768c681a5caa1440d3f441d81"],["tags/dart/index.html","d0987021860ffee5fcbf3cb8d41f7664"],["tags/express/index.html","2702d0cbbd061fa367adcaa784ee2996"],["tags/flutter/index.html","20a37202e892657e031d16cd52ad51fa"],["tags/fp/index.html","7b95a9e3384508957ef3bc8cca05f4be"],["tags/graphQL/index.html","27d169bf8a49ceddf9f2283ab1d574fe"],["tags/https/index.html","b1c09e356c4a34c1be0d4615414c3e4f"],["tags/index.html","220dad17793aef0c415430815636e290"],["tags/javascript/index.html","9b1d95cf0649e6d5e9e33c6fef9b8695"],["tags/mongodb/index.html","94955b974d2eea6c674639e50acc73e1"],["tags/mysql/index.html","a8eed85eec6a33ee5a9466dd3eb064ea"],["tags/nest/index.html","b6bffb53930503ae3223212d2d0f7d49"],["tags/nestjs/index.html","bb5adcdfe919f9e93fb9e99db9565bfd"],["tags/next-js/index.html","a5d69c12f49ba7ff25f0596b6e7c105d"],["tags/node/index.html","77c38a31105dc20189afd072fac71fb0"],["tags/nodejs/index.html","f9224555bb55805e6cfe3bf0396a3ee1"],["tags/puppeteer/index.html","1a68244058d09c78897ced09f604bc1f"],["tags/ramda-js-函数式/index.html","64e21cb8c870a890b21964ca6c1d6981"],["tags/react/index.html","d79099d5bb7e093677ca002d502d8f0e"],["tags/sequelize/index.html","09ca9749764b382aab608f049545d57f"],["tags/serverless/index.html","9cd27b23fe85f759e6e6153dd61a8781"],["tags/typeORM/index.html","32127efd27c453d957fe1f16ccc20f00"],["tags/typescript/index.html","494d7cae947f3b830c36e531a96d7eb6"],["tags/web/index.html","806cd43e14a01adb06553ea7da1c3c4c"],["tags/work/index.html","eee45e8d6c1f8ff2d56b65da19ede7e5"],["tags/wxProgram/index.html","989e31a49a498a43bcf9d810266357e6"],["tags/效果/index.html","aa728e0b2962acbd4e0e73e9d700784a"]];
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







