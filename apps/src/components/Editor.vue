<template>
  <div class="demo-wrap">
    <div class="editor-wrap">
      <div class="editor">
        <markdown-editor v-model="content" ref="markdownEditor" :configs="configs" :autoinit="false"></markdown-editor>
        <div style="display:none">{{sendContent}}</div>
      </div>
    </div>
    <upload-file v-on:uploadSuccess="uploadSuccess" multiple="false" ref="uploadFile" v-show="false"></upload-file>
  </div>
</template>

<script>
import markdownEditor from "vue-simplemde/src/markdown-editor";
import hljs from "highlight.js";
import uploadFile from "./UploadFile";
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
      editor: "",
      configs: {
        autofocus: true,
        hideIcons: ["guide", "heading"],
        showIcons: ["code", "table"],
        placeholder: "请输入文章内容...",
        styleSelectedText: false,
        toolbar: [
          "bold",
          "italic",
          "strikethrough",
          "|",
          "heading",
          "heading-1",
          "heading-2",
          "heading-3",
          "|",
          "code",
          "quote",
          "|",
          "unordered-list",
          "ordered-list",
          "clean-block",
          "|",
          "link",
          "image",
          {
            name: "uploadImage",
            action: this.customUploadImage,
            className: "fa fa-upload"
          },
          "table",
          "horizontal-rule",
          "|",
          "preview",
          "side-by-side",
          "fullscreen"
        ]
      },
      output: "",
      type: "markdown"
    };
  },
  computed: {
    simplemde() {
      return this.$refs.markdownEditor.simplemde;
    },
    sendContent() {
      this.$emit("editorvalue", this.content);
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
      this.$emit("editorvalue", this.content);
      this.output = this.content;
    },
    customUploadImage: function(editor) {
      this.editor = editor;
      $(".vue-file-upload")
        .find("input[type='file']")
        .click();
    },
    uploadSuccess: function(response) {
      if (response.Status == "success") {
        var data = this.WebApi + response.Data;
        if (this.editor) {
          var cm = this.editor.codemirror;
          var stat = this.getState(cm);
          var options = this.editor.options;
          var url = data;
          this._replaceSelection(
            cm,
            stat.image,
            options.insertTexts.image,
            url
          );
        }
      }
    },
    getState: function(cm, pos) {
      pos = pos || cm.getCursor("start");
      var stat = cm.getTokenAt(pos);
      if (!stat.type) return {};

      var types = stat.type.split(" ");

      var ret = {},
        data,
        text;
      for (var i = 0; i < types.length; i++) {
        data = types[i];
        if (data === "strong") {
          ret.bold = true;
        } else if (data === "variable-2") {
          text = cm.getLine(pos.line);
          if (/^\s*\d+\.\s/.test(text)) {
            ret["ordered-list"] = true;
          } else {
            ret["unordered-list"] = true;
          }
        } else if (data === "atom") {
          ret.quote = true;
        } else if (data === "em") {
          ret.italic = true;
        } else if (data === "quote") {
          ret.quote = true;
        } else if (data === "strikethrough") {
          ret.strikethrough = true;
        } else if (data === "comment") {
          ret.code = true;
        } else if (data === "link") {
          ret.link = true;
        } else if (data === "tag") {
          ret.image = true;
        } else if (data.match(/^header(\-[1-6])?$/)) {
          ret[data.replace("header", "heading")] = true;
        }
      }
      return ret;
    },
    _replaceSelection: function(cm, active, startEnd, url) {
      if (
        /editor-preview-active/.test(cm.getWrapperElement().lastChild.className)
      )
        return;

      var text;
      var start = startEnd[0];
      var end = startEnd[1];
      var startPoint = cm.getCursor("start");
      var endPoint = cm.getCursor("end");
      if (url) {
        end = end.replace("#url#", url);
      }
      if (active) {
        text = cm.getLine(startPoint.line);
        start = text.slice(0, startPoint.ch);
        end = text.slice(startPoint.ch);
        cm.replaceRange(start + end, {
          line: startPoint.line,
          ch: 0 
        });
      } else {
        text = cm.getSelection();
        cm.replaceSelection(start + text + end);

        startPoint.ch += start.length;
        if (startPoint !== endPoint) {
          endPoint.ch += start.length;
        }
      }
      cm.setSelection(startPoint, endPoint);
      cm.focus();
    }
  }
};
</script>

<style>
.markdown-editor .CodeMirror {
  height: 600px;
}
</style>