import { useEffect, useState } from "react";
import _style from "./greetings.module.css";

export default function Greetings() {
  const [daytime, setDayTime] = useState<null | string>(null);
  let hour = new Date().getHours();

  useEffect(() => {
    if (hour < 12) {
      setDayTime("Good Morning");
    } else if (hour >= 12 && hour < 18) {
      setDayTime("Good Afternoon");
    } else {
      setDayTime("Good Evening");
    }
  }, [hour]);

  return <div className={_style.greetings}>{daytime}</div>;
}
