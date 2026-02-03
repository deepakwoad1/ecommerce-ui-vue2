<template>
    <div class="product-page">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h3 class="page-title">🛍️ Products</h3>
        </div>

        <!-- Loader -->
        <BaseLoader v-if="loading" />

        <!-- Error state -->
        <b-alert v-else-if="error" variant="danger" show class="text-center">
            {{ error }}
            <div class="mt-2">
                <b-button size="sm" variant="outline-light" @click="retry">
                    Retry
                </b-button>
            </div>
        </b-alert>

        <!-- Product list -->
        <b-row v-else>
            <b-col v-for="product in products" :key="product.id" cols="12" sm="6" lg="4" class="mb-4">
                <ProductCard :product="product" />
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { mapState } from "vuex";
import ProductCard from "@/container/pages/product/components/ProductCard.vue";

export default {
    name: "ProductPage",
    components: { ProductCard },

    computed: {
        ...mapState("product", ["products", "loading", "error"]),
    },

    mounted() {
        this.retry();
    },

    methods: {
        retry() {
            this.$store.dispatch("product/loadProducts");
        },
    },
};
</script>


<style scoped>
/* .product-page { */
/* padding-top: 80px; */
/* fixed header offset */
/* } */

.page-title {
    font-weight: 600;
}
</style>
