import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Аккаунты настоящие? Не забанят?",
      answer:
        "Все аккаунты реальные, выращены вручную или куплены у оригинальных владельцев. Мы не продаём аккаунты с историей нарушений. После покупки рекомендуем сразу сменить email и пароль — это стандартная процедура безопасности.",
    },
    {
      question: "Как быстро я получу данные после оплаты?",
      answer:
        "Мгновенно! Данные приходят автоматически сразу после подтверждения оплаты — на email или в мессенджер. В рабочее время менеджер также подтвердит получение и поможет со входом.",
    },
    {
      question: "Что если аккаунт не соответствует описанию?",
      answer:
        "Гарантируем полный возврат средств в течение 24 часов, если аккаунт не соответствует тому, что написано в карточке товара. За 2+ года работы таких случаев были единицы — и все решались в пользу покупателя.",
    },
    {
      question: "Можно ли изменить данные аккаунта?",
      answer:
        "Да, после получения данных вы можете сменить email и пароль — аккаунт станет полностью вашим. Наш менеджер проведёт вас через этот процесс, если понадобится.",
    },
    {
      question: "Какие способы оплаты принимаете?",
      answer:
        "Принимаем банковские карты (Visa/Mastercard/Мир), СБП, QIWI, YooMoney, криптовалюты (USDT, BTC). Выберите удобный способ при оформлении заказа.",
    },
    {
      question: "Есть ли скидки при покупке нескольких аккаунтов?",
      answer:
        "Да! При покупке 2+ аккаунтов скидка 10%, от 5 аккаунтов — 20%. Напишите нам в чат, и мы подберём выгодный пакет под ваши нужды.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё что нужно знать перед покупкой аккаунта Brawl Stars
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
