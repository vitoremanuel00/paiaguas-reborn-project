
import { Card } from '@/components/ui/card';

const PartnerSection = () => {
  const partners = [
    { id: 1, name: 'WWF Brasil', logo: 'WWF' },
    { id: 2, name: 'SOS Pantanal', logo: 'SOS' },
    { id: 3, name: 'UFMT', logo: 'UFMT' },
    { id: 4, name: 'Embrapa Pantanal', logo: 'EMB' },
    { id: 5, name: 'ICMBio', logo: 'ICM' },
    { id: 6, name: 'Governo do Estado de Mato Grosso', logo: 'MT' }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-paiaguas mb-4">Nossos Parceiros</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Trabalhamos em colaboração com organizações comprometidas com a conservação e o desenvolvimento sustentável.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map(partner => (
            <Card 
              key={partner.id} 
              className="flex items-center justify-center p-6 h-32 border hover:border-paiaguas transition-colors"
            >
              <div className="text-center">
                <div className="font-bold text-xl text-paiaguas mb-1">{partner.logo}</div>
                <div className="text-sm text-gray-600">{partner.name}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
