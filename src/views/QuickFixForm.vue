<template>
  <el-form :inline="true" class="demo-form-inline" ref="formRef" :model="form">
    <el-form-item label="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="address">
      <el-input v-model="form.address"></el-input>
    </el-form-item>
    <el-form-item label="date">
      <el-input v-model="form.address"></el-input>
    </el-form-item>
  </el-form>
  <el-form :inline="true" class="demo-form-inline" ref="formRef" :model="form">
    <el-form-item label="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="address">
      <el-input v-model="form.address"></el-input>
    </el-form-item>
    <el-form-item label="date">
      <el-input v-model="form.address"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit(form)">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive, toRefs } from "vue";
import axios from "axios";
function onSubmit(form) {
  axios.post("/send", form).then((res) => {
    console.log(res);
  });
}
export default {
  setup() {
    const state = reactive({
      form: {
        name: "",
        address: "",
      },
    });
    return {
      ...toRefs(state),
      onSubmit,
    };
  },
};
</script>
