<template>
<div class="my-text bg-blue-50 h-screen flex  justify-center items-center">
  <div class="flex flex-col  justify-between  max-w-[960px] max-h-[480px] mb-48">  
       <div class="flex flex-col   ">
        <div class="flex gap-1  items-center  ">
          <div class=" ">
            <div class="relative top-10 -left-4 shadow-cyan-500/50  h-12 w-12 mx-2 rounded bg-gradient-to-r from-blue-500 to-cyan-400 text-center"></div>
            <div class="relative h-12 w-12 -left-2  mx-2 rounded bg-gradient-to-r from-yellow-500 to-blue-100 text-center"></div>
            <div class="relative -top-10  h-12 w-12 mx-2 rounded bg-gradient-to-r from-blue-500 to-cyan-400 text-center"></div>
          </div>
          <span class="font-bold text-6xl">Note Easy</span>
        </div>
      </div>
      <div class="bg-white p-8 rounded-lg  ">
      <h2 class="text-center font-bold text-2xl mb-8">Register</h2>
      <form @submit="login">
        <div class="flex flex-col text-sm  gap-2">
          <label class=" " for="username">Email:</label>
          <div class="flex border-b-[1px] items-center ">
            <font-awesome-icon class="text-center " icon="fa-solid fa-envelope" />
            <input class="pl-2 w-full outline-none p-2" placeholder="Enter your email"  type="email" id="email" v-model="email" required />
          </div>
          <label class=" " for="username">Username:</label>
          <div class="flex border-b-[1px] items-center ">
            <font-awesome-icon class="text-center " icon="fa-solid fa-user" />
            <input class="pl-2 w-full outline-none p-2" placeholder="Enter your username"  type="text" id="username" v-model="username" required />
          </div>
          <label for="password">Password:</label>
          <div  class="flex border-b-[1px] items-center ">
              <font-awesome-icon icon="fa-solid fa-lock" />
              <input class="pl-2 w-full outline-none p-2" placeholder="Enter your password" type="password" id="password" v-model="password" required />
          </div>
          <button class="flex justify-end font-light text-gray-800 text-xs hover:underline hover:decoration-gray-500">Forget password?</button>
          <div class="flex justify-center items-center mt-3 ">
              <button  class="w-full text-center rounded-full p-2 text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400">LOGIN</button>
          </div>
           <div class="flex justify-center text-xs text-gray-800 items-center mb-5 ">
              Dont have an accout yet? <button type="submit" class="p-2 text-blue-700 hover:text-blue-500"> Sign up for free</button>
            </div>
        </div>
      </form>
    </div>
  </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login(event) {
      event.preventDefault();
      if (this.username === 'yourUsername' && this.password === 'yourPassword') {
        alert('Login successful!');
      } else {
        alert('Login failed. Please check your credentials.');
      }
    },
  },
};
</script>
