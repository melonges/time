import { useEffect, useState } from "react";

interface TimeResponse {
  datetime: string;
}

const API_TIME_URL = "https://worldtimeapi.org/api/timezone/Europe/Moscow";

export const getTime = async (): Promise<TimeResponse> => {
  const data = await fetch(API_TIME_URL);
  return await data.json();
};

export const useCurrentTime = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const _fn = async () => {
      const response = await getTime();
      const currentDate = new Date(response.datetime);
      setDate(currentDate);
      setIsLoading(false);
    };

    _fn();
  }, []);

  return { date, isLoading };
};
