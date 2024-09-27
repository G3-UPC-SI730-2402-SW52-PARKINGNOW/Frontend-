<template>
  <div class="reservations-container">
    <pv-card class="reservation-card">
      <template #title>
        <h2>Gestionar Reservaciones de Estacionamiento</h2>
      </template>
      <template #content>
        <form @submit.prevent="onSubmit">
          <p>
            <pv-input-text
              label="Matrícula del Vehículo"
              v-model="reservationForm.vehicleRegistration"
              placeholder="Ej. ABC-1234"
              required
              variant="filled"
            ></pv-input-text>
          </p>

          <p>
            <pv-select
              label="Tipo de Vehículo"
              v-model="reservationForm.typeOfVehicle"
              required
              :options="['Motorcicle', 'truck', 'car']"
            />
          </p>

          <p>
            <pv-datetime
              type="datetime-local"
              v-model="reservationForm.reservationTime"
              showTime
              required
              label="Hora de la Reserva"
            />
          </p>

          <div class="action-buttons">
            <button type="submit">Reservar</button>
          </div>
        </form>
      </template>
    </pv-card>

    <pv-card class="reservation-list">
      <template #title>
        <h3>Reservaciones Actuales</h3>
      </template>

      <template #content>
        <table class="full-width">
          <thead>
            <tr>
              <th>ID</th>
              <th>Matrícula</th>
              <th>Tipo</th>
              <th>Hora</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="reservation in parkingReservations"
              :key="reservation.id"
            >
              <td>{{ reservation.id }}</td>
              <td>{{ reservation.vehicleRegistration }}</td>
              <td>{{ reservation.typeOfVehicle }}</td>
              <td>{{ reservation.reservationTime }}</td>
              <td>
                <button @click="deleteReservation(reservation.id)">
                  delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </pv-card>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  name: "ReservationsComponent",
  setup() {
    const reservationForm = ref({
      vehicleRegistration: "",
      typeOfVehicle: "",
      reservationTime: "",
    });
    const parkingReservations = ref([]);

    const getReservations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/parkingReservations"
        );
        parkingReservations.value = response.data;
      } catch (error) {
        console.error(error);
      }
    };

    const onSubmit = async () => {
      try {
        await axios.post(
          "http://localhost:3000/parkingReservations",
          reservationForm.value
        );
        await getReservations();
        reservationForm.value = {
          vehicleRegistration: "",
          typeOfVehicle: "",
          reservationTime: "",
        };
      } catch (error) {
        console.error(error);
      }
    };

    const deleteReservation = async (id) => {
      try {
        await axios.delete(`http://localhost:3000/parkingReservations/${id}`);
        await getReservations();
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(() => {
      getReservations();
    });

    return {
      reservationForm,
      parkingReservations,
      onSubmit,
      deleteReservation,
    };
  },
};
</script>

<style scoped>
.reservations-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.reservation-card {
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.full-width {
  width: 100%;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

h3 {
  text-align: center;
  margin-bottom: 10px;
}

.mat-form-field {
  margin-bottom: 16px;
}

.action-buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

button {
  width: 100%;
}

.table-header {
}

.mat-elevation-z8 {
  border-radius: 8px;
}
</style>
