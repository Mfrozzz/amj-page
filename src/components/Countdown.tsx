import { useEffect, useState } from "react";

interface TimeLeft {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

interface CountdownProps {
  targetDate: Date;
}

export function Countdown({ targetDate }: CountdownProps) {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();

    let timeLeft: TimeLeft = {
      dias: 0,
      horas: 0,
      minutos: 0,
      segundos: 0,
    };

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-6 text-white text-center">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col">
          <span className="text-4xl md:text-6xl font-bold">
            {value.toString().padStart(2, "0")}
          </span>
          <span className="uppercase text-sm tracking-widest">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}