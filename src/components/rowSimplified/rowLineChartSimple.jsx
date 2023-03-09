import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import React, { PureComponent } from "react";

export default class RowLineChartSimple extends PureComponent {
  render() {
    const { data, chartColor } = this.props;
    return (
      <ResponsiveContainer width="100%" aspect={3.5}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {Object.keys(data[0]).map((key, index) =>
            key == "name" ? null : (
              <Line
                key={index}
                dataKey={key}
                strokeWidth={4}
                stroke={chartColor[index]}
              />
            )
          )}
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
