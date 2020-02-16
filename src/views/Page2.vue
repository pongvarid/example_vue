<template>
<div class="p-4">
     
     
     
    <button>
        <span class="mdi mdi-home-circle"></span> Home
    </button>

  

</div>
</template>
<style lang='postcss' scoped>
    .btn{
        @apply bg-orange-600 text-white p-2 rounded
    }
</style>

    
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

            txt: 'Hello World'

        };
    },
    /*------------------------- กระทำการตอน router ถูกโหลดเข้ามา------------------------------------------*/
    async beforeRouteEnter(to, from, next) {
        next()
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {

    },
}
</script>

