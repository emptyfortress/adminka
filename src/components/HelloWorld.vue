<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template lang="pug">
h1 {{ msg }}
p lakjsl

</template>

<style scoped lang="scss">
.read-the-docs {
  color: #888;
}
p {
  color: red;
}
</style>
