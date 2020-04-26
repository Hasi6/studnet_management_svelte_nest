<script>
  import { Input, Field, Button, Card } from "svelte-chota";
  import { Modal, ModalBody, ModalFooter, ModalHeader } from "sveltestrap";
  import EmojiSelector from "svelte-emoji-selector";
  import { mdiSend, mdiPlus } from "@mdi/js";
  import { Dialog, Textfield } from "svelte-mui";
  let open = false;
  const toggle = () => (open = !open);

  export let visible = false;

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

<div
  on:click={() => {
    visible = false;
  }}>
  <Field gapless style="margin-top:10px">
    <EmojiSelector on:emoji={e => addEmoji(e)} />
    <Button primary icon={mdiPlus} on:click={toggle} />
    <Input placeholder="Send Messages" bind:value={message} />
    <Button success icon={mdiSend} on:click={() => sendMessage()} />
  </Field>

</div>

<Modal isOpen={open} {toggle}>
  <ModalHeader {toggle}>Modal title</ModalHeader>
  <ModalBody>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </ModalBody>
  <ModalFooter>
    <Button color="primary" on:click={toggle}>Do Something</Button>
    <Button color="secondary" on:click={toggle}>Cancel</Button>
  </ModalFooter>
</Modal>
