import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  MessageCircle, 
  Users, 
  TrendingUp, 
  Heart, 
  Share2, 
  Plus,
  Search,
  Filter,
  Clock,
  Eye,
  ThumbsUp,
  MessageSquare,
  Award,
  Star,
  Calendar,
  MapPin
} from 'lucide-react'

const CommunityPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tümü')
  const [showNewPost, setShowNewPost] = useState(false)

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [topMembers, setTopMembers] = useState([])
  const [membersLoading, setMembersLoading] = useState(true)
  const [membersError, setMembersError] = useState(null)

  const [upcomingEvents, setUpcomingEvents] = useState([])
  const [eventsLoading, setEventsLoading] = useState(true)
  const [eventsError, setEventsError] = useState(null)

  const categories = [
    'Tümü', 'Genel Tartışma', 'Yatırım Tavsiyeleri', 'Teknik Analiz', 'Borsa', 'Kripto', 'Forex', 'Soru-Cevap'
  ]

  useEffect(() => {
    setLoading(true)
    fetch('/api/community/posts')
      .then((res) => {
        if (!res.ok) throw new Error('Veri alınamadı')
        return res.json()
      })
      .then((data) => {
        setPosts(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    setMembersLoading(true)
    fetch('/api/community/top-members')
      .then((res) => {
        if (!res.ok) throw new Error('Üye verisi alınamadı')
        return res.json()
      })
      .then((data) => {
        setTopMembers(data)
        setMembersLoading(false)
      })
      .catch((err) => {
        setMembersError(err.message)
        setMembersLoading(false)
      })
  }, [])

  useEffect(() => {
    setEventsLoading(true)
    fetch('/api/community/upcoming-events')
      .then((res) => {
        if (!res.ok) throw new Error('Etkinlik verisi alınamadı')
        return res.json()
      })
      .then((data) => {
        setUpcomingEvents(data)
        setEventsLoading(false)
      })
      .catch((err) => {
        setEventsError(err.message)
        setEventsLoading(false)
      })
  }, [])

  const filteredPosts = posts.filter(post => 
    selectedCategory === 'Tümü' || post.category === selectedCategory
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Topluluk</h1>
          <p className="text-xl text-muted-foreground">
            Finansal konularda tartışın, deneyim paylaşın ve birlikte öğrenin
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center p-4">
            <Users className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <div className="text-2xl font-bold">125K+</div>
            <div className="text-sm text-muted-foreground">Aktif Üye</div>
          </Card>
          <Card className="text-center p-4">
            <MessageCircle className="h-8 w-8 mx-auto mb-2 text-green-600" />
            <div className="text-2xl font-bold">15K+</div>
            <div className="text-sm text-muted-foreground">Günlük Mesaj</div>
          </Card>
          <Card className="text-center p-4">
            <TrendingUp className="h-8 w-8 mx-auto mb-2 text-purple-600" />
            <div className="text-2xl font-bold">2.5K+</div>
            <div className="text-sm text-muted-foreground">Günlük Gönderi</div>
          </Card>
          <Card className="text-center p-4">
            <Award className="h-8 w-8 mx-auto mb-2 text-orange-600" />
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm text-muted-foreground">Uzman Üye</div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* New Post Button */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button 
                  onClick={() => setShowNewPost(!showNewPost)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Yeni Gönderi
                </Button>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Gönderilerde ara..." className="pl-10 w-64" />
                </div>
              </div>
              <Button variant="outline" size="sm">
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

            {/* New Post Form */}
            {showNewPost && (
              <Card>
                <CardHeader>
                  <CardTitle>Yeni Gönderi Oluştur</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Başlık" />
                  <select className="w-full p-2 border rounded-lg">
                    <option>Kategori Seçin</option>
                    {categories.slice(1).map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  <Textarea placeholder="İçeriğinizi yazın..." rows={4} />
                  <Input placeholder="Etiketler (virgülle ayırın)" />
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setShowNewPost(false)}>
                      İptal
                    </Button>
                    <Button>Paylaş</Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Posts */}
            <div className="space-y-6">
              {loading ? (
                <div>Yükleniyor...</div>
              ) : error ? (
                <div className="text-red-500">Hata: {error}</div>
              ) : filteredPosts.length === 0 ? (
                <div>Gösterilecek gönderi yok.</div>
              ) : (
                filteredPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              {post.author.avatar}
                            </span>
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-semibold">{post.author.name}</span>
                              <Badge variant="secondary" className="text-xs">
                                {post.author.level}
                              </Badge>
                              {post.isHot && (
                                <Badge className="bg-red-600 text-xs">HOT</Badge>
                              )}
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <span>{post.publishedAt}</span>
                              <span>•</span>
                              <Badge variant="outline" className="text-xs">
                                {post.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Star className="h-3 w-3 mr-1 text-yellow-400" />
                            {post.author.reputation}
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-xl mt-3">{post.title}</CardTitle>
                      <CardDescription className="text-base">
                        {post.content}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-6">
                            <button className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
                              <ThumbsUp className="h-4 w-4" />
                              <span>{post.likes}</span>
                            </button>
                            <button className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
                              <MessageSquare className="h-4 w-4" />
                              <span>{post.comments}</span>
                            </button>
                            <div className="flex items-center space-x-2 text-muted-foreground">
                              <Eye className="h-4 w-4" />
                              <span>{post.views}</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" size="lg">
                Daha Fazla Gönderi Yükle
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Members */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-2 h-5 w-5" />
                  En Aktif Üyeler
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {membersLoading ? (
                    <div>Yükleniyor...</div>
                  ) : membersError ? (
                    <div className="text-red-500">Hata: {membersError}</div>
                  ) : topMembers.length === 0 ? (
                    <div>Üye bulunamadı.</div>
                  ) : (
                    topMembers.map((member, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="relative">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                              <span className="text-white font-semibold text-xs">
                                {member.avatar}
                              </span>
                            </div>
                            <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
                              member.badge === 'Altın' ? 'bg-yellow-400' :
                              member.badge === 'Gümüş' ? 'bg-gray-400' : 'bg-orange-400'
                            }`}></div>
                          </div>
                          <div>
                            <div className="font-medium text-sm">{member.name}</div>
                            <div className="text-xs text-muted-foreground">{member.level}</div>
                          </div>
                        </div>
                        <div className="text-right text-xs">
                          <div className="font-medium">{member.reputation}</div>
                          <div className="text-muted-foreground">{member.posts} gönderi</div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Yaklaşan Etkinlikler
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {eventsLoading ? (
                    <div>Yükleniyor...</div>
                  ) : eventsError ? (
                    <div className="text-red-500">Hata: {eventsError}</div>
                  ) : upcomingEvents.length === 0 ? (
                    <div>Etkinlik bulunamadı.</div>
                  ) : (
                    upcomingEvents.map((event) => (
                      <div key={event.id} className="border rounded-lg p-3">
                        <div className="font-medium text-sm mb-1">{event.title}</div>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-2">
                          <Calendar className="h-3 w-3" />
                          <span>{event.date}</span>
                          <Clock className="h-3 w-3" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">
                            {event.type}
                          </Badge>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Users className="h-3 w-3 mr-1" />
                            {event.participants}
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Sunucu: {event.host}
                        </div>
                        <Button size="sm" className="w-full mt-2">
                          Katıl
                        </Button>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Community Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle>Topluluk Kuralları</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>• Saygılı ve yapıcı olun</div>
                  <div>• Yatırım tavsiyesi değil, görüş paylaşın</div>
                  <div>• Spam ve reklam yasaktır</div>
                  <div>• Doğrulanmamış bilgi paylaşmayın</div>
                  <div>• Kişisel saldırılardan kaçının</div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  Tüm Kuralları Gör
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunityPage
