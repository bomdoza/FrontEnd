import React from 'react';

const TeamMemberCard = ({ name, role, bio, profileImage }) => {
  return (
    <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md">

      <div className="mb-4">
        <img
          src={profileImage}
          alt={`Foto de perfil de ${name}`}
          className="w-16 h-16 rounded-full mx-auto"
        />
      </div>

      <h3 className="text-xl text-black dark:text-white font-bold mb-3">{name}</h3>
      <p className="text-body-color mb-3">{role}</p>
      <p className="text-body-color-dark  text-justify">{bio}</p>
    </div>
  );
};

export default TeamMemberCard;