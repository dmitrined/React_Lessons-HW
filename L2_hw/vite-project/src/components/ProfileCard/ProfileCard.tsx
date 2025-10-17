interface Profile {
  avatarUrl: string;
  firstName: string;
  lastName: string;
  occupation: string;
  hobby: string;
}

export default function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <div>
      <img src={profile.avatarUrl} alt={`${profile.firstName} ${profile.lastName}`} />
      <h2>{`${profile.firstName} ${profile.lastName}`}</h2>
      <p>{profile.occupation}</p>
      <h3>Hobbies: {profile.hobby}</h3>
    </div>
  )
}
