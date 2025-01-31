import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-tertiary via-white to-tertiary overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-primary mb-6">
            Transforme sua Paixão por Moda
            <br />
            <span className="text-secondary">em uma Carreira de Sucesso</span>
          </h1>
          
          <p className="text-lg sm:text-xl font-inter text-primary/80 max-w-2xl mx-auto mb-8">
            Descubra os segredos do mundo da moda com nosso novo livro exclusivo.
            Uma jornada completa do básico ao avançado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="book"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn btn-primary"
              >
                Pré-venda do Livro
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn btn-outline"
              >
                Conheça a Escola
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute left-0 right-0 bottom-0 h-64 bg-gradient-to-t from-tertiary to-transparent" />
        <div className="absolute -left-48 -top-48 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute -right-48 -bottom-48 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>
    </section>
  )
} 