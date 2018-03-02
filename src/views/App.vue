<template>
    <Creator :schema="schema" v-model="model" ref="creator" />
</template>
<script>
import Creator from "../comp/Index.js";
export default {
  components: {
    Creator
  },
  data() {
    return {
      schema: [
        {
          type: "input",
          label: "姓名",
          model: "name",
          desc: "请输入姓名"
        },
        {
          type: "textarea",
          label: "自我介绍",
          model: "desc",
          desc: "请输入自我介绍"
        }
      ],
      model: this.loadLocalCache('login')
    };
  },
  methods: {
    loadLocalCache(type) {
      try {
        return JSON.parse(window.localStorage.getItem(type) || "");
      } catch (e) {
        return {};
      }
    }
  }
};
</script>
<style>

</style>