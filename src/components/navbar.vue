<template>
<nav class="navbar">
    <div class="nav-brand">
        <span class="mdi mdi-chart-bubble text-3xl"></span>
        <span class="nav-brand-text">Tailwind CSS</span>
    </div>
    <div class="block lg:hidden">
        <button class="nav-menu" @click="collapse = !collapse" >
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
        </button>
    </div>
    <div :class="collapse ? 'block': 'hidden'" class="nav-list" >
        <div class="text-sm"> 
            <router-link class="nav-link" to="/">Home</router-link> 
            <router-link class="nav-link" to="/about">About</router-link>
        </div>

    </div>
</nav>
</template>

<script>
export default {
    name: 'Root',
    /*-------------------------ประกาศ components ---------------------------------------*/
    components: {

    },
    /*-------------------------รับค่าเมื่อเราเป็น components---------------------------------------*/
    props: {

    },
    /*-------------------------ประกาศตัวแปรที่ใช้ ผูกกับ v-model ---------------------------------------*/
    data() {
        return {

            collapse:false

        };
    },
    /*------------------------- สิ่งทที่อยู่ในนี้จะถูกรัยเมื่อโหลด ------------------------------------------*/
    mounted: async function () {
        /**** เรียกใช้ methods ชื่อ load() */
        await this.load();
    },
    /*------------------------- กระทำการตอน router ถูกโหลดเข้ามา------------------------------------------*/
    async beforeRouteEnter(to, from, next) {
        next()
    },
    /*-------------------------ใช้จัดการ operation  หรือ คำนวณค่าต่างๆ (คล้าย methods)------------------------------------------*/
    computed: {

    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        /******* Methods default run ******/
        load: async function () {}
    },
}
</script>

<style lang="postcss" scoped>
.navbar {
    @apply flex items-center justify-between flex-wrap bg-blue-500 p-6;
}

.nav-brand {
    @apply flex items-center flex-shrink-0 text-white mr-6;
}

.nav-brand-text {
    @apply font-semibold text-xl tracking-tight;
}

.nav-list {
    @apply w-full  ;
}

.nav-menu {
    @apply flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400;
}

.nav-menu:hover {
    @apply text-white border-white;
}

.nav-link {
    @apply block mt-4 text-white mr-4 text-free ;
}

.nav-link:hover {
    @apply text-teal-200;
}

@screen lg {
    .nav-link {
        @apply inline-block mt-0;
    }

    .nav-list {
        @apply flex block items-end w-auto;
    }
}
</style>
