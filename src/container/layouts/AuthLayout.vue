<template>
    <div class="auth-layout d-flex justify-content-center align-items-center min-vh-100">
        <div class="auth-wrapper">
            <!-- Brand -->
            <div class="text-center mb-4">
                <h3 class="brand-title mb-1">VueCart</h3>
                <small class="text-muted">Your Smart Shopping Partner</small>
            </div>

            <!-- Auth Card -->
            <b-card class="auth-card shadow-sm">
                <router-view />
            </b-card>
        </div>
    </div>
</template>

<script>
export default {
    name: "AuthLayout",
};
</script>

<style scoped>
.auth-layout {
    background: #f9fafb;
    /* soft neutral background */
}

.auth-wrapper {
    max-width: 400px;
    width: 100%;
    padding: 16px;
}

.brand-title {
    font-weight: 700;
    color: #2563eb;
    /* professional blue */
}

.auth-card {
    border-radius: 8px;
}
</style>
