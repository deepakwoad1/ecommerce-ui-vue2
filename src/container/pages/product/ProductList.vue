<template>
    <div>
        <h3 class="mb-4">Products</h3>

        <BaseLoader v-if="loading" />

        <b-row v-else>
            <b-col v-for="product in products" :key="product.id" cols="12" md="6" lg="4" class="mb-4">
                <ProductCard :product="product" @add="addToCart" />
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { mapState } from "vuex";
import ProductCard from "@/modules/Product/components/ProductCard.vue";

export default {
    name: "ProductList",
    components: { ProductCard },

    computed: {
        ...mapState("product", ["products", "loading"]),
    },

    mounted() {
        this.$store.dispatch("product/loadProducts");
    },

    methods: {
        addToCart(product) {
            let cart = JSON.parse(localStorage.getItem("cart") || "[]");
            const item = cart.find(p => p.id === product.id);

            if (item) item.qty += 1;
            else cart.push({ ...product, qty: 1 });

            localStorage.setItem("cart", JSON.stringify(cart));
        },
    },
};
</script>
