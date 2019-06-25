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

var precacheConfig = [["2018/10/13/hello-world/index.html","c6acab2fdc7412ee189dcb8664aa935a"],["2018/10/13/文本换行/index.html","56f7851194173de4ce119d7f497cde20"],["2018/10/15/css实现轮播/index.html","f384a4dd5584eef45638fcd05cc3acf0"],["2018/10/15/puppeteer-API备忘/index.html","9a541c0a529f2c559f192e8237d9159b"],["2018/10/17/DOM操作/index.html","f1e33d3c26ea14bb1de0361314f14de2"],["2018/10/18/rust语法备忘/index.html","f226610954d77bc70af8f379b15f6165"],["2018/10/18/typeORM学习/index.html","b849476d67b87fd7b023ddb2e4e47565"],["2018/10/25/typescript知识点/index.html","8d5d31ede9a2b1a83fbe3e21f2b238c5"],["2018/10/25/小程序思考/index.html","376fbee548d2550ed8a0c84523e8ad52"],["2018/10/29/angular指令/index.html","37dfaade1630d8f5721bc7e699119198"],["2018/10/31/css动画/index.html","f3ae68fbaadeb0f1957b79e99affdd16"],["2018/10/31/css布局/index.html","c9af0815a3f73a4e04d70e5441de3dc0"],["2018/11/01/angular生命周期/index.html","3bea0667637e766507c396110fbf7c19"],["2018/11/01/angular组件交互/index.html","eca95ae6416a2a4007599b942ae2c157"],["2018/11/02/angular模板语法/index.html","b6ca1c7dfded7e72f7570ae53f85ca8b"],["2018/11/03/mysql命令行/index.html","f24be498492c6d5e2003a9150963e768"],["2018/11/04/css知识点/index.html","c7c5fcbb89c4198d9647be6a30d3bd79"],["2018/11/14/nest学习/index.html","068466ef856fb152946b1e60a75b4208"],["2018/11/18/js注意点/index.html","fe1e036006e77e5c2d9e26ee185293c1"],["2018/11/21/工作bug总结/index.html","a4d8e8ab57f16c91d2cb579872ea5915"],["2018/11/22/mongodb学习/index.html","ca97608107b432fa95135dfa3f094425"],["2018/11/26/react坑/index.html","4488c0524b2ad7ab3ecfe2866fa8a40c"],["2018/11/27/typescript实践/index.html","daab05041e2e0ae2c12c3b266830553d"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","acc6de819196a6eed129b318c4800fa0"],["2018/12/01/vue学习/index.html","6b0445c22351fd087e0c490fd7c27142"],["2018/12/07/nodejs the right way 一/index.html","417eec4641d6e5a9c00137451d7349e0"],["2018/12/07/react生态基本使用笔记/index.html","ee4343a0c39eb8702cd946f5428ff3aa"],["2018/12/11/rn基础一/index.html","81f60dc1403bc57b266ae6b35c3ab33f"],["2018/12/11/函数式一/index.html","dcd3246ac3368dea9e7ea3ec56f68968"],["2018/12/12/nodejs之process/index.html","dd41638910c939d0b2e807c61803db94"],["2018/12/12/node事件循环/index.html","77f302968506afb4de4312d7f0e14329"],["2018/12/13/elasticsearch/index.html","cba770d994d474afa822c835bfb6b70b"],["2018/12/13/express/index.html","aead6772dc71bb6d407c206055a8e9f4"],["2018/12/18/小程序性能优化/index.html","2a450ca1e696cd133ca8b5ad30d80f74"],["2018/12/20/express2之database/index.html","3149da65ee3d1949e560c9cb114f2fd7"],["2018/12/26/flutter学习1/index.html","82a8a7e1c71860b3370ca2a81672cb7b"],["2018/12/27/flutter之包管理/index.html","7602d21c2f5ce21c8abbf72649415929"],["2018/12/28/express测试/index.html","08328b9993322710eceea2ebd2e2af11"],["2018/12/28/flutter之widget基础/index.html","07421d1d11189f4405966e83dcc93681"],["2018/12/29/Express值请求体中间件解析/index.html","d54263f1476f7a65186fc833478add37"],["2019/01/02/express开发小结/index.html","1f184e1a74c247c88a99b328de557724"],["2019/01/05/dart基础1/index.html","1c9b37561f0fefd84432283b39e0c4b9"],["2019/01/05/dart基础2/index.html","bae64579883e1c10142ddcfff5b0994b"],["2019/01/07/dart基础3/index.html","931b66e05d4e3b12fa8c02fc1ff349b6"],["2019/01/07/express学习/index.html","407b99543c4033152f6fadca84ed5f7e"],["2019/01/09/Flutter之文本/index.html","f8bb210e452a20af88db7bb5af25fecf"],["2019/01/11/Flutter之按钮/index.html","7d3239cf50b8f1db9c20a9b2f447bd5a"],["2019/01/11/flutter之图片和icon/index.html","9d7936a3d364789691e37180893d7cab"],["2019/01/14/next-js学习/index.html","ded479d1a8799fa47c8d272843e66f1a"],["2019/01/15/flutter之弹性布局Flex/index.html","e91331283f46ea5e7f0d4b1c9cc408ec"],["2019/01/15/flutter线性布局/index.html","05a710d455a0a88e6f19c8698e2f5375"],["2019/01/15/rust2/index.html","3193b3610fddf1f52fc48fc9e4918381"],["2019/01/20/express-ts上手记1/index.html","f5dfe3714ca4970a3da4ffdce325b5d3"],["2019/01/21/react遇上typescript/index.html","6fb99389ed06be5154c56e0e8455a7d1"],["2019/01/26/新点总结/index.html","6e0492e81e73693d55375b128f200cc2"],["2019/02/11/angular架构概览/index.html","89884392a9e0a411c895fa03cf48d6f5"],["2019/03/28/promise相关/index.html","b381686d0862590484b37fe8310971ea"],["2019/03/28/实现一个sleep方法/index.html","c21bb8a58b9bf6dd9e6e028139e93537"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","5beb32a0bd58bf8987ba95ade15fcddb"],["2019/04/02/证书可信任/index.html","80299bcaa2325d99333dbdfc3eac106b"],["2019/04/09/从一道题目谈谈跨域/index.html","1ab622be79f2a69df30fb0e7b1f123a2"],["2019/04/18/关于滚动吸顶/index.html","66e5af6316fa73cc61d7a73f375c34a3"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","8a4b4e21b9d6e705b1e05dd496b88466"],["2019/04/23/深入理解padding/index.html","4dfd91216b65d538addf61584c2d3d20"],["2019/04/24/css题目/index.html","ce8a7946c3fbbb9fc1bc8ba23762f00e"],["2019/04/24/js题目/index.html","3fa3504fb2c0d00d149c316b431df0a8"],["2019/04/25/好吧-EventLoop/index.html","a59c15c3c41730f350d4ea2bf0924017"],["2019/04/26/轮播图实现/index.html","5e654213ba1a2027bdda2449501674b8"],["2019/04/27/深入理解margin/index.html","0c0a2ff0e6be713c9c66eb7b84ab3ca4"],["2019/05/07/FirstPaint/index.html","24d273e77434994a147a73ffed2e9c14"],["2019/05/14/图片懒加载/index.html","d72ef554d818cfa394382f007e253a12"],["2019/05/16/typescript学习二/index.html","60433602ff3d84696d0338e87cfb48c4"],["2019/05/16/利用原生JS实现简易的v-model/index.html","c2c2f7b46a71e02aaecc04c4de2f779f"],["2019/05/16/利用原生JS实现简易的vue/index.html","a7ba140d5a570b985ec56d66e6b5fc5e"],["2019/05/16/利用原生js实现数据代理/index.html","faec78b4bb947d2b14b163a889e5e360"],["2019/05/22/typescript搭配react使用笔记1/index.html","c184c6c22ae4c86ed9c3b781e36ae042"],["2019/05/23/typescript-react学习笔记2/index.html","148fd4f1bbd817b9a3410301998c1dd1"],["2019/05/26/typescript-react学习笔记3/index.html","c506548185629b78561b28a13479e946"],["2019/05/27/types/index.html","daefeb45f762b2ec5a59a041a3576119"],["2019/05/29/learning-graphQL-笔记1/index.html","e71ddc49a6e5648ba5ac35a84c46079f"],["2019/06/04/ramda笔记/index.html","666aff1b9ac01cfe0fe5ade1347b19d2"],["2019/06/05/Sequelize学习/index.html","117eaedbd7d299cf0db2fa92698c2187"],["2019/06/17/serverless笔记1/index.html","4373291a2183e49c4465ed52f6761145"],["2019/06/21/函数式/index.html","5ade55577310234faf041fc38fd89a6d"],["archives/2018/10/index.html","e351d6dadbb527643341fd37fb6f7753"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","0a9569667584576585d657b697c822e0"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","0eccd894b54404ff5882ad6c0883cd62"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","ce9078c43009c1a9735a26b9d5eb0405"],["archives/2018/page/2/index.html","e985047a7855322306370c3ad70d177b"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","34533a5bdf803f743163caea0a5ed1d5"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","5ebfe32f306aeaa357715909b8fbfa5a"],["archives/2019/03/index.html","1cd7550abd8fccf93ae354298ab293c6"],["archives/2019/04/index.html","2eeb838f77b0f417467e6c6e9adacb40"],["archives/2019/05/index.html","33093d2a776f275dfdf3aa0d1e956d42"],["archives/2019/06/index.html","b3ffcb2bcf86c9ca86737cbff7b6cda1"],["archives/2019/index.html","21b69edd302f617c70eb5452b3c742ab"],["archives/2019/page/2/index.html","51d81a71b9f2f164b67a49f919d3ad5c"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","b47c7ff8b9fe45e4c702ff59cbfea66b"],["archives/page/2/index.html","1adb8350319976c1abaca0f59c8e0dff"],["archives/page/3/index.html","b543a0af334aa0ad2366315684b93b6c"],["archives/page/4/index.html","c18e36acc29af2dc7c6ca81a496c4795"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","524c0aaf5d977406c8654a8bdb808311"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","52caf88ad850c3420078f1295f981502"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","38110c87d9e161ca5148fbf33b848853"],["page/3/index.html","26870f7ec0ceb235677dbce56e005741"],["page/4/index.html","e78969d52bf7db04b7f42730fb1a8d82"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["source/tags/JS/index.html","52091d6567cbc83c1d9d7b973b5b55f7"],["source/tags/ReactNative/index.html","70d46a539efd4f859380c5267ed83e5d"],["source/tags/Rust/index.html","86879aba05596ae45c25d57b28acd2e7"],["source/tags/angular/index.html","44f16e18c555898ab753684358f2557c"],["source/tags/css/index.html","a54c945c1598edc10876c30a48eead68"],["source/tags/dart/index.html","ab0d1c0bbcb63017482cb474d546a90a"],["source/tags/express/index.html","445e7a7f246ce3efe7f7e37cbd3ba409"],["source/tags/flutter/index.html","8bf9f47ba5cf20414d7e9b5b8579b70f"],["source/tags/fp/index.html","9e5e98289c72a82e4bbb0389233cc71a"],["source/tags/graphQL/index.html","1c34c80a1f8219f2d6f30b2cffec5ea2"],["source/tags/https/index.html","c97b19fc3b19265a0f07ab6d1bed2ac7"],["source/tags/mongodb/index.html","36383be94fd2d558dd02738bad5b3304"],["source/tags/mysql/index.html","396f3d1ed58ba53839ff319cd74fa959"],["source/tags/nest/index.html","6bd3c9fa20dd476f899b18a79e3a4172"],["source/tags/nestjs/index.html","2633f6bf7d4fecc50bfaa1d72e2bee8e"],["source/tags/next-js/index.html","d216f0fa6c84907324cff1bdb9cd4fc1"],["source/tags/node/index.html","b6df747ce4ecc72a5ae8113aa91b7965"],["source/tags/nodejs/index.html","a2b0c59ddbc81cf2c789bea47b76e18b"],["source/tags/puppeteer/index.html","dde92983b13ee7dabdefa77d0c64cf03"],["source/tags/ramda-js-函数式/index.html","32353bae78c9f40ca39fa3dbb2bf00f1"],["source/tags/react/index.html","4d5614ac7cea91a895151e6b3fc1baca"],["source/tags/sequelize/index.html","d44bb26bc9abd50d23a63bdd54f66394"],["source/tags/serverless/index.html","bb0f508c620b3020eb3b4c072a81f56d"],["source/tags/typeORM/index.html","96f0ad26133faebcf8a09928f2cb20c0"],["source/tags/typescript/index.html","54097bf31a3ac57c6de540fdd3cccc85"],["source/tags/web/index.html","3f73c73667de6f091bf00f3cb3ba2582"],["source/tags/work/index.html","a1884d2d5c85d6caf7cc489f75bd9877"],["source/tags/wxProgram/index.html","ebcbeb8b2ffe1c3666f84d1351290f3c"],["source/tags/效果/index.html","9da377787557e25e6a9a2f43ee4a1cd7"],["sw.js","8ae2890fdb5ba05d665c68d7882db3f7"],["tags/JS/index.html","a496edf891398546cfbb92af6e2af540"],["tags/ReactNative/index.html","bc63ea8dd09b9a25a8c67ff3e4b694ee"],["tags/Rust/index.html","77a63d20371b755fd43be0b1fe0da6f3"],["tags/angular/index.html","1107e8478bec8018aadcd9bae0c201fc"],["tags/css/index.html","6076864768c681a5caa1440d3f441d81"],["tags/dart/index.html","d0987021860ffee5fcbf3cb8d41f7664"],["tags/express/index.html","2702d0cbbd061fa367adcaa784ee2996"],["tags/flutter/index.html","20a37202e892657e031d16cd52ad51fa"],["tags/fp/index.html","7b95a9e3384508957ef3bc8cca05f4be"],["tags/graphQL/index.html","27d169bf8a49ceddf9f2283ab1d574fe"],["tags/https/index.html","b1c09e356c4a34c1be0d4615414c3e4f"],["tags/index.html","c11302f805a3774d5e5b2656943d00bb"],["tags/javascript/index.html","9b1d95cf0649e6d5e9e33c6fef9b8695"],["tags/mongodb/index.html","94955b974d2eea6c674639e50acc73e1"],["tags/mysql/index.html","a8eed85eec6a33ee5a9466dd3eb064ea"],["tags/nest/index.html","b6bffb53930503ae3223212d2d0f7d49"],["tags/nestjs/index.html","bb5adcdfe919f9e93fb9e99db9565bfd"],["tags/next-js/index.html","a5d69c12f49ba7ff25f0596b6e7c105d"],["tags/node/index.html","77c38a31105dc20189afd072fac71fb0"],["tags/nodejs/index.html","f9224555bb55805e6cfe3bf0396a3ee1"],["tags/puppeteer/index.html","1a68244058d09c78897ced09f604bc1f"],["tags/ramda-js-函数式/index.html","64e21cb8c870a890b21964ca6c1d6981"],["tags/react/index.html","d79099d5bb7e093677ca002d502d8f0e"],["tags/sequelize/index.html","09ca9749764b382aab608f049545d57f"],["tags/serverless/index.html","9cd27b23fe85f759e6e6153dd61a8781"],["tags/typeORM/index.html","32127efd27c453d957fe1f16ccc20f00"],["tags/typescript/index.html","494d7cae947f3b830c36e531a96d7eb6"],["tags/web/index.html","806cd43e14a01adb06553ea7da1c3c4c"],["tags/work/index.html","eee45e8d6c1f8ff2d56b65da19ede7e5"],["tags/wxProgram/index.html","989e31a49a498a43bcf9d810266357e6"],["tags/效果/index.html","aa728e0b2962acbd4e0e73e9d700784a"]];
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







