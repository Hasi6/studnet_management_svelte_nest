export interface IChat {
    _id: string;
    userIds: string[];
    fullChatId: string;
    groupName?: string;
}