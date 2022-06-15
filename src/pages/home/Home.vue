<script lang="ts" setup>
import { ref } from "vue";

let a = ref(1);
const b: string = "string";
function add() {
  a.value++;
}
</script>

<template>
  <el-button plain type="primary" @click="add">按钮</el-button>
  <main flex="~ row nowrap" p="y-2 x-4">
    <section flex="~ 1" h-200 bg-blue-200>{{ a }}</section>
    <section flex="~ 1" h-200 bg-gray-200>{{ b }}</section>
    <section flex="1" bg-red-100></section>
  </main>
</template>
