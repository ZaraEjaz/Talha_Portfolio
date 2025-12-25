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
    <div className="flex flex-row md:flex-row md:items-start gap-6 md:gap-8 text-sm">
      <div className="flex flex-col md:flex-col md:items-start text-sm">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-success animate-pulse-dot" />
        <span className="text-foreground font-bold text-lg">Available for project</span>
      </div>
 
      <div className="flex items-center gap-4 text-muted-foreground">
        <span className="uppercase tracking-wide text-xs ml-4 font-medium">EARLY FEB 2025</span>
      </div>
      </div>
      <div className="flex flex-col md:flex-col md:items-start text-sm">
      <div className="flex items-center gap-2 text-foreground">
        <span className="font-bold text-lg">{formatTime(currentTime)}</span>
      </div>
      <div className="flex items-center gap-2 text-foreground">
        <span className="text-muted-foreground text-xs font-medium">(GMT+7)</span>
      </div>
      </div>
      </div>
  );
};

export default AvailableStatus;
