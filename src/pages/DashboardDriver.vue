<template>
  <div class="dashboard-container">
    <aside class="sidebar">
      <img src="../../../../assets/images/parkingnow.png" alt="ParkingNow Logo" class="logo">
      <nav class="menu">
        <router-link to="/dashboard-driver" class="menu-item">
          <v-btn text>{{ 'SIDEBAR.HOME' | translate }}</v-btn>
        </router-link>
        <router-link to="/reservations" class="menu-item">
          <v-btn text>{{ 'SIDEBAR.RESERVATIONS' | translate }}</v-btn>
        </router-link>
        <router-link to="/support" class="menu-item">
          <v-btn text>{{ 'SIDEBAR.SUPPORT' | translate }}</v-btn>
        </router-link>
        <router-link to="/vehicle-tracking" class="menu-item">
          <v-btn text>{{ 'SIDEBAR.TRACKING_AND_ALARMS' | translate }}</v-btn>
        </router-link>
        <router-link to="/settings" class="menu-item">
          <v-btn text>{{ 'SIDEBAR.SETTINGS' | translate }}</v-btn>
        </router-link>
        <router-link to="/notifications" class="menu-item">
          <v-btn text>{{ 'SIDEBAR.NOTIFICATIONS' | translate }}</v-btn>
        </router-link>
        <router-link to="/login" class="menu-item">
          <v-btn text>{{ 'SIDEBAR.LOGOUT' | translate }}</v-btn>
        </router-link>
      </nav>
    </aside>

    <main class="content">
      <div class="welcome">
        <h1>{{ 'DASHBOARD.WELCOME' | translate }}</h1>
      </div>

      <section class="favorites-offers-container">
        <v-card class="card">
          <h2>{{ 'DASHBOARD.FAVORITE_PLACES' | translate }}</h2>
          <p>{{ 'DASHBOARD.FAVORITE_PLACES_DESC' | translate }}</p>
        </v-card>

        <v-card class="card">
          <h2>{{ 'DASHBOARD.WEEKLY_OFFERS' | translate }}</h2>
          <p>{{ 'DASHBOARD.WEEKLY_OFFERS_DESC' | translate }}</p>
        </v-card>
      </section>

      <section class="map-container">
        <h2>{{ 'DASHBOARD.RESERVE_NOW' | translate }}</h2>
        <div id="map" style="height: 400px;"></div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'DashboardDriver',
};
</script>

<style scoped>
.dashboard-container {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 200px;
  background-color: #2c3e50;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.logo {
  width: 100%;
  margin-bottom: 20px;
}

.menu {
  display: flex;
  flex-direction: column;
}

.menu-item {
  color: white;
  font-size: 16px;
  text-align: left;
  margin-bottom: 55px;
}

.menu-item:hover {
  background-color: #34495e;
}

.content {
  flex-grow: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.welcome h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.favorites-offers-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
}

.card {
  width: 100%;
  background-color: #ecf0f1;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.map-container {
  margin-top: 20px;
}

#map {
  height: 400px;
  width: 100%;
  border-radius: 10px;
}

@media (min-width: 768px) {
  .favorites-offers-container {
    flex-direction: row;
  }

  .card {
    width: 45%;
  }
}
</style>
