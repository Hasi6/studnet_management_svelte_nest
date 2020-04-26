<script>
  import { onMount, onDestroy } from "svelte";
  import chatIdStore from "../../../../app/Store/chat/chatId.store";
  import MessagesHeader from "./MessagesHeader/MessagesHeader";

  let searchKey = "Hasi";
  let chatId;
  let unsubscribe;

  const setSearchKey = e => {
    searchKey = e;
  };

  onMount(() => {
    unsubscribe = chatIdStore.subscribe(chid => {
      chatId = chid;
    });
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<style>

</style>

<div>
  <MessagesHeader {searchKey} {setSearchKey} />
</div>
{chatId} {searchKey}
