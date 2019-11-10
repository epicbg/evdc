<template>
  <div id="app">
    <div style="display: flex;">
      <div style="width: 30.2vh">
        <side-nav></side-nav>
      </div>
      <div>
        <ul class="breadcrumb with-chevron dark" style="margin: 0px" v-if="project">
            <li><a v-if="project" >{{project.name}}</a></li>
            <li><a v-if="connection" >{{connection.name}}</a></li>
            <li><a v-if="selectedDB" >{{selectedDB}}</a></li>
            <li><a v-if="table">{{table}}</a></li>
        </ul>
          <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
import SideNav from './components/SideNav'
import { mapState } from 'vuex'
export default {
  components: {
    SideNav
  },
  computed: {
    ...mapState('database', [
        'project', 'selectedDB', 'connection', 'table'
    ])
  }
}
</script>