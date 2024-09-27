<template>
  <div class="login-container">
    <mat-card class="login-card">
      <img
        src="/images/parkingnow.png"
        alt="Logo de ParkingNow"
        class="logo"
      />
      <h2 class="title">{{ $t("LOGIN.TITLE") }}</h2>

      <p class="subtitle">
        {{ $t("LOGIN.NO_ACCOUNT") }}
        <router-link to="/register" class="register-link">{{
          $t("LOGIN.REGISTER_HERE")
        }}</router-link>
      </p>

      <form @submit.prevent="onSubmit">
        <mat-form-field appearance="fill" class="full-width">
          <mat-label>{{ $t("LOGIN.EMAIL") }}</mat-label>
          <input
            type="email"
            v-model="loginForm.email"
            v-bind:placeholder="$t('LOGIN.EMAIL_PLACEHOLDER')"
            required
          />
          <mat-error v-if="loginFormErrors.email">{{
            $t("LOGIN.EMAIL_REQUIRED")
          }}</mat-error>
        </mat-form-field>

        <mat-form-field appearance="fill" class="full-width">
          <mat-label>{{ $t("LOGIN.PASSWORD") }}</mat-label>
          <input
            type="password"
            v-model="loginForm.password"
            v-bind:placeholder="$t('LOGIN.PASSWORD_PLACEHOLDER')"
            required
            minlength="6"
          />
        </mat-form-field>

        <div class="checkbox-container">
          <mat-checkbox v-model="loginForm.remember">{{
            $t("LOGIN.REMEMBER_ME")
          }}</mat-checkbox>
          <router-link to="/forgot-password" class="forgot-password">{{
            $t("LOGIN.FORGOT_PASSWORD")
          }}</router-link>
        </div>

        <div class="action-buttons">
          <button
            mat-raised-button
            color="primary"
            type="submit"
            class="full-width"
          >
            {{ $t("LOGIN.LOGIN_BUTTON") }}
          </button>
        </div>
      </form>

      <div class="social-buttons">
        <button mat-raised-button color="primary" class="facebook-button">
          Facebook
        </button>
        <button mat-raised-button color="warn" class="google-button">
          Google
        </button>
      </div>
    </mat-card>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
        remember: false,
      },
      loginFormErrors: {
        email: false,
        password: false,
      },
    };
  },
  methods: {
    onSubmit() {
      // Aquí deberías validar el formulario y luego realizar la lógica de login
      console.log("Formulario enviado", this.loginForm);
      // Simulamos una redirección al dashboard
      this.$router.push("/dashboard");
    },
  },
};
</script>

<style>
/* Tus estilos aquí */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
}

.login-card {
  padding: 30px;
  max-width: 400px;
  width: 100%;
  text-align: center;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
}

.logo {
  max-width: 120px;
  margin: 0 auto 20px;
  display: block;
}

.title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 14px;
  margin-bottom: 25px;
}

.register-link {
  color: #007bff;
  text-decoration: none;
}

.register-link:hover {
  text-decoration: underline;
}

.full-width {
  width: 100%;
  margin-bottom: 20px;
}

mat-form-field {
  font-size: 16px;
}

.mat-form-field-wrapper {
  padding-bottom: 10px;
}

.mat-input-element {
  font-size: 16px;
}

.mat-label {
  font-size: 18px;
  font-weight: bold;
}

.checkbox-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.forgot-password {
  font-size: 12px;
  color: #007bff;
}

.forgot-password:hover {
  text-decoration: underline;
}

.action-buttons {
  margin-top: 20px;
}

.social-buttons {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}

.facebook-button {
  background-color: #3b5998;
  color: white;
}

.facebook-button:hover {
  background-color: #334d84;
}

.google-button {
  background-color: #db4437;
  color: white;
}

.google-button:hover {
  background-color: #c53727;
}

@media (max-width: 768px) {
  .login-card {
    padding: 20px;
  }

  .social-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .social-buttons button {
    margin-bottom: 10px;
  }
}

@media (max-width: 500px) {
  .login-card {
    padding: 15px;
    max-width: 350px;
  }

  .title {
    font-size: 18px;
  }

  .mat-label {
    font-size: 16px;
  }

  .subtitle {
    font-size: 13px;
  }

  .forgot-password {
    font-size: 11px;
  }
}
</style>
