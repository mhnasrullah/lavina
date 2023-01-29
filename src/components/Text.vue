<template>
    <h1 
    v-if="type === 'header'"
    class="text-3xl lg:text-5xl leading-normal lg:leading-[1.5] font-bold"
    :class="style"
    ><slot/></h1>
    <h2 
    v-else-if="type === 'lg'"
    class=""
    :class="style"><slot/></h2>
</template>

<script setup lang="ts">

    import {defineProps} from 'vue'

    interface PropsType{
        type : 'header' |'lg',
        color? : 'text-white' | 'text-gray' |'text-black',
        class? : string
    }

    const {type,color,class : classAdd} = withDefaults(defineProps<PropsType>(),{
        color : 'text-white'
    })

    const style = `${color} ${classAdd && classAdd}`

</script>