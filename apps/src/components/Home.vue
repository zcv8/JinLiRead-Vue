<template>
    <div class="row">
        <div class="col-sm-2">
            <ul class="list-group">
                <li class="list-group-item active">今日焦点</li>
                <li class="list-group-item">为你推荐</li>
                <li class="list-group-item">最新内容</li>
            </ul>
            <ul class="list-group" style="margin-top:10px;">
                <li class="list-group-item d-flex justify-content-between align-items-center disabled">
                    频道
                </li>
                <li v-for="channel in channels" :key="channel.ID" :title="channel.Remark" class="list-group-item d-flex justify-content-between align-items-center">
                    {{channel.Name}}
                </li>
            </ul>
        </div>
        <div class="col-sm-7">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" style="height:120px;" src="../assets/images/aspdemo.jpg" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" style="height:120px;" src="../assets/images/es6demo.jpg" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" style="height:120px;" src="../assets/images/jsdemo.jpg" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" style="height:120px;" src="../assets/images/fulldemo.jpg" alt="Second slide">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <div class="card mb-3" style="margin-top:10px;">
                <div class="card-header" style="border:none;background:none;">
                    <span style="color:#8590a6;">来自频道:投资与理财</span>
                    <div style="height:30px;">
                        <img style="with:30px;height:30px;" src="../assets/images/touxiang.jpeg" />
                        <span style="height:30px; vertical-align:text-top;">奔跑的山羊 ,
                            <small style="color:#8590a6;">专业软件开发者</small>
                        </span>
                    </div>
                </div>
                <div class="card-body" style="padding-top:0px;">
                    <h5 class="card-title">开启智能理财时代</h5>
                    <div class="card-text row">
                        <div class="col-sm-4">
                            <img style="width:100%;" src="../assets/images/artcie.png" />
                        </div>
                        <div class="col-sm-8">
                            我要开启智能理财新时代我要开启智能理财新时代我要开启智能理财新时代我要开启智能理财新时代我要开启智能理财新时代我要开启智能
                            <a href="#">阅读全文
                                <i class="ion ion-ios-arrow-down"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card-footer" style="border:none;background:none;padding-top:0px;">
                    <button type="button" class="btn btn-lightBlue">
                        <i class="ion ion-arrow-up-b"></i> 100</button>
                    <button type="button" class="btn btn-lightBlue">
                        <i class="ion ion-arrow-down-b"></i>
                    </button>
                    <button type="button" class="btn btn-white">
                        <i class="ion ion-ios-chatbubble" style="font-size:20px;"></i> 100 条评论</button>
                    <button type="button" class="btn btn-white">
                        <i class="ion ion-ios-star" style="font-size:20px;"></i> 收藏</button>
                </div>
            </div>
            <div class="card mb-3" v-for="article in articles" :key="article.id" style="margin-top:10px;">
                <div class="card-header" style="border:none;background:none;">
                    <span style="color:#8590a6;">来自频道:{{article.channel.Name}}</span>
                    <div style="height:30px;">
                        <img style="with:30px;height:30px;" src="../assets/images/touxiang.jpeg" />
                        <span style="height:30px; vertical-align:text-top;">奔跑的山羊 ,
                            <small style="color:#8590a6;">专业软件开发者</small>
                        </span>
                    </div>
                </div>
                <div class="card-body" style="padding-top:0px;">
                    <h5 class="card-title">{{article.title}}</h5>
                    <div class="card-text row">
                        <div class="col-sm-4">
                            <img style="width:100%;" src="../assets/images/artcie.png" />
                        </div>
                        <div class="col-sm-8">
                            {{article.content}}
                            <a href="#">阅读全文
                                <i class="ion ion-ios-arrow-down"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card-footer" style="border:none;background:none;padding-top:0px;">
                    <button type="button" class="btn btn-lightBlue">
                        <i class="ion ion-arrow-up-b"></i> 100</button>
                    <button type="button" class="btn btn-lightBlue">
                        <i class="ion ion-arrow-down-b"></i>
                    </button>
                    <button type="button" class="btn btn-white">
                        <i class="ion ion-ios-chatbubble" style="font-size:20px;"></i> 100 条评论</button>
                    <button type="button" class="btn btn-white">
                        <i class="ion ion-ios-star" style="font-size:20px;"></i> 收藏</button>
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <a href="#/article/create" class="btn btn-primary btn-lg btn-block">
                <i class="ion ion-edit"></i> 发表文章</a>
            <button type="button" class="btn btn-secondary btn-lg btn-block">
                <i class="ion ion-help-circled"></i> 提问题</button>
            <ul class="list-group" style="margin-top:10px;">
                <li class="list-group-item disabled">最新活动</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    name: "Home",
    data() {
        return {
            channels: [],
            articles: [],
            pageIndex: 1,
            pageSize: 10
        };
    },
    mounted: function() {
        this.getChannels();
        this.getArticles(0);
    },
    methods: {
        getChannels: function() {
            this.$http.get(this.WebApi + "/api/channels", {}).then(
                function(data) {
                    data = data.body;
                    this.channels = data.Data;
                },
                function(err) {
                    console.log(err);
                }
            );
        },
        getArticles: function(channelId) {
            this.$http
                .get(
                    this.WebApi +
                        "/api/articles/" +
                        channelId +
                        "?pageIndex=" +
                        this.pageIndex +
                        "&pageSize=" +
                        this.pageSize,
                    {}
                )
                .then(
                    function(data) {
                        data = data.body;
                        this.articles = data.Data;
                    },
                    function(err) {
                        console.log(err);
                    }
                );
        }
    }
};
</script>