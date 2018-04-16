<template>
    <div class="row">
        <div class="col-sm-9">
            <div style="margin-bottom:10px;">
                <button type="button" v-for="channel in channels" :key="channel.ID" class="btn btn-white">{{channel.Name}}</button>
                <button type="button" class="btn btn-white">更多热门频道>></button>
            </div>
            <a class="card mb-3" :href="'#/article/'+article.id" v-for="article in articles" :key="article.id"  style="border:none;border-top:1px solid #f0f0f0;">
                <div class="card-header" style="border:none;background:none;">
                    <div style="height:30px;">
                        <img style="with:30px;height:30px;" src="../assets/images/touxiang.jpeg" />
                        <span style="height:30px; vertical-align:text-top;">{{article.user.UserName}}
                            <small style="color:#8590a6;">专业软件开发者</small>
                        </span>
                    </div>
                </div>
                <div class="card-body" style="padding-top:0px;padding-bottom:5px;">
                    <div class="row">
                        <div :class="article.image===''?'col-sm-12':'col-sm-8'">
                            <h5 class="card-title">{{article.title}}</h5>
                            <div class="card-text " style="height:80px;">
                                {{article.content}}
                            </div>
                            <div class="card-footer" style="border:none;background:none;padding:0px;font-size:14px;">
                                <a href="#" style="margin-right:10px;color:#325987;"><i class="ion ion-eye" ></i> {{article.readcount}}</a>
                                <a href="#" style="margin-right:10px;color:#325987;"><i class="ion ion-chatbubble-working"></i> 20</a>
                                <a href="#" style="margin-right:10px;color:#325987;"><i class="ion ion-heart" ></i> 10</a>
                                <a href="#" style="margin-right:10px;color:#325987;"><i class="ion ion-social-yen"></i> 10</a>
                                <a href="#" style="margin-right:10px;color:#325987;"><i class="ion ion-clock"></i> {{article.updatetime | formatDate}}</a>
                            </div>
                        </div>
                        <div v-if="article.image!=''" class="col-sm-4">
                            <img style="width:100%;height:100%;" :src="article.image" />
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-sm-3">
            <a href="#/article/create" class="btn btn-primary btn-lg btn-block">
                <i class="ion ion-edit"></i> 发表文章</a>
            <!--<button type="button" class="btn btn-secondary btn-lg btn-block">
                <i class="ion ion-help-circled"></i> 提问题</button>-->
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
import { formatDate } from "../assets/js/common.js";
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
    filters:{
        formatDate(time) {
            var date = new Date(time);
            return formatDate(date, "yyyy-MM-dd hh:mm");
        }
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
                        "/api/channels/" +
                        channelId +"/articles"+
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