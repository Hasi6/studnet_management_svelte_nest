<script>
  import { Card, Input, Field, Button } from "svelte-chota";
  import { mdiSend } from "@mdi/js";
  export let user;
</script>

<style>

</style>

<div>
  <h3>Send A Message to {user.username}</h3>
  <div>
    <Card>
      <Field gapless>
        <Input placeholder="Your Message" />
        <Button icon={mdiSend} primary />
      </Field>
    </Card>
  </div>
</div>
