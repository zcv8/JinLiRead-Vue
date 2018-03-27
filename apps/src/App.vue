<template>
  <div id="app">
    <router-view name="header"></router-view>
    <div style="padding: .5rem 20rem">
        <router-view name="content"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
