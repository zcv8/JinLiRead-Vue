<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb" style="background:none;padding-left:0rem;">
        <li class="breadcrumb-item">
          <a href="#/">首页</a>
        </li>
        <li class="breadcrumb-item">
          <a href="#/articles">文章</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">{{article.title}}</li>
      </ol>
    </nav>
    <div class="articleMain">
      <h2>{{article.title}}</h2>
      <div class="articleProps">
        <span>频道：{{article.channel.name}}</span>
        <span>阅读：{{article.readcount}}</span>
        <span>评论：100</span>
        <span>喜欢：20</span>
        <span>赞赏：5</span>
        <span>作者：{{article.user.username}}</span>
      </div>
      <hr>
      <p class="articleContent" v-html="article.content"></p>
    </div>
    <div class="show-foot">
      <a class="notebook" href="#">
        <i class="iconfont ic-search-notebook"></i>
        <span>IT互联网</span>
      </a>
      <div class="copyright" data-toggle="tooltip" data-html="true" data-original-title="转载请联系作者获得授权，并标注“简书作者”。">
        © 著作权归作者所有
      </div>
      <div class="modal-wrap" data-report-note="">
        <a id="report-modal">举报文章</a>
      </div>
    </div>
    <div class="follow-detail">
      <div class="info">
        <a class="avatar" href="/u/deeea9e09cbc">
          <img src="../assets/images/touxiang.jpeg">
        </a>
        <a class="btn btn-success follow" href="#">
          <i class="ion ion-plus-round"></i>
          <span>关注</span>
        </a>
        <a class="title">鹿先生</a>
        <p>写了 20 篇文章，被 57463 人关注，获得了 149990 个喜欢</p>
      </div>
      <div class="signature">个人微信：XXXX</div>
    </div>
    <div class="meta-bottom">
      <div data-v-6ddd02c6="" class="like">
        <div data-v-6ddd02c6="" class="btn like-group">
          <div data-v-6ddd02c6="" class="btn-like">
            <a data-v-6ddd02c6="">喜欢</a>
          </div>
          <div data-v-6ddd02c6="" class="modal-wrap">
            <a data-v-6ddd02c6="">20</a>
          </div>
        </div>
        <!---->
      </div>
      <div class="share-group">
        <a class="share-circle" data-action="weixin-share" data-toggle="tooltip" data-original-title="">
          <i class="ion ion-social-tux"></i>
        </a>
        <a class="share-circle" data-action="weibo-share" data-toggle="tooltip" href="#" data-original-title="">
          <i class="ion ion-social-github"></i>
        </a>
        <a class="share-circle" data-toggle="tooltip" href="#" target="_blank" data-original-title="">
          <i class="ion ion-social-snapchat"></i>
        </a>
        <a class="share-circle more-share" tabindex="0" data-toggle="popover" data-placement="top" data-html="true" data-trigger="focus" href="#" data-content="" data-original-title="" title="">更多分享</a>
      </div>
    </div>
    <div id="comment-list" class="comment-list">
      <div>
        <form class="new-comment">
          <a class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/4111605/92756e53c8b0?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114"></a>
          <textarea placeholder="写下你的评论..."></textarea>
          <div class="write-function-block">
            <div data-v-b36e9416="" class="emoji-modal-wrap">
              <a data-v-b36e9416="" class="emoji">
                <i data-v-b36e9416="" class="ion-happy-outline"></i>
              </a>
              <!---->
            </div>
            <div class="hint">Ctrl+Enter 发表</div>
            <a class="btn btn-send">发送</a>
            <a class="cancel">取消</a>
          </div>
        </form>
        <!---->
      </div>
      <div id="normal-comment-list" class="normal-comment-list">
        <div>
          <div>
            <div class="top-title">
              <span>35条评论</span>
              <a class="author-only">只看作者</a>
              <a class="close-btn" style="display: none;">关闭评论</a>
              <div class="pull-right">
                <a class="active">按喜欢排序</a>
                <a class="">按时间正序</a>
                <a class="">按时间倒序</a>
              </div>
            </div>
          </div>
          <!---->
          <!---->
          <div id="comment-22868137" class="comment">
            <div>
              <div class="author">
                <div data-v-f3bf5228="" class="v-tooltip-container" style="z-index: 0;">
                  <div class="v-tooltip-content">
                    <a href="/u/f2f3a52c9d44" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/9040811/e1e18b87-e501-49e9-98ea-62a6f73b5943.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114"></a>
                  </div>
                  <!---->
                </div>
                <div class="info">
                  <a href="/u/f2f3a52c9d44" target="_blank" class="name">娴线</a>
                  <!----><img src="//upload.jianshu.io/user_badge/22d8d123-271c-4d80-9c59-6990844a9e37" data-toggle="tooltip" data-original-title="简书会员" class="badge-icon">
                  <div class="meta">
                    <span>12楼 · 2018.04.16 11:23</span>
                  </div>
                </div>
              </div>
              <div class="comment-wrap">
                <p>昨天又重温了《爸爸去哪儿》第五季，被小宝宝们可爱的模样暖化了。印象深刻的是杜江在炒鸡蛋，嗯哼问爸爸鸡蛋痛吗？<br>我还在想这个问题该怎么回答才好呢？杜江说:鸡蛋被善良的小朋友吃到，它会很开心。💯</p>
                <div class="tool-group">
                  <a data-v-cdecbe24="" id="like-button-22868137" class="like-button">
                    <span data-v-cdecbe24="">16人赞</span>
                  </a>
                  <a class="">
                    <i class="ion ion-ios-chatboxes-outline"></i>
                    <span>回复</span>
                  </a>
                  <a class="report">
                    <span>举报</span>
                  </a>
                  <!---->
                </div>
              </div>
            </div>
            <div class="sub-comment-list">
              <div id="comment-17493153" class="sub-comment">
                <div>
                  <div data-v-f3bf5228="" class="v-tooltip-container" style="z-index: 0;">
                    <div class="v-tooltip-content">
                      <a href="/u/5660f46cfb43" target="_blank">矢屿</a>：
                    </div>
                    <!---->
                  </div>
                  <span>
                    <a href="/users/f5103a8bccc3" class="maleskine-author" target="_blank" data-user-slug="f5103a8bccc3">@孤空又灿烂的女孩</a> 对啊，很特别，而且语言能力很强</span>
                </div>
                <div class="sub-tool-group">
                  <span>2017.11.17 15:51</span>
                  <a class="">
                    <i class="iconfont ic-comment"></i>
                    <span>回复</span>
                  </a>
                  <a class="report">
                    <span>举报</span>
                  </a>
                  <!---->
                </div>
              </div>
              <div class="sub-comment more-comment">
                <a class="add-comment-btn">
                  <i class="ion ion-edit"></i>
                  <span>添加新评论</span>
                </a>
              </div>
              <div>
                <form class="new-comment">
                  <!---->
                  <textarea placeholder="写下你的评论..."></textarea>
                  <div class="write-function-block">
                    <div data-v-b36e9416="" class="emoji-modal-wrap">
                      <a data-v-b36e9416="" class="emoji">
                        <i data-v-b36e9416="" class="ion ion-happy-outline"></i>
                      </a>
                      <!---->
                    </div>
                    <div class="hint">Ctrl+Enter 发表</div>
                    <a class="btn btn-send">发送</a>
                    <a class="cancel">取消</a>
                  </div>
                </form>
                <!---->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!---->
      <div>
        <ul class="pagination">
          <li>
            <a href="#" class="active">1</a>
          </li>
          <li>
            <a>2</a>
          </li>
          <li>
            <a>3</a>
          </li>
          <li>
            <a>下一页</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style type="text/css">
