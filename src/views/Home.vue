<template>
  <div class="home">
      <div>
      <div class="cart_list">
        
        <div >
          <div class="cart_item"  v-for="food in shop"
      :key="food.id">
            <img :src="url+food.cover_path" alt="">
            <span>{{ food.name }}</span>
            <span>Description: {{ food.description }}</span>
            <span> {{food.price }} €</span>
            
            <div>
              <button
                type="button"
                class="button item_button cart_button"
                @click="addToCart(p)"
              >
                +
              </button>
              <button
                type="button"
                class="button item_button remove_button"
                @click="removeFromCart(p)"
              >
                &minus;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      shop: null,
      url: 'https://api-moshop.molengeek.pro/'

    }
  },
  mounted () {
    axios.get('https://api-moshop.molengeek.pro/api/v1/mg/shop')
      .then(res => this.shop = res.data.data.products)
  }
}
</script>
