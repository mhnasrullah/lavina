<template>
    <h1 
    v-if="type === 'header'"
    class="text-3xl lg:text-5xl leading-normal lg:leading-[1.5] font-bold"
    :class="style"
    ><slot/></h1>
    <h2 
    v-else-if="type === 'lg'"
    class="font-semibold text-lg lg:text-2xl"
    :class="style"><slot/></h2>
</template>

<script setup lang="ts">

    import {defineProps,computed} from 'vue'

    interface PropsType{
        type : 'header' |'lg',
        color? : 'text-white' | 'text-gray' |'text-black'| 'text-orange',
        class? : string
    }

    const {type,color,class : classAdd} = withDefaults(defineProps<PropsType>(),{
        color : 'text-white'
    })

    const style = computed(()=> `${color} ${classAdd && classAdd}`)

</script>