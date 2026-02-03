<template>
    <footer class="main-footer mt-auto">
        <b-container>
            <b-row class="gy-4">
                <!-- Brand -->
                <b-col md="4">
                    <h6 class="footer-title d-flex align-items-center">
                        🛍️ <span class="ml-2">VueCart</span>
                    </h6>
                    <p class="footer-text mt-2">
                        A simple ecommerce demo built with Vue.js and Keycloak.
                    </p>
                </b-col>

                <!-- Links -->
                <b-col md="4">
                    <h6 class="footer-title">Quick Links</h6>
                    <ul class="footer-links">
                        <li><router-link to="/">Products</router-link></li>
                        <li><router-link to="/cart">Cart</router-link></li>
                        <li><router-link to="/checkout">Checkout</router-link></li>
                    </ul>
                </b-col>

                <!-- Support -->
                <b-col md="4">
                    <h6 class="footer-title">Support</h6>
                    <p class="footer-text mb-1">📧 support@vuecart.com</p>

                    <!-- Social Links -->
                    <div class="social-links mt-2">
                        <a href="#" aria-label="GitHub">🐙</a>
                        <a href="#" aria-label="Twitter">🐦</a>
                        <a href="#" aria-label="LinkedIn">💼</a>
                    </div>
                </b-col>
            </b-row>

            <!-- Divider -->
            <hr class="footer-divider" />

            <!-- Bottom bar -->
            <div class="footer-bottom text-center">
                © {{ currentYear }} VueCart · Built with ❤️ using Vue.js
            </div>
        </b-container>
    </footer>
</template>

<script>
export default {
    name: "AppFooter",
    computed: {
        currentYear() {
            return new Date().getFullYear();
        },
    },
};
</script>


<style scoped>
.main-footer {
    background: linear-gradient(180deg, #111827, #020617);
    color: #9ca3af;
    padding: 40px 0 24px;
    font-size: 0.85rem;
}

.footer-title {
    color: #ffffff;
    font-weight: 600;
    margin-bottom: 12px;
}

.footer-text {
    line-height: 1.6;
}

.footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-links li {
    margin-bottom: 6px;
}

.footer-links a {
    color: #9ca3af;
    text-decoration: none;
    transition: color 0.2s ease, padding-left 0.2s ease;
}

.footer-links a:hover {
    color: #ffffff;
    padding-left: 4px;
}

/* Social icons */
.social-links a {
    font-size: 1.1rem;
    margin-right: 10px;
    color: #9ca3af;
    text-decoration: none;
    transition: transform 0.2s ease, color 0.2s ease;
}

.social-links a:hover {
    color: #ffffff;
    transform: translateY(-2px);
}

/* Divider */
.footer-divider {
    border-color: rgba(255, 255, 255, 0.1);
    margin: 24px 0 16px;
}

/* Bottom bar */
.footer-bottom {
    font-size: 0.75rem;
    color: #6b7280;
}

/* Responsive */
@media (max-width: 768px) {
    .footer-title {
        margin-top: 8px;
    }
}
</style>
