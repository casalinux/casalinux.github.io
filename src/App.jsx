import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Download, Monitor, Terminal, Settings, Leaf, Globe, BookOpen, Mail, Youtube } from 'lucide-react'
import casaLinuxLogo from './assets/Casa_Linux_1.0.png'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleDownload = () => {
    window.open('https://drive.google.com/drive/folders/1TGjBe_jMx4FmhoJRDxMIaRISrmdm1YLL?usp=sharing', '_blank' )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-800 to-green-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-green-300 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-teal-300 rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-emerald-300 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 border-2 border-green-300 rounded-lg rotate-12"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Logo Section */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col items-center mb-8">
            <img 
              src={casaLinuxLogo} 
              alt="Casa Linux Logo" 
              className="w-80 h-80 md:w-96 md:h-96 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Title and Description */}
        <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Casa Linux
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-4 max-w-3xl mx-auto leading-relaxed">
            A remasterização Linux brasileira que une simplicidade, performance e inovação
          </p>
          <p className="text-lg text-green-200 max-w-2xl mx-auto">
            Desenvolvida com carinho para a comunidade brasileira, oferecendo uma experiência única e intuitiva
          </p>
        </div>

        {/* Features */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Monitor className="w-8 h-8 text-green-300 mb-2" />
            <span className="text-white text-sm font-medium">Interface Moderna</span>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Terminal className="w-8 h-8 text-teal-300 mb-2" />
            <span className="text-white text-sm font-medium">Terminal Avançado</span>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Settings className="w-8 h-8 text-emerald-300 mb-2" />
            <span className="text-white text-sm font-medium">Configuração Fácil</span>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Leaf className="w-8 h-8 text-green-300 mb-2" />
            <span className="text-white text-sm font-medium">Sustentável</span>
          </div>
        </div>

        {/* Download Button */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            onClick={handleDownload}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 transform"
          >
            <Download className="w-6 h-6 mr-3" />
            Baixar Casa Linux
          </Button>
          <p className="text-green-200 text-sm mt-4 text-center">
            Versão 1.3 - Gratuito e Open Source
          </p>
        </div>

        {/* Footer */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
            <a href="https://casalinuxos.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-100 transition-colors duration-200 flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              Blog Casa Linux
            </a>
            <a href="https://casalinux.github.io/" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-100 transition-colors duration-200 flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Site Oficial
            </a>
            <a href="https://www.youtube.com/@CasaLinux" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-100 transition-colors duration-200 flex items-center">
              <Youtube className="w-5 h-5 mr-2" />
              Canal no YouTube
            </a>
          </div>
          <div className="flex flex-col items-center gap-2 mb-4">
            <p className="text-green-300 text-sm flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Contato: <a href="mailto:casalinuxos@gmail.com" className="underline ml-1">casalinuxos@gmail.com</a>
            </p>
            <p className="text-green-300 text-sm">
              Professor Fábio Dias Silveira / Contato: <a href="mailto:fabio140185@gmail.com" className="underline">fabio140185@gmail.com</a>
            </p>
          </div>
          <p className="text-green-300 text-sm">
            Feito com ❤️ para a comunidade brasileira
          </p>
          <p className="text-green-400 text-xs mt-2">
            © 2024 Casa Linux - Todos os direitos reservados
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-8 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-12 w-3 h-3 bg-teal-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/5 w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-500"></div>
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-1500"></div>
    </div>
   )
}

export default App
