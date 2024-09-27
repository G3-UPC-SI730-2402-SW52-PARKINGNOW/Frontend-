<template>
  <div class="dashboard-container">
    <aside class="sidebar">
      <img src="/images/parkingnow.png" alt="ParkingNow Logo" class="logo" />
      <nav class="menu">
        <router-link to="/dashboard-driver" class="menu-item">{{
          $t("SIDEBAR.HOME")
        }}</router-link>
        <router-link to="/reservations" class="menu-item">{{
          $t("SIDEBAR.RESERVATIONS")
        }}</router-link>
        <router-link to="/support" class="menu-item">{{
          $t("SIDEBAR.SUPPORT")
        }}</router-link>
        <router-link to="/vehicle-tracking" class="menu-item">{{
          $t("SIDEBAR.TRACKING_AND_ALARMS")
        }}</router-link>
        <router-link to="/settings" class="menu-item">{{
          $t("SIDEBAR.SETTINGS")
        }}</router-link>
        <router-link to="/notifications" class="menu-item">{{
          $t("SIDEBAR.NOTIFICATIONS")
        }}</router-link>
        <router-link to="/login" class="menu-item">{{
          $t("SIDEBAR.LOGOUT")
        }}</router-link>
      </nav>
    </aside>

    <main class="content">
      <div class="welcome">
        <h1>{{ $t("DASHBOARD.WELCOME") }}</h1>
      </div>

      <section class="favorites-offers-container">
        <pv-card>
          <template #title>
            <h2>{{ $t("DASHBOARD.FAVORITE_PLACES") }}</h2>
          </template>
          <template #content>
            <p>{{ $t("DASHBOARD.FAVORITE_PLACES_DESC") }}</p>
          </template>
        </pv-card>

        <pv-card class="card">
          <template #title>
            <h2>{{ $t("DASHBOARD.WEEKLY_OFFERS") }}</h2>
          </template>
          <template #content>
            <p>{{ $t("DASHBOARD.WEEKLY_OFFERS_DESC") }}</p>
          </template>
        </pv-card>
      </section>

      <section class="map-container">
        <pv-card>
          <template #title>
            <h2>{{ $t("DASHBOARD.RESERVE_NOW") }}</h2>
          </template>
          <template #content>
            <div id="map" style="height: 400px"></div>
          </template>
        </pv-card>
      </section>
    </main>
  </div>
</template>

<script>
import L from "leaflet";
import { onMounted } from "vue";

export default {
  name: "DashboardDriverComponent",
  setup() {
    const driverName = "Nombre del Conductor"; // Nombre del conductor

    onMounted(() => {
      //   const map = L.map("map").setView([40.7128, -74.006], 13); // Nueva York como punto inicial
      //   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      //     attribution:
      //       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      //   }).addTo(map);
      //   const markerData = [
      //     { lat: 40.7128, lng: -74.006, name: "New York" },
      //     { lat: 34.0522, lng: -118.2437, name: "Los Angeles" },
      //   ];
      //   markerData.forEach((marker) => {
      //     L.marker([marker.lat, marker.lng])
      //       .addTo(map)
      //       .bindPopup(marker.name)
      //       .openPopup();
      //   });
    });

    return {
      driverName,
    };
  },
};
</script>

<style scoped>
.dashboard-container {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 250px;
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
  a {
    color: white;
  }
}

.menu-item {
  font-size: 16px;
  text-align: left;
  margin-bottom: 55px;
}

.menu-item:hover {
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
