<template>
  <Navbar/>
  <Header/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/sections/Navbar.vue';
import Header from '@/sections/Header.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Navbar,
    Header
  },
});
</script>
