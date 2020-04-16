<script>
  import errorStore from "../../app/Store/errors/errors.store";

  let errors = [];

  errorStore.subscribe(allErrors => {
    errors = allErrors;
  });
</script>

{#each errors as error}
  <div
    class={`alert
    alert-${error.type}
    alert-dismissible
    fade
    show`}
    role="alert">
    <strong>{error.msg}</strong>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
{/each}
