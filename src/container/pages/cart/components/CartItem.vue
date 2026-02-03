<template>
  <b-card class="cart-item mb-3">
    <div class="d-flex justify-content-between align-items-center flex-wrap">
      <!-- Product info -->
      <div class="item-info">
        <h6 class="mb-1">{{ item.name }}</h6>
        <small class="text-muted">
          ₹ {{ item.price }} × {{ item.quantity }}
        </small>
      </div>

      <!-- Actions -->
      <div class="d-flex align-items-center mt-2 mt-md-0">
        <!-- Quantity controls -->
        <div class="qty-controls">
          <b-button size="sm" variant="outline-secondary" @click="decrease" :disabled="item.quantity <= 1">
            −
          </b-button>

          <span class="qty">{{ item.quantity }}</span>

          <b-button size="sm" variant="outline-secondary" @click="increase">
            +
          </b-button>
        </div>

        <!-- Price -->
        <strong class="item-total ml-4">
          ₹ {{ item.price * item.quantity }}
        </strong>

        <!-- Remove -->
        <b-button variant="outline-danger" size="sm" class="ml-3" @click="$emit('remove', item.productId)">
          ✕
        </b-button>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    item: { type: Object, required: true },
  },
  methods: {
    increase() {
      this.$emit("update", {
        productId: this.item.productId,
        quantity: this.item.quantity + 1,
      });
    },
    decrease() {
      if (this.item.quantity > 1) {
        this.$emit("update", {
          productId: this.item.productId,
          quantity: this.item.quantity - 1,
        });
      }
    },
  },
};
</script>

<style scoped>
.cart-item {
  border-left: 4px solid #3b82f6;
}

.item-info h6 {
  font-weight: 600;
}

.qty-controls {
  display: flex;
  align-items: center;
}

.qty {
  min-width: 28px;
  text-align: center;
  font-weight: 500;
}

.item-total {
  min-width: 90px;
  text-align: right;
}
</style>
