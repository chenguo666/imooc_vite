<template>
  <div
    class="group relative p-0.5 rounded-xl border-white duration-500 hover:bg-red-100/40"
  >
    <div>
      <my-svg-icon
        name="search"
        class="w-2 h-2 absolute translate-y-[-50%] top-[50%] left-2"
        color="#707070"
      ></my-svg-icon>
      <input
        type="text"
        class="block w-full h-[44px] pl-4 outline-0 bg-zinc-100 caret-zinc-400 rounded-xl text-zinc-900 tracking-wide text-xs font-semibold border border-zinc-100 duration-500 focus:border-red-300 group-hover:bg-white group-hover:border-zinc-200"
        placeholder="搜索"
      />
      <my-svg-icon
        name="input-delete"
        class="w-2 h-2 absolute translate-y-[-50%] top-[50%] right-9 duration-500"
      ></my-svg-icon>
      <div
        class="w-[1px] h-1.5 opacity-0 absolute translate-y-[-50%] top-[50%] duration-500 right-[62px] duration-500 bg-zinc-200 group-hover:opacity-100"
      ></div>
      <!--  TODO: 搜索按钮通用组件 -->
    </div>
    <!-- 下拉区 -->
    <transition name="slide">
      <div
        class="max-h-[368px] w-full text-base overflow-auto bg-white absolute left-0 top-[56px] p-2 rounded border border-zinc-200 duration-200 hover:shadow-2xl"
      ></div>
    </transition>
  </div>
</template>
<script setup></script>
<style scope>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
</style>
