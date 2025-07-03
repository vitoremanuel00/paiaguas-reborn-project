
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Checkbox } from '@/components/ui/checkbox';
import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    newsletter: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, newsletter: checked }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Mensagem enviada!",
      description: "Agradecemos seu contato. Retornaremos em breve.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      newsletter: false
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-paiaguas py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Entre em Contato</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Estamos à disposição para responder suas dúvidas e receber suas sugestões
            </p>
          </div>
        </section>

        {/* Contact Info & Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
    <h2 className="text-3xl font-bold text-paiaguas mb-6">Fale Conosco</h2>
    <p className="mb-4 text-gray-700">
      Estamos à disposição para dúvidas, parcerias e propostas. Entre em contato conosco:
    </p>

    <div className="space-y-4 text-gray-700">
      <p><strong>Endereço:</strong> Rua Carrara, 28 - Jardim Itália, Cuiabá/MT</p>
      <p><strong>E-mail:</strong> contato@institutopaiaguas.org.br</p>
      <p><strong>Telefone:</strong> (65) 3644-1685</p>
      <p><strong>Site:</strong> www.institutopaiaguas.org.br</p>
    </div>
  </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-paiaguas mb-6 text-center">Como Chegar</h2>
              <div className="rounded-lg overflow-hidden shadow-lg">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240.17478476253223!2d-56.058540883602255!3d-15.602514881858822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db1afc8695555%3A0xa6ff2ac09aff21f7!2sInstituto%20Paiagu%C3%A1s!5e0!3m2!1spt-BR!2sbr!4v1751485347912!5m2!1spt-BR!2sbr"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
