<template>
    <div class="about-page">
        <b-container>
            <!-- Hero -->
            <section class="about-hero text-center">
                <h1 class="about-title">About VueCart</h1>
                <p class="about-subtitle">
                    A modern ecommerce demo built with Vue.js, Vuex, and Keycloak.
                </p>
            </section>

            <!-- Content -->
            <b-row class="mt-5">
                <b-col md="6" class="mb-4">
                    <h5 class="section-title">🚀 What is VueCart?</h5>
                    <p class="section-text">
                        VueCart is a demo ecommerce application designed to showcase
                        clean frontend architecture, secure authentication, and
                        scalable project structure using modern Vue.js best practices.
                    </p>
                </b-col>

                <b-col md="6" class="mb-4">
                    <h5 class="section-title">🛠️ Tech Stack</h5>
                    <ul class="tech-list">
                        <li>Vue.js + Vue Router</li>
                        <li>Vuex for state management</li>
                        <li>BootstrapVue for UI</li>
                        <li>Keycloak for authentication</li>
                        <li>Axios for API communication</li>
                    </ul>
                </b-col>
            </b-row>

            <b-row class="mt-4">
                <b-col md="6" class="mb-4">
                    <h5 class="section-title">🔐 Authentication</h5>
                    <p class="section-text">
                        Authentication is handled via Keycloak using OAuth2 and OpenID
                        Connect. The app supports secure login, logout, token refresh,
                        and session persistence.
                    </p>
                </b-col>

                <b-col md="6" class="mb-4">
                    <h5 class="section-title">📦 Architecture</h5>
                    <p class="section-text">
                        The project follows a layered architecture separating UI,
                        business logic, API communication, and state management to keep
                        the codebase clean and maintainable.
                    </p>
                </b-col>
            </b-row>

            <!-- Footer note -->
            <section class="about-footer text-center mt-5">
                <p>
                    Built with ❤️ for learning, demos, and scalable frontend design.
                </p>
            </section>
        </b-container>
    </div>
</template>

<script>
export default {
    name: "AboutPage",
};
</script>

<style scoped>
.about-page {
    padding-top: 80px;
    /* account for fixed header */
    padding-bottom: 60px;
}

.about-hero {
    margin-bottom: 40px;
}

.about-title {
    font-weight: 700;
    font-size: 2.2rem;
    color: #111827;
}

.about-subtitle {
    color: #6b7280;
    max-width: 600px;
    margin: 12px auto 0;
}

.section-title {
    font-weight: 600;
    margin-bottom: 12px;
    color: #111827;
}

.section-text {
    color: #4b5563;
    line-height: 1.7;
}

.tech-list {
    padding-left: 18px;
    color: #4b5563;
}

.tech-list li {
    margin-bottom: 6px;
}

.about-footer {
    color: #6b7280;
    font-size: 0.9rem;
}
</style>
