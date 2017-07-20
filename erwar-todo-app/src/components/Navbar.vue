<template lang="html">
  <div class="container">
    <b-navbar toggleable type="inverse" variant="success" v-if="islogin">

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-link class="navbar-brand" to="/">
        <span>FOXY-FANCY-TODO</span>
      </b-link>

      <b-collapse is-nav id="nav_collapse">

        <!-- <b-nav is-nav-bar>
          <b-nav-item>Support</b-nav-item>
          <b-nav-item>Docs</b-nav-item>
          <b-nav-item>Contact Us</b-nav-item>
        </b-nav> -->

        <b-nav is-nav-bar class="ml-auto">

          <!-- Navbar dropdowns -->
          <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item to="#">EN</b-dropdown-item>
            <b-dropdown-item to="#">ES</b-dropdown-item>
            <b-dropdown-item to="#">RU</b-dropdown-item>
            <b-dropdown-item to="#">FA</b-dropdown-item>
          </b-nav-item-dropdown> -->
          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <span style="font-weight: bold;">Todo</span>
            </template>

            <b-dropdown-item to="/add"> + Add</b-dropdown-item>
            <b-dropdown-item to="/mytodo">My Todo</b-dropdown-item>
            <!-- <b-dropdown-item to="#">Signout</b-dropdown-item> -->
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <span style="font-weight: bold;">User</span>
            </template>

            <b-dropdown-item @click="signout()">Sign Out</b-dropdown-item>
            <!-- <b-dropdown-item to="#">Signout</b-dropdown-item> -->
          </b-nav-item-dropdown>

        </b-nav>
      </b-collapse>
    </b-navbar>
    <b-navbar toggleable type="inverse" variant="success" v-else>

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-link class="navbar-brand" to="/">
        <span>FOXY-FANCY-TODO</span>
      </b-link>

      <b-collapse is-nav id="nav_collapse">

        <!-- <b-nav is-nav-bar>
          <b-nav-item>Support</b-nav-item>
          <b-nav-item>Docs</b-nav-item>
          <b-nav-item>Contact Us</b-nav-item>
        </b-nav> -->

        <b-nav is-nav-bar class="ml-auto">

          <!-- Navbar dropdowns -->
          <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item to="#">EN</b-dropdown-item>
            <b-dropdown-item to="#">ES</b-dropdown-item>
            <b-dropdown-item to="#">RU</b-dropdown-item>
            <b-dropdown-item to="#">FA</b-dropdown-item>
          </b-nav-item-dropdown> -->

          <b-nav-item-dropdown right>

            <!-- Using button-content slot -->
            <template slot="button-content">
              <span style="font-weight: bold;">User</span>
            </template>

            <b-dropdown-item to="/auth">Sign In</b-dropdown-item>
            <!-- <b-dropdown-item to="#">Signout</b-dropdown-item> -->
          </b-nav-item-dropdown>

        </b-nav>
      </b-collapse>
    </b-navbar>

  </div>
</template>

<script>
import Auth from '@/components/Auth'
export default {
  props: ['islogin'],
  components: {
    Auth
  },
  data () {
    return {
    }
  },
  methods: {
    signout () {
      this.$emit('logout')
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css">
.bg-success {
    background-color: #31708f !important;
}
</style>
