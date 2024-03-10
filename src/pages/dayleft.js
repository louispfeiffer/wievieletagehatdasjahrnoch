import React, { useState, useEffect } from "react";
import img1 from "../images/calender.webp"

const DaysLeft = () => {
    const [daysLeft, setDaysLeft] = useState(0);

    useEffect(() => {
        const calculateDaysLeft = () => {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            const endOfYear = new Date(currentYear, 11, 31);
            const millisecondsInADay = 24 * 60 * 60 * 1000;
            const daysLeftCount = Math.round((endOfYear - currentDate) / millisecondsInADay);
            setDaysLeft(daysLeftCount);
        };

        calculateDaysLeft();

        // Berechnen der verbleibenden Tage in einem Intervall von 1 Tag
        const interval = setInterval(calculateDaysLeft, 24 * 60 * 60 * 1000);

        // Aufräumen
        return () => clearInterval(interval);
    }, []);

    return (


        <div className="flex justify-center items-center">
            <div className="text-white h-60 flex justify-center items-center">
                <div className=" bg-opacity-30 z-10 hover:shadow-xl p-4 rounded-lg">
                    <p className="text-3xl font-bold">Es sind noch {daysLeft} Tage bis zum Jahresende.</p>
                </div>
            </div>
        </div>

    );
}

export default DaysLeft;
