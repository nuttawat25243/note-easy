<template>
  <div class="font-blink hover:bg-gray-100  text-sm flex">
    <div class="w-full truncate">
      <button @click="toggleSettings" class="flex w-full gap-2 py-3 px-2">
        <font-awesome-icon icon="fa-solid fa-gear" class="text-lg pl-8" />
        Setting
      </button>

    
   <div v-if="isOpen" class="fixed  rounded-lg border-[2px] bg-white border-gray-200 p-4 top-1/2 left-1/2 max-w-[480px]  max-h-[480px] transform -translate-x-1/2 -translate-y-1/2 z-100 items-center justify-center">
        <div class="flex justify-between mb-2">
            <h1 class="font-bold text-xl p-1">SETTINGS </h1><button @click="toggleSettings"  class="text-xl font-bold p-1">X</button>
        </div>
        <div class="flex flex-col text-xs  gap-2   p-4">
          <h2 class="font-bold text-base ">TRASH</h2>
          <p class=" ">Notes in the trash will be deleted after a certain period.</p>
          <label for="deletionPeriod">Set Deletion Period:</label>
          <select id="deletionPeriod" class="bg-gray-100" v-model="selectedPeriodType">
            <option value="hour">1 hour</option>
            <option selected value="day">1 Day</option>
            <option value="week">1 Week</option>
          </select>
          <h2 class="font-bold text-base">Dark Theme </h2>
      <label class="flex gap-2 items-center">
        <input type="checkbox" class=" " v-model="isDarkTheme" />
        Open Dark Theme
      </label>
      <div class="flex justify-center ">
        <button @click="applySettings" class="border-2  w-min p-1 px-2 mt-8 rounded-lg">Set</button>
      </div>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
import {defineComponent } from 'vue';

export default defineComponent({
    props: {
    userToggle: Boolean,
    myNoteVisible: Boolean,
  },
 data() {
    return {
      isOpen: false, 
      selectedPeriodType: 'day',
    };
  },
  methods: {
    toggleSettings() {
      this.isOpen = !this.isOpen;
    },  
    applySettings() {
        this.toggleSettings();
    },
  
  
  },
  },
);
</script>

<style scoped>

</style>
