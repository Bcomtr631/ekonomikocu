import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { 
  Calculator, 
  PieChart, 
  TrendingUp, 
  Target,
  DollarSign,
  Percent,
  Calendar,
  BarChart3,
  LineChart,
  Zap,
  Shield,
  Clock,
  ArrowUpDown,
  CreditCard,
  Home,
  Car,
  Briefcase
} from 'lucide-react'

const ToolsPage = () => {
  const [activeCalculator, setActiveCalculator] = useState('compound')

  // Compound Interest Calculator State
  const [principal, setPrincipal] = useState(10000)
  const [rate, setRate] = useState(8)
  const [time, setTime] = useState(10)
  const [compound, setCompound] = useState(12)

  // Retirement Calculator State
  const [currentAge, setCurrentAge] = useState(30)
  const [retirementAge, setRetirementAge] = useState(65)
  const [monthlyContribution, setMonthlyContribution] = useState(1000)
  const [expectedReturn, setExpectedReturn] = useState(7)

  // Loan Calculator State
  const [loanAmount, setLoanAmount] = useState(200000)
  const [loanRate, setLoanRate] = useState(15)
  const [loanTerm, setLoanTerm] = useState(120)

  const tools = [
    {
      id: 'compound',
      title: 'Bileşik Faiz Hesaplayıcı',
      description: 'Yatırımınızın bileşik faiz ile nasıl büyüyeceğini hesaplayın',
      icon: Calculator,
      category: 'Yatırım',
      popular: true
    },
    {
      id: 'retirement',
      title: 'Emeklilik Hesaplayıcı',
      description: 'Emeklilik için ne kadar biriktirmeniz gerektiğini öğrenin',
      icon: Target,
      category: 'Planlama',
      popular: true
    },
    {
      id: 'loan',
      title: 'Kredi Hesaplayıcı',
      description: 'Kredi taksit tutarlarını ve toplam maliyeti hesaplayın',
      icon: CreditCard,
      category: 'Kredi',
      popular: false
    },
    {
      id: 'portfolio',
      title: 'Portföy Analizi',
      description: 'Portföyünüzün risk ve getiri analizini yapın',
      icon: PieChart,
      category: 'Analiz',
      popular: true
    },
    {
      id: 'currency',
      title: 'Döviz Çevirici',
      description: 'Güncel kurlarla döviz çevirisi yapın',
      icon: ArrowUpDown,
      category: 'Döviz',
      popular: false
    },
    {
      id: 'mortgage',
      title: 'Mortgage Hesaplayıcı',
      description: 'Ev kredisi taksit ve faiz hesaplamaları',
      icon: Home,
      category: 'Kredi',
      popular: false
    }
  ]

  const categories = ['Tümü', 'Yatırım', 'Planlama', 'Kredi', 'Analiz', 'Döviz']

  // Compound Interest Calculation
  const calculateCompoundInterest = () => {
    const amount = principal * Math.pow((1 + rate / 100 / compound), compound * time)
    const interest = amount - principal
    return { amount, interest }
  }

  // Retirement Calculation
  const calculateRetirement = () => {
    const yearsToRetirement = retirementAge - currentAge
    const monthsToRetirement = yearsToRetirement * 12
    const monthlyRate = expectedReturn / 100 / 12
    
    const futureValue = monthlyContribution * (Math.pow(1 + monthlyRate, monthsToRetirement) - 1) / monthlyRate
    return { futureValue, totalContributions: monthlyContribution * monthsToRetirement }
  }

  // Loan Calculation
  const calculateLoan = () => {
    const monthlyRate = loanRate / 100 / 12
    const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / (Math.pow(1 + monthlyRate, loanTerm) - 1)
    const totalPayment = monthlyPayment * loanTerm
    const totalInterest = totalPayment - loanAmount
    return { monthlyPayment, totalPayment, totalInterest }
  }

  const compoundResult = calculateCompoundInterest()
  const retirementResult = calculateRetirement()
  const loanResult = calculateLoan()

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Finansal Araçlar</h1>
          <p className="text-xl text-muted-foreground">
            Finansal kararlarınızı destekleyecek hesaplama araçları ve analizler
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <Card 
                key={tool.id} 
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  activeCalculator === tool.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setActiveCalculator(tool.id)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{tool.title}</CardTitle>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-muted-foreground">{tool.category}</span>
                          {tool.popular && (
                            <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">
                              Popüler
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>

        {/* Calculator Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {activeCalculator === 'compound' && <Calculator className="mr-2 h-5 w-5" />}
                  {activeCalculator === 'retirement' && <Target className="mr-2 h-5 w-5" />}
                  {activeCalculator === 'loan' && <CreditCard className="mr-2 h-5 w-5" />}
                  {activeCalculator === 'compound' && 'Bileşik Faiz Hesaplayıcı'}
                  {activeCalculator === 'retirement' && 'Emeklilik Hesaplayıcı'}
                  {activeCalculator === 'loan' && 'Kredi Hesaplayıcı'}
                </CardTitle>
                <CardDescription>
                  {activeCalculator === 'compound' && 'Yatırımınızın bileşik faiz ile nasıl büyüyeceğini hesaplayın'}
                  {activeCalculator === 'retirement' && 'Emeklilik için ne kadar biriktirmeniz gerektiğini öğrenin'}
                  {activeCalculator === 'loan' && 'Kredi taksit tutarlarını ve toplam maliyeti hesaplayın'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {activeCalculator === 'compound' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="principal">Başlangıç Tutarı (₺)</Label>
                        <Input
                          id="principal"
                          type="number"
                          value={principal}
                          onChange={(e) => setPrincipal(Number(e.target.value))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="rate">Yıllık Faiz Oranı (%)</Label>
                        <Input
                          id="rate"
                          type="number"
                          value={rate}
                          onChange={(e) => setRate(Number(e.target.value))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="time">Yatırım Süresi (Yıl)</Label>
                        <Input
                          id="time"
                          type="number"
                          value={time}
                          onChange={(e) => setTime(Number(e.target.value))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="compound">Bileşik Dönem (Yılda)</Label>
                        <select 
                          id="compound"
                          className="w-full p-2 border rounded-lg"
                          value={compound}
                          onChange={(e) => setCompound(Number(e.target.value))}
                        >
                          <option value={1}>Yıllık</option>
                          <option value={4}>Üç Aylık</option>
                          <option value={12}>Aylık</option>
                          <option value={365}>Günlük</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {activeCalculator === 'retirement' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="currentAge">Mevcut Yaşınız</Label>
                        <Input
                          id="currentAge"
                          type="number"
                          value={currentAge}
                          onChange={(e) => setCurrentAge(Number(e.target.value))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="retirementAge">Emeklilik Yaşı</Label>
                        <Input
                          id="retirementAge"
                          type="number"
                          value={retirementAge}
                          onChange={(e) => setRetirementAge(Number(e.target.value))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="monthlyContribution">Aylık Katkı (₺)</Label>
                        <Input
                          id="monthlyContribution"
                          type="number"
                          value={monthlyContribution}
                          onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="expectedReturn">Beklenen Getiri (%)</Label>
                        <Input
                          id="expectedReturn"
                          type="number"
                          value={expectedReturn}
                          onChange={(e) => setExpectedReturn(Number(e.target.value))}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeCalculator === 'loan' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="loanAmount">Kredi Tutarı (₺)</Label>
                        <Input
                          id="loanAmount"
                          type="number"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(Number(e.target.value))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="loanRate">Yıllık Faiz Oranı (%)</Label>
                        <Input
                          id="loanRate"
                          type="number"
                          value={loanRate}
                          onChange={(e) => setLoanRate(Number(e.target.value))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="loanTerm">Vade (Ay)</Label>
                        <Input
                          id="loanTerm"
                          type="number"
                          value={loanTerm}
                          onChange={(e) => setLoanTerm(Number(e.target.value))}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Sonuçlar
                </CardTitle>
              </CardHeader>
              <CardContent>
                {activeCalculator === 'compound' && (
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        ₺{compoundResult.amount.toLocaleString('tr-TR', { maximumFractionDigits: 0 })}
                      </div>
                      <div className="text-sm text-muted-foreground">Toplam Tutar</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Başlangıç Tutarı:</span>
                        <span>₺{principal.toLocaleString('tr-TR')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Kazanılan Faiz:</span>
                        <span className="text-green-600">₺{compoundResult.interest.toLocaleString('tr-TR', { maximumFractionDigits: 0 })}</span>
                      </div>
                      <div className="flex justify-between font-bold">
                        <span>Toplam Getiri:</span>
                        <span className="text-green-600">%{((compoundResult.interest / principal) * 100).toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeCalculator === 'retirement' && (
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">
                        ₺{retirementResult.futureValue.toLocaleString('tr-TR', { maximumFractionDigits: 0 })}
                      </div>
                      <div className="text-sm text-muted-foreground">Emeklilik Birikimi</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Toplam Katkı:</span>
                        <span>₺{retirementResult.totalContributions.toLocaleString('tr-TR')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Yatırım Getirisi:</span>
                        <span className="text-green-600">₺{(retirementResult.futureValue - retirementResult.totalContributions).toLocaleString('tr-TR', { maximumFractionDigits: 0 })}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Kalan Süre:</span>
                        <span>{retirementAge - currentAge} yıl</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeCalculator === 'loan' && (
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">
                        ₺{loanResult.monthlyPayment.toLocaleString('tr-TR', { maximumFractionDigits: 0 })}
                      </div>
                      <div className="text-sm text-muted-foreground">Aylık Taksit</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Kredi Tutarı:</span>
                        <span>₺{loanAmount.toLocaleString('tr-TR')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Toplam Faiz:</span>
                        <span className="text-red-600">₺{loanResult.totalInterest.toLocaleString('tr-TR', { maximumFractionDigits: 0 })}</span>
                      </div>
                      <div className="flex justify-between font-bold">
                        <span>Toplam Ödeme:</span>
                        <span>₺{loanResult.totalPayment.toLocaleString('tr-TR', { maximumFractionDigits: 0 })}</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2 h-5 w-5" />
                  İpuçları
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  {activeCalculator === 'compound' && (
                    <>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span>Erken başlamak bileşik faizin gücünü artırır</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span>Düzenli katkılar büyük fark yaratır</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span>Uzun vadeli yatırımlar daha karlıdır</span>
                      </div>
                    </>
                  )}
                  {activeCalculator === 'retirement' && (
                    <>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span>Gelirin %10-15'ini emeklilik için ayır</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span>Enflasyonu hesaba kat</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span>Çeşitlendirilmiş portföy oluştur</span>
                      </div>
                    </>
                  )}
                  {activeCalculator === 'loan' && (
                    <>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span>Aylık gelirin %30'unu geçme</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span>Erken ödeme faiz tasarrufu sağlar</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span>Farklı bankaları karşılaştır</span>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Tools */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Diğer Araçlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Risk Profili Testi', icon: Shield, description: 'Yatırım risk toleransınızı ölçün' },
              { name: 'Bütçe Planlayıcı', icon: PieChart, description: 'Aylık bütçenizi optimize edin' },
              { name: 'Vergi Hesaplayıcı', icon: Calculator, description: 'Yatırım vergilerinizi hesaplayın' },
              { name: 'Enflasyon Etkisi', icon: TrendingUp, description: 'Enflasyonun etkisini görün' }
            ].map((tool, index) => {
              const Icon = tool.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <Icon className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                    <h3 className="font-semibold mb-2">{tool.name}</h3>
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToolsPage

