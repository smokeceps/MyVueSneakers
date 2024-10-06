<script setup>
defineProps({
  totalPrice: Number
})

const emit = defineEmits(['openDrawer'])
</script>

<template>
  <header class="flex justify-between border-b border-slate-300 px-10 py-8">
    <RouterLink to="/"
      ><div class="flex items-center gap-4">
        <img src="/shuz.png" alt="Logo" class="w-40" />
        <div>
          <h2 class="text-2xl font-bold uppercase">Vue Sneakers</h2>
          <p class="text-slate-600">Интернет-магазин топовых кроссовок</p>
        </div>
      </div></RouterLink
    >

    <ul class="flex items-center gap-10">
      <li
        @click="() => emit('openDrawer')"
        class="flex items-center cursor-pointer gap-3 text-gray-600 hover:text-black"
      >
        <img src="/cart.svg" alt="Cart" />
        <b>{{ totalPrice }} руб.</b>
      </li>

      <RouterLink to="/favorites">
        <li class="flex items-center cursor-pointer gap-3 text-gray-600 hover:text-black">
          <img src="/heart.svg" alt="Cart" />
          <span>Закладки</span>
        </li>
      </RouterLink>

      <li class="flex items-center cursor-pointer gap-3 text-gray-600 hover:text-black">
        <img src="/profile.svg" alt="Cart" />
        <span>Профиль</span>
      </li>
    </ul>
  </header>
</template>
