import { BookOpen, Layout, Briefcase, ArrowRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const cards = [
    {
      id: 'fundamentos',
      icon: BookOpen,
      title: 'Fundamentos',
      description: 'Conoce las bases técnicas y creativas que definen a un ingeniero multimedia.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 'tipologias',
      icon: Layout,
      title: 'Tipologías Multimedia',
      description: 'Explora los tipos de multimedia: educativa, publicitaria, informativa y comercial.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 'campos',
      icon: Briefcase,
      title: 'Campos de Acción',
      description: 'Descubre en qué áreas puede desempeñarse un ingeniero multimedia.',
      color: 'from-cyan-500 to-cyan-600',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 py-24 px-6 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Ingeniería Multimedia: creatividad, tecnología e innovación
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Una disciplina que integra el diseño, la programación y la tecnología para crear experiencias digitales interactivas.
          </p>
          <button
            onClick={() => onNavigate('fundamentos')}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Explorar fundamentos
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-2xl">
            <div className="bg-white rounded-2xl p-12">
              <p className="text-xl text-slate-700 leading-relaxed text-center">
                La multimedia combina <span className="font-semibold text-blue-600">texto</span>, <span className="font-semibold text-purple-600">imagen</span>, <span className="font-semibold text-cyan-600">audio</span>, <span className="font-semibold text-blue-600">video</span> y <span className="font-semibold text-purple-600">animación</span> para comunicar y crear experiencias digitales. La ingeniería multimedia permite que estas herramientas cobren vida mediante el diseño y la programación.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${card.color} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{card.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{card.description}</p>
                  <button
                    onClick={() => onNavigate(card.id)}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-200"
                  >
                    Ver más
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-300">
            © 2025 ECBTI UNAD. Paula Ximena Molano Vega 202456784_31, introducción a la ingeniería multimedia.
          </p>
        </div>
      </footer>
    </div>
  );
}
