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

var precacheConfig = [["2018/10/13/hello-world/index.html","a876377381447ec558637859af6a57c9"],["2018/10/13/文本换行/index.html","27db3412fcdbf78bfb8e725fbce60db5"],["2018/10/15/css实现轮播/index.html","108ecdc708e05a0234b95a15056d350b"],["2018/10/15/puppeteer-API备忘/index.html","f29f74ee55ad1e1f459026485179bb31"],["2018/10/17/DOM操作/index.html","1853a0bb71aa7d674ec71955ff2cf19d"],["2018/10/18/rust语法备忘/index.html","b7208bd7a4a76ad45ffaa55ffa5d1fba"],["2018/10/18/typeORM学习/index.html","70b100853b7e5a183583cba6412ea025"],["2018/10/25/typescript知识点/index.html","059773edea52c142fe4f62a147332f64"],["2018/10/25/小程序思考/index.html","50c4c8344a707ca081453ea5dcb58788"],["2018/10/29/angular指令/index.html","88f0495113052cab7543e45c180b3f9d"],["2018/10/31/css动画/index.html","3689cfbfde28a2da603b80b40c60e50e"],["2018/10/31/css布局/index.html","5825d7d2132e6c1ee4c2cbf5ed71f623"],["2018/11/01/angular生命周期/index.html","3a60b20a6d52d3a4e188e3d7119cf233"],["2018/11/01/angular组件交互/index.html","9afe0620968c32b1e2d0283ed839b8fe"],["2018/11/02/angular模板语法/index.html","e69b6a4b44e63e60bfd76294705ae143"],["2018/11/03/mysql命令行/index.html","f09552eaa9f7e0ea50546993411861bc"],["2018/11/04/css知识点/index.html","8e0129d9f4cc2bb0bc9015e7473e644a"],["2018/11/14/nest学习/index.html","3319692c9884c15d547e8872facdb9b7"],["2018/11/18/js注意点/index.html","52e85562cfb4d082e20bfe7f855625df"],["2018/11/21/工作bug总结/index.html","9e7dc111039800a5cbfbf1278ac4ed69"],["2018/11/22/mongodb学习/index.html","b51f0fe2258e8cc85db0a41ef5acbba2"],["2018/11/26/react坑/index.html","fe154d1c78ffc797df47d7f68672516b"],["2018/11/27/typescript实践/index.html","e34018ed9eec0586438a30c6a866d573"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","e7cec21af4ad0f7235f901a5d6314073"],["2018/12/01/vue学习/index.html","2ad5c2abac856646ff629e101c9368c3"],["2018/12/07/nodejs the right way 一/index.html","42db207878f1ce19a5353c86601b6d06"],["2018/12/07/react生态基本使用笔记/index.html","53ab5556aef217e0034c912086f7846d"],["2018/12/11/rn基础一/index.html","d42397fbf3309e25470bc82d18c2c940"],["2018/12/11/函数式一/index.html","c6314fcdcdf8b7e58608e355c48834da"],["2018/12/12/nodejs之process/index.html","c9c953dc8d00ba54b9eab4acb394a930"],["2018/12/12/node事件循环/index.html","96d14ce9d374dbafeeb4e0f020867ca0"],["2018/12/13/elasticsearch/index.html","5d5500ef0b3da7ccac4b07e71692dc7a"],["2018/12/13/express/index.html","a8cf4f876a5e7780ff9d5b7c01f4224d"],["2018/12/18/小程序性能优化/index.html","3c1c058423bc6eb67f7e2ef946672057"],["2018/12/20/express2之database/index.html","724ba003bd640526db35078f1938cfc2"],["2018/12/26/flutter学习1/index.html","1bb9f7582fc97039f37eff562b54f8ec"],["2018/12/27/flutter之包管理/index.html","e2fef048a46c27eb0a6ddb6a39c1c798"],["2018/12/28/express测试/index.html","09ae542c106f131348cf1960ca09836d"],["2018/12/28/flutter之widget基础/index.html","efc088dca3b8f3096fee5e5ee603b4cf"],["2018/12/29/Express值请求体中间件解析/index.html","5b39f7731db98aad689e8afc0ce00a1c"],["2019/01/02/express开发小结/index.html","d238a3ec9b99241c388056262314e33a"],["2019/01/05/dart基础1/index.html","eee21ebf5c68bbe1ef4b603732b43342"],["2019/01/05/dart基础2/index.html","cff3d52ef0377fcc4b24ffa3545c65b5"],["2019/01/07/dart基础3/index.html","1b31da83c6bc731dca4333df89a02d56"],["2019/01/07/express学习/index.html","d5e5e658088ce7178c88d6d11a2af912"],["2019/01/09/Flutter之文本/index.html","426a3c9cde8535c350533cf682cec3cc"],["2019/01/11/Flutter之按钮/index.html","360f835e2fa8f4e439985223ce72a281"],["2019/01/11/flutter之图片和icon/index.html","af565479670f86662c7186d7d39e279e"],["2019/01/14/next-js学习/index.html","89128be97ff00d08c321c2983dd9e171"],["2019/01/15/flutter之弹性布局Flex/index.html","f9c74aa904b49d25be85f478a57e43d0"],["2019/01/15/flutter线性布局/index.html","6106d6d568a493d95ebef6747fd94378"],["2019/01/15/rust2/index.html","438d74fd78ef090e2ffcc831ca85ad8b"],["2019/01/20/express-ts上手记1/index.html","3faf4c4364dfb7f78f47610f2a95f2eb"],["2019/01/21/react遇上typescript/index.html","202f989538354c3c79242d7fdb31698a"],["2019/01/26/新点总结/index.html","9c7778fa027b7ecd836778a279de7f17"],["2019/02/11/angular架构概览/index.html","3c5481d5799647227c64a22708d409d6"],["2019/03/28/promise相关/index.html","3c0732906c18dfb0017896c860115148"],["2019/03/28/实现一个sleep方法/index.html","4681da4c44ff6d44e1f3e5adc6d6c0bf"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","a422854afe4c488fb446351ee8b56964"],["2019/04/02/证书可信任/index.html","30bfa4e6515aa51753a98f789f2f43b1"],["2019/04/09/从一道题目谈谈跨域/index.html","dc74579feaa297ce9e332a49e2a595b9"],["2019/04/18/关于滚动吸顶/index.html","f626b6b78cbd69c81d97ead954a8044e"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","7cc7cbbd3fe3649f25f781bd5d076773"],["2019/04/23/深入理解padding/index.html","b9cc48349ef39f017cc5e97fd00f59f9"],["2019/04/24/css题目/index.html","03d1efe1195c283bb0a972cc0645c7ec"],["2019/04/24/js题目/index.html","6e1178947ca1929bc043997e6ed50c02"],["2019/04/25/好吧-EventLoop/index.html","8d1db9d15a5193b849df36638a5eecf4"],["2019/04/26/轮播图实现/index.html","e286b6f86b924661ca1fd67b57a20864"],["2019/04/27/深入理解margin/index.html","839ced79e8b8467c067eb0eea72e8093"],["2019/05/07/FirstPaint/index.html","95bac3bbe8d0b5d5e4b0122871a28370"],["2019/05/14/图片懒加载/index.html","b6de046e34b7c0a9365b78a8eb27e9ed"],["2019/05/16/typescript学习二/index.html","8d6f4eea7481cdf1189342bf72dd24ff"],["2019/05/16/利用原生JS实现简易的v-model/index.html","d3ee2c340b9028dac08b5bd0e7b26282"],["2019/05/16/利用原生JS实现简易的vue/index.html","a7ba140d5a570b985ec56d66e6b5fc5e"],["2019/05/16/利用原生js实现数据代理/index.html","faec78b4bb947d2b14b163a889e5e360"],["2019/05/22/typescript搭配react使用笔记1/index.html","40cc538c312d5e2fc5b850b3f871b3d5"],["2019/05/23/typescript-react学习笔记2/index.html","089d72fef40ab6e0322ce8ddc9265eb4"],["archives/2018/10/index.html","f3127a88932af1cfef22bc924354bfa2"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","c24d2f4b7483c086b8f91f902189509a"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","3fffde7015c58af7af070f1174a5646f"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","6ac64ef7d892a99e76dbddf6ddfec676"],["archives/2018/page/2/index.html","e137f278a92ece31c63df4b82e0a09df"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","1bd33964e948a8d50db70a02e0e824dd"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","71ec4f27b6908ad0c262615523ffdba1"],["archives/2019/03/index.html","946fa95545bc0fe3350a8f7304d97e0e"],["archives/2019/04/index.html","5bf027e2a9b53f2835af0c6683e126c8"],["archives/2019/05/index.html","5282144a2e5fe9db1cf17f646caa892d"],["archives/2019/index.html","7ea0af0a861188a49b57e307c5384902"],["archives/2019/page/2/index.html","4cab30fd0f299d3aa4aa60e7fbd0546a"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","79018acb01ae1905feec1a0aff53d790"],["archives/page/2/index.html","40e3e18a3a2b35bbc4ec928cc53764a0"],["archives/page/3/index.html","830e77b8cdeae7776e1aa07107d11d07"],["archives/page/4/index.html","2a5cfb6edd66e1c6d4b5a05629a3b0f3"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","f0ae4924491f3169b7575814dcba1bd8"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","93f3a50167132ed2f5d2a4602f2b0044"],["page/3/index.html","c0862b7e8f1b0ff9539bfeb7d2146a0d"],["page/4/index.html","eba225f4731128f754951f8c46bf2c4c"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["sw.js","04be9668c7e3deb880f06b754cd72fb0"],["tags/JS/index.html","c6dab615a929b89a03a627e001e20eab"],["tags/ReactNative/index.html","6dc3d7c314eb68715689bfa33796d740"],["tags/Rust/index.html","0ecbfe7fcbfcd8713feab707648b0b70"],["tags/angular/index.html","1677c57838ce0d6362eac5d4275c902f"],["tags/css/index.html","ba8fd2d9bc65e45d8f6e517ede60a5b9"],["tags/dart/index.html","9e9fe32b167990c12224bb01ceacac3c"],["tags/express/index.html","0834b60c3a84ac122f6e6d4ccc5ed673"],["tags/flutter/index.html","19a238119d21d9bece332737b6f8dc98"],["tags/https/index.html","63333f4b45db97761f231c741e1e2022"],["tags/javascript/index.html","30880be64d01972419b70cf30322ceb3"],["tags/mongodb/index.html","50fe727f7a279ddfdc602615ae6243ec"],["tags/mysql/index.html","c44201283b295e9733738ce3be1c1264"],["tags/nest/index.html","b8c598e46b8a3a13a5cca4a742ada3c0"],["tags/nestjs/index.html","90172c297f4e471f3a7ceef75e69b182"],["tags/next-js/index.html","bf71dd852556db7e788fa54b74898599"],["tags/node/index.html","bfabf38851de91684cfb15b3ea3331de"],["tags/nodejs/index.html","ff3348f9b40569cbb31b2a04fe71bfcd"],["tags/puppeteer/index.html","01e6347dcbed43b08d0beda9688c4fad"],["tags/react/index.html","56560f2525b02ba50f595c91f42e8d3e"],["tags/typeORM/index.html","0086116ffde642a3939bb1faf157f0e5"],["tags/typescript/index.html","a4389244675e2528f4fc0f3dd032f1a0"],["tags/web/index.html","e2dfb94760c3b896a4e1c0bb7523bc49"],["tags/work/index.html","b66be4ddf249375d65582351bac885ab"],["tags/wxProgram/index.html","646416d0aa4e649455ef9b0a18426ef9"],["tags/效果/index.html","dc1efd3c3571d0bad541dd70aa2252f0"]];
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







