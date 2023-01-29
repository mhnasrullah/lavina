<template>
    <!-- !bgTrans ? 'lg-top-0 bg-trans' : `lg:top-6 bg-gray ${showNav && `md:bg-trans md:rounded-none md:shadow-none rounded-b-xl shadow-lg z-[10000]`}` -->
    <nav 
    :class="bgTrans ? 'bg-trans md:top-4' : 'bg-gray rounded-b-xl shadow-lg md:top-0'"
    class="w-full py-4 fixed z-[1000] transition-all">
        <Box class="md:grid md:grid-cols-navbar">
            <!-- Left -->
            <div class="bg-trans flex justify-between items-center relative z-10">
                <Logo/>
                <button 
                @click="toogleNav"
                class="md:hidden hover:rotate-12 transition-all">
                    <img class="w-5" src="@/assets/icons/menu.svg" alt="menu">
                </button>
            </div>

            <!-- Center -->
            <div 
            :class="showNav ? 'flex w-full bg-gray md:bg-trans md:rounded-b-none md:shadow-none rounded-b-xl shadow-lg fixed md:static left-0 top-0' : 'hidden md:flex'"
            class="md:w-full md:flex-row flex-col space-y-4 md:space-y-0 pb-6 pt-16 md:pt-0 md:py-0 text-white text-sm justify-center items-center md:space-x-3 lg:space-x-10">
                <router-link class="font-medium" to="/" v-for="(e,i) in nav" :key="i">{{e}}</router-link>
            </div>

            <!-- Right -->
            <div class="md:flex justify-end hidden">
                <button class="p-2 lg:p-3 bg-white20 rounded-full hover:bg-[#ffffff55] transition-all">
                    <img src="@/assets/icons/cart.svg" class="w-4" alt="cart">
                </button>
            </div>
        </Box>
    </nav>
</template>

<script lang="ts" setup>

    import {ref} from 'vue';
    import Logo from '@/components/Logo.vue';
    import Box from '@/components/Box.vue';
    
    const nav = ['Categories','Furniture','Interior Design','About Us'];

    const showNav = ref<boolean>(false);
    const bgTrans = ref<boolean>(true);

    window.onscroll = () => {
        if(window.scrollY < 5){
            bgTrans.value = true
        }else{
            bgTrans.value = false
        }
    }

    const toogleNav = () => {
        showNav.value = !showNav.value
    };

</script>
