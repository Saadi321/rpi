import React, { useState, useMemo } from 'react';
import { Megaphone, Pin, Award, FileText, Calendar, Mic } from 'lucide-react';
import {
    DynamicHero,
    AnnoucementList,
    ANNOUNCEMENTS_DATA,
    Search,
    Filters,
    FILTER_OPTIONS
} from '@/components';

const getIcon = (tag: string) => {
    switch (tag) {
        case 'Admissions': return Pin;
        case 'Scholarships': return Award;
        case 'Exams': return FileText;
        case 'Events': return Calendar;
        case 'Seminars': return Mic;
        default: return Megaphone;
    }
};

export const AnnouncementsPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('all');

    // Filter and search announcements
    const filteredAnnouncements = useMemo(() => {
        return ANNOUNCEMENTS_DATA.filter((announcement) => {
            // Filter by category
            const matchesFilter = selectedFilter === 'all' ||
                announcement.tag.toLowerCase() === selectedFilter.toLowerCase();

            // Filter by search query
            const matchesSearch = searchQuery === '' ||
                announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                announcement.tag.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesFilter && matchesSearch;
        });
    }, [searchQuery, selectedFilter]);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
            <DynamicHero
                title="Latest News &"
                subtitle="Announcements"
                description="Stay updated with the latest happenings, events, and important notices from Rawalpindi Polytechnic Institute."
                badge="Notice Board"
                primaryButtonText="View Archive"
                secondaryButtonText="Subscribe"
                primaryButtonLink="/announcements/archive"
                secondaryButtonLink="/contact"
            />

            <section className="bg-white py-20 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#228B22 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

                <div className="container mx-auto px-4 md:px-6 relative z-20">
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                            </div>
                            <span className="text-secondary font-bold tracking-widest text-xs uppercase bg-green-50 px-2 py-1 rounded border border-green-100">
                                All Announcements
                            </span>
                        </div>

                        {/* Search and Filters */}
                        <div className="flex flex-col md:flex-row gap-4 mb-8">
                            <div className="flex-1">
                                <Search
                                    value={searchQuery}
                                    onChange={setSearchQuery}
                                    placeholder="Search announcements..."
                                />
                            </div>
                        </div>

                        <Filters
                            options={FILTER_OPTIONS}
                            selected={selectedFilter}
                            onChange={setSelectedFilter}
                        />
                    </div>

                    {/* Announcements Grid */}
                    {filteredAnnouncements.length > 0 ? (
                        <AnnoucementList
                            announcements={filteredAnnouncements}
                            getIcon={getIcon}
                        />
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-slate-500 text-lg">No announcements found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};
