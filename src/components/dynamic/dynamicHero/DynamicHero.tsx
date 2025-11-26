import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DynamicHeroProps } from './DynamicHeroTypes';

export const DynamicHero: React.FC<DynamicHeroProps> = ({
    title,
    subtitle,
    description,
    badge,
    primaryButtonText,
    secondaryButtonText,
    backgroundImage = "https://picsum.photos/seed/campus_hero/1920/1080",
    primaryButtonLink,
    secondaryButtonLink
}) => {
    return (
        <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900 py-20">
            <div
                className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
                style={{ backgroundImage: `url("${backgroundImage}")` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-0" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {badge && (
                        <Badge className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-1 text-sm">
                            {badge}
                        </Badge>
                    )}
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        {title} <span className="text-secondary">{subtitle}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-light">
                        {description}
                    </p>
                    {(primaryButtonText || secondaryButtonText) && (
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            {primaryButtonText && primaryButtonLink && (
                                <Link to={primaryButtonLink}>
                                    <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white border-0">
                                        {primaryButtonText}
                                    </Button>
                                </Link>
                            )}
                            {secondaryButtonText && secondaryButtonLink && (
                                <Link to={secondaryButtonLink}>
                                    <Button size="lg" variant="outline" className="text-white border-white bg-transparent hover:bg-white hover:text-slate-900">
                                        {secondaryButtonText}
                                    </Button>
                                </Link>
                            )}
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};
