import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Search, 
  Filter, 
  Clock, 
  Eye, 
  MessageCircle, 
  Share2,
  TrendingUp,
  Calendar,
  User
} from 'lucide-react'

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tümü')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    'Tümü', 'Borsa', 'Ekonomi', 'Kripto', 'Döviz', 'Emtia', 'Bankacılık', 'Teknoloji'
  ]

  const news = [
    {
      id: 1,
      title: 'TCMB Faiz Kararı Sonrası Piyasalarda Son Durum',
      excerpt: 'Merkez Bankası\'nın faiz kararı sonrası borsa ve döviz piyasalarında yaşanan gelişmeler detaylarıyla...',
      content: 'Türkiye Cumhuriyet Merkez Bankası\'nın (TCMB) açıkladığı faiz kararı sonrası finansal piyasalarda önemli hareketler yaşandı...',
      image: '/api/placeholder/600/300',
      category: 'Ekonomi',
      author: 'Dr. Mehmet Yılmaz',
      readTime: '5 dk',
      views: '12.5K',
      comments: 45,
      publishedAt: '2 saat önce',
      isBreaking: true,
      tags: ['TCMB', 'Faiz', 'Borsa', 'Döviz']
    },
    {
      id: 2,
      title: 'Teknoloji Hisselerinde Yükseliş Trendi Devam Ediyor',
      excerpt: 'Yerli teknoloji şirketlerinin güçlü performansı yatırımcıların dikkatini çekmeye devam ediyor...',
      content: 'Teknoloji sektöründeki şirketlerin son çeyrek finansal sonuçları beklentileri aştı...',
      image: '/api/placeholder/600/300',
      category: 'Borsa',
      author: 'Ayşe Kaya',
      readTime: '3 dk',
      views: '8.2K',
      comments: 23,
      publishedAt: '4 saat önce',
      isBreaking: false,
      tags: ['Teknoloji', 'Hisse', 'Yükseliş']
    },
    {
      id: 3,
      title: 'Kripto Para Piyasasında Yeni Düzenlemeler',
      excerpt: 'Finansal düzenleyici kurumların kripto para sektörüne yönelik yeni yaklaşımları ve etkileri...',
      content: 'Kripto para piyasasında yaşanan gelişmeler ve yeni düzenlemelerin sektöre etkileri...',
      image: '/api/placeholder/600/300',
      category: 'Kripto',
      author: 'Can Özkan',
      readTime: '7 dk',
      views: '15.3K',
      comments: 67,
      publishedAt: '6 saat önce',
      isBreaking: false,
      tags: ['Kripto', 'Düzenleme', 'Bitcoin']
    },
    {
      id: 4,
      title: 'Altın Fiyatlarında Rekor Kırılması Bekleniyor',
      excerpt: 'Küresel ekonomik belirsizlikler altın fiyatlarını yeni rekor seviyelere taşıyabilir...',
      content: 'Altın piyasasındaki son gelişmeler ve uzman görüşleri...',
      image: '/api/placeholder/600/300',
      category: 'Emtia',
      author: 'Prof. Dr. Zeynep Demir',
      readTime: '4 dk',
      views: '9.8K',
      comments: 34,
      publishedAt: '8 saat önce',
      isBreaking: false,
      tags: ['Altın', 'Emtia', 'Rekor']
    },
    {
      id: 5,
      title: 'Bankacılık Sektöründe Dijital Dönüşüm',
      excerpt: 'Türk bankacılık sektörünün dijital dönüşüm yolculuğu ve gelecek planları...',
      content: 'Bankacılık sektöründe yaşanan dijital dönüşüm süreci ve müşteri deneyimi...',
      image: '/api/placeholder/600/300',
      category: 'Bankacılık',
      author: 'Ahmet Şahin',
      readTime: '6 dk',
      views: '6.7K',
      comments: 19,
      publishedAt: '1 gün önce',
      isBreaking: false,
      tags: ['Bankacılık', 'Dijital', 'Fintech']
    },
    {
      id: 6,
      title: 'Döviz Kurlarında Volatilite Artışı',
      excerpt: 'Küresel gelişmelerin döviz kurları üzerindeki etkisi ve önümüzdeki dönem beklentileri...',
      content: 'Döviz piyasasındaki son hareketler ve analiz...',
      image: '/api/placeholder/600/300',
      category: 'Döviz',
      author: 'Fatma Yıldız',
      readTime: '5 dk',
      views: '11.2K',
      comments: 41,
      publishedAt: '1 gün önce',
      isBreaking: false,
      tags: ['Döviz', 'USD', 'EUR', 'Volatilite']
    }
  ]

  const filteredNews = news.filter(item => {
    const matchesCategory = selectedCategory === 'Tümü' || item.category === selectedCategory
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const breakingNews = news.filter(item => item.isBreaking)

  return (
    <div className="min-h-screen bg-background">
      {/* Breaking News Banner */}
      {breakingNews.length > 0 && (
        <div className="bg-red-600 text-white py-2">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-4">
              <Badge className="bg-white text-red-600 font-bold">SON DAKİKA</Badge>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm animate-pulse">
                  {breakingNews[0].title}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Finansal Haberler</h1>
          <p className="text-xl text-muted-foreground">
            Güncel finansal haberler, analiz ve piyasa yorumları
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Haberlerde ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="md:w-auto">
              <Filter className="mr-2 h-4 w-4" />
              Filtrele
            </Button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured News */}
        {filteredNews.length > 0 && (
          <div className="mb-12">
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="aspect-video md:aspect-square bg-muted relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    {filteredNews[0].isBreaking && (
                      <Badge className="absolute top-4 left-4 bg-red-600">
                        SON DAKİKA
                      </Badge>
                    )}
                    <Badge className="absolute top-4 right-4 bg-blue-600">
                      {filteredNews[0].category}
                    </Badge>
                  </div>
                </div>
                <div className="md:w-1/2 p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl mb-2">
                      {filteredNews[0].title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {filteredNews[0].excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {filteredNews[0].author}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {filteredNews[0].readTime}
                      </span>
                      <span className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {filteredNews[0].views}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {filteredNews[0].tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button>Haberi Oku</Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.slice(1).map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-3 left-3 bg-blue-600">
                  {item.category}
                </Badge>
                {item.isBreaking && (
                  <Badge className="absolute top-3 right-3 bg-red-600">
                    SON DAKİKA
                  </Badge>
                )}
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2 text-lg">
                  {item.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {item.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {item.author}
                    </span>
                    <span>{item.publishedAt}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {item.readTime}
                      </span>
                      <span className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {item.views}
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="h-3 w-3 mr-1" />
                        {item.comments}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Daha Fazla Haber Yükle
          </Button>
        </div>

        {/* Trending Topics Sidebar */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5" />
                Trend Konular
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {['TCMB Faiz Kararı', 'Bitcoin Yükselişi', 'Teknoloji Hisseleri', 'Altın Fiyatları', 'Dolar/TL'].map((topic, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer">
                    <span className="font-medium">#{topic}</span>
                    <Badge variant="secondary">{Math.floor(Math.random() * 100) + 10}K</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default NewsPage

