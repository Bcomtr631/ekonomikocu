import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Progress } from '@/components/ui/progress'
import { 
  User, 
  Settings, 
  Award, 
  BookOpen, 
  TrendingUp,
  MessageCircle,
  Eye,
  Calendar,
  Edit,
  Save,
  X,
  Star,
  Target,
  PieChart,
  BarChart3,
  Shield,
  Bell,
  CreditCard,
  Download
} from 'lucide-react'

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  const userProfile = {
    name: 'Ahmet Yılmaz',
    email: 'ahmet.yilmaz@email.com',
    phone: '+90 532 123 45 67',
    location: 'İstanbul, Türkiye',
    joinDate: 'Ocak 2023',
    bio: 'Finansal piyasalarda 8 yıllık deneyime sahip yatırımcı. Teknik analiz ve portföy yönetimi konularında uzmanlaşmış.',
    level: 'Uzman Yatırımcı',
    reputation: 2450,
    avatar: 'AY'
  }

  const stats = [
    { label: 'Toplam Gönderi', value: '156', icon: MessageCircle },
    { label: 'Toplam Görüntülenme', value: '45.2K', icon: Eye },
    { label: 'Tamamlanan Kurs', value: '12', icon: BookOpen },
    { label: 'Kazanılan Rozet', value: '8', icon: Award }
  ]

  const achievements = [
    { name: 'İlk Gönderi', description: 'İlk gönderinizi paylaştınız', earned: true, date: 'Ocak 2023' },
    { name: 'Popüler Yazar', description: '1000+ görüntülenme aldınız', earned: true, date: 'Mart 2023' },
    { name: 'Eğitim Tutkunu', description: '10 kursu tamamladınız', earned: true, date: 'Haziran 2023' },
    { name: 'Topluluk Lideri', description: '100+ beğeni aldınız', earned: true, date: 'Ağustos 2023' },
    { name: 'Analiz Uzmanı', description: '50+ analiz paylaştınız', earned: false, progress: 75 },
    { name: 'Mentor', description: '25+ kişiye yardım ettiniz', earned: false, progress: 40 }
  ]

  const recentActivity = [
    {
      type: 'post',
      title: 'BIST100 Teknik Analizi paylaştı',
      time: '2 saat önce',
      engagement: '45 beğeni, 12 yorum'
    },
    {
      type: 'course',
      title: 'Forex Trading Stratejileri kursunu tamamladı',
      time: '1 gün önce',
      engagement: 'Sertifika kazandı'
    },
    {
      type: 'comment',
      title: 'Kripto Para Analizi gönderisine yorum yaptı',
      time: '2 gün önce',
      engagement: '8 beğeni aldı'
    },
    {
      type: 'achievement',
      title: 'Topluluk Lideri rozetini kazandı',
      time: '1 hafta önce',
      engagement: 'Yeni seviye'
    }
  ]

  const portfolio = [
    { asset: 'BIST100 ETF', allocation: 35, value: '₺52,500', change: '+2.3%', isPositive: true },
    { asset: 'Teknoloji Hisseleri', allocation: 25, value: '₺37,500', change: '+5.7%', isPositive: true },
    { asset: 'Altın', allocation: 20, value: '₺30,000', change: '+1.2%', isPositive: true },
    { asset: 'Döviz', allocation: 15, value: '₺22,500', change: '-0.8%', isPositive: false },
    { asset: 'Kripto', allocation: 5, value: '₺7,500', change: '+12.4%', isPositive: true }
  ]

  const learningProgress = [
    { course: 'Teknik Analiz Masterclass', progress: 85, status: 'Devam Ediyor' },
    { course: 'Portföy Yönetimi', progress: 100, status: 'Tamamlandı' },
    { course: 'Risk Yönetimi', progress: 60, status: 'Devam Ediyor' },
    { course: 'Kripto Para Analizi', progress: 100, status: 'Tamamlandı' }
  ]

  const tabs = [
    { id: 'overview', label: 'Genel Bakış', icon: User },
    { id: 'portfolio', label: 'Portföy', icon: PieChart },
    { id: 'learning', label: 'Öğrenme', icon: BookOpen },
    { id: 'activity', label: 'Aktivite', icon: BarChart3 },
    { id: 'settings', label: 'Ayarlar', icon: Settings }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">{userProfile.avatar}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-3xl font-bold">{userProfile.name}</h1>
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500">
                    {userProfile.level}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-3">{userProfile.bio}</p>
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {userProfile.joinDate} tarihinde katıldı
                  </span>
                  <span className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-400" />
                    {userProfile.reputation} puan
                  </span>
                </div>
              </div>
              <Button 
                variant={isEditing ? "outline" : "default"}
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? <X className="mr-2 h-4 w-4" /> : <Edit className="mr-2 h-4 w-4" />}
                {isEditing ? 'İptal' : 'Düzenle'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <Icon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-muted p-1 rounded-lg">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-2 h-5 w-5" />
                  Başarılar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        achievement.earned ? 'bg-yellow-100' : 'bg-gray-100'
                      }`}>
                        <Award className={`h-5 w-5 ${
                          achievement.earned ? 'text-yellow-600' : 'text-gray-400'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{achievement.name}</div>
                        <div className="text-sm text-muted-foreground">{achievement.description}</div>
                        {achievement.earned ? (
                          <div className="text-xs text-green-600">{achievement.date}</div>
                        ) : (
                          <div className="mt-2">
                            <Progress value={achievement.progress} className="h-2" />
                            <div className="text-xs text-muted-foreground mt-1">
                              {achievement.progress}% tamamlandı
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Son Aktiviteler
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.type === 'post' ? 'bg-blue-100' :
                        activity.type === 'course' ? 'bg-green-100' :
                        activity.type === 'comment' ? 'bg-purple-100' : 'bg-yellow-100'
                      }`}>
                        {activity.type === 'post' && <MessageCircle className="h-4 w-4 text-blue-600" />}
                        {activity.type === 'course' && <BookOpen className="h-4 w-4 text-green-600" />}
                        {activity.type === 'comment' && <MessageCircle className="h-4 w-4 text-purple-600" />}
                        {activity.type === 'achievement' && <Award className="h-4 w-4 text-yellow-600" />}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{activity.title}</div>
                        <div className="text-xs text-muted-foreground">{activity.time}</div>
                        <div className="text-xs text-green-600">{activity.engagement}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'portfolio' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <PieChart className="mr-2 h-5 w-5" />
                    Portföy Dağılımı
                  </span>
                  <div className="text-right">
                    <div className="text-2xl font-bold">₺150,000</div>
                    <div className="text-sm text-green-600">+3.2% (₺4,680)</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {portfolio.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-4 h-4 rounded-full bg-blue-600" style={{
                          backgroundColor: `hsl(${index * 60}, 70%, 50%)`
                        }}></div>
                        <div>
                          <div className="font-medium">{item.asset}</div>
                          <div className="text-sm text-muted-foreground">%{item.allocation}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{item.value}</div>
                        <div className={`text-sm ${item.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                          {item.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'learning' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Öğrenme İlerlemesi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {learningProgress.map((course, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{course.course}</span>
                        <Badge variant={course.status === 'Tamamlandı' ? 'default' : 'secondary'}>
                          {course.status}
                        </Badge>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                      <div className="text-sm text-muted-foreground">
                        %{course.progress} tamamlandı
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profil Bilgileri</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Ad Soyad</label>
                    <Input defaultValue={userProfile.name} />
                  </div>
                  <div>
                    <label className="text-sm font-medium">E-posta</label>
                    <Input defaultValue={userProfile.email} />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Telefon</label>
                    <Input defaultValue={userProfile.phone} />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Konum</label>
                    <Input defaultValue={userProfile.location} />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Biyografi</label>
                  <Textarea defaultValue={userProfile.bio} rows={3} />
                </div>
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Değişiklikleri Kaydet
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="mr-2 h-5 w-5" />
                  Bildirim Ayarları
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  'Yeni mesajlar',
                  'Gönderi beğenileri',
                  'Yorum bildirimleri',
                  'Kurs güncellemeleri',
                  'Piyasa uyarıları'
                ].map((setting, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span>{setting}</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Güvenlik
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full">
                  Şifre Değiştir
                </Button>
                <Button variant="outline" className="w-full">
                  İki Faktörlü Kimlik Doğrulama
                </Button>
                <Button variant="outline" className="w-full">
                  Oturum Geçmişi
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfilePage

