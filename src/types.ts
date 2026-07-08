export interface ChatMessage {
  id: string;
  content: string;
  timestamp: Date;
  sender: 'user' | 'ai';
}

export type Personality = 'friendly' | 'professional' | 'funny';