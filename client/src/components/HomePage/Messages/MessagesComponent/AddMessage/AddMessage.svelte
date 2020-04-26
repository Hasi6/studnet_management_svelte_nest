<script>
  import { Input, Field, Button } from "svelte-chota";
  import EmojiSelector from "svelte-emoji-selector";
  import { mdiSend, mdiPlus } from "@mdi/js";

  let message;

  const addEmoji = e => {
    message = `${message} ${e.detail}`;
  };

  const sendMessage = () => {
    alert(message);
    message = "";
  };
</script>

<style>

</style>

<div>
  <Field gapless style="margin-top:10px">
    <EmojiSelector on:emoji={e => addEmoji(e)} />
    <Button primary icon={mdiPlus} />
    <Input placeholder="Send Messages" bind:value={message} />
    <Button success icon={mdiSend} on:click={() => sendMessage()} />
  </Field>
</div>
