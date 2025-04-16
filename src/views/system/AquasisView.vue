<template>
  <NavigationBar>
    <template #content>
      <DashboardLayout>
        <template #dashboardcontent>
          <!--Card Station Area-->
          <v-container class="mx-auto station-container" elevation="24">
            <v-row>
              <v-col col="6">
                <h4>Aquasis Water Refilling Station</h4>
              </v-col>
              <v-col col="6" class="text-end">
                <router-link to="/station">
                  <v-icon>mdi-arrow-left</v-icon>
                </router-link>
              </v-col>
            </v-row>
            <!--Left Column-->
            <v-row>
              <v-col col="12" md="6">
                <v-card>
                  <v-row align="center" no-gutters>
                    <v-col col="12" md="6">
                      <img src="@/assets/img/Aquasis-shop.jpg" height="250" alt="test image" />
                    </v-col>
                    <v-col col="12" md="6">
                      <img src="@/assets/img/aquasis-img.jpg" height="250" alt="test image" />
                    </v-col>
                  </v-row>
                  <!--Description-->
                  <v-row>
                    <v-col col="6">
                      <v-icon>mdi-map-marker</v-icon>
                      <p>
                        177 Cancer St. Montilla Blvd Highway, Guingona Subdivision Brgy JP Rizal,
                        Butuan City, Philippines
                      </p>
                    </v-col>
                    <v-col col="6" class="text-end">
                      <p>₱25.00 per gallon</p>
                    </v-col>
                  </v-row>
                  <div d-flex class="mb-10">
                    <v-btn prepend-icon="mdi-facebook-messenger"> Messenger</v-btn>
                    <v-btn prepend-icon="mdi-phone">Contact Number</v-btn>
                  </div>
                  <v-divider></v-divider>
                  <!---RATING AND COMMENTS WILL REFLECT THIS AREA-->
                </v-card>
              </v-col>
              <!--End Left Column-->
              <!--Right Column-->
              <v-col col="12" md="6">
                <v-container>
                  <v-row class="first-row">
                    <v-col col="6">
                      <h4>Order Option</h4>
                      <div class="checkboxes">
                        <v-checkbox
                          v-model="selected"
                          label="Refill Only"
                          value="Refill Only"
                        ></v-checkbox>
                        <v-checkbox
                          v-model="selected"
                          label="Buy with New Gallon"
                          value="Buy with New Gallon"
                        ></v-checkbox>
                      </div>
                    </v-col>
                    <v-col col="6">
                      <h4>Delivery Address Option</h4>
                      <v-select :items="items" label="Select Address..."></v-select>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <v-row class="second-row">
                    <v-col col="12" md="2">
                      <v-card class="text-center" width="95"
                        ><img src="@/assets/img/gallon-aquasis.png"
                      /></v-card>
                    </v-col>
                    <v-col col="12" md="6">
                      <h5>Aquasis Water Refilling Station</h5>
                      <h6>Location: St. Montilla Blvd Highway, Brgy JP Rizal</h6>
                      <p>₱ 25.00</p>
                    </v-col>
                    <v-col col="12" md="4">
                      <v-container d-flex align-center ga-2>
                        <v-row>
                          <v-btn @click="toggleDecrease"><v-icon>mdi-minus</v-icon></v-btn>
                          <p class="text-h6 mb-0 text-center">{{ numberOfGallon }}</p>
                          <v-btn @click="toggleIncrease"><v-icon>mdi-plus</v-icon></v-btn>
                        </v-row>
                      </v-container>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <div class="text-center">
                  <v-btn class="add-address-btn"><v-icon>mdi-plus-circle-outline</v-icon>Place a new order for another location</v-btn>
                  </div>
                  <v-row>
                    <v-col col="12" md="6">
                      <v-btn class="cancel-btn">Cancel</v-btn>
                    </v-col>
                    <v-col col="12" md="6">
                      <h3>Total: ₱{{  }}</h3>
                      <v-btn class="order-btn">Order Now</v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>
              <!--end Right Column-->
            </v-row>
          </v-container>
        </template>
      </DashboardLayout>
      <!--End Card Station Area-->
    </template>
  </NavigationBar>
</template>

<script setup>
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import NavigationBar from '@/components/layout/NavigationBar.vue'

import { ref } from 'vue'

const selected = ref([''])
const items = ['']

// Increasing and Decreasing number of gallon
const numberOfGallon = ref(0)
const toggleIncrease = () => {
  numberOfGallon.value++
}
const toggleDecrease = () => {
  if (numberOfGallon.value > 0) {
    numberOfGallon.value--
  }
}
</script>

<style scoped></style>

