<template>
  <header :class="{ 'scrolled-nav': scrollPosition }">
    <nav>
      <div class="branding">
        <span class="first-word">E</span>
        <span class="second-word">-HYDRO</span>
      </div>
      <ul v-show="!mobile" class="navigation">
        <li><router-link class="link" :to="{ name: 'home' }">Home</router-link></li>
        <li><router-link class="link" :to="{ name: '' }">Home</router-link></li>
        <li><router-link class="link" :to="{ name: '' }">Home</router-link></li>
        <li><router-link class="link" :to="{ name: '' }">Home</router-link></li>
        <li><router-link class="link" :to="{ name: '' }">Home</router-link></li>
      </ul>
      <div class="icon">
        <i
          @click="toggleMobileNav"
          v-show="mobile"
          class="fa fa-bars"
          :class="{ 'icon-active': mobileNav }"
        >
        </i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="!mobile" class="navigation">
          <li><router-link class="link" :to="{ name: 'home' }">Home</router-link></li>
          <li><router-link class="link" :to="{ name: '' }">Home</router-link></li>
          <li><router-link class="link" :to="{ name: '' }">Home</router-link></li>
          <li><router-link class="link" :to="{ name: '' }">Home</router-link></li>
          <li><router-link class="link" :to="{ name: '' }">Home</router-link></li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
/*export default {
  //name: "navigation",
  data() {
    return {
      scrollPosition: null,
      mobile: true,
      mobileNav: null,
      windowWidth: null,
    };
  },
}*/
</script>

<style lang="scss" scoped>
header {
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: white;

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

    ul,
    .link {
      font-weight: 500;
      color: white;
      list-style: none;
      text-decoration: none;
    }

    li {
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }

    .link {
      font-size: 14px;
      transition: 0.5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;
      &:hover {
        color: salmon;
        border-color: salmon;
      }
    }

    .branding {
      display: flex;
      align-items: center;

      img {
        width: 50px;
        transition: 0.5s ease all;
      }
    }

    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
    }

    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100% i {
        cursor: pointer;
        font-size: 24px;
        transition: 0.8s ease all;
      }
    }

    .icon-active {
      transform: rotate(180deg);
    }

    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100%;
      background-color: #fff;
    }
  }
}
</style>
