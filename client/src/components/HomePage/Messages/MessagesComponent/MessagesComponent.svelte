<script>
  import { onMount, onDestroy } from "svelte";
  import { setClient, getClient, query, mutate } from "svelte-apollo";
  import chatIdStore from "../../../../app/Store/chat/chatId.store";
  import MessagesHeader from "./MessagesHeader/MessagesHeader";
  import MessageCard from "./MessageCard/MessageCard.svelte";
  import AddMessage from "./AddMessage/AddMessage.svelte";
  import { client } from "../../../../app/helpers/apolloClient";
  import { getMessages } from "../../../../app/graphql/mutations/getMessages.mutation.js";
  import authStore from "../../../../app/Store/auth/auth.store.js";

  import socketStore from "../../../../app/Store/socket/socket.store.js";

  setClient(client);
  const getCliet = getClient();

  export let newMessage;
  let searchKey = "Hasi";
  let chatId;
  let unsubscribe;
  let socketUnsubscribe;
  let authUnsubscribe;
  let chatSocket;
  let user;

  let messages = [];

  const setUser = () => {
    authUnsubscribe = authStore.subscribe(res => {
      user = res.user;
    });

    socketUnsubscribe = socketStore.subscribe(res => {
      chatSocket = res.chatSocket;
    });

    unsubscribe = chatIdStore.subscribe(chid => {
      chatId = chid;
    });
  };

  $: if (newMessage && newMessage.chatId === chatId) {
    messages = [...messages, newMessage];
  }

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

  onMount(() => {
    setUser();
  });

  onDestroy(() => {
    unsubscribe();
    socketUnsubscribe();
    authUnsubscribe();
  });
</script>

<style>

</style>

<div>
  <MessagesHeader {searchKey} {setSearchKey} {chatId} />
  <MessageCard {chatId} {messages} />
  <AddMessage {chatId} />
</div>
{chatId} {searchKey}
