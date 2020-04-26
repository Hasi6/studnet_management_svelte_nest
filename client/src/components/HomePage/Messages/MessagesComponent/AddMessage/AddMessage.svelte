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
  .dropper {
    margin-top: 20px;
    height: 30vh;
    border: 2px dashed black;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  input {
    width: 100%;
    height: 30vh;
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  .dropper:hover {
    background: #eee;
  }
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

<Modal isOpen={open} {toggle} style="margin-top:500px">
  <div style="text-align:center">
    <div class="dropper">
      <input
        type="file"
        on:change={e => console.log(e.target.files)}
        multiple={false}
        accept="image/*" />
      <span>Drag Files Here</span>

    </div>
    <Button success loading iconRight={mdiSend} style="margin:10px">
      Send
    </Button>
  </div>
</Modal>
