import React from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { SearchProps } from './SearchTypes';

export const Search: React.FC<SearchProps> = ({ value, onChange, placeholder = 'Search announcements...' }) => {
    return (
        <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="pl-10 pr-4 py-2 w-full md:w-80"
            />
        </div>
    );
};
