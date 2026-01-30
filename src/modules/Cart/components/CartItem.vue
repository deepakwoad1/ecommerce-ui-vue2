<template>
  <b-card class="mb-3">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h6 class="mb-1">{{ item.name }}</h6>
        <small class="text-muted">₹ {{ item.price }}</small>
      </div>

      <div class="d-flex align-items-center">
        <!-- Decrease -->
        <b-button
          size="sm"
          variant="outline-secondary"
          @click="decrease"
          :disabled="item.quantity <= 1"
        >
          −
        </b-button>

        <!-- Quantity -->
        <span class="mx-2 qty">{{ item.quantity }}</span>

        <!-- Increase -->
        <b-button
          size="sm"
          variant="outline-secondary"
          @click="increase"
        >
          +
        </b-button>

        <!-- Remove -->
        <b-button
          variant="danger"
          size="sm"
          class="ml-3"
          @click="$emit('remove', item.productId)"
        >
          Remove
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
.qty {
  min-width: 24px;
  text-align: center;
  font-weight: 500;
}

</style>
