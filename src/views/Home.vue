<template>
<div>
    <h1 class="box">{{txt}}</h1>
</div>
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
            txt: "Hello World" 
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
    /*-------------------------ใช้จัดการ operation  หรือ คำนวณค่าต่างๆ ------------------------------------------*/
    computed: {

    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        /******* Methods default run ******/
        load: async function () {

        }
    },
}
</script>

<style lang='postcss' scoped>
     .box{
         @apply m-2 p-2 w-40;
         @apply bg-red-600 text-white text-3xl;
         
     } 
     .box:hover{
         @apply bg-green-900;
     }
    @screen md {
        .box{
            @apply bg-orange-500
        }
    }

</style>
