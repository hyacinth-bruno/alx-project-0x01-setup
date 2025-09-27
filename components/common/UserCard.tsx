import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ 
  id, 
  name, 
  username, 
  email, 
  address, 
  phone, 
  website, 
  company 
}) => {
  return (
    <div className="max-w-sm mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-500">@{username}</p>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center text-sm text-gray-600">
          <span className="font-medium">Email:</span>
          <span className="ml-2">{email}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <span className="font-medium">Phone:</span>
          <span className="ml-2">{phone}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <span className="font-medium">Website:</span>
          <span className="ml-2">{website}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <span className="font-medium">City:</span>
          <span className="ml-2">{address.city}</span>
        </div>
        
        <div className="mt-4 p-3 bg-gray-50 rounded">
          <h4 className="font-medium text-gray-800">{company.name}</h4>
          <p className="text-xs text-gray-600 italic">&quot;{company.catchPhrase}&quot;</p>
        </div>
      </div>
      
      <div className="mt-4 text-xs text-gray-500">
        User ID: {id}
      </div>
    </div>
  );
};

export default UserCard;