import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";

export const CallToAction = () => (
    <section className="py-20 bg-white text-center border-t border-slate-100">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Ready to Start Your Professional Journey?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Join thousands of successful graduates who started their careers at RPI. Secure your future today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">

                <Link to="/admission">
                    <Button size="lg" className="px-8 bg-secondary hover:bg-secondary/90">
                        Apply Now
                    </Button>
                </Link>

                <Link to="/contact">
                    <Button size="lg" variant="outline" className="px-8">
                        Contact Admission Office
                    </Button>
                </Link>

            </div>
        </div>
    </section>
);
