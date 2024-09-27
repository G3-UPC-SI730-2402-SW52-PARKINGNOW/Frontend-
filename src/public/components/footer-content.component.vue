<script>
export default {
  name: "footer-content",

  data() {
    return {
      footer_text: "Copyright © 2024 Fake Store, inc. All rights reserved.",
      authoring_phrase: "Developed by Javier Ramos (u201719648)"
    }
  }
}
</script>

<template>
  <div class="grid bg-primary mt-4 p-4 align-content-start">
    <div class="col-12 ml-3 align-items-center justify-content-center">
      <p>{{ footer_text }}</p>
    </div>
    <div  class="col-12 ml-3 mt-3 align-items-center justify-content-center">
      <p>
        {{authoring_phrase}}
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>