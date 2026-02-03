<template>
    <b-card class="summary-card">
        <h5 class="card-title mb-3">🧺 Order Summary</h5>

        <div v-for="item in items" :key="item.productId" class="summary-item">
            <span>{{ item.name }} × {{ item.quantity }}</span>
            <strong>₹ {{ item.price * item.quantity }}</strong>
        </div>

        <hr />

        <div class="total-row">
            <span>Total</span>
            <strong>₹ {{ total }}</strong>
        </div>
    </b-card>
</template>

<script>
export default {
    name: "OrderSummary",
    props: {
        items: { type: Array, required: true },
        total: { type: Number, required: true },
    },
};
</script>

<style scoped>
.summary-card {
    background: #f9fafb;
    border-radius: 10px;
}

.summary-item {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    margin-bottom: 10px;
}

.total-row {
    display: flex;
    justify-content: space-between;
    font-size: 1.05rem;
    font-weight: 600;
}
</style>
