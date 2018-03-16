<template>
  <textarea id="id"></textarea>
</template>
<script type="text/javascript">
import SimpleMDE from "simplemde/dist/simplemde.min.js"
import "simplemde/dist/simplemde.min.css"
export default {
  name: "Editor",
  methods:{
  },
  mounted:function(){
      new SimpleMDE({
        element:document.getElementById("editor"),
        autofocus: true,
        autosave: {
          enabled: true,
          uniqueId: "MyUniqueID",
          delay: 1000,
        },
        blockStyles: {
          bold: "__",
          italic: "_"
        }
      });
  }
}
</script>