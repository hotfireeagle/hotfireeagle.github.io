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

var precacheConfig = [["2018/10/13/hello-world/index.html","72ecc36c4b9589a21c53f349eb72bdc7"],["2018/10/13/文本换行/index.html","f50e6b0c65d9e8ae1216020ae8b20407"],["2018/10/15/css实现轮播/index.html","5a395a1b09868109a6541fb40009e547"],["2018/10/15/puppeteer-API备忘/index.html","186a16abdd229760c2a2b1100dff2f7e"],["2018/10/17/DOM操作/index.html","96f55e49a7b1231bc189a94a8c26c5d1"],["2018/10/18/rust语法备忘/index.html","908f9fb38927ed960d53223e929ddaa3"],["2018/10/18/typeORM学习/index.html","3c1fe289c30dd8763cee1ce6203e2346"],["2018/10/25/typescript知识点/index.html","26b9f2e9e38399e3a4aab1ea7f4f6373"],["2018/10/25/小程序思考/index.html","d3c6981a418a04d4edd2fd1f60f9e007"],["2018/10/29/angular指令/index.html","7cf6669ba9b8d41cbae7899e0ab4af0b"],["2018/10/31/css动画/index.html","e70cec2d9a79c659154b98364784346d"],["2018/10/31/css布局/index.html","a3960feda43932f831a575c5e15e5ae4"],["2018/11/01/angular生命周期/index.html","91bc9f6fc33f61933a9e8ddea55aee3b"],["2018/11/01/angular组件交互/index.html","2495c192d355b480bfbfb756ed38a597"],["2018/11/02/angular模板语法/index.html","28ec4646f3611f3fc4ea5bf505f5ffbb"],["2018/11/03/mysql命令行/index.html","bab7743452af2efbb31509c90afb933e"],["2018/11/04/css知识点/index.html","32cf34558b651c57f9a210c5ff737594"],["2018/11/14/nest学习/index.html","f19fd64ec7880536baa7386c032d4209"],["2018/11/18/js注意点/index.html","fe1e036006e77e5c2d9e26ee185293c1"],["2018/11/21/工作bug总结/index.html","7e34aa8e6f57a168c2d1e893225929c3"],["2018/11/22/mongodb学习/index.html","92a1d85609c532e5005f55fabe6bf0c9"],["2018/11/26/react坑/index.html","e10c7c5708fa869ae187fde2cac8f446"],["2018/11/27/typescript实践/index.html","93fbe88c62e5288df01431e961d4fd57"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","2110eeb37bc50ae9088b0716d9edd040"],["2018/12/01/vue学习/index.html","646c2b24cc94de741ed2eab09eca4fd7"],["2018/12/07/nodejs the right way 一/index.html","69a98fe8d540fde9d876cf05748529d8"],["2018/12/07/react生态基本使用笔记/index.html","912c9fe054e8482866820270bd336df0"],["2018/12/11/rn基础一/index.html","163ed98b9ade08ab780d5b35026ef74a"],["2018/12/11/函数式一/index.html","c2e55a7fa877b38a892abe0efa687a76"],["2018/12/12/nodejs之process/index.html","5c36b15ccaa2ad099d4259cafa33c4a8"],["2018/12/12/node事件循环/index.html","172a1fc9a2a9fbaaabfe5da5a675c697"],["2018/12/13/elasticsearch/index.html","61a480321650e96e85f26d4334726ede"],["2018/12/13/express/index.html","55c828b5a2c695b5c92dca35f01c10d9"],["2018/12/18/小程序性能优化/index.html","f5c3eca13b18b352457868ce1d3e959d"],["2018/12/20/express2之database/index.html","4e3e72cf1763d67295b55dc5999e64c3"],["2018/12/26/flutter学习1/index.html","ef8ba85763f57fde0fcf9a82e46bd055"],["2018/12/27/flutter之包管理/index.html","2ecec7416018c12df2f88d900c092192"],["2018/12/28/express测试/index.html","a73290c6dec781cb7fdfe13be9c7e99d"],["2018/12/28/flutter之widget基础/index.html","b809ad2a6fb0a321d1f6dd4498cfaf45"],["2018/12/29/Express值请求体中间件解析/index.html","c7b623639ad498e0978537d981474e15"],["2019/01/02/express开发小结/index.html","64764dffa65b0d925cd764adfad6a0d9"],["2019/01/05/dart基础1/index.html","13ff2b15b1dc436b69549b0b4f9996aa"],["2019/01/05/dart基础2/index.html","e46afdaa8eeab0055be5f041d5f2cedc"],["2019/01/07/dart基础3/index.html","74bbd52b1f51b322af60addbe50fb2a7"],["2019/01/07/express学习/index.html","8e991f659637ca2a0a2c13e446d08915"],["2019/01/09/Flutter之文本/index.html","4c6047d4103aa5d82694c4c0e2809721"],["2019/01/11/Flutter之按钮/index.html","a0566c1bf6d10fd25e247a92e2201afb"],["2019/01/11/flutter之图片和icon/index.html","42f2022663eb37792f62d7a345d5765f"],["2019/01/14/next-js学习/index.html","395d64cb6f24c266f1727b3eee2cf1f0"],["2019/01/15/flutter之弹性布局Flex/index.html","4e12a753e67382d5f1877e57c1036849"],["2019/01/15/flutter线性布局/index.html","1f0cd170a5337d8d6c93a54aa96a72b0"],["2019/01/15/rust2/index.html","426d4790851ff36f16a06b5959eec892"],["2019/01/20/express-ts上手记1/index.html","3d84d25eec890cfaa667dd2b27a4d778"],["2019/01/21/react遇上typescript/index.html","ca089a30859f001104b1db6cfce84c0f"],["2019/01/26/新点总结/index.html","17fb870b9fdeaa71ffca1c530a782050"],["2019/02/11/angular架构概览/index.html","72faef4ed0f051dadc6ef7ac5cf7e5b5"],["2019/03/28/promise相关/index.html","06f17156121e3eea987b872265869c90"],["2019/03/28/实现一个sleep方法/index.html","8e7a85cea20146dd6b88fe9bad5aa601"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","642ce6e9e80dddd08d48f461df5a3648"],["2019/04/02/证书可信任/index.html","dfc27daeb41ccedc15cefed32369c3aa"],["2019/04/09/从一道题目谈谈跨域/index.html","6ccb1456db7110496c10eecda43f8292"],["2019/04/18/关于滚动吸顶/index.html","e58c68eb2813d65fcdf92842dd56b1a3"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","82bc33c42f413ff9a5b0c770e7053bb6"],["2019/04/23/深入理解padding/index.html","ed400508a475e9278902a45fdb414944"],["2019/04/24/css题目/index.html","dedea5ad7b78960ab1204b17183d972c"],["2019/04/24/js题目/index.html","6b85e031d932726465b31c0b75ccb473"],["2019/04/25/好吧-EventLoop/index.html","b00b2953de23cac950e0a98e5d7f7634"],["2019/04/26/轮播图实现/index.html","405dbae6c90e1027e34d93af7261273a"],["2019/04/27/深入理解margin/index.html","620ba3b2dd0d6c434ee06ee1408d1dc2"],["2019/05/07/FirstPaint/index.html","41a9994b91e799476917e3ba6d471d5a"],["2019/05/14/图片懒加载/index.html","d787c0d889a87f493a2be8a571bef732"],["2019/05/16/typescript学习二/index.html","ed888326a6a36b76c0ea4b1e73401e66"],["2019/05/16/利用原生JS实现简易的v-model/index.html","0faace397cbffc84d39ba221c676a233"],["2019/05/16/利用原生JS实现简易的vue/index.html","a7ba140d5a570b985ec56d66e6b5fc5e"],["2019/05/16/利用原生js实现数据代理/index.html","faec78b4bb947d2b14b163a889e5e360"],["2019/05/22/typescript搭配react使用笔记1/index.html","9ab7bdadad92ec38261d7530176e0dcc"],["2019/05/23/typescript-react学习笔记2/index.html","dd6c4060150879c316ba0017a8d9dc01"],["2019/05/26/typescript-react学习笔记3/index.html","f3e3bd253fc2ce2fc139cb6f215777ad"],["2019/05/27/types/index.html","24d2997c118f934cb4197f1f41eaef17"],["2019/05/29/learning-graphQL-笔记1/index.html","15d1d540161ecf30baa8268e1ae8a1b5"],["archives/2018/10/index.html","81c6e8ed87fdce636532ad1b8dfcc4c1"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","5958fc5e143ea9db60a27cce578e2a08"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","ece51f7f2cafac9b2f1531df729fb074"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","47d3fc8c8cef5f28ba6087a953e023a9"],["archives/2018/page/2/index.html","ac5b9348a7318ac29d9fb3cc3cc77ebc"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","342efa6a75321c817a6df34c94460311"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","aa61ae0eeaee51acbab32b613cabc093"],["archives/2019/03/index.html","e76a57881834567a28a80c8c64591561"],["archives/2019/04/index.html","9a7d295c616746255aae268487424912"],["archives/2019/05/index.html","0467114d1f07c81efe1f3d818df9bf1a"],["archives/2019/index.html","30c9dfb0c40a4daec0d278905d65690d"],["archives/2019/page/2/index.html","9fb3aec922e96cdda46de3f72413bef5"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","9246b0312f05f195fbcb2e59a145b5b5"],["archives/page/2/index.html","0c822f6c0eafdcb949aaad32211ff638"],["archives/page/3/index.html","63cdcb19659a1e6557e0f3cb2214203b"],["archives/page/4/index.html","e9f52acf8b0b75751abba457d7661840"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","9d6ac03b8ff4d98d28a72ce5acd92c40"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","188f7bd439309f34d42ac1cef9955034"],["page/3/index.html","926f4fad704d142f569b7df0fbd79c9a"],["page/4/index.html","f1aab36be6b314671630884635225e4f"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["sw.js","4c8225bd204ad3b3b7e5d46e81adf527"],["tags/JS/index.html","87742ebefeccc6d13feea2d3ddbc2f23"],["tags/ReactNative/index.html","c60add56ce13ce59f0690154c52a9b41"],["tags/Rust/index.html","cbd7e78aef82d7b53d204b0044aab629"],["tags/angular/index.html","029b0b8dc6f9c5be4f72091647152b13"],["tags/css/index.html","80aed02bfb6ef7ae35e0b15502f0ed50"],["tags/dart/index.html","2e2ef3f408ecea680eebe5a7e9272638"],["tags/express/index.html","5f3cf68358808e97deae7abbf6826b4b"],["tags/flutter/index.html","aa29c9bf6b2a3a75301432821e903dac"],["tags/graphQL/index.html","da680d768621f3d59852ed13c6ae5ba7"],["tags/https/index.html","f6da225b22c6772a1661228e3f448bfd"],["tags/javascript/index.html","a5fcd98901d7991f0d57bf75b4744008"],["tags/mongodb/index.html","48342fe0c2f231f6471ec6d246d799b0"],["tags/mysql/index.html","16eb4d5e91c6c26498e6b365337dfc84"],["tags/nest/index.html","d3851a16c76f6d7c6c0e3b556b24626b"],["tags/nestjs/index.html","15644bed747bc407f03d7e60ede7b9b6"],["tags/next-js/index.html","18a36cdf4b3bc1a4dd69540d8d78ec63"],["tags/node/index.html","a2f54a870149c63ecae6a9d3a0740972"],["tags/nodejs/index.html","0ebc6735a4e32313ddefc4cb012bd3c7"],["tags/puppeteer/index.html","357c438b4d36f418285715af7f3cfc5a"],["tags/react/index.html","736b0aaed980a77193cf0428a6ae4d4a"],["tags/typeORM/index.html","f8685364119ae52f051dce52777b8d5e"],["tags/typescript/index.html","dd7ced039f3ce453f9723b2dc2d2f434"],["tags/web/index.html","b67c4ba12d501682626f3f0c2054b07e"],["tags/work/index.html","ee2170506b185d995b7a86ed04b06c36"],["tags/wxProgram/index.html","ec207cc592ab1c1abd3fe416cb18a4e2"],["tags/效果/index.html","3d98cdbfc1cdb7f7ac6af57697e93893"]];
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







