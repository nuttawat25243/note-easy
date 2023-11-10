<template>
    <div class="flex flex-col h-screen w-[180px] border-r-[1px]  bg-gray-50  justify-between ">
      <div class="flex flex-col gap-8">
        <div class="flex gap-1 ml-2 p-4   ">
          <div>
            <div class="flex gap-4 lg:gap-0 ">
            <div class="hidden"><button @click="texthidden"><font-awesome-icon icon="fa-solid fa-bars" class="lg:hidden text-xl" /></button></div>
            <div>
              <div class="relative -top-1 -left-1 shadow-cyan-500/50  h-6 w-6 mx-2 rounded bg-gradient-to-r from-blue-500 to-cyan-400 text-center"></div>
              <div class="relative -top-6 h-6 w-6   mx-2 rounded bg-gradient-to-r from-yellow-500 to-blue-100 text-center"></div>
              <div class="relative -top-11 left-1  h-6 w-6 mx-2 rounded bg-gradient-to-r from-blue-500 to-cyan-400 text-center"></div>
            </div>
          </div>
          </div>
          <router-link to="/home" class="font-bold  ">Note Easy</router-link>
        </div>
        <div class="flex flex-col  ">
          <MyNote :userToggle="userToggle" :myNoteVisible="myNoteVisible"   />
          <Cats :userToggle="userToggle" :myNoteVisible="myNoteVisible"  />
          <Tags :userToggle="userToggle" :myNoteVisible="myNoteVisible" />
          <Archive :userToggle="userToggle" :myNoteVisible="myNoteVisible" />
          <Trash :userToggle="userToggle" :myNoteVisible="myNoteVisible" />
          <Setting :userToggle="userToggle" :myNoteVisible="myNoteVisible" />
        </div>
      </div>
     <div class="text-sm p-2 mb-2"  >
        <router-link  to="/" :class="{ 'hidden': !userToggle }" class="  flex gap-2 p-1 items-center border-[1px]   border-gray-300 hover:bg-red-500 hover:text-white   ">
            <font-awesome-icon icon="fa-arrow-right-from-bracket" class="w-4 h-4 p-2 rounded-full" />
            <div class="flex justify-between  w-full items-center ">
              <div>Sign Out</div>
            </div>
        </router-link>
        <div @click="toggleUser" :class="{ 'border-t-0 rounded-none': userToggle }" class=" flex gap-2  p-1 items-center border-[1px] border-gray-300 hover:bg-gray-200 rounded-full ">
          <img class="w-8 h-8 rounded-full" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="">
          <div class="flex justify-between  w-full items-center bg">
            <div>John</div><font-awesome-icon :icon="['fas', 'chevron-up']  " class="text-xs text-center mr-2 " :class="{ 'rotate-180': !userToggle }" />
             
          </div>
        </div>
      </div>
     </div>
   
</template>

<script >
import { defineComponent } from 'vue'
import MyNote from './Sidebar/MyNote.vue'
import Trash from './Sidebar/Trash.vue'
import Setting from './Sidebar/Setting.vue'
import Archive from './Sidebar/Archive.vue'
import Tags from './Sidebar/Tags.vue'
import Cats from './Sidebar/Cats.vue'
export default defineComponent({
 
  data() {
    return {
      userToggle: false,
          myNoteVisible: true, 
    };
  },
  components:{
    MyNote,Tags,Trash,Archive,Setting,Cats
  },
 methods: {
  toggleUser() {
    this.userToggle = !this.userToggle;
  },   
  texthidden() {
      this.myNoteVisible = !this.myNoteVisible;
    },
  
  },
  
})
</script>




<style scoped>
</style>
