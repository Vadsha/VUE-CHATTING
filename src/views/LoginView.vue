<template>
  <div class="container">
          <div class="flex justify-center">
              <div class=" h-screen rounded w-screen flex justify-center">
                  <form @submit.prevent="login" style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                      class="flex flex-col justify-center w-96 my-24 text-gray-500 rounded-lg bg-gray-50">
                      <h1 class="p-2 mx-auto my-6 text-3xl text-gray-500">Sign In</h1>
                      <div class="flex flex-col">
                          <label class="px-2 py-1 m-2 mb-0 text-start" for="email">Email</label>
                          <input type="text"
                              class="px-2 py-1 m-4 my-0 border-b-2 rounded caret-gray-400 h-2/3 focus:outline-none"
                              v-model="formData.email">
                      </div>
  
                      <div class="flex flex-col">
                          <label class="px-2 py-1 m-2 mb-0 text-start" for="password">Password</label>
                          <input type="password"
                              class="px-2 py-1 m-4 my-0 border-b-2 rounded caret-gray-400 h-2/3 focus:outline-none"
                              v-model="formData.password">
                      </div>
  
                      <div class="flex justify-between my-4">
                          <div class="flex flex-col m-4 mt-0">
                              <router-link :to="{ name: 'register' }" class="hover:text-gray-600 mt-12">Don't have an
                                  account?</router-link>
                          </div>
                          <button
                              class="px-4 py-1 m-4 mt-10 bg-gray-300 rounded h-1/3 hover:bg-gray-400 hover:text-white">sign
                              in</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </template>
  
  <script>
  import router from "../router"
  import ApiService from "../services/ApiService";
  import TokenService from "../services/TokenService"

  export default {
    data() {
      return {
        formData : {
          email: "",
          password: "",
        }
      };
    },
    methods : {
      login(){
        ApiService.post('http://localhost:8000/api/login' , this.formData)
          .then((response) => {
            TokenService.saveToken(response.data.data.token);
            router.push('/admin');
          })
          .catch((error) => {
            console.log(error);
          })
      }
    }
  };
  </script>
  
  <style>
  </style>