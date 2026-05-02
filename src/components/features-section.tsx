import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Аккаунты Легенда",
    description: "Прокачанные аккаунты с максимальным рангом и редкими скинами. Выгляди круче всех на арене.",
    icon: "target",
    badge: "ТОП",
  },
  {
    title: "Все бравлеры открыты",
    description: "Аккаунты с полным ростером бравлеров, включая эксклюзивных и сезонных персонажей.",
    icon: "globe",
    badge: "Full",
  },
  {
    title: "Безопасная сделка",
    description: "Передача аккаунта через официальную смену email. Гарантия возврата средств если что-то пойдёт не так.",
    icon: "lock",
    badge: "Гарантия",
  },
  {
    title: "Мгновенная выдача",
    description: "Данные от аккаунта приходят сразу после оплаты. Никаких ожиданий — заходи и играй.",
    icon: "zap",
    badge: "Быстро",
  },
  {
    title: "Любой бюджет",
    description: "Аккаунты на любой кошелёк: от стартовых с хорошей базой до элитных с редкими коллекциями.",
    icon: "brain",
    badge: "Цены",
  },
  {
    title: "Поддержка 24/7",
    description: "Помогаем до и после покупки. Ответим на вопросы, поможем с выбором и решим любую проблему.",
    icon: "link",
    badge: "Поддержка",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему выбирают нас</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Тысячи игроков уже купили аккаунты у нас — и не пожалели
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}