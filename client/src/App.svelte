<script>
import HelloWorld from "./components/HelloWorld.svelte";
import logo from "./assets/logo.png";
</script>

<div id="app">
  <img alt="Svelte logo" src={logo}>
  <HelloWorld message="Svelte"/>
</div>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
