<template>
    <div class="layout d-flex flex-column min-vh-100">
        <AppHeader />

        <b-container fluid class="page-content flex-grow-1">
            <router-view />
        </b-container>

        <AppFooter />
    </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

export default {
    name: "DefaultLayout",
    components: {
        AppHeader,
        AppFooter,
    },
};
</script>

<style scoped>
.page-content {
    margin-top: 64px;
    padding: 24px 32px;
    background: #f9fafb;
}
</style>
