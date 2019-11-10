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

var precacheConfig = [["2018/10/13/hello-world/index.html","c41dfe586c44cc8776365681f916b99c"],["2018/10/13/文本换行/index.html","968823ff9ba14017b1e9d416b635bef4"],["2018/10/15/css实现轮播/index.html","2158d4c274e127e085f20ff4162e803b"],["2018/10/15/puppeteer-API备忘/index.html","b890832313269fc0cfd02038011f250d"],["2018/10/17/DOM操作/index.html","4ce7adbecf62713f1792d99c549e4fa9"],["2018/10/18/rust语法备忘/index.html","f41e7a04be5c4aa224732a09a4f1261d"],["2018/10/18/typeORM学习/index.html","f3df8624307b6d862b04608389ce5010"],["2018/10/25/typescript知识点/index.html","398fa7ed5879102ec3e40dee58938da0"],["2018/10/25/小程序思考/index.html","6a5c43e48b637ed0dceb1d5a8893bc91"],["2018/10/29/angular指令/index.html","dfb2267e8ebdaffda97e0959331db648"],["2018/10/31/css动画/index.html","0166caa1f7ae8ab444216dd611e5224b"],["2018/10/31/css布局/index.html","90ecc5861973649b741d581bde51b7bf"],["2018/11/01/angular生命周期/index.html","060cc121e3dab187de3037b622a56e80"],["2018/11/01/angular组件交互/index.html","83d8d0a6c3e0f77813e7e11bd85fa09f"],["2018/11/02/angular模板语法/index.html","23caaf1791ba451e3093887c691bc03e"],["2018/11/03/mysql命令行/index.html","c69cc7eb5839e31f301defd32381617c"],["2018/11/04/css知识点/index.html","2e56408803224d1dcb953248f85fc064"],["2018/11/14/nest学习/index.html","3be0771f022d114bfecbd1a238b5b527"],["2018/11/18/js注意点/index.html","fe1e036006e77e5c2d9e26ee185293c1"],["2018/11/21/工作bug总结/index.html","aafb1b807b8529bb252b9a06d9c237d0"],["2018/11/21/工作笔记/index.html","64debfcf4ed4871e2d09fb24cbabb572"],["2018/11/22/mongodb学习/index.html","44dc363dc2cc0f4118fc915d6877247d"],["2018/11/26/react坑/index.html","af38820f37dce29a382fe9c632d9afd9"],["2018/11/27/typescript实践/index.html","6f7dc3f5eb46d2c3a3797e20e2a4c378"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","d0ecebe0a0bb196347be59865af0d8e2"],["2018/12/01/vue学习/index.html","5d6761b65499194acb242c4b9be7eaf4"],["2018/12/07/nodejs the right way 一/index.html","711e4c9357fd07081b4dd1f0174bcceb"],["2018/12/07/react生态基本使用笔记/index.html","40f2e9952b85e34c693b263e562961bc"],["2018/12/11/rn基础一/index.html","f8bd3122c06a3f9b2fdc862017bd2994"],["2018/12/11/函数式一/index.html","dcd3246ac3368dea9e7ea3ec56f68968"],["2018/12/12/nodejs之process/index.html","713317593d6e715cede432530a0a70d6"],["2018/12/12/node事件循环/index.html","d7235920d8712b07df62cd4195b3753c"],["2018/12/13/elasticsearch/index.html","414dc5d6011c062c67dcb8ac8ba0b7c4"],["2018/12/13/express/index.html","89c51edda0f453ba51bfe736ddf1560f"],["2018/12/18/小程序性能优化/index.html","6a01ce490c0c5c559715c701c4125cda"],["2018/12/20/express2之database/index.html","7f3cda900278428b3dbab37c0ec39674"],["2018/12/26/flutter学习1/index.html","7b4755477f35e1bccfb620169f0baca0"],["2018/12/27/flutter之包管理/index.html","6568cd3313ef67d28e2b7c133094656f"],["2018/12/28/express测试/index.html","395460efed340a5f09cf650cb8681486"],["2018/12/28/flutter之widget基础/index.html","c3b78ec755ae0d2925e14f420a7b223f"],["2018/12/29/Express值请求体中间件解析/index.html","ffa766fadb14e2824572ca3a814b994b"],["2019/01/02/express开发小结/index.html","c36068ecd1427cf324bf43502fcfdca3"],["2019/01/05/dart基础1/index.html","fc8071ef8c067754b0c5010606f45be2"],["2019/01/05/dart基础2/index.html","d62af6e2eebd8541004762415351b498"],["2019/01/07/dart基础3/index.html","48e8d6efe48193192c958ac15511384e"],["2019/01/07/express学习/index.html","65c57d7adb7d9b984d92ced64bc9dc3a"],["2019/01/09/Flutter之文本/index.html","aa7a467b9255ca8856114dcdd4fbed0c"],["2019/01/11/Flutter之按钮/index.html","05a6074974b30ebd2d765c945491cc02"],["2019/01/11/flutter之图片和icon/index.html","55c1626ceb8d59eea91299552fce0880"],["2019/01/14/next-js学习/index.html","421dae578eee57075f3579cdb77afd03"],["2019/01/15/flutter之弹性布局Flex/index.html","b60971a07a5dccb3e19f01770151f7d9"],["2019/01/15/flutter线性布局/index.html","8a5a4aaa62438841115c2532aa53617a"],["2019/01/15/rust2/index.html","cf9b6a4fefa40fb421ed6cec234ab50b"],["2019/01/20/express-ts上手记1/index.html","4c9d2fc8c1ecf824d16e086de9dabbe3"],["2019/01/21/react遇上typescript/index.html","534728d476fce4e19d1cdac6a7065fbb"],["2019/01/26/新点总结/index.html","fe480b04c0b76d50f0dbb248271c914b"],["2019/02/11/angular架构概览/index.html","8d8b4ca0127bd78741366ebeb35dea53"],["2019/03/28/promise相关/index.html","91932cdcbe2abba27ed3167af0c10395"],["2019/03/28/实现一个sleep方法/index.html","89321f336f13fea4cf2255079cd19c77"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","d84297dbc7e16cbc959fa1b43334b130"],["2019/04/02/证书可信任/index.html","2cd4eb453613e358bb46f2b2795a728c"],["2019/04/09/从一道题目谈谈跨域/index.html","87cbfd29b01e8d8924a24e391b614567"],["2019/04/18/关于滚动吸顶/index.html","129af6c5c7fee127ae369e32dfe85c74"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","688d7df35baf14a296e7b2fe763ffb59"],["2019/04/23/深入理解padding/index.html","5aa7f794cbb8024b1b1cb405e80d4215"],["2019/04/24/css题目/index.html","0d63e216490f70efbcf4d3a6a6bd24ec"],["2019/04/24/js题目/index.html","cd3aab3294e801ee409c31fa2ed8ad4e"],["2019/04/25/好吧-EventLoop/index.html","bbed5694648b8b58f5c4b9064e659912"],["2019/04/26/轮播图实现/index.html","7a3191dc93ca99cab03987fbc41369a0"],["2019/04/27/深入理解margin/index.html","7b5ababd9375198d4308ebd88d2d7c95"],["2019/05/07/FirstPaint/index.html","f4cb3fc5969f51267340416580962edc"],["2019/05/14/图片懒加载/index.html","0460d62106e99e9ac9a36495d330462e"],["2019/05/16/typescript学习二/index.html","be588eae79fcaf604d939bfe0121aeb7"],["2019/05/16/利用原生JS实现简易的v-model/index.html","35ed9f3194e4c3fd177835884592ad8d"],["2019/05/16/利用原生JS实现简易的vue/index.html","a7ba140d5a570b985ec56d66e6b5fc5e"],["2019/05/16/利用原生js实现数据代理/index.html","faec78b4bb947d2b14b163a889e5e360"],["2019/05/22/typescript搭配react使用笔记1/index.html","4dd5a9029ea9587133ad8ee5a7646377"],["2019/05/23/typescript-react学习笔记2/index.html","5d680912cd11e89eef49864e142c0ac8"],["2019/05/26/typescript-react学习笔记3/index.html","6ee1b9dd43ad6a23c3e91769eec899d2"],["2019/05/27/types/index.html","8c2bb3003d28ee6f9bdf127e494f3f82"],["2019/05/29/learning-graphQL-笔记1/index.html","84c3ebf2dd7de7127fbf6d5243a81cb8"],["2019/06/04/ramda笔记/index.html","3693105497b7e09a7d3a95ee7246fa23"],["2019/06/05/Sequelize学习/index.html","6e71ae584818d2d2d7bc215ba0ca3c71"],["2019/06/17/serverless笔记1/index.html","c36186e0f41d642511ed1772321b06df"],["2019/06/21/函数式/index.html","0b1aa7f98545817ece00b50d738724b6"],["2019/08/04/定投/index.html","16677baf4f89438b95a13872afa8b9ea"],["2019/08/06/Rust类型系统/index.html","bea785d2ea962348222ca522ccb92b97"],["2019/10/03/History1/index.html","69da0602f2809a4729d21db8314a1632"],["2019/11/06/nestjs的模块/index.html","2140188bcbe3ea8ed97900ab11fae1f5"],["2019/11/06/nest管道/index.html","cc85034468b31cff42aa9c954480114f"],["2019/11/07/nestjs守卫/index.html","1511cc35398c51bf8727aee77ab60e28"],["archives/2018/10/index.html","d684229a4d40a3fbabf30fc8f29d4582"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","0d3688a5813e487ef3116857aef48b19"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","a5fa57bf1569cedb41aa8a1be98a9893"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","fe367b47b086cb3cfbedff9500ea144d"],["archives/2018/page/2/index.html","696c6c7dd9e9fc8c69ffee82aef31bc7"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","36924d39ff971463010a29742d837355"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","d49b88ca1bcd38a638a537f7915ecce6"],["archives/2019/03/index.html","2cf7ef47478adfb5768c87b3fc1c7587"],["archives/2019/04/index.html","2bee59a7c6c5b796dd067aa629ed2622"],["archives/2019/05/index.html","09a3c123ba1214bddc0ce884f3b00562"],["archives/2019/06/index.html","d898028da85ca7361d8c1b9d93fe4b58"],["archives/2019/08/index.html","777636cc8e0b8ee9063fa544b72f8a02"],["archives/2019/10/index.html","33a9eab841ba914580a518579029c885"],["archives/2019/11/index.html","b3c07fdb53d6a4475f53c3ed711b35bb"],["archives/2019/index.html","b1e313150b1e2cd24bb5f37817415a91"],["archives/2019/page/2/index.html","76fd8663e3a11ed06a9570a4ab259042"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","c10d21d726ccd348315d1fb4ad16a277"],["archives/page/2/index.html","52be1d575968208ffc5bc9fd450acdc5"],["archives/page/3/index.html","246bcd2955e8e2aa3540f782d17c8ae6"],["archives/page/4/index.html","6306c887911ebc2bd3a1625ce0162dd4"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","24da8cbdc48b99734ab7013947513c21"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","2038a97f7445bae0b8c9c00a377f8db6"],["page/3/index.html","66d0d3edddf8f7761d5594cb7a79615e"],["page/4/index.html","499d6a6d73015caa243c3d1d65e33e6f"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["source/tags/JS/index.html","7f5020154fabb603050d64f642f47b0c"],["source/tags/ReactNative/index.html","2c86d221ab149cf1926ac86c1b3364ed"],["source/tags/Rust/index.html","be9aaada1353c4908e02fe214e2a939a"],["source/tags/angular/index.html","fab6d26ffb509f4830c890e80fb2d962"],["source/tags/css/index.html","0c33f1d0046ed921a5fb48e9447a7d33"],["source/tags/dart/index.html","affe4a5edd4a97667c8df722d2557eaf"],["source/tags/express/index.html","611ced6494c7f3c3b330af611b76b88c"],["source/tags/flutter/index.html","7fbf89617c39a6984b224892a0258ba7"],["source/tags/fp/index.html","50554b6bd9c5f4cd219313904e4cf8b9"],["source/tags/graphQL/index.html","367c5919896b71763631ba21cca1f44e"],["source/tags/history/index.html","70c1cfccec18e886783c6ff5e66e2d13"],["source/tags/https/index.html","f16c064141c343ee5b05b512fb4a8ef5"],["source/tags/life/index.html","e239f14812cd3415949520e097ecea0f"],["source/tags/mongodb/index.html","5ba019893fccd4e726e1ac0c3ba4f974"],["source/tags/mysql/index.html","21935ebb0b8020c5660e65b62e991637"],["source/tags/nest/index.html","a82641e0536658894d21baced0e9c7a9"],["source/tags/nestjs/index.html","0d61240128f0c5e3ba53aa31efe345d3"],["source/tags/nest学习笔记/index.html","01e5ff3da9b57eb83c51f361ffbee377"],["source/tags/next-js/index.html","e74d431250a584eb50ef9d69d2ce8069"],["source/tags/node/index.html","3d8290212ac996102fd2f47798645ad7"],["source/tags/nodejs/index.html","0dc300198fffbe9231d9049fede3ffca"],["source/tags/puppeteer/index.html","4f44c90c3cd91fdc25cf84df8faa4ec9"],["source/tags/ramda-js-函数式/index.html","c0a4600b7204abe9e052b97086a8853a"],["source/tags/react/index.html","1e23538ddba9b968bd4b44dd2ac66012"],["source/tags/sequelize/index.html","730ac06ebb1fa05f5c31656ffbc870fc"],["source/tags/serverless/index.html","f6cf54af9094d0cc37f120bf44fc570f"],["source/tags/typeORM/index.html","e637b5a632f6d810f9c93530a841ecd5"],["source/tags/typescript/index.html","cf2b84fa943a7df5465f206d2b6fe43c"],["source/tags/web/index.html","b05c19e8ac60b7f9591c730f93e4d30c"],["source/tags/work/index.html","1f3cdf59f8ef6ae85f39c99d787e1925"],["source/tags/wxProgram/index.html","58fc1d31adefbc47a777fbb7cf5faba0"],["source/tags/学习笔记/index.html","eaac489decb1c295eba85f70cc243b45"],["source/tags/效果/index.html","8a595c4e22ad299ef47ea7510a4fa131"],["sw.js","67291de4580ae13ad30bfa381e1fc910"],["tags/JS/index.html","a496edf891398546cfbb92af6e2af540"],["tags/ReactNative/index.html","bc63ea8dd09b9a25a8c67ff3e4b694ee"],["tags/Rust/index.html","77a63d20371b755fd43be0b1fe0da6f3"],["tags/angular/index.html","1107e8478bec8018aadcd9bae0c201fc"],["tags/css/index.html","6076864768c681a5caa1440d3f441d81"],["tags/dart/index.html","d0987021860ffee5fcbf3cb8d41f7664"],["tags/express/index.html","2702d0cbbd061fa367adcaa784ee2996"],["tags/flutter/index.html","20a37202e892657e031d16cd52ad51fa"],["tags/fp/index.html","7b95a9e3384508957ef3bc8cca05f4be"],["tags/graphQL/index.html","27d169bf8a49ceddf9f2283ab1d574fe"],["tags/https/index.html","b1c09e356c4a34c1be0d4615414c3e4f"],["tags/index.html","89d32b566e798ee8df0463db94e2bdb8"],["tags/javascript/index.html","9b1d95cf0649e6d5e9e33c6fef9b8695"],["tags/mongodb/index.html","94955b974d2eea6c674639e50acc73e1"],["tags/mysql/index.html","a8eed85eec6a33ee5a9466dd3eb064ea"],["tags/nest/index.html","b6bffb53930503ae3223212d2d0f7d49"],["tags/nestjs/index.html","bb5adcdfe919f9e93fb9e99db9565bfd"],["tags/next-js/index.html","a5d69c12f49ba7ff25f0596b6e7c105d"],["tags/node/index.html","77c38a31105dc20189afd072fac71fb0"],["tags/nodejs/index.html","f9224555bb55805e6cfe3bf0396a3ee1"],["tags/puppeteer/index.html","1a68244058d09c78897ced09f604bc1f"],["tags/ramda-js-函数式/index.html","64e21cb8c870a890b21964ca6c1d6981"],["tags/react/index.html","d79099d5bb7e093677ca002d502d8f0e"],["tags/sequelize/index.html","09ca9749764b382aab608f049545d57f"],["tags/serverless/index.html","9cd27b23fe85f759e6e6153dd61a8781"],["tags/typeORM/index.html","32127efd27c453d957fe1f16ccc20f00"],["tags/typescript/index.html","494d7cae947f3b830c36e531a96d7eb6"],["tags/web/index.html","806cd43e14a01adb06553ea7da1c3c4c"],["tags/work/index.html","eee45e8d6c1f8ff2d56b65da19ede7e5"],["tags/wxProgram/index.html","989e31a49a498a43bcf9d810266357e6"],["tags/效果/index.html","aa728e0b2962acbd4e0e73e9d700784a"]];
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







