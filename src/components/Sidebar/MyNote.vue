<template>
  <div  class="font-blink hover:bg-gray-100 text-sm flex">
    <div class="w-full py truncate">
      <router-link
        :to="getTargetRoute()"
        class="flex gap-2 py-3 px-2"
        @click.prevent="navigate"
      >
        <font-awesome-icon
          icon="fa-regular fa-note-sticky"
          class="text-xl pl-8"
        />
       <span :class="{ 'hidden': userToggle }" v-if="myNoteVisible">My Notes</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  props: {
    userToggle: Boolean,
    myNoteVisible: Boolean,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const isOpen = ref(true);
    const isHovered = ref(false);

    const getTargetRoute = () => {
      return route.path === '/mynotes' ? '/home' : '/mynotes';
    };

    const navigate = () => {
      router.push(getTargetRoute());
    };

    return {
      isOpen,
      isHovered,
      getTargetRoute,
      navigate,
    };
  },
});
</script>

<style scoped>
</style>
