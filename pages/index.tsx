import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex flex-grow items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            Welcome to our Application!
          </h1>
          <p className="mt-4 text-xl text-white">
            We&apos;re glad you&apos;re here. Explore and enjoy your experience.
          </p>
          <button className="mt-6 rounded-full bg-white px-6 py-3 font-semibold text-blue-500 transition hover:bg-gray-200">
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
