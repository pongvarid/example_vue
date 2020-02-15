<template>
<div>
    <div class="container mx-auto">
         <button class="btn bg-blue-600" @click="gotoIcon()">Icon</button>
         <button class="btn bg-blue-600" @click="gotoTailwind()">Tailwind Doc</button>
         <button class="btn bg-blue-600" @click="gotoGoogleFont()">Google Font</button>
    </div>
    
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

            txt: 'Hello World'

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
        gotoIcon(){
            window.open('http://materialdesignicons.com/cdn/3.2.89/');
        },
         gotoGoogleFont(){
            let link = 'https://fonts.google.com/';
             window.open(link);
        },
        gotoTailwind(){
            let link = 'https://tailwindcss.com/docs/installation/';
             window.open(link);
        },
        /******* Methods default run ******/
        load: async function () {}
    },
}
</script>

<style lang='postcss' scoped>
    .btn{
        @apply p-4 rounded w-auto m-6 text-3xl text-white
    }
</style>
