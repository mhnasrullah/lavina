<template>
    <section class="min-h-screen bg-cover bg-bottom">
        <Box>
            
        </Box>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Box from '@/components/Box.vue';

export default defineComponent({
    name : 'Header',
    components : {
        Box,
    }
})
</script>

<style scoped>
    section{
        background-image: url(@/assets/images/header.jpg);
    }
</style>