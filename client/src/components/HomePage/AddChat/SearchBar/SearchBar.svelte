<script>
  import { Input, Field, Button } from "svelte-chota";
</script>

<div>
  <Field gapless>

    <Input
      placeholder="Search Users"
      on:input={e => editChat(e.target.value)} />
    <Button>
      <i class="fas fa-search" />
    </Button>
  </Field>
</div>
