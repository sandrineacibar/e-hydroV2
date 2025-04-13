<template>
  <v-container fluid class="bg-image">
    <!--first row-->
    <v-row>
      <v-col col="12" md="6">
        <div class="title-phrase">
          <h4 class="first-phrase">Stay hydrated<v-icon class="icon-style">mdi-water</v-icon></h4>
          <h4 class="second-phrase">Place your order here</h4>
        </div>
      </v-col>
      <!--Search Barr Area-->
      <v-col col="12" md="6" class="search-bar">
        <v-form class="search-form" role="search">
          <v-row no-gutters>
            <v-col cols="9" class="search-input">
              <v-text-field
                variant="outlined"
                placeholder="Search for water stations nearby..."
                density="comfortable"
                hide-details
                class="fst-italic"
                prepend-inner-icon="mdi-magnify"
                aria-label="Search"
              ></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-btn type="submit" class="search-btn" color="" block><span>Search </span></v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
    <!--end first row-->

    <!--second row-->
    <v-row>
      <v-col class="d-flex justify-center" cols="12">
        <v-card class="mx-auto station-card" max-width="85%">
          <v-card-title class="text-center pt-10">
            <h2 class="text-h5">Featured Stations</h2>
            <!--Station Cards-->
            <v-container>
              <v-slide-group
                ref="slideGroup"
                v-model="model"
                class="pa-4"
                show-arrows
                center-active
              >
                <template v-slot:prev>
                  <v-btn v-if="$vuetify.breakpoint.mdAndUp" icon @click="scrollPrev">
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>
                </template>

                <template v-slot:next>
                  <v-btn v-if="$vuetify.breakpoint.mdAndUp" icon @click="scrollNext">
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </template>

                <v-slide-item v-for="(card, index) in cards" :key="index">
                  <v-card class="ma-4" width="300">
                    <v-img :src="card.image" height="200px"></v-img>
                    <v-card-title>{{ card.title }}</v-card-title>
                    <v-card-text>{{ card.text }}</v-card-text>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-container>
            <!--End Station Cards-->
          </v-card-title>
          <v-card-subtitle class="pb-0">
            <span class="text-h6">Find the nearest water refilling station</span>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <!--end second row-->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      model: 0,
      cards: [
        {
          title: 'Card 1',
          text: 'Swipe or click the arrow!',
          image: 'https://picsum.photos/300/200?random=1',
        },
        {
          title: 'Card 2',
          text: 'Another card!',
          image: 'https://picsum.photos/300/200?random=2',
        },
        {
          title: 'Card 3',
          text: 'Yet another card!',
          image: 'https://picsum.photos/300/200?random=3',
        },
        {
          title: 'Card 4',
          text: 'Swipe me too!',
          image: 'https://picsum.photos/300/200?random=4',
        },
      ],
    }
  },
  computed: {
    cardWidth() {
      // Adjust card width based on screen size
      if (this.$vuetify.breakpoint.xs) return 240
      if (this.$vuetify.breakpoint.sm) return 280
      return 300
    },
  },

  methods: {
    scrollNext() {
      this.$refs.slideGroup.next()
    },
    scrollPrev() {
      this.$refs.slideGroup.prev()
    },
  },
}
</script>

<style scoped>
.bg-image {
  background-image: url('@/assets/img/bg-home-no-gallon.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
}

.title-phrase {
  font-family: 'familjen-grotesk', sans-serif;
  font-size: 23px !important;
  color: #04448d;
  font-style: italic;
  padding-left: 15%;
  padding-top: 11% !important;
}
.icon-style {
  font-size: 35px;
  color: #02adef;
}
.first-phrase,
.second-phrase {
  font-weight: 700;
  font-family: 'Faustina', serif;
}
.first-phrase {
  margin-bottom: -0.6rem;
}
/*-------Search Bar---------*/

.search-bar {
  padding-top: 11%;
  padding-right: 8%;
}

.search-input {
  position: relative;
}

/* Animated gradient border */
.search-input .v-text-field {
  position: relative;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid transparent;
  color: #fff;
  overflow: hidden;
  z-index: 1;
}

/* The running border using a ::before pseudo-element */
.search-input .v-text-field::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  z-index: -1;
  border-radius: 12px;
  background: linear-gradient(
    270deg,
    #90caf9,
    #42a5f5,
    #89C4DD,
    #408DB3,
    #90caf9
  );
  background-size: 400% 400%;
  animation: gradient-run 6s ease infinite;
  opacity: 1; /* Always visible */
}

/* Animation keyframes */
@keyframes gradient-run {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.search-btn {
  width: 100%;
  height: 93%;
  background: linear-gradient(120deg, #0557b6, #011327, #0557b6);
  background-size: 200% auto;
  background-position: left center;
  transition: background-position 0.5s ease;
  margin-top: .11rem;
}
.search-btn:hover {
  background-position: right center;
}
.search-btn span {
  font-family: 'inter', sans-serif;
  font-weight: 600;
  text-transform: none;
  color: #fff;
}
/*-------End Search Bar---------*/

/*-------Station Cards---------*/
.station-card {
  background-color: #bee1ed7e !important;
}
.text-h5{
  font-family: 'familjen-grotesk', sans-serif;
  font-weight: 700 !important;
  color: #04448d;
}
</style>
