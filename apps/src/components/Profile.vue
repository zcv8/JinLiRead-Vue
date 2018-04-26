<template>
    <div>
        <div class="container person">
            <div class="row">
                <div class="col-xs-16 main">
                    <div class="main-top">

                        <a class="avatar" href="/u/0b5ab5b9d3a1">
                            <img src="//upload.jianshu.io/users/upload_avatars/4111605/92756e53c8b0?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240" alt="240">
                        </a>

                        <div class="title">
                            <a class="name" href="/u/0b5ab5b9d3a1">Code非白即黑</a>
                            <i class="iconfont ic-man"></i>
                        </div>
                        <div class="info">
                            <ul>
                                <li>
                                    <div class="meta-block">
                                        <a href="/users/0b5ab5b9d3a1/following">
                                            <p>0</p>
                                            关注
                                            <i class="iconfont ic-arrow"></i>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div class="meta-block">
                                        <a href="/users/0b5ab5b9d3a1/followers">
                                            <p>0</p>
                                            粉丝
                                            <i class="iconfont ic-arrow"></i>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div class="meta-block">
                                        <a href="/u/0b5ab5b9d3a1">
                                            <p>1</p>
                                            文章
                                            <i class="iconfont ic-arrow"></i>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div class="meta-block">
                                        <p>1571</p>
                                        <div>字数</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="meta-block">
                                        <p>0</p>
                                        <div>收获喜欢</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <ul class="trigger-menu" data-pjax-container="#list-container">
                        <li class="active">
                            <a href="/u/0b5ab5b9d3a1?order_by=shared_at">
                                <i class="iconfont ic-articles"></i> 文章</a>
                        </li>
                        <li class="">
                            <a href="/users/0b5ab5b9d3a1/timeline">
                                <i class="iconfont ic-feed"></i> 动态</a>
                        </li>
                        <li class="">
                            <a href="/u/0b5ab5b9d3a1?order_by=commented_at">
                                <i class="iconfont ic-latestcomments"></i> 最新评论</a>
                        </li>
                        <li class="">
                            <a href="/u/0b5ab5b9d3a1?order_by=top">
                                <i class="iconfont ic-hot"></i> 热门</a>
                        </li>
                    </ul>

                    <div id="list-container">
                        <!-- 文章列表模块 -->
                        <ul class="note-list" infinite-scroll-url="/u/0b5ab5b9d3a1?order_by=shared_at">

                            <li id="note-9645357" data-note-id="9645357" class="">
                                <div class="content">
                                    <div class="author">
                                        <a class="avatar" target="_blank" href="/u/0b5ab5b9d3a1">
                                            <img src="//upload.jianshu.io/users/upload_avatars/4111605/92756e53c8b0?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
                                        </a>
                                        <div class="info">
                                            <a class="nickname" target="_blank" href="/u/0b5ab5b9d3a1">Code非白即黑</a>
                                            <span class="time" data-shared-at="2017-02-28T23:30:47+08:00">2017.02.28 23:30</span>
                                        </div>
                                    </div>
                                    <a class="title" target="_blank" href="/p/3096650aeb39">Python总结(一)</a>
                                    <p class="abstract">
                                        Python基础类型： Tuple元组，内容不可改变，但是允许元素内部存在list等类型的元素，并且允许改变列表的值，所谓内容不可变指的是在内存中指向的地址是不变的。 在创建...
                                    </p>
                                    <div class="meta">

                                        <a target="_blank" href="/p/3096650aeb39">
                                            <i class="iconfont ic-list-read"></i> 167
                                        </a>
                                        <a target="_blank" href="/p/3096650aeb39#comments">
                                            <i class="iconfont ic-list-comments"></i> 0
                                        </a>
                                        <span>
                                            <i class="iconfont ic-list-like"></i> 0</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-xs-7 col-xs-offset-1 aside">
                    <div class="title">个人介绍</div>
                    <a class="function-btn" data-action="start-edit-intro" href="javascript:void(0)">
                        <i class="iconfont ic-edit-s"></i>编辑</a>
                    <form class="profile-edit js-intro-form" data-type="json" id="edit_user_4111605" action="/users/0b5ab5b9d3a1" accept-charset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="_method" value="patch">
                        <textarea name="user[intro]" id="user_intro"></textarea>
                        <input type="submit" name="commit" value="保存" class="btn btn-hollow" data-action="save-edit-intro" data-disable-with="保存">
                        <a data-action="cancel-edit-intro" href="javascript:void(null);">取消</a>
                    </form>
                    <div class="description">
                        <div class="js-intro"></div>
                        <a class="social-icon-sprite social-icon-weibo" target="_blank" href="http://weibo.com/u/5705320578"></a>

                    </div>
                    <div id="user-publications">
                        <!---->
                    </div>
                    <div id="user-courses">
                        <!---->
                    </div>
                    <ul class="list user-dynamic">
                        <li>
                            <a href="/users/0b5ab5b9d3a1/subscriptions">
                                <i class="iconfont ic-collection"></i>
                                <span>我关注的专题/文集/连载</span>
                            </a>
                        </li>
                        <li>
                            <a href="/users/0b5ab5b9d3a1/liked_notes">
                                <i class="iconfont ic-like"></i>
                                <span>我喜欢的文章</span>
                            </a>
                        </li>
                    </ul>
                    <!-- 专题和文集 -->
                    <div>
                        <div>
                            <div class="title">
                                我创建的专题
                            </div>
                            <a href="/collections/new" target="_blank" class="function-btn new-collection-btn">
                                <i class="iconfont ic-follow"></i>
                                <span>新建专题</span>
                            </a>
                            <ul class="list">
                                <li>
                                    <a href="/c/cf4936c75042" target="_blank" class="avatar-collection"><img src="//upload.jianshu.io/collections/images/340422/158PICT58PICEQt.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"></a>
                                    <a href="/c/cf4936c75042" target="_blank" class="name">Python技术总结</a>
                                </li>
                                <li>
                                    <!---->
                                    <!---->
                                </li>
                            </ul>
                            <!---->
                        </div>
                        <!---->
                        <div>
                            <div class="title">
                                我的文集
                            </div>
                            <ul class="list">
                                <li>
                                    <a href="/nb/8523146" target="_blank">
                                        <i class="iconfont ic-search-notebook"></i>
                                    </a>
                                    <a href="/nb/8523146" target="_blank" class="name">
                                        日记本
                                        <!---->
                                    </a>
                                </li>
                                <li>
                                    <!---->
                                    <!---->
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Profile"
};
</script>

