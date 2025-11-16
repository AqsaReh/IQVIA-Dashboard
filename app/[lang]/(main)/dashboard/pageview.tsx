"use client";

import { useState } from "react";
import { useRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import MainGrid1 from "./component/maingrid1";
import MainGrid2 from "./component/maingrid2";
import MainGrid3 from "./component/maingrid3";
import MainGrid4 from "./component/maingrid4";
import MainGrid5 from "./component/maingrid5";
import MainGrid6 from "./component/maingrid6";
import BarChart from "./component/barchart";
import Buttons from "./component/buttons";

const Pageview = () => {
  // Local state for the toggle switch
  const [nplEnabled, setNplEnabled] = useState(false);
  const toggle = () => setNplEnabled((v) => !v);
  const [month, setMonth] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    // Use native picker if available, else click/focus fallback
    inputRef.current?.showPicker?.();
    inputRef.current?.click();
    inputRef.current?.focus();
  };

  return (
    <>
      <div className=" w-full">
        {/* First Section ------------------------------------- */}
        <div className="flex justify-between gap-5 w-full">
          <div className="flex gap-5 ">
            <h1 className="text-2xl font-medium ">IMS Plus Analytics</h1>
          </div>

          <div className="flex  gap-5">
            <div className="relative inline-block">
              {/* Invisible but positioned input => popup anchors to button */}
              <input
                ref={inputRef}
                type="month"
                // full overlay on the button; invisible; doesn't block pointer events
                className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
                onChange={(e) => console.log("Selected month:", e.target.value)}
                tabIndex={-1}
              />

              <button
                onClick={handleClick}
                type="button"
                className="inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-0 disabled:opacity-50 whitespace-nowrap disabled:pointer-events-none cursor-pointer h-10 px-4 py-[10px] font-normal bg-white text-default-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ltr:mr-2 rtl:ml-2 h-4 w-4"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
                <span>Pick a month</span>
              </button>
            </div>

            <div className="w-[170px]">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Corp All Products" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="corp-all">Corp All Products</SelectItem>
                  <SelectItem value="top-100-corps">Top 100 Corps</SelectItem>
                  <SelectItem value="new-launches">New Launches</SelectItem>
                  <SelectItem value="top-200-products">
                    Top 200 Products
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-[170px]">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MAT">MAT</SelectItem>
                  <SelectItem value="YTD">YTD</SelectItem>
                  <SelectItem value="QTR">QTR</SelectItem>
                  <SelectItem value="MTH">Mth</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a Scale" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Units">Units</SelectItem>
                  <SelectItem value="Values">Values</SelectItem>
                  <SelectItem value="Counts">Counts</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section ------------------------------------- */}
      <div className="w-full mt-5">
        <div className="flex gap-5 items-stretch">
          <div className="w-1/2 ">
            <MainGrid1 />
            {/* <MainGrid /> */}
          </div>
          <div className="w-1/2 ">
            <MainGrid2 />
          </div>
        </div>
      </div>

      {/* Third Section ------------------------------------- */}
      <div className="w-full mt-5">
        <div className="flex gap-5">
          <div className="w-1/2  ">
            <MainGrid3 />
          </div>
          <div className="w-1/2 ">
            <MainGrid4 />
          </div>
        </div>
      </div>

      {/* Fourth Section ------------------------------------- */}
      <div className="w-full mt-5">
        <div className="flex gap-5">
          <div className="w-2/5 ">
            <MainGrid5 />

            <div className="mt-5">
              <MainGrid6 />
            </div>
          </div>

          <div className="w-3/5 bg-card p-5">
            {/* <div className="flex justify-end">
              <div className="w-[200px]">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="product">Product</SelectItem>
                    <SelectItem value="value">Value</SelectItem>
                    <SelectItem value="launch-date">Launch Date</SelectItem>
                    <SelectItem value="molecule">Molecule</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div> */}

            <div className="h-[100px]">
              <Buttons />
            </div>

            <div className="flex items-center ">

            <BarChart />

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Pageview;
