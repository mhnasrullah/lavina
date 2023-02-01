<template>

<button v-if=" as === `button` " :class="styleButton"><slot/></button>
<router-link v-else-if="as === 'router-link' && href" :class="styleButton" :to="href"><slot/></router-link>

</template>

<script lang="ts" setup>

import {defineProps, withDefaults, computed} from 'vue'
import { RouteLocationRaw } from 'vue-router';
    
const baseStyle = 'py-2 px-4 rounded-lg text-sm whitespace-nowrap hover:opacity-90'

interface Props {
    style : 'primary' | 'secondary',
    as? : 'button' | 'router-link',
    href? : RouteLocationRaw,
    class? : string
}

const {style,as,href,class : classAdd} = withDefaults(defineProps<Props>(),{
    as : 'button'
})

const styleButton = computed(()=>{
    switch (style) {
        case 'primary' : 
            return `bg-orange text-white ${classAdd ? classAdd : ' '} ${baseStyle}`;
        case 'secondary' : 
            return `bg-white text-black ${classAdd ? classAdd : ' '} ${baseStyle}`
    }
})


</script>