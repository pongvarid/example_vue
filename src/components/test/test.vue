<template>
<div>
    <select @change="onChange" v-model="id" class="border border-gray-200 bg-gray-200 text-gray-700 py-3 px-4 pr-8 rounded">
        <option value="1">นาย</option>
        <option value="2">นาง</option>
        <option value="3">นางสาว</option>
    </select>

    
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
        value:{
            default:1,
        }
    },
    /*-------------------------ประกาศตัวแปรที่ใช้ ผูกกับ v-model ---------------------------------------*/
    data() {
        return {
            id:1
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
        onChange:function(){ 
            this.$emit('input', this.id);
        },
        /******* Methods default run ******/
        load: async function () {
            this.id = this.value
        }
    },
}
</script>

<style lang="postcss" scoped>

</style>
