<template>
  <div>
    <h1>Passwords Manager</h1>

    <form @submit.prevent="addService">
      <label for="email">Service</label>
      <input type="text" name="service" id="service" placeholder="Add new service.." v-model="service">
  
      <label for="password">Password</label>
      <input type="password" name="password" id="password" placeholder="Write you password" v-model="password">
  
      <button type="submit">Add</button>

      <div>
        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.service }} - {{ user.password }}
            </li>
        </ul>
      </div>
    
    </form>

  </div>
</template>

<script setup>

import { db } from '@/firebase/sdk'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { ref, onMounted } from 'vue';

const service = ref('')
const password = ref('')
const users = ref([])

const addService = async() => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            service: service.value,
            password: password.value
        })
        console.log('Document written with ID: ', docRef.id);
        
    } catch (error) {
        console.log('Error adding user: ', error);
    }
}

onMounted(async() => {
    
    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        
        querySnapshot.docs.forEach((doc) => {
            users.value.push(doc.data())
        })
    } catch (error) {
        console.log('Error: ' + error);
        
    }
})


</script>

<style scoped lang="scss">
  
  form {
      display: flex;
      flex-direction: column;
      padding: 30px;
      gap: 10px;
  }
  
  </style>