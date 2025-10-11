const solves = [
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
    return (
        <>
            <h1>
                My Speedcubing activities
            </h1>

            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>ao5</th>
                        <th>ao12</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        solves.map(solve => (
                            <tr>
                                <td>{solve.data}</td>
                                <td className={
                                    solve.time < 25 ? 'green-solve' :
                                    solve.time < 30 ? 'gray-solve' :
                                    'red-solve'
                                }>{solve.time}</td>
                                <td>{0}</td>
                                <td>{0}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}