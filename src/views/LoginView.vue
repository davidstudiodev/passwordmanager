<template>
  <form @submit.prevent="loginUser">
    <h1>Login</h1>
    <label for="email">Email</label>
    <input type="email" name="email" id="email" placeholder="Write you email.." v-model="email">

    <label for="password">Password</label>
    <input type="password" name="password" id="password" placeholder="Write you password" v-model="password">

    <button type="submit">Login</button>

    <p>Don't have an account?</p> <router-link to="/register">Register</router-link>

  </form>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router'


const email = ref('')
const password = ref('')
const router = useRouter()



const loginUser = async() => {
    try {
        const auth = getAuth()
        const userValidate = await signInWithEmailAndPassword(auth, email.value, password.value)

        console.log("Usuario autenticado:", auth.currentUser);

        const user = userValidate.user
        router.push({name:'passwords'})
        console.log(user);
        

    } catch (error) {
        console.log(error);
        
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