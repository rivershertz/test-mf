<template>
  <ClientAreaTitle />
  <button @click="() => console.log('still works')">check</button>
</template>

<script setup lang="ts">
  import {ref} from 'vue';
  import ClientAreaTitle from '@/components/ClientAreaTitle.vue';

  const error = ref(null);
</script>

<style scoped></style>
