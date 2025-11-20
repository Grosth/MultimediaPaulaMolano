import { Code, Palette, Globe, User, Box, Film, Folder, Sparkles } from 'lucide-react';

export default function Fundamentos() {
  const fundamentals = [
    { icon: Code, title: 'Programación', description: 'Java, JavaScript, Python, C++' },
    { icon: Palette, title: 'Diseño Gráfico', description: 'Adobe Suite, teoría del color' },
    { icon: Globe, title: 'Desarrollo Web', description: 'HTML, CSS, JavaScript' },
    { icon: User, title: 'UI/UX', description: 'Experiencia e interfaz de usuario' },
    { icon: Box, title: 'Animación y 3D', description: 'Blender, Maya, Cinema 4D' },
    { icon: Film, title: 'Edición A/V', description: 'Audio y video profesional' },
    { icon: Folder, title: 'Gestión de Proyectos', description: 'Metodologías ágiles' },
    { icon: Sparkles, title: 'Tendencias', description: 'VR, AR, IA generativa' },
  ];

  const authors = [
    {
      name: 'Bartolomé',
      definition: 'Sistemas interactivos que integran múltiples códigos para crear una experiencia integrada.',
    },
    {
      name: 'SENA',
      definition: 'Integración de medios con diferentes tipologías para comunicar mensajes efectivos.',
    },
    {
      name: 'Melesh',
      definition: 'Combinar medios, interactuar con el usuario, navegar y comunicar información de forma dinámica.',
    },
  ];

  const interactivityTypes = [
    { type: 'Lineal', description: 'Secuencia ordenada sin opciones de navegación' },
    { type: 'Reticular', description: 'Navegación libre entre nodos conectados' },
    { type: 'Jerárquica', description: 'Estructura de árbol con niveles de información' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Fundamentos del Ingeniero Multimedia</h1>
          <p className="text-xl text-blue-100">
            Bases técnicas y creativas que definen la profesión
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">¿Qué es la Multimedia?</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            La multimedia es la integración de múltiples medios de comunicación para transmitir información de manera efectiva y atractiva.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-sm mb-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Medios que integra:</h3>
            <div className="grid md:grid-cols-5 gap-4">
              {['Texto', 'Imagen', 'Audio', 'Video', 'Animación'].map((medio) => (
                <div key={medio} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 text-center">
                  <p className="font-semibold text-slate-800">{medio}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Tipos de Interactividad:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {interactivityTypes.map((item) => (
                <div key={item.type} className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-bold text-lg text-slate-800 mb-2">{item.type}</h4>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-8 text-center">Definiciones según Autores</h2>
          <div className="space-y-6">
            {authors.map((author, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-600 mb-3">{author.name}</h3>
                <p className="text-slate-700 leading-relaxed">{author.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Fundamentos Técnicos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fundamentals.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Objetivo del Ingeniero Multimedia</h2>
            <p className="text-xl text-blue-50 leading-relaxed">
              Formar profesionales capaces de integrar ciencias de la computación, arte digital, animación, diseño y programación para crear soluciones multimedia innovadoras que transformen la manera en que las personas interactúan con la tecnología.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-300">
            © 2025 Ingeniería Multimedia. Creatividad, tecnología e innovación.
          </p>
        </div>
      </footer>
    </div>
  );
}
