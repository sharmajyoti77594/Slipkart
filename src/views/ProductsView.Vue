<script>
import Product from '../components/Product.vue';
import Shoes from '../assets/img/Shoes.jpeg';
import Watch from '../assets/img/watch.webp';
import Wallet from '../assets/img/wallet.jpeg';
import AddProduct from './AddProduct.vue';

export default {
  data () {
    console.log('2');
    return {
        products : [
            {
            id: '1',
            name : 'watch',
            img : Watch
            },
            {
            id: '2',
            name : 'shoes',
            img : Shoes
            },
            {
                id: '3',
            name : 'wallet',
            img : Wallet
            },
            {
                id: '4',
            name : 'watch',
            img : Watch
            }
        ],
        description: {},
        currentPage: 1,
        perPage: 10,
        methods: {
        }
      }
  },
  methods : {
    deleteProduct (e, id) {
        this.products = this.products.filter(product => product.id != id)
    },
    productOrder (products) {
        products = products.reverse();
    }
  },
  computed: {
            totalItems() {
            return this.items.length;
            },
            displayedItems() {
            const startIndex = (this.currentPage - 1) * this.perPage;
            const endIndex = startIndex + this.perPage;
            return this.items.slice(startIndex, endIndex);
            }
  },
mounted () {
    console.log('1');
    if (!JSON.parse(localStorage.getItem('product_list'))) {
        localStorage.setItem('product_list', JSON.stringify(this.products));
    } else {
        this.products = JSON.parse(localStorage.getItem('product_list'));
    }
    this.total = this.products.length;
    this.products = this.products.reverse();
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => this.description = data)
      .catch(e => console.log(e))
},
  components: {
    Product
  },
}
</script>

<template>
    <!-- Start Categories of The Month -->
    <section class="container py-5">
        <div class="row text-center pt-3">
            <div class="col-lg-6 m-auto">
                <h1 class="h1">Products of the month</h1>
                <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
        <div class="row">
            <div v-for="item in products" :key="item.img">
              <Product  :item="item" :deleteMethod="deleteProduct" />
            </div>
        </div>
        <div>
            <p>
                Posted by {{ description.title }}
            </p>
        </div>
        <!-- <div class="pagination">
            <PaginationComponent :total="totalItems" :per-page="perPage" v-model="currentPage"/>
        </div> -->
    </section>
    <!-- End Categories of The Month -->
</template>

<style>
    .pagination {
    display: -ms-flexbox;
    display: flex;
    padding-left: 0;
    list-style: none;
    border-radius: 0.25rem;
    margin-bottom: 150px;
    }
</style>