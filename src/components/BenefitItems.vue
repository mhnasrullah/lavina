<template>
    <div>
        <img :src="image" class="w-12 mx-auto lg:mx-0" :alt="name">
        <h6 class="text-gray font-semibold mt-3 text-center lg:text-left">{{ name }}</h6>
        <p class="text-xs text-[#828282] mt-2 px-4 text-center md:px-24 lg:px-0 lg:pr-8 lg:text-left">{{ description }}</p>
    </div>
</template>

<script setup lang="ts">

import { defineProps } from 'vue';

// PROPS

interface Props {
    image : string,
    name : string,
    description : string
}

const {description,image,name} = defineProps<Props>()

// END PROPS

</script>