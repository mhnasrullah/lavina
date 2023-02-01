<template>
    <section class="bg-white pt-16">
        <Box class="flex justify-between items-center">
            <Text 
            color="text-gray"
            type="lg">Best Selling Products</Text>
            <router-link to="/" class="text-[#00000088] text-xs hover:underline block transition-all">see all</router-link>
        </Box>
        <Box class="space-y-4 mt-6 md:grid md:grid-cols-2 md:space-y-0 md:gap-6 lg:grid-cols-4">
            <div v-for="({category,image,name,price,star}, index) in data" :key="index">
                <Product
                :category="category"
                :image="image"
                :name="name"
                :price="price"
                :star="star"/>
            </div>
        </Box>
    </section>
</template>

<script lang="ts" setup>
    import Box from '@/components/Box.vue';
    import Text from '@/components/Text.vue';
    import { Product } from '@/components/card';
    import data from '@/data/bestSelling.json'
</script>