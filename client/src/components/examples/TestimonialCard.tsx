import TestimonialCard from '../TestimonialCard'

export default function TestimonialCardExample() {
  return (
    <div className="p-8 max-w-md">
      <TestimonialCard
        quote="AirCambridge Jet provides an unmatched level of service. Every detail is perfect, making business travel a true pleasure."
        author="Sarah Johnson"
        role="CEO, Tech Innovations Inc."
        rating={5}
      />
    </div>
  )
}
