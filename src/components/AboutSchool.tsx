import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const images = [
  // Replace with actual image URLs
  '/path/to/image1.jpg',
  '/path/to/image2.jpg',
  '/path/to/image3.jpg',
  '/path/to/image4.jpg',
]

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
      className="section bg-primary text-white relative overflow-hidden"
      ref={ref}
    >
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-playfair font-bold mb-6"
          >
            Nossa História
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-white/80"
          >
            Há mais de uma década transformando sonhos em carreiras de sucesso
            no mundo da moda.
          </motion.p>
        </div>

        {/* Mission and Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <h3 className="text-2xl font-montserrat font-semibold text-secondary">
              Nossa Missão
            </h3>
            <p className="text-white/80">
              Capacitar e inspirar a próxima geração de profissionais da moda,
              fornecendo educação de qualidade e experiências práticas que
              preparam nossos alunos para o sucesso no mercado.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <h3 className="text-2xl font-montserrat font-semibold text-secondary">
              Nossos Valores
            </h3>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-secondary rounded-full" />
                <span>Excelência em educação</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-secondary rounded-full" />
                <span>Inovação constante</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-secondary rounded-full" />
                <span>Compromisso com o aluno</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-secondary rounded-full" />
                <span>Responsabilidade social</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Image Gallery */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {images.map((_, index) => (
            <motion.div
              key={index}
              className="aspect-square bg-white/10 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-primary/50">
                <div className="flex items-center justify-center h-full text-white/30 text-sm">
                  Imagem {index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
    </section>
  )
} 