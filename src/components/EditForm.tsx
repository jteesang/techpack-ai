const EditForm = ({
    formData,
    plans,
    handleChange,
    handleSubmit,
    setIsEditing,
  }: {
    formData: {
      name: string;
      email: string;
      subscription_plan: string;
    };
    plans: string[];
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
    setIsEditing: (isEditing: boolean) => void;
  }) => (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Subscription Plan</label>
        <select
          name="subscription_plan"
          value={formData.subscription_plan}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          {plans.map(plan => (
            <option key={plan} value={plan}>
              {plan.charAt(0).toUpperCase() + plan.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-4">
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
        <button
          type="button"
          onClick={() => setIsEditing(false)}
          className="p-2 bg-gray-500 text-white rounded hover:bg-gray-700"
        >
          Cancel
        </button>
      </div>
    </form>
  );

  export default EditForm;