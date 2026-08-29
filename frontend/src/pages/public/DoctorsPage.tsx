import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Badge } from '../../components/common/Badge';
import { Search, Stethoscope, Star, MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';

const mockDoctors = [
  {
    id: '1',
    name: 'Dr. Sarah Jenkins',
    specialization: 'Cardiology',
    qualifications: 'MD, FACC - Harvard Medical School',
    experience: '14 years',
    rating: 4.9,
    reviewsCount: 38,
    fee: 120,
    clinic: 'Boston Heart & Vascular Institute',
    location: 'Boston, MA',
    availableDays: 'Mon - Fri',
    avatarText: 'SJ',
  },
  {
    id: '2',
    name: 'Dr. Marcus Vance',
    specialization: 'Neurology',
    qualifications: 'MD, PhD - Johns Hopkins University',
    experience: '11 years',
    rating: 4.8,
    reviewsCount: 29,
    fee: 140,
    clinic: 'Vance Neurology Center',
    location: 'New York, NY',
    availableDays: 'Tue, Thu, Sat',
    avatarText: 'MV',
  },
  {
    id: '3',
    name: 'Dr. Anita Desai',
    specialization: 'General Medicine',
    qualifications: 'MD Internal Medicine - Stanford University',
    experience: '8 years',
    rating: 5.0,
    reviewsCount: 52,
    fee: 75,
    clinic: 'Desai Family & General Clinic',
    location: 'Palo Alto, CA',
    availableDays: 'Mon - Sat',
    avatarText: 'AD',
  },
];

export const DoctorsPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const specialties = ['All', 'Cardiology', 'Neurology', 'General Medicine', 'Pediatrics', 'Dermatology'];

  const filteredDoctors = mockDoctors.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(search.toLowerCase()) || doc.specialization.toLowerCase().includes(search.toLowerCase());
    const matchesSpec = selectedSpecialty === 'All' || doc.specialization === selectedSpecialty;
    return matchesSearch && matchesSpec;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Find & Book Top Doctors
        </h1>
        <p className="text-slate-500 text-sm max-w-2xl">
          Search licensed physicians, review qualifications and patient feedback, and book consultation slots instantly.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Input
            placeholder="Search doctors by name, specialty, or clinic..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            leftIcon={<Search className="w-4 h-4" />}
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
          {specialties.map((spec) => (
            <button
              key={spec}
              onClick={() => setSelectedSpecialty(spec)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedSpecialty === spec
                  ? 'bg-brand-500 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {spec}
            </button>
          ))}
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doc) => (
          <Card key={doc.id} hoverEffect className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-500 text-white font-bold flex items-center justify-center shadow-md shadow-brand-500/20">
                    {doc.avatarText}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{doc.name}</h3>
                    <p className="text-xs font-semibold text-brand-600">{doc.specialization}</p>
                  </div>
                </div>
                <Badge variant="success" size="sm">
                  ★ {doc.rating} ({doc.reviewsCount})
                </Badge>
              </div>

              <div className="space-y-2 text-xs text-slate-600 border-t border-b border-slate-100 py-3">
                <p className="font-medium text-slate-800">{doc.qualifications}</p>
                <div className="flex items-center gap-2 text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{doc.clinic}, {doc.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>Available: {doc.availableDays}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div>
                <span className="text-[11px] text-slate-400 block font-medium">Consultation Fee</span>
                <span className="text-lg font-extrabold text-slate-900">${doc.fee}</span>
              </div>
              <Link to="/login">
                <Button size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Book Slot
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
