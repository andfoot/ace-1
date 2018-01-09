<%@ page language="java" contentType="text/html; charset=utf-8"
pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="cn">
<head>
    <meta charset="utf-8">
    <title>常德融媒</title>
    <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
    <meta name="format-detection" content="telephone=no"/>
    <meta name="data-spm" content="zy-spot-web.v3">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/content/www/css/mobase.css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/content/www/lib/prismplayer/index.css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/content/www/lib/photoswipe-4.1.1/photoswipe.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/content/www/lib//photoswipe-4.1.1/default-skin.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/content/www/css/iconfont.css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/content/www/css/info.css"/>
    <script src="${pageContext.request.contextPath}/content/www/js/init-rem.js"></script>
</head>
<body>
<div class="fn-contain">
    <div id="j-liveinfo" class="xcy-liveinfo">
        <script type="text/template">
            <div class="view">
                {@if data.type == 4}

                <!-- state：8=图片、32=视屏、其他=直播   -->
                {@if data.state == 8}
                {@if data.cover && data.cover != 'https://xcycdn.zhongguowangshi.com'}
                <img src="${data.cover}?x-oss-process=image/resize,m_fill,w_750,h_422,limit_0">
                {@else}
                <img src="//xcycdn.zhongguowangshi.com/live-img/ic_default_pic@2x.png?x-oss-process=image/resize,m_fill,w_750,h_422,limit_0">
                {@/if}
                {@else if data.state == 32}
                <div id="j-livevideo" class="large-video">
                    <div class="playtitle">
                        <div id="j-v-close" class="v-close"><i></i></div>
                        <div class="text"><span>正在播放：</span>
                            <p>${data.topic}</p></div>
                    </div>
                    <div id="j-livevideo-main" class="videowrap fn-hide">
                        <div id="j-video-controls" class="videocontrols fn-hide">
                            <div class="controls">
                                <span class="c_play"></span>
                                <span class="c_fullscren"></span>
                                <div class="c_timeline fn-hide">
                                    <span class="playtime">00:00/00:00</span>
                                    <span class="starttime">00:00</span>
                                    <span class="endtime">00:00</span>
                                    <div class="timeline">
                                        <p class="line overline"><em></em></p>
                                        <p class="line"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="j-video-wrap"></div>
                    </div>
                    <div id="j-v-loading" class="v-loading fn-hide"><i></i></div>
                    <div id="j-v-loading-new" class="v-loading-new fn-hide">
                        <div class="v-logo"></div>
                        <div class="v-line">
                            <div class="v-line-s-box">
                                <div></div>
                            </div>
                        </div>
                        <p>即将播放...</p>
                    </div>
                    <div id="j-livevideo-tip" class="playposter">
                        <div class="v-mask fn-hide"></div>
                        <span class="playbtn"></span>
                        <div class="tip fn-hide">
                            <p>获取不到视频画面，请刷新重试</p>
                        </div>
                        {@if data.cover && data.cover != 'https://xcycdn.zhongguowangshi.com'}
                        <img src="${data.cover}?x-oss-process=image/resize,m_fill,w_750,h_422,limit_0">
                        {@else}
                        <img src="//xcycdn.zhongguowangshi.com/live-img/ic_default_pic@2x.png?x-oss-process=image/resize,m_fill,w_750,h_422,limit_0">
                        {@/if}
                    </div>
                </div>
                {@else}
                <div id="j-livevideo">
                    <div class="playtitle">
                        <div id="j-v-close" class="v-close"><i></i></div>
                        <div class="text"><span>正在播放：</span>
                            <p>${data.topic}</p></div>
                    </div>
                    <div id="j-livevideo-main" class="videowrap fn-hide">
                        <div class="videotypelist fn-hide">
                            <ul>
                                <li data-type="hd">高清</li>
                                <li data-type="bd">标清</li>
                                <li data-type="sd">低清</li>
                            </ul>
                        </div>
                        <div id="j-video-controls" class="videocontrols fn-hide">
                            <div class="controls">
                                <span class="c_play"></span>
                                <span class="c_fullscren"></span>
                                <span class="c_videotype fn-hide">标清</span>
                            </div>
                        </div>
                        <div id="j-video-wrap"></div>
                    </div>
                    <div id="j-v-loading" class="v-loading fn-hide"><i></i></div>
                    <div id="j-v-loading-new" class="v-loading-new fn-hide">
                        <div class="v-logo"></div>
                        <div class="v-line">
                            <div class="v-line-s-box">
                                <div></div>
                            </div>
                        </div>
                        <p>即将播放...</p>
                    </div>
                    <div id="j-livevideo-tip" class="playposter">
                        <div class="v-mask fn-hide"></div>
                        <span class="playbtn"></span>
                        <div class="tip fn-hide">
                            <p>获取不到直播画面，请刷新重试</p>
                        </div>
                        {@if data.cover && data.cover != 'https://xcycdn.zhongguowangshi.com'}
                        <img src="${data.cover}?x-oss-process=image/resize,m_fill,w_750,h_422,limit_0">
                        {@else}
                        <img src="//xcycdn.zhongguowangshi.com/live-img/ic_default_pic@2x.png?x-oss-process=image/resize,m_fill,w_750,h_422,limit_0">
                        {@/if}
                    </div>
                </div>
                {@/if}

                <!--
                <div id="j-replayvideo" class="videomsg fn-hide">
                  <div class="tip">哎呀，摄像头被挡住了，请稍后再试</div>
                </div>
                <div id="j-livevideo">
                {@if !ispc}
                {@if data.cover && data.cover != 'https://xcycdn.zhongguowangshi.com'}
                  <video poster="${data.cover}?x-oss-process=image/resize,m_fill,w_750,h_422,limit_0" src="${data.playStreamUrl}" controls="controls" playsinline="playsinline" webkit-playsinline="webkit-playsinline"></video>
                {@else}
                  <video poster="//xcycdn.zhongguowangshi.com/live-img/ic_default_pic@2x.png?x-oss-process=image/resize,m_fill,w_750,h_422,limit_0" src="${data.playStreamUrl}" controls="controls" playsinline="playsinline" webkit-playsinline="webkit-playsinline"></video>
                {@/if}
                {@/if}
                </div>
                -->
                {@else}
                {@if data.cover}
                <img src="${data.cover}?x-oss-process=image/resize,m_fill,w_750,h_422,limit_0">
                {@else}
                <img src="//xcycdn.zhongguowangshi.com/live-img/ic_default_pic@2x.png?x-oss-process=image/resize,m_fill,w_750,h_422,limit_0">
                {@/if}
                {@/if}
            </div>
            <div class="content">
                <div class="title">${data.topic}</div>
                <div class="org">
                    <p id="j-orglogo" class="icon j-orgname-back" data-spm="org"
                       data-spm-click="category=item;action=orgclick"></p>
                    <div id="j-orgname" class="orgname j-orgname-back" data-spm="org"
                         data-spm-click="category=item;action=orgclick"></div>
                    <div id="j-city" class="other">
                        <div class="xc-share" id="j-share"><i></i></div>
                        <div class="xc-liker" id="j-xc-liker">
                            <i><em class="zan zaning"></em></i>
                            {@if data.likeNums}
                            <span class="zan-num">${data.likeNums}</span>
                            {@else}
                            <span class="zan-num">0</span>
                            {@/if}
                        </div>
                        <!-- <div id="j-city-right" class="fn-right">
                            {@if data.state == 8}
                            <div class="disabled">预告</div>
                            {@else if data.state == 32}
                            <div class="disabled">已结束</div>
                            {@else}
                            <em class="playx"></em>
                            <div class="playing">直播中</div>
                            {@/if}

                        </div> -->
                        <!--
                        <div class="fn-left">浏览${data.numOfPartake}</div>
                        -->
                    </div>
                    <ul class="share-list none" id="j-tpList">
                        <li class="j-share-weibo"><img src="./static/img/share_weibo.png"></li>
                        <li class="j-share-weixin"><img src="./static/img/share_weixin.png"></li>
                        <li class="j-share-qq"><img src="./static/img/share_qq.png"></li>
                    </ul>
                    <!--
                    <p class="bd-icon"></p>
                    <p class="bd">342个现场</p>
                    -->
                </div>
                {@if data.remark}
                <div id="j-desc" class="desc">
                    <em class="act fn-hide"></em>
                    <p><em>摘要：</em>${data.remark}</p>
                </div>
                {@/if}
                {@if data.city}
                <div class="location"><i></i><span>${data.city}</span></div>
                {@/if}
            </div>
            <div class="none" id="j-getDataState">${data.state}</div>
        </script>
    </div>
    <div class="mask none" id="mask"></div>
    <div class="xcy-sort-place">
        <div class="xcy-sort">
            <p>
                <span class="sort-btn none" id="j-sort">倒序</span>
            </p>
        </div>
    </div>
    <div id="j-report" class="xcy-report">
        <script type="text/template">
            <ul>
                {@each data as item}
                <li data-id="${item.reportId}">
                    <div class="wrap">
                        <div class="headpic">
                            {@if item.head}
                            <img data-lazy-img="${item.head}?x-oss-process=image/resize,m_mfit,w_108,h_108">
                            {@else}
                            <img src="./static/img/head_default.png">
                            {@/if}
                        </div>
                        <div class="reporter fn-clear">
                            <span class="fn-ellipsis">${item.reporter}</span>
                            <em{@if item.createDate == "刚刚"} class="ganggang"{@/if}>${item.createDate}</em>
                        </div>
                        {@if item.content}
                        <div class="content">$${item.content|reportContent}</div>
                        {@/if}
                        {@if item.type == 4}
                        <div class="video" data-v-poster="${item.thumbnail}" data-v-src="${item.video}">
                            <div class="videocontrols fn-hide">
                                <div class="controls">
                                    <span class="c_play"></span>
                                    <span class="c_fullscren"></span>
                                    <!-- <div class="c_timeline fn-hide"> -->
                                    <div class="c_timeline fn-hide">
                                        <span class="playtime">00:00/00:00</span>
                                        <span class="starttime">00:00</span>
                                        <span class="endtime">00:00</span>
                                        <div class="timeline">
                                            <p class="line overline"><em></em></p>
                                            <p class="line"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="playposter">
                                <div class="v-mask fn-hide"></div>
                                <span class="playbtn"></span>
                                <div class="tip fn-hide">
                                    <p>获取不到视频画面，请刷新重试</p>
                                </div>
                                {@if item.thumbnail}
                                <img src="${item.thumbnail}">
                                {@else}
                                <img src="//xcycdn.zhongguowangshi.com/live-img/ic_default_pic@2x.png?x-oss-process=image/resize,m_fill,w_750,h_422,limit_0">
                                {@/if}
                            </div>
                            <!-- <div class="v-loading-new fn-hide">
                              <div class="v-logo"></div>
                              <div class="v-line"><div class="v-line-s-box"><div></div></div></div>
                              <p>即将播放...</p>
                            </div> -->
                            <div class="v-loading fn-hide"><i></i></div>
                            <video playsinline="playsinline" webkit-playsinline="webkit-playsinline"></video>
                        </div>
                        {@else if item.imageList && item.imageList.length > 0}
                        <div class="pictures" data-count="${item.imageList.length}">
                            <div class="j-photoswiper imglist${item.imageList.length}">
                                {@each item.imageList as imgitem, imgindex}
                                <span class="img${imgindex}" data-url="${imgitem.url}"
                                      data-water="${imgitem.watermarkConfig}" data-water-bus="${item.watermarkConfig}"
                                      data-w="${imgitem.w}" data-h="${imgitem.h}"></span>
                                {@/each}
                            </div>
                        </div>
                        {@/if}
                        <div class="down fn-clear">
                            <div class="city">${item.city}</div>
                            <div class="act fn-hide"></div>
                            <div class="actlayer">
                                <p class="j-actzan" data-id="${item.reportId}">
                                    <i class="zan-w"><em class="zan"></em></i><span>赞</span>
                                </p>
                                <p class="line"></p>
                                <p class="j-actping" data-id="${item.reportId}">
                                    <i class="ping-w"></i><span>评论</span>
                                </p>
                            </div>
                        </div>
                        <div id="j-remark-${item.reportId}" class="remark fn-hide">
                            <em class="arrow"></em>
                            <div class="liker fn-hide" data-liker="${item.liker}"></div>
                            <div class="line fn-hide"></div>
                            <div class="list fn-hide">
                                {@each item.comments as citem}
                                <p>
                                    <span>${citem.reviewer}: </span>${citem.ccontent}
                                </p>
                                {@/each}
                            </div>
                        </div>
                </li>
                {@/each}
            </ul>
        </script>
    </div>
    <div id="j-nonews" class="xcy-nonews fn-hide">
        稍等，新闻马上就到
    </div>
    <div id="j-listmore" class="xcy-more">
        <span>正在加载...</span>
    </div>
    <!-- <div id="j-listmore" class="xcy-more">
      <div class="-v"></div>
      <div class="loding-con"></div>
    </div> -->
    <div class="xcy-totalcount"></div>
    <div class="xcy-copyright">
        <p>Copyright &copy; 2016 现场云</p>
        <p>由现场云团队提供技术支持</p>
    </div>

    <div id="j-fullview" class="xcy-fullview">
        <div class="wrap">
            <div id="j-viewpic" class="pic"></div>
            <div id="j-viewicon" class="icon"></div>
            <div class="download fn-hide">
                <label><input type="checkbox"> 原图</label>
                <a download target="_blank" href="#"></a>
            </div>
            <div class="close"></div>
        </div>
    </div>

    <div class="app-download-place"></div>
    <div class="app-download">
        <a href="javascript:void(0);" data-spm-click="category=item;action=closeAppDownload" class="close"></a>
        <span class="icon"></span>
        <h4></h4>
        <a href="javascript:void(0)" data-spm-click="category=item;action=downloadApp" class="download">下载APP</a>
    </div>
