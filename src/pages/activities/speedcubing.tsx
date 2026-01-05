let solves = [ // add new times at top
    { data: "2025-10-13", time: 30.65 },
    { data: "2025-10-13", time: 26.32 },
    { data: "2025-10-13", time: 30.20 },
    { data: "2025-10-13", time: 24.07 },
    { data: "2025-10-13", time: 29.19 },

    { data: "2025-10-12", time: 32.58 },
    { data: "2025-10-12", time: 28.24 },
    { data: "2025-10-12", time: 30.67 },
    { data: "2025-10-12", time: 39.87 },
    { data: "2025-10-12", time: 26.49 },
    { data: "2025-10-12", time: 30.13 },
    { data: "2025-10-12", time: 24.85 },
    { data: "2025-10-12", time: 24.95 },
    { data: "2025-10-12", time: 32.48 },
    { data: "2025-10-12", time: 34.06 },
    { data: "2025-10-11", time: 29.39 },
    { data: "2025-10-11", time: 32.08 },
    { data: "2025-10-11", time: 35.58 },
    { data: "2025-10-11", time: 31.95 },
    { data: "2025-10-11", time: 27.94 },
    { data: "2025-10-08", time: 27.01 },
    { data: "2025-10-08", time: 33.54 },
    { data: "2025-10-08", time: 41.22 },
    { data: "2025-10-08", time: 24.85 },
    { data: "2025-10-08", time: 32.30 }
]

// color definitions:
// - green = sub 25
// - gray = sub 30
// - red = > 30sec

export function Speedcubing() {
    const registered_times = [];
    const register_time = (time: number) => {
        registered_times.push(time);
    }

    solves = solves.reverse();

    // Calculate cubing avarage of 5
    const calculate_cubing_average = (average_of: number) => {
        if (registered_times.length < average_of) {
            return ""
        }

        // Take the first 5 in the list
        let relevant_times = registered_times.reverse().slice(registered_times.length - average_of).sort((a, b) => a - b);

        // Remove largest and smallest one
        relevant_times.pop();
        relevant_times.reverse();
        relevant_times.pop();

        let total = 0;
        relevant_times.forEach(n => {
            total += n;
        });

        return (total / relevant_times.length).toFixed(2);
    }

    return (
        <>
            <h1>
                My Speedcubing activities
            </h1>

            <p>
                One of my hobbies is called 'speedcubing'. Its where I try to solve the rubicks cube as fast as possible.
                I use timers on my laptop/phone in order to keep track of the time, and notate that in the graph/table bellow.
            </p>

            <p>
                I also make use of averages which I try to improve over time. The averages (ao5 = average of 5, ao12 = average of 12, etc)
                are calculated according to the following special speedcubing rule: take the solves, remove the best and worst time, add them together,
                divide by the amount of solves.
            </p>

            <p>
                I started solving again in October 2025, and my average tends to be around 30 seconds now. My goal is to
                try to get that back down to sub 25 seconds before the end of the year.
            </p>

            <table style="margin-bottom: 20px;">
                <thead>
                    <tr>
                        <th style="padding-right: 30px;">Date</th>
                        <th>Time</th>
                        <th>ao5</th>
                        <th>ao12</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        solves.map(solve => {
                            register_time(solve.time);
                            const ao5 = calculate_cubing_average(5);
                            const ao12 = calculate_cubing_average(12);
                            return (
                                <tr>
                                    <td style="padding-right: 30px;">{solve.data}</td>
                                    <td className={
                                        solve.time < 25 ? 'green-solve' :
                                        solve.time < 30 ? 'gray-solve' :
                                        'red-solve'
                                    }>{solve.time.toFixed(2)}</td>
                                    <td className={
                                        Number(ao5) < 25 ? 'green-solve' :
                                        Number(ao5) < 30 ? 'gray-solve' :
                                        'red-solve'
                                    }>{ao5}</td>
                                    <td className={
                                        Number(ao12) < 25 ? 'green-solve' :
                                        Number(ao12) < 30 ? 'gray-solve' :
                                        'red-solve'
                                    }>{ao12}</td>
                                </tr>
                            )
                        }).reverse()
                    }
                </tbody>
            </table>
        </>
    );
}