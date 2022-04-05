<script lang="ts" setup>
const a:string = 'hello';
const b:string = 'world';
</script>

<template>
  <main flex="~ row nowrap" p="y-2 x-4">
    <section flex="~ 1" h-200 bg-blue-200>{{ a }}</section>
    <section flex="~ 1" h-200 bg-gray-200 >{{ b }}</section>
  </main>
</template>
