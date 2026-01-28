<!-- <template>
    <div class="d-flex flex-column align-items-center">
        <h3 class="mb-3">Login</h3>

        <b-button variant="primary" class="mb-3" @click="loginWithKeycloak">
            Login with Keycloak
        </b-button>

        <div class="text-center">
            <small>
                Not registered?
                <router-link to="/auth/register" class="font-weight-bold">
                    Register here
                </router-link>
            </small>
        </div>
    </div>
</template>

<script>
import { login } from "../../keycloak";

export default {
    name: "LoginView",
    methods: {
        loginWithKeycloak() {
            login(); // 🔐 Redirects to Keycloak login page
        }
    }
};
</script> -->

<template>
    <div class="text-center">
        <b-button variant="primary" @click="login">
            Login with Keycloak
        </b-button>
    </div>
</template>

<script>
import { login } from '@/keycloak';

export default {
    methods: {
        login() {
            login();
        },
    },
};
</script>
