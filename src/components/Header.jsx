import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { 
  Menu, 
  X, 
  Search, 
  Sun, 
  Moon, 
  Bell, 
  User,
  TrendingUp,
  BookOpen,
  Users,
  BarChart3,
  Calculator,
  Newspaper
} from 'lucide-react'

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const location = useLocation()
  const { user, logout } = useAuth()
  const navigate = useNavigate()


  const navigation = [
    { name: 'Ana Sayfa', href: '/', icon: TrendingUp },
    { name: 'Haberler', href: '/haberler', icon: Newspaper },
    { name: 'Analiz', href: '/analiz', icon: BarChart3 },
    { name: 'Eğitim', href: '/egitim', icon: BookOpen },
    { name: 'Topluluk', href: '/topluluk', icon: Users },
    { name: 'Araçlar', href: '/araclar', icon: Calculator },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              FinanceHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            {/* Search */}
            <div className="hidden md:flex items-center">
              {isSearchOpen ? (
                <div className="flex items-center space-x-2">
                  <Input
                    type="text"
                    placeholder="Ara..."
                    className="w-64"
                    autoFocus
                    onBlur={() => setIsSearchOpen(false)}
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </Button>

            {/* Dark Mode Toggle */}
            <Button variant="ghost" size="sm" onClick={toggleDarkMode}>
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

                    {/* User Profile / Auth Buttons */}
        {user ? (
          <Link to="/profile">
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>
          </Link>
        ) : (
          <Link to="/login">
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>
          </Link>
        )}

        {/* Login/Register/Logout Buttons */}
        {user ? (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            Çıkış Yap
          </Button>
        ) : (
          <Link to="/register">
            <Button variant="ghost" size="sm">
              Kayıt Ol
            </Button>
          </Link>
        )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-2">
              {/* Mobile Search */}
              <div className="px-2 pb-2">
                <Input type="text" placeholder="Ara..." />
              </div>
              
              {/* Mobile Navigation Links */}
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
              {/* Mobile Auth Links */}
             {user ? (
             <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => {
                logout();
                navigate("/");
                setIsMenuOpen(false);
              }}
             >
              Çıkış Yap
             </Button>
             ) : (
             <div className="flex flex-col space-y-2 px-2">
               <Link
                to="/login"
                className="w-full justify-start"
                onClick={() => setIsMenuOpen(false)}
               >
                <Button variant="ghost" className="w-full justify-start">Giriş Yap</Button>
               </Link>
               <Link
                to="/register"
                className="w-full justify-start"
                onClick={() => setIsMenuOpen(false)}
               >
                <Button variant="ghost" className="w-full justify-start">Kayıt Ol</Button>
               </Link>
             </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

