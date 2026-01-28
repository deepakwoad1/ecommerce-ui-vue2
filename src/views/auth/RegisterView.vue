<template>
    <div class="register-wrapper">
        <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">

            <!-- Row 1: First Name + Last Name -->
            <b-row>
                <b-col md="6">
                    <b-form-group label="First Name:" label-for="firstName" class="input-14">
                        <b-form-input id="firstName" v-model="form.firstName" placeholder="Enter first name" required />
                    </b-form-group>
                </b-col>

                <b-col md="6">
                    <b-form-group label="Last Name:" label-for="lastName" class="input-14">
                        <b-form-input id="lastName" v-model="form.lastName" placeholder="Enter last name" required />
                    </b-form-group>
                </b-col>
            </b-row>

            <!-- Row 2: Username + Phone -->
            <b-row>
                <b-col md="6">
                    <b-form-group label="Username:" label-for="username" class="input-14">
                        <b-form-input id="username" v-model="form.userName" placeholder="Enter username" required />
                    </b-form-group>
                </b-col>

                <b-col md="6">
                    <b-form-group label="Phone Number:" label-for="phone" class="input-14">
                        <b-form-input id="phone" v-model="form.phone" type="tel" maxlength="10"
                            placeholder="Enter phone number" required />
                    </b-form-group>
                </b-col>
            </b-row>

            <!-- Row 3: Email (FULL WIDTH) -->
            <b-row>
                <b-col md="12">
                    <b-form-group label="Email address:" label-for="email" class="input-14">
                        <b-form-input id="email" v-model="form.email" type="email" placeholder="Enter email address"
                            required />
                    </b-form-group>
                </b-col>
            </b-row>

            <!-- Row 4: Password + Confirm Password -->
            <b-row>
                <b-col md="6">
                    <b-form-group label="Password:" label-for="password" class="input-14">
                        <b-form-input id="password" v-model="form.password" type="password" placeholder="Enter password"
                            minlength="6" required />
                    </b-form-group>
                </b-col>

                <b-col md="6">
                    <b-form-group label="Confirm Password:" label-for="confirmPassword" class="input-14">
                        <b-form-input id="confirmPassword" v-model="form.confirmPassword" type="password"
                            placeholder="Confirm password" minlength="6" required />
                    </b-form-group>
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
import keycloak from '@/keycloak';

const initialFormState = {
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
}

export default {
    name: "RegisterView",
    data() {
        return {
            form: initialFormState
        };
    },
    methods: {
        async onSubmit() {
            if (this.form.password !== this.form.confirmPassword) {
                alert("Passwords do not match");
                return;
            }

            // payload mapping
            const payload = {
                username: this.form.userName,
                firstName: this.form.firstName,
                lastName: this.form.lastName,
                phoneNumber: this.form.phone,
                email: this.form.email,
                password: this.form.password,
            };

            try {
                console.log("Register payload:", payload);

                // 🔓 Call register API (NO TOKEN)
                await api.post("/api/auth/register-new", payload);

                alert("Registration successful! Please login.");

                // 🔐 Redirect to Keycloak login
                // keycloak.login({
                //     redirectUri: window.location.origin,
                // });
                this.onReset();

            } catch (error) {
                console.error("Registration failed:", error.response?.data || error);
                alert(error.response?.data?.message || "Registration failed");
            }
        },
        onReset() {
            this.form = initialFormState
        },
        login() {
            keycloak.login({
                redirectUri: window.location.origin, // or protected route
            });
        }
    }
};
</script>
