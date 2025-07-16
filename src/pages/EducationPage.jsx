import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { 
  Search, 
  Filter, 
  Play, 
  Clock, 
  Users, 
  Star,
  BookOpen,
  Award,
  Target,
  TrendingUp,
  Download,
  CheckCircle
} from 'lucide-react'

const EducationPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tümü')
  const [selectedLevel, setSelectedLevel] = useState('Tümü')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    'Tümü', 'Yatırım Temelleri', 'Teknik Analiz', 'Borsa', 'Kripto', 'Forex', 'Emtia', 'Risk Yönetimi'
  ]

  const levels = ['Tümü', 'Başlangıç', 'Orta', 'İleri']

  const courses = [
    {
      id: 1,
      title: 'Yatırıma Başlangıç Rehberi',
      description: 'Sıfırdan yatırım öğrenin, portföyünüzü oluşturun ve finansal hedeflerinize ulaşın',
      instructor: 'Dr. Mehmet Yılmaz',
      instructorTitle: 'Finansal Danışman',
      rating: 4.8,
      students: 2340,
      duration: '8 saat',
      lessons: 24,
      level: 'Başlangıç',
      category: 'Yatırım Temelleri',
      price: 'Ücretsiz',
      originalPrice: null,
      image: '/api/placeholder/400/250',
      isPopular: true,
      isFree: true,
      completionRate: 85,
      skills: ['Portföy Oluşturma', 'Risk Analizi', 'Yatırım Stratejileri'],
      preview: 'Bu kurs ile yatırımın temellerini öğrenecek...'
    },
    {
      id: 2,
      title: 'Teknik Analiz Masterclass',
      description: 'Grafik okuma, teknik indikatörler ve trading stratejileri ile profesyonel analiz yapın',
      instructor: 'Ayşe Kaya',
      instructorTitle: 'Teknik Analiz Uzmanı',
      rating: 4.9,
      students: 1850,
      duration: '12 saat',
      lessons: 36,
      level: 'Orta',
      category: 'Teknik Analiz',
      price: '299 TL',
      originalPrice: '499 TL',
      image: '/api/placeholder/400/250',
      isPopular: false,
      isFree: false,
      completionRate: 78,
      skills: ['Grafik Analizi', 'İndikatörler', 'Trading Stratejileri'],
      preview: 'Teknik analizin tüm inceliklerini öğrenin...'
    },
    {
      id: 3,
      title: 'Kripto Para Yatırımcılığı',
      description: 'Blockchain teknolojisi, kripto analizi ve güvenli yatırım stratejileri',
      instructor: 'Can Özkan',
      instructorTitle: 'Blockchain Uzmanı',
      rating: 4.7,
      students: 1200,
      duration: '6 saat',
      lessons: 18,
      level: 'Başlangıç',
      category: 'Kripto',
      price: '199 TL',
      originalPrice: '299 TL',
      image: '/api/placeholder/400/250',
      isPopular: true,
      isFree: false,
      completionRate: 92,
      skills: ['Blockchain', 'DeFi', 'Kripto Analizi'],
      preview: 'Kripto dünyasına güvenli giriş yapın...'
    },
    {
      id: 4,
      title: 'Forex Trading Stratejileri',
      description: 'Döviz piyasalarında profesyonel trading teknikleri ve risk yönetimi',
      instructor: 'Prof. Dr. Zeynep Demir',
      instructorTitle: 'Finansal Piyasalar Uzmanı',
      rating: 4.6,
      students: 980,
      duration: '10 saat',
      lessons: 30,
      level: 'İleri',
      category: 'Forex',
      price: '399 TL',
      originalPrice: '599 TL',
      image: '/api/placeholder/400/250',
      isPopular: false,
      isFree: false,
      completionRate: 73,
      skills: ['Forex Trading', 'Risk Yönetimi', 'Makro Analiz'],
      preview: 'Forex piyasalarında uzman olun...'
    },
    {
      id: 5,
      title: 'Portföy Yönetimi ve Optimizasyonu',
      description: 'Modern portföy teorisi, varlık dağılımı ve performans ölçümü',
      instructor: 'Ahmet Şahin',
      instructorTitle: 'Portföy Yöneticisi',
      rating: 4.8,
      students: 1560,
      duration: '14 saat',
      lessons: 42,
      level: 'İleri',
      category: 'Yatırım Temelleri',
      price: '449 TL',
      originalPrice: '699 TL',
      image: '/api/placeholder/400/250',
      isPopular: false,
      isFree: false,
      completionRate: 81,
      skills: ['Portföy Teorisi', 'Varlık Dağılımı', 'Performans Analizi'],
      preview: 'Profesyonel portföy yönetimi öğrenin...'
    },
    {
      id: 6,
      title: 'Emtia Piyasaları ve Yatırım',
      description: 'Altın, petrol, tarım ürünleri ve diğer emtialarda yatırım stratejileri',
      instructor: 'Fatma Yıldız',
      instructorTitle: 'Emtia Analisti',
      rating: 4.5,
      students: 720,
      duration: '7 saat',
      lessons: 21,
      level: 'Orta',
      category: 'Emtia',
      price: '249 TL',
      originalPrice: '399 TL',
      image: '/api/placeholder/400/250',
      isPopular: false,
      isFree: false,
      completionRate: 76,
      skills: ['Emtia Analizi', 'Hedge Stratejileri', 'Makro Ekonomi'],
      preview: 'Emtia piyasalarının dinamiklerini keşfedin...'
    }
  ]

  const learningPaths = [
    {
      id: 1,
      title: 'Yeni Başlayan Yatırımcı',
      description: 'Sıfırdan yatırım öğrenmek isteyenler için kapsamlı öğrenme yolu',
      courses: 4,
      duration: '25 saat',
      level: 'Başlangıç',
      students: 3200,
      progress: 0
    },
    {
      id: 2,
      title: 'Teknik Analiz Uzmanı',
      description: 'Grafik analizi ve trading konularında uzmanlaşmak isteyenler için',
      courses: 6,
      duration: '40 saat',
      level: 'Orta',
      students: 1800,
      progress: 25
    },
    {
      id: 3,
      title: 'Portföy Yöneticisi',
      description: 'Profesyonel portföy yönetimi ve risk analizi konularında derinleşin',
      courses: 8,
      duration: '60 saat',
      level: 'İleri',
      students: 950,
      progress: 60
    }
  ]

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'Tümü' || course.category === selectedCategory
    const matchesLevel = selectedLevel === 'Tümü' || course.level === selectedLevel
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesLevel && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Finansal Eğitim Merkezi</h1>
          <p className="text-xl text-muted-foreground">
            Uzman eğitmenlerden öğrenin, becerilerinizi geliştirin ve finansal hedeflerinize ulaşın
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center p-4">
            <div className="text-2xl font-bold text-blue-600">50+</div>
            <div className="text-sm text-muted-foreground">Eğitim Kursu</div>
          </Card>
          <Card className="text-center p-4">
            <div className="text-2xl font-bold text-green-600">15K+</div>
            <div className="text-sm text-muted-foreground">Aktif Öğrenci</div>
          </Card>
          <Card className="text-center p-4">
            <div className="text-2xl font-bold text-purple-600">25+</div>
            <div className="text-sm text-muted-foreground">Uzman Eğitmen</div>
          </Card>
          <Card className="text-center p-4">
            <div className="text-2xl font-bold text-orange-600">4.8</div>
            <div className="text-sm text-muted-foreground">Ortalama Puan</div>
          </Card>
        </div>

        {/* Learning Paths */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Öğrenme Yolları</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learningPaths.map((path) => (
              <Card key={path.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{path.level}</Badge>
                    <Target className="h-5 w-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{path.title}</CardTitle>
                  <CardDescription>{path.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{path.courses} kurs</span>
                      <span>{path.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{path.students} öğrenci</span>
                      <span className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        Aktif
                      </span>
                    </div>
                    {path.progress > 0 && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>İlerleme</span>
                          <span>{path.progress}%</span>
                        </div>
                        <Progress value={path.progress} className="h-2" />
                      </div>
                    )}
                    <Button className="w-full">
                      {path.progress > 0 ? 'Devam Et' : 'Başla'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Kurs ara..."
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

          {/* Category and Level Filters */}
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Kategori</h3>
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
            <div>
              <h3 className="text-sm font-medium mb-2">Seviye</h3>
              <div className="flex flex-wrap gap-2">
                {levels.map((level) => (
                  <Button
                    key={level}
                    variant={selectedLevel === level ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLevel(level)}
                  >
                    {level}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge className={course.isFree ? "bg-green-600" : "bg-blue-600"}>
                    {course.level}
                  </Badge>
                  {course.isPopular && (
                    <Badge className="bg-orange-600">
                      Popüler
                    </Badge>
                  )}
                </div>
                <Button 
                  size="sm" 
                  className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                >
                  <Play className="h-4 w-4" />
                </Button>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {course.category}
                  </Badge>
                  <div className="text-right">
                    {course.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {course.originalPrice}
                      </span>
                    )}
                    <div className={`font-bold text-lg ${course.isFree ? 'text-green-600' : 'text-blue-600'}`}>
                      {course.price}
                    </div>
                  </div>
                </div>
                <CardTitle className="line-clamp-2 text-lg">
                  {course.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {course.instructor}
                    </span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {course.students}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {course.duration}
                    </span>
                    <span className="flex items-center">
                      <BookOpen className="h-3 w-3 mr-1" />
                      {course.lessons} ders
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Tamamlanma Oranı</span>
                      <span>{course.completionRate}%</span>
                    </div>
                    <Progress value={course.completionRate} className="h-2" />
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {course.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full">
                    {course.isFree ? 'Ücretsiz Başla' : 'Kursa Katıl'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Daha Fazla Kurs Yükle
          </Button>
        </div>

        {/* Instructor Spotlight */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Öne Çıkan Eğitmenler</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Dr. Mehmet Yılmaz',
                title: 'Finansal Danışman',
                experience: '15+ yıl deneyim',
                courses: 8,
                students: 12500,
                rating: 4.9
              },
              {
                name: 'Ayşe Kaya',
                title: 'Teknik Analiz Uzmanı',
                experience: '12+ yıl deneyim',
                courses: 6,
                students: 8900,
                rating: 4.8
              },
              {
                name: 'Can Özkan',
                title: 'Blockchain Uzmanı',
                experience: '8+ yıl deneyim',
                courses: 4,
                students: 5600,
                rating: 4.7
              }
            ].map((instructor, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {instructor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{instructor.name}</CardTitle>
                  <CardDescription>{instructor.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>{instructor.experience}</div>
                    <div>{instructor.courses} kurs • {instructor.students} öğrenci</div>
                    <div className="flex items-center justify-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span>{instructor.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationPage

