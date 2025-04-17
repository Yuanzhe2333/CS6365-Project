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
import fs from 'fs';
import path from 'path';

const saleDataPath = path.resolve('./src/data/publix-discounts.json');
const saleData = JSON.parse(fs.readFileSync(saleDataPath, 'utf-8'));
app.post('/api/chat', async (req, res) => {
  const { prompt } = req.body;

  const systemMessage = {
    role: 'system',
    content:
      `You are a smart kitchen assistant. Based on the following grocery sales data from Publix:\n\n` +
      `${JSON.stringify(saleData)}\n\n` +
      `Recommend a recipe that uses discounted ingredients. Also return the store name ("Publix") and explain why the recipe and store are a good match.`,
  };

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        systemMessage,
        { role: 'user', content: prompt },
      ],
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
