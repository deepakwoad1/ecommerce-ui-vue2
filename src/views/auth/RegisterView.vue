<template>
    <div class="register-wrapper">
        <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
            <b-form @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="onReset">

                <!-- Row 1: First Name + Last Name -->
                <b-row>
                    <b-col md="6">
                        <ValidationProvider name="First Name" rules="required|alpha_spaces|min:2|max:50"
                            v-slot="{ errors, failed, passed }">
                            <b-form-group label="First Name:" class="input-14">
                                <b-form-input v-model="form.firstName" placeholder="Enter first name"
                                    :state="failed ? false : passed ? true : null" />
                                <small v-if="failed" class="text-danger">{{ errors[0] }}</small>
                            </b-form-group>
                        </ValidationProvider>
                    </b-col>

                    <b-col md="6">
                        <ValidationProvider name="Last Name" rules="required|alpha_spaces|min:2|max:50"
                            v-slot="{ errors, failed, passed }">
                            <b-form-group label="Last Name:" class="input-14">
                                <b-form-input v-model="form.lastName" placeholder="Enter last name"
                                    :state="failed ? false : passed ? true : null" />
                                <small v-if="failed" class="text-danger">{{ errors[0] }}</small>
                            </b-form-group>
                        </ValidationProvider>
                    </b-col>
                </b-row>

                <!-- Row 2: Username + Phone -->
                <b-row>
                    <b-col md="6">
                        <ValidationProvider name="Username" rules="required|username"
                            v-slot="{ errors, failed, passed }">
                            <b-form-group label="Username:" class="input-14">
                                <b-form-input v-model="form.userName" placeholder="Enter username"
                                    :state="failed ? false : passed ? true : null" />
                                <small v-if="failed" class="text-danger">{{ errors[0] }}</small>
                            </b-form-group>
                        </ValidationProvider>
                    </b-col>

                    <b-col md="6">
                        <ValidationProvider name="Phone Number" rules="required|phone"
                            v-slot="{ errors, failed, passed }">
                            <b-form-group label="Phone Number:" class="input-14">
                                <b-form-input v-model="form.phone" type="tel" maxlength="10"
                                    placeholder="Enter phone number" :state="failed ? false : passed ? true : null" />
                                <small v-if="failed" class="text-danger">{{ errors[0] }}</small>
                            </b-form-group>
                        </ValidationProvider>
                    </b-col>
                </b-row>

                <!-- Email -->
                <ValidationProvider name="Email" rules="required|email|max:100" v-slot="{ errors, failed, passed }">
                    <b-form-group label="Email address:" class="input-14">
                        <b-form-input v-model="form.email" type="email" placeholder="Enter email address"
                            :state="failed ? false : passed ? true : null" />
                        <small v-if="failed" class="text-danger">{{ errors[0] }}</small>
                    </b-form-group>
                </ValidationProvider>

                <!-- Password -->
                <b-row>
                    <b-col md="6">
                        <ValidationProvider name="Password" rules="required|strong_password" vid="password"
                            v-slot="{ errors, failed, passed }">
                            <b-form-group label="Password:" class="input-14">
                                <b-form-input v-model="form.password" type="password" placeholder="Enter password"
                                    :state="failed ? false : passed ? true : null" />
                                <small v-if="failed" class="text-danger">{{ errors[0] }}</small>
                            </b-form-group>
                        </ValidationProvider>
                    </b-col>

                    <b-col md="6">
                        <ValidationProvider name="Confirm Password" rules="required|confirmed:password"
                            v-slot="{ errors, failed, passed }">
                            <b-form-group label="Confirm Password:" class="input-14">
                                <b-form-input v-model="form.confirmPassword" type="password"
                                    placeholder="Confirm password" :state="failed ? false : passed ? true : null" />
                                <small v-if="failed" class="text-danger">{{ errors[0] }}</small>
                            </b-form-group>
                        </ValidationProvider>
                    </b-col>
                </b-row>

                <!-- Buttons -->
                <div class="d-flex justify-content-center mt-4">
                    <b-button type="submit" variant="primary" class="mr-2">
                        Register
                    </b-button>
                    <b-button type="reset" variant="danger">
                        Reset
                    </b-button>
                </div>

                <!-- Login Link -->
                <div class="text-center mt-3">
                    <small>
                        Already have an account?
                        <a href="#" class="font-weight-bold" @click.prevent="login">
                            Login here
                        </a>
                    </small>
                </div>
            </b-form>
        </ValidationObserver>
    </div>
</template>


<style scoped>
/* Increase form width and center it */
.register-wrapper {
    max-width: 850px;
    /* increase width */
    margin: 0 auto;
    padding: 20px;
}

/* Reduce placeholder font size */
::placeholder {
    font-size: 0.85rem;
    color: #9aa0a6;
}

/* For better cross-browser support */
input::-webkit-input-placeholder {
    font-size: 0.85rem;
}

input::-moz-placeholder {
    font-size: 0.85rem;
}

.input-14 {
    font-size: 0.875rem;
}
</style>

<script>
import api from "@/services/api";
import keycloak from "@/keycloak";

const initialFormState = {
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
};

export default {
    name: "RegisterView",
    data() {
        return {
            form: { ...initialFormState },
        };
    },
    methods: {
        async onSubmit() {
            const payload = {
                username: this.form.userName,
                firstName: this.form.firstName,
                lastName: this.form.lastName,
                phoneNumber: this.form.phone,
                email: this.form.email,
                password: this.form.password,
            };

            try {
                console.log(payload);
                await api.post("/api/auth/register-new", payload);

                alert("Registration successful! Please login.");
                this.onReset();

                // Redirect to Keycloak login
                // keycloak.login({
                //     redirectUri: window.location.origin,
                // });

            } catch (error) {
                alert(error.response?.data?.message || "Registration failed");
            }
        },

        onReset() {
            this.form = { ...initialFormState };

            // ✅ Reset vee-validate state
            this.$nextTick(() => {
                if (this.$refs.observer) {
                    this.$refs.observer.reset();
                }
            });
        },

        login() {
            keycloak.login({
                redirectUri: window.location.origin,
            });
        },
    },
};
</script>
