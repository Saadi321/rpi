import React from 'react';
import { SummaryStat as SummaryStatType } from './SummaryStatTypes';

interface SummaryStatProps {
    stat: SummaryStatType;
}

export const SummaryStat: React.FC<SummaryStatProps> = ({ stat }) => {
    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="bg-secondary/10 p-4 rounded-full">
                <stat.icon className="w-6 h-6 text-secondary" />
            </div>
            <div>
                <h4 className="font-bold text-2xl text-slate-900">{stat.value}</h4>
                <p className="text-sm text-slate-500 uppercase font-medium">{stat.label}</p>
            </div>
        </div>
    );
};
