"use client";

import { useNavigation } from "next/navigation";

const RouteLoader: React.FC = () => {
  const navigation = useNavigation();

  // navigation.state === "loading" when a route change is in progress
  const isLoading = navigation.state === "loading";

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <img src="/loader.gif" alt="Loading..." className="w-20 h-20" />
    </div>
  );
};

export default RouteLoader;
