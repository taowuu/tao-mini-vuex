<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>counter: {{$store.state.counter}}</p>
    <button @click="$store.dispatch('add')"> async add </button>
    <div></div>
    <button @click="$store.commit('add')"> add </button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
