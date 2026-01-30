<template>
    <div>
        <h3 class="mb-4">Checkout</h3>

        <b-row>
            <!-- LEFT: Shipping Form -->
            <b-col md="8">
                <b-card title="Shipping Details">
                    <b-form @submit.prevent="placeOrder">
                        <b-form-group label="Full Name">
                            <b-form-input v-model="form.name" required />
                        </b-form-group>

                        <b-form-group label="Phone Number">
                            <b-form-input v-model="form.phone" required />
                        </b-form-group>

                        <b-form-group label="Address">
                            <b-form-textarea v-model="form.address" rows="3" required />
                        </b-form-group>

                        <b-form-group label="Pincode">
                            <b-form-input v-model="form.pincode" required />
                        </b-form-group>

                        <b-form-group label="Payment Method">
                            <b-form-radio-group v-model="form.paymentMethod">
                                <b-form-radio value="COD">Cash on Delivery</b-form-radio>
                                <b-form-radio value="ONLINE" disabled>
                                    Online (Coming Soon)
                                </b-form-radio>
                            </b-form-radio-group>
                        </b-form-group>

                        <b-button variant="primary" type="submit" :disabled="!canPlaceOrder">
                            Place Order
                        </b-button>
                    </b-form>
                </b-card>
            </b-col>

            <!-- RIGHT: Order Summary -->
            <b-col md="4">
                <b-card title="Order Summary">
                    <div v-for="item in cartItems" :key="item.productId" class="d-flex justify-content-between mb-2">
                        <span>{{ item.name }} × {{ item.quantity }}</span>
                        <strong>₹ {{ item.price * item.quantity }}</strong>
                    </div>

                    <hr />

                    <div class="d-flex justify-content-between">
                        <strong>Total</strong>
                        <strong>₹ {{ cartTotal }}</strong>
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: "CheckoutPage",

    data() {
        return {
            form: {
                name: "",
                phone: "",
                address: "",
                pincode: "",
                paymentMethod: "COD",
            },
        };
    },

    computed: {
        cartItems() {
            return this.$store.getters["cart/cartItems"];
        },
        cartTotal() {
            return this.$store.getters["cart/cartTotal"];
        },
        canPlaceOrder() {
            return (
                this.form.name &&
                this.form.phone &&
                this.form.address &&
                this.form.pincode &&
                this.cartItems.length
            );
        },
    },
    mounted() {
        // ✅ Redirect if cart is empty
        if (!this.cartItems.length) {
            this.$router.push("/");
        }
    },
    methods: {
        placeOrder() {
            const payload = {
                items: this.cartItems.map(item => ({
                    productId: item.productId,
                    quantity: item.quantity,
                })),
                shippingAddress: {
                    name: this.form.name,
                    phone: this.form.phone,
                    address: this.form.address,
                    pincode: this.form.pincode,
                },
                paymentMethod: this.form.paymentMethod,
            };

            console.log("ORDER PAYLOAD:", payload);

            this.$bvToast.toast("Order placed successfully!", {
                variant: "success",
                solid: true,
                toaster: "b-toaster-top-right",
            });

            this.$store.dispatch("cart/clearCart");
            this.$router.push("/");
        },
    },
};

</script>