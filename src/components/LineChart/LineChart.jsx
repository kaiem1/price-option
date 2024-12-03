import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    
    const studentData = [
        { id: 1, name: "A", mathMarks: 8, physicsMarks: 85, chemistryMarks: 2 },
        { id: 2, name: "B", mathMarks: 85, physicsMarks: 9, chemistryMarks: 6 },
        { id: 3, name: "C", mathMarks: 2, physicsMarks: 74, chemistryMarks: 88 },
        { id: 4, name: "D", mathMarks: 74, physicsMarks: 1, chemistryMarks: 2 },
        { id: 5, name: "E", mathMarks: 8, physicsMarks: 87, chemistryMarks: 100 },
        { id: 6, name: "F", mathMarks: 69, physicsMarks: 2, chemistryMarks: 78 },
        { id: 7, name: "G", mathMarks: 5, physicsMarks: 93, chemistryMarks: 7 },
        { id: 8, name: "H", mathMarks: 81, physicsMarks: 0, chemistryMarks: 85 },
        { id: 9, name: "I", mathMarks: 6, physicsMarks: 77, chemistryMarks: 4 },
        { id: 10, name: "J", mathMarks: 89, physicsMarks: 9, chemistryMarks: 91 },
      ];
      
      

    return (
        <div>
            <LChart width={500} height={400} data={studentData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
            <Line dataKey="mathMarks" stroke='red'></Line>
            <Line dataKey="physicsMarks" stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;

