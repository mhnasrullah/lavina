<template>
    <section class="pt-16">
        <Text
        class="text-center"
        color="text-gray"
        type="lg">Related Articles</Text>
        <p class="text-[#828282] text-center text-sm md:mt-2">Keep inspired and motivation</p>

        <Box class="space-y-4 mt-6 md:mt-10 md:grid md:grid-cols-3 md:space-y-0 md:gap-6">
            <Article
            v-for="({author,date,image,title}, index) in data" :key="index"
            :author="author"
            :date="date"
            :image="image"
            :title="title"
            />
        </Box>
    </section>
</template>

<script lang="ts" setup>
import Text from '@/components/Text.vue';
import Box from '@/components/Box.vue';
import {Article} from '@/components/card';
import data from '@/data/articles.json'
</script>