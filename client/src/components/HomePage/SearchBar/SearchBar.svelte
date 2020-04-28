<script>
  import { Input, Field, Button } from "svelte-chota";
  import { onMount, onDestroy } from "svelte";
  import chatStore from "../../../app/Store/chat/chat.store.js";

  let unsubscribe;
  let chats = [];
  let oldChats = null;
  let searchKey = "";

  const getChats = () => {
    unsubscribe = chatStore.subscribe(chat => {
      chats = chat;
      if (oldChats === null) {
        oldChats = ["Old Chats"];
      }
    });
  };

  $: (() => {
    console.log(oldChats);
    console.log(chats);
  })();

  onMount(() => {
    getChats();
  });

  onDestroy(() => {
    unsubscribe();
  });

  const editChat = e => {
    let fliterdChats = [e];
    searchKey = e;
    if (e === "") {
      fliterdChats = oldChats;
    }
    // chatStore.updateChat(fliterdChats);
  };
</script>

<style>

</style>

<div>
  <Field gapless>

    <Input placeholder="Search Chat" on:input={e => editChat(e.target.value)} />
    <Button>
      <i class="fas fa-search" />
    </Button>
  </Field>
</div>
