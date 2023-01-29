<template>
    <div 
    class="bg-[#ffffff77] flex p-2 pl-3 border-white border-[1px] text-sm"
    :class="styled">
        <input 
        :placeholder="placeholder"
        type="text" class="bg-trans outline-none w-full text-white placeholder:text-white">
        <img v-if="searchIcons" src="@/assets/icons/search.svg" class="w-8" alt="icons">
    </div>
</template>

<script setup lang="ts">

    import { defineProps,withDefaults,computed } from 'vue';

    interface Props{
        round? : 'full' | 'small',
        searchIcons? : boolean,
        placeholder? : string,
        class? : string
    }

    const {round,searchIcons,placeholder,class : classAdd} = withDefaults(defineProps<Props>(),{
        round : 'small',
    })

    // Compute Binding style
    const styled = computed(()=>{

        const style : string[] = [];
    
        if(classAdd) style.push(classAdd);
    
        if(round === 'full') style.push("rounded-full");
        else if(round === 'small') style.push("rounded-sm");

        return style
    })

</script>