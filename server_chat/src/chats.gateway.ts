import { SubscribeMessage, WebSocketGateway, WebSocketServer, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { IChat } from './chat/chat.model';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({ namespace: '/newChat' })
export class ChatsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  logger = new Logger()

  handleConnection(client: Socket, ...args: any[]) {
    console.log('User Connected to chat')
  }

  handleDisconnect(client: Socket) {
    console.log('User Disconnected from chat')
  }

  afterInit(server: Server) {
    this.logger.verbose("Socket Connected to chat")
  }

  // To All Clients
  @WebSocketServer() wss: Server;

  // Join User Id
  @SubscribeMessage('joinToNewChat')
  joinUser(client: any, payload: any) {
    console.log(payload)
    client.join(payload.userId)
  }


  // Add New Chat
  addNewChat(chat: IChat) {
    chat.userIds.map(user => this.wss.to(user.toString()).emit("newChatAdded", { chat }))
  }


}
