<template>
  <div class="text-white px-6">
    <!-- Barra superior -->
    <header class="flex items-center justify-between py-4 border-b border-gray-700 bg-orange-600">
      <div class="flex items-center space-x-2">
        <img :src="Logo" alt="Logo" class="h-8 w-8" />        
        <h1 class="text-lg font-bold">SIGOL</h1>
      </div>

      <nav class="flex items-center space-x-6 text-sm">
        <a href="/" class="hover:text-yellow-400">Inicio</a>
        <a href="#" class="hover:text-yellow-400">Tabla General</a>
        <a href="#" class="hover:text-yellow-400">Jornadas</a>
        <a href="#" class="hover:text-yellow-400">Equipos</a>
      </nav>

      <div class="flex items-center space-x-2">
        <button class="px-3 py-1 bg-yellow-600 rounded-md hover:bg-yellow-700">
          Sign in
        </button>
        <button class="px-3 py-1 bg-gray-800 border border-gray-600 rounded-md hover:bg-gray-700">
          Register
        </button>
      </div>
    </header>

    <!-- Título -->
    <h2 class="text-3xl font-bold text-center mt-8">LIGAS</h2>

    <!-- Barra de búsqueda -->
    <div class="flex justify-center mt-6">
      <input
        type="text"
        placeholder="Buscar ligas"
        class="w-1/2 px-4 py-2 rounded-full bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
    </div>

    <!-- Ligas destacadas -->
    <section class="mt-10">
      <h3 class="text-xl font-semibold mb-4 border-b border-yellow-600 inline-block">
        Ligas Destacadas
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-orange-800 rounded-lg p-4 shadow hover:scale-105 transition">          
          <img :src="Premier" alt="Liga Varonil" class="h-16 mx-auto" />        
          <h4 class="text-center mt-2 font-semibold">Liga Varonil</h4>
        </div>
        <div class="bg-yellow-600 rounded-lg p-4 shadow hover:scale-105 transition">
          <img :src="Premier" alt="Liga Varonil" class="h-16 mx-auto" />        
          <h4 class="text-center mt-2 font-semibold">Liga Femenil</h4>
        </div>
        <div class="bg-blue-700 rounded-lg p-4 shadow hover:scale-105 transition">
          <img :src="Premier" alt="Liga Varonil" class="h-16 mx-auto" />        
          <h4 class="text-center mt-2 font-semibold">Liga Mixta</h4>
        </div>
      </div>
    </section>

    <!-- Últimas ligas consultadas -->
    <section class="mt-10">
      <h3 class="text-xl font-semibold mb-4 border-b border-yellow-600 inline-block">
        Últimas Ligas Consultadas
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-orange-800 rounded-lg p-4 shadow hover:scale-105 transition">          
          <img :src="Premier" alt="Liga Varonil" class="h-16 mx-auto" />        
          <h4 class="text-center mt-2 font-semibold">Liga Varonil</h4>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "LigasView"
}
</script>

<style scoped>
/* Ajustes extra si los necesitas */
</style>

<script setup>
import { ref } from 'vue'
import Logo from '../assets/Logo.jpg'           // ✅ Logo
import Premier from '../assets/Premier.png'           // ✅ Logo

const username = ref('')
const password = ref('')

function handleLogin() {
  console.log('Intentando login con:', username.value, password.value)
}
</script>
