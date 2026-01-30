<template>
    <b-navbar toggleable="lg" type="dark" class="main-header px-4" fixed="top">
        <b-navbar-brand to="/" tag="router-link" class="logo">
            VueCart
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/" exact tag="router-link">Products</b-nav-item>
                <b-nav-item to="/about" tag="router-link">About</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto align-items-center">
                <b-nav-item to="/cart" tag="router-link" class="cart-link">
                    🛒 Cart
                    <b-badge v-if="cartCount > 0" variant="danger" class="cart-badge">
                        {{ cartCount }}
                    </b-badge>
                </b-nav-item>
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
    },

};
</script>

<style scoped>
.main-header {
    background: #1f2933;
    height: 64px;
}

.logo {
    font-weight: 600;
    font-size: 1.2rem;
}

.cart-link {
    position: relative;
}

.cart-badge {
    position: absolute;
    top: -6px;
    right: -10px;
    font-size: 0.65rem;
}
</style>
