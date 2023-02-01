<template>
    <div class="bg-white shadow-sm rounded-lg group">
        <div class="w-full h-52 md:h-72 overflow-hidden rounded-t-lg">
            <img :src="image" :alt="title" class="w-full group-hover:scale-105 h-52 md:h-72 object-cover transition-all object-center rounded-t-lg">
        </div>
        <div class="p-4">
            <p class="text-[#828282] text-xs mt-2">{{ `${author} - ${date}` }}</p>
            <h2 class="text-gray font-semibold min-h-[80px] mt-2 lg:pr-14">{{ title }}</h2>
            <router-link class="group/route text-sm text-orange" to="/">Read Article <span class="group-hover/route:ml-4 transition-all">&rarr;</span></router-link>
        </div>
    </div>
</template>

<script lang="ts" setup>

import {defineProps} from 'vue'

// PROPS

interface Props {
    image : string,
    author : string,
    date : string,
    title : string
}

const {author,date,image,title} = defineProps<Props>()
// END PROPS

</script>