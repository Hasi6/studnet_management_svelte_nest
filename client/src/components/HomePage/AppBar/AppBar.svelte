<script>
  import { Nav } from "svelte-chota";
</script>

<style>
  img {
    border-radius: 50%;
  }
</style>

<div>
  <Nav>
    <img
      slot="left"
      src="https://avatars0.githubusercontent.com/u/37216970?s=460&u=f5293b88d23b3694aa76b7149ce28480cbe2912e&v=4"
      alt="userimage" />

    <a slot="right" href="/">
      <i class="fas fa-plus" />
    </a>
    <a slot="right" href="/">
      <i class="fas fa-ellipsis-h" />
    </a>
  </Nav>
</div>
