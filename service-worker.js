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

var precacheConfig = [["2018/10/13/hello-world/index.html","ebcbe8f38b8fb8d8e7f51f024f353e87"],["2018/10/13/文本换行/index.html","e3dfef4ada8bec3ff2c0b80edb186606"],["2018/10/15/css实现轮播/index.html","119faf7df9f7c46e1b7feae18cb840f5"],["2018/10/15/puppeteer-API备忘/index.html","464f4feae1767ad2b294af6ceb1ce62b"],["2018/10/17/DOM操作/index.html","6ffea8b2a993eb3a25a3dd97c66e85f1"],["2018/10/18/rust语法备忘/index.html","291f7778ecaaff617de0e16a79dbd07e"],["2018/10/18/typeORM学习/index.html","f20b3d838db57c266492ef2527cb56c6"],["2018/10/25/typescript知识点/index.html","5da76582696d8f3b41d3b3d8a345d2e1"],["2018/10/25/小程序思考/index.html","fe52e9dddc157adf43bd0b031e5748cc"],["2018/10/29/angular指令/index.html","d14dce611d042b30705657e43a77a368"],["2018/10/31/css动画/index.html","1467af91a7dc1a5c10be247bc53535cf"],["2018/10/31/css布局/index.html","60adb23770cd223c949ca753203eb20e"],["2018/11/01/angular生命周期/index.html","66f69de9ba017105b51fd068cce2489e"],["2018/11/01/angular组件交互/index.html","404425b2dfe3b975bb13b1fbb340eedc"],["2018/11/02/angular模板语法/index.html","bebdf957a237845d82749f164ea6695a"],["2018/11/03/mysql命令行/index.html","751a617dbd48a0fc7abcd6747c881692"],["2018/11/04/css知识点/index.html","a6a3a91dfb9d3cc3e8ac65c366ffdd89"],["2018/11/14/nest学习/index.html","b411b91237a0a267afe7758c2ae8d29e"],["2018/11/18/js注意点/index.html","fe1e036006e77e5c2d9e26ee185293c1"],["2018/11/21/工作bug总结/index.html","aafb1b807b8529bb252b9a06d9c237d0"],["2018/11/21/工作笔记/index.html","d82efa871dd8fe34d80d2a28af86c5db"],["2018/11/22/mongodb学习/index.html","94827fd45071979b2817a60e8f4d471c"],["2018/11/26/react坑/index.html","7205fc3d4783586188fb3e54bce73aaa"],["2018/11/27/typescript实践/index.html","a2224d04b2929675feb620df7402a4e5"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","dc7bdc9d94f976f526d8c091be37b924"],["2018/12/01/vue学习/index.html","91fdac8d21bf40bf8664a4476798e809"],["2018/12/07/nodejs the right way 一/index.html","a082bc1db7811b7e06e1aefe1abeb522"],["2018/12/07/react生态基本使用笔记/index.html","816be3194495a2b6c2aecb10baae71a4"],["2018/12/11/rn基础一/index.html","f8d32612b00333d1b4543a4a2e3d96a4"],["2018/12/11/函数式一/index.html","dcd3246ac3368dea9e7ea3ec56f68968"],["2018/12/12/nodejs之process/index.html","d2dae01fa38b491ef0c2bec4c451e99b"],["2018/12/12/node事件循环/index.html","11dc18ef428937eb8325545ab0998dae"],["2018/12/13/elasticsearch/index.html","a8fab8ea999ad74eafd299f21d9df39e"],["2018/12/13/express/index.html","b1df04b8d3f32368e01e062c50a0a665"],["2018/12/18/小程序性能优化/index.html","6a01ce490c0c5c559715c701c4125cda"],["2018/12/20/express2之database/index.html","ae2d7f182fd3b0c6a95e02c0586c883d"],["2018/12/26/flutter学习1/index.html","c1ca8615e9083d0958b9b3f65005ed7a"],["2018/12/27/flutter之包管理/index.html","b55460cbc98eca24246ed837eb395905"],["2018/12/28/express测试/index.html","81155b79c84111b5eb1a5339c0a98531"],["2018/12/28/flutter之widget基础/index.html","0627e186c0d5bb9d26eb8d85d7766e31"],["2018/12/29/Express值请求体中间件解析/index.html","129143543d636955b6e41391d6f5c0b8"],["2019/01/02/express开发小结/index.html","c7c8fb12b3a9f25ed51dd09a6b3a0a0b"],["2019/01/05/dart基础1/index.html","4fce9a8c81873e781d84973ee5c6fa81"],["2019/01/05/dart基础2/index.html","d7c8e07d855b35c9681a2a6f4c077122"],["2019/01/07/dart基础3/index.html","5822882cd53bd61e2ec0cebd256c719f"],["2019/01/07/express学习/index.html","0c68872067926ac28e76280664e724dc"],["2019/01/09/Flutter之文本/index.html","b24f4cce1822b7a5e8b6175baafd475c"],["2019/01/11/Flutter之按钮/index.html","5b9c1c22f0f7ace84ce6994ef0d21997"],["2019/01/11/flutter之图片和icon/index.html","2dee2251f211df5c5b32d64bdecfab4e"],["2019/01/14/next-js学习/index.html","31340150e6488e15d3de03d834b09728"],["2019/01/15/flutter之弹性布局Flex/index.html","6c3364fa7a28bdf533bd43bf6b793f5f"],["2019/01/15/flutter线性布局/index.html","6650145e8e4a26a4f6d78dea7f13ea74"],["2019/01/15/rust2/index.html","05991ef9c0eb6a09634948343664f2d2"],["2019/01/20/express-ts上手记1/index.html","4e0a3415674a959b42e214419d6abf2b"],["2019/01/21/react遇上typescript/index.html","c3cdeaa50f3d31a98960714877b0d6fd"],["2019/01/26/新点总结/index.html","64a6291f7a1f0ee75b994c50aee19b1a"],["2019/02/11/angular架构概览/index.html","e2184d3612756d7fa2cc37ca8c3da651"],["2019/03/28/promise相关/index.html","5ea8b59ceb4f789738bd1954d04d256f"],["2019/03/28/实现一个sleep方法/index.html","d53a43d9ac81ab7638a45c4fb786f3f6"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","e002290322f32c0ebde36c589a314d94"],["2019/04/02/证书可信任/index.html","22cd41130cce82efe152f75c1fb3e0d3"],["2019/04/09/从一道题目谈谈跨域/index.html","4632a64ad4e8b788d6b0f8cea6176ce2"],["2019/04/18/关于滚动吸顶/index.html","bfb865f9d5737c2b3964422ab47858ac"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","a6829b60cde247ca354656977c4e1cf3"],["2019/04/23/深入理解padding/index.html","5f97743ec575b2dc1f0026827ac67d18"],["2019/04/24/css题目/index.html","bf8a3f501c8550ff736fcbe0a3f4a826"],["2019/04/24/js题目/index.html","00133514ce936ec323cd17b61a7269fe"],["2019/04/25/好吧-EventLoop/index.html","7b66ffba35fe4b0547e1c86a47b91f14"],["2019/04/26/轮播图实现/index.html","50f598d4d436f4ab3f6c9f9133712bb4"],["2019/04/27/深入理解margin/index.html","baed14cc350ef0c19ba94db17a52139b"],["2019/05/07/FirstPaint/index.html","5b202224e97e9ecd53a42e05fc7460d8"],["2019/05/14/图片懒加载/index.html","a4b853cd9fc01548df9860c3597d95e7"],["2019/05/16/typescript学习二/index.html","14e6bfddd1ff80dc10aa2cdd491514df"],["2019/05/16/利用原生JS实现简易的v-model/index.html","23ea8eec83bb65b1f79eaee228175039"],["2019/05/16/利用原生JS实现简易的vue/index.html","a7ba140d5a570b985ec56d66e6b5fc5e"],["2019/05/16/利用原生js实现数据代理/index.html","faec78b4bb947d2b14b163a889e5e360"],["2019/05/22/typescript搭配react使用笔记1/index.html","179aee9353594999f18ca23d798a91d6"],["2019/05/23/typescript-react学习笔记2/index.html","7a5048ab86ff28a80fac6e38932ab805"],["2019/05/26/typescript-react学习笔记3/index.html","b9e7485deb82ac6085b15fadf9b9c00c"],["2019/05/27/types/index.html","248a5aea97ae08d492a7fb9236c651a4"],["2019/05/29/learning-graphQL-笔记1/index.html","02bcb19eb74e7703938160dbe8618763"],["2019/06/04/ramda笔记/index.html","8d60e7f92b570edc8271f1a09325cb87"],["2019/06/05/Sequelize学习/index.html","65fff130c6ce31d2fc86f82d11930f54"],["2019/06/17/serverless笔记1/index.html","6fc24bbec49695b094002a4ab7daea28"],["2019/06/21/函数式/index.html","2cae7ffd1b57f9a4bafc9c8810492aaf"],["2019/08/04/定投/index.html","87426eaf9b801e85bbc7a163c4562428"],["2019/08/06/Rust类型系统/index.html","f701824e2dc7d2b91421861a973c8097"],["2019/10/03/History1/index.html","6280a070e2247ace1ad70e409e1fae3a"],["2019/11/06/nestjs的模块/index.html","e0d69e2af8ad08e487da7be4c8295cb5"],["2019/11/06/nest管道/index.html","e412f4dcc4577921184c09ed25affb73"],["2019/11/07/nestjs守卫/index.html","4a6f8ffaab83fda67f1bfc0e5b528925"],["archives/2018/10/index.html","c3817e68209826093ff76c1a65cbbc67"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","3bf517a5c5ece4bd07609c2a70ad4270"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","d996c2fd2fb9d08947664d3ad383fb6f"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","b37cf17b7d240e63641147196e9fba74"],["archives/2018/page/2/index.html","a8db31a183d69805431aebb49194ad5f"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","d7fe7867f9cbdbce86a7dcf308a60b5b"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","114b81359396a4d80551ffdd4e113b21"],["archives/2019/03/index.html","58df4c05a01acd98336618a135d1e7cf"],["archives/2019/04/index.html","299b33ce772b0da636d2a3ea3bc689e6"],["archives/2019/05/index.html","3b69e15da9682eef947a5bf11c6ce7b9"],["archives/2019/06/index.html","f285084454f4b7bd495716cb06227dc9"],["archives/2019/08/index.html","ad492bc11d5b63af64d5babd10f76d31"],["archives/2019/10/index.html","cced2ae2729d3824eb3cefa09f1200f0"],["archives/2019/11/index.html","1e56aaabc2abdc5351d695a4773d7bb2"],["archives/2019/index.html","73cd63ff007db8256e1ed6f0637655b9"],["archives/2019/page/2/index.html","76c35b88274b4177d62643b77c930c02"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","b677e59272f92d4f695e2f92b3e6c55f"],["archives/page/2/index.html","1821621e15bf8e40919cfc9e7a0739f3"],["archives/page/3/index.html","6d7f2158c0ab1af030934bc667ab72a8"],["archives/page/4/index.html","ba81f7d1e47767c424abc47e368fe182"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","fa3ece93f0d076bc3f7ae81190d10fbe"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","c6855db1484e90ab3cf8d2d1faef8ab4"],["page/3/index.html","0cb227373cccecf0c35cf9aa0545232f"],["page/4/index.html","f8089ad55ae7910839f5dae8c47a342a"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["source/tags/JS/index.html","562330c4f123d06a89cb1ee89960f67c"],["source/tags/ReactNative/index.html","a584cde1e7135cd59b669615acb8d089"],["source/tags/Rust/index.html","e6c6ff291470a4058c7d6c743cdb4eee"],["source/tags/angular/index.html","6f6aaf015cbc9df75c8b95bd8fdd730c"],["source/tags/css/index.html","5f995e9ab0dd873cd42cba986d973cbe"],["source/tags/dart/index.html","1e137caff1f17eae4dc2cbb76b44a9ed"],["source/tags/express/index.html","e1a275a4e82e85c432c00c63ca793c5c"],["source/tags/flutter/index.html","fca2d6c85cab6f8b5833679659e400a7"],["source/tags/fp/index.html","7180b71e4913a1e03eddb5889fd470a2"],["source/tags/graphQL/index.html","83a3062cf697fee5a0f7c1e1116372b5"],["source/tags/history/index.html","73b8cd771246c774018d87e90a2a118e"],["source/tags/https/index.html","87daa219c0e108701480791472f54f98"],["source/tags/life/index.html","8bb9ddbe3ab01981c292c9268694f149"],["source/tags/mongodb/index.html","c71a06a17d193d77e35d5ab2a5c93ebf"],["source/tags/mysql/index.html","dce5c72529d12214aa1149e1a37a7747"],["source/tags/nest/index.html","615a8f6ac347d4e604c1f8982069622e"],["source/tags/nestjs/index.html","44751c2e5eada1af80d928a4581418ea"],["source/tags/nest学习笔记/index.html","c40847b2725f96c3758d7b3a28dad708"],["source/tags/next-js/index.html","3d983f448f88a004b91c3c71468062aa"],["source/tags/node/index.html","8c126726446f3d417e6f119779dc44b8"],["source/tags/nodejs/index.html","adf00e2f2d6bb506fac60b5413aa6bea"],["source/tags/puppeteer/index.html","b6933a8179589bdf30f0494a39b439a3"],["source/tags/ramda-js-函数式/index.html","50e3d0fc65dfc32f78149c1367b6ecb7"],["source/tags/react/index.html","07362b953db54d8126a4342c3115e6c4"],["source/tags/sequelize/index.html","4746e708ea21efafe22def27e18155fd"],["source/tags/serverless/index.html","df1fcbb9228bd377dc2c134dac0b1509"],["source/tags/typeORM/index.html","f501470c7ef16e2994270c9395cd2619"],["source/tags/typescript/index.html","31b2553d379cb6b51694cb5c7742c7f7"],["source/tags/web/index.html","e2c8cf5c53738193384959294402735f"],["source/tags/work/index.html","66ba2103c00278447908fef6ebed8ea7"],["source/tags/wxProgram/index.html","3e9a0176c6976cc5dccfb31284eca259"],["source/tags/学习笔记/index.html","4712b06cd1cafabe91c6821d5085a7c2"],["source/tags/效果/index.html","49b3bf020bedbf5fd51a56f0a741b8b9"],["sw.js","f73d7038ff2efa87eaa91b1c9ed059de"],["tags/JS/index.html","a496edf891398546cfbb92af6e2af540"],["tags/ReactNative/index.html","bc63ea8dd09b9a25a8c67ff3e4b694ee"],["tags/Rust/index.html","77a63d20371b755fd43be0b1fe0da6f3"],["tags/angular/index.html","1107e8478bec8018aadcd9bae0c201fc"],["tags/css/index.html","6076864768c681a5caa1440d3f441d81"],["tags/dart/index.html","d0987021860ffee5fcbf3cb8d41f7664"],["tags/express/index.html","2702d0cbbd061fa367adcaa784ee2996"],["tags/flutter/index.html","20a37202e892657e031d16cd52ad51fa"],["tags/fp/index.html","7b95a9e3384508957ef3bc8cca05f4be"],["tags/graphQL/index.html","27d169bf8a49ceddf9f2283ab1d574fe"],["tags/https/index.html","b1c09e356c4a34c1be0d4615414c3e4f"],["tags/index.html","7055c442ba454dc06bac8ab9df86d333"],["tags/javascript/index.html","9b1d95cf0649e6d5e9e33c6fef9b8695"],["tags/mongodb/index.html","94955b974d2eea6c674639e50acc73e1"],["tags/mysql/index.html","a8eed85eec6a33ee5a9466dd3eb064ea"],["tags/nest/index.html","b6bffb53930503ae3223212d2d0f7d49"],["tags/nestjs/index.html","bb5adcdfe919f9e93fb9e99db9565bfd"],["tags/next-js/index.html","a5d69c12f49ba7ff25f0596b6e7c105d"],["tags/node/index.html","77c38a31105dc20189afd072fac71fb0"],["tags/nodejs/index.html","f9224555bb55805e6cfe3bf0396a3ee1"],["tags/puppeteer/index.html","1a68244058d09c78897ced09f604bc1f"],["tags/ramda-js-函数式/index.html","64e21cb8c870a890b21964ca6c1d6981"],["tags/react/index.html","d79099d5bb7e093677ca002d502d8f0e"],["tags/sequelize/index.html","09ca9749764b382aab608f049545d57f"],["tags/serverless/index.html","9cd27b23fe85f759e6e6153dd61a8781"],["tags/typeORM/index.html","32127efd27c453d957fe1f16ccc20f00"],["tags/typescript/index.html","494d7cae947f3b830c36e531a96d7eb6"],["tags/web/index.html","806cd43e14a01adb06553ea7da1c3c4c"],["tags/work/index.html","eee45e8d6c1f8ff2d56b65da19ede7e5"],["tags/wxProgram/index.html","989e31a49a498a43bcf9d810266357e6"],["tags/效果/index.html","aa728e0b2962acbd4e0e73e9d700784a"]];
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