<style>
.container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
}
.person .row {
    padding-top: 30px;
}
.person .main {
    padding-right: 0;
}
.col-xs-16 {
    width: 66.66667%;
}
.person .main .main-top {
    margin-bottom: 20px;
}
.person .main .main-top .avatar {
    float: left;
    width: 80px;
    height: 80px;
    margin-left: -2px;
}
.avatar {
    display: block;
    cursor: pointer;
}
.avatar img {
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 50%;
}
.person .main .main-top .title {
    padding: 5px 0 0 100px;
}
.person .main .main-top .title .name {
    display: inline;
    font-size: 21px;
    font-weight: 700;
    vertical-align: middle;
}
.person .main .main-top .ic-man,
.person .main .main-top .ic-woman {
    font-size: 17px;
    vertical-align: middle;
}
.person .main .main-top .info {
    margin-top: 5px;
    padding-left: 100px;
    font-size: 14px;
}
.person .main .main-top .info ul li {
    display: inline-block;
}
li {
    line-height: 20px;
}
.trigger-menu {
    margin-bottom: 20px;
    border-bottom: 1px solid #f0f0f0;
    font-size: 0;
    list-style: none;
}
.trigger-menu li.active {
    border-bottom: 2px solid #646464;
}
.trigger-menu li {
    position: relative;
    display: inline-block;
    padding: 8px 0;
    margin-bottom: -1px;
}
.note-list {
    margin: 0;
    padding: 0;
    list-style: none;
}
.note-list li {
position: relative;
width: 100%;
margin: 0 0 17px;
padding: 0 2px 17px 0;
border-bottom: 1px solid #f0f0f0;
word-wrap: break-word;
}
.note-list .author {
margin-bottom: 14px;
font-size: 13px;
}
.note-list .author .avatar, .note-list .author .info {
display: inline-block;
vertical-align: middle;
}
.note-list .author .avatar, .note-list .author .info {
display: inline-block;
vertical-align: middle;
}
.note-list .author .info .nickname {
vertical-align: middle;
}
.note-list .author a {
color: #333;
}
.note-list .author .info span {
display: inline-block;
padding-left: 3px;
color: #969696;
vertical-align: middle;
}
.note-list .abstract {
margin: 0 0 8px;
font-size: 13px;
line-height: 24px;
}
.note-list .meta {
padding-right: 0!important;
font-size: 12px;
font-weight: 400;
line-height: 20px;
}
</style>

