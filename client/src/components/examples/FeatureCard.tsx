import FeatureCard from '../FeatureCard'
import { Globe } from 'lucide-react'

export default function FeatureCardExample() {
  return (
    <div className="p-8">
      <FeatureCard
        icon={Globe}
        title="Global Coverage"
        description="Access to over 5,000 destinations worldwide"
      />
    </div>
  )
}
