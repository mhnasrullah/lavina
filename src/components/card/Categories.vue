<template>
    <div class="group relative before:h-[280px] before:absolute before:left-0 before:top-0 before:bg-second-white transition-all before:w-full before:rounded-lg pt-10 hover:pt-4 text-center">
        <h1 class="relative text-black font-medium text-xl">{{name}}</h1>
        <p class="relative text-black opacity-50 mt-2 text-xs hidden group-hover:block">{{item}} items</p>
        <img :src="image" :width="width" class="relative grayscale group-hover:filter-none mx-auto mt-10 group-hover:mt-4" :alt="name">
    </div>
</template>

<script setup lang="ts">

import { defineProps } from 'vue';

// Props
interface Props {
    name : string,
    item : number,
    image : string,
    width : number
}
const {image,item,name,width} = defineProps<Props>();

</script>