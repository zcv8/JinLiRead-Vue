<template>
  <div class="demo-wrap">
    <div class="editor-wrap">
      <div class="editor">
        <markdown-editor v-model="content" ref="markdownEditor" :autoinit="false"></markdown-editor>
      <div style="display:none">{{sendContent}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import markdownEditor from "vue-simplemde/src/markdown-editor";
import hljs from "highlight.js";
import "simplemde/dist/simplemde.min.css";
import "highlight.js/styles/atom-one-dark.css";
import "github-markdown-css";
window.hljs = hljs;
export default {
  name: "Editor",
  components: {
    markdownEditor,
  },
  data() {
    return {
      content: "",
      configs: {
        status: false,
        height:400,
        toolbar: ["image"],
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
    }
  },
};
</script>

<style>
.markdown-editor .CodeMirror {
  height: 600px;
}
</style>