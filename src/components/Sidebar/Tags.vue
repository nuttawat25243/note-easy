<template>
   <div class="text-sm">
    <div class="w-full  hover:bg-gray-100 truncate">
      <button  @click="toggleTags"   class="flex justify-between w-full gap-2 py-3 px-2 items-center " >
        <div class="flex gap-2">
           <font-awesome-icon icon="fa-solid fa-hashtag"  class="text-lg  pl-8 "  />
           Tags
        </div>
         <font-awesome-icon :icon="['fas', 'chevron-up']  " class="inline-flex  text-xs text-center mt-0.5 mr-2 " :class="{ 'rotate-180': !isCategoriesVisible }" />
      </button>
    </div>
     <ul class="flex flex-col gap-2 font-light mt-2 text-sm px-20 " v-if="isTagsVisible">
          <router-link class="hover:underline" to="/mynotes/tag1">Tag1</router-link>
          <router-link class="hover:underline" to="/mynotes/tag2">Tag2</router-link>
          <router-link class="hover:underline" to="/mynotes/tag3">Tag3</router-link>
          <router-link class="hover:underline" to="/mynotes/tag4">Tag4</router-link>
          <router-link class="hover:underline" to="/mynotes/tag5">Tag5</router-link>
          <div  class="inline-flex border-[1px] rounded-full w-4 h-4 justify-center items-center pt-0.5 mb-2">
            <button @click="toggleAdd">+</button>
          </div>
      </ul>
       <div v-if="isOpen" class="fixed bg-white z-40 rounded-lg border-[2px]  p-8  border-gray-200  top-1/2 left-1/2 max-w-[480px]  max-h-[480px] transform -translate-x-1/2 -translate-y-1/2 z-100 items-center justify-center">
        <div class="flex justify-between mb-2">
            <h1 class="font-bold text-xl p-1">ADD TAGS </h1><button @click="toggleAdd"  class="text-xl font-bold p-1">X</button>
        </div>
        <div>
            <div>
              <input class="outline-none border-[1px] p-1" type="text" name="" id="">
              <button class="p-1 border-[1px] ml-1 hover:bg-gray-200">ADD</button>
            </div>
            <ul class="my-1 flex flex-col ">
              <div class="flex justify-between gap-1">
                <li class=" w-full border-[1px] p-1 items-center">Tag1 </li> 
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
import fakenote from '../../database/fakenote.js';
import {  defineComponent,ref } from 'vue';
export default defineComponent({
    props: {
    userToggle: Boolean,
    myNoteVisible: Boolean,
  },
   data() {
    return {
      isOpen: false, fakenote,
    };
  },
  setup() {
    const isTagsVisible = ref(false);

    const toggleTags = () => {
      isTagsVisible.value = !isTagsVisible.value;
    };

    return {
      isTagsVisible,
      toggleTags
  }},
    methods: {
    toggleAdd() {
      this.isOpen = !this.isOpen;
    },  
}
  })

</script>



<style scoped>

</style>
