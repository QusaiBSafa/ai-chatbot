# Infrastructure Overview
This application consists of a single backend service that interacts with the OpenAI API and a frontend that allows users to chat with the AI.

## Data Models
- **ChatMessage**: Represents a single message in the conversation.
  - `id`: string
  - `content`: string
  - `timestamp`: Date
  - `sender`: 'user' | 'ai'

## API Design
- **POST /api/chat**: Handles user messages and returns AI responses.

## Key Decisions
- Using Express for the backend server.
- Using TypeScript for type safety and better development experience.