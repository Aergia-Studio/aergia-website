import { motion } from 'framer-motion'
import { Sparkles, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          AERGIA
        </motion.h1>

        <p>
          Where myth, animation and interactive worlds converge.
        </p>

        <div className="hero-actions">
          <a className="button">
            <Sparkles size={18} />
            Explore Worlds
          </a>

          <a className="button ghost">
            <Play size={18} />
            Watch Reel
          </a>
        </div>
      </motion.div>

      {/* Floating divine symbol */}
      <motion.div
        className="hero-symbol float glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Sparkles size={120} />
      </motion.div>
    </section>
  )
}
