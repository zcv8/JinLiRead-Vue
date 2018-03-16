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
          <select id="inputState" class="form-control">
            <option value=0>原创</option>
            <option value=1>翻译</option>
          </select>
        </div>
        <div class="form-group col-md-8">
          <input type="text" class="form-control" placeholder="文章标题" id="inputTitle">
        </div>
        <div class="form-group col-md-2" style="text-align: center;">
          <button type="button" class="btn btn-primary"><i class="icon ion-android-checkmark-circle"></i> 发布文章</button>
        </div>
      </div>
      <div class="form-group">
        <editor id="editor"></editor>
      </div>
    </form>
  </div>
</template>
<script type="text/javascript">
import Editor from "@/components/Editor"
export default {
  name: 'ArticleCreate',
  components:{
    editor:Editor
  }
}

</script>
