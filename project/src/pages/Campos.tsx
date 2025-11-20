import { Monitor, GraduationCap, TrendingUp, Gamepad2, Film, Lightbulb } from 'lucide-react';

export default function Campos() {
  const campos = [
    {
      icon: Monitor,
      title: 'Aplicaciones Multimedia',
      color: 'from-blue-500 to-blue-600',
      description: 'Desarrollo de aplicaciones, sitios web e interfaces interactivas.',
      roles: ['Diseñador de interfaces', 'Desarrollador frontend', 'Integrador multimedia'],
      skills: ['React, Vue, Angular', 'UX/UI Design', 'APIs y bases de datos'],
    },
    {
      icon: GraduationCap,
      title: 'Multimedia Educativa',
      color: 'from-purple-500 to-purple-600',
      description: 'Creación de contenido educativo digital e interactivo.',
      roles: ['Diseñador de contenido', 'Integrador multimedia', 'Desarrollador educativo'],
      skills: ['Pedagogía digital', 'Gamificación', 'Plataformas LMS'],
    },
    {
      icon: TrendingUp,
      title: 'Marketing Multimedia',
      color: 'from-pink-500 to-pink-600',
      description: 'Publicidad digital, contenido visual y sitios web promocionales.',
      roles: ['Content creator', 'Digital marketer', 'Social media specialist'],
      skills: ['SEO/SEM', 'Analytics', 'Motion graphics'],
    },
    {
      icon: Gamepad2,
      title: 'Videojuegos',
      color: 'from-green-500 to-green-600',
      description: 'Desarrollo de videojuegos para móviles, PC y consolas.',
      roles: ['Game designer', 'Programador de gameplay', 'Artista 3D'],
      skills: ['Unity, Unreal Engine', 'C#, C++', 'Modelado 3D'],
    },
    {
      icon: Film,
      title: 'Animación',
      color: 'from-cyan-500 to-cyan-600',
      description: 'Animación 2D y 3D: modelado, rigging, texturizado y render.',
      roles: ['Animador 2D/3D', 'Modelador 3D', 'Rigger y técnico'],
      skills: ['Blender, Maya, 3ds Max', 'After Effects', 'Composición'],
    },
  ];

  const habilidadesClave = [
    'Diseño visual y composición',
    'Programación y desarrollo',
    'Gestión de proyectos',
    'Creatividad e innovación',
    'Trabajo colaborativo',
    'Pensamiento analítico',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-green-600 to-cyan-600 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Campos de Acción</h1>
          <p className="text-xl text-green-100">
            Áreas donde un ingeniero multimedia puede desarrollarse profesionalmente
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          {campos.map((campo, index) => {
            const Icon = campo.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="grid md:grid-cols-3">
                  <div className={`bg-gradient-to-br ${campo.color} p-8 flex flex-col justify-center items-center text-center`}>
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{campo.title}</h2>
                  </div>
                  <div className="md:col-span-2 p-8">
                    <p className="text-lg text-slate-700 mb-6 leading-relaxed">{campo.description}</p>

                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-slate-800 mb-3">Roles principales:</h3>
                      <div className="flex flex-wrap gap-2">
                        {campo.roles.map((rol, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {rol}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-800 mb-3">Habilidades técnicas:</h3>
                      <div className="flex flex-wrap gap-2">
                        {campo.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Lightbulb className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Habilidades Clave</h2>
            <p className="text-lg text-slate-600">
              Competencias esenciales para destacar como ingeniero multimedia
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {habilidadesClave.map((habilidad, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <p className="font-semibold text-slate-800">{habilidad}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Trabajo Interdisciplinario</h2>
            <p className="text-xl text-blue-50 leading-relaxed">
              El ingeniero multimedia debe tener la capacidad de trabajar en equipos multidisciplinarios, colaborando con diseñadores, programadores, artistas, gestores de proyecto y clientes. La comunicación efectiva y la adaptabilidad son fundamentales para el éxito en cualquier campo de acción.
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
