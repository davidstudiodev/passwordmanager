<template>
    <form @submit.prevent="registerUser">
      <h1>Register</h1>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" placeholder="Write you email.." v-model="email">
  
      <label for="password">Password</label>
      <input type="password" name="password" id="password" placeholder="Write you password" v-model="password">
  
      <button type="submit">Register</button>
    
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  import { auth } from '@/firebase/sdk';
  import { useRouter } from 'vue-router'
  
  
  const email = ref('')
  const password = ref('')
  const router = useRouter()
  
  const registerUser = async() => {
      try {
          const userValidate = await createUserWithEmailAndPassword(auth, email.value, password.value)
          const user = userValidate.user
          console.log(user);
          
          router.push({name:'login'})
          alert('User register.')
          
      } catch (error) {
          console.log('Error: ' + error.message); 
      }
  }
  
  </script>
  
  <style scoped lang="scss">
  
  form {
      display: flex;
      flex-direction: column;
      padding: 30px;
      gap: 10px;
  }
  
  </style>