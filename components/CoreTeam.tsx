import React from 'react';
import Image from 'next/image';
import logo from '@/public/Ecell.ico'; 

const teamMembers = [
  { id: 1, name: 'Name', imageSrc: ""},
  
];

const CoreTeam = () => {
  return (
    <section className="py-12 mb-10 bg-black-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-orange-400 text-center mb-8">Core Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              <div className="w-48 h-48 mx-auto">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  width={252}
                  height={252}
                  className="object-fill mx-auto rounded-lg"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;
