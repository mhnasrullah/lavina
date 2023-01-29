<template>
    <section class="bg-white pt-16">
        <Box class="flex justify-between items-center">
            <Text 
            color="text-gray"
            type="lg">Product Categories</Text>
            <router-link to="/" class="text-[#00000088] text-xs hover:underline block transition-all">see all</router-link>
        </Box>
        <Box class="relative mt-6">
            <Swiper
            :navigation="navigation"
            :modules="modules"
            :space-between="25"
            :breakpoints="breakpoints">
                <SwiperSlide v-for="({image,item,name,width},i) in data" :key="i">
                    <Categories 
                    :width="width"
                    :image="image"
                    :item="item"
                    :name="name"
                    />
                </SwiperSlide>
            </Swiper>
            <div class="absolute lg:-left-8 left-0 z-10 h-[280px] flex items-center top-0">
                <button type="button" class="w-8 h-8 rounded-full border-[1px] border-[#00000033] flex items-center justify-center beforeEl">
                    <img src="@/assets/icons/arrow.svg" class="rotate-180" alt="prev">
                </button>
            </div>
            <div class="absolute lg:-right-8 right-0 z-10 h-[280px] flex items-center top-0">
                <button type="button" class="w-8 h-8 rounded-full border-[1px] border-[#00000033] flex items-center justify-center nextEl">
                    <img src="@/assets/icons/arrow.svg" alt="next">
                </button>
            </div>
        </Box>
    </section>
</template>

<script lang="ts" setup>
import Box from '@/components/Box.vue';
import Text from '@/components/Text.vue';
import {Swiper,SwiperSlide} from 'swiper/vue';
import {Categories} from '@/components/card';
import {Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import data from '@/data/categories.json'

// Swiper Config
const breakpoints = {
    0 : {
        slidesPerView : 1
    },
    768 : {
        slidesPerView : 3
    },
    992 : {
        slidesPerView : 4
    }
}

const modules = [Navigation];

const navigation = {
    nextEl : '.nextEl',
    prevEl : '.beforeEl'
}

</script>

<style scoped>
:disabled{
    opacity: 30%;
}

</style>