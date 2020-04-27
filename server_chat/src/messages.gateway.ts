import { SubscribeMessage, WebSocketGateway, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { Logger } from '@nestjs/common';
import { ChatService } from './chat/chat.service';
import { IChat } from './chat/chat.model';

@WebSocketGateway({ namespace: '/chat' })
export class MessagesGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  constructor(
    private readonly chatService: ChatService
  ) { }

  logger = new Logger()

  handleConnection(client: Socket, ...args: any[]) {
    console.log('User Connected')
  }

  handleDisconnect(client: Socket) {
    console.log('User Disconnected')
  }

  afterInit(server: Server) {
    this.logger.verbose("Socket Connected")
  }

  // To All Clients
  @WebSocketServer() wss: Server;


  @SubscribeMessage('join')
  async handleMessage(client: any, payload: any) {
    const chatIds = await this.chatService.getChatByUserId(payload.userId)
    chatIds.map((chat: IChat) => client.join(chat._id))
  }


  sendMessage(msg: any) {
    this.wss.to(msg.chatId).emit("message", { msg })
  }

}
