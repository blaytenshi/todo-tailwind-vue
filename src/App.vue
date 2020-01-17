<template>
  <div class="container mx-auto">
    <TodoHeader />
    <router-view />
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader';

export default {
  name: 'app',
  components: {
    TodoHeader
  }
}
</script>

<style>

</style>
