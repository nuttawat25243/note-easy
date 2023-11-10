<template>
   <div class=" hover:bg-gray-100  text-sm flex">
    <div class="w-full py truncate">
        <router-link
        to="/trash"
        class="flex gap-2 py-3 px-2 "
      ><font-awesome-icon icon="fa-solid fa-trash"  class="text-xl pl-8" />
      Trash
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
   data() {
    return {
      isHovered: false,
    };
  },

  setup() {
    const isOpen = ref(true);
    const tops = 'tops';
    const bottoms = 'bottoms';
    const accessories = 'accessories';
    const isHovered = ref(false);
    return {
      isOpen,
      tops,
      bottoms,
      accessories,
      isHovered
    };
  },
});
</script>



<style scoped>
</style>
