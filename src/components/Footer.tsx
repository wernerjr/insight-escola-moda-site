import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser'

const navigation = {
  social: [
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    { name: 'YouTube', href: '#', icon: 'youtube' },
  ],
  main: [
    { name: 'Início', href: '#hero' },
    { name: 'O Livro', href: '#book' },
    { name: 'Sobre', href: '#about' },
    { name: 'Fundadoras', href: '#founders' },
    { name: 'Contato', href: '#contact' },
  ],
  legal: [
    { name: 'Privacidade', href: '#' },
    { name: 'Termos', href: '#' },
  ],
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: import.meta.env.VITE_NOTIFICATION_EMAIL,
          subscriber_email: email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      toast.success('Obrigado por se inscrever! Em breve você receberá nossas novidades.')
      setEmail('')
    } catch (error) {
      console.error('Error sending email:', error)
      toast.error('Ocorreu um erro ao se inscrever. Por favor, tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-primary text-white" id="contact">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold">Insight</h3>
            <p className="text-white/80 max-w-xs">
              Transformando paixão por moda em carreiras de sucesso.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white/60 hover:text-secondary transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
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

          {/* Navigation */}
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/60 hover:text-secondary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/60 hover:text-secondary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Newsletter</h4>
            <p className="text-white/80 mb-4">
              Receba novidades e conteúdo exclusivo.
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email-address"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  placeholder="Seu email"
                  disabled={isSubmitting}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full btn btn-primary disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Inscrever-se'}
              </motion.button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60">
          <p>© {new Date().getFullYear()} Insight Escola de Moda. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
} 