import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { githubLogin } = useParams();
  return <div>{githubLogin}</div>;
}

export default UserProfile;
