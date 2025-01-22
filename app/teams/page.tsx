import React from 'react';
import CoreTeam from '@/components/CoreTeam';
import TechnicalTeam from '@/components/TechnicalTeam';
import Image from 'next/image';
import logo from '@/public/Ecell.ico'; 
import EventManagement from '@/components/EventManagement';
import PRTeam from '@/components/PRTeam';
import DesignTeam from '@/components/DesignTeam';

const Team = () => {
  return (
    <section className="py-12 mt-20 bg-black-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Meet Our Team</h2>
        <CoreTeam />
        <TechnicalTeam />
        <DesignTeam />
        <EventManagement />
        <PRTeam />
      </div>
    </section>
  );
};

export default Team;
