<template>
    <footer class="main-footer mt-auto">
        <b-container>
            <b-row>
                <b-col md="4">
                    <h6 class="footer-title">MyStore</h6>
                    <p class="footer-text">
                        Simple ecommerce demo built with Vue.js
                    </p>
                </b-col>

                <b-col md="4">
                    <h6 class="footer-title">Links</h6>
                    <ul class="footer-links">
                        <li><router-link to="/">Products</router-link></li>
                        <li><router-link to="/cart">Cart</router-link></li>
                        <li><router-link to="/checkout">Checkout</router-link></li>
                    </ul>
                </b-col>

                <b-col md="4">
                    <h6 class="footer-title">Support</h6>
                    <p class="footer-text">support@vuecart.com</p>
                    <p class="footer-text">© 2026 VueCart</p>
                </b-col>
            </b-row>
        </b-container>
    </footer>
</template>

<script>
export default {
    name: "AppFooter",
};
</script>

<style scoped>
.main-footer {
    background: #111827;
    color: #9ca3af;
    padding: 32px 0;
    font-size: 0.85rem;
}

.footer-title {
    color: #ffffff;
}

.footer-links {
    list-style: none;
    padding: 0;
}

.footer-links a {
    color: #9ca3af;
}

.footer-links a:hover {
    color: #ffffff;
}
</style>
