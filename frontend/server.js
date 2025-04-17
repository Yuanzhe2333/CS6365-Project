import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/api/chat', async (req, res) => {
  const { prompt } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }, { role: 'developer',content: "" }],
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error('OpenAI error:', err);
    res.status(500).json({ reply: 'Something went wrong on the server.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
