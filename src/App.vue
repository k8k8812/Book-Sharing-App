<template>
  <div id="app">
    <div class="navbar navbar-expand-lg navbar-light bg-light">
      <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler">
          <span class="navbar-toggler-icon"></span>
      </button>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <div class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li ><router-link to="/" id="links"> Home  </router-link></li>
              <li ><router-link to="/about" id="links"> About </router-link></li>
              <li ><router-link to="/addbook" aria-current="page" class="router-link-exact-active router-link-active" id="links"> Add New Book  </router-link></li>
              <li> </li>
          </ul>
        </div>
    </div>

    <router-view/>
  </div>
</template>

<style>

.navbar {
  width: 100%;
  height: 10vh;
  min-width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  position: sticky;
  padding-top: 20px;
  top: 0;
  z-index: 3;
  background-color: #eee;
  opacity: 0.8;

}

.navbar ul {
  display: flex;
  padding: 10px 2px 10px 90px;
  float: right;
 
}

.navbar ul li {
  list-style: none;
  padding: 0 5px 1px;
}

.navbar ul li #links {
  font-family: Georgia, "Times New Roman", Times, serif;
  display: inline-block;
  position: relative;
  color: #302929e3;
  padding: 0 10px;
  text-decoration: none;
  font-weight: bold;
  font-size: large;
  line-height: 20px;
  
}

.navbar ul li #links:hover {
  background: #9ea4ba;
  border-radius: 30px;
}
</style>
