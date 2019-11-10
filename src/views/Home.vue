<template>
    <div class="mt-10 text-center">
        <img height="200px" src="../assets/logo.png">
        <h2>EDB CLIENT</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facere perspiciatis earum a esse. Vitae facilis quos a corporis, perferendis et reprehenderit neque provident nisi odit eum aspernatur, ex quia.
        </p>
        <div class="mt-4" style="display: flex; justify-content: space-evenly">
          <button class="button primary"><i class="fa fa-plus"></i> Add project</button>
          <button class="button primary">Github</button>
          <button class="button primary">Epicweb</button>
          <button class="button primary">Contribute</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'home',
  mounted(){
    let projects = window.localStorage.getItem('projects')
    console.log(projects)
  }
}
</script>
