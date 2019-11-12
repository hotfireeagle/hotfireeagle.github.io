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

var precacheConfig = [["2018/10/13/hello-world/index.html","0a995328a91c6d220ad006281b15882b"],["2018/10/13/文本换行/index.html","077606029cac1d1dccc8e12df75a4708"],["2018/10/15/css实现轮播/index.html","50d32a40078bec9a8f20b2a453ecf0bf"],["2018/10/15/puppeteer-API备忘/index.html","c5f9eb143c203cbfac78165e33bd3c92"],["2018/10/17/DOM操作/index.html","bf2e0655f41d9fe2dd4f122d19ba7107"],["2018/10/18/rust语法备忘/index.html","48ad3fc0de1b94dc5e829ac9e4b22e60"],["2018/10/18/typeORM学习/index.html","e90e39fb7a87248e4c8c50b227f18203"],["2018/10/25/typescript知识点/index.html","cd69932fa8f4790d70d99e237ca99fcb"],["2018/10/25/小程序思考/index.html","d18982f6aa23f3270f7212b5860dfb4c"],["2018/10/29/angular指令/index.html","04ce8ffef1a1bf40b29c509c78f56a1f"],["2018/10/31/css动画/index.html","f6951ddc040980758aab7bff05d09619"],["2018/10/31/css布局/index.html","25705c6dbf4e60c8c843c021adaffa3e"],["2018/11/01/angular生命周期/index.html","5c713b62a00c40866f9fa7fc16a828d6"],["2018/11/01/angular组件交互/index.html","961905c6650be13055363f4b05b5213d"],["2018/11/02/angular模板语法/index.html","7e988e46bf3376a5a4cab3edaa52c13a"],["2018/11/03/mysql命令行/index.html","8683d037d7dff3b135570ea14b554ed6"],["2018/11/04/css知识点/index.html","19a8f2fe5e95408bf2cfea505bf64e57"],["2018/11/14/nest学习/index.html","fd8c171a2afb2e8925d404aaa279c25e"],["2018/11/18/js注意点/index.html","fe1e036006e77e5c2d9e26ee185293c1"],["2018/11/21/工作bug总结/index.html","aafb1b807b8529bb252b9a06d9c237d0"],["2018/11/21/工作笔记/index.html","e17bf09cb6ac60859e57733ed5a0c052"],["2018/11/22/mongodb学习/index.html","b14834cf8bbb240674b92603a11dac1f"],["2018/11/26/react坑/index.html","6205f8edc6e27498ccf776da45796c64"],["2018/11/27/typescript实践/index.html","3d4c2e9e597dc6eaf4fe82fa016a8660"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","48768553798a883c97cdc0db481f0c49"],["2018/12/01/vue学习/index.html","d34a142271f759f0ccacec4d97078348"],["2018/12/07/nodejs the right way 一/index.html","74e22d122987abd090cbea00f94d0df0"],["2018/12/07/react生态基本使用笔记/index.html","f8f7d4d2ed7b30b0d86f6bbcca11b1ab"],["2018/12/11/rn基础一/index.html","e41673e72c1c2e62737eb0025263ae2e"],["2018/12/11/函数式一/index.html","dcd3246ac3368dea9e7ea3ec56f68968"],["2018/12/12/nodejs之process/index.html","13f55d5f69ef3f9789096d3a56c06446"],["2018/12/12/node事件循环/index.html","afe7304ce78d06f91e5791be060b385c"],["2018/12/13/elasticsearch/index.html","9444c805bf43a9f059854cde6d180942"],["2018/12/13/express/index.html","6a353a7b93e943e1c2f20faf77e7cf04"],["2018/12/18/小程序性能优化/index.html","6a01ce490c0c5c559715c701c4125cda"],["2018/12/20/express2之database/index.html","41d6386d378f6f6837ed719012fb1dc0"],["2018/12/26/flutter学习1/index.html","a5ad7dd9efca3a0b4783844004a9ebf1"],["2018/12/27/flutter之包管理/index.html","ec94829c06888ee7a1550a054e29a146"],["2018/12/28/express测试/index.html","bde4ac3c307581d409831f6c5fa12921"],["2018/12/28/flutter之widget基础/index.html","55eedf4f53f539e5981375fbd79d8b5c"],["2018/12/29/Express值请求体中间件解析/index.html","d0e8a51d832e92ea16ce12e72b8dc257"],["2019/01/02/express开发小结/index.html","a9b188f64b66ae742516216248f1347e"],["2019/01/05/dart基础1/index.html","457abeeb1da3fbe3d7bba6c478d35b41"],["2019/01/05/dart基础2/index.html","7f05202e567f975d403cf875fd4fce90"],["2019/01/07/dart基础3/index.html","b9b33a007a4b72a52d2f305f293e5ec0"],["2019/01/07/express学习/index.html","9bc7c91bd08291438e7ca8df74976828"],["2019/01/09/Flutter之文本/index.html","27225e23d1c0d09d50fb49ee2e600306"],["2019/01/11/Flutter之按钮/index.html","50937f0116f1f71b1e93b2d597fd567e"],["2019/01/11/flutter之图片和icon/index.html","cc22204282ab4eed6e4ab92e6d67ac7e"],["2019/01/14/next-js学习/index.html","2985895bfcbad23877c99271a4500122"],["2019/01/15/flutter之弹性布局Flex/index.html","2b554b76744428b3a57785c8a9c3eddb"],["2019/01/15/flutter线性布局/index.html","28e8f4387d76214605d326697fd2cdd0"],["2019/01/15/rust2/index.html","ae7f0c0d38ca25be59d138dbb7fd6a3d"],["2019/01/20/express-ts上手记1/index.html","e5beee531ba89b628b5199f9709b60be"],["2019/01/21/react遇上typescript/index.html","21574687b236849d98a4718fe5f1dc8f"],["2019/01/26/新点总结/index.html","985574eb1d7db4e339e6dd6dc34c8c8f"],["2019/02/11/angular架构概览/index.html","15d49b45346d925a3d0b34a69cf6f4ed"],["2019/03/28/promise相关/index.html","358fe55e7c121cb9dcf9543f9fcad66d"],["2019/03/28/实现一个sleep方法/index.html","520b66a0e83feca92df0b4ddd7671b37"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","4634f0e108663999feb4d3fb6916050e"],["2019/04/02/证书可信任/index.html","d684ffcdbc8588ae83374e2233a151a5"],["2019/04/09/从一道题目谈谈跨域/index.html","54630233be721d41b90599222689feeb"],["2019/04/18/关于滚动吸顶/index.html","bc09902416709dd5331cd841fcb7df51"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","43a10036e0a1e6ea2bfaae47b42415e5"],["2019/04/23/深入理解padding/index.html","b405bf7e7f7062a195ad8dcfc5e33495"],["2019/04/24/css题目/index.html","b90b127e9b67f878a8b8c8a82bc8215b"],["2019/04/24/js题目/index.html","f57001a48fe5b224ac037de3c377d868"],["2019/04/25/好吧-EventLoop/index.html","8a42d80dc3ee909e4270d192ffb66375"],["2019/04/26/轮播图实现/index.html","c7a8fc77985a5e2818283376a3f81de0"],["2019/04/27/深入理解margin/index.html","a97f6ec0af402f2e77b95af011959b62"],["2019/05/07/FirstPaint/index.html","5536869338a6ac1cd5be5631274f5ff1"],["2019/05/14/图片懒加载/index.html","681ce7b69e5b9f01b06aa4522ed3774e"],["2019/05/16/typescript学习二/index.html","19369847ca14fafe5e5fd4ff4b828a4d"],["2019/05/16/利用原生JS实现简易的v-model/index.html","9aab7419cff3d69993ed9e93fd2734ff"],["2019/05/16/利用原生JS实现简易的vue/index.html","a7ba140d5a570b985ec56d66e6b5fc5e"],["2019/05/16/利用原生js实现数据代理/index.html","faec78b4bb947d2b14b163a889e5e360"],["2019/05/22/typescript搭配react使用笔记1/index.html","4193679ad516b27828a574f20038472a"],["2019/05/23/typescript-react学习笔记2/index.html","2b9d9dd60f0cbb738c775ff8d09089e9"],["2019/05/26/typescript-react学习笔记3/index.html","66d4020bcc27b65ea3219e680f8612d6"],["2019/05/27/types/index.html","9498844fe220b44e1355326617ecb81e"],["2019/05/29/learning-graphQL-笔记1/index.html","5e91fc10070777c529eae68a22e50901"],["2019/06/04/ramda笔记/index.html","9d8428eb8acf1db64901eef34a1cd0a7"],["2019/06/05/Sequelize学习/index.html","8ca32304ad11da0f0596af81af6b8c21"],["2019/06/17/serverless笔记1/index.html","cd5c038b73cb42bd7d7e7f6d4730af75"],["2019/06/21/函数式/index.html","682a2081efe77b2ba306e4f65ffb6dca"],["2019/08/04/定投/index.html","13bb003149ff04041cbcda9a9b2f23e6"],["2019/08/06/Rust类型系统/index.html","1df7a9fa0008bb0f3e051b50e8737809"],["2019/10/03/History1/index.html","5ec25de8014d984143f099f24206617e"],["2019/11/06/nestjs的模块/index.html","3ee2d4e9f84a70d81c5a528ccdd67c47"],["2019/11/06/nest管道/index.html","d74c97fb3854c8a72e411fb2b8277aee"],["2019/11/07/nestjs守卫/index.html","f1d05fe54e30d6999e68aea5ac78f93e"],["archives/2018/10/index.html","f12ab14cbcf7ca9e82f741e8e8371ab4"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","24b85eb71fd02293c31ef31a75cd0f82"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","9a7204373b9a9936e2d3b715ca7ca7ee"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","7cce642ebfcaa597ba46e6f64b7dfa1f"],["archives/2018/page/2/index.html","df185687047c19eb97cfade9ab60668d"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","4a693ffe6b4d1dea8bd75362c92f1cfd"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","a68194abcdcd58056e37deb9285b6398"],["archives/2019/03/index.html","1c23d70be7f9cdf2bab71ef7fb9dd150"],["archives/2019/04/index.html","670a4b2721d556fe704656ec14426f89"],["archives/2019/05/index.html","f0ad90be2209e98fee6a3bbf749989c1"],["archives/2019/06/index.html","3ec5ae609ff7b8a3cbff93d35c67a1dd"],["archives/2019/08/index.html","3ef34d32fc0f23c4846d7e5ec2352289"],["archives/2019/10/index.html","c8f38a9bbf4d72890c5df77b857b6fbf"],["archives/2019/11/index.html","def23ccd93b5aa8c563957fc153db036"],["archives/2019/index.html","95c136638ac41a6fe53228de87a1cc77"],["archives/2019/page/2/index.html","5826cdeb4cd8459e206ca2e5fc3b09c7"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","75b99aa1ee966d0c2ded97b78a5efff7"],["archives/page/2/index.html","8e25b3844aeb115f1e4f4838a9b43d94"],["archives/page/3/index.html","3ef5ec84472a049fd9338930f9f07dea"],["archives/page/4/index.html","51036cafc7221e4f7edb9f4c35be5749"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","c72cba47b9d2e4560bfa242388551e54"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","8bc6d3767e3dd3d418d95e64f296b726"],["page/3/index.html","faedee5faff8acdfbd90a0c462dabe47"],["page/4/index.html","cb5875cd9c36ad2db039ebbdeb09ed61"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["source/tags/JS/index.html","7f90cb22d0a0b16e3b5358ceef865521"],["source/tags/ReactNative/index.html","2d5160bcc7ae48e3bef1ef66e5b66cc7"],["source/tags/Rust/index.html","cc804081950c4be43dbf21b99ba6c7ca"],["source/tags/angular/index.html","1d8469fe76494d2bdf6e65428bb58a09"],["source/tags/css/index.html","a5f309b64ecf0620638c79db12899635"],["source/tags/dart/index.html","ed5f94d423af4e529ea61f818603063f"],["source/tags/express/index.html","722f90a3b2496cc59d38c80054dd7170"],["source/tags/flutter/index.html","e9d8101f1096a4af0cac285d68273932"],["source/tags/fp/index.html","d04d0d1d381b546ebfd26fedc201f6dc"],["source/tags/graphQL/index.html","ad5166f50b9e68dfeb65c5f0dec9072e"],["source/tags/history/index.html","8dccf7cd5d1225c21320fe7a52af3b5c"],["source/tags/https/index.html","0df4f93d715803c6e12b1c421f3098c3"],["source/tags/life/index.html","7c9495430d8260cf9000e0111e5ae5a5"],["source/tags/mongodb/index.html","2d1b0329492f27b8a1e4a13f1a77550c"],["source/tags/mysql/index.html","0820ca5f79590fd6e8bfe3918323dbf3"],["source/tags/nest/index.html","0f14d7bd02e1a951614e5196b7c76a25"],["source/tags/nestjs/index.html","eeff1251f5ed27146565b9a14e6ea4d9"],["source/tags/nest学习笔记/index.html","dae5ae229e4627881acbc538d038fb16"],["source/tags/next-js/index.html","192e028d1a6daf7d22ea47c0f7156684"],["source/tags/node/index.html","7410e338f25466f938adaaac4d507df6"],["source/tags/nodejs/index.html","a68d79967ba4add8942f9ef9bdca2dbd"],["source/tags/puppeteer/index.html","ed889272d8f7ab9391360d5abd1c718a"],["source/tags/ramda-js-函数式/index.html","34308befe3f005d969dea8c6a700d79e"],["source/tags/react/index.html","fefad97e0c18e20a449be57ee6ca7c95"],["source/tags/sequelize/index.html","6d53843fa67241da5da9eaeb1461e130"],["source/tags/serverless/index.html","5c8624286cabdeff7fbd12092dcb6b51"],["source/tags/typeORM/index.html","22dd3a18956b7da2b6f66e36de0b71bf"],["source/tags/typescript/index.html","91cad6f3b6a9c2ef0e03b2114a341c1b"],["source/tags/web/index.html","fee95007749d861a0bf994d47b546286"],["source/tags/work/index.html","7848fca3b00f9a8fb6547041d37f4cd3"],["source/tags/wxProgram/index.html","aa60c2b428fea1b8e5e708c9da5939f9"],["source/tags/学习笔记/index.html","dfb9d4a86ac93d19353badc2532bf5ee"],["source/tags/效果/index.html","b441c5533260df5533b331040937e08d"],["sw.js","2351c99bbd4d234b2fcf00beaa20d108"],["tags/JS/index.html","a496edf891398546cfbb92af6e2af540"],["tags/ReactNative/index.html","bc63ea8dd09b9a25a8c67ff3e4b694ee"],["tags/Rust/index.html","77a63d20371b755fd43be0b1fe0da6f3"],["tags/angular/index.html","1107e8478bec8018aadcd9bae0c201fc"],["tags/css/index.html","6076864768c681a5caa1440d3f441d81"],["tags/dart/index.html","d0987021860ffee5fcbf3cb8d41f7664"],["tags/express/index.html","2702d0cbbd061fa367adcaa784ee2996"],["tags/flutter/index.html","20a37202e892657e031d16cd52ad51fa"],["tags/fp/index.html","7b95a9e3384508957ef3bc8cca05f4be"],["tags/graphQL/index.html","27d169bf8a49ceddf9f2283ab1d574fe"],["tags/https/index.html","b1c09e356c4a34c1be0d4615414c3e4f"],["tags/index.html","77d0651230d75fa58f13c108fa3a2a31"],["tags/javascript/index.html","9b1d95cf0649e6d5e9e33c6fef9b8695"],["tags/mongodb/index.html","94955b974d2eea6c674639e50acc73e1"],["tags/mysql/index.html","a8eed85eec6a33ee5a9466dd3eb064ea"],["tags/nest/index.html","b6bffb53930503ae3223212d2d0f7d49"],["tags/nestjs/index.html","bb5adcdfe919f9e93fb9e99db9565bfd"],["tags/next-js/index.html","a5d69c12f49ba7ff25f0596b6e7c105d"],["tags/node/index.html","77c38a31105dc20189afd072fac71fb0"],["tags/nodejs/index.html","f9224555bb55805e6cfe3bf0396a3ee1"],["tags/puppeteer/index.html","1a68244058d09c78897ced09f604bc1f"],["tags/ramda-js-函数式/index.html","64e21cb8c870a890b21964ca6c1d6981"],["tags/react/index.html","d79099d5bb7e093677ca002d502d8f0e"],["tags/sequelize/index.html","09ca9749764b382aab608f049545d57f"],["tags/serverless/index.html","9cd27b23fe85f759e6e6153dd61a8781"],["tags/typeORM/index.html","32127efd27c453d957fe1f16ccc20f00"],["tags/typescript/index.html","494d7cae947f3b830c36e531a96d7eb6"],["tags/web/index.html","806cd43e14a01adb06553ea7da1c3c4c"],["tags/work/index.html","eee45e8d6c1f8ff2d56b65da19ede7e5"],["tags/wxProgram/index.html","989e31a49a498a43bcf9d810266357e6"],["tags/效果/index.html","aa728e0b2962acbd4e0e73e9d700784a"]];
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







