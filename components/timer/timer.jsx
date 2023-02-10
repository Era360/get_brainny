import { useEffect, useState } from "react"
import styles from "./timer.module.css"

function Timer() {
    const [time, settime] = useState({
        // days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        time_up: ""
    })
    // const [startedTime, setstartedTime] = useState(new Date().getTime())
    const startedTime = new Date().getTime()
    // const deadline = new Date("Jan 30, 2023").getTime()

    useEffect(() => {
        const count = () => {
            var now = new Date().getTime();
            var t = now - startedTime;
            // var dd = Math.floor(t / (1000 * 60 * 60 * 24));
            var hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            var ss = Math.floor((t % (1000 * 60)) / 1000);

            // var days = dd < 10 ? "0" + dd : dd;
            var hours = hh < 10 ? "0" + hh : hh;
            var minutes = mm < 10 ? "0" + mm : mm;
            var seconds = ss < 10 ? "0" + ss : ss;

            settime({ minutes, hours, seconds, time_up: "" });

            // if (t < 0) {
            //     clearInterval(myinterval);
            //     settime({
            //         days: 0,
            //         minutes: 0,
            //         hours: 0,
            //         seconds: 0,
            //         time_up: "TIME IS UP"
            //     });
            // }
        }

        let myinterval = setInterval(count, 1000);
        return () => {
            clearInterval(myinterval)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className={styles.countdown}>
            <p>{time?.hours}</p>
            <p className={styles.minutes}>: {time?.minutes} :</p>
            <p>{time?.seconds}</p>
        </div>
    );
}
export default Timer