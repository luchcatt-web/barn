import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '354738973';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, dates, format, comment } = body;

    if (!TELEGRAM_BOT_TOKEN) {
      return NextResponse.json(
        { error: 'Telegram bot token not configured' },
        { status: 500 }
      );
    }

    // Формируем сообщение
    const message = `🎯 *Новая заявка на бронирование*

👤 *Имя:* ${name}
📞 *Телефон:* ${phone}
📅 *Даты:* ${dates || 'не указано'}
🎉 *Формат:* ${format || 'не указано'}
💬 *Комментарий:* ${comment || 'нет комментария'}

_Время заявки: ${new Date().toLocaleString('ru-RU')}_`;

    // Отправляем в Telegram
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Telegram API error:', data);
      return NextResponse.json(
        { error: 'Failed to send message to Telegram' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Booking API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

