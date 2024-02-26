import { LineChart, Line, XAxis, YAxis } from "recharts";

const Chart = () => {
  const allStudents = [
    {
      name: "Alice",
      math: 90,
      physics: 85,
      chemistry: 95,
    },
    {
      name: "Bob",
      math: 80,
      physics: 90,
      chemistry: 70,
    },
    {
      name: "Carol",
      math: 75,
      physics: 80,
      chemistry: 95,
    },
    {
      name: "Dave",
      math: 95,
      physics: 85,
      chemistry: 75,
    },
    {
      name: "Eve",
      math: 85,
      physics: 95,
      chemistry: 70,
    },
    {
      name: "Frank",
      math: 90,
      physics: 80,
      chemistry: 99,
    },
    {
      name: "George",
      math: 75,
      physics: 85,
      chemistry: 95,
    },
    {
      name: "Hannah",
      math: 80,
      physics: 90,
      chemistry: 70,
    },
    {
      name: "Ian",
      math: 95,
      physics: 85,
      chemistry: 80,
    },
    {
      name: "Jessica",
      math: 85,
      physics: 95,
      chemistry: 75,
    },
  ];

  return (
    <div className="mt-10">
      <LineChart width={800} height={500} data={allStudents}>
        <Line type="monotone" dataKey="math" stroke="#000" />
        <Line type="monotone" dataKey="physics" stroke="#0f0" />
        <Line type="monotone" dataKey="chemistry" stroke="#f0f" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
};

export default Chart;
