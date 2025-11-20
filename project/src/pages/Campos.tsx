import {
  Smartphone,
  GraduationCap,
  TrendingUp,
  Gamepad2,
  Film,
  Users,
  Monitor,
  BookOpen,
  BarChart3,
  Joystick,
  Clapperboard,
  UserCheck
} from 'lucide-react';

export default function Campos() {
  const campos = [
    {
      title: 'Aplicaciones Multimedia',
      icon: Smartphone,
      description: 'Desarrollo de aplicaciones web y móviles con interfaces atractivas y funcionales.',
      items: [
        'Aplicaciones móviles nativas y multiplataforma',
        'Aplicaciones web responsivas y PWA',
        'Interfaces de usuario intuitivas',
        'Experiencias interactivas personalizadas',
      ],
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
      subIcon: Monitor,
    },
    {
      title: 'Multimedia Educativa',
      icon: GraduationCap,
      description: 'Creación de contenido educativo interactivo y plataformas de e-learning.',
      items: [
        'Plataformas de aprendizaje en línea',
        'Contenido didáctico multimedia',
        'Simuladores educativos',
        'Recursos interactivos para aulas digitales',
      ],
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800',
      subIcon: BookOpen,
    },
    {
      title: 'Marketing Multimedia',
      icon: TrendingUp,
      description: 'Estrategias digitales y contenido visual para campañas publicitarias efectivas.',
      items: [
        'Campañas de marketing digital',
        'Contenido para redes sociales',
        'Video marketing y branded content',
        'Experiencias de marca inmersivas',
      ],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      subIcon: BarChart3,
    },
    {
      title: 'Desarrollo de Videojuegos',
      icon: Gamepad2,
      description: 'Diseño y programación de experiencias de juego interactivas y envolventes.',
      items: [
        'Videojuegos para PC y consolas',
        'Juegos móviles y casuales',
        'Serious games y gamificación',
        'Mundos virtuales y metaversos',
      ],
      image: 'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=800',
      subIcon: Joystick,
    },
    {
      title: 'Animación y Efectos Visuales',
      icon: Film,
      description: 'Producción de contenido animado 2D/3D y efectos especiales para medios digitales.',
      items: [
        'Animación 2D y motion graphics',
        'Modelado y animación 3D',
        'Efectos visuales (VFX)',
        'Postproducción audiovisual',
      ],
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      subIcon: Clapperboard,
    },
    {
      title: 'Habilidades Clave',
      icon: Users,
      description: 'Competencias esenciales para el éxito profesional en ingeniería multimedia.',
      items: [
        'Pensamiento creativo e innovación',
        'Trabajo colaborativo multidisciplinario',
        'Adaptabilidad tecnológica',
        'Comunicación visual efectiva',
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      subIcon: UserCheck,
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#1E293B] mb-6">
            Campos de Acción del Ingeniero Multimedia
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Áreas profesionales donde los ingenieros multimedia aplican sus conocimientos para crear soluciones innovadoras.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {campos.slice(0, 5).map((campo) => {
            const MainIcon = campo.icon;
            const SubIcon = campo.subIcon;

            return (
              <div
                key={campo.title}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={campo.image}
                    alt={campo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex gap-3">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                      <MainIcon className="text-[#2563EB]" size={24} />
                    </div>
                    <div className="w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center">
                      <SubIcon className="text-[#7C3AED]" size={20} />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-[#1E293B] mb-3">
                    {campo.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {campo.description}
                  </p>
                  <div className="space-y-3">
                    {campo.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="text-[#2563EB] font-bold mt-0.5">•</span>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-12 text-white flex flex-col justify-center">
              <div className="flex gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Users className="text-white" size={32} />
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <UserCheck className="text-white" size={32} />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                {campos[5].title}
              </h2>
              <p className="text-lg text-gray-100 mb-8 leading-relaxed">
                {campos[5].description}
              </p>
              <div className="space-y-4">
                {campos[5].items.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-white font-bold text-xl">✓</span>
                    <span className="text-gray-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[400px]">
              <img
                src={campos[5].image}
                alt={campos[5].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <h2 className="text-3xl font-bold text-[#1E293B] mb-4">
              Un campo en constante evolución
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La ingeniería multimedia es una disciplina dinámica que se adapta constantemente a las nuevas tecnologías y necesidades del mercado, ofreciendo infinitas posibilidades de especialización y crecimiento profesional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
