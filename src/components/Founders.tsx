import { motion } from 'framer-motion'
import founder1Image from '../assets/images/founder_1.png'
import founder2Image from '../assets/images/founder_2.png'

const founders = [
  {
    name: 'Thaissa Schneider',
    role: 'Diretora Criativa',
    bio: 'Com mais de 15 anos de experiência no mercado da moda, Thaissa traz sua expertise em design e tendências para a Insight.',
    image: founder1Image,
    social: {
      instagram: '#',
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Edna Regina Steinhauser',
    role: 'Diretora Executiva',
    bio: 'Especialista em gestão de negócios da moda, Edna lidera a visão estratégica e o crescimento da escola.',
    image: founder2Image,
    social: {
      instagram: '#',
      linkedin: '#',
      twitter: '#',
    },
  },
]

export default function Founders() {
  return (
    <section id="founders" className="section bg-tertiary relative overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-playfair font-bold text-primary mb-6"
          >
            Nossas Fundadoras
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-primary/80"
          >
            Conheça as mentes criativas por trás da Insight Escola de Moda
          </motion.p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-playfair font-bold text-primary">
                    {founder.name}
                  </h3>
                  <p className="text-secondary font-montserrat font-semibold mt-1">
                    {founder.role}
                  </p>
                  <p className="mt-4 text-primary/80">
                    {founder.bio}
                  </p>

                  {/* Social Links */}
                  <div className="mt-6 flex space-x-4">
                    {Object.entries(founder.social).map(([platform, url]) => (
                      <motion.a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-primary/60 hover:text-secondary transition-colors"
                      >
                        <span className="sr-only">{platform}</span>
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {/* Replace with actual social media icons */}
                          <rect width="24" height="24" rx="12" />
                        </svg>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  )
} 