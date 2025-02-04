import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import bookImage from '../assets/images/book.png'

export default function BookSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section
      id="book"
      ref={sectionRef}
      className="section bg-white relative overflow-hidden"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Book Image */}
        <motion.div
          style={{ y }}
          className="relative flex items-center justify-center"
        >
          <div className="w-full max-w-md bg-gradient-to-br from-secondary/20 to-tertiary rounded-lg shadow-2xl p-4">
            <img
              src={bookImage}
              alt="O Guia Definitivo para sua Carreira na Moda"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Content */}
        <div className="lg:pl-12">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-primary mb-6">
              O Guia Definitivo para sua
              <br />
              <span className="text-secondary">Carreira na Moda</span>
            </h2>

            <div className="space-y-6 text-primary/80">
              <p className="text-lg">
                Um livro completo que abrange desde os fundamentos do design de moda
                até as técnicas mais avançadas de costura e modelagem.
              </p>

              <ul className="space-y-4">
                {[
                  'Fundamentos do Design de Moda',
                  'Técnicas de Costura Avançadas',
                  'Modelagem e Prototipagem',
                  'Gestão de Negócios da Moda',
                  'Tendências e Inovação',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <svg
                      className="h-5 w-5 text-secondary flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="pt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary"
                  disabled
                >
                  Em Breve
                </motion.button>
                <p className="mt-4 text-sm text-primary/60">
                  *Aguarde o lançamento
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-tertiary to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-tertiary to-transparent" />
    </section>
  )
} 