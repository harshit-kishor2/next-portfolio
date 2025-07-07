'use client';

import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {FaEnvelope, FaCalendarAlt, FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa';

export default function ContactSection() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="contact"
      className="w-full bg-[#0f172a] text-white  py-24 px-4 md:px-12 text-center relative overflow-hidden"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none blur-xs opacity-90"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={'/video/video2.mp4'} type="video/mp4" />
      </video>
      <div className="max-w-3xl mx-auto space-y-6 relative z-10">
        <h2 className="text-2xl md:text-5xl font-bold">
          FROM CONCEPT TO <span className="text-blue-400">CREATION</span><br />
          LET&apos;S MAKE IT <span className="text-purple-400">HAPPEN!</span>
        </h2>

        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-3 text-white font-medium rounded-full transition-all duration-200"
        >
          Get In Touch
          <span className="text-xl">↗</span>
        </button>

        <p className="text-lg font-semibold mt-8">
          I&apos;m available for <span className="text-white font-bold">full-time roles</span> &{' '}
          <span className="text-white font-bold">freelance projects.</span>
        </p>
        <p className="text-gray-400 max-w-xl mx-auto">
          I thrive on crafting dynamic web applications, and delivering seamless user experiences.
        </p>
      </div>

      <ContactSheet isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}



function ContactSheet({isOpen, onClose}: {isOpen: boolean; onClose: () => void;}) {
  const [tab, setTab] = useState<'quick' | 'form'>('quick');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-lg rounded-t-2xl bg-[#0f172a] p-6 text-white shadow-xl"
            initial={{y: 200}}
            animate={{y: 0}}
            exit={{y: 200}}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle */}
            <div className="w-12 h-1 bg-gray-600 rounded-full mx-auto mb-4" />

            {/* Tabs */}
            <div className="flex justify-center gap-6 mb-6">
              <button
                onClick={() => setTab('quick')}
                className={`pb-1 border-b-2 ${tab === 'quick' ? 'border-white' : 'border-transparent text-gray-400'
                  }`}
              >
                Quick connect
              </button>
              <button
                onClick={() => setTab('form')}
                className={`pb-1 border-b-2 ${tab === 'form' ? 'border-white' : 'border-transparent text-gray-400'
                  }`}
              >
                Fill a form
              </button>
            </div>

            {/* Content */}
            {tab === 'quick' ? (
              <div className="space-y-4">
                {/* Social Icons */}
                <div className="flex justify-center gap-4 text-2xl text-white">
                  <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
                  <a href="https://github.com" target="_blank"><FaGithub /></a>
                  <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
                </div>

                {/* Email and Call cards */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/5 p-4 rounded-xl space-y-2">
                    <div className="flex items-center gap-2 text-blue-400">
                      <FaEnvelope /> <span>Email</span>
                    </div>
                    <p className="text-gray-300 text-sm break-all">hello@example.com</p>
                    <p className="text-gray-400 text-xs">Send me an email directly</p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-xl space-y-2">
                    <div className="flex items-center gap-2 text-purple-400">
                      <FaCalendarAlt /> <span>Book a Call</span>
                    </div>
                    <p className="text-gray-300 text-sm">Schedule a time slot</p>
                    <p className="text-gray-400 text-xs">Book a call on my calendar</p>
                  </div>
                </div>

                {/* Availability */}
                <div className="text-green-400 text-sm text-center mt-2">● Currently available for new opportunities</div>
              </div>
            ) : (
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 rounded-lg bg-white/5 text-white placeholder-gray-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-lg bg-white/5 text-white placeholder-gray-400"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full p-3 rounded-lg bg-white/5 text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-semibold"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
