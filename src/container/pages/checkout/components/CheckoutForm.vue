<template>
    <b-card class="checkout-card">
        <h5 class="card-title mb-3">🚚 Shipping Details</h5>

        <ValidationObserver ref="observer" v-slot="{ invalid, handleSubmit }">
            <b-form @submit.prevent="handleSubmit(submit)">
                <b-row>
                    <!-- Full Name -->
                    <b-col md="6">
                        <ValidationProvider name="Full Name" rules="required|alpha_spaces|min:3" v-slot="{ errors }">
                            <b-form-group label="Full Name">
                                <b-form-input v-model="form.name" placeholder="John Doe"
                                    :state="errors.length ? false : null" />
                                <b-form-invalid-feedback>
                                    {{ errors[0] }}
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </ValidationProvider>
                    </b-col>

                    <!-- Phone -->
                    <b-col md="6">
                        <ValidationProvider name="Phone Number" rules="required|phone" v-slot="{ errors }">
                            <b-form-group label="Phone Number">
                                <b-form-input v-model="form.phone" type="tel" maxlength="10" placeholder="9876543210"
                                    :state="errors.length ? false : null" @input="onPhoneInput" />
                                <b-form-invalid-feedback>
                                    {{ errors[0] }}
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </ValidationProvider>
                    </b-col>
                </b-row>

                <!-- Address -->
                <ValidationProvider name="Address" rules="required|min:10" v-slot="{ errors }">
                    <b-form-group label="Address">
                        <b-form-textarea v-model="form.address" rows="3" placeholder="Street, City, State"
                            :state="errors.length ? false : null" />
                        <b-form-invalid-feedback>
                            {{ errors[0] }}
                        </b-form-invalid-feedback>
                    </b-form-group>
                </ValidationProvider>

                <b-row>
                    <!-- Pincode -->
                    <b-col md="6">
                        <ValidationProvider name="Pincode" rules="required|numeric|min:6|max:6" v-slot="{ errors }">
                            <b-form-group label="Pincode">
                                <b-form-input v-model="form.pincode" placeholder="560001"
                                    :state="errors.length ? false : null" />
                                <b-form-invalid-feedback>
                                    {{ errors[0] }}
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </ValidationProvider>
                    </b-col>
                </b-row>

                <!-- Payment -->
                <ValidationProvider name="Payment Method" rules="required" v-slot="{ errors }">
                    <b-form-group label="Payment Method">
                        <b-form-radio-group v-model="form.paymentMethod">
                            <b-form-radio value="COD">💵 Cash on Delivery</b-form-radio>
                            <b-form-radio value="ONLINE" disabled>
                                💳 Online (Coming Soon)
                            </b-form-radio>
                        </b-form-radio-group>

                        <b-form-invalid-feedback>
                            {{ errors[0] }}
                        </b-form-invalid-feedback>
                    </b-form-group>
                </ValidationProvider>

                <!-- Submit -->
                <b-button type="submit" variant="primary" size="lg" block :disabled="invalid">
                    Place Order →
                </b-button>
            </b-form>
        </ValidationObserver>
    </b-card>
</template>

<script>
const initialFormState = {
    name: "",
    phone: "",
    address: "",
    pincode: "",
    paymentMethod: "COD",
};

export default {
    name: "CheckoutForm",

    data() {
        return {
            form: { ...initialFormState },
        };
    },

    methods: {
        submit() {
            this.$emit("submit", {
                shipping: {
                    name: this.form.name,
                    phone: this.form.phone,
                    address: this.form.address,
                    pincode: this.form.pincode,
                },
                paymentMethod: this.form.paymentMethod,
            });
        },

        onReset() {
            this.form = { ...initialFormState };

            // ✅ Reset vee-validate state
            this.$nextTick(() => {
                this.$refs.observer?.reset();
            });
        },

        onPhoneInput(value) {
            this.form.phone = value.replace(/\D/g, "").slice(0, 10);
        },
    },
};
</script>


<style scoped>
.checkout-card {
    border-radius: 10px;
}

.card-title {
    font-weight: 600;
}
</style>
