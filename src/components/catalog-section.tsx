import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const TELEGRAM_URL = "https://t.me/your_shop"

const accounts = [
  {
    id: 1,
    title: "Стартовый",
    rank: "Золото III",
    cups: 8500,
    brawlers: 20,
    price: 599,
    badge: "Хит",
    badgeColor: "bg-yellow-500",
    features: ["20 бравлеров", "Несколько редких скинов", "Аккаунт 1+ год"],
    tier: "budget",
  },
  {
    id: 2,
    title: "Боец",
    rank: "Платина II",
    cups: 25000,
    brawlers: 42,
    price: 1990,
    badge: "Популярный",
    badgeColor: "bg-blue-500",
    features: ["42 бравлера", "5+ эпических скинов", "Сезонные персонажи"],
    tier: "mid",
  },
  {
    id: 3,
    title: "Мастер",
    rank: "Бриллиант I",
    cups: 50000,
    brawlers: 60,
    price: 4990,
    badge: "Топ",
    badgeColor: "bg-purple-500",
    features: ["60 бравлеров", "Легендарные скины", "Хроматические бравлеры"],
    tier: "top",
  },
  {
    id: 4,
    title: "Легенда",
    rank: "Мифик III",
    cups: 80000,
    brawlers: 75,
    price: 9990,
    badge: "Редкий",
    badgeColor: "bg-red-500",
    features: ["75 бравлеров", "Все легендарки", "Эксклюзивные скины 2023"],
    tier: "top",
  },
  {
    id: 5,
    title: "Профи",
    rank: "Платина I",
    cups: 38000,
    brawlers: 55,
    price: 3490,
    badge: null,
    badgeColor: "",
    features: ["55 бравлеров", "Редкие скины", "Много трофеев"],
    tier: "mid",
  },
  {
    id: 6,
    title: "Элита",
    rank: "Легенда",
    cups: 100000,
    brawlers: 83,
    price: 19990,
    badge: "Максимум",
    badgeColor: "bg-orange-500",
    features: ["Все 83 бравлера", "Все скины в игре", "Максимальный ранг"],
    tier: "elite",
  },
]

const filters = [
  { label: "Все", value: "all" },
  { label: "До 2000 ₽", value: "budget" },
  { label: "Средние", value: "mid" },
  { label: "Топ", value: "top" },
  { label: "Элита", value: "elite" },
]

export function CatalogSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filtered = accounts.filter(
    (a) => activeFilter === "all" || a.tier === activeFilter
  )

  const handleBuy = (account: typeof accounts[0]) => {
    const text = encodeURIComponent(
      `Хочу купить аккаунт «${account.title}» за ${account.price.toLocaleString("ru")} ₽ (${account.rank}, ${account.brawlers} бравлеров)`
    )
    window.open(`${TELEGRAM_URL}?text=${text}`, "_blank")
  }

  return (
    <section id="catalog" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron">
            Каталог аккаунтов
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Выбирай аккаунт по рангу и бюджету — все в наличии, выдача мгновенная
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2 rounded-full font-geist text-sm font-semibold transition-all duration-200 ${
                activeFilter === f.value
                  ? "bg-red-500 text-white"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((account) => (
            <Card
              key={account.id}
              className="bg-white/5 border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] group"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white font-orbitron">{account.title}</h3>
                    <p className="text-red-400 text-sm font-semibold mt-1">{account.rank}</p>
                  </div>
                  {account.badge && (
                    <span className={`${account.badgeColor} text-white text-xs font-bold px-2 py-1 rounded-full`}>
                      {account.badge}
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Stats */}
                <div className="flex gap-4 text-sm">
                  <div className="flex items-center gap-1.5 text-gray-300">
                    <Icon name="Trophy" size={14} className="text-yellow-400" />
                    <span>{account.cups.toLocaleString("ru")}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-300">
                    <Icon name="Users" size={14} className="text-blue-400" />
                    <span>{account.brawlers} бравлеров</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-1.5">
                  {account.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <div>
                    <span className="text-2xl font-bold text-white font-orbitron">
                      {account.price.toLocaleString("ru")} ₽
                    </span>
                  </div>
                  <Button
                    onClick={() => handleBuy(account)}
                    className="bg-red-500 hover:bg-red-600 text-white font-geist border-0 gap-2"
                  >
                    <Icon name="ShoppingCart" size={15} />
                    Купить
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
