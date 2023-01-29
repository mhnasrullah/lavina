<template>

<button v-if=" as === `button` " :class="styleButton"><slot/></button>
<router-link v-else-if="as === 'router-link' && href" :to="href"><slot/></router-link>

</template>

<script lang="ts" setup>

import {defineProps, withDefaults, computed} from 'vue'
import { RouteLocationRaw } from 'vue-router';
    
const baseStyle = 'py-2 rounded-lg text-sm'

interface Props {
    style : 'primary' | 'secondary',
    as? : 'button' | 'router-link',
    href? : RouteLocationRaw
}

const styleButton = computed(()=>{
    switch (style) {
        case 'primary' : 
            return `bg-orange text-white ${baseStyle}`;
        case 'secondary' : 
            return `bg-white text-black ${baseStyle}`
    }
})

const {style,as,href} = withDefaults(defineProps<Props>(),{
    as : 'button'
})

</script>