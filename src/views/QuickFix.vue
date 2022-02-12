<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import axios from "axios";
function loadData(state) {
  axios.get("/get").then((res) => {
    console.log(res.data)
    state.tableData = res.data.data;
  });
}

export default {
  setup() {
    const state = reactive({
      tableData: [],
    });
    onMounted(() => {
      loadData(state);
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>