</div>

<div class="share-box" id="shareTpList">
    <div class="s-arrows"></div>
    <div class="s-text"></div>
    <div class="s-btn"></div>
</div>

<div id="j-remark" class="fn-hide">
    <!-- <div class="xcy-remark-place"></div> -->
    <div class="xcy-remark">
        <div class="wrap">
            <div class="bar">
                <form id="j-remarkform">
                    <input type="hidden" name="reportId" value="0">
                    <input type="text" placeholder="评论" name="content" autocomplete="off" maxlength="200">
                    <input type="submit" value="发送">
                </form>
            </div>
        </div>
    </div>
</div>

<!-- Root element of PhotoSwipe. Must have class pswp. -->
<div id="j-pswp" class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="pswp__bg"></div>
    <div class="pswp__scroll-wrap">
        <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
        </div>
        <div class="pswp__ui pswp__ui--hidden">
            <div class="pswp__top-bar">
                <div class="pswp__counter"></div>
                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                <button class="pswp__button pswp__button--share" title="Share"></button>
                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
                <!-- element will get class pswp__preloader--active when preloader is running -->
                <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                        <div class="pswp__preloader__cut">
                            <div class="pswp__preloader__donut"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div class="pswp__share-tooltip"></div>
            </div>
            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
            <div class="pswp__caption">
                <div class="pswp__caption__center"></div>
            </div>
        </div>
    </div>
