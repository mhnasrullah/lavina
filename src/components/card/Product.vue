<template>
    <div class="h-80 w-full relative shadow-sm rounded-lg group">
        <div class="rounded-t-lg bg-second-white relative w-full h-3/5">
            <img 
            :src="image" 
            class="mx-auto w-44 translate-y-5 grayscale group-hover:filter-none transition-all group-hover:translate-y-0" 
            :alt="name">
        </div>
        <div class="rounded-b-lg bg-white w-full h-2/5 p-2">
            <p class="text-xs text-[#00000033]">{{ category }}</p>
            <h6 class="font-semibold mt-1">{{ name }}</h6>
            <div class="flex space-x-1 mt-1">
                <img src="@/assets/icons/star.svg" v-if="getStar" v-for="n in getStar" class="w-3" :key="n" alt="star">
                <img src="@/assets/icons/star.svg" v-else class="opacity-0 w-3" alt="none">
            </div>
            <div class="flex items-center justify-between mt-5">
                <p class="text-sm font-semibold text-gray">{{ getPrice }}</p>
                <button class="p-2 lg:p-3 bg-gray rounded-full hover:bg-orange transition-all">
                    <img src="@/assets/icons/cart.svg" class="w-4" alt="cart">
                </button>
            </div>
        </div>
        <button 
        @click="toggleLike"
        class="absolute rounded-full flex items-center justify-center bg-white top-2 right-2 hover:scale-110 transition-all hover:rotate-12 w-6 h-6">
            <img v-if="!isLiked" src="@/assets/icons/loveinactive.svg" class="w-4" alt="unlike">
            <img v-else src="@/assets/icons/loveactive.svg" class="w-4" alt="like">
        </button>
    </div>
</template>

<script lang="ts" setup>
    import { computed,ref } from 'vue';
    import { RupiahFormat } from '@/utils/func';

    // STATE
    
    const isLiked = ref<boolean>(false);
    
    // END STATE

    // PROPS 

    interface Props {
        image : string,
        category : string,
        star? : number,
        price : number,
        name : string,
    }

    const {category,image,name,price,star} = defineProps<Props>()

    // END PROPS

    // COMPUTED

    /**
     * it's for generate star value, 
     * star must greater than 0 or it will return false
     */
    const getStar = computed(()=> star && star > 0 ? star : false);

    /**
     * it's for generate format rupiah from integer
     */
    const getPrice = computed(()=> RupiahFormat(price))

    // END COMPUTED

    // METHOD

    const toggleLike = ()=>isLiked.value = !isLiked.value

    // END METHOD

</script>