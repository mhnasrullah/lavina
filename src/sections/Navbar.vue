<template>
    <nav 
    :class="showNav ? 'bg-gray md:bg-trans md:rounded-none md:shadow-none rounded-b-xl shadow-lg' : 'bg-trans'"
    class="fixed w-full py-4 md:top-4 lg:top-6">
        <Box class="md:grid md:grid-cols-navbar">
            <!-- Left -->
            <div class="bg-trans flex justify-between items-center">
                <Logo/>
                <button 
                @click="toggleNav"
                class="md:hidden">
                    <img class="w-5" src="@/assets/icons/menu.svg" alt="menu">
                </button>
            </div>

            <!-- Center -->
            <div 
            :class="showNav ? 'flex' : 'hidden md:flex'"
            class="md:w-full md:flex-row flex-col space-y-4 md:space-y-0 py-6 md:py-0 text-white text-sm justify-center items-center md:space-x-3 lg:space-x-10">
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

<script lang="ts">
    import { defineComponent} from 'vue';
    import Logo from '@/components/Logo.vue';
    import Box from '@/components/Box.vue';

    export default defineComponent({
        name : 'Nav',
        data() {
            return {
                showNav : false
            }
        },
        components : {
            Logo,Box
        },
        methods : {
            toggleNav(){
                this.showNav = !this.showNav 
            } 
        },
        setup(){
            const nav = ['Categories','Furniture','Interior Design','About Us']
            return {nav}
        }
    })
</script>
