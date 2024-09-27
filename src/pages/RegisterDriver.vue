<template>
  <div v-if="form" class="register-driver-container">
    <div class="register-driver-card">
      <h1 class="title">{{ $t('REGISTER_DRIVER.TITLE') }}</h1>
      <p class="subtitle">{{ $t('REGISTER_DRIVER.SUBTITLE') }}</p>

      <form @submit.prevent="onSubmit">
        <div class="full-width">
          <label>{{ $t('REGISTER_DRIVER.FIRST_NAME') }}</label>
          <input v-model="form.firstName" type="text" v-bind:placeholder="$t('REGISTER_DRIVER.FIRST_NAME_PLACEHOLDER')">
        </div>
        <button type="submit" class="full-width">{{ $t('REGISTER_DRIVER.SUBMIT_BUTTON') }}</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const form = ref({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      vehiclePlate: '',
      dni: ''
    });

    const rules = {
      firstName: { required },
      lastName: { required },
      email: { required, email },
      password: { required },
      confirmPassword: { required },
      vehiclePlate: { required },
      dni: { required }
    };

    const $v = useVuelidate(rules, form);

    const onSubmit = () => {
      //$v.value.$touch();
    //   if (!$v.value.$invalid) {
    //     console.log('Formulario de registro de conductor enviado:', form.value);
    //   }
        router.push('/dashboard-driver');
    };

    return { form, $v, onSubmit };
  }
};
</script>

<style>
/* Tus estilos CSS aquí */
.register-driver-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
}

.register-driver-card {
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
  .register-driver-card {
    padding: 20px;
  }
}

</style>