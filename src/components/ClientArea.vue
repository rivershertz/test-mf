<template>
  <ClientAreaTitle />
  <button @click="$emit('action', state)">check</button>
  <p>{{ state.token }}</p>
</template>

<script setup lang="ts">
  import {reactive} from 'vue';
  import ClientAreaTitle from '@/components/ClientAreaTitle.vue';

  const props = defineProps<{
    token: string;
  }>();

  const state = reactive({
    token: props.token || 'hello',
  });
</script>

<style scoped></style>
