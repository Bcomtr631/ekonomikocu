import { Link } from 'react-router-dom'
import { TrendingUp, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                FinanceHub
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Türkiye'nin en kapsamlı finansal platform ve topluluk merkezi. 
              Finansal okuryazarlığınızı artırın, yatırım kararlarınızı bilinçli alın.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hızlı Erişim</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/haberler" className="text-sm text-muted-foreground hover:text-foreground">
                  Güncel Haberler
                </Link>
              </li>
              <li>
                <Link to="/analiz" className="text-sm text-muted-foreground hover:text-foreground">
                  Piyasa Analizi
                </Link>
              </li>
              <li>
                <Link to="/egitim" className="text-sm text-muted-foreground hover:text-foreground">
                  Eğitim Merkezi
                </Link>
              </li>
              <li>
                <Link to="/araclar" className="text-sm text-muted-foreground hover:text-foreground">
                  Finansal Araçlar
                </Link>
              </li>
              <li>
                <Link to="/topluluk" className="text-sm text-muted-foreground hover:text-foreground">
                  Topluluk
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Yatırım Danışmanlığı
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Portföy Yönetimi
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Risk Analizi
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Finansal Planlama
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Eğitim Programları
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">info@financehub.com.tr</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">+90 212 555 0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">İstanbul, Türkiye</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 FinanceHub. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Kullanım Şartları
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Çerez Politikası
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

