<template>
  <div class="demo-wrap">
    <div class="editor-wrap">
      <div class="editor">
        <markdown-editor v-model="content" ref="markdownEditor" :configs="configs" :autoinit="false"></markdown-editor>
      <div style="display:none">{{sendContent}}</div>
      </div>
    </div>
    <upload-file ref="uploadFile" v-show="false"></upload-file>
  </div>
</template>

<script>
import markdownEditor from "vue-simplemde/src/markdown-editor";
import hljs from "highlight.js";
import uploadFile from './UploadFile'
import "simplemde/dist/simplemde.min.css";
import "highlight.js/styles/atom-one-dark.css";
import "github-markdown-css";
window.hljs = hljs;
export default {
  name: "Editor",
  components: {
    markdownEditor,
    uploadFile
  },
  data() {
    return {
      content: "",
      configs: {
        autofocus: true,
        hideIcons: ['guide', 'heading'],
        showIcons: ['code', 'table'],
        placeholder: "请输入文章内容...",
        styleSelectedText: false, 
        toolbar: ['bold', 'italic', 'strikethrough','|',
        'heading','heading-1','heading-2','heading-3','|',
        'code','quote','|','unordered-list','ordered-list','clean-block','|',
        'link','image',{
            name: 'uploadImage',
            action: this.customUploadImage,
            className: 'fa fa-upload',
        },'table','horizontal-rule','|',
        'preview','side-by-side','fullscreen']
      },
      output: "",
      type: "markdown",
    };
  },
  computed: {
    simplemde() {
      return this.$refs.markdownEditor.simplemde;
    },
    sendContent() {
      this.$emit("editorvalue",this.content);
      return this.content;
    }
  },
  mounted() {
    //Dom加载完成之后执行==延迟执行
    this.$nextTick(() => {
      this.$refs.markdownEditor.initialize();
    }); 
  },
  methods: {
    handleOutputHTML() {
      this.type = "html";
      this.output = this.simplemde.markdown(this.content);
    },
    handleOutputMARKDOWN() {
      this.type = "markdown";
      this.$emit("editorvalue",this.content);
      this.output = this.content;
    },
    customUploadImage:function(editor){
      //父组件调用子组件的方法
      //this.$refs.uploadFile.onAddItem()
      $(".vue-file-upload").find("input[type='file']").click();
    }
  },
};
</script>

<style>
.markdown-editor .CodeMirror {
  height: 600px;
}
</style>