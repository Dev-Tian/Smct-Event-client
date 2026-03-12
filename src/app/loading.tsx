const RouteLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <img src="/loader.gif" alt="Loading..." className="w-20 h-20" />
    </div>
  );
};

export default RouteLoader;
