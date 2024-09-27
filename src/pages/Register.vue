<template>
  <div class="register-container">
    <h2>{{ $t("REGISTER.TITLE") }}</h2>
    <div class="register-options">
      <!-- Opción para Conductor -->
      <div class="register-option" @click="navigateToDriver">
        <img
          src="/images/Conductor.jpg"
          :alt="$t('REGISTER.DRIVER')"
          class="register-image"
        />
        <h3>{{ $t("REGISTER.DRIVER") }}</h3>
        <p>{{ $t("REGISTER.DRIVER_DESCRIPTION") }}</p>
        <button class="register-button">
          {{ $t("REGISTER.DRIVER_BUTTON") }}
        </button>
      </div>

      <!-- Opción para Dueño de Playa de Estacionamiento -->
      <div class="register-option" @click="navigateToOwner">
        <img
          src="/images/EstacionamientoP.jpg"
          :alt="$t('REGISTER.OWNER')"
          class="register-image"
        />
        <h3>{{ $t("REGISTER.OWNER") }}</h3>
        <p>{{ $t("REGISTER.OWNER_DESCRIPTION") }}</p>
        <button class="register-button">
          {{ $t("REGISTER.OWNER_BUTTON") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

export default {
  name: "RegisterComponent",
  setup() {
    const router = useRouter();
  },
  methods: {
    navigateToDriver() {
      this.$router.push("/register-driver");
    },
    navigateToOwner() {
      this.$router.push("/register-owner");
    },
  },
};
</script>

<style>
/* Tus estilos CSS aquí */
.register-container {
  text-align: center;
  margin: 50px auto;
  padding: 20px;
}

.register-options {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
}

.register-option {
  max-width: 500px; /* Aumentar el tamaño del contenedor */
  text-align: center;
  padding: 30px; /* Aumentar el padding */
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); /* Sombra más grande */
}

.register-image {
  width: 350px; /* Aumentar el tamaño de las imágenes */
  height: 200px;
  margin-bottom: 30px;
}

h2 {
  font-size: 32px; /* Aumentar el tamaño del título */
  font-weight: bold;
  margin-bottom: 40px; /* Más espacio debajo del título */
}

h3 {
  font-size: 26px; /* Aumentar el tamaño de los subtítulos */
  margin-bottom: 15px;
}

p {
  font-size: 18px; /* Aumentar el tamaño del texto descriptivo */
  margin-bottom: 30px;
}

.register-button {
  display: inline-block;
  padding: 12px 30px; /* Aumentar el tamaño del botón */
  font-size: 18px; /* Aumentar el tamaño del texto del botón */
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.register-button:hover {
}
</style>
