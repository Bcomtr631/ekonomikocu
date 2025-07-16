import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  TrendingUp, 
  TrendingDown, 
  ArrowRight, 
  Users, 
  BookOpen, 
  BarChart3,
  Star,
  Clock,
  Eye,
  MessageCircle,
  Play,
  Award,
  Target,
  Shield,
  Zap
} from 'lucide-react'

const HomePage = () => {
  const [marketData, setMarketData] = useState([
    { symbol: 'BIST100', value: '9,847.23', change: '+2.34%', isPositive: true },
    { symbol: 'USD/TRY', value: '32.45', change: '-0.12%', isPositive: false },
    { symbol: 'EUR/TRY', value: '35.67', change: '+0.45%', isPositive: true },
    { symbol: 'ALTIN', value: '2,456.78', change: '+1.23%', isPositive: true },
  ])

  const featuredNews = [
    {
      id: 1,
      title: 'TCMB Faiz Kararı Sonrası Piyasalarda Son Durum',
      excerpt: 'Merkez Bankası\'nın faiz kararı sonrası borsa ve döviz piyasalarında yaşanan gelişmeler...',
      image: '/api/placeholder/400/200',
      category: 'Ekonomi',
      readTime: '5 dk',
      views: '12.5K',
      publishedAt: '2 saat önce'
    },
    {
      id: 2,
      title: 'Teknoloji Hisselerinde Yükseliş Trendi Devam Ediyor',
      excerpt: 'Yerli teknoloji şirketlerinin güçlü performansı yatırımcıların dikkatini çekiyor...',
      image: '/api/placeholder/400/200',
      category: 'Borsa',
      readTime: '3 dk',
      views: '8.2K',
      publishedAt: '4 saat önce'
    },
    {
      id: 3,
      title: 'Kripto Para Piyasasında Yeni Düzenlemeler',
      excerpt: 'Finansal düzenleyici kurumların kripto para sektörüne yönelik yeni yaklaşımları...',
      image: '/api/placeholder/400/200',
      category: 'Kripto',
      readTime: '7 dk',
      views: '15.3K',
      publishedAt: '6 saat önce'
    }
  ]

  const popularCourses = [
    {
      id: 1,
      title: 'Yatırıma Başlangıç Rehberi',
      description: 'Sıfırdan yatırım öğrenin, portföyünüzü oluşturun',
      instructor: 'Dr. Mehmet Yılmaz',
      rating: 4.8,
      students: 2340,
      duration: '8 saat',
      level: 'Başlangıç',
      price: 'Ücretsiz'
    },
    {
      id: 2,
      title: 'Teknik Analiz Masterclass',
      description: 'Grafik okuma ve teknik analiz teknikleri',
      instructor: 'Ayşe Kaya',
      rating: 4.9,
      students: 1850,
      duration: '12 saat',
      level: 'Orta',
      price: '299 TL'
    },
    {
      id: 3,
      title: 'Kripto Para Yatırımcılığı',
      description: 'Blockchain teknolojisi ve kripto yatırımları',
      instructor: 'Can Özkan',
      rating: 4.7,
      students: 1200,
      duration: '6 saat',
      level: 'Başlangıç',
      price: '199 TL'
    }
  ]

  const communityStats = [
    { label: 'Aktif Üye', value: '125K+', icon: Users },
    { label: 'Günlük Mesaj', value: '15K+', icon: MessageCircle },
    { label: 'Eğitim İçeriği', value: '500+', icon: BookOpen },
    { label: 'Uzman Analiz', value: '1K+', icon: BarChart3 }
  ]

  const features = [
    {
      icon: Shield,
      title: 'Güvenilir İçerik',
      description: 'Uzman ekibimiz tarafından hazırlanan doğrulanmış finansal içerikler'
    },
    {
      icon: Zap,
      title: 'Anlık Veriler',
      description: 'Gerçek zamanlı piyasa verileri ve güncel finansal haberler'
    },
    {
      icon: Target,
      title: 'Kişisel Hedefler',
      description: 'Finansal hedeflerinizi belirleyin ve takip edin'
    },
    {
      icon: Award,
      title: 'Uzman Desteği',
      description: 'Deneyimli finansal danışmanlardan profesyonel destek'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Finansal Geleceğinizi
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Şekillendirin
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Türkiye'nin en kapsamlı finansal platform ve topluluk merkezi. 
              Yatırım öğrenin, analiz yapın, toplulukla paylaşın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Play className="mr-2 h-5 w-5" />
                Hemen Başla
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <BookOpen className="mr-2 h-5 w-5" />
                Eğitimleri İncele
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Data Ticker */}
      <section className="bg-muted/50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between overflow-x-auto">
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap mr-4">
              Piyasa Verileri:
            </span>
            <div className="flex space-x-6">
              {marketData.map((item, index) => (
                <div key={index} className="flex items-center space-x-2 whitespace-nowrap">
                  <span className="font-medium">{item.symbol}</span>
                  <span className="text-sm">{item.value}</span>
                  <span className={`text-sm flex items-center ${
                    item.isPositive ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {item.isPositive ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                    {item.change}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Neden FinanceHub?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Finansal başarınız için ihtiyacınız olan her şey tek platformda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Öne Çıkan Haberler</h2>
            <Link to="/haberler">
              <Button variant="outline">
                Tüm Haberler
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredNews.map((news) => (
              <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge className="absolute top-3 left-3 bg-blue-600">
                    {news.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{news.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {news.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {news.readTime}
                      </span>
                      <span className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {news.views}
                      </span>
                    </div>
                    <span>{news.publishedAt}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Popüler Eğitimler</h2>
            <Link to="/egitim">
              <Button variant="outline">
                Tüm Eğitimler
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary">{course.level}</Badge>
                    <span className="font-bold text-lg text-green-600">{course.price}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{course.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Eğitmen: {course.instructor}</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span>{course.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{course.students} öğrenci</span>
                      <span>{course.duration}</span>
                    </div>
                    <Button className="w-full">
                      Eğitime Başla
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Büyüyen Topluluğumuz
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Binlerce yatırımcı ve finansal uzmanla birlikte öğrenin ve gelişin
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              )
            })}
          </div>
          <div className="text-center mt-12">
            <Link to="/topluluk">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Users className="mr-2 h-5 w-5" />
                Topluluğa Katıl
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Finansal Yolculuğunuza Bugün Başlayın
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ücretsiz hesap oluşturun ve finansal hedeflerinize ulaşmak için 
                gereken tüm araçlara erişim sağlayın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                  Ücretsiz Kayıt Ol
                </Button>
                <Button size="lg" variant="outline">
                  Demo İzle
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default HomePage

