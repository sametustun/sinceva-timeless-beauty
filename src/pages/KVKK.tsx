import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Send } from 'lucide-react';

const KVKK: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    requestType: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('KVKK Form submitted:', formData);
    // Here you would typically send the form data to your backend
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Layout>
      <div className="w-full h-[40vh] bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">KVKK Başvuru Formu</h1>
          <p className="text-xl opacity-90">Kişisel verilerinizle ilgili haklarınızı kullanın</p>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Information Section */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#ef2b2d]" />
                  Başvuru Hakları
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  KVKK'nın 11. maddesi uyarınca aşağıdaki haklarınızı kullanabilirsiniz:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#ef2b2d] rounded-full mt-2 flex-shrink-0"></span>
                    Kişisel veri işlenip işlenmediğini öğrenme
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#ef2b2d] rounded-full mt-2 flex-shrink-0"></span>
                    İşlenen veriler hakkında bilgi talep etme
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#ef2b2d] rounded-full mt-2 flex-shrink-0"></span>
                    Verilerin düzeltilmesini isteme
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#ef2b2d] rounded-full mt-2 flex-shrink-0"></span>
                    Verilerin silinmesini isteme
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#ef2b2d] rounded-full mt-2 flex-shrink-0"></span>
                    Verilerin aktarıldığı kişileri öğrenme
                  </li>
                </ul>
                
                <Separator className="my-4" />
                
                <div>
                  <h4 className="font-semibold mb-2">Başvuru Süreci</h4>
                  <p className="text-sm text-gray-600">
                    Başvurularınız 30 gün içinde değerlendirilir ve size geri dönüş yapılır. 
                    Başvuru ücretsizdir, ancak kopya çıkarma gibi ek maliyetler olabilir.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Form Section */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Başvuru Formu</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Ad *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="surname">Soyad *</Label>
                      <Input
                        id="surname"
                        value={formData.surname}
                        onChange={(e) => handleInputChange('surname', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">E-posta *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="requestType">Başvuru Türü *</Label>
                    <Select onValueChange={(value) => handleInputChange('requestType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Başvuru türünü seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="access">Kişisel veri işlenip işlenmediğini öğrenme</SelectItem>
                        <SelectItem value="info">İşlenen veriler hakkında bilgi talep etme</SelectItem>
                        <SelectItem value="correction">Verilerin düzeltilmesini isteme</SelectItem>
                        <SelectItem value="deletion">Verilerin silinmesini isteme</SelectItem>
                        <SelectItem value="transfer">Veri aktarımı hakkında bilgi</SelectItem>
                        <SelectItem value="objection">Otomatik işleme itiraz</SelectItem>
                        <SelectItem value="damage">Zarar giderilmesi talebi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="description">Başvuru Detayı *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Lütfen başvurunuzu detaylı olarak açıklayın..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#ef2b2d] hover:bg-[#ef2b2d]/90"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Başvuru Gönder
                  </Button>
                </form>

                <div className="mt-4 text-xs text-gray-500">
                  <p>
                    * İşaretli alanlar zorunludur. Başvurunuz 30 gün içinde değerlendirilecektir.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default KVKK;