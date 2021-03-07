const app = Vue.createApp({
    data() {
        return {
            cart: [0],
            premium: true
        }
    },
  methods: {
    updateCart(id, isRemove) {
      if (isRemove) {
        this.cart.shift();
      }
      this.cart.push(id)
      }
    }
})
