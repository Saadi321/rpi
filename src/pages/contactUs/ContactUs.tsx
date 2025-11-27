import { Contact, DynamicHero } from '@/components'

export const ContactUs = () => {
    return (
        <div>
            <DynamicHero
                title="Get in"
                subtitle="Touch"
                description="Rawalpindi Polytechnic Institute is a premier seat of learning, dedicated to producing skilled professionals who drive the nation's industrial growth."
                badge="Since 1995"
            />
            <Contact />
        </div>
    )
}
