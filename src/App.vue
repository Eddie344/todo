<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="sass">
#app
  font-family: Nunito, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

#nav
  padding: 30px

  a
    font-weight: bold
    color: #2c3e50

    &.router-link-exact-active
      color: #42b983

.container
  max-width: 1200px
  margin: 0 auto

.btn
  font-family: Nunito, sans-serif
  font-weight: bold
  border: none
  border-radius: 5px
  padding: 10px 20px
  cursor: pointer
  outline: none

.btn-success
  background-color: #79d69a
  color: #fff
  transition: background-color, 0.3s ease
  &:hover
    background-color: darken(#79d69a, 10%)
</style>
