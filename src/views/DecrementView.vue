<template>
  <div class="decrement">
<h1>{{ count }}</h1>
<VBtn @click="decrement">Decrement</VBtn>
  </div>
</template>

<script>
import { VBtn } from 'vuetify/lib/components/index.mjs';
export default {
  name:'DecrementView',
  components:{
  VBtn
  },
  computed:{
    count(){
      return this.$store.getters.getCount;
    }
  },
  methods:{
    decrement(){
      this.$store.dispatch('decrement')
    }
  }
}
</script>
