<script>
    export default {
        name : 'AddProduct',
        methods : {
            submit(e) {
                if (this.$route.params.id) {
                    this.prodList = [...this.prodList.filter(prod => prod.id != this.$route.params.id), { id : this.$route.params.id, name : this.productName, img : this.productImage}]
                } else {
                    let id = this.prodList.length + 1
                    this.prodList = [...this.prodList, { id, name : this.productName, img : this.productImage}];
                }
                localStorage.setItem('product_list', JSON.stringify(this.prodList));
                this.$router.push('/');
            }
        },
        data() {
            return {
                prodList: [],
                productName : '',
                productImage : ''
            }
        },
        mounted () {
            this.prodList = JSON.parse(localStorage.getItem('product_list'));
            let id = this.$route.params.id;
            console.log(id);
            if (id) {
                this.productName =  this.prodList.find(prod => prod.id == id).name;
                this.productImage = this.prodList.find(prod => prod.id == id).img;
            }


        }
    }
</script>

<template>
    <v-card-text class="p-cnt">
        <v-sheet width="500">
            <v-form validate-on="submit" @submit.prevent="submit">
                <v-text-field label="Product name" v-model="productName"></v-text-field>
                <v-text-field label="Product image url" v-model="productImage"></v-text-field>
                <v-btn type="submit" block class="mt-2">Submit</v-btn>
            </v-form>
        </v-sheet>
    </v-card-text>
</template>

<style>
    .p-cnt {
        display: flex;
        justify-content: center;
    }
</style>