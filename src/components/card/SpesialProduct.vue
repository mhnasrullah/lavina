<template>
    <div 
    class="bg-center bg-cover p-6 pb-32 w-full rounded-lg"
    :style="style">
        <p 
        :class="!discount && 'opacity-0'"
        class="text-orange font-medium text-sm">{{ discount ? discount : ' ' }}</p>
        <Text
        type="lg"
        class="pr-6 mt-4 md:pr-32"
        color="text-white">{{ name }}</Text>
        <router-link to="/" class="text-white text-xs mt-4">Shop collection &rarr;</router-link>
    </div>
</template>

<script lang="ts" setup>

import {defineProps,computed} from 'vue'
import Text from '@/components/Text.vue'

interface Props {
    image : string,
    discount? : string,
    name : string,
}

const {image,name,discount} = defineProps<Props>()

const style = computed(()=>`background-image: url(${image})`)

</script>