<template>
  <div class="increment">
   <h1>{{ count }}</h1>
   <VBtn @click="increment">Increment</VBtn>

  </div>
</template>

<script>
import { VBtn } from 'vuetify/lib/components/index.mjs';

export default {
  name: 'IncrementView',
  components:{
    VBtn
  },
  computed:{
    count(){
      return this.$store.getters.getCount;
    }
  },
  methods:{
    increment(){
      this.$store.dispatch('increment')
    }
  }
}
</script>
