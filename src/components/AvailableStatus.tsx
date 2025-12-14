import { useEffect, useState } from "react";

const AvailableStatus = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-sm">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-success animate-pulse-dot" />
        <span className="text-foreground font-medium">Available for project</span>
      </div>
      
      <div className="flex items-center gap-4 text-muted-foreground">
        <span className="uppercase tracking-wide text-xs">EARLY FEB 2025</span>
      </div>
      
      <div className="flex items-center gap-2 text-foreground">
        <span className="font-medium">{formatTime(currentTime)}</span>
        <span className="text-muted-foreground text-xs">(GMT+7)</span>
      </div>
    </div>
  );
};

export default AvailableStatus;
