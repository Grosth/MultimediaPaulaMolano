import { GraduationCap, Megaphone, Info, ShoppingCart, CheckCircle } from 'lucide-react';

export default function Tipologias() {
  const tipologias = [
    {
      icon: GraduationCap,
      title: 'Multimedia Educativa',
      color: 'from-blue-500 to-blue-600',
      description: 'Contenido diseñado para facilitar el aprendizaje y la formación.',
      caracteristicas: [
        'Facilidad de uso',
        'Interactividad',
        'Calidad audiovisual',
        'Autoaprendizaje',
        'Adecuación al usuario',
      ],
    },
    {
      icon: Megaphone,
      title: 'Multimedia Publicitaria',
      color: 'from-purple-500 to-purple-600',
      description: 'Contenido creativo enfocado en captar la atención y persuadir.',
      caracteristicas: [
        'Visualmente atractiva',
        'Alto impacto',
        'Orientada al público objetivo',
        'Mensaje claro y conciso',
        'Call-to-action efectivo',
      ],
    },
    {
      icon: Info,
      title: 'Multimedia Informativa',
      color: 'from-cyan-500 to-cyan-600',
      description: 'Contenido que transmite datos, noticias y conocimiento.',
      caracteristicas: [
        'Uso de texto e imágenes',
        'Incorporación de video',
        'Actualización constante',
        'Estructura clara',
        'Navegación intuitiva',
      ],
    },
    {
      icon: ShoppingCart,
      title: 'Multimedia Comercial',
      color: 'from-green-500 to-green-600',
      description: 'Contenido orientado a promocionar y vender productos o servicios.',
      caracteristicas: [
        'Creatividad visual',
        'Información del producto',
        'Orientada a la conversión',
        'Confianza y credibilidad',
        'Experiencia de usuario optimizada',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Tipologías Multimedia</h1>
          <p className="text-xl text-purple-100">
            Clasificación según propósito y aplicación
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {tipologias.map((tipo, index) => {
            const Icon = tipo.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`bg-gradient-to-r ${tipo.color} p-8`}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">{tipo.title}</h2>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-lg text-slate-700 mb-6 leading-relaxed">{tipo.description}</p>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Características:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {tipo.caracteristicas.map((caracteristica, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{caracteristica}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Conclusión</h2>
            <p className="text-xl text-blue-50 leading-relaxed">
              La multimedia es <span className="font-bold">versátil</span>, <span className="font-bold">transversal</span> y <span className="font-bold">creativa</span>, ideal para informar, educar, persuadir y entretener. Cada tipología tiene características específicas que la hacen efectiva para su propósito, pero todas comparten la capacidad de crear experiencias digitales memorables.
            </p>
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
