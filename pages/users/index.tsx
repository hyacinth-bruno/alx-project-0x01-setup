import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps, UserData } from "@/interfaces";
import { useState } from "react";

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userList, setUserList] = useState<UserProps[]>(users);

  const handleAddUser = (newUser: UserData) => {
    setUserList((prevUsers) => {
      const nextId = prevUsers.length
        ? prevUsers.reduce((maxId, userItem) => Math.max(maxId, userItem.id), 0) + 1
        : 1;

      return [{ ...newUser, id: nextId }, ...prevUsers];
    });
  };

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Users Content</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="rounded-full bg-blue-700 px-4 py-2 text-white"
          >
            Add User
          </button>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {userList.map((userItem) => (
            <UserCard
              key={userItem.id}
              id={userItem.id}
              name={userItem.name}
              username={userItem.username}
              email={userItem.email}
              address={userItem.address}
              phone={userItem.phone}
              website={userItem.website}
              company={userItem.company}
            />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
