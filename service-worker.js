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

var precacheConfig = [["2018/10/13/hello-world/index.html","51cc57281f9e810d8a9749f945e91ee7"],["2018/10/13/文本换行/index.html","ef3b454834d2a02a14225ce732944515"],["2018/10/15/css实现轮播/index.html","57440f8b0f12fe272be507cefd8a3235"],["2018/10/15/puppeteer-API备忘/index.html","b2ca82b79fd4d5a49ca41dcffcd6b13b"],["2018/10/17/DOM操作/index.html","12eed7689dbb90427e9e0724074f54f5"],["2018/10/18/rust语法备忘/index.html","b74313cd64b0c2618676be97afa218d4"],["2018/10/18/typeORM学习/index.html","b31438a7c1794d79f0b1a7f652195119"],["2018/10/25/typescript知识点/index.html","42ab33c89cd77e008d4f6d7b4a54dcf5"],["2018/10/25/小程序思考/index.html","7c230b1b9f96edb86da4319dbabc25e5"],["2018/10/29/angular指令/index.html","8d8c9ed71f6614740de9c6a67def1dda"],["2018/10/31/css动画/index.html","8130e7af91d3595b711e8570bfaf7580"],["2018/10/31/css布局/index.html","2067474d4cb59f8db1b9f365682e6637"],["2018/11/01/angular生命周期/index.html","3a40135a4cf1c4bcd447d3585d5700ae"],["2018/11/01/angular组件交互/index.html","80a22bfff801e9894a5ef06b56108d6d"],["2018/11/02/angular模板语法/index.html","d30a84208f25f34ad2ebe8e4dbe48490"],["2018/11/03/mysql命令行/index.html","ef7ca291cfbe5a5c8ee9c463cab6813f"],["2018/11/04/css知识点/index.html","61b62156a6dd0c8513a7297af8826a91"],["2018/11/14/nest学习/index.html","a4f7bcb928237e7df818ad1f6c6c2723"],["2018/11/18/js注意点/index.html","fe1e036006e77e5c2d9e26ee185293c1"],["2018/11/21/工作bug总结/index.html","718524dfe6339b75d3c45d0da95cf579"],["2018/11/22/mongodb学习/index.html","33e728f2d777514987a50f6e8ed5b72b"],["2018/11/26/react坑/index.html","82750ddbb067fb5f4ae9f542bd383c02"],["2018/11/27/typescript实践/index.html","656ed3ab9e3aaaca1d886529aaf75a62"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","bc3f7fa99ec6cac29d9ac6b965f56913"],["2018/12/01/vue学习/index.html","5b0ab026f487829ccb0f404461d467ec"],["2018/12/07/nodejs the right way 一/index.html","e47fc7a58b96314337c9e3def24c55e0"],["2018/12/07/react生态基本使用笔记/index.html","81714b0e8b5e86ef7fc1b4cb3ee70e54"],["2018/12/11/rn基础一/index.html","ece84ad67b0550365269c6a8360f363d"],["2018/12/11/函数式一/index.html","dcd3246ac3368dea9e7ea3ec56f68968"],["2018/12/12/nodejs之process/index.html","22f4be54e35b0227df8a971cce1bcf9a"],["2018/12/12/node事件循环/index.html","ba0274bbde1fd7db3d31eaaf56f57d01"],["2018/12/13/elasticsearch/index.html","2ad13c9d153ef0d339859ddf61b10bad"],["2018/12/13/express/index.html","18ab9dfa3be96eae08449f7dcb946ed7"],["2018/12/18/小程序性能优化/index.html","61cfe2c5736a65a182bacb2ce321c5fc"],["2018/12/20/express2之database/index.html","313302bbe51d70ac80721711bc571bfb"],["2018/12/26/flutter学习1/index.html","51397884a376dc8497445c26118cb93d"],["2018/12/27/flutter之包管理/index.html","b598ccdafaa103e3756887acb7cd96bb"],["2018/12/28/express测试/index.html","3a9dd5c80b069aa29f6d8d816fc6c96b"],["2018/12/28/flutter之widget基础/index.html","6b0dfa780cc59b63f5376ac8dbb77ca2"],["2018/12/29/Express值请求体中间件解析/index.html","94cab02a92c40880db357832d21aeb6a"],["2019/01/02/express开发小结/index.html","1b7a7571836f49e7e3e3180c924002da"],["2019/01/05/dart基础1/index.html","409bbdec35696131b07f63f6d7b86afd"],["2019/01/05/dart基础2/index.html","6b9ed21cdeae32d72902dd52847f89d8"],["2019/01/07/dart基础3/index.html","78e4a280019102dbb63a0e043c93ead7"],["2019/01/07/express学习/index.html","51ab0a1329eefdeedfade12967d7b02d"],["2019/01/09/Flutter之文本/index.html","cb519553499101972b59262010d9e74e"],["2019/01/11/Flutter之按钮/index.html","e507046f0554c06a98e8d0f3167c6a02"],["2019/01/11/flutter之图片和icon/index.html","9d1c9e0b23ff308373d4308aa94dd443"],["2019/01/14/next-js学习/index.html","2bb034aea453fbf9c522da69d1dac7c0"],["2019/01/15/flutter之弹性布局Flex/index.html","20ae7ff098be677c6621eb6e9169c920"],["2019/01/15/flutter线性布局/index.html","8ba27c5b73b200b25600e86f00450466"],["2019/01/15/rust2/index.html","dfdd23d20c268b991c17a188a3577944"],["2019/01/20/express-ts上手记1/index.html","1ee72cf0b3804673b03727f59755acb4"],["2019/01/21/react遇上typescript/index.html","d5b4c17341460ba2ec3cbfdf9a80f40f"],["2019/01/26/新点总结/index.html","47ba7aae8bdc65a7073bb48e49ea5f6a"],["2019/02/11/angular架构概览/index.html","2717870b846f55fef33e8f2ee0b4f77c"],["2019/03/28/promise相关/index.html","34f2efe03c14dc41b8542d4865c23a24"],["2019/03/28/实现一个sleep方法/index.html","1589825242b30c28f7f2899acb4ca50b"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","5d9d9664d39bf530b76b3b04f9c756e0"],["2019/04/02/证书可信任/index.html","23b86d80aecadedcec3ffcca2ea86f72"],["2019/04/09/从一道题目谈谈跨域/index.html","6c331eb995dd9767bd061e199fc2d470"],["2019/04/18/关于滚动吸顶/index.html","e207ba299fd8d477533536fe912d9f19"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","735ff4ab5f2f071fd3d62d6008796264"],["2019/04/23/深入理解padding/index.html","0d211b7a5ae36b2e0e4a64f4d23486c9"],["2019/04/24/css题目/index.html","61ffc6c2c127703a4390a4d52017eb23"],["2019/04/24/js题目/index.html","dd11d4d8cd35a691199e7d6149577175"],["2019/04/25/好吧-EventLoop/index.html","13c538b3b96aa72acd60f87cdd8ae1c1"],["2019/04/26/轮播图实现/index.html","5a6af7ce4763b53a74fee14974791bd0"],["2019/04/27/深入理解margin/index.html","3c4e8c57fc238090425a74cbcf5c851f"],["2019/05/07/FirstPaint/index.html","03d8742a02b66f8d424eaa90a5e2d57a"],["2019/05/14/图片懒加载/index.html","c8124e498f4f868072005cce1d63d8bb"],["2019/05/16/typescript学习二/index.html","76283822026ea22e6c18689829717a88"],["2019/05/16/利用原生JS实现简易的v-model/index.html","ec9ffcc2d15a01a919c7e1d52ade3286"],["2019/05/16/利用原生JS实现简易的vue/index.html","a7ba140d5a570b985ec56d66e6b5fc5e"],["2019/05/16/利用原生js实现数据代理/index.html","faec78b4bb947d2b14b163a889e5e360"],["2019/05/22/typescript搭配react使用笔记1/index.html","6d1c0b6ca34f8bb43abc472da08488cd"],["2019/05/23/typescript-react学习笔记2/index.html","ce1efe5411e80eff02ad3ae861a4f570"],["2019/05/26/typescript-react学习笔记3/index.html","f327705a09d189536227afba177f44c8"],["2019/05/27/types/index.html","a5e6cf3b5a49911b14979d4c2400f9bc"],["2019/05/29/learning-graphQL-笔记1/index.html","d7e0abd67b418bb3df192835b0cec1bf"],["2019/06/04/ramda笔记/index.html","83a2ac16e700be5fbdfe1c7a03e50697"],["2019/06/05/Sequelize学习/index.html","d5a3aa40b6a0d88dec26f3979ad00086"],["2019/06/17/serverless笔记1/index.html","20a9bd9413bee4a48654bd7ed53b2b36"],["2019/06/21/函数式/index.html","39eac376242ccc06efa52be06109fa85"],["archives/2018/10/index.html","eb697d4d002f10d8046b24683a059cbb"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","7a997b7a134ca360d20ef6711e10a7bd"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","929e9eccb6013c4b0482566e13bd6440"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","7799cf4027cecfc68ec7a19319f4f057"],["archives/2018/page/2/index.html","a8546a172fd8382055c0f6b864b794fb"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","b9864db19750c2e9602692eb2ffad13d"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","f7cdbd60cd3b0b9cc1b94032a3a8f7e8"],["archives/2019/03/index.html","8cb59a31fe4610379cb793e1d425e563"],["archives/2019/04/index.html","1c530b62984a4f34c52502898f3a5ef4"],["archives/2019/05/index.html","90008413d591d37f11b9e11e9d1aa144"],["archives/2019/06/index.html","bf8b1e39009a9db3e08e63f1ef501650"],["archives/2019/index.html","c581c6c945af2f94cf6882172e002c54"],["archives/2019/page/2/index.html","3e212ddfbb1a16ba17885f14698ae1ac"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","3417b12dc7b2534abb28bfd194f5cc18"],["archives/page/2/index.html","68400bbd3159e6317db56a5a386d497b"],["archives/page/3/index.html","632aa479057edfe1f5163dba9794c99f"],["archives/page/4/index.html","14faaa8cf2be9fd43173b4278088d293"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","164843144c3dd714bcab631315f6285c"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","e4a013e069904210abe67ff1b5a7f93a"],["page/3/index.html","4acf5b88816fc979e4eb2a12c7b8d79a"],["page/4/index.html","c5dd4eed785662235f68f2bcda30cded"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["sw.js","da186f8489dd94c48a66b9df6489a4ff"],["tags/JS/index.html","a496edf891398546cfbb92af6e2af540"],["tags/ReactNative/index.html","bc63ea8dd09b9a25a8c67ff3e4b694ee"],["tags/Rust/index.html","77a63d20371b755fd43be0b1fe0da6f3"],["tags/angular/index.html","1107e8478bec8018aadcd9bae0c201fc"],["tags/css/index.html","6076864768c681a5caa1440d3f441d81"],["tags/dart/index.html","d0987021860ffee5fcbf3cb8d41f7664"],["tags/express/index.html","2702d0cbbd061fa367adcaa784ee2996"],["tags/flutter/index.html","20a37202e892657e031d16cd52ad51fa"],["tags/fp/index.html","7b95a9e3384508957ef3bc8cca05f4be"],["tags/graphQL/index.html","27d169bf8a49ceddf9f2283ab1d574fe"],["tags/https/index.html","b1c09e356c4a34c1be0d4615414c3e4f"],["tags/index.html","9961ffc3e8be9a08eb4353b88139f66e"],["tags/javascript/index.html","9b1d95cf0649e6d5e9e33c6fef9b8695"],["tags/mongodb/index.html","94955b974d2eea6c674639e50acc73e1"],["tags/mysql/index.html","a8eed85eec6a33ee5a9466dd3eb064ea"],["tags/nest/index.html","b6bffb53930503ae3223212d2d0f7d49"],["tags/nestjs/index.html","bb5adcdfe919f9e93fb9e99db9565bfd"],["tags/next-js/index.html","a5d69c12f49ba7ff25f0596b6e7c105d"],["tags/node/index.html","77c38a31105dc20189afd072fac71fb0"],["tags/nodejs/index.html","f9224555bb55805e6cfe3bf0396a3ee1"],["tags/puppeteer/index.html","1a68244058d09c78897ced09f604bc1f"],["tags/ramda-js-函数式/index.html","64e21cb8c870a890b21964ca6c1d6981"],["tags/react/index.html","d79099d5bb7e093677ca002d502d8f0e"],["tags/sequelize/index.html","09ca9749764b382aab608f049545d57f"],["tags/serverless/index.html","9cd27b23fe85f759e6e6153dd61a8781"],["tags/typeORM/index.html","32127efd27c453d957fe1f16ccc20f00"],["tags/typescript/index.html","494d7cae947f3b830c36e531a96d7eb6"],["tags/web/index.html","806cd43e14a01adb06553ea7da1c3c4c"],["tags/work/index.html","eee45e8d6c1f8ff2d56b65da19ede7e5"],["tags/wxProgram/index.html","989e31a49a498a43bcf9d810266357e6"],["tags/效果/index.html","aa728e0b2962acbd4e0e73e9d700784a"]];
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







