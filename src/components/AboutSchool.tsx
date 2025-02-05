import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AboutSchool() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section
      id="about"
      className="section bg-primary text-white relative overflow-hidden py-24"
      ref={ref}
    >
      {/* Decorative Fashion Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary via-primary to-secondary" />
      <div className="absolute -top-32 -right-32 w-64 h-64 border border-secondary/20 rounded-full" />
      <div className="absolute -top-16 -right-16 w-32 h-32 border border-secondary/20 rounded-full" />
      <div className="absolute top-1/4 left-0 w-1 h-32 bg-gradient-to-b from-secondary/0 via-secondary to-secondary/0" />
      
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Header Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-20"
        >
          <h2 className="inline-block text-5xl sm:text-6xl font-playfair font-bold mb-6 relative">
            <span className="text-secondary">Nossa</span> História
            <div className="absolute -bottom-4 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
          {/* História Column */}
          <motion.div 
            className="lg:col-span-5 space-y-8 relative"
            variants={itemVariants}
          >
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 relative">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-secondary" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-secondary" />
              <p className="text-lg text-white/90 leading-relaxed">
                Fundada em 2010, a Insight Escola de Moda nasceu do sonho de transformar a educação em moda no Brasil. Nossa jornada começou com uma visão clara: criar um espaço onde criatividade, técnica e inovação se encontram para formar os melhores profissionais do mercado.
              </p>
              <p className="text-lg text-white/90 leading-relaxed mt-6">
                Ao longo dos anos, construímos uma reputação sólida baseada na excelência do ensino e no compromisso com o desenvolvimento profissional de nossos alunos. Nossa escola tem sido berço de talentos que hoje brilham nas passarelas, ateliês e grandes marcas do país e do exterior.
              </p>
            </div>
          </motion.div>

          {/* Mission and Values Column */}
          <motion.div 
            className="lg:col-span-7 space-y-12 relative"
            variants={itemVariants}
          >
            {/* Missão */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary/0 via-secondary to-secondary/0" />
              <h3 className="text-3xl font-montserrat font-semibold text-secondary mb-6 flex items-center">
                <span className="w-8 h-px bg-secondary mr-4" />
                Nossa Missão
              </h3>
              <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-secondary/30 transition-colors duration-300">
                <p className="text-lg text-white/90 leading-relaxed">
                  Formar profissionais visionários e competentes, capazes de transformar a indústria da moda através da inovação, sustentabilidade e excelência técnica. Buscamos não apenas educar, mas inspirar uma nova geração de criadores que irão moldar o futuro da moda com responsabilidade e criatividade.
                </p>
              </div>
            </div>

            {/* Valores */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary/0 via-secondary to-secondary/0" />
              <h3 className="text-3xl font-montserrat font-semibold text-secondary mb-6 flex items-center">
                <span className="w-8 h-px bg-secondary mr-4" />
                Nossos Valores
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-secondary/30 transition-colors duration-300">
                  <ul className="space-y-6">
                    <li className="flex items-start space-x-4">
                      <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2 transform -rotate-45" />
                      <span className="text-white/90">Excelência e qualidade em tudo que fazemos</span>
                    </li>
                    <li className="flex items-start space-x-4">
                      <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2 transform -rotate-45" />
                      <span className="text-white/90">Inovação e criatividade como pilares do ensino</span>
                    </li>
                    <li className="flex items-start space-x-4">
                      <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2 transform -rotate-45" />
                      <span className="text-white/90">Sustentabilidade e responsabilidade social</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-secondary/30 transition-colors duration-300">
                  <ul className="space-y-6">
                    <li className="flex items-start space-x-4">
                      <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2 transform -rotate-45" />
                      <span className="text-white/90">Ética e profissionalismo em todas as relações</span>
                    </li>
                    <li className="flex items-start space-x-4">
                      <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2 transform -rotate-45" />
                      <span className="text-white/90">Valorização da diversidade e inclusão</span>
                    </li>
                    <li className="flex items-start space-x-4">
                      <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2 transform -rotate-45" />
                      <span className="text-white/90">Compromisso com o desenvolvimento do aluno</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[32rem] h-[32rem] bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-secondary via-primary to-secondary" />
    </section>
  )
} 