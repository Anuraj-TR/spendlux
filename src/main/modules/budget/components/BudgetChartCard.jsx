import moment from "moment";
import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts";

const BudgetChartCard = ({ data }) => {
  const [currentSpend, setCurrentSpend] = useState();
  const values = [{ name: "L1", value: currentSpend }];
  const [safeToSpend, setSafeToSpend] = useState();

  useEffect(() => {
    setCurrentSpend(data[0].current_spend);
    setSafeToSpend(() => {
      const now = moment()
      const end = moment().endOf('month')
      const daysLeft = end.diff(now, "days");
      const safe = (data[0].budget - data[0].current_spend) / daysLeft
      return Math.round(safe);
    })
  },[data])

  return (
    <>
      <div className="w-full max-w-[500px] text-base font-medium">
        <ResponsiveContainer width="100%" height={150}>
          <RadialBarChart
            width="100%"
            height="100%"
            cx="50%"
            cy="90%"
            innerRadius={100}
            outerRadius={120}
            barSize={50}
            data={values}
            startAngle={180}
            endAngle={0}
          >
            <PolarAngleAxis
              type="number"
              // TODO : Replace the domain values by variables
              domain={[0, 10000]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              background={{
                fill: "#98a7fada",
              }}
              clockWise
              dataKey="value"
              cornerRadius="50%"
              fill="#4d63e3"
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              style={{
                fontWeight: "400",
                fill: "#98a6fa",
              }}
              dominantBaseline="middle"
              className="progress-label"
            >
              you have spend
            </text>

            <text
              x="50%"
              y="63%"
              textAnchor="middle"
              style={{
                fontSize: "16px",
                fontWeight: "500",
                fill: "#4d63e3",
              }}
              dominantBaseline="middle"
              className="progress-label"
            >
              {data[0].current_spend}
            </text>

            <text
              x="50%"
              y="73%"
              textAnchor="middle"
              style={{
                fontSize: "12px",
                fill: "#999fc6",
              }}
              dominantBaseline="middle"
              className="progress-label"
            >
              of {data[0].budget}
            </text>
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="w-full text-center text-lg font-medium text-primary">
          safe to spend : <span className="text-xl font-semibold">{ safeToSpend }</span>
        </div>
      </div>
    </>
  );
};

export default BudgetChartCard;
