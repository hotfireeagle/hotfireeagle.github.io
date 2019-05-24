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

var precacheConfig = [["2018/10/13/hello-world/index.html","8207cc559e49bbfa4964246be954688a"],["2018/10/13/文本换行/index.html","32e30b2d3a1b9ed22c70003ce1aae562"],["2018/10/15/css实现轮播/index.html","a51fa4595b93efe353c57ee0c4d511fa"],["2018/10/15/puppeteer-API备忘/index.html","a8ae7870227078f2a8c408d78fe61d27"],["2018/10/17/DOM操作/index.html","513e88a7b6d8ce314a41e151639f9b08"],["2018/10/18/rust语法备忘/index.html","ef2e1d8cb2ef603701db9fdf221c360c"],["2018/10/18/typeORM学习/index.html","9b1a97d2cdafd087843a95981e18a417"],["2018/10/25/typescript知识点/index.html","6c9be2f6eeef4f0cc73b5c7850db3b48"],["2018/10/25/小程序思考/index.html","dad669f256d26b13f4a938a24d47f476"],["2018/10/29/angular指令/index.html","429697b346243eeb549a916d7fb9f13e"],["2018/10/31/css动画/index.html","8b94d0095bbb6e352b7104a4321a887e"],["2018/10/31/css布局/index.html","794d1e9d06ecaae80692d0d024a178dd"],["2018/11/01/angular生命周期/index.html","9342afbe1afc076db09f6783a46c7222"],["2018/11/01/angular组件交互/index.html","fc96aecf149660e0e1f25ba35249fcd5"],["2018/11/02/angular模板语法/index.html","901e455bad250fbe1981a8e7c8aaa7cc"],["2018/11/03/mysql命令行/index.html","ab655d42dc0af163239bedee5b5f37e4"],["2018/11/04/css知识点/index.html","6a017611e15e9a8650b833a0eeb8fe1d"],["2018/11/14/nest学习/index.html","37554312e2f06b525b9a4b052e5dc0da"],["2018/11/18/js注意点/index.html","60f84e2fb4e19e5ee153489c6651c82c"],["2018/11/21/工作bug总结/index.html","e4fd5fad5747c0381193cc341261cb81"],["2018/11/22/mongodb学习/index.html","181321843e0b234613a50d6b05b80666"],["2018/11/26/react坑/index.html","e2e136f43f320312ec3624d27cd9c0d0"],["2018/11/27/typescript实践/index.html","17fd7d4303ef7939e3a42541f819490d"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","3bd54de697506ec74af9aa82c914251b"],["2018/12/01/vue学习/index.html","6fb44b2e1b21dfacd9430aeb72afd533"],["2018/12/07/nodejs the right way 一/index.html","b106bee31cdc7636d66a8c7faa83dcdc"],["2018/12/07/react生态基本使用笔记/index.html","2ed0d5bb6c01814ab831426b219c3967"],["2018/12/11/rn基础一/index.html","b692660f23b82d13437118f77d5de65a"],["2018/12/11/函数式一/index.html","82d58280191b2dcce935fc659824e25c"],["2018/12/12/nodejs之process/index.html","db0ee9a34dba1de30c1e5cb908027c0e"],["2018/12/12/node事件循环/index.html","414b322b49c07755a1cce8137cb5efe6"],["2018/12/13/elasticsearch/index.html","a6ec40787319cecee40292c24dbb2357"],["2018/12/13/express/index.html","5bbcebe102db22fb2921ed4936bef4a9"],["2018/12/18/小程序性能优化/index.html","c2a5a2595ddece6246eb9e975760b826"],["2018/12/20/express2之database/index.html","857e7c064046195a7a373fe8213f3228"],["2018/12/26/flutter学习1/index.html","ee5198df769a2180a3a640a19a4a65fe"],["2018/12/27/flutter之包管理/index.html","f11f40bee01da3e565712ffdea01db9a"],["2018/12/28/express测试/index.html","0f2f5deaad57297009ac8b7a6d41c021"],["2018/12/28/flutter之widget基础/index.html","f70d84eca0b2eb2f11647f88ada97c78"],["2018/12/29/Express值请求体中间件解析/index.html","453a37934cfabda4a29d99f7c8dd3a82"],["2019/01/02/express开发小结/index.html","6bd8e33f033c427815786917bd82a494"],["2019/01/05/dart基础1/index.html","d3ca73dff52e8a5ec85097140d7713c5"],["2019/01/05/dart基础2/index.html","37f511b1708aa3b24c994954364fa133"],["2019/01/07/dart基础3/index.html","cf5b3211d36bf5d78785d0a0f6e06127"],["2019/01/07/express学习/index.html","5c15322e762ee227ce788a77f9e69fa6"],["2019/01/09/Flutter之文本/index.html","eead9d41e79cce0523a0fc0c5ad2c1e6"],["2019/01/11/Flutter之按钮/index.html","b3ab578f36272e1f8ebcd89d9a797476"],["2019/01/11/flutter之图片和icon/index.html","92582dad3e94bfff74038f1537350245"],["2019/01/14/next-js学习/index.html","be7e67ff909779ef61cddae348565d04"],["2019/01/15/flutter之弹性布局Flex/index.html","3ae4ebd4c26192a037e11d84007c2e46"],["2019/01/15/flutter线性布局/index.html","0e06fb17706bb76cc4e5805405780a3b"],["2019/01/15/rust2/index.html","51018d8d116f06c0c5dfada3919e56aa"],["2019/01/20/express-ts上手记1/index.html","3f95b8f4bb0e9247649985274a084cd2"],["2019/01/21/react遇上typescript/index.html","e6585ac0e7af488fd2ec7ca8b1bf8f3e"],["2019/01/26/新点总结/index.html","10d58aa452d7f2921b9b274621964f9a"],["2019/02/11/angular架构概览/index.html","f4951015e92b530ca4e0769d1576989b"],["2019/03/28/promise相关/index.html","c11267ca14759688435fc6e6f8270dba"],["2019/03/28/实现一个sleep方法/index.html","1cbd8b99f8bac1871fc8e8de365838d3"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","e559980a78cad52ba26f7aa641fa7053"],["2019/04/02/证书可信任/index.html","c884c8602b07b8771c1396fc31e15582"],["2019/04/09/从一道题目谈谈跨域/index.html","3fece7795ea9a71d08ad20e404f51ada"],["2019/04/18/关于滚动吸顶/index.html","4038a65e625e1f9843219e7e629119ad"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","e9eb23ba1008734f536ec7c28343e1c3"],["2019/04/23/深入理解padding/index.html","de20c20f4faa1d8173e1a647749deb70"],["2019/04/24/css题目/index.html","8d7712d8af6286addd961aacd7c12221"],["2019/04/24/js题目/index.html","259c29c30eb9e6c8d20d71165cffb27c"],["2019/04/25/好吧-EventLoop/index.html","344921d71a519213287d6d6bc0388040"],["2019/04/26/轮播图实现/index.html","5a51faac22dded2485f9f167d08df13e"],["2019/04/27/深入理解margin/index.html","a4947ad60d7ffff8163db84aaf6df79f"],["2019/05/07/FirstPaint/index.html","0e45262537b3cb106ecb7fa79ffbcbe2"],["2019/05/14/图片懒加载/index.html","3cac37a40eb3f1feafce2d0bfbdb10fa"],["2019/05/16/typescript学习二/index.html","55407032bb36ba1ea1c3340fecf70da2"],["2019/05/16/利用原生JS实现简易的v-model/index.html","a66b29199ff5f439d36ee978f430ae07"],["2019/05/16/利用原生JS实现简易的vue/index.html","a7ba140d5a570b985ec56d66e6b5fc5e"],["2019/05/16/利用原生js实现数据代理/index.html","faec78b4bb947d2b14b163a889e5e360"],["2019/05/22/typescript搭配react使用笔记1/index.html","eb050cbc224e068311ff8791f035131b"],["2019/05/23/typescript-react学习笔记2/index.html","b0ed357d2a6ab8f93ff02ddeea50b92b"],["archives/2018/10/index.html","5acadf1a783126b857012d0eccc8b053"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","3ac37f43fd1c778826bfb752dbe429eb"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","59d847ce9ac8af101ca38b7b4e796768"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","8358148ee12fcfad478ba96258a78038"],["archives/2018/page/2/index.html","2a1b4aae27fbd300b8a0f18cd72d9ddb"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","b556b201654b523297b7a9cfd0e77d2f"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","f2f2cb39dbeed1ddea6cb9fa07ad8dd9"],["archives/2019/03/index.html","bf1f0a976d73049efbcb9905e8b24bfe"],["archives/2019/04/index.html","ebfc4d9bdf68c4a029affa3b7fae9872"],["archives/2019/05/index.html","81a1a5492b232da42cb292689a59d043"],["archives/2019/index.html","fa6fd78f1f3df79bb8a0ece4320fd59e"],["archives/2019/page/2/index.html","b3154f672c391063dd97bee1946e135e"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","1d48f1125e972ccf4c92a012a2d2744b"],["archives/page/2/index.html","f5234696fe3bd64aff4a135820adab78"],["archives/page/3/index.html","f2a865817cd791d911f0b24762b5b08a"],["archives/page/4/index.html","2a5cfb6edd66e1c6d4b5a05629a3b0f3"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","d86806906d8a05b16e24d3c86a445fd0"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","4632afa6a7f974445baaeefab3f15074"],["page/3/index.html","bc93002e2671d59652f6c2e808a2eeba"],["page/4/index.html","eba225f4731128f754951f8c46bf2c4c"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["sw.js","f467a0904fb67e99ae4bc10c48d6388d"],["tags/JS/index.html","04122de9f0284e7b759a15e1e6f64672"],["tags/ReactNative/index.html","29dae4c4ac18615a52c78f1ff0158255"],["tags/Rust/index.html","87f27ddbb2664974d03b5f84271a698a"],["tags/angular/index.html","7a8b169df9054b5c6fa7d6a3234f193d"],["tags/css/index.html","afab36933e50ca7d1fb239d53757f20a"],["tags/dart/index.html","d10bda8e6c3a711e3e5e5b6d536de00d"],["tags/express/index.html","a2b0c729c4cdce6c7eaee5e00c526b48"],["tags/flutter/index.html","7911a7ab7916538eb4324dd88362457f"],["tags/https/index.html","31af813607c98a03ed233ed63add6ae0"],["tags/javascript/index.html","a5f558b64b31070278f2e23cf3da54ca"],["tags/mongodb/index.html","263e5c9f5e2da8779b2aa4171c847781"],["tags/mysql/index.html","00bd871f21f19d1b299dc63d47c1275a"],["tags/nest/index.html","3b72f7cbccba56fd2116b4619fe1582c"],["tags/nestjs/index.html","19169c04bc2e39f9e426cdd3493b0635"],["tags/next-js/index.html","45d0b8fdf5639dd0ce9e70ea9c0eb18a"],["tags/node/index.html","e5a0b3344e59d922075bb988384fe49d"],["tags/nodejs/index.html","b848ca340121c37396da983effa27503"],["tags/puppeteer/index.html","644c5034a0f592fa120e39769ebc90d1"],["tags/react/index.html","2ee776de4eda22bf22c8ec0b076b5284"],["tags/typeORM/index.html","3cd770af8bf0d18a11b4376834684242"],["tags/typescript/index.html","5fa4475d830a6943bc7285b3fbced5db"],["tags/web/index.html","d18b85f869eb318e3adf26a2f01638f5"],["tags/work/index.html","72c85338a0bd21e5bd006015235e25fa"],["tags/wxProgram/index.html","683af591b52a4ad515291bd6f077ef34"],["tags/效果/index.html","fd7f56ddf0a31b1a7f7408d2fd6d95da"]];
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







