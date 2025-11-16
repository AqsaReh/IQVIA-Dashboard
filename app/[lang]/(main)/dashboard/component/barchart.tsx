"use client";

import { useCallback } from "react";
import {
  VisXYContainer,
  VisGroupedBar,
  VisAxis,
  VisBulletLegend,
} from "@unovis/react";


import { BulletLegend } from "@unovis/ts";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
// import { data } from "./data";

export type EducationDatum = {
  country: string;
  bachelors: number;
  masters: number;
  doctoral: number;
  total?: number;
};

export type ElectionDatum = {
  month: number;
  Value: number;
  Product: number;
  Launch_Date: number;
  Molecule: number;
};

// Replace your current `const data` with this:
const data: ElectionDatum[] = [
  { month: 1, Product: 120, Value: 95, Launch_Date: 12, Molecule: 3 },
  { month: 2, Product: 135, Value: 108, Launch_Date: 15, Molecule: 4 },
  { month: 3, Product: 128, Value: 101, Launch_Date: 14, Molecule: 5 },
  { month: 4, Product: 150, Value: 120, Launch_Date: 18, Molecule: 6 },
  { month: 5, Product: 160, Value: 130, Launch_Date: 20, Molecule: 7 },
  { month: 6, Product: 155, Value: 125, Launch_Date: 17, Molecule: 6 },
  { month: 7, Product: 120, Value: 95, Launch_Date: 12, Molecule: 3 },
  { month: 8, Product: 135, Value: 108, Launch_Date: 15, Molecule: 4 },
  { month: 9, Product: 128, Value: 101, Launch_Date: 14, Molecule: 5 },
  { month: 10, Product: 150, Value: 120, Launch_Date: 18, Molecule: 6 },
  { month: 11, Product: 160, Value: 130, Launch_Date: 20, Molecule: 7 },
  { month: 12, Product: 155, Value: 125, Launch_Date: 17, Molecule: 6 },
];

const BarChart = ({ height = 400 }: { height?: number }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const colors = {
    Product: `hsl(${
      theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
    })`,
    Value: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
    Launch_Date: `hsl(${
      theme?.cssVars[mode === "dark" ? "dark" : "light"].warning
    })`,
    Molecule: `hsl(${
      theme?.cssVars[mode === "dark" ? "dark" : "light"].success
    })`,
  };
  const legendItems = Object.entries(colors).map(([n, c]) => ({
    name: n.toUpperCase(),
    color: c,
  }));
  return (
    <>
      <div className="w-full mt-5">
        <VisBulletLegend items={legendItems} />
        <VisXYContainer height={height} data={data}>
          <VisGroupedBar
            x={useCallback((d: any) => d.month, [])}
            y={[
              useCallback((d: any) => d.Product, []),
              useCallback((d: any) => d.Value, []),
              useCallback((d: any) => d.Launch_Date, []),
              useCallback((d: any) => d.Molecule, []),
            ]}
            color={useCallback((_: any, i: any) => legendItems[i].color, [])}
          />
          <VisAxis
            type="x"
            label="month"
            numTicks={data.length}
            tickTextColor={`hsl(${
              theme?.cssVars[
                mode === "dark" || mode === "system" ? "dark" : "light"
              ].chartLabel
            })`}
            labelColor={`hsl(${
              theme?.cssVars[
                mode === "dark" || mode === "system" ? "dark" : "light"
              ].chartLabel
            })`}
          />
        </VisXYContainer>
      </div>
    </>
  );
};

export default BarChart;
