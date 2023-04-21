<script>
    export default {
        props: {
            item : {
                type : Object,
                default : {} 
            },
            deleteMethod : {
                type : Function
            }
        },
        methods: {
            getProduct(e) {
                console.log(e, e.target.props);
            },
            modifyProduct (e, id) {
                console.log(id);
                this.$router.push({
                    name : 'update',
                    params : {
                        id
                    }
            })
    }
        }
    }
</script>

<template>
    <!-- Start Categories of The Month -->
            <div class="col-12 p-5 mt-3" @click="getProduct">
                <a href="#"><img :src='item.img' class="rounded-circle img-fluid border" :productId="item.id"></a>
                <h5 class="text-center mt-3 mb-3">{{ item.name }}</h5>
                <p class="text-center"><a class="btn btn-success">Go Shop</a></p>
            </div>
            <div class="text-center m-t36">
                <v-btn @click="modifyProduct($event, item.id)">Edit</v-btn><v-btn @click="deleteMethod($event, item.id)">Delete</v-btn>
            </div>
    <!-- End Categories of The Month -->
</template>

<style scoped>
    img {
        width: 270px;
        height: 270px;
    }
    .m-t36 {
        margin-top: -36px;
    }
</style>