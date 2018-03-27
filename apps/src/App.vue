<template>
  <div id="app">
    <router-view name="header"></router-view>
    <div style="padding: .5rem 12rem">
        <router-view name="content"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
