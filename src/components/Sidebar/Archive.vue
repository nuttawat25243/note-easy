<template>
   <div class="font-blink hover:bg-gray-100 text-sm flex">
    <div class="w-full py truncate">
      <router-link   to="/archive"   class="flex gap-2 py-3 px-2 " >
        <font-awesome-icon icon="box-archive"  class="text-lg  pl-8"  />
        <span :class="{ 'hidden': userToggle }" v-if="myNoteVisible">Archive</span>
      </router-link>
    </div>
  </div>
</template>



<script>
import { ref, defineComponent } from 'vue';

export default defineComponent({  
  props: {
    userToggle: Boolean,
    myNoteVisible: Boolean,
  },
  components: {
  },
  setup() {
    const isOpen = ref(true);


    return {
      isOpen,
 
    };
  },
});
</script>



<style scoped>
</style>
