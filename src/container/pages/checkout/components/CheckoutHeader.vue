<template>
    <div class="checkout-header mb-4">
        <h3 class="title">🧾 Checkout</h3>
        <p class="subtitle">
            Review your order and enter shipping details
        </p>
    </div>
</template>

<script>
export default {
    name: "CheckoutHeader",
};
</script>

<style scoped>
.checkout-header {
    border-bottom: 1px solid #e5e7eb;
    padding-bottom: 12px;
}

.title {
    font-weight: 600;
    margin-bottom: 4px;
}

.subtitle {
    font-size: 0.9rem;
    color: #6b7280;
}
</style>
