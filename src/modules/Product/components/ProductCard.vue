<template>
    <b-card class="product-card h-100">
        <div class="img-wrapper">
            <img :src="product.images[0]" class="product-img" />
        </div>

        <div class="card-body d-flex flex-column">
            <h6 class="title">{{ product.title }}</h6>

            <p class="desc text-muted">
                {{ product.description }}
            </p>

            <div class="mt-auto d-flex justify-content-between align-items-center">
                <strong>{{ formatPrice(product.price) }}</strong>

                <b-button v-if="!isInCart" variant="primary" @click="addToCart">
                    Add to Cart
                </b-button>

                <b-button v-else variant="success" @click="goToCart">
                    Go to Cart
                </b-button>
            </div>
        </div>
    </b-card>
</template>

<script>
import { formatPrice } from "@/modules/Product/ProductHelper";

export default {
    name: "ProductCard",
    props: {
        product: { type: Object, required: true },
    },
    computed: {
        isInCart() {
            return this.$store.getters["cart/isInCart"](this.product.id);
        },
    },
    methods: {
        formatPrice,
        addToCart() {
            this.$store.dispatch("cart/addToCart", {
                productId: this.product.id,
                name: this.product.title,
                price: this.product.price,
            });

            this.$bvToast.toast("Added to cart", {
                variant: "success",
                solid: true,
                toaster: "b-toaster-top-right",
            });
        },
        goToCart() {
            this.$router.push("/cart");
        },
    },
};
</script>

<style scoped>
.product-card {
    display: flex;
    flex-direction: column;
}

.img-wrapper {
    height: 200px;
    overflow: hidden;
}

.product-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.title {
    font-size: 0.95rem;
    font-weight: 600;
}

.desc {
    font-size: 0.85rem;
    line-height: 1.4;
}
</style>
