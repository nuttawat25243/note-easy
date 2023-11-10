<template>
  <div class=" text-sm">
    <div class="w-full hover:bg-gray-100  truncate">
    <button
    
    class=" flex justify-between gap-2 w-full px-2 py-3 items-center"
    @click="toggleCategories"
  >
    <div class="flex gap-2">
      <font-awesome-icon icon="fa-solid fa-tag" class="text-xl pl-8" />
      Categories
    </div>
    <font-awesome-icon
      :icon="['fas', 'chevron-up']"
      class="inline-flex text-xs text-center mt-0.5 mr-2 "
      :class="{ 'rotate-180': !isCategoriesVisible }"
    />
  </button>
    </div>

      <ul v-if="isCategoriesVisible" class="flex flex-col mt-2 gap-2 font-light px-20">
        <router-link class="hover:underline" to="/mynotes/general" >General</router-link>
        <router-link class="hover:underline" to="/mynotes/business" >Business</router-link>
        <router-link class="hover:underline" to="/mynotes/shopping" >Shopping</router-link>
        <router-link class="hover:underline" to="/mynotes/work" >Work</router-link>
        <router-link class="hover:underline" to="/mynotes/journal" >Journal</router-link>
        <div class="inline-flex border-[1px] rounded-full w-4 h-4 justify-center items-center pt-0.5 mb-2">
          <button @click="toggleAdd">+</button>
        </div>
      </ul>
       <div v-if="isOpen" class="fixed  z-40  rounded-lg border-[2px]  p-8 bg-white border-gray-200  top-1/2 left-1/2 max-w-[480px]  max-h-[480px] transform -translate-x-1/2 -translate-y-1/2 z-100 items-center justify-center">
        <div class="flex justify-between mb-2">
            <h1 class="font-bold text-xl p-1">ADD CATEGORY </h1><button @click="toggleAdd"  class="text-xl font-bold p-1">X</button>
        </div>
        <div>
            <div>
              <input class="outline-none border-[1px] p-1" type="text" name="" id="">
              <button class="p-1 border-[1px] ml-1 hover:bg-gray-200">ADD</button>
            </div>
            <ul class="my-1 flex flex-col ">
              <div class="flex justify-between gap-1">
                <li class=" w-full border-[1px] p-1 items-center">General</li> 
                <button  class="hover:bg-gray-200 border-[1px] px-2.5 ">
                  <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                </button>
                <button  class="hover:bg-gray-200 border-[1px] px-3 ">
                  <font-awesome-icon    icon="fa-solid fa-trash" />
                </button>
              </div>
            </ul>
        </div>
        </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    props: {
    userToggle: Boolean,
    myNoteVisible: Boolean,
  },
     data() {
    return {
      isOpen: false, 
    };
  },
  setup() {
    const isCategoriesVisible = ref(false);

    const toggleCategories = () => {
      isCategoriesVisible.value = !isCategoriesVisible.value;
    };
    
    return {
      isCategoriesVisible,
      toggleCategories,
    };
  },
  methods: {
    toggleAdd() {
      this.isOpen = !this.isOpen;
    },  
}
});
</script>



<style scoped>
</style>
