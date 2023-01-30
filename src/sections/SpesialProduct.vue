<template>
    <section class="pt-16">
        <Box class="flex justify-between items-center">
            <Text 
            color="text-gray"
            type="lg">Product Categories</Text>
            <router-link to="/" class="text-[#00000088] text-xs hover:underline block transition-all">see all</router-link>
        </Box>
        <Box class="md:flex mt-6 space-y-4 md:space-y-0 md:space-x-6">
            <SpesialProduct 
            v-for="({discount,image,name},i) in data"
            :image="image"
            :discount="discount"
            :name="name"
            :key="i"
            />
        </Box>
    </section>
</template>

<script lang="ts" setup>
import Text from '@/components/Text.vue';
import Box from '@/components/Box.vue';
import {SpesialProduct} from '@/components/card';
import data from '@/data/spesialProduct.json'

</script>