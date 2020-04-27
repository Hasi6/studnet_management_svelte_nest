<script>
  import { onMount, onDestroy } from "svelte";
  import { setClient, getClient, query, mutate } from "svelte-apollo";
  import chatIdStore from "../../../../app/Store/chat/chatId.store";
  import MessagesHeader from "./MessagesHeader/MessagesHeader";
  import MessageCard from "./MessageCard/MessageCard.svelte";
  import AddMessage from "./AddMessage/AddMessage.svelte";
  import { client } from "../../../../app/helpers/apolloClient";
  import { getMessages } from "../../../../app/graphql/mutations/getMessages.mutation.js";

  import socketStore from "../../../../app/Store/socket/socket.store.js";

  setClient(client);
  const getCliet = getClient();

  let searchKey = "Hasi";
  let chatId;
  let unsubscribe;
  let socketUnsubscribe;
  let chatSocket;

  let messages = [];

  $: (async () => {
    if (chatId) {
      try {
        const res = await mutate(client, {
          mutation: getMessages,
          variables: { chatId }
        });
        if (res && res.data && res.data.messages) {
          messages = res.data.messages;
        }
      } catch (err) {
        console.log(err.message);
      }
    }
  })();

  const setMessages = message => {
    messages = [...messages, message];
  };

  const setSearchKey = e => {
    searchKey = e;
  };

  const setSocket = () => {
    socketUnsubscribe = socketStore.subscribe(res => {
      chatSocket = res.chatSocket;
      console.log(chatSocket);
    });
  };

  onMount(() => {
    unsubscribe = chatIdStore.subscribe(chid => {
      chatId = chid;
    });
    setSocket();
  });

  onDestroy(() => {
    unsubscribe();
    socketUnsubscribe();
  });
</script>

<style>

</style>

<div>
  <MessagesHeader {searchKey} {setSearchKey} />
  <MessageCard {chatId} {messages} />
  <AddMessage {chatId} {setMessages} />
</div>
{chatId} {searchKey}
