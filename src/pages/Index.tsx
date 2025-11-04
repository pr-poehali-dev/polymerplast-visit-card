import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'contacts'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      title: 'Полимерные трубы',
      description: 'Высококачественные трубы для промышленных и строительных нужд',
      specs: ['Диаметр от 16 до 630 мм', 'Давление до 25 атм', 'Срок службы до 50 лет'],
      image: 'https://cdn.poehali.dev/projects/50cf6cb2-13c1-4e01-8ce6-26d660ea2525/files/b2642b8b-88e9-4c96-85b1-b349733e3613.jpg'
    },
    {
      title: 'Фитинги и комплектующие',
      description: 'Широкий ассортимент соединительных элементов',
      specs: ['Уголки, тройники, переходники', 'Все стандартные размеры', 'Быстрая поставка со склада'],
      image: 'https://cdn.poehali.dev/projects/50cf6cb2-13c1-4e01-8ce6-26d660ea2525/files/c8073a6c-7cd0-466e-835c-4e75ded408c0.jpg'
    },
    {
      title: 'Полимерные листы',
      description: 'Листовые материалы различной толщины',
      specs: ['Толщина 2-50 мм', 'Размеры под заказ', 'Различные цвета'],
      image: 'https://cdn.poehali.dev/projects/50cf6cb2-13c1-4e01-8ce6-26d660ea2525/files/646b674a-2164-42fe-a366-9e84286749aa.jpg'
    },
    {
      title: 'Емкости и резервуары',
      description: 'Пластиковые емкости для хранения жидкостей',
      specs: ['Объем от 100 до 10000 л', 'Устойчивость к химии', 'Гарантия 5 лет'],
      image: 'https://cdn.poehali.dev/projects/50cf6cb2-13c1-4e01-8ce6-26d660ea2525/files/826078f2-11f2-478f-a68b-e338c7b08b0f.jpg'
    },
    {
      title: 'Комплектующие для систем',
      description: 'Элементы для монтажа трубопроводов',
      specs: ['Крепления и хомуты', 'Уплотнители', 'Монтажные наборы'],
      image: 'https://cdn.poehali.dev/projects/50cf6cb2-13c1-4e01-8ce6-26d660ea2525/files/c0500e63-e0d7-4d7a-9c72-2fe223a9c70d.jpg'
    },
    {
      title: 'Изделия по чертежам',
      description: 'Производство нестандартных изделий',
      specs: ['Работа по чертежам заказчика', 'Малые серии', 'Быстрые сроки изготовления'],
      image: 'https://cdn.poehali.dev/projects/50cf6cb2-13c1-4e01-8ce6-26d660ea2525/files/1d92ff91-aa23-4c07-8cb4-b28b6a23a63f.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/c84184f2-0def-4be5-bcc8-c9c8b102ee53.png" 
              alt="ПолимерПласт29" 
              className="h-10"
            />
          </div>
          
          <div className="hidden md:flex gap-8">
            {[
              { id: 'home', label: 'Главная' },
              { id: 'about', label: 'О компании' },
              { id: 'products', label: 'Продукция' },
              { id: 'contacts', label: 'Контакты' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary font-medium' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Производство полимерной продукции
              </h2>
              <p className="text-lg text-muted-foreground">
                Современные решения для промышленности и строительства. Качество, проверенное временем.
              </p>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contacts')}
                className="text-base"
              >
                Связаться с нами
              </Button>
            </div>
            <div className="animate-slide-up">
              <img 
                src="https://cdn.poehali.dev/projects/50cf6cb2-13c1-4e01-8ce6-26d660ea2525/files/1d92ff91-aa23-4c07-8cb4-b28b6a23a63f.jpg"
                alt="Производство"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">О компании</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: 'Factory', title: 'Современное производство', text: 'Оснащенные новейшим оборудованием цеха' },
              { icon: 'Award', title: 'Высокое качество', text: 'Строгий контроль на всех этапах производства' },
              { icon: 'Users', title: 'Опытная команда', text: 'Профессионалы с многолетним опытом работы' }
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name={item.icon} className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-center text-muted-foreground max-w-3xl mx-auto">
              ПолимерПласт29 — ведущее производственное предприятие в сфере изготовления полимерной продукции. 
              Мы специализируемся на выпуске широкого спектра изделий из высококачественных полимерных материалов 
              для промышленных и строительных нужд.
            </p>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Наша продукция</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-xl font-semibold">{product.title}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Контакты</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Архангельск, ул. Производственная, 29</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="Phone" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (900) 000-00-00</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="Mail" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@polimerplast29.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="Clock" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Напишите нам</h3>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" />
                  </div>
                  <div>
                    <Textarea placeholder="Сообщение" rows={4} />
                  </div>
                  <Button type="submit" className="w-full">
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>© 2024 ПолимерПласт29. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}