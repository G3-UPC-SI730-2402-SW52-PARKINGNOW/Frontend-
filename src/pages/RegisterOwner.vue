<template>
  <div class="register-owner-container">
    <div class="register-owner-card">
      <h1 class="title">{{ $t("REGISTER_OWNER.TITLE") }}</h1>
      <p class="subtitle">{{ $t("REGISTER_OWNER.SUBTITLE") }}</p>

      <form @submit.prevent="onSubmit">
        <!-- Nombre Completo -->
        <div class="full-width">
          <label>{{ $t("REGISTER_OWNER.FULL_NAME") }}</label>
          <input
            v-model="form.fullName"
            type="text"
            v-bind:placeholder="$t('REGISTER_OWNER.FULL_NAME_PLACEHOLDER')"
          />
          <!-- <div v-if="!$v.form.fullName.required">
            {{ $t("REGISTER_OWNER.FULL_NAME_ERROR") }}
          </div> -->
        </div>

        <button type="submit" class="full-width">
          {{ $t("REGISTER_OWNER.SUBMIT_BUTTON") }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const form = ref({
      fullName: "",
      businessName: "",
      email: "",
      password: "",
      confirmPassword: "",
      ruc: "",
      address: "",
    });

    const rules = {
      fullName: { required },
      businessName: { required },
      email: { required, email },
      password: { required },
      confirmPassword: { required },
      ruc: { required },
      address: { required },
    };

    const $v = useVuelidate(rules, form);

    const onSubmit = () => {
    //   $v.value.$touch();
    //   if (!$v.value.$invalid) {
    //     console.log(
    //       "Formulario de registro del propietario enviado:",
    //       form.value
    //     );
        router.push("/dashboard-owner");
      //}
    };

    return { form, $v, onSubmit };
  },
};
</script>

<style>
/* Tus estilos CSS aquí */
.register-owner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
}

.register-owner-card {
  padding: 40px;
  width: 100%;
  max-width: 500px;
  text-align: center;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 16px;
  margin-bottom: 30px;
}

.full-width {
  width: 100%;
  margin-bottom: 20px;
}

button {
  margin-top: 20px;
  padding: 10px 0;
  font-size: 18px;
}

@media (max-width: 768px) {
  .register-owner-card {
    padding: 20px;
  }
}
</style>
