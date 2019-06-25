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

var precacheConfig = [["2018/10/13/hello-world/index.html","f5c23ee92e4ee9c904eee822ff1116cc"],["2018/10/13/文本换行/index.html","f2c9dc6b16027bc049eb5b5048236e2d"],["2018/10/15/css实现轮播/index.html","1862fd8443d5500f0f0abf378b5758ec"],["2018/10/15/puppeteer-API备忘/index.html","48c86b8854ae55c550952b7976bd3303"],["2018/10/17/DOM操作/index.html","6eb299d8a3d5f7c6da5065ab06fdc430"],["2018/10/18/rust语法备忘/index.html","9f919b9f70682d8b9a020a2952f39f35"],["2018/10/18/typeORM学习/index.html","56c898acc6dd1ed109c301080304cbc7"],["2018/10/25/typescript知识点/index.html","9aeba3966fec8ee4a3d820eff0343478"],["2018/10/25/小程序思考/index.html","fe13858224d7283370799b08e971ed7d"],["2018/10/29/angular指令/index.html","0bab7dc0cde5ec0955f8bbd63121280b"],["2018/10/31/css动画/index.html","703335a6e468477ceab6c22672dc9dc6"],["2018/10/31/css布局/index.html","2529ca775d248b0e55d7ee55696bda72"],["2018/11/01/angular生命周期/index.html","8f31185ec198c9985fd1e5bd52553e6a"],["2018/11/01/angular组件交互/index.html","b614bc51e5a808c749eea35ccec2cd40"],["2018/11/02/angular模板语法/index.html","bf40b190b2c8f8c26867ecc27b9d97f6"],["2018/11/03/mysql命令行/index.html","85cefd5dcc49609dd6594352ff0d3db2"],["2018/11/04/css知识点/index.html","909357374f07ba2d2c4e0a720b0dd6bf"],["2018/11/14/nest学习/index.html","67ff1f0545d383adf2e2a0df8dcb3bc1"],["2018/11/18/js注意点/index.html","fe1e036006e77e5c2d9e26ee185293c1"],["2018/11/21/工作bug总结/index.html","8a91e5b321c5d8d678769fbe1d288a56"],["2018/11/22/mongodb学习/index.html","22730a15377a18b77e92ddd7d89202c8"],["2018/11/26/react坑/index.html","83e337a82e236d4acd4e730376e620f0"],["2018/11/27/typescript实践/index.html","a20abc5bcb453adae208330f9fef1ace"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","1bba71296f5eeace0f333dd44a620aaf"],["2018/12/01/vue学习/index.html","a853b0cffe93ed139ad0487a31f13c50"],["2018/12/07/nodejs the right way 一/index.html","c669d8b4627f3661dfbfa8eeb976fd80"],["2018/12/07/react生态基本使用笔记/index.html","85e53f4d79737fdf20fbd772c104e9e3"],["2018/12/11/rn基础一/index.html","28f21cce711c1b0f36e1713bd88dbd17"],["2018/12/11/函数式一/index.html","dcd3246ac3368dea9e7ea3ec56f68968"],["2018/12/12/nodejs之process/index.html","6108208994848c791fa5cdd222e9e686"],["2018/12/12/node事件循环/index.html","9d485f161a18777912b884be32ebf7f3"],["2018/12/13/elasticsearch/index.html","02236182c7ad20934858e2ee963cdaa3"],["2018/12/13/express/index.html","8f7c4eea200d424a1cbd842c14817489"],["2018/12/18/小程序性能优化/index.html","28c380cb72fee7024f696c374433608f"],["2018/12/20/express2之database/index.html","f5e33d438fe912ed9296a78a611d336a"],["2018/12/26/flutter学习1/index.html","59c3b6d6592cfb743b4123e3040eb3c5"],["2018/12/27/flutter之包管理/index.html","739d005c3497cf7295084c0ae180121d"],["2018/12/28/express测试/index.html","8e8f2d9bd74d2cf81ebbccd0d084e37a"],["2018/12/28/flutter之widget基础/index.html","d5c75bf595ac78cffe2534c9ecddd99b"],["2018/12/29/Express值请求体中间件解析/index.html","5986b85ea54346931911525e61add154"],["2019/01/02/express开发小结/index.html","2ad3d4dc982f560fc8591568e3fd91cd"],["2019/01/05/dart基础1/index.html","c838cb9dc9f0beb8e3885640769a0f1d"],["2019/01/05/dart基础2/index.html","2b328089279b26e0735adba3dcddb4a6"],["2019/01/07/dart基础3/index.html","ae98f81edb2ec1b7a290ba287d7f1517"],["2019/01/07/express学习/index.html","4112f80485bf236bc62560a55a735f58"],["2019/01/09/Flutter之文本/index.html","143ca56c91c4151155f13f17bcc976be"],["2019/01/11/Flutter之按钮/index.html","04a219606830099d5a607bd55eb40415"],["2019/01/11/flutter之图片和icon/index.html","796b314283aa053418d294d2268b8e68"],["2019/01/14/next-js学习/index.html","8c5331a6c6e289c32144df766991f514"],["2019/01/15/flutter之弹性布局Flex/index.html","eeb54e2ae77a2e404599508035e83785"],["2019/01/15/flutter线性布局/index.html","20621254fc944014f1c748cb8729f3b6"],["2019/01/15/rust2/index.html","331baf2d31a57afcfe56048beed257d8"],["2019/01/20/express-ts上手记1/index.html","9c4cc8c2aebe869b525ac92b7511c11e"],["2019/01/21/react遇上typescript/index.html","4071cde644a51d50ae8770ed24231330"],["2019/01/26/新点总结/index.html","3735fe3a9b5df4e87c4aabf270a42c01"],["2019/02/11/angular架构概览/index.html","3b7cecdb1b507310efb4bc86eb608dd8"],["2019/03/28/promise相关/index.html","1e839bab32b2c1595d503b6f2e168e28"],["2019/03/28/实现一个sleep方法/index.html","a277c68b9e7bbf43523f76fbab3de841"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","7bf5bfead3070bc3be1bd6d73d64f147"],["2019/04/02/证书可信任/index.html","48661cb8f867cbc5134fb8c34973cf8a"],["2019/04/09/从一道题目谈谈跨域/index.html","6e08ec159661e4587609418f76381103"],["2019/04/18/关于滚动吸顶/index.html","f7409a954aacfa3ded6a963dda64124e"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","2f0ed4612fe3a52e1819ac8b1ac1b413"],["2019/04/23/深入理解padding/index.html","d4d04573bbad6b0b051203d7ce3a9f83"],["2019/04/24/css题目/index.html","178dbd7c4738b96e3072921a906b87cd"],["2019/04/24/js题目/index.html","7dd4bb2e11caf996e0b935e451e2e6ab"],["2019/04/25/好吧-EventLoop/index.html","c49ffb129236985402e58070eb441570"],["2019/04/26/轮播图实现/index.html","1b9f7389c0733a0c59d5e31bba8f13fb"],["2019/04/27/深入理解margin/index.html","064282e473d8b9da313ea653c52ac197"],["2019/05/07/FirstPaint/index.html","1e6a03d59561f75b044206a604b1710a"],["2019/05/14/图片懒加载/index.html","9eb798a29cfb0649de3a3310a0ecb3c1"],["2019/05/16/typescript学习二/index.html","aa9a00f4349b5b7da0f81d6b28885cf9"],["2019/05/16/利用原生JS实现简易的v-model/index.html","a72cb6eca567d190e9362d1b2bdd1b84"],["2019/05/16/利用原生JS实现简易的vue/index.html","a7ba140d5a570b985ec56d66e6b5fc5e"],["2019/05/16/利用原生js实现数据代理/index.html","faec78b4bb947d2b14b163a889e5e360"],["2019/05/22/typescript搭配react使用笔记1/index.html","15397c062e9bffce23f481c8edd6d51a"],["2019/05/23/typescript-react学习笔记2/index.html","86130f63355819d018fa31ba655c40f9"],["2019/05/26/typescript-react学习笔记3/index.html","df7c2fd5367398f8f5fc77cf04469f09"],["2019/05/27/types/index.html","f88af869e95deeb520ae423d75d68ba1"],["2019/05/29/learning-graphQL-笔记1/index.html","04ce677fe6d9f75fd233ace4c65c1691"],["2019/06/04/ramda笔记/index.html","6b9253eff6609b172320f9a44e494ce5"],["2019/06/05/Sequelize学习/index.html","128a6f20cc1197341e9e41bb9e67fb24"],["2019/06/17/serverless笔记1/index.html","5d2df524a71a5d8aac74deeed246b7f2"],["2019/06/21/函数式/index.html","6ff58780bab47442a05bd161e87ab2d8"],["archives/2018/10/index.html","eafb81e7493eda6c6730b9765d23ab56"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","0c8aa062ba506e7bdabd39dcb8fa7827"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","10841384ae5cf87225db51496a1e8a93"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","a4b4f48e23063b6f9e62738dc20fed47"],["archives/2018/page/2/index.html","8f83f584beb6cb8c36aac411494db441"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","7f228c538b3b36dc5a6cd8fde5d91b48"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","ca94df2c97859cd9058c54a2e465368e"],["archives/2019/03/index.html","9d80cdbc299e2df10104d60401ddeea7"],["archives/2019/04/index.html","f74b3c21010c38b35948e577d38755de"],["archives/2019/05/index.html","5775e8f99196cc33edd4bcf2ade460d9"],["archives/2019/06/index.html","ce180951fa4da0fecd7a97cdce0c483c"],["archives/2019/index.html","61d395b9b80eb0fcc80825558c80b9c5"],["archives/2019/page/2/index.html","102cae58535bc85755a6da42b460e094"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","0bc5e7da635e5647b894ebb2c059a21c"],["archives/page/2/index.html","571d76e00fdc0cfb80da48ae59437e2d"],["archives/page/3/index.html","b23bfed27ed3f5b0f2f4df174c5a9c60"],["archives/page/4/index.html","c4b7debc1780caa3b46445ac31309fc5"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","4bf76fc49da4af5f5e30e029d99f51f2"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","fce757beab3e7f6e96980104c861967a"],["page/3/index.html","a1759b4d0b6793f2a9b2758a8e94020f"],["page/4/index.html","e3d81f8d728927615ddd9324e6eff717"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["sw.js","e2466e11e4c2035e19c7f8f03017ec1f"],["tags/JS/index.html","5ac7f2b94891ba91371b4d53fa232c56"],["tags/ReactNative/index.html","9769d0b5fae24ddd75a681a1ad0e3648"],["tags/Rust/index.html","bb63b3c57ee9a8bf7e2cbdbbe447d115"],["tags/angular/index.html","990a29b08340461a1c3f16ca0aeeda9f"],["tags/css/index.html","bc0f8b66218e75c387dd8083d5323ff8"],["tags/dart/index.html","e6b8047f9a02ff4e1161ad00169a54e7"],["tags/express/index.html","fb87c42a62a45eda9d7bfd7f151d2481"],["tags/flutter/index.html","8dabaa180d8c3e2ec2e5bb2a906e8f08"],["tags/fp/index.html","60d408ff55a5d1d0cade82e5ba9f6b2a"],["tags/graphQL/index.html","82605db0ee1f0ecb49aea6819b0ec4a9"],["tags/https/index.html","41601e89e870150071549d6a2d46832f"],["tags/javascript/index.html","9b1d95cf0649e6d5e9e33c6fef9b8695"],["tags/mongodb/index.html","a00d88c7fbc4241cbbc4daad9f19564e"],["tags/mysql/index.html","07b44378c7e881aa8331444afe00f45e"],["tags/nest/index.html","36555a02005fcf4f70511ff3a5e9b9bf"],["tags/nestjs/index.html","078b0006d329162170e9016f69df0c1c"],["tags/next-js/index.html","39ddb8d877560fe8aca84e330432f7ac"],["tags/node/index.html","db4d2d5648fb16c0d65b41037710c8d3"],["tags/nodejs/index.html","8278e9426d99b2c4129887cdfd9442ba"],["tags/puppeteer/index.html","ecffd4dbe5677551fbbced73b1af654c"],["tags/ramda-js-函数式/index.html","72ee32c82ff0865635f45778b0609055"],["tags/react/index.html","12a426be5791473ed0089fd3caec0f98"],["tags/sequelize/index.html","b9ce0c022d09a683f6ac523ec0e4644f"],["tags/serverless/index.html","2375f93cb380b20187433bd30bda6454"],["tags/typeORM/index.html","ed60b24101b5964a0b3af558ef2c4c7d"],["tags/typescript/index.html","dd5f44e378811a0d5bc28e8fb75628e1"],["tags/web/index.html","b9c603ee8f87ade34697dad29545348a"],["tags/work/index.html","9e66222334083506e84f80dba59acad7"],["tags/wxProgram/index.html","e83c5fc8176c51dd0629ed9a2f36fbc4"],["tags/效果/index.html","f482d0c3c70b7b3a5c7daf077cf56117"]];
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







