<script setup lang="ts">
import { ref } from 'vue';
import isNotAuthHome from '../components/home/isNotAuth/isNotAutHome.vue';
import isAuthHome from '../components/home/isAuth/isAuthHome.vue'

let isAuth = ref(false);
</script>

<template>
   <div>
    <isNotAuthHome v-if="!isAuth" />
    <isAuthHome v-else />
   </div>
</template>

<style scoped>

</style>