<template>
    <div 
    class="flex p-2 pl-3 border-white border-[1px] text-sm"
    :class="styled">
        <input 
        :placeholder="placeholder"
        :class="type === 'secondary' ? 'placeholder:text-gray' : 'placeholder:text-white'"
        type="text" class="bg-trans outline-none w-full">
        <button v-if="searchIcons" class="hover:opacity-90">
            <img src="@/assets/icons/search.svg" class="w-8" alt="icons">
        </button>
    </div>
</template>

<script setup lang="ts">

    import { defineProps,withDefaults,computed } from 'vue';

    interface Props{
        type? : 'primary' | 'secondary'
        round? : 'full' | 'medium',
        searchIcons? : boolean,
        placeholder? : string,
        class? : string
    }

    const {round,searchIcons,placeholder,class : classAdd,type} = withDefaults(defineProps<Props>(),{
        round : 'medium',
        type : 'primary'
    })

    // Compute Binding style
    const styled = computed(()=>{

        const style : string[] = [];
    
        if(type === 'secondary'){
            style.push('bg-[#f2f2f2] text-gray')
        }else{
            style.push('bg-[#ffffff77] text-white')
        }

        if(classAdd) style.push(classAdd);
    
        if(round === 'full') style.push("rounded-full");
        else style.push("rounded-md");

        return style
    })

</script>