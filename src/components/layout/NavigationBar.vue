<template>
  <header :class="{ 'scrolled-nav': scrollPosition }">
    <nav>
      <div class="branding">
        <span class="first-word">E</span>
        <span class="second-word">-HYDRO</span>
      </div>
      <ul v-show="!mobile" class="navigation">
        <li><router-link class="link" :to="{ name: 'home' }">Home</router-link></li>
        <li><router-link class="link" :to="{ name: 'station' }">Station</router-link></li>
        <li><router-link class="link" :to="{ name: '' }">My Order</router-link></li>
        <li>
          <router-link class="link second-last" :to="{ name: '' }"
            ><v-icon>mdi-bell</v-icon></router-link
          >
        </li>
        <li>
          <router-link class="link last" :to="{ name: '' }"
            ><v-icon>mdi-account-circle</v-icon></router-link
          >
        </li>
      </ul>
      <v-icon
        class="icon-style"
        @click="toggleMobileNav"
        v-show="mobile"
        :class="{ 'icon-active': mobileNav }"
        >mdi-menu</v-icon
      >

      <transition name="mobile-nav">
        <ul v-show="mobile && mobileNav" class="dropdown-nav">
          <li>
            <div class="branding">
              <span class="first-word">E</span>
              <span class="second-word">-HYDRO</span>
            </div>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'home' }"
              ><v-icon>mdi-home</v-icon>Home</router-link
            >
          </li>
          <li>
            <router-link class="link" :to="{ name: '' }"
              ><v-icon>mdi-water</v-icon>Station</router-link
            >
          </li>
          <li>
            <router-link class="link" :to="{ name: '' }"
              ><v-icon>mdi-cart</v-icon>My Order</router-link
            >
          </li>
          <li>
            <router-link class="link" :to="{ name: '' }"
              ><v-icon>mdi-bell</v-icon> Notification</router-link
            >
          </li>
          <li>
            <router-link class="link" :to="{ name: '' }"
              ><v-icon>mdi-account</v-icon> Profile</router-link
            >
          </li>
        </ul>
      </transition>
    </nav>
  </header>
  <slot name="content"></slot>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      scrollPosition: null,
      mobile: null,
      mobileNav: null,
      windowWidth: window.innerWidth,
    }
  },

  created() {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },

    checkScreen() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 750) {
        this.mobile = true
        return
      }
      this.mobile = false
      this.mobileNav = false
      return
    },
  },
}
</script>

<style scoped>
header {
  /*background-color: rgba(0, 0, 0, 0.8);*/
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: #04448d;
}
  nav {
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 1140px) {
      max-width: 1140px;
    }
  }
    ul,
    .link {
      font-weight: 400;
      font-family: 'Inter', sans-serif;
      color: #04448d;
      list-style: none;
      text-decoration: none;
    }

    li {
      /*text-transform: uppercase;*/
      padding: 16px;
      margin-left: 24px;

      .last,
      second-last {
        margin-left: -2.7rem !important;
      }
      .last {
        font-size: 25px;
        border-style: none;
      }
      .second-last {
        font-size: 22px;
        border-style: none;
      }
    }

    .link {
      font-size: 18px;
      transition: 0.5s ease all;
      /*padding-bottom: 4px;*/
      border-bottom: 1px solid transparent;
      &:hover {
        color: #02adef;
        border-color: #02adef;
      }
    }

    .branding {
      display: flex;
      align-items: center;
      /*margin-left: -2rem !important;*/

      .first-word,
      .second-word {
        font-weight: 500;
        font-size: 53px;
        transition: 0.5s ease all;
        font-family: 'Antonio', sans-serif;
      }
      .first-word {
        color: #02adef;
      }
      .second-word {
        color: #04448d;
      }
    }
    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
    }
    @keyframes bell-shake {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(3deg);
  }
  50% {
    transform: rotate(-3deg);
  }
  75% {
    transform: rotate(2deg);
  }
}

.bell {
  display: inline-block; /* necessary for rotation to work */
  animation: bell-shake 1s infinite ease-in-out;
}


    .icon-style {
      font-size: 50px;
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;
      margin-top: 4px;
      cursor: pointer;
      transition:
        transform 0.5s ease,
        opacity 0.4s ease;
    }

    .icon-style.icon-active {
      transform: rotate(180deg);
    }

    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 90%;
      max-width: 250px;
      height: 100%;
      backdrop-filter: blur(10px);
      left: 0;
      top: 0;
      margin: auto;
      padding: 12px 0;
      li {
        .link {
          color: #04448d;
          font-size: 18px;
        }
      }
    }


</style>
