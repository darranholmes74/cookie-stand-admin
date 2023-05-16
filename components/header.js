import { useAuth } from "@/contexts/auth";


export default function Header() {
  const { user } = useAuth();

  return (
    <header className="flex items-center justify-between p-4 bg-green-500 text-black">
      <div>
        <h1 className="text-4xl">Cookie Stand Admin</h1>
      </div>

      <div>
        <button className="bg-white text-black rounded py-1 px-3">
          {user.username}
        </button>
      </div>

      <div>
        <button className="bg-green-600 text-black rounded py-1 px-3">
          Sign Out
        </button>
      </div>
      <div>
        <button className="bg-white text-black rounded py-1 px-3">Overview</button>
      </div>

    </header>
  );
}
