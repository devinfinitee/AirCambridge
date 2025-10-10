import JetCard from '../JetCard'
import jet1 from '@assets/stock_images/luxury_private_jet_e_68c499e9.jpg'

export default function JetCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <JetCard
        id="1"
        name="Gulfstream G700"
        category="Heavy Jet"
        capacity={19}
        range="7,500 nm"
        speed="Mach 0.925"
        hourlyRate={12500}
        image={jet1}
        onViewDetails={(id) => console.log('View details:', id)}
      />
    </div>
  )
}
