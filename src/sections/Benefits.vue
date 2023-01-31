<template>
    <section class="pt-16">
        <Box class="space-y-6 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-4 md:space-y-0">
            <Item
            v-for="({description,image,name},i) in data"
            :key="i"
            :description="description"
            :image="image"
            :name="name"/>
        </Box>
    </section>
</template>

<script setup lang="ts">
    import Item from '@/components/BenefitItems.vue'
    import Box from '@/components/Box.vue';
    import data from '@/data/benefit.json'
</script>