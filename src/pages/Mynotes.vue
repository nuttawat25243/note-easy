<template>
 <div class="my-text flex">
      <Sidebar/> 
        <Stored />
        <Write/>
 </div>
</template>

<script  >
import { defineComponent } from 'vue';
import Sidebar from '../components/Sidebar.vue';
import Stored from '../components/Stored.vue';
import Write from '../components/Write.vue';
export default defineComponent({

  components: {
    Stored,Write,Sidebar
  },
  setup() {
    return {
    };  
  },
});
</script>

<style scoped>
</style>
