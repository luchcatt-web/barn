import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '354738973';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, checkIn, checkOut, format, furako, comment } = body;

    if (!TELEGRAM_BOT_TOKEN) {
      return NextResponse.json(
        { error: 'Telegram bot token not configured' },
        { status: 500 }
      );
    }

    // Форматируем даты
    const formatDate = (dateString: string) => {
      if (!dateString) return 'не указано';
      const date = new Date(dateString);
      return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    const checkInFormatted = formatDate(checkIn);
    const checkOutFormatted = formatDate(checkOut);
    
    // Рассчитываем количество суток
    let nights = 0;
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      if (checkOutDate > checkInDate) {
        const diffTime = checkOutDate.getTime() - checkInDate.getTime();
        nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      }
    }

    // Рассчитываем стоимость услуг
    const getFurakoInfo = () => {
      if (furako === 'with_filling') return { name: 'Купель фурако с цитрусовым наполнением', price: 4500 };
      if (furako === 'without_filling') return { name: 'Купель фурако без наполнения', price: 3000 };
      return { name: 'Без купели', price: 0 };
    };

    const furakoInfo = getFurakoInfo();
    const accommodationPrice = nights * 10000;
    const totalPrice = accommodationPrice + furakoInfo.price;

    // Формируем сообщение
    const message = `🎯 *Новая заявка на бронирование*

👤 *Имя:* ${name}
📞 *Телефон:* ${phone}
📅 *Заезд:* ${checkInFormatted}
📅 *Выезд:* ${checkOutFormatted}
🌙 *Количество суток:* ${nights > 0 ? nights : 'не указано'}
🎉 *Формат:* ${format || 'не указано'}
🛁 *Купель фурако:* ${furakoInfo.name}${furakoInfo.price > 0 ? ` (${furakoInfo.price} ₽)` : ''}

💰 *Расчет стоимости:*
${nights > 0 ? `Проживание: ${nights} ${nights === 1 ? 'ночь' : nights < 5 ? 'ночи' : 'ночей'} × 10 000 ₽ = ${accommodationPrice} ₽` : ''}
${furakoInfo.price > 0 ? `Купель фурако: ${furakoInfo.price} ₽` : ''}
${totalPrice > 0 ? `*Итого: ${totalPrice} ₽*` : ''}

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

