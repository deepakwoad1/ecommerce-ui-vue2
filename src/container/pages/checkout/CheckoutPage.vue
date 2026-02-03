<template>
    <div class="checkout-page">
        <CheckoutHeader />

        <b-row>
            <b-col md="8">
                <CheckoutForm ref="checkoutForm" :disabled="!cartItems.length" @submit="placeOrder" />
            </b-col>

            <b-col md="4">
                <OrderSummary :items="cartItems" :total="cartTotal" />
            </b-col>
        </b-row>
    </div>
</template>

<script>
import CheckoutForm from "./components/CheckoutForm.vue";
import OrderSummary from "./components/OrderSummary.vue";
import CheckoutHeader from "./components/CheckoutHeader.vue";

export default {
    name: "CheckoutPage",
    components: {
        CheckoutForm,
        OrderSummary,
        CheckoutHeader,
    },

    computed: {
        cartItems() {
            return this.$store.getters["cart/cartItems"];
        },
        cartTotal() {
            return this.$store.getters["cart/cartTotal"];
        },
    },

    mounted() {
        if (!this.cartItems.length) {
            this.$router.push("/");
        }
    },

    methods: {
        async placeOrder(form) {
            try {
                await this.$store.dispatch("cart/checkout", form);

                this.$bvToast.toast("Order placed successfully!", {
                    variant: "success",
                    solid: true,
                    toaster: "b-toaster-top-right",
                });

                this.$refs.checkoutForm.onReset();
            } catch (error) {
                this.$bvToast.toast(
                    error.message || "Order failed. Please try again.",
                    {
                        variant: "danger",
                        solid: true,
                        toaster: "b-toaster-top-right",
                    }
                );
            }
        }

    },
};
</script>


<style scoped>
.checkout-page {
    /* padding-top: 80px; */
    max-width: 1100px;
    margin: auto;
}

.page-title {
    font-weight: 600;
}

.checkout-card {
    border-radius: 10px;
    background: #ffffff;
}

.card-title {
    font-weight: 600;
}

/* Order summary */
.summary-card {
    background: #f9fafb;
}

.summary-item {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    margin-bottom: 10px;
}

.total-row {
    font-size: 1rem;
    font-weight: 600;
}

/* Mobile tweaks */
@media (max-width: 768px) {
    .checkout-page {
        padding-top: 72px;
    }
}
</style>
