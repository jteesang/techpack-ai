const ProfileDetails = ({
    user,
    onEdit,
  }: {
    user: {
      name?: string;
      email: string;
      subscription_plan?: string;
    } | null;
    onEdit: () => void;
  }) => (
    <>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Name:</h2>
        <p className="text-lg">{user?.name || 'N/A'}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Email:</h2>
        <p className="text-lg">{user?.email}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Subscription Plan:</h2>
        <p className="text-lg">{user?.subscription_plan || 'N/A'}</p>
      </div>
      <button
        onClick={onEdit}
        className="p-2 bg-green-500 text-white rounded hover:bg-green-700"
      >
        Edit
      </button>
    </>
  );

  export default ProfileDetails;