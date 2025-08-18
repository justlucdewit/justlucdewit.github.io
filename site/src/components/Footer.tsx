import { useLocation } from 'preact-iso';
import { useState, useEffect } from 'preact/hooks';

export function Footer() {
    const { url } = useLocation();

    const numberToBooleanArray32Bit = (number) => {
        const unsigned32BitNum = number >>> 0;
        const booleanArray = new Array(32);

        for (let i = 0; i < 32; i++) {
            const bitPosition = 31 - i;
            booleanArray[i] = ((unsigned32BitNum >> bitPosition) & 1) === 1;
        }

        return booleanArray;
    }

    const birthDateUTC = '2001-07-31T00:00:00Z'; // July 31, 2001, 00:00:00 UTC

    // Function to calculate the initial number of seconds lived
    const calculateInitialSecondsLived = () => {
        const birthMoment = new Date(birthDateUTC);
        const now = new Date();
        const millisecondsLived = now.getTime() - birthMoment.getTime();
        return Math.floor(millisecondsLived / 1000);
    };
    
    const [secondsAlive, setSecondsAlive] = useState(calculateInitialSecondsLived());

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Update the state by recalculating the seconds lived
            // This ensures accuracy even if the component re-renders for other reasons
            setSecondsAlive(calculateInitialSecondsLived());
        }, 1000); // Update every 1000 milliseconds (1 second)

        // Cleanup function: Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

    return (
        <footer>
            <section>
                <div id="binary-age-counter">
                    {numberToBooleanArray32Bit(secondsAlive).map(bit => (
                        <div className={`bit ${bit ? 'on' : 'off'}` }></div>
                    ))}
                </div>

                <div id="footer-text">
                    Website created and owned by Luc de Wit - 2025
                </div>
            </section>
        </footer>
    );
}
