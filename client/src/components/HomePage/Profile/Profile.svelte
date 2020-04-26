<script>
  export let setProfile;
</script>

<style>
  .profile {
    text-align: center;
    height: 600px;
    background: aqua;
  }
</style>

<i
  class="fas fa-arrow-left"
  style="cursor:pointer"
  on:click={() => setProfile(false)} />
<div class="profile">
  <h1>Profile</h1>
  <img
    src="https://avatars1.githubusercontent.com/u/37216970?s=88&u=f5293b88d23b3694aa76b7149ce28480cbe2912e&v=4"
    alt="my_profile" />
</div>
