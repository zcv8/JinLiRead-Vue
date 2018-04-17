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
            <p>
                {{article.content}}
            </p>
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
</style>

<script>
export default {
  name: "Article",
  data() {
    return {
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
            this.article.content = obj.content;
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
