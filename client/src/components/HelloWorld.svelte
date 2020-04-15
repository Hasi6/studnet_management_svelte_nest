<script>
export let message = "World";
</script>

<div class="hello">
  <h1>Hello {message}!</h1>
  <p>
    For a guide and recipes on how to configure / customize this project,<br>
    check out the
    <a href="https://github.com/wmzy/svelte-cli" target="_blank" rel="noopener">svelte-cli documentation</a>.
  </p>
  <h3>Installed CLI Plugins</h3>
  <ul>
    <li><a href="https://github.com/wmzy/svelte-cli/tree/dev/packages/%40svel/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
    <li><a href="https://github.com/wmzy/svelte-cli/tree/dev/packages/%40svel/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
  </ul>
  <h3>Essential Links</h3>
  <ul>
    <li><a href="https://svelte.dev" target="_blank" rel="noopener">Core Docs</a></li>
  </ul>
</div>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
