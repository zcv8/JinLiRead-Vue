<template>
  <div id="id">
    <textarea></textarea>
  </div>
</template>
<script type="text/javascript">
export default {
  name: "Editor",
  props: {
    id: String
  },
  data() {
    return {
      editor: null
    }
  },
  mounted() {
    Promise.all([
      //require("../assets/js/editor.md/lib/codemirror/codemirror.min.js"),
      //require("../assets/js/editor.md/lib/codemirror/modes.min.js"),
      //require("../assets/js/editor.md/lib/codemirror/addons.min.js"),
      //require("../assets/js/editor.md/lib/marked.min.js"),
      //require("../assets/js/editor.md/lib/prettify.min.js"),
      require("../assets/js/editor.md/editormd.min.js")
    ]).then(() => {
      this.initEditor();
    })
  },
  methods: {
    initEditor() {
      this.instance = editormd(this.id, {
        path: "../assets/js/editor.md/lib/",
        height: 630,
        saveHTMLToTextarea: true
      })
    }
  }
}

</script>
