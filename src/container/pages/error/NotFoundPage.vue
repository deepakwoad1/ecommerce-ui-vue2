<template>
    <div class="not-found-wrapper">
        <div class="not-found-content text-center">
            <h1 class="code">404</h1>
            <h4 class="title">Page Not Found</h4>
            <p class="subtitle">
                The page you’re looking for doesn’t exist or was moved.
            </p>

            <div class="actions mt-4">
                <b-button variant="primary" class="mr-2" @click="$router.push('/')">
                    Go to Home
                </b-button>

                <b-button variant="outline-secondary" @click="$router.back()">
                    Go Back
                </b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NotFoundPage",
};
</script>

<style scoped>
.not-found-wrapper {
    min-height: 100vh;
    /* full viewport */
    display: flex;
    align-items: center;
    /* vertical center */
    justify-content: center;
    /* horizontal center */
    padding: 16px;
}

.not-found-content {
    max-width: 420px;
}

.code {
    font-size: 5rem;
    font-weight: 700;
    color: #3b82f6;
    margin-bottom: 0;
}

.title {
    font-weight: 600;
    margin-top: 8px;
}

.subtitle {
    color: #6b7280;
    margin-top: 8px;
}
</style>
