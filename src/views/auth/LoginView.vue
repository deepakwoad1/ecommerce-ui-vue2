<template>
    <div>
        <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
            <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter email"
                    required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                <b-form-input id="input-2" v-model="form.password" type="password" placeholder="Enter password"
                    required></b-form-input>
            </b-form-group>

            <div class="d-flex justify-content-center mt-3">
                <b-button type="submit" variant="primary" class="mr-2">
                    Submit
                </b-button>
                <b-button type="reset" variant="danger">
                    Reset
                </b-button>
            </div>

            <div class="text-center mt-3">
                <small>
                    Not registered?
                    <router-link to="/auth/register" class="font-weight-bold">
                        Register here
                    </router-link>
                </small>
            </div>
        </b-form>
    </div>
</template>

<script>
export default {
    name: "LoginView",
    data() {
        return {
            form: {
                email: '',
                password: '',
            },
        }
    },
    methods: {
        onSubmit() {
            console.log({ ...this.form });
            this.onReset();
        },
        onReset() {
            // Reset our form values
            this.form.email = ''
            this.form.password = ''
        }
    }
}
</script>