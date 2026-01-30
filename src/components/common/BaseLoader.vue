<template>
    <div class="loader-wrapper text-center py-5">
        <b-spinner variant="primary" label="Loading..." class="spinner" />
        <p class="mt-3 text-muted">Loading...</p>
    </div>
</template>

<script>
export default {
    name: "BaseLoader",
};
</script>

<style scoped>
.loader-wrapper {
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.spinner {
    width: 3rem;
    height: 3rem;
}
</style>
