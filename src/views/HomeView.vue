<template>
  <div class="h-screen w-screen text-center mt-48">
    <h1 class="text-5xl mb-4">Welcome to Friends Zone</h1>

    <router-link class="p-1 px-2 bg-gray-500 rounded text-white m-2" :to="{name : 'login'}">Sign in</router-link>
    <router-link class="p-1 px-2 bg-gray-500 rounded text-white m-2" :to="{name : 'register'}">Sign up</router-link>

  </div>
</template>

<script>
import {useAuthStore} from "../stores/auth"
  export default {
    data(){
      return{
        authStore : useAuthStore()
      }
    }
  }
</script>

<style>

</style>
<!-- <template>
  <main>
<main id="app" class="mt-32">
  <section ref="chatArea" class="chat-area rounded">
    <p v-for="message in messages" :key="message" class="message" :class="{ 'message-out': message.author === 'you', 'message-in': message.author !== 'you' }">
      {{ message.body }}
    </p>
  </section>

  <section class="chat-inputs">

    <form @submit.prevent="sendMessage('in')" id="person1-form" class="ml-8">
      <label for="person1-input">Bob</label>
      <input class="px-2 py-1 m-4 mr-2 my-0 border-b-2 rounded caret-gray-400 h-2/3   focus:outline-none" v-model="bobMessage" id="person1-input" type="text" placeholder="Type your message">
      <button type="submit" class=" rounded-lg"><i class="fas fa-paper-plane p-2 hover:text-blue-500"></i></button>
    </form>
<button @click="clearAllMessages" class="bg-gray-400 p-2 py-1 rounded  hover:text-blue-500 hover:bg-white">Clear All</button>
    <form @submit.prevent="sendMessage('out')" id="person2-form" class="mr-8">
      <label for="person2-input">You</label>
      <input class="px-2 py-1 m-4 mr-2 my-0 border-b-2 rounded caret-gray-400 h-2/3 focus:outline-none" v-model="youMessage" id="person2-input" type="text" placeholder="Type your message">
      <button type="submit" class=" rounded-lg"><i class="fas fa-paper-plane p-2  hover:text-blue-500"></i></button>    </form>
  </section>
</main>
  </main>
</template>

<script>
  import ApiService from "../services/ApiService";
export default{

  data(){
    return {
      bobMessage: '',
      youMessage: '',
      messages: [
        {
          body: 'suck..',
          author: 'bob'
        },
        {
          body: 'suck what?',
          author: 'you'
        },
        {
          body: 'deez nuts...LOL',
          author: 'bob'
        }
      ]
    }
  },

  mounted(){
    ApiService.get('http://localhost:8000/api/message')
      .then((response) => {
        let messages = response.data.data;
        for (let i = 0; i < messages.length; i++) {
          const message = messages[i];

        }
      })
  },

  methods: {
    sendMessage(direction) {
      if (!this.youMessage && !this.bobMessage) {
        return;
      }
      if (direction === 'out') {
        this.messages.push({body: this.youMessage, author: 'you'})
        this.youMessage = ''
      } else if (direction === 'in') {
        this.messages.push({body: this.bobMessage, author: 'bob'})
        this.bobMessage = ''
      } else {
        alert('something went wrong')
      }
      Vue.nextTick(() => {
        let messageDisplay = this.$refs.chatArea
        messageDisplay.scrollTop = messageDisplay.scrollHeight
      })
    },
    clearAllMessages() {
      this.messages = []
    }
  }

}
</script>

<style>

.headline {
  text-align: center;
  font-weight: 100;
  color: white;
}
.chat-area {
  background: white;
  height: 50vh;
  padding: 1em;
  overflow: auto;
  max-width: 350px;
  margin: 0 auto 2em auto;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3)
}
.message {
  width: 45%;
  border-radius: 10px;
  margin : .5rem;
  padding: .5em;
  font-size: .8em;
}
.message-out {
  background: #407FFF;
  color: white;
  margin-left: 50%;
}
.message-in {
  background: #F1F0F0;
  color: black;
}
.chat-inputs {
  display: flex;
  justify-content: space-between;
}
#person1-input {
  padding: .5em;
}
#person2-input {
  padding: .5em;  
}

</style> -->