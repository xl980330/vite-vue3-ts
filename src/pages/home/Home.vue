<script lang="ts" setup>
import { ref } from "vue";
let a = ref(1);
const b: string = "string";
function add() {
  a.value++;
}
</script>

<template>
  <button
    @click="add"
    text-4
    border="none red-100"
    m="y-5 x-5"
    p="y-2 x-3"
    bg="blue-400 hover:[#b2a8bb] dark:blue-500 dark:hover:blue-600"
  >
    click add
  </button>
  <main flex="~ row nowrap" p="y-2 x-4">
    <section flex="~ 1" h-200 bg-blue-200>{{ a }}</section>
    <section flex="~ 1" h-200 bg-gray-200>{{ b }}</section>
    <section flex="1" bg-red-100></section>
  </main>
</template>
