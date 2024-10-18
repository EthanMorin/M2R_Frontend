<template>
  <nav class="bg-blue-600 p-6 shadow-lg">
    <div class="container mx-auto">
      <ul class="flex justify-between items-center">
        <li>
          <router-link to="/" class="text-white text-lg font-semibold hover:text-gray-200 transition duration-300">
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/about" class="text-white text-lg font-semibold hover:text-gray-200 transition duration-300">
            About
          </router-link>
        </li>
        <li>
          <router-link to="/contact" class="text-white text-lg font-semibold hover:text-gray-200 transition duration-300">
            Contact
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>