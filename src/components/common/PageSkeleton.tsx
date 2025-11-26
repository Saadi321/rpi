import { motion } from "framer-motion";

export const PageSkeleton = () => {
    return (
        <div className="min-h-screen bg-slate-900">
            {/* Navbar Skeleton */}
            <div className="h-20 border-b border-white/10 flex items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="w-32 h-8 bg-white/5 rounded animate-pulse" />
                <div className="hidden md:flex gap-8">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-20 h-4 bg-white/5 rounded animate-pulse" />
                    ))}
                </div>
                <div className="w-24 h-10 bg-white/5 rounded animate-pulse" />
            </div>

            {/* Hero Skeleton */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-3xl space-y-8">
                    <div className="space-y-4">
                        <div className="w-3/4 h-16 bg-white/5 rounded animate-pulse" />
                        <div className="w-1/2 h-16 bg-white/5 rounded animate-pulse" />
                    </div>

                    <div className="space-y-3">
                        <div className="w-full h-4 bg-white/5 rounded animate-pulse" />
                        <div className="w-full h-4 bg-white/5 rounded animate-pulse" />
                        <div className="w-2/3 h-4 bg-white/5 rounded animate-pulse" />
                    </div>

                    <div className="flex gap-4 pt-4">
                        <div className="w-40 h-12 bg-white/5 rounded animate-pulse" />
                        <div className="w-40 h-12 bg-white/5 rounded animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    );
};
