<script lang="ts" setup>
import SiteHeader from "@/Site/SiteHeader.vue";
import SiteFooter from "@/Site/SiteFooter.vue";
import CharsetEditor from "./CharsetEditor.vue";
</script>
<template>
  <SiteHeader current-app="charset" />

  <div class="bg-gray-100 border-b border-gray-300">
    <div class="bg-white shadow">
      <div class="container">
        <h1 class="font-bold text-xl py-4">
            Charset Editor
            <span
              class="rounded-lg bg-yellow-200 font-normal px-2 py-1 ml-4 border text-sm"
              >work in progress!</span
            >
        </h1>
      </div>
    </div>

    <div class="container fadeIn my-4">
      <CharsetEditor />
    </div>
  </div>

  <SiteFooter />
</template>
