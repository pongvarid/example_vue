<template>
<div class="relative" >
      <button @click="show = !show" class="rounded text-white">
          <img class="rounded-full w-8 h-auto shadow-xl" src="https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-1/p160x160/84730101_2811645955561543_7400667484996501504_n.jpg?_nc_cat=104&_nc_ohc=YClBA0TmB8kAX_egvf5&_nc_ht=scontent.fbkk12-2.fna&_nc_tp=6&oh=d75a06a806cee940b5066ab6ab99ace0&oe=5EB6F8A3" alt="">
            
      </button>
      <div v-if="show" class="absolute right-0 mt-1 w-48 bg-white shadow-xl rounded">
        <a class="block p-2 hover:bg-yellow-600" href>Menu 1</a>
        <a class="block p-2 hover:bg-yellow-600" href>Menu 2</a>
        <a class="block p-2 hover:bg-yellow-600" href>Menu 3</a>
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
           show:false 
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

<style lang='postcss' scoped>

</style>
