<template>
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
        <div style="max-width: 400px; width: 100%;">
            <div class="text-center mb-4">
                <h3 class="font-weight-bold text-primary mb-1">VueCart</h3>
                <small class="text-muted">Your Smart Shopping Partner</small>
            </div>
            <div class="card p-4 shadow" >
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AuthLayout",
};
</script>
