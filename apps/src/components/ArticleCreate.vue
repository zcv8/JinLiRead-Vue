<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb" style="background:none;padding-left:0rem;">
        <li class="breadcrumb-item"><a href="#/">首页</a></li>
        <li class="breadcrumb-item"><a href="#/articles">文章</a></li>
        <li class="breadcrumb-item active" aria-current="page">创建文章</li>
      </ol>
    </nav>
    <form id="articleMain">
      <div class="form-row">
        <div class="form-group col-md-2">
          <select id="inputState" v-model="typeId" class="form-control">
            <option value=0>原创</option>
            <option value=1>翻译</option>
          </select>
        </div>
        <div class="form-group col-md-8">
          <input type="text" class="form-control" v-model="title" placeholder="文章标题" id="inputTitle">
        </div>
        <div class="form-group col-md-2" style="text-align: center;">
          <button type="button"  class="btn btn-primary" @click="release()"><i class="icon ion-android-checkmark-circle"></i> 发布文章</button>
        </div><!--data-toggle="modal" data-target="#CreateArticleModal"-->
      </div>
      <div class="form-group">
        <editor id="editor" v-on:editorvalue="getContent"></editor>
      </div>
    </form>
    <div class="modal fade" id="CreateArticleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">发布选项</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
            <div class="form-group">
              <label for="ChannelSelect">选择频道</label>
              <select class="form-control" v-model="curChannel" id="ChannelSelect">
                <option value="">选择所属频道</option>
                <option v-for="channel in channels" :key="channel.ID" :value="channel.ID">
                  {{channel.Name}}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label for="KeywordInput">关键词</label>
              <input id="KeywordInput" v-model="labels" class="form-control" placeholder="选择关键字，用;分隔"/>
            </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="confirmRelsase()">确认发布</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import Editor from "@/components/Editor";
export default {
  name: "ArticleCreate",
  components: {
    editor: Editor
  },
  data() {
    return {
      channels: [],
      typeId:0,
      title:"",
      content:"",
      channelId:"",
      labels:"",
      curChannel:"",
      keywords:""
    };
  },
  mounted: function() {
    this.getChannels();
  },
  methods: {
    getChannels: function() {
      this.$http.get(this.WebApi + "/api/channels", {}).then(
        function(data) {
          this.channels = data.body.Data;
        },
        function(err) {
          console.log(err);
        }
      );
    },
    getContent:function(data){
      this.content = data;
    },
    release:function(){
      if(this.valid()){
        this.initInput();
        $("#CreateArticleModal").modal('show');
      }
    },
    confirmRelsase:function(){
      if(this.validDialog()){
        this.initDialogInput();
        this.$http.post(this.WebApi+"/api/article/create",{
          title:this.title.trim(),
          content:this.content.trim(),
          typeId:this.typeId,
          statusId:1,
          channelId:this.curChannel,
          labels:this.labels.trim()
        }).then(function(data){
          data=data.body;
          if(data.Status="success"){
            $("#CreateArticleModal").modal('hide');
            this.$router.push({path: "/"});
          }else{
            console.log(data.ErrCode);
          }
          console.log(data);
        },function(err){
          console.log(err);
        });
      }
    },
    valid:function(){
      this.initInput();
      if(this.title.trim()==""){
        $("#inputTitle").addClass("input-error");
        return false;
      }else if(this.content.trim()==""){
        $("div.CodeMirror.cm-s-paper.CodeMirror-wrap").addClass("input-error");
        return false;
      }
      return true
    },
    validDialog:function(){
      this.initDialogInput();
      if(this.curChannel==""){
        $("#ChannelSelect").addClass("input-error");
        return false;
      }
      else if(this.keywords.trim()==""){
        $("#KeywordInput").addClass("input-error");
        return false;
      }
      return true
    },
    initInput:function(){
      $("#inputTitle").removeClass("input-error");
      $("div.CodeMirror.cm-s-paper.CodeMirror-wrap").removeClass("input-error")
    },
    initDialogInput:function(){
      $("#ChannelSelect").removeClass("input-error");
      $("#KeywordInput").removeClass("input-error");
    }
  }
};
</script>
