<script>
  import Pagination from 'vue-pagination-2';
  
  export default {
    name: 'PaginationComponent',
    components: {
      Pagination,
    },
    props: {
      totalItems: {
        type: Number,
        required: true,
      },
      perPage: {
        type: Number,
        required: true,
      },
      currentPage: {
        type: Number,
        required: true,
      },
    },
    computed: {
        getCurrentPage() {
            return this.currentPage
        }
    }
  };
  </script>
<template>
    <div>
      <Pagination :total="totalItems" :per-page="perPage" v-model="getCurrentPage"/>
    </div>
  </template>
  