<template>
    <b-card class="product-card h-100">
        <!-- Image -->
        <div class="img-wrapper">
            <img :src="product.image" :alt="product.title" class="product-img" />
        </div>

        <!-- Content -->
        <div class="card-body d-flex flex-column">
            <h6 class="title" :title="product.title">
                {{ product.title }}
            </h6>

            <p class="desc text-muted">
                {{ product.description }}
            </p>

            <div class="mt-auto d-flex justify-content-between align-items-center">
                <strong class="price">
                    {{ formatPrice(product.price) }}
                </strong>

                <b-button v-if="!isInCart" variant="primary" size="sm" @click="addToCart">
                    + Add
                </b-button>

                <b-button v-else variant="outline-success" size="sm" @click="goToCart">
                    ✓ In Cart
                </b-button>
            </div>
        </div>
    </b-card>
</template>

<script>
import { formatPrice } from "@/utils/product.helper";

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
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.product-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

/* Image */
.img-wrapper {
    height: 220px;
    overflow: hidden;
    background: #f9fafb;
}

.product-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.product-card:hover .product-img {
    transform: scale(1.05);
}

/* Content */
.title {
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 6px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.desc {
    font-size: 0.85rem;
    line-height: 1.4;
    height: 42px;
    overflow: hidden;
}

.price {
    font-size: 0.95rem;
}
</style>
