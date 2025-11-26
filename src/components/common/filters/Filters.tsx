import React from 'react';
import { FiltersProps } from './FiltersTypes';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const Filters: React.FC<FiltersProps> = ({ options, selected, onChange }) => {
    return (
        <>
            {/* Dropdown for mobile */}
            <div className="md:hidden">
                <Select value={selected} onValueChange={onChange}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Filter by category" />
                    </SelectTrigger>
                    <SelectContent>
                        {options.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* Tabs for desktop */}
            <div className="hidden md:flex flex-wrap gap-3">
                {options.map((option) => (
                    <Button
                        key={option.value}
                        variant={selected === option.value ? 'default' : 'outline'}
                        className={`${selected === option.value
                                ? 'bg-secondary hover:bg-secondary/90 text-white'
                                : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                            } transition-all`}
                        onClick={() => onChange(option.value)}
                    >
                        {option.label}
                    </Button>
                ))}
            </div>
        </>
    );
};
