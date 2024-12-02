import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    
    const studentData = [
        { id: 1, name: "A", mathMarks: 78, physicsMarks: 85, chemistryMarks: 92 },
        { id: 2, name: "B", mathMarks: 85, physicsMarks: 89, chemistryMarks: 76 },
        { id: 3, name: "C", mathMarks: 92, physicsMarks: 74, chemistryMarks: 88 },
        { id: 4, name: "D", mathMarks: 74, physicsMarks: 91, chemistryMarks: 82 },
        { id: 5, name: "E", mathMarks: 88, physicsMarks: 87, chemistryMarks: 90 },
        { id: 6, name: "F", mathMarks: 69, physicsMarks: 72, chemistryMarks: 78 },
        { id: 7, name: "G", mathMarks: 95, physicsMarks: 93, chemistryMarks: 97 },
        { id: 8, name: "H", mathMarks: 81, physicsMarks: 80, chemistryMarks: 85 },
        { id: 9, name: "I", mathMarks: 76, physicsMarks: 77, chemistryMarks: 84 },
        { id: 10, name: "J", mathMarks: 89, physicsMarks: 92, chemistryMarks: 91 },
      ];
      
      

    return (
        <div>
            <LChart width={700} height={400} data={studentData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
            <Line dataKey="mathMarks" stroke='red'></Line>
            <Line dataKey="physicsMarks" stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;

