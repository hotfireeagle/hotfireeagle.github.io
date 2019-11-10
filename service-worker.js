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

var precacheConfig = [["2018/10/13/hello-world/index.html","f3d57f22f8e5e5651689a76ae4e45187"],["2018/10/13/文本换行/index.html","57bb9714276e8663a60eca218b184476"],["2018/10/15/css实现轮播/index.html","91d2aab079879e18bdf90319d99c6fbd"],["2018/10/15/puppeteer-API备忘/index.html","e4f2357c4f02653f26b200adf173e328"],["2018/10/17/DOM操作/index.html","991bdf0186c2281bed22da6778cad325"],["2018/10/18/rust语法备忘/index.html","4dcf904a7d76de1b1234533509d1708a"],["2018/10/18/typeORM学习/index.html","135b5611aeee980c69baf20277737606"],["2018/10/25/typescript知识点/index.html","3faa7e4d9b7f14805eee891f81ddd103"],["2018/10/25/小程序思考/index.html","6c905bbabe3c904b1db2d5398aeda498"],["2018/10/29/angular指令/index.html","b6cfaae8789a5117843eb52bddd33345"],["2018/10/31/css动画/index.html","0963e97b8e5e68626f3286b075355434"],["2018/10/31/css布局/index.html","7b324f3f3c3274fc93ec0ed46fd8644f"],["2018/11/01/angular生命周期/index.html","0677eb3a1c47b3ebd72bd9ceb1da7b5c"],["2018/11/01/angular组件交互/index.html","4e7d2213db6fa11e560bed4d5709b957"],["2018/11/02/angular模板语法/index.html","b555e87472346acf47a412ac71a5e9c3"],["2018/11/03/mysql命令行/index.html","a8e97d17fa15d2a6bb3d305e339e1c19"],["2018/11/04/css知识点/index.html","f2965b7bc2d627bb957512b011d599c1"],["2018/11/14/nest学习/index.html","95986f080ef0dd24822ffc4351ff3f4f"],["2018/11/18/js注意点/index.html","fe1e036006e77e5c2d9e26ee185293c1"],["2018/11/21/工作bug总结/index.html","aafb1b807b8529bb252b9a06d9c237d0"],["2018/11/21/工作笔记/index.html","3ea28b62043945aebd679b3002ae8b9d"],["2018/11/22/mongodb学习/index.html","81c562eba44372f2ba1107936c1ca80f"],["2018/11/26/react坑/index.html","069cfb91081fba06a13d1f7758077aae"],["2018/11/27/typescript实践/index.html","7b2a1a564a733d5adf922837c38ecb7d"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","26c8e4939f927dc5212314dfedc56a19"],["2018/12/01/vue学习/index.html","5b58e4ba00eb873f45cbd5bc5da08b7f"],["2018/12/07/nodejs the right way 一/index.html","cbb4ad73bef26908dff18b6a15409e93"],["2018/12/07/react生态基本使用笔记/index.html","b249a460894f3fe648531a89d3282971"],["2018/12/11/rn基础一/index.html","15994e1d329d911de833818feb4b39bf"],["2018/12/11/函数式一/index.html","dcd3246ac3368dea9e7ea3ec56f68968"],["2018/12/12/nodejs之process/index.html","f4e0a0f09225a5cee293eba739f0f8c6"],["2018/12/12/node事件循环/index.html","9b90148613f86c6f498c939b3e4abce8"],["2018/12/13/elasticsearch/index.html","e562b38b04ae65c19380b90943801f34"],["2018/12/13/express/index.html","8caf666e161c941ee007e0294c492e1c"],["2018/12/18/小程序性能优化/index.html","6a01ce490c0c5c559715c701c4125cda"],["2018/12/20/express2之database/index.html","8b117a74f800a01711d040eba7083891"],["2018/12/26/flutter学习1/index.html","a7528813407f505d814fa79ddb920544"],["2018/12/27/flutter之包管理/index.html","61d3e0e63580bf046a9ae7487d7375c6"],["2018/12/28/express测试/index.html","680fb6cfbb2cb02e044ce2d137ce4264"],["2018/12/28/flutter之widget基础/index.html","a6c8ded03f770360e426bd8a14ad7bfe"],["2018/12/29/Express值请求体中间件解析/index.html","985f5dca88b41418573915c2749e0875"],["2019/01/02/express开发小结/index.html","48dd7f73e5eb3328b00808f0314bcc99"],["2019/01/05/dart基础1/index.html","24305327409aa2fe68a8e3b5604d4d09"],["2019/01/05/dart基础2/index.html","0d8b4b85197904d7b5712410a9e0cc3d"],["2019/01/07/dart基础3/index.html","c2cd31fc4c6a12e08c85a89389956ab5"],["2019/01/07/express学习/index.html","ae2bc6352c4a8cc09492597843da43f7"],["2019/01/09/Flutter之文本/index.html","90fa6358be311568653b9b3e143443a4"],["2019/01/11/Flutter之按钮/index.html","e0e196abf8556a34108ed47764c2b99a"],["2019/01/11/flutter之图片和icon/index.html","bc5d7a3ce2b2f17f5aeb65381d0df88b"],["2019/01/14/next-js学习/index.html","397a5eabf95edf42880d7876d8aa3dcc"],["2019/01/15/flutter之弹性布局Flex/index.html","ed549d0c5523828fffa810a8b3431676"],["2019/01/15/flutter线性布局/index.html","93c4dadc6e3f4a423dc40c2970f6ecb0"],["2019/01/15/rust2/index.html","4b20b6ea42999b1a608344f6fd9d6a45"],["2019/01/20/express-ts上手记1/index.html","a51e9a082a4bc605d8725621b826b3b2"],["2019/01/21/react遇上typescript/index.html","f137175d18dedc6457a5ff9fc6fe6694"],["2019/01/26/新点总结/index.html","cbcd6e64d0e99031065ca1aaf5b662ea"],["2019/02/11/angular架构概览/index.html","120a462a8e36b4fd478a672757d03b6b"],["2019/03/28/promise相关/index.html","5fe8029d6d779b01b7cf600acfa9e298"],["2019/03/28/实现一个sleep方法/index.html","b0199903d2364a1c6bfdee93a652ad2c"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","4cee36cc21ce3f9f38055d0453de5074"],["2019/04/02/证书可信任/index.html","ff4ed09c058e74daf1902467253a5ba8"],["2019/04/09/从一道题目谈谈跨域/index.html","021fe6ad618aa1df90b1895a8d024407"],["2019/04/18/关于滚动吸顶/index.html","f6ec85725f43345f5d1937319d772320"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","9ccbeee40f4d278a4b9c07d33dd4fea2"],["2019/04/23/深入理解padding/index.html","63c92b8983edafe5e538ed89d0dde5c0"],["2019/04/24/css题目/index.html","694d8d97850e9a9a7b2a4bca59a0691d"],["2019/04/24/js题目/index.html","0c3fc22c1fb597a927f48f45c335ea6a"],["2019/04/25/好吧-EventLoop/index.html","9bd05a256ff7344eb3ef025703ee7094"],["2019/04/26/轮播图实现/index.html","26d5ebe8689e269a78df43cf5269a741"],["2019/04/27/深入理解margin/index.html","da00962c484fba409320be5c87ac5822"],["2019/05/07/FirstPaint/index.html","9e3849692562432c412b24f9e6c5f56f"],["2019/05/14/图片懒加载/index.html","7ea70c58f1d7a33326de49b0ae887efe"],["2019/05/16/typescript学习二/index.html","9b60c391d2e7eac0db79f3db1298be82"],["2019/05/16/利用原生JS实现简易的v-model/index.html","06270fd36a93ceb76cb1db31e897992f"],["2019/05/16/利用原生JS实现简易的vue/index.html","a7ba140d5a570b985ec56d66e6b5fc5e"],["2019/05/16/利用原生js实现数据代理/index.html","faec78b4bb947d2b14b163a889e5e360"],["2019/05/22/typescript搭配react使用笔记1/index.html","8f90e38668f20e2dbd9c737325132f4a"],["2019/05/23/typescript-react学习笔记2/index.html","23bc62f026f32f8f0d82dda53565dfab"],["2019/05/26/typescript-react学习笔记3/index.html","a0697e910886e5eed40abf500fc37815"],["2019/05/27/types/index.html","ca2d909381887a2795d01c513090e7f3"],["2019/05/29/learning-graphQL-笔记1/index.html","40db51385fb0ea832ece0bbfed5f0ed8"],["2019/06/04/ramda笔记/index.html","24e1547623d320f4dd4f941fcaf1e628"],["2019/06/05/Sequelize学习/index.html","fa1b61874cbf481cce8e2857eeaf8ad1"],["2019/06/17/serverless笔记1/index.html","f63b65efb689a510b680b906b67938a9"],["2019/06/21/函数式/index.html","5cb97baec407451eec7dbfcfd2f91c53"],["2019/08/04/定投/index.html","1684f8603d24e2f8667f515cd3c4548d"],["2019/08/06/Rust类型系统/index.html","0cfba6d963289e4a1fa94f1266ca0efe"],["2019/10/03/History1/index.html","abad49349f213547766071a2f8fa7823"],["2019/11/06/nestjs的模块/index.html","7258a3ae3bc881e15ed42ce5407e4336"],["2019/11/06/nest管道/index.html","9b3035288d03e99710b9d5afa9463f9a"],["2019/11/07/nestjs守卫/index.html","40481810ddd2200ffc02fac7cfb4b835"],["archives/2018/10/index.html","6937d9ac462b4ab6f7f7d8bf36434cb5"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","a3470e83fd56d640001bbb264ec247d8"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","8a2d43360b371a1d979e77740462cb2c"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","930846b115be8fa0b3becf13c30b3711"],["archives/2018/page/2/index.html","9c74d07ac8d9b15da143fad57590a8cd"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","ab11f23e7f4c3f788b37210d16c8f0f6"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","6052edf5018394bc630e3f9ba1276478"],["archives/2019/03/index.html","6736cd2e0dc7a7edf0939ac6d70b0775"],["archives/2019/04/index.html","224822c7bf229cd15908f98e4f198c13"],["archives/2019/05/index.html","de05bbd6fb4cb2ebcec2d08b68c3849c"],["archives/2019/06/index.html","f773ec4543f43c879d093864e7e1d1b4"],["archives/2019/08/index.html","371e55a8106adb47fee1e9f936050c38"],["archives/2019/10/index.html","4ec266c5998d430feb9fb1ef1a8f3589"],["archives/2019/11/index.html","07f4be155f653fba708a214dd9ad672a"],["archives/2019/index.html","1264c1f4b50243bd24ef9518ad2004fd"],["archives/2019/page/2/index.html","2db74c8abe7e39ea5e4e155eca8522b9"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","623621fffc61405a4f9453f8e57a844c"],["archives/page/2/index.html","3e03c2351b8071523fdcf7999b910dc6"],["archives/page/3/index.html","d8d5e652bc41107763ca6ef469e4169f"],["archives/page/4/index.html","d07cbee8cf846fc434c4e53284b670a3"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","39c1100b94b3b32ae2d8d2cad1d854a7"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","41fa108749dc2ceb319fe3515dded13e"],["page/3/index.html","af8d1f8747365bc5acb056b8018291a4"],["page/4/index.html","7329b0d70c28bd2b0ccd9302a420d413"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["source/tags/JS/index.html","a5b8500dd41a7d099076ddd4ea9a8f02"],["source/tags/ReactNative/index.html","b5a97bb25148e8b9cc8e6479f96cb3a6"],["source/tags/Rust/index.html","37891eded48b1cb5b6cd09f4d5e43359"],["source/tags/angular/index.html","a9d911394c631f4387d00c755535fcd7"],["source/tags/css/index.html","c44b21e90eaf18b1c6aa061c2d542dd9"],["source/tags/dart/index.html","71b28b8e509fda1e43e0aaa3816c8c3a"],["source/tags/express/index.html","943cb9c66aee7364a48f0fb96ed10158"],["source/tags/flutter/index.html","730a9cc992fadea1db8889ef83436e0b"],["source/tags/fp/index.html","42ca397ac1d5f2da689cfb158b2747e3"],["source/tags/graphQL/index.html","e76cebd4f90bcdde13ef8f18b914852c"],["source/tags/history/index.html","533b0c1b03e61cad4b766097a1517421"],["source/tags/https/index.html","26a30933bdbd7d275447d03db27e63e5"],["source/tags/life/index.html","d3c952b2b042d29306cdcd04299f6b44"],["source/tags/mongodb/index.html","33c557851bf0832d606396a91b1d4d07"],["source/tags/mysql/index.html","37d7521ae4a906da1ef075cb5b561d33"],["source/tags/nest/index.html","101a9dc4f9ba440f7191eadbf6ac0d1e"],["source/tags/nestjs/index.html","2310da4e8f6ae19c2a4c965739a826c7"],["source/tags/nest学习笔记/index.html","1f37f6bc0dc881197fc2125ba21b5581"],["source/tags/next-js/index.html","1ed4bc82b72da4925b90650aef10eb81"],["source/tags/node/index.html","5aee0be84fad5f3610a5a43c99dd6ae8"],["source/tags/nodejs/index.html","abffc7bccc2f3650eb18dc4cb4da58b3"],["source/tags/puppeteer/index.html","7eebcbf6751265d0787b242729ee888f"],["source/tags/ramda-js-函数式/index.html","af244af33659a310703d581ad194c805"],["source/tags/react/index.html","799da5662a548a214a0a0b88964557ba"],["source/tags/sequelize/index.html","2ee2c0658f856f06020321552c4f54d8"],["source/tags/serverless/index.html","b691362275c818d21ef66b509af74f67"],["source/tags/typeORM/index.html","66ddb90b96773e378155502e3a115cd3"],["source/tags/typescript/index.html","cea65f9cc6fd0aad91355b0de7534b34"],["source/tags/web/index.html","a2d1ff5059b0f2f81bf824ee528b3808"],["source/tags/work/index.html","1cb59d399f95a37c50ba55581203fcb8"],["source/tags/wxProgram/index.html","b20242f1308162caf1c6dd7ac73383f2"],["source/tags/学习笔记/index.html","7762b31f96bdce75740a5b56efb24be2"],["source/tags/效果/index.html","91999c1955640fd90ef299ac85aab222"],["sw.js","276a4dd6179619efafe1297de5da290f"],["tags/JS/index.html","a496edf891398546cfbb92af6e2af540"],["tags/ReactNative/index.html","bc63ea8dd09b9a25a8c67ff3e4b694ee"],["tags/Rust/index.html","77a63d20371b755fd43be0b1fe0da6f3"],["tags/angular/index.html","1107e8478bec8018aadcd9bae0c201fc"],["tags/css/index.html","6076864768c681a5caa1440d3f441d81"],["tags/dart/index.html","d0987021860ffee5fcbf3cb8d41f7664"],["tags/express/index.html","2702d0cbbd061fa367adcaa784ee2996"],["tags/flutter/index.html","20a37202e892657e031d16cd52ad51fa"],["tags/fp/index.html","7b95a9e3384508957ef3bc8cca05f4be"],["tags/graphQL/index.html","27d169bf8a49ceddf9f2283ab1d574fe"],["tags/https/index.html","b1c09e356c4a34c1be0d4615414c3e4f"],["tags/index.html","143ecd746909e43851b5979e608d5360"],["tags/javascript/index.html","9b1d95cf0649e6d5e9e33c6fef9b8695"],["tags/mongodb/index.html","94955b974d2eea6c674639e50acc73e1"],["tags/mysql/index.html","a8eed85eec6a33ee5a9466dd3eb064ea"],["tags/nest/index.html","b6bffb53930503ae3223212d2d0f7d49"],["tags/nestjs/index.html","bb5adcdfe919f9e93fb9e99db9565bfd"],["tags/next-js/index.html","a5d69c12f49ba7ff25f0596b6e7c105d"],["tags/node/index.html","77c38a31105dc20189afd072fac71fb0"],["tags/nodejs/index.html","f9224555bb55805e6cfe3bf0396a3ee1"],["tags/puppeteer/index.html","1a68244058d09c78897ced09f604bc1f"],["tags/ramda-js-函数式/index.html","64e21cb8c870a890b21964ca6c1d6981"],["tags/react/index.html","d79099d5bb7e093677ca002d502d8f0e"],["tags/sequelize/index.html","09ca9749764b382aab608f049545d57f"],["tags/serverless/index.html","9cd27b23fe85f759e6e6153dd61a8781"],["tags/typeORM/index.html","32127efd27c453d957fe1f16ccc20f00"],["tags/typescript/index.html","494d7cae947f3b830c36e531a96d7eb6"],["tags/web/index.html","806cd43e14a01adb06553ea7da1c3c4c"],["tags/work/index.html","eee45e8d6c1f8ff2d56b65da19ede7e5"],["tags/wxProgram/index.html","989e31a49a498a43bcf9d810266357e6"],["tags/效果/index.html","aa728e0b2962acbd4e0e73e9d700784a"]];
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







