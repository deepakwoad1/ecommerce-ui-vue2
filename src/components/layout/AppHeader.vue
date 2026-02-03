<template>
    <b-navbar toggleable="lg" type="dark" class="main-header px-4" fixed="top">
        <!-- Brand -->
        <b-navbar-brand to="/" tag="router-link" class="logo d-flex align-items-center">
            🛍️ VueCart
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
            <!-- Left nav -->
            <b-navbar-nav>
                <b-nav-item to="/" exact tag="router-link">
                    Products
                </b-nav-item>
                <b-nav-item to="/about" tag="router-link">
                    About
                </b-nav-item>
            </b-navbar-nav>

            <!-- Right nav -->
            <b-navbar-nav class="ml-auto align-items-center">
                <!-- Cart -->
                <b-nav-item to="/cart" tag="router-link" class="cart-link mr-3 d-flex align-items-center">
                    <span class="cart-icon">🛒</span>
                    <span class="ml-1">Cart</span>

                    <b-badge v-if="cartCount > 0" pill variant="danger" class="cart-badge">
                        {{ cartCount }}
                    </b-badge>
                </b-nav-item>

                <!-- Divider -->
                <div class="nav-divider mx-3 d-none d-lg-block"></div>

                <!-- Login / Logout -->
                <b-button v-if="!isLoggedIn" size="sm" variant="outline-light" class="auth-btn" @click="login">
                    🔐 Login
                </b-button>

                <b-button v-else size="sm" variant="outline-light" class="auth-btn" @click="logout">
                    🚪 Logout
                </b-button>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>


<script>
export default {
    name: "AppHeader",

    computed: {
        cartCount() {
            return this.$store.getters["cart/cartCount"];
        },

        isLoggedIn() {
            return !!this.$store.state.auth.user;
        },
    },

    methods: {
        login() {
            this.$store.dispatch("auth/login");
        },

        logout() {
            this.$store.dispatch("auth/logout");
        },
    },
};
</script>


<style scoped>
.main-header {
    background: linear-gradient(90deg, #1f2933, #111827);
    height: 64px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
}

.logo {
    font-weight: 600;
    font-size: 1.25rem;
    letter-spacing: 0.5px;
}

.b-nav-item {
    font-weight: 500;
}

.b-nav-item:hover {
    opacity: 0.85;
}

/* Cart */
.cart-link {
    position: relative;
}

.cart-icon {
    font-size: 1.1rem;
}

.cart-badge {
    position: absolute;
    top: -6px;
    right: -10px;
    font-size: 0.65rem;
    padding: 4px 6px;
}

/* Divider between cart & auth */
.nav-divider {
    width: 1px;
    height: 22px;
    background: rgba(255, 255, 255, 0.25);
}

/* Auth buttons */
.auth-btn {
    min-width: 90px;
    font-weight: 500;
    transition: all 0.2s ease;
}

.auth-btn:hover {
    background-color: rgba(255, 255, 255, 0.15);
}
</style>
