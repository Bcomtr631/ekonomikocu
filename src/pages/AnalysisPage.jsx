import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  PieChart, 
  LineChart,
  Calendar,
  Clock,
  Eye,
  Download,
  Share2,
  Filter,
  Search,
  Target,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'

const AnalysisPage = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1W')
  const [selectedCategory, setSelectedCategory] = useState('Tümü')

  const timeframes = ['1D', '1W', '1M', '3M', '6M', '1Y']
  const categories = ['Tümü', 'Hisse Analizi', 'Teknik Analiz', 'Makro Ekonomi', 'Sektör Analizi', 'Kripto Analizi']

  const marketOverview = [
    { symbol: 'BIST100', value: '9,847.23', change: '+2.34%', changeValue: '+225.67', isPositive: true },
    { symbol: 'USD/TRY', value: '32.45', change: '-0.12%', changeValue: '-0.04', isPositive: false },
    { symbol: 'EUR/TRY', value: '35.67', change: '+0.45%', changeValue: '+0.16', isPositive: true },
    { symbol: 'ALTIN', value: '2,456.78', change: '+1.23%', changeValue: '+29.87', isPositive: true },
    { symbol: 'PETROL', value: '78.45', change: '-0.89%', changeValue: '-0.70', isPositive: false },
    { symbol: 'BTC/USD', value: '45,678', change: '+3.45%', changeValue: '+1,523', isPositive: true }
  ]

  const analyses = [
    {
      id: 1,
      title: 'BIST100 Teknik Analiz: Yükseliş Trendinde Devam Beklentisi',
      summary: 'BIST100 endeksinin teknik göstergeleri güçlü yükseliş sinyalleri veriyor. 10,000 seviyesi kritik direnç.',
      analyst: 'Dr. Mehmet Yılmaz',
      category: 'Teknik Analiz',
      publishedAt: '2 saat önce',
      readTime: '8 dk',
      views: 2340,
      rating: 'Pozitif',
      confidence: 85,
      targets: ['9,950', '10,200', '10,500'],
      risks: ['Küresel piyasa volatilitesi', 'Jeopolitik riskler'],
      image: '/api/placeholder/400/200',
      isPremium: false
    },
    {
      id: 2,
      title: 'Teknoloji Sektörü Derinlemesine Analiz: Q4 Sonuçları ve 2024 Beklentileri',
      summary: 'Yerli teknoloji şirketlerinin Q4 performansı ve 2024 yılı için büyüme projeksiyonları.',
      analyst: 'Ayşe Kaya',
      category: 'Sektör Analizi',
      publishedAt: '4 saat önce',
      readTime: '12 dk',
      views: 1890,
      rating: 'Pozitif',
      confidence: 78,
      targets: ['Sektör büyümesi %15-20', 'Ar-Ge yatırımları artışı'],
      risks: ['Rekabet artışı', 'Düzenleyici değişiklikler'],
      image: '/api/placeholder/400/200',
      isPremium: true
    },
    {
      id: 3,
      title: 'Merkez Bankası Faiz Kararı Sonrası Piyasa Değerlendirmesi',
      summary: 'TCMB\'nin faiz kararının finansal piyasalar üzerindeki etkisi ve önümüzdeki dönem beklentileri.',
      analyst: 'Prof. Dr. Zeynep Demir',
      category: 'Makro Ekonomi',
      publishedAt: '6 saat önce',
      readTime: '10 dk',
      views: 3450,
      rating: 'Nötr',
      confidence: 72,
      targets: ['Enflasyon hedefi', 'Döviz kurları'],
      risks: ['Küresel faiz artışları', 'Jeopolitik gelişmeler'],
      image: '/api/placeholder/400/200',
      isPremium: false
    },
    {
      id: 4,
      title: 'Bitcoin ve Altcoin Piyasası: Teknik ve Temel Analiz',
      summary: 'Kripto para piyasasının mevcut durumu, Bitcoin dominansı ve altcoin fırsatları.',
      analyst: 'Can Özkan',
      category: 'Kripto Analizi',
      publishedAt: '8 saat önce',
      readTime: '15 dk',
      views: 2780,
      rating: 'Pozitif',
      confidence: 68,
      targets: ['BTC: $48,000', 'ETH: $3,200', 'Altcoin sezonu'],
      risks: ['Düzenleyici belirsizlik', 'Makro ekonomik faktörler'],
      image: '/api/placeholder/400/200',
      isPremium: true
    },
    {
      id: 5,
      title: 'Bankacılık Sektörü Q4 Performans Analizi',
      summary: 'Türk bankacılık sektörünün son çeyrek performansı ve karlılık projeksiyonları.',
      analyst: 'Ahmet Şahin',
      category: 'Sektör Analizi',
      publishedAt: '1 gün önce',
      readTime: '9 dk',
      views: 1560,
      rating: 'Pozitif',
      confidence: 81,
      targets: ['ROE artışı', 'Kredi büyümesi'],
      risks: ['Kredi riski', 'Faiz volatilitesi'],
      image: '/api/placeholder/400/200',
      isPremium: false
    }
  ]

  const topPerformers = [
    { symbol: 'THYAO', name: 'Türk Hava Yolları', change: '+8.45%', price: '245.60' },
    { symbol: 'BIMAS', name: 'BIM Mağazalar', change: '+6.78%', price: '189.30' },
    { symbol: 'ASELS', name: 'Aselsan', change: '+5.92%', price: '78.45' },
    { symbol: 'KCHOL', name: 'Koç Holding', change: '+4.56%', price: '156.80' },
    { symbol: 'ISCTR', name: 'İş Bankası', change: '+3.89%', price: '12.45' }
  ]

  const topLosers = [
    { symbol: 'PETKM', name: 'Petkim', change: '-4.23%', price: '8.90' },
    { symbol: 'TUPRS', name: 'Tüpraş', change: '-3.67%', price: '67.80' },
    { symbol: 'TCELL', name: 'Turkcell', change: '-2.89%', price: '45.60' },
    { symbol: 'AKBNK', name: 'Akbank', change: '-2.34%', price: '34.50' },
    { symbol: 'GARAN', name: 'Garanti BBVA', change: '-1.98%', price: '89.70' }
  ]

  const filteredAnalyses = analyses.filter(analysis => 
    selectedCategory === 'Tümü' || analysis.category === selectedCategory
  )

  const getRatingColor = (rating) => {
    switch (rating) {
      case 'Pozitif': return 'text-green-600 bg-green-100'
      case 'Negatif': return 'text-red-600 bg-red-100'
      case 'Nötr': return 'text-yellow-600 bg-yellow-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Piyasa Analizi</h1>
          <p className="text-xl text-muted-foreground">
            Uzman analistlerden güncel piyasa değerlendirmeleri ve derinlemesine analizler
          </p>
        </div>

        {/* Market Overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Piyasa Genel Görünüm</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {marketOverview.map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <div className="font-bold text-lg mb-1">{item.symbol}</div>
                  <div className="text-2xl font-bold mb-2">{item.value}</div>
                  <div className={`flex items-center justify-center text-sm ${
                    item.isPositive ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {item.isPositive ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                    <span>{item.change}</span>
                  </div>
                  <div className={`text-xs ${item.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {item.changeValue}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeframe and Category Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="font-medium">Zaman Aralığı:</span>
              <div className="flex space-x-2">
                {timeframes.map((timeframe) => (
                  <Button
                    key={timeframe}
                    variant={selectedTimeframe === timeframe ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTimeframe(timeframe)}
                  >
                    {timeframe}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filtrele
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Rapor İndir
              </Button>
            </div>
          </div>

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

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Featured Analysis */}
            {filteredAnalyses.length > 0 && (
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="aspect-video md:aspect-square bg-muted relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <Badge className="absolute top-4 left-4 bg-blue-600">
                        {filteredAnalyses[0].category}
                      </Badge>
                      {filteredAnalyses[0].isPremium && (
                        <Badge className="absolute top-4 right-4 bg-yellow-600">
                          Premium
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={getRatingColor(filteredAnalyses[0].rating)}>
                          {filteredAnalyses[0].rating}
                        </Badge>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <span>Güven: {filteredAnalyses[0].confidence}%</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl mb-2">
                        {filteredAnalyses[0].title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {filteredAnalyses[0].summary}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                        <span>{filteredAnalyses[0].analyst}</span>
                        <span>•</span>
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {filteredAnalyses[0].readTime}
                        </span>
                        <span>•</span>
                        <span className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {filteredAnalyses[0].views}
                        </span>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm font-medium text-green-600">Hedefler: </span>
                          <span className="text-sm">{filteredAnalyses[0].targets.join(', ')}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-red-600">Riskler: </span>
                          <span className="text-sm">{filteredAnalyses[0].risks.join(', ')}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2 mt-4">
                        <Button>Analizi Oku</Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            )}

            {/* Analysis Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredAnalyses.slice(1).map((analysis) => (
                <Card key={analysis.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <Badge className="absolute top-3 left-3 bg-blue-600">
                      {analysis.category}
                    </Badge>
                    {analysis.isPremium && (
                      <Badge className="absolute top-3 right-3 bg-yellow-600">
                        Premium
                      </Badge>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getRatingColor(analysis.rating)}>
                        {analysis.rating}
                      </Badge>
                      <div className="text-sm text-muted-foreground">
                        Güven: {analysis.confidence}%
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2 text-lg">
                      {analysis.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {analysis.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{analysis.analyst}</span>
                        <span>{analysis.publishedAt}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {analysis.readTime}
                        </span>
                        <span className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {analysis.views}
                        </span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div>
                          <span className="font-medium text-green-600">Hedefler: </span>
                          <span className="line-clamp-1">{analysis.targets.join(', ')}</span>
                        </div>
                        <div>
                          <span className="font-medium text-red-600">Riskler: </span>
                          <span className="line-clamp-1">{analysis.risks.join(', ')}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" size="lg">
                Daha Fazla Analiz Yükle
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Performers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  En Çok Yükselenler
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topPerformers.map((stock, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-sm">{stock.symbol}</div>
                        <div className="text-xs text-muted-foreground line-clamp-1">
                          {stock.name}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{stock.price}</div>
                        <div className="text-xs text-green-600">{stock.change}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Losers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <TrendingDown className="mr-2 h-5 w-5" />
                  En Çok Düşenler
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topLosers.map((stock, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-sm">{stock.symbol}</div>
                        <div className="text-xs text-muted-foreground line-clamp-1">
                          {stock.name}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{stock.price}</div>
                        <div className="text-xs text-red-600">{stock.change}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Market Sentiment */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Piyasa Duyarlılığı
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Boğa Piyasası</span>
                    <span className="text-sm font-medium text-green-600">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Ayı Piyasası</span>
                    <span className="text-sm font-medium text-red-600">35%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{width: '35%'}}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Economic Calendar */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Ekonomik Takvim
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { event: 'TCMB Faiz Kararı', date: '25 Ocak', impact: 'Yüksek' },
                    { event: 'Enflasyon Verileri', date: '3 Şubat', impact: 'Yüksek' },
                    { event: 'İşsizlik Oranı', date: '10 Şubat', impact: 'Orta' },
                    { event: 'Sanayi Üretimi', date: '15 Şubat', impact: 'Orta' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">{item.event}</div>
                        <div className="text-xs text-muted-foreground">{item.date}</div>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          item.impact === 'Yüksek' ? 'border-red-500 text-red-600' :
                          item.impact === 'Orta' ? 'border-yellow-500 text-yellow-600' :
                          'border-green-500 text-green-600'
                        }`}
                      >
                        {item.impact}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalysisPage

