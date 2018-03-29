<template>
    <div class="row">
        <div class="col-sm-2">
            <ul class="list-group">
                <li class="list-group-item">今日焦点</li>
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
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    更多频道
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
            <div class="card" style="margin-top:10px;">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
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
  data(){
      return{
          channels:[]
      }
  },
  mounted:function(){
      this.getChannels();
  },
  methods:{
      getChannels:function(){
          this.$http.get(this.WebApi+"/api/channels",{}).then(function(data){
              data = data.body;
              this.channels=data.Data;
          },function(err){
              console.log(err);
          });
      }
  }
};
</script>