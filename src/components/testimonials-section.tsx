import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Артём К.",
    role: "Ранг Легенда 3, 1200+ кубков",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Брал аккаунт с 50+ бравлерами — всё пришло мгновенно после оплаты. Данные совпали с описанием, поддержка помогла быстро сменить email. Топ сервис!",
  },
  {
    name: "Никита Р.",
    role: "Покупатель, 3 аккаунта",
    avatar: "/placeholder-user.jpg",
    content:
      "Уже третий раз беру аккаунты здесь. Цены адекватные, выбор огромный, никаких проблем ни разу не было. Рекомендую всем своим друзьям.",
  },
  {
    name: "Дарья М.",
    role: "Мама игрока, подарок сыну",
    avatar: "/professional-woman-scientist.png",
    content:
      "Купила сыну аккаунт в подарок. Менеджер помог выбрать под его уровень и бюджет. Сын в восторге — получил то, что хотел. Спасибо!",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят покупатели</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Более 2000 довольных игроков уже купили аккаунты в нашем магазине
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
