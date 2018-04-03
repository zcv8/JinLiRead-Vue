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
                    <div class="carousel-item active" style="border-radius:10px;">
                        <img class="d-block w-100" style="height:240px;border-radius:10px;" src="../assets/images/aspdemo.jpg" alt="First slide">
                    </div>
                    <div class="carousel-item" style="border-radius:10px;">
                        <img class="d-block w-100" style="height:240px;border-radius:10px;" src="../assets/images/es6demo.jpg" alt="Second slide">
                    </div>
                    <div class="carousel-item" style="border-radius:10px;">
                        <img class="d-block w-100" style="height:240px;border-radius:10px;" src="../assets/images/jsdemo.jpg" alt="Second slide">
                    </div>
                    <div class="carousel-item" style="border-radius:10px;">
                        <img class="d-block w-100" style="height:240px;border-radius:10px;" src="../assets/images/fulldemo.jpg" alt="Second slide">
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
            <div class="card" v-for="article in articles" :key="article.id" style="margin-top:10px;">
                <div class="card-body">
                    <h5 class="card-title">{{article.title}}</h5>
                </div>
            </div>
            <div class="Card TopstoryItem TopstoryItem--experimentExpand" data-reactid="83"><button class="Button TopstoryItem-rightButton Button--plain" data-tooltip="不感兴趣" data-tooltip-position="bottom" type="button" data-reactid="84"><svg viewBox="0 0 14 14" class="Icon Icon--remove" style="height:10px;width:10px;" width="10" height="10" aria-hidden="true" data-reactid="85"><title data-reactid="86"></title><g data-reactid="87"><path d="M8.486 7l5.208-5.207c.408-.408.405-1.072-.006-1.483-.413-.413-1.074-.413-1.482-.005L7 5.515 1.793.304C1.385-.103.72-.1.31.31-.103.724-.103 1.385.305 1.793L5.515 7l-5.21 5.207c-.407.408-.404 1.072.007 1.483.413.413 1.074.413 1.482.005L7 8.485l5.207 5.21c.408.407 1.072.404 1.483-.007.413-.413.413-1.074.005-1.482L8.485 7z"></path></g></svg></button><div class="Feed" data-reactid="88" data-za-detail-view-path-module="FeedItem" data-za-detail-view-path-index="0" data-za-extra-module="{&quot;card&quot;:{&quot;card_type&quot;:&quot;Feed&quot;,&quot;feed_id&quot;:&quot;0_1522765945.34&quot;,&quot;has_image&quot;:false,&quot;has_video&quot;:false,&quot;content&quot;:{&quot;type&quot;:&quot;Answer&quot;,&quot;token&quot;:&quot;278286341&quot;}},&quot;attached_info_bytes&quot;:&quot;CqUBCJ2KrIrErr+FFxAEGgg4MDY2NjQ0NiC2mtzRBSiWPTCeB0AAUg5ob3RfYWRkX2Fuc3dlcloIMTMwNzU3ODdyCTI3ODI4NjM0MXgBggFJaHR0cHM6Ly9waWMxLnpoaW1nLmNvbS81MC92Mi05ODIzZDUxMDRlZGNhZDkwMmM4NGJkMmRiMDUxYWY2OV8yMDB4MTEyLmpwZ4oBCDUyMTQ0MTI2qgEA&quot;}"><div class="FeedSource" data-reactid="89"><div class="FeedSource-firstline" data-reactid="90"><span data-reactid="91"><!-- react-text: 92 -->热门内容, 来自: <!-- /react-text --><span data-reactid="93"><a class="TopicLink" href="//www.zhihu.com/topic/19550874" target="_blank" data-reactid="94"><div class="Popover" data-reactid="95"><div id="Popover-46363-97341-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover-46363-97341-content" data-reactid="96">法律</div><!-- react-empty: 97 --></div></a></span><!-- react-text: 98 --><!-- /react-text --></span></div><div class="AuthorInfo FeedSource-byline AuthorInfo--plain" itemprop="author" itemscope="" itemtype="http://schema.org/Person" data-reactid="99"><meta itemprop="name" content="lucky" data-reactid="100"><meta itemprop="image" content="https://pic2.zhimg.com/50/v2-8d9aba86f963cbdc5bad30a0a67598bb_s.jpg" data-reactid="101"><meta itemprop="url" content="https://www.zhihu.com/people/lucky-73-71" data-reactid="102"><meta itemprop="zhihu:followerCount" data-reactid="103"><span class="UserLink AuthorInfo-avatarWrapper" data-reactid="104"><div class="Popover" data-reactid="105"><div id="Popover-46363-74876-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover-46363-74876-content" data-reactid="106"><a class="UserLink-link" data-za-detail-view-element_name="User" target="_blank" href="//www.zhihu.com/people/lucky-73-71" data-reactid="107"><img class="Avatar AuthorInfo-avatar" width="24" height="24" src="https://pic2.zhimg.com/50/v2-8d9aba86f963cbdc5bad30a0a67598bb_s.jpg" srcset="https://pic2.zhimg.com/50/v2-8d9aba86f963cbdc5bad30a0a67598bb_xs.jpg 2x" alt="lucky" data-reactid="108"></a></div><!-- react-empty: 109 --></div></span><div class="AuthorInfo-content" data-reactid="110"><div class="AuthorInfo-head" data-reactid="111"><span class="UserLink AuthorInfo-name" data-reactid="112"><div class="Popover" data-reactid="113"><div id="Popover-46363-30334-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover-46363-30334-content" data-reactid="114"><a class="UserLink-link" data-za-detail-view-element_name="User" target="_blank" href="//www.zhihu.com/people/lucky-73-71" data-reactid="115">lucky</a></div><!-- react-empty: 116 --></div><!-- react-empty: 117 --></span></div><div class="AuthorInfo-detail" data-reactid="118"><div class="AuthorInfo-badge" data-reactid="119"><div class="RichText AuthorInfo-badgeText" data-reactid="120">luckily</div></div></div></div></div></div><div class="ContentItem AnswerItem" data-zop="{&quot;authorName&quot;:&quot;lucky&quot;,&quot;itemId&quot;:278286341,&quot;title&quot;:&quot;有哪些「看上去不起眼，实际上是大案」的案件？&quot;,&quot;type&quot;:&quot;answer&quot;}" name="278286341" itemprop="answer" itemtype="http://schema.org/Answer" itemscope="" data-reactid="121" data-za-detail-view-path-module="AnswerItem" data-za-extra-module="{&quot;card&quot;:{&quot;has_image&quot;:false,&quot;has_video&quot;:false,&quot;content&quot;:{&quot;type&quot;:&quot;Answer&quot;,&quot;token&quot;:&quot;278286341&quot;,&quot;upvote_num&quot;:7830,&quot;comment_num&quot;:926,&quot;publish_timestamp&quot;:null,&quot;parent_token&quot;:&quot;52144126&quot;,&quot;author_member_hash_id&quot;:&quot;4c6dddda20a328dc4cd3f88f15a1ed6e&quot;}}}"><h2 class="ContentItem-title" data-reactid="122"><div itemprop="zhihu:question" itemtype="http://schema.org/Question" itemscope="" data-reactid="123"><meta itemprop="url" content="https://www.zhihu.com/question/52144126" data-reactid="124"><meta itemprop="name" content="有哪些「看上去不起眼，实际上是大案」的案件？" data-reactid="125"><a target="_blank" data-za-detail-view-element_name="Title" href="/question/52144126/answer/278286341" data-reactid="126">有哪些「看上去不起眼，实际上是大案」的案件？</a></div></h2><div class="ContentItem-meta" data-reactid="127"></div><meta itemprop="image" content="https://pic1.zhimg.com/50/v2-9823d5104edcad902c84bd2db051af69_200x112.jpg" data-reactid="128"><meta itemprop="upvoteCount" content="7830" data-reactid="129"><meta itemprop="url" content="https://www.zhihu.com/question/52144126/answer/278286341" data-reactid="130"><meta itemprop="dateCreated" content="2017-12-18T00:35:02.000Z" data-reactid="131"><meta itemprop="dateModified" content="2018-03-20T15:29:32.000Z" data-reactid="132"><meta itemprop="commentCount" content="926" data-reactid="133"><div class="RichContent is-collapsed" data-reactid="134"><div class="RichContent-cover" data-reactid="135"><div class="RichContent-cover-inner" data-reactid="136"><img width="190" src="https://pic1.zhimg.com/50/v2-9823d5104edcad902c84bd2db051af69_400x224.jpg" alt="cover"></div></div><div class="RichContent-inner RichContent-inner--collapsed" data-reactid="139"><span class="RichText CopyrightRichText-richText" itemprop="text" data-reactid="140">5突然想到。 2016年的时候，街上有个小女孩不见了。开始以为是人贩子把小孩抱走了。 过了好多天都没有找到。 一直以为是一起儿童被拐案。 小女孩走失之前(暂且当做走失)携带了一部手机。警察通过定位发现了手机就…</span><button class="Button ContentItem-more Button--plain" type="button" data-reactid="141"><!-- react-text: 142 -->阅读全文<!-- /react-text --><svg viewBox="0 0 10 6" class="Icon ContentItem-arrowIcon Icon--arrow" style="height:16px;width:10px;" width="10" height="16" aria-hidden="true" data-reactid="143"><title data-reactid="144"></title><g data-reactid="145"><path d="M8.716.217L5.002 4 1.285.218C.99-.072.514-.072.22.218c-.294.29-.294.76 0 1.052l4.25 4.512c.292.29.77.29 1.063 0L9.78 1.27c.293-.29.293-.76 0-1.052-.295-.29-.77-.29-1.063 0z"></path></g></svg></button><!-- react-empty: 146 --></div><div class="ContentItem-actions" data-reactid="147"><span data-reactid="148"><button class="Button VoteButton VoteButton--up" aria-label="赞同" type="button" data-reactid="149"><svg viewBox="0 0 20 18" class="Icon VoteButton-upIcon Icon--triangle" style="height:16px;width:9px;" width="9" height="16" aria-hidden="true" data-reactid="150"><title data-reactid="151"></title><g data-reactid="152"><path d="M0 15.243c0-.326.088-.533.236-.896l7.98-13.204C8.57.57 9.086 0 10 0s1.43.57 1.784 1.143l7.98 13.204c.15.363.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H1.955c-1.08 0-1.955-.517-1.955-1.9z"></path></g></svg><!-- react-text: 153 -->7.8K<!-- /react-text --></button><button class="Button VoteButton VoteButton--down" aria-label="反对" type="button" data-reactid="154"><svg viewBox="0 0 20 18" class="Icon VoteButton-downIcon Icon--triangle" style="height:16px;width:9px;" width="9" height="16" aria-hidden="true" data-reactid="155"><title data-reactid="156"></title><g data-reactid="157"><path d="M0 15.243c0-.326.088-.533.236-.896l7.98-13.204C8.57.57 9.086 0 10 0s1.43.57 1.784 1.143l7.98 13.204c.15.363.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H1.955c-1.08 0-1.955-.517-1.955-1.9z"></path></g></svg></button></span><button class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel" type="button" data-reactid="158"><span style="display:inline-flex;align-items:center;" data-reactid="159"><!-- react-text: 160 --><!-- /react-text --><svg class="Zi Zi--Comment Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em" data-reactid="161"><path d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z" fill-rule="evenodd" data-reactid="162"></path></svg></span><!-- react-text: 163 -->926 条评论<!-- /react-text --></button><div class="Popover ShareMenu ContentItem-action" data-reactid="164"><div class="" id="Popover-46366-18553-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover-46366-18553-content" data-reactid="165"><button class="Button Button--plain Button--withIcon Button--withLabel" type="button" data-reactid="166"><span style="display:inline-flex;align-items:center;" data-reactid="167"><!-- react-text: 168 --><!-- /react-text --><svg class="Zi Zi--Share Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em" data-reactid="169"><path d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z" fill-rule="evenodd" data-reactid="170"></path></svg></span><!-- react-text: 171 -->分享<!-- /react-text --></button></div><!-- react-empty: 172 --></div><button class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel" type="button" data-reactid="173"><span style="display:inline-flex;align-items:center;" data-reactid="174"><!-- react-text: 175 --><!-- /react-text --><svg class="Zi Zi--Star Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em" data-reactid="176"><path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd" data-reactid="177"></path></svg></span><!-- react-text: 178 -->收藏<!-- /react-text --></button><button class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel" type="button" data-reactid="179"><span style="display:inline-flex;align-items:center;" data-reactid="180"><!-- react-text: 181 --><!-- /react-text --><svg class="Zi Zi--Heart Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em" data-reactid="182"><path d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z" fill-rule="evenodd" data-reactid="183"></path></svg></span><!-- react-text: 184 -->感谢<!-- /react-text --></button><div class="Popover ContentItem-action" data-reactid="185"><button class="Button Button--plain Button--withIcon Button--iconOnly" aria-label="更多" type="button" id="Popover-46366-57252-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover-46366-57252-content" data-reactid="186"><span style="display:inline-flex;align-items:center;" data-reactid="187"><!-- react-text: 188 --><!-- /react-text --><svg class="Zi Zi--Dots Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em" data-reactid="189"><path d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill-rule="evenodd" data-reactid="190"></path></svg></span></button><!-- react-empty: 191 --></div></div></div><!-- react-empty: 192 --><!-- react-empty: 983 --><!-- react-empty: 194 --><!-- react-empty: 195 --><!-- react-empty: 984 --><!-- react-empty: 197 --></div></div></div>
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