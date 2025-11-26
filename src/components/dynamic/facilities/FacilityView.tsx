import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FacilityItem } from './FacilityViewTypes';

interface FacilityViewProps {
    facility: FacilityItem;
}

export const FacilityView: React.FC<FacilityViewProps> = ({ facility }) => {
    return (
        <Card className="overflow-hidden hover:shadow-md transition-shadow border-0 shadow-sm">
            <div className="h-48 overflow-hidden">
                <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
            </div>
            <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                    <facility.icon className="w-5 h-5 text-secondary" />
                    <h3 className="font-bold text-lg">{facility.title}</h3>
                </div>
                <p className="text-slate-500 text-sm">
                    {facility.description}
                </p>
            </CardContent>
        </Card>
    );
};
