<template>
    <div class="cart-page">
        <h3 class="page-title mb-4">🛒 Your Cart</h3>

        <!-- Empty state -->
        <b-card v-if="!items.length" class="empty-cart text-center">
            <p class="mb-3">Your cart is empty</p>
            <b-button variant="primary" @click="$router.push('/')">
                Continue Shopping
            </b-button>
        </b-card>

        <!-- Cart items -->
        <CartItem v-for="item in items" :key="item.productId" :item="item" @remove="removeFromCart"
            @update="updateQuantity" />

        <!-- Summary -->
        <b-card v-if="items.length" class="cart-summary mt-4">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h5 class="mb-1">Total</h5>
                    <small class="text-muted">
                        {{ items.length }} item(s) in cart
                    </small>
                </div>

                <div class="text-right">
                    <h4 class="total-amount mb-2">$ {{ total }}</h4>
                    <b-button variant="primary" @click="checkout">
                        Proceed to Checkout →
                    </b-button>
                </div>
            </div>
        </b-card>
    </div>
</template>

<script>
import CartItem from "@/container/pages/cart/components/CartItem.vue";

export default {
    name: "CartPage",
    components: { CartItem },

    computed: {
        items() {
            return this.$store.getters["cart/cartItems"];
        },
        total() {
            return this.$store.getters["cart/cartTotal"];
        },
    },

    methods: {
        removeFromCart(productId) {
            this.$store.dispatch("cart/removeFromCart", productId);
        },
        updateQuantity(payload) {
            this.$store.dispatch("cart/updateQuantity", payload);
        },
        checkout() {
            this.$router.push("/checkout");
        },
    },
};
</script>

<style scoped>
.cart-page {
    padding-top: 80px;
    /* fixed header offset */
    max-width: 900px;
    margin: auto;
}

.page-title {
    font-weight: 600;
}

.empty-cart {
    padding: 40px;
    color: #6b7280;
}

.cart-summary {
    background: #f9fafb;
}

.total-amount {
    font-weight: 700;
}
</style>
