<template>
  <div id="vditor"></div>
  <!-- <div @click="renderMarkdown">
      转换Markdown文档
  </div> -->
</template>
<script setup>
import {
      defineProps, ref, onMounted ,watch } from "vue";
import Vditor from "vditor";
import "vditor/dist/index.css";
const contentEditor = ref("");
onMounted(() => {
  contentEditor.value = new Vditor("vditor", {
    height: 360,
    toolbarConfig: {
      pin: true,
    },
    cache: {
      enable: false,
    },
    after: () => {
      contentEditor.value.setValue("hello");
    },
  });
});
watch(contentEditor,(a,b)=>{
    console.log(a,b,'1111========')
})
function renderMarkdown(md) {
  Vditor.preview(document.getElementById("vditor"), md, {
    hljs: { style: "github" },
  });
}

</script>
<style scoped>
a {
  color: #42b983;
}
</style>