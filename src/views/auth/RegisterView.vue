<template>
    <div>
        <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">

            <!-- Full Name -->
            <b-form-group label="Full Name:" label-for="name-input">
                <b-form-input id="name-input" v-model="form.name" placeholder="Enter full name" required></b-form-input>
            </b-form-group>

            <!-- Email -->
            <b-form-group label="Email address:" label-for="email-input">
                <b-form-input id="email-input" v-model="form.email" type="email" placeholder="Enter email"
                    required></b-form-input>
            </b-form-group>

            <!-- Phone -->
            <b-form-group label="Phone Number:" label-for="phone-input">
                <b-form-input id="phone-input" v-model="form.phone" type="tel" placeholder="Enter phone number"
                    maxlength="10" required></b-form-input>
            </b-form-group>

            <!-- Password -->
            <b-form-group label="Password:" label-for="password-input">
                <b-form-input id="password-input" v-model="form.password" type="password" placeholder="Enter password"
                    minlength="6" required></b-form-input>
            </b-form-group>

            <!-- Confirm Password -->
            <b-form-group label="Confirm Password:" label-for="confirm-password-input">
                <b-form-input id="confirm-password-input" v-model="form.confirmPassword" type="password"
                    placeholder="Confirm password" minlength="6" required></b-form-input>
            </b-form-group>

            <!-- Buttons -->
            <div class="d-flex justify-content-center mt-3">
                <b-button type="submit" variant="primary" class="mr-2">
                    Register
                </b-button>
                <b-button type="reset" variant="danger">
                    Reset
                </b-button>
            </div>

            <!-- Login link -->
            <div class="text-center mt-3">
                <small>
                    Already have an account?
                    <router-link to="/auth/login" class="font-weight-bold">
                        Login here
                    </router-link>
                </small>
            </div>

        </b-form>
    </div>
</template>

<script>
export default {
    name: "RegisterView",
    data() {
        return {
            form: {
                name: "",
                email: "",
                phone: "",
                password: "",
                confirmPassword: ""
            }
        };
    },
    methods: {
        onSubmit() {
            if (this.form.password !== this.form.confirmPassword) {
                alert("Passwords do not match");
                return;
            }
            console.log({ ...this.form });
            this.onReset();
        },
        onReset() {
            this.form = {
                name: "",
                email: "",
                phone: "",
                password: "",
                confirmPassword: ""
            };
        }
    }
};
</script>
