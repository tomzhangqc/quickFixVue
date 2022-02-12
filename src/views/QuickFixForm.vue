<template>
  <el-form ref="formRef" :model="form" label-width="120px">
    <el-form-item label="Activity name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit(form)">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive, toRefs } from "vue";
function onSubmit(form) {
    console.log(form.name)
}
export default {
  setup() {
    const state = reactive({
      form: {
        name: "zhangsan",
      },
    });
    return {
      ...toRefs(state),
      onSubmit
    };
  },
};
</script>
