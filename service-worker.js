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

var precacheConfig = [["2018/10/13/hello-world/index.html","63e672aeae153bc2f5d07f656ed4712f"],["2018/10/13/文本换行/index.html","6b4f8c1e1fa56c58281ffd872f0d6c24"],["2018/10/15/css实现轮播/index.html","aa601429078d4f416321fc0533f2b73c"],["2018/10/15/puppeteer-API备忘/index.html","08ad33fc626fa4f0fbe8c652670b93fa"],["2018/10/17/DOM操作/index.html","4029ef1dfcd594c10dcd08fa15598491"],["2018/10/18/rust语法备忘/index.html","12a68310f30b93bcc9ba83877327f008"],["2018/10/18/typeORM学习/index.html","eac4c2d28fef8cf751aae044c537fd5a"],["2018/10/25/typescript知识点/index.html","28119fe213470a8b03a5f64b28f3cea9"],["2018/10/25/小程序思考/index.html","a9c643fe94e8781cb6a1d4d9b1bad1c3"],["2018/10/29/angular指令/index.html","a2ecb395e481699355494f633104de9e"],["2018/10/31/css动画/index.html","e1a54e0604d2ae878e7b77e405a86fb4"],["2018/10/31/css布局/index.html","4a114c30d4e4647a80c147499e6d518f"],["2018/11/01/angular生命周期/index.html","d81b4bcd382bf12dc938d073ecf0a528"],["2018/11/01/angular组件交互/index.html","e6e3dafe7704a7cdbf7573697e5c5fe6"],["2018/11/02/angular模板语法/index.html","67c2fe4faa8f18f4bf5c69f406fecd1c"],["2018/11/03/mysql命令行/index.html","d9e11f0c198eabc85291194376820a64"],["2018/11/04/css知识点/index.html","ff9959716cd629220a51d638123e8378"],["2018/11/14/nest学习/index.html","aca298566173adfa0ab5d45e575b9cdc"],["2018/11/18/js注意点/index.html","fe1e036006e77e5c2d9e26ee185293c1"],["2018/11/21/工作bug总结/index.html","cd8f216c6b60efc66990ac3b2bf21157"],["2018/11/22/mongodb学习/index.html","841562327fd45c06710c2f4ceca913d8"],["2018/11/26/react坑/index.html","2fd9bc79a6f11e10625ebf3ae0324f03"],["2018/11/27/typescript实践/index.html","c0722eaf1be104e5986f69a56a7243da"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","c6800db0fa94f66400d2bfca75e5d78f"],["2018/12/01/vue学习/index.html","c089735881d7133f0dd55c3245399e62"],["2018/12/07/nodejs the right way 一/index.html","3689879874c01b24e539af9f3a61c99e"],["2018/12/07/react生态基本使用笔记/index.html","24c8837556d4a7c2a0b3d6f4d93c96cc"],["2018/12/11/rn基础一/index.html","dfd1faf7b1be43793aa1508ae4a73924"],["2018/12/11/函数式一/index.html","dcd3246ac3368dea9e7ea3ec56f68968"],["2018/12/12/nodejs之process/index.html","0b705724ebecb2936b567edaff65660a"],["2018/12/12/node事件循环/index.html","f6e104293fefee16a883c661f07ed951"],["2018/12/13/elasticsearch/index.html","94b8a6acca1bb79a1b85ce1eea9dcf81"],["2018/12/13/express/index.html","8e25e62e7b9b69f3c9909b9a9fa18cc2"],["2018/12/18/小程序性能优化/index.html","6a01ce490c0c5c559715c701c4125cda"],["2018/12/20/express2之database/index.html","7105b0f1565aa18c0df3c1b9d6bb84ee"],["2018/12/26/flutter学习1/index.html","97b7cfdbc20ad1141bf9fcf586e69102"],["2018/12/27/flutter之包管理/index.html","c3cee07a0e5a54edb8aba370bda40553"],["2018/12/28/express测试/index.html","aac44c09e851ded7ac691e92db033eda"],["2018/12/28/flutter之widget基础/index.html","f634d7042b4a04324332ed06875b1a7e"],["2018/12/29/Express值请求体中间件解析/index.html","f5c07d582076c01416504fb79a216c11"],["2019/01/02/express开发小结/index.html","6c1b9abe8fbe69cb740e05d43b0c55f2"],["2019/01/05/dart基础1/index.html","5e1305011c15f02db248fd0fe0ad157d"],["2019/01/05/dart基础2/index.html","ccaa3084b741f3d99143e3efca7dc33e"],["2019/01/07/dart基础3/index.html","9be2fc6940cfe2ed1c89a198d64c60d4"],["2019/01/07/express学习/index.html","370d0f017cd3274bbe011c3d913b9225"],["2019/01/09/Flutter之文本/index.html","45ff757c9892310a811160d05b63dd16"],["2019/01/11/Flutter之按钮/index.html","632a74258ae0e78b0c3d82a7afe7da93"],["2019/01/11/flutter之图片和icon/index.html","fd342455213a86cdb2c8ef5be6827565"],["2019/01/14/next-js学习/index.html","742854654af17018d7c3959ba6239696"],["2019/01/15/flutter之弹性布局Flex/index.html","7dab72cfedc233a992ffc30f5e400e96"],["2019/01/15/flutter线性布局/index.html","2cfce3f086a08c2635eb8e9b0bd69fa4"],["2019/01/15/rust2/index.html","a00b6ebd664ee12ce41a7f4b0deee068"],["2019/01/20/express-ts上手记1/index.html","24c9bdae65d5041cad0301f70c49a846"],["2019/01/21/react遇上typescript/index.html","2853793aaef7e8fa2432c2773ed2c6cc"],["2019/01/26/新点总结/index.html","33db4c679e7a8729f9e004ae64f1643d"],["2019/02/11/angular架构概览/index.html","4848f2107092d485f8818f3678caac6e"],["2019/03/28/promise相关/index.html","6932a6335af448ac9184164d87295890"],["2019/03/28/实现一个sleep方法/index.html","57876ff66be51bc6285ea0a9b4b65b35"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","0bd547d651433eb5799dac6429a908ef"],["2019/04/02/证书可信任/index.html","83c4b16d494e1aa5587809b8c66abf61"],["2019/04/09/从一道题目谈谈跨域/index.html","519d3a37be3f96d92f53fb3d85bf8513"],["2019/04/18/关于滚动吸顶/index.html","814afce1aecbe5316cc840a3f5d0a0d5"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","c4eedb4c0a65f0faddc87349b6b380b4"],["2019/04/23/深入理解padding/index.html","d8b8b062294d3fe6d83545b4977d8998"],["2019/04/24/css题目/index.html","8165443cac1dafbf022e3385109041dd"],["2019/04/24/js题目/index.html","84e439702138e75689b895be166f425b"],["2019/04/25/好吧-EventLoop/index.html","51de5d99f22314a287c195ae176c96bb"],["2019/04/26/轮播图实现/index.html","2c2ea4c8e9471f95df072c29f59e3cd5"],["2019/04/27/深入理解margin/index.html","02b2765bd54e229ab5780810584307fc"],["2019/05/07/FirstPaint/index.html","274dcff03782c0f94da2977265d74e29"],["2019/05/14/图片懒加载/index.html","c06b108ce11430803f34d5855322aa3d"],["2019/05/16/typescript学习二/index.html","d30f1c7487faf18eb4bee733169bf01b"],["2019/05/16/利用原生JS实现简易的v-model/index.html","7b38c01bb6f599d1d3f3236a30ea1f18"],["2019/05/16/利用原生JS实现简易的vue/index.html","a7ba140d5a570b985ec56d66e6b5fc5e"],["2019/05/16/利用原生js实现数据代理/index.html","faec78b4bb947d2b14b163a889e5e360"],["2019/05/22/typescript搭配react使用笔记1/index.html","1e56114c9080f525e02b3e44617ea22f"],["2019/05/23/typescript-react学习笔记2/index.html","65462e20a135811524edb74d85048e8f"],["2019/05/26/typescript-react学习笔记3/index.html","e4b978ba2250cacefdcd8d35a1a6fba9"],["2019/05/27/types/index.html","d1aa85372f07d3912176bda0723945d2"],["2019/05/29/learning-graphQL-笔记1/index.html","275120f2f5bf3d82be76fb6474bc99e5"],["2019/06/04/ramda笔记/index.html","04e3e33aadf24e7fc5cf605cd3785014"],["2019/06/05/Sequelize学习/index.html","11559b5d071829f340a579292e6f8f6d"],["2019/06/17/serverless笔记1/index.html","e0a39a699cdaa9e441bbae36a8a3438f"],["2019/06/21/函数式/index.html","be94e0b0de0554ca4b7a768c6640e4e5"],["archives/2018/10/index.html","78d2fe4ec8aeee5d59a7f9c1ec225a4d"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","dfd4e47c3a6c8cf01ab3e8aedf5c0ced"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","d7846d9352fdfed8bbe55b67e68e9238"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","a4ed23dd6a105b5d1e1a6a9e43b9eb2a"],["archives/2018/page/2/index.html","a397276623e814e72c5be885fd3fb0e7"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","4251ccb19ff71020fbf1bd05800f4e51"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","cd1719f5243756b08f1c7af45c9a443e"],["archives/2019/03/index.html","6f5b442963064930758c7b2b83c39540"],["archives/2019/04/index.html","0440c9f8841e251c38d85db6191085bb"],["archives/2019/05/index.html","50db285bc5b9e77e307c5f7196d9d926"],["archives/2019/06/index.html","5bf0eb0cdc53bb8b5253cf18cb7b3a1c"],["archives/2019/index.html","07a1ef46a16ae4b22a2e1460b094cccd"],["archives/2019/page/2/index.html","ec8ad3057cbfc182bd83b31eee2704c8"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","48686bbce0e9ba8a27bb7282ce65c322"],["archives/page/2/index.html","9b509fbefe5766399ddeaa46025fe045"],["archives/page/3/index.html","fd383f956a55322ec145fcf2a4b2485c"],["archives/page/4/index.html","eb7b595e5dea77d2f76128aefc94170e"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","72b02b34bb4d9dcdc571f4eac247ec9f"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","7ca4787e9c180814d328c03950c98efc"],["page/3/index.html","78ad56ccc8d55b54c8ef4be0a593372a"],["page/4/index.html","46ff3045bf09044a5ff6dda28a0e3503"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["source/tags/JS/index.html","a70540621a3b3af6aa12699c36245ce0"],["source/tags/ReactNative/index.html","b3768705f3cb8675528c70701bf02160"],["source/tags/Rust/index.html","d134ef4901fc1b4338beeb5d5d59db1e"],["source/tags/angular/index.html","4ba3de8a28885ab919b0aa197ec9eec8"],["source/tags/css/index.html","ceb3e36c07a24a026f6860f4e23e9b36"],["source/tags/dart/index.html","c8ec762debe3162c293fecd01a2ddeab"],["source/tags/express/index.html","52535fa972b741f45812e8a2772640d5"],["source/tags/flutter/index.html","2b6e4b045aeb4a84db61e10f1c292320"],["source/tags/fp/index.html","93add60f69e31e5c2dda351e5997b9e4"],["source/tags/graphQL/index.html","cfb75d69aae53ed4e32606cacce2f618"],["source/tags/https/index.html","ef5856491441d254ee5bdea0ad3b6c29"],["source/tags/mongodb/index.html","5b90f0ecea517d818ea8e45ed80d5481"],["source/tags/mysql/index.html","6c80742fc4482b1830d24f35ce9ae872"],["source/tags/nest/index.html","bb24dc9fc817f2790d05a1c68509a115"],["source/tags/nestjs/index.html","457c43bf1d79af5ad83982220a0e3520"],["source/tags/next-js/index.html","71d5f5039a465eb762e36ba809adf1c5"],["source/tags/node/index.html","8e94a8cf29667c5295768eb88aa0ea10"],["source/tags/nodejs/index.html","4d2fd86d0a0646cab3e7f367c6d7e824"],["source/tags/puppeteer/index.html","157735ab5126d095c1fc0e41a5c6fa35"],["source/tags/ramda-js-函数式/index.html","20a78e4ee70f88814f1fcc71c58b7a41"],["source/tags/react/index.html","d4410ca0ebc238b89954e7e39527f645"],["source/tags/sequelize/index.html","f376e8c90d5975595a6803ab7f3589af"],["source/tags/serverless/index.html","1c73a35b6ae4fc1fb9d13450041a8246"],["source/tags/typeORM/index.html","ab496f0c5039f7dc247af354a9bd4658"],["source/tags/typescript/index.html","650e3e8fb78f6cad83edfc912dcd98e4"],["source/tags/web/index.html","5ec3d78c0ad77a4dc23246c6e1fed5c6"],["source/tags/work/index.html","49d4a45df219f15de5d83f1ee7e46b87"],["source/tags/wxProgram/index.html","28612c663a01e24527a91e07dd0f3956"],["source/tags/效果/index.html","58deb0e1b2a0f632b3db84c29b0b9217"],["sw.js","bc9770d4f7e23b914842f1844ebee9b8"],["tags/JS/index.html","a496edf891398546cfbb92af6e2af540"],["tags/ReactNative/index.html","bc63ea8dd09b9a25a8c67ff3e4b694ee"],["tags/Rust/index.html","77a63d20371b755fd43be0b1fe0da6f3"],["tags/angular/index.html","1107e8478bec8018aadcd9bae0c201fc"],["tags/css/index.html","6076864768c681a5caa1440d3f441d81"],["tags/dart/index.html","d0987021860ffee5fcbf3cb8d41f7664"],["tags/express/index.html","2702d0cbbd061fa367adcaa784ee2996"],["tags/flutter/index.html","20a37202e892657e031d16cd52ad51fa"],["tags/fp/index.html","7b95a9e3384508957ef3bc8cca05f4be"],["tags/graphQL/index.html","27d169bf8a49ceddf9f2283ab1d574fe"],["tags/https/index.html","b1c09e356c4a34c1be0d4615414c3e4f"],["tags/index.html","222b00ff5f38be4cd272b7d333998afb"],["tags/javascript/index.html","9b1d95cf0649e6d5e9e33c6fef9b8695"],["tags/mongodb/index.html","94955b974d2eea6c674639e50acc73e1"],["tags/mysql/index.html","a8eed85eec6a33ee5a9466dd3eb064ea"],["tags/nest/index.html","b6bffb53930503ae3223212d2d0f7d49"],["tags/nestjs/index.html","bb5adcdfe919f9e93fb9e99db9565bfd"],["tags/next-js/index.html","a5d69c12f49ba7ff25f0596b6e7c105d"],["tags/node/index.html","77c38a31105dc20189afd072fac71fb0"],["tags/nodejs/index.html","f9224555bb55805e6cfe3bf0396a3ee1"],["tags/puppeteer/index.html","1a68244058d09c78897ced09f604bc1f"],["tags/ramda-js-函数式/index.html","64e21cb8c870a890b21964ca6c1d6981"],["tags/react/index.html","d79099d5bb7e093677ca002d502d8f0e"],["tags/sequelize/index.html","09ca9749764b382aab608f049545d57f"],["tags/serverless/index.html","9cd27b23fe85f759e6e6153dd61a8781"],["tags/typeORM/index.html","32127efd27c453d957fe1f16ccc20f00"],["tags/typescript/index.html","494d7cae947f3b830c36e531a96d7eb6"],["tags/web/index.html","806cd43e14a01adb06553ea7da1c3c4c"],["tags/work/index.html","eee45e8d6c1f8ff2d56b65da19ede7e5"],["tags/wxProgram/index.html","989e31a49a498a43bcf9d810266357e6"],["tags/效果/index.html","aa728e0b2962acbd4e0e73e9d700784a"]];
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







