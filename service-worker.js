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

var precacheConfig = [["2018/10/13/hello-world/index.html","644c95b0a02b40daa7f0a95b748262d9"],["2018/10/13/文本换行/index.html","6562d6ad87376653bbbf78b8d713749e"],["2018/10/15/css实现轮播/index.html","3d99ab812420d806521af535ca9fd5b3"],["2018/10/15/puppeteer-API备忘/index.html","5009ed547cd3b915ae88e6d27420bf23"],["2018/10/17/DOM操作/index.html","8b1ba6a70f0f4e9af48e3e3b474f60df"],["2018/10/18/rust语法备忘/index.html","e8d5945718ad19cab9916ce7b4a09a07"],["2018/10/18/typeORM学习/index.html","df9cbfa31fc5584a4a7ccc82fbd6f1fc"],["2018/10/25/typescript知识点/index.html","db56f7596236d297fd23243345c4223d"],["2018/10/25/小程序思考/index.html","3b97be60b0ef568d7b6f96f0a96ccbe8"],["2018/10/29/angular指令/index.html","6a8a8227273bfd5fe8dc1d5d9121dbbc"],["2018/10/31/css动画/index.html","b7d5eff76dcb9ebaa14d3d5cc80bf1c8"],["2018/10/31/css布局/index.html","4d0b842697e726acb9267604a0e47726"],["2018/11/01/angular生命周期/index.html","56ac8303dafbe88f7daa62e7563ff134"],["2018/11/01/angular组件交互/index.html","e36261bd3fd48b4c9053e7b13b763e7a"],["2018/11/02/angular模板语法/index.html","ddedab95c78f4e0cc919390feb5ae81c"],["2018/11/03/mysql命令行/index.html","909b7f9e8ba88e2806d9bc2caddf54a5"],["2018/11/04/css知识点/index.html","f3a0c4150e6c55cd92703fed9c3da886"],["2018/11/14/nest学习/index.html","d7ffb16151388fd3295c9b289655f726"],["2018/11/18/js注意点/index.html","fe1e036006e77e5c2d9e26ee185293c1"],["2018/11/21/工作bug总结/index.html","1ca63947b6b58cf1743c57d67cea02f7"],["2018/11/22/mongodb学习/index.html","72182da4f47e8b8d87675f11cdf729a9"],["2018/11/26/react坑/index.html","898503902d18c207e813bc264163efcd"],["2018/11/27/typescript实践/index.html","39101aa7e41ce0770b38f1adc098efce"],["2018/11/30/用nestjs开发一个博客应用之程序配置/index.html","2edc015b4fd8f110ab0db3ae7c8fa93e"],["2018/12/01/vue学习/index.html","4f9a831db5faea57ef2e11f278cad43c"],["2018/12/07/nodejs the right way 一/index.html","d255018a10bb8bce5458a5d60abaccbd"],["2018/12/07/react生态基本使用笔记/index.html","8a39f23ef6f042e07a75ef4d6a1dd3f3"],["2018/12/11/rn基础一/index.html","53fbaa799b1ecc0145794fd2593c2022"],["2018/12/11/函数式一/index.html","dcd3246ac3368dea9e7ea3ec56f68968"],["2018/12/12/nodejs之process/index.html","4fa0dfcaffa512f46a0ac775cb3bff77"],["2018/12/12/node事件循环/index.html","1aee16ce200b8fc88c424c8e1efeab8c"],["2018/12/13/elasticsearch/index.html","6ef7ec7351d7f2a39836fa2b450964bb"],["2018/12/13/express/index.html","07f6b8c69557ad207b0cef1cc3742c2a"],["2018/12/18/小程序性能优化/index.html","eae6c36b9d6eb64e1fbffc93dcbb3bc0"],["2018/12/20/express2之database/index.html","041d492c87645b5b283fdadf2d778b93"],["2018/12/26/flutter学习1/index.html","fa484ea05cbb646db73844b972fe85de"],["2018/12/27/flutter之包管理/index.html","f0e7a9d40a6fbfff7bc208dadcb7701a"],["2018/12/28/express测试/index.html","22d582cbfe18dff904df6c0296734649"],["2018/12/28/flutter之widget基础/index.html","09662ce0563d8a0f7159393ba5fdb833"],["2018/12/29/Express值请求体中间件解析/index.html","8e6069847b748f597c316c80b89b2cf2"],["2019/01/02/express开发小结/index.html","9ea74542b202d13a923c1e43811c8e5c"],["2019/01/05/dart基础1/index.html","016e00630bfd194e240189b84c3093a5"],["2019/01/05/dart基础2/index.html","2fb23f84ccf3f36377bcafeee992a43f"],["2019/01/07/dart基础3/index.html","cbad2021e28e002602e5a403fbbf8dca"],["2019/01/07/express学习/index.html","0596867f53995f3b7b42b5462cb28412"],["2019/01/09/Flutter之文本/index.html","df0a5c7fa05dd258b6998220ab5853f3"],["2019/01/11/Flutter之按钮/index.html","e1c77f456eb4a1cc09589afccc5a173e"],["2019/01/11/flutter之图片和icon/index.html","9bb7803abcfad1558ba85fa4708ec76d"],["2019/01/14/next-js学习/index.html","433ae06d14a8f674014b738b934e7717"],["2019/01/15/flutter之弹性布局Flex/index.html","2fccdbb23f8202bc31a7fda04f3d738e"],["2019/01/15/flutter线性布局/index.html","0f1c205b4c1aff395154a9879ce5870b"],["2019/01/15/rust2/index.html","0fe55f2842a13ff8c6d4df4766862f1e"],["2019/01/20/express-ts上手记1/index.html","24396b30ed4373d595d59e32b5a3e25a"],["2019/01/21/react遇上typescript/index.html","cc960659ab3f085c8c04caea0166b015"],["2019/01/26/新点总结/index.html","8e71435820be04c9f8fe0ec2217c1b59"],["2019/02/11/angular架构概览/index.html","2d2dcca1a8650078b7a5e1af956751af"],["2019/03/28/promise相关/index.html","13735ccb97a24fd8e615905c8aa69cc2"],["2019/03/28/实现一个sleep方法/index.html","f07c4da798aaf0fbe8ec56a1607578bb"],["2019/03/29/从一道作用域题目聊聊作用域/index.html","316aab260ff6aa4b799a3cafb8b7ced6"],["2019/04/02/证书可信任/index.html","ffe49d27dc8569798c452ba0defbb5ab"],["2019/04/09/从一道题目谈谈跨域/index.html","e17366d87f390fa1f09fc96c238f574f"],["2019/04/18/关于滚动吸顶/index.html","9c2b4a3639710d81dcacdd7df1c58f22"],["2019/04/22/rust/index.html","da9eb4aca868c718f99f41c2a6bfb087"],["2019/04/22/浏览器页面渲染机制/index.html","75a84d16baa68a64407ed4bf6b5c02dc"],["2019/04/23/深入理解padding/index.html","14364be55c56d607fa31c6dca61ebd5a"],["2019/04/24/css题目/index.html","f465f0a7f5a6fa38846289e88e87c99d"],["2019/04/24/js题目/index.html","1d4cc853ff0675daf80098e199ecce54"],["2019/04/25/好吧-EventLoop/index.html","eb02793d7208bf5e882f59b505d7010b"],["2019/04/26/轮播图实现/index.html","2345ceb37e565fc95a651e2b9c196c3e"],["2019/04/27/深入理解margin/index.html","971d03a80eb05937bf7206966834256a"],["2019/05/07/FirstPaint/index.html","f662765b0508d21d5cae064e6dc57f6f"],["2019/05/14/图片懒加载/index.html","eace4873503008d25ca7fde9aa86a67e"],["2019/05/16/typescript学习二/index.html","03c0f05b6e2caf2029356ce607d03f4d"],["2019/05/16/利用原生JS实现简易的v-model/index.html","72ffa0d62b36c50607b1a110a36f6e6d"],["2019/05/16/利用原生JS实现简易的vue/index.html","a7ba140d5a570b985ec56d66e6b5fc5e"],["2019/05/16/利用原生js实现数据代理/index.html","faec78b4bb947d2b14b163a889e5e360"],["2019/05/22/typescript搭配react使用笔记1/index.html","79e957eca11014ada094c6703ad39f36"],["2019/05/23/typescript-react学习笔记2/index.html","5921b119f15d918a9c9fcc4958c8818b"],["2019/05/26/typescript-react学习笔记3/index.html","d36c5e358429a4b1bdf288386ded7e2c"],["2019/05/27/types/index.html","5a6f34d508e2e95cc5ebf03c5d08c264"],["2019/05/29/learning-graphQL-笔记1/index.html","3aed00e8ba9cd2812893a399058b5f09"],["2019/06/04/ramda笔记/index.html","718938b42c06981edc4bb72e12ae9e0a"],["2019/06/05/Sequelize学习/index.html","25179c8aa9fa265d583869c304073e80"],["2019/06/17/serverless笔记1/index.html","a51cd5d2b2b06c570ef3fd9ffa7d18d3"],["2019/06/21/函数式/index.html","790e7699ae8ff5d0a7cb348a6c6df624"],["archives/2018/10/index.html","e3a96b7c75c778a7a109d13171346bb7"],["archives/2018/10/page/2/index.html","8b073453db7b172f1edc995c9228b845"],["archives/2018/11/index.html","e7863819cabba42de3356b7b508c1a0c"],["archives/2018/11/page/2/index.html","50c30a8e040d06b6dfb7081326308689"],["archives/2018/12/index.html","f6bbeb2a4861458f82bb2ef5b70f9974"],["archives/2018/12/page/2/index.html","e86c4a5d3705ad4e2c3d31bd5e09d2c9"],["archives/2018/index.html","148058e2c52618cf86a0bb090566f6f3"],["archives/2018/page/2/index.html","9804e9cb5f9280d990daeeed9d9cf40e"],["archives/2018/page/3/index.html","fd90e746325699b502b77a3f163986d9"],["archives/2018/page/4/index.html","4a89f3afccae21ef8ccf95edae909625"],["archives/2019/01/index.html","343000f414bdd01049b116609f21bef9"],["archives/2019/01/page/2/index.html","598ab0164a5a1403915c506cbca42f0e"],["archives/2019/02/index.html","e5395c6dd545d581f767ef3a9b146e0e"],["archives/2019/03/index.html","e0d04f3dc00a763964848180afb98db7"],["archives/2019/04/index.html","d83947e00cbc0189f7ca772fe4bf258f"],["archives/2019/05/index.html","2f18a1b9476dded8166b2fb3d284b8bc"],["archives/2019/06/index.html","930db88cacc507f4c100beaba06d93e8"],["archives/2019/index.html","34d3b335ac7ad576d51e7986e3b91df1"],["archives/2019/page/2/index.html","77e774fab58f92b6788d679f3faa15d7"],["archives/2019/page/3/index.html","cedd4da707ff796fd98265f6a85b3673"],["archives/index.html","abb759c5753f53a281d2ecf21d946749"],["archives/page/2/index.html","3d7b6251cbfca48c5286d2c51aa27917"],["archives/page/3/index.html","89e263fb363a1abd78216eb85b4eb01c"],["archives/page/4/index.html","e68aed5224a878d0e6c426e782135248"],["archives/page/5/index.html","6957db54a1e672c23d69d87d4e51ec2a"],["archives/page/6/index.html","3445e0a08f0a59234b6612ff62e73adc"],["archives/page/7/index.html","fb7632a59ba7cb868b92d80efb6bd11f"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/rtl.css","b476f85e1db68efa106c96bcc057be07"],["css/style.css","7351ed30f00fb2936c8ab1bd129b1f64"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["index.html","82fecedf7268d9ec2a3404d4222fc319"],["js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/search.js","979267f49883101943c347bd4da4c36c"],["lib/font-awesome/css/all.min.css","20a9ce516eaea76da29a23adc43e8998"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","827db4701002fde373ab3edc76cba3d6"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","7c7f0699483069fa04168df78ccdf720"],["page/2/index.html","2ed14889fba2df6b4ae4c6947993b111"],["page/3/index.html","1a3c6f4ac9535eabf42a4b3f4ed0e2ad"],["page/4/index.html","431bf1c70511b2b9ff64bed350aa08a6"],["page/5/index.html","72363c51180a472842267fbbc7a21f63"],["page/6/index.html","68c7622d608fc67e9b71772e007baafd"],["page/7/index.html","a6c8b41a61588e11873e92e235ff45a0"],["source/tags/JS/index.html","dad21917ddb77f2fbcbc74cf7dfffbaa"],["source/tags/ReactNative/index.html","fcc1cfb4a15243b03a42acb793f87092"],["source/tags/Rust/index.html","a0c6d3114369b29941b10477cd36f25e"],["source/tags/angular/index.html","40d2eb81c5153adfbcbd3a098ac79a5c"],["source/tags/css/index.html","66889e17ffb95170e3d714f0581de8fa"],["source/tags/dart/index.html","42eb9f7f95e2ea7d172888afd43ffd28"],["source/tags/express/index.html","2a89c4af1becbdd8041ccf4a94f8c53a"],["source/tags/flutter/index.html","8bd2d8b6a06f3d604ad61ee7fa546552"],["source/tags/fp/index.html","095ba4a705b93dfedde7d7dfb1a8b9d2"],["source/tags/graphQL/index.html","099a08ab684dae0b0c59c59354c0e9b6"],["source/tags/https/index.html","60019fb3853d5f7253e3d648059189d1"],["source/tags/mongodb/index.html","103112baaf20c8b7b86a11ab5aa35620"],["source/tags/mysql/index.html","b6a0f293402783b5ad42bf1b192a3984"],["source/tags/nest/index.html","e6a6682cc5d3739bc07ccbeb8392d6e2"],["source/tags/nestjs/index.html","22a4f780c22e341afe26db9fe8f15966"],["source/tags/next-js/index.html","ee1a151ff42141f5825931b3f61ea1c4"],["source/tags/node/index.html","d346f7c3ad5a5343a760443b66ce562d"],["source/tags/nodejs/index.html","2466c3b958a0c9a07440046dbd203328"],["source/tags/puppeteer/index.html","cb35b69ba5d7409c55f9cf8142c342c0"],["source/tags/ramda-js-函数式/index.html","a7d7a6e1bd11ded186b5c74fe6912c2c"],["source/tags/react/index.html","00743c1f629d01b2b02abf752d827ade"],["source/tags/sequelize/index.html","e036490e4cfa201a19048cf9dee89adb"],["source/tags/serverless/index.html","db49857158659a0a5c29bbca9e33282a"],["source/tags/typeORM/index.html","45d1061ff125e02897586cbe7ad720c2"],["source/tags/typescript/index.html","d54fa6de02ea6eed06aa231f3451bade"],["source/tags/web/index.html","3645b15bb6bbe1f06dcb4cfc18c69fda"],["source/tags/work/index.html","e0ba8e99d1d108d5f74f177099a79e17"],["source/tags/wxProgram/index.html","1564be2cc5c0afb1375654f80eddd40e"],["source/tags/效果/index.html","34ef036afac74d40a31c251a2fd51796"],["sw.js","e2466e11e4c2035e19c7f8f03017ec1f"],["tags/JS/index.html","a496edf891398546cfbb92af6e2af540"],["tags/ReactNative/index.html","bc63ea8dd09b9a25a8c67ff3e4b694ee"],["tags/Rust/index.html","77a63d20371b755fd43be0b1fe0da6f3"],["tags/angular/index.html","1107e8478bec8018aadcd9bae0c201fc"],["tags/css/index.html","6076864768c681a5caa1440d3f441d81"],["tags/dart/index.html","d0987021860ffee5fcbf3cb8d41f7664"],["tags/express/index.html","2702d0cbbd061fa367adcaa784ee2996"],["tags/flutter/index.html","20a37202e892657e031d16cd52ad51fa"],["tags/fp/index.html","7b95a9e3384508957ef3bc8cca05f4be"],["tags/graphQL/index.html","27d169bf8a49ceddf9f2283ab1d574fe"],["tags/https/index.html","b1c09e356c4a34c1be0d4615414c3e4f"],["tags/index.html","34c9dea789ff00df788d98252db8b492"],["tags/javascript/index.html","9b1d95cf0649e6d5e9e33c6fef9b8695"],["tags/mongodb/index.html","94955b974d2eea6c674639e50acc73e1"],["tags/mysql/index.html","a8eed85eec6a33ee5a9466dd3eb064ea"],["tags/nest/index.html","b6bffb53930503ae3223212d2d0f7d49"],["tags/nestjs/index.html","bb5adcdfe919f9e93fb9e99db9565bfd"],["tags/next-js/index.html","a5d69c12f49ba7ff25f0596b6e7c105d"],["tags/node/index.html","77c38a31105dc20189afd072fac71fb0"],["tags/nodejs/index.html","f9224555bb55805e6cfe3bf0396a3ee1"],["tags/puppeteer/index.html","1a68244058d09c78897ced09f604bc1f"],["tags/ramda-js-函数式/index.html","64e21cb8c870a890b21964ca6c1d6981"],["tags/react/index.html","d79099d5bb7e093677ca002d502d8f0e"],["tags/sequelize/index.html","09ca9749764b382aab608f049545d57f"],["tags/serverless/index.html","9cd27b23fe85f759e6e6153dd61a8781"],["tags/typeORM/index.html","32127efd27c453d957fe1f16ccc20f00"],["tags/typescript/index.html","494d7cae947f3b830c36e531a96d7eb6"],["tags/web/index.html","806cd43e14a01adb06553ea7da1c3c4c"],["tags/work/index.html","eee45e8d6c1f8ff2d56b65da19ede7e5"],["tags/wxProgram/index.html","989e31a49a498a43bcf9d810266357e6"],["tags/效果/index.html","aa728e0b2962acbd4e0e73e9d700784a"]];
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







