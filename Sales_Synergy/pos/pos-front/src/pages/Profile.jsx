// import React, { useEffect, useState } from 'react';
// import { getProfile, updateProfile } from '../api/api'; // Assuming updateProfile is available in the api.js file

// const Profile = () => {
//   const [profile, setProfile] = useState({});
//   const [address, setAddress] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);

//   // Fetch profile data on component mount
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const data = await getProfile();
//         setProfile(data);
//         setAddress(data.address || ''); // Assuming address is part of the profile data
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to load profile');
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   // Handle profile update
//   const handleUpdate = async () => {
//     try {
//       await updateProfile({ address });
//       alert('Profile updated successfully');
//     } catch (err) {
//       setError('Failed to update profile');
//     }
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="profile-container">
//       <h1>Profile</h1>
//       {error && <p>{error}</p>}
//       {profile ? (
//         <div>
//           <p>Username: {profile.user?.username}</p> {/* Conditional chaining in case user is undefined */}
//           <p>Email: {profile.user?.email}</p>
//           <p>Loyalty Points: {profile.loyalty_points}</p>
//           <label>
//             Address:
//             <input
//               type="text"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//             />
//           </label>
//           <button onClick={handleUpdate}>Update Profile</button>
//         </div>
//       ) : (
//         <p>No profile data found.</p>
//       )}
//     </div>
//   );
// };

// export default Profile;


import React, { useState, useEffect } from 'react';
import { getProfile, updateProfile } from '../api/api';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setProfile(data);
        setAddress(data.address || '');
      } catch (err) {
        setError('Failed to load profile');
      }
    };

    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    try {
      await updateProfile({ address });
      alert('Profile updated successfully');
    } catch (err) {
      setError('Failed to update profile');
    }
  };

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      {error && <p>{error}</p>}
      {profile ? (
        <div>
          <p>Username: {profile.user.username}</p>
          <p>Email: {profile.user.email}</p>
          <p>Loyalty Points: {profile.loyalty_points}</p>
          <label>
            Address:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <button onClick={handleUpdate}>Update Profile</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