</div>

<script src="${pageContext.request.contextPath}/content/www/js/jweixin-1.0.0.js"></script>
<script src="${pageContext.request.contextPath}/content/www/lib/prismplayer/prism-min.js"></script>
<script src="${pageContext.request.contextPath}/content/www/js/zepto-1.2.0.min.js"></script>
<script src="${pageContext.request.contextPath}/content/www/js/juicer-min.js"></script>
<script src="${pageContext.request.contextPath}/content/www/js/sugar-h5.js?_t=1510794885000"></script>
<script src="${pageContext.request.contextPath}/content/www/js/roll.js?_t=1507519928000"></script>
<script src="${pageContext.request.contextPath}/content/www/lib/photoswipe-4.1.1/photoswipe.js"></script>
<script src="${pageContext.request.contextPath}/content/www/lib/photoswipe-4.1.1/photoswipe-ui-default.js"></script>
<script src="${pageContext.request.contextPath}/content/www/js/common.js?_t=1511451507000"></script>

<script src="${pageContext.request.contextPath}/content/www/js/photoswipe.js?_t=1511436259000"></script>
<script src="${pageContext.request.contextPath}/content/www/js/soshm.js"></script>
<script src="${pageContext.request.contextPath}/content/www/js/info.js?_t=1511967632000"></script>
<script src="${pageContext.request.contextPath}/content/www/js/spm.js"></script>
<script src="${pageContext.request.contextPath}/content/www/js/z_stat.js"></script>
</script>
</body>
</html>