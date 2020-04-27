<script>
  import { onMount, onDestroy } from "svelte";
  import errorStore from "../../app/Store/errors/errors.store";

  let errors = [];
  let errorsUnSubscribe;

  onMount(() => {
    errorsUnSubscribe = errorStore.subscribe(allErrors => {
      errors = allErrors;
    });
  });

  onDestroy(() => {
    errorsUnSubscribe();
  });
</script>

<style>
  .alert_div {
    width: 300px;
    position: absolute;
    right: -10vw;
    top: 1vh;
    z-index: 10000;
  }
</style>

<div class="alert_div">
  <br />
  {#each errors as error}
    <div
      class={`alert
    alert-${error.type}
    alert-dismissible
    fade
    show`}
      style="justify-content: space-between; display:flex"
      role="alert">
      <strong>{error.msg}</strong>
      <button
        style=" background:none"
        type="button"
        on:click={() => errorStore.removeErrors(error.id)}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  {/each}
</div>
