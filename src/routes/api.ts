import express from 'express';
import { getChatResponse } from '../core/chat';

const router = express.Router();

router.post('/chat', async (req, res) => {
  const { message, personality } = req.body;
  try {
    const response = await getChatResponse(message, personality);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get response' });
  }
});

export { router as chatRouter };