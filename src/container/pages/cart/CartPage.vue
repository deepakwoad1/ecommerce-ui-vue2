<template>
    <div>
        <h3>Your Cart</h3>

        <p v-if="!items.length">Your cart is empty</p>

        <CartItem v-for="item in items" :key="item.productId" :item="item" @remove="removeFromCart"
            @update="updateQuantity" />

        <div v-if="items.length" class="text-right mt-4">
            <h5>Total: ₹ {{ total }}</h5>

            <b-button variant="primary" @click="checkout">
                Proceed to Checkout
            </b-button>
        </div>
    </div>
</template>

<script>
import CartItem from "@/modules/Cart/components/CartItem.vue";

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
