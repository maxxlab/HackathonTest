// import React from "react";
// import { PieChart, Pie, Sector, Cell } from "recharts";

// const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 }
// ];
// const COLORS = ["#62C8FE", "#6D8EA0", "#40DDCE", "#16BFD6"];

// export default function PieGraphExp() {
//   return (
//     <PieChart width={400} height={400}>
//       <Pie
//         data={data}
//         cx={120}
//         cy={100}
//         innerRadius={60}
//         outerRadius={80}
//         fill="#8884d8"
//         paddingAngle={5}
//         dataKey="value"
//       >
//         {data.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//         ))}
//       </Pie>
//     </PieChart>
//   );
// }
import { Box } from "@mui/system";
import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 }
];
const COLORS = ["#4882F0", "#EE4F31"];

export default function PieGraphExp() {
  return (<div style={{display:'flex', alignItems:'center'}}>
      <PieChart width={200} height={200} style={{marginRight:'15%'}}>
            <Pie
            data={data}
            cx={100}
            cy={100}
            innerRadius={60}
            outerRadius={90}
            fill="#8884d8"
            paddingAngle={2}
            dataKey="value"
            
            >
            {data.map((entry, index) => (
               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
         </PieChart>
         <div>
            <ul>
            {data.map((name, index) => (
               <li key={`cell-${index}`} style={{display:'flex',marginBottom:10}}>
                  <div style={{width:'20px',marginRight:10,height:'20px',backgroundColor:`${COLORS[index % COLORS.length]}`}}></div>
                  <span>{name.name}</span>
               </li>
            ))}
            </ul>
         </div>
  </div>
  );
}