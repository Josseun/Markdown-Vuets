<template>
  <section>
    <nav class="bg-gray-900 flex justify-between items-center text-white px-6 py-3 shadow-md">
       <h1 className="font-serif uppercase text-4xl pl-20">Markdown Editor</h1>
      <div class="flex items-center gap-6">
        <router-link to="/">
          <button
            class="px-4 font-bold py-2 cursor-pointer rounded transition-colors bg-blue-400 hover:bg-gray-500"
          >
            Editor
          </button>
        </router-link>
        <router-link to="/ErrorPage">
          <button
            class="px-4 font-bold py-2 cursor-pointer rounded transition-colors bg-blue-400 active:red-200  hover:bg-gray-500"
          >
            Test Error Boundary
          </button>
        </router-link>
      </div>
    </nav>
  </section>
</template>
