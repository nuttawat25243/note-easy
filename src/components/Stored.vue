<template>
  <div class="p-4 pb-0 flex flex-col  max-w-[360px]  border-r-[1px] gap-4 h-screen ">
      <div class="border-[1px] w-60  rounded-full ">
        <div class="items-center justify-center flex ">
          <span><font-awesome-icon icon="magnifying-glass" /></span>
          <input type="text" class="flex outline-0 m-1" placeholder="Search">
        </div>
      </div>
      <div>
        <div class="text-xl font-bold">Notes</div>
      </div>
      <div class="container flex flex-col gap-3   overflow-auto">
      <div v-for="(note, index) in fakenote" :key="index">
        <div class="bg-gray-50 rounded-lg p-2 ">
          <div class="text-xs flex   text-gray-500 justify-between  gap-2  px-1">
            <div>
            <span class="inline-flex w-2 h-2 rounded-full" :style="{ backgroundColor: note.colorcode }"></span>
            <span class="mx-1">{{ note.category }}</span>
            </div>
            <div>{{ note.date }}</div>
          </div>
          <div class="lg:flex">
              <h1 class="text-sm  p-1">{{ note.title }} </h1> 
              <div class="text-[10px] flex justify-start lg:justify-center items-center gap-2 px-1 text-gray-600">
                 <span>#{{ note.tags[0] }}</span>
                 <span>#{{ note.tags[1] }}</span> 
                 <span>#{{ note.tags[2] }}</span>
              </div>
            </div>
            <p class="text-xs text-gray-400 font-light p-1">{{ truncateDescription(note.description, 100) }}</p>
        </div>
        <div>
      </div>
      </div>
        <div class="flex justify-between items-center mt-4 mb-8">
          <button class=" p-2 text-sm w-20 border-[1px] rounded-lg bg-gray-50" @click="prevPage" :disabled="currentPage === 1">Previous</button>
          <span>Page {{ currentPage }} of {{ totalPages }}</span>
          <button class=" p-2 text-sm w-20 border-[1px] rounded-lg bg-gray-50" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
        </div>
      </div>
  </div>
</template>


<script >
import  fakenote  from '../database/fakenote.js';
export default {
  props: {
    totalItems: {
      type: Number,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      default: 10,
    },
  },
  name: 'Stored',
  data() {
    return {
      fakenote, currentPage: 1,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
  },
  methods: {
  truncateDescription(description, maxLength) {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    } 
    return description;
  }, 
  nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1;
      }
    }, 
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },
  }
}

</script>

<style scoped>
.container {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}
.container::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}



</style>
