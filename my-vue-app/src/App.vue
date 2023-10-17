<template>
  <button @click="handleClick">click</button>
  <h1>{{ res }}</h1>
  <base-no-data></base-no-data>
</template>

<script setup>
import { getCurrentInstance, ref } from 'vue';
const { proxy } = getCurrentInstance();
let res = ref(null);

async function handleClick() {
  res = await proxy.$api.demo.time();
}
</script>