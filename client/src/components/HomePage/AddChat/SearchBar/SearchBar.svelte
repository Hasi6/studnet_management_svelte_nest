<script>
  import { Input, Field, Button } from "svelte-chota";

  export let setSearchKey;
</script>

<div>
  <Field gapless>

    <Input
      placeholder="Search Users"
      on:input={e => setSearchKey(e.target.value)} />
    <Button>
      <i class="fas fa-search" />
    </Button>
  </Field>
</div>
