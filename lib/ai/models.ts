export const DEFAULT_CHAT_MODEL: string = 'grok-3-latest';

interface ChatModel {
  id: string;
  name: string;
  description: string;
  provider?: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'grok-3-latest',
    name: 'Grok 3 (Latest)',
    description: 'Latest XAI Grok model for advanced chat',
    provider: 'xai',
  },
  {
    id: 'chat-model',
    name: 'Chat model',
    description: 'Primary model for all-purpose chat',
  },
  {
    id: 'chat-model-reasoning',
    name: 'Reasoning model',
    description: 'Uses advanced reasoning',
  },
];
