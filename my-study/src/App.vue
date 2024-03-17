<template>
  <div id="app">
    <nav class="navigation">
      <router-link class="nav-link" to="/" exact>Home</router-link>
      <router-link class="nav-link" to="/tasks" exact>Tasks</router-link>
      <router-link class="nav-link" to="/units" exact>Units</router-link>
      <div class="nav-indicator"></div>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style>
/* Navigation styles */
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  font-size: 18px;
  padding: 20px;
  position: relative;
  z-index: 1;
  margin-bottom: 25px;
}

.nav-link {
  text-decoration: none;
  color: inherit;
  margin-right: 10px; /* reduced margin right */
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
}

.nav-link::before {
  content: "";
  display: block;
  height: 2px;
  width: 0%;
  background-color: #fff;
  position: absolute;
  bottom: -5px;
  left: 0;
  transition: width 0.3s ease-in-out;
}

.nav-link:hover::before {
  width: 100%;
}

.nav-link.router-link-exact-active::before {
  width: 100%;
}

.nav-indicator {
  height: 2px;
  width: 100%;
  background-color: #fff;
  position: absolute;
  bottom: -5px;
  left: 0;
  z-index: -1;
  transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
}

.nav-link.active ~ .nav-indicator {
  transform: translateX(calc(100% / 3 * var(--index)));
}

/* View transition styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  position: absolute;
  width: 100%;
}

/* Vue Router transition classes */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
</style>