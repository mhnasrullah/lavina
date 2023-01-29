<template>
    <div 
    :class="position"
    class="absolute z-20 hidden lg:block">
        <div 
        :class="!show && 'hidden'"
        class="p-4 pb-4 w-[200px] bg-white bg-opacity-10 mb-3 relative overflow-hidden before:absolute before:inset-0 before:bg-[#00000055] before:backdrop-blur-[10px] rounded-lg text-white font-semibold">
            <div class="relative">
                <h1 class="mb-2">{{name}}</h1>
                <p class="text-xs mt-4">{{ description }}</p>
                <p class="mt-4">{{ priceRp }}</p>
                <Button
                class="w-full mt-4"
                :style="'secondary'">View Product</Button>
            </div>
        </div>
        <div class="w-[200px] flex justify-center">
            <button @click="toggleShow" class="h-4 w-4 rounded-full bg-white" />
        </div>
    </div>
</template>

<script lang="ts" setup>
    import Button from './Button.vue';

    import { defineProps,computed,ref } from 'vue';
    import { RupiahFormat } from '@/utils/func';

    // Props
    interface Props {
        position : string,
        name : string,
        description : string,
        price : number,
    }
    const {position,description,name,price} = defineProps<Props>();

    // State
    const show = ref<boolean>(false)


    // Computed
    const priceRp = computed(()=>{
        return RupiahFormat(price)
    })
    
    // Method
    const toggleShow = () => {
        show.value = !show.value
    }

</script>