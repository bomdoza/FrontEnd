import React from 'react';

const TeamMemberCard = ({ name, role, bio, profileImage }) => {
  return (
    <div className="bg-black dark:bg-white p-6 rounded-lg shadow-md">

      <div className="mb-4">
        <img
          src={profileImage}
          alt={`Foto de perfil de ${name}`}
          className="w-16 h-16 rounded-full mx-auto"
        />
      </div>

      <h3 className="text-xl text-white dark:text-black font-bold mb-3">{name}</h3>
      <p className="text-body-color mb-2">{role}</p>
      <p className="text-body-color-dark ">{bio}</p>
    </div>
  );
};

export default TeamMemberCard;