import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Выбери аккаунт",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Листай каталог и выбирай аккаунт по рангу, количеству бравлеров и бюджету. У нас есть варианты
            для новичков и для хардкорных игроков — от 500 до 50 000 рублей.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Фильтр по рангу, бравлерам и цене
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Скриншоты и детальное описание каждого аккаунта
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Консультация по выбору бесплатно
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Оплати удобным способом",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Принимаем карты, СБП, криптовалюту и другие способы оплаты. Всё защищено — деньги
            не уходят продавцу до подтверждения передачи аккаунта.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Карты, СБП, крипта, кошельки
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Безопасная сделка — деньги хранятся на эскроу
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Гарантия возврата в течение 24 часов
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Получи данные и играй",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Сразу после оплаты получаешь логин и пароль. Меняешь данные на свои — аккаунт
            полностью твой. Заходи и начинай ломать рейтинги!
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Мгновенная выдача данных после оплаты
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Помощь со сменой email и пароля
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Поддержка после покупки — всегда на связи
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Как купить аккаунт</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Всего 3 шага — и ты уже в игре с крутым аккаунтом. Процесс занимает меньше 5 минут.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