.articleMain {
  padding-top: 0px;
  background: none;
  margin-bottom: 2rem;
}
.articleMain h2 {
  text-align: center;
}
.articleProps {
  height: 30px;
  line-height: 30px;
  margin-top: 15px;
  text-align: center;
}
.articleProps span {
  padding: 0px 10px;
}
.articleMain hr {
  margin-top: 5px;
}
.articleContent img {
  width: 100%;
}
.follow-detail {
  padding: 20px;
  background-color: hsla(0, 0%, 71%, 0.1);
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  font-size: 12px;
}
.avatar img {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 50%;
}
.follow-detail .info {
  min-height: 47px;
}
.follow-detail .avatar {
  float: left;
  margin-right: 10px;
  width: 48px;
  height: 48px;
}
.follow-detail .btn,
.follow-detail .user-follow-button-footer {
  float: right;
  margin-top: 4px;
  padding: 8px 0;
  width: 100px;
  font-size: 16px;
}
.follow-detail .info .title {
  margin-right: 3px;
  font-size: 17px;
  line-height: 1.8;
  vertical-align: middle;
}
.follow-detail .info img.badge-icon {
  margin-right: 3px;
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.follow-detail .info p {
  margin-bottom: 0;
  color: #969696;
}
.follow {
  color: #ffffff;
  border-color: #42c02e;
}
.follow,
.follow-cancel,
.follow-each,
.following {
  font-weight: 400;
  line-height: normal;
}
.follow-detail .signature {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e1e1e1;
  color: #969696;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.meta-bottom {
  margin-top: 40px;
  margin-bottom: 80px;
}
.like[data-v-6ddd02c6] {
  display: inline-block;
}
.like .like-group[data-v-6ddd02c6] {
  position: relative;
  padding: 13px 0 15px 0;
  font-size: 0;
  border: 1px solid #ea6f5a;
  border-radius: 40px;
}

.like .like-group.like-animation[data-v-6ddd02c6],
.like .like-group.active[data-v-6ddd02c6] {
  background-color: #ea6f5a;
}

.like .like-group .btn-like[data-v-6ddd02c6]:before {
  content: "";
  position: absolute;
  left: 12px;
  top: 2px;
  width: 50px;
  height: 50px;
  background-image: url(../assets/images/like.png);
  background-position: left;
  background-repeat: no-repeat;
  background-size: 1000px 50px;
}
.like .like-group .btn-like[data-v-6ddd02c6] {
  display: inline-block;
  font-size: 19px;
}
.like .like-group .btn-like[data-v-6ddd02c6] {
  display: inline-block;
  font-size: 19px;
}
.like .like-group .btn-like a[data-v-6ddd02c6] {
  position: relative;
  padding: 18px 30px 18px 55px;
  color: #ea6f5a;
}
.like .like-group .modal-wrap[data-v-6ddd02c6] {
  font-size: 18px;
  border-left: 1px solid rgba(236, 97, 73, 0.4);
  display: inline-block;
  margin-left: -15px;
}
.like .like-group .modal-wrap a[data-v-6ddd02c6] {
  color: #ea6f5a;
  padding: 18px 26px 18px 18px;
}
.meta-bottom .share-group {
  float: right;
  margin-top: 6px;
}
.meta-bottom .share-group .share-circle {
  width: 50px;
  height: 50px;
  font-size: 30px;
  margin-left: 5px;
  text-align: center;
  border: 1px solid #dcdcdc;
  border-radius: 50%;
  vertical-align: middle;
  display: inline-block;
}

.meta-bottom .share-group .more-share {
  width: auto;
  padding: 4px 18px;
  font-size: 14px;
  color: #9b9b9b;
  line-height: 40px;
  border-radius: 50px;
}

.meta-bottom .share-group .share-circle {
  height: 50px;
  margin-left: 5px;
  text-align: center;
  border: 1px solid #dcdcdc;
  vertical-align: middle;
  display: inline-block;
}

.comment-list {
  padding-top: 20px;
}

.comment-list .new-comment {
  position: relative;
  margin-left: 48px;
}

.comment-list form {
  margin: 0 0 20px;
}

.comment-list .new-comment .avatar {
  position: absolute;
  left: -48px;
}
.comment-list .avatar {
  margin-right: 5px;
  width: 38px;
  height: 38px;
  vertical-align: middle;
  display: inline-block;
}

.avatar img {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 50%;
  vertical-align: middle;
}

.comment-list .new-comment .sign-container,
.comment-list .new-comment textarea {
  padding: 10px 15px;
  width: 100%;
  height: 80px;
  font-size: 13px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background-color: hsla(0, 0%, 71%, 0.1);
  resize: none;
  display: inline-block;
  vertical-align: top;
  outline-style: none;
}

.comment-list .new-comment .write-function-block {
  height: 50px;
}

.emoji-modal-wrap[data-v-b36e9416] {
  position: relative;
}

.comment-list .new-comment .emoji {
  float: left;
  font-size: 20px;
  margin-top: 14px;
}

.comment-list .new-comment .emoji i {
  font-size: 20px;
  color: #969696;
}
.comment-list .new-comment .hint {
  float: left;
  margin: 20px 0 0 20px;
  font-size: 13px;
  color: #969696;
}

.comment-list .new-comment .btn-send {
  float: right;
  width: 78px;
  margin: 10px 0;
  padding: 8px 18px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  color: #fff !important;
  background-color: #42c02e;
  cursor: pointer;
  outline: none;
  display: block;
}

.comment-list .new-comment .cancel {
  float: right;
  margin: 18px 30px 0 0;
  font-size: 16px;
  color: #969696;
}

.comment-list .normal-comment-list {
  margin-top: 30px;
}

.comment-list .top-title {
  padding-bottom: 20px;
  font-size: 17px;
  font-weight: 700;
  border-bottom: 1px solid #f0f0f0;
}

.comment-list .top-title span {
  vertical-align: middle;
}

.comment-list .normal-comment-list .top-title .author-only {
  margin-left: 10px;
  padding: 4px 8px;
  font-size: 12px;
  color: #969696;
  border: 1px solid #e1e1e1;
  border-radius: 12px;
}

.comment-list .normal-comment-list .top-title .close-btn {
  margin-left: 10px;
  font-size: 12px;
  color: #969696;
}

.pull-right {
  float: right !important;
}

.comment-list .normal-comment-list .top-title .pull-right .active,
.comment-list .normal-comment-list .top-title .pull-right a:hover {
  color: #2f2f2f;
}
.comment-list .normal-comment-list .top-title .pull-right a {
  margin-left: 10px;
  font-size: 12px;
  font-weight: 400;
  display: inline-block;
}

.comment-list .normal-comment-list .top-title .pull-right a {
  margin-left: 10px;
  font-size: 12px;
  font-weight: 400;
  color: #969696;
  display: inline-block;
}

.comment-list .author {
  margin-bottom: 15px;
}

.comment-list .avatar {
  margin-right: 5px;
  width: 38px;
  height: 38px;
  vertical-align: middle;
  display: inline-block;
}

.comment-list .normal-comment-list .text {
  text-align: center;
  font-size: 12px;
  color: #969696;
}

.comment-list .comment {
  padding: 20px 0 30px;
  border-bottom: 1px solid #f0f0f0;
}
.note .post .comment-list .author {
  margin-bottom: 15px;
}
.v-tooltip-container {
  position: relative;
}

.v-tooltip-container,
.v-tooltip-content {
  display: inline-block;
}

.v-tooltip-container .v-tooltip-content {
  user-select: none;
}

.note .post .comment-list .comment p {
  font-size: 16px;
}

.note .post .comment-list p {
  margin: 10px 0;
  line-height: 1.5;
  word-break: break-word !important;
}

.comment-list .tool-group a {
  margin-right: 10px;
  font-size: 0;
  color: #969696;
  display: inline-block;
}

.like-button[data-v-cdecbe24] {
  position: relative;
  padding-left: 23px;
}

.like-button[data-v-cdecbe24]:before {
  content: "";
  position: absolute;
  left: -16px;
  top: -16px;
  width: 50px;
  height: 50px;
  background-image: url(../assets/images/zan.png);
  background-position: left;
  background-repeat: no-repeat;
  background-size: 1050px 50px;
}

.comment-list .tool-group a span {
  vertical-align: middle;
  font-size: 14px;
}

.comment-list .tool-group a {
  margin-right: 10px;
  font-size: 0;
  color: #969696;
  display: inline-block;
}

.comment-list .tool-group a i {
  margin-right: 5px;
  font-size: 18px;
  vertical-align: middle;
}

.comment-list .tool-group a span {
  vertical-align: middle;
  font-size: 14px;
}

.comment-list .comment-wrap .report {
  float: right;
  margin: 12px 0 0 10px;
  display: none;
}

.comment-list .info {
  display: inline-block;
  vertical-align: middle;
}

.comment-list .name {
  font-size: 15px;
  color: #333;
}

.comment-list .badge-icon {
  height: 17px;
  width: 17px;
}

.comment-list .meta {
  font-size: 12px;
  color: #969696;
}

.comment-list .meta span {
  margin-right: 6px;
}

.comment-list .sub-comment-list {
  margin-top: 20px;
  padding: 5px 0 5px 20px;
  border-left: 2px solid #d9d9d9;
}

.comment-list .sub-comment-list .new-comment {
  margin: 0;
}

.note .post .comment-list .new-comment {
  position: relative;
}

.comment-list .sub-comment-list .new-comment textarea {
  width: 100%;
}

.comment-list .new-comment textarea {
  padding: 10px 15px;
  height: 80px;
  font-size: 13px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background-color: hsla(0, 0%, 71%, 0.1);
  resize: none;
  display: inline-block;
  vertical-align: top;
  outline-style: none;
}

.comment-list .new-comment .write-function-block {
  height: 50px;
}

.comment-list .sub-comment-list .new-comment .emoji {
  margin: 15px 0 0;
}

.pagination {
  margin: 20px 0;
  text-align: center;
  display: block;
  padding-left: 0;
  border-radius: 4px;
}

.pagination li {
  margin: 0 5px;
  display: inline-block;
  line-height: 20px;
}

.pagination li:first-child a,
.pagination li:last-child a {
  border-radius: 20px;
}

.pagination > li:first-child > a,
.pagination > li:first-child > span {
  margin-left: 0;
}

.pagination .active {
  font-weight: 700;
  border: none;
  pointer-events: none;
}

.pagination > li > a,
.pagination > li > span {
  position: relative;
  float: left;
  padding: 6px 12px;
  line-height: 1.42857;
  text-decoration: none;
  border: 1px solid #ddd;
  background-color: #fff;
}

.pagination a {
  font-size: 14px;
  color: #969696 !important;
  border-radius: 20px;
}

.show-foot {
  margin-top: 30px;
  margin-bottom: 30px;
}

.show-foot .notebook {
  font-size: 12px;
  color: #c8c8c8;
}

.show-foot .notebook i {
  margin-right: 2px;
  font-size: 15px;
}

.show-foot .copyright {
  float: right;
  margin-top: 5px;
  font-size: 12px;
  line-height: 1.7;
  color: #c8c8c8;
}

.show-foot .modal-wrap {
  float: right;
  margin-top: 5px;
  margin-right: 20px;
  font-size: 12px;
  line-height: 1.7;
}

.show-foot .modal-wrap > a {
  color: #c8c8c8;
}

.comment-list .sub-comment {
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px dashed #f0f0f0;
}

.comment-list .sub-comment-list>div {
    margin: 0 0 5px;
    font-size: 14px;
    line-height: 1.5;
}

.comment-list .sub-comment-list a,  .comment-list .sub-comment-list a:hover {
    color: #3194d0;
}

.comment-list .sub-tool-group {
    font-size: 12px;
    color: #969696;
}

.comment-list .sub-tool-group a {
    margin-left: 10px;
    color: #969696;
}

.comment-list .sub-tool-group a i {
    margin-right: 5px;
    font-size: 14px;
    vertical-align: middle;
}

.comment-list .sub-comment .report, .comment-list .sub-comment .subcomment-delete {
    float: right;
    margin: 1px 0 0 10px;
}

.comment-list .more-comment {
    font-size: 14px;
    color: #969696;
    border: none;
}

.comment-list .sub-comment-list .add-comment-btn {
    color: #969696;
}

.comment-list .sub-comment-list .add-comment-btn i {
    margin-right: 5px;
}



</style>

<script>
import marked from "marked";
export default {
  name: "Article",
  data() {
    return {
      rendererMD: null,
      article: {
        id: this.$route.params.id,
        title: "",
        content: "",
        readcount: 0,
        channel: {
          id: "",
          name: ""
        },
        user: {
          id: "",
          username: ""
        }
      }
    };
  },
  mounted: function() {
    this.rendererMD = new marked.Renderer();
    marked.setOptions({
      renderer: this.rendererMD,
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false
    }); //基本设置
    this.getArticle();
  },
  methods: {
    getArticle: function() {
      this.$http.get(this.WebApi + "/api/articles/" + this.article.id, {}).then(
        function(res) {
          res = res.body;
          if (res.Status == "success") {
            var obj = res.Data;
            this.article.id = obj.id;
            this.article.title = obj.title;
            this.article.content = marked(obj.content);
            this.article.user.id = obj.user.ID;
            this.article.user.username = obj.user.UserName;
            this.article.channel.name = obj.channel.Name;
            this.article.channel.id = obj.channel.ID;
          } else {
            console.log(res.ErrorCode);
          }
        },
        function(err) {
          console.log(err);
        }
      );
    }
  }
};
</script>
