<template>
  <div class="flex items-center justify-center min-h-screen">
    <!-- Contenedor principal -->
    <div class="bg-gray-800 rounded-2xl shadow-xl w-96">
      
      <!-- Header naranja con logo -->
      <div class="bg-orange-600 rounded-t-2xl flex flex-col items-center py-6">
        <img :src="Logo" alt="SIGOL" class="w-14 mb-2" />
        <h1 class="text-white font-bold text-lg">SIGOL</h1>
      </div>

      <!-- Formulario -->
      <div class="p-8">
        <form @submit.prevent="handleLogin">
          <!-- Email -->
          <div class="mb-4">
            <label class="block text-gray-300 text-sm mb-1">Correo Electrónico</label>
            <input 
              v-model="username" 
              type="email" 
              placeholder="tucorreo@mail.com"
              class="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500" 
              required 
            />
          </div>

          <!-- Password -->
          <div class="mb-4">
            <label class="block text-gray-300 text-sm mb-1">Contraseña</label>
            <input 
              v-model="password" 
              type="password" 
              placeholder="••••••••"
              class="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500" 
              required 
            />
          </div>

          <!-- Recordar -->
          <div class="flex items-center justify-between text-sm mb-4">
            <label class="flex items-center text-gray-400">
              <input type="checkbox" class="mr-2 accent-orange-600" />
              Recuérdame
            </label>
            <a href="#" class="text-orange-500 hover:underline">¿Olvidaste tu contraseña?</a>
          </div>

          <!-- Botón -->
          <button 
            type="submit" 
            class="w-full bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition">
            Iniciar Sesión
          </button>
        </form>

        <!-- Separador -->
        <div class="flex items-center my-6">
          <hr class="flex-grow border-gray-600" />
          <span class="px-2 text-gray-400 text-sm">o continúa con</span>
          <hr class="flex-grow border-gray-600" />
        </div>

        <!-- Botones sociales -->
        <div class="flex justify-center space-x-4">
          <button class="bg-white p-2 rounded-full shadow-md">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" class="w-6 h-6" />
          </button>
          <button class="bg-white p-2 rounded-full shadow-md">
            <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" class="w-6 h-6" />
          </button>

          <!--<button class="bg-white p-2 rounded-full shadow-md">
            <img :src="AppleIcon" alt="Apple" class="w-6 h-6" />  --><!-- ✅ Corregido -->
          <button class="bg-white p-2 rounded-full shadow-md">
            <img src="https://www.svgrepo.com/show/511330/apple-173.svg" class="w-6 h-6" />
          </button>          
          
        </div>

        <!-- Registro -->
        <p class="text-center text-sm text-gray-400 mt-6">
          ¿No tienes una cuenta?
          <a href="#" class="text-orange-500 hover:underline">Regístrate ahora</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Logo from '../assets/Logo.jpg'           // ✅ Logo

const username = ref('')
const password = ref('')

function handleLogin() {
  console.log('Intentando login con:', username.value, password.value)
}
</script>
