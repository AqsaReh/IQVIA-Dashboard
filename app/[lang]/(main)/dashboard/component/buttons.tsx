"use client";

import React from "react";

const Buttons = () => {
  return (
    <>
      <div
        role="tablist"
        aria-orientation="horizontal"
        className="items-center rounded-md p-1 text-muted-foreground grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 justify-start w-full bg-transparent h-full"
        tabIndex={0}
        data-orientation="horizontal"
        style={{ outline: "none" }}
      >
        <button
          type="button"
          role="tab"
          aria-selected="true"
          aria-controls="radix-:ro:-content-all"
          data-state="active"
          id="radix-:ro:-trigger-all"
          className="justify-center whitespace-nowrap rounded-sm h-full text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=active]:text-foreground cursor-pointer flex flex-col gap-1.5 p-4 overflow-hidden items-start relative before:absolute before:left-1/2 before:-translate-x-1/2 before:bottom-1 before:h-[2px] before:w-9 before:bg-primary/50 dark:before:bg-primary-foreground before:hidden data-[state=active]:shadow-none data-[state=active]:before:block bg-primary/30 data-[state=active]:bg-primary/50 dark:bg-primary/70"
          tabIndex={0}
          data-orientation="horizontal"
          data-radix-collection-item=""
        >
          <span className="h-10 w-10 rounded-full absolute -top-3 -right-3 ring-8 bg-primary/50 ring-primary/20 dark:bg-primary dark:ring-primary/40"></span>
          <span className="text-sm text-default-800 dark:text-primary-foreground font-semibold capitalize relative z-10">
            Product
          </span>
          <span className="text-lg font-semibold text-primary/80 dark:text-primary-foreground">
            10,234
          </span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected="false"
          aria-controls="radix-:ro:-content-event"
          data-state="inactive"
          id="radix-:ro:-trigger-event"
          className="justify-center whitespace-nowrap rounded-sm h-full text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=active]:text-foreground cursor-pointer flex flex-col gap-1.5 p-4 overflow-hidden items-start relative before:absolute before:left-1/2 before:-translate-x-1/2 before:bottom-1 before:h-[2px] before:w-9 before:bg-primary/50 dark:before:bg-primary-foreground before:hidden data-[state=active]:shadow-none data-[state=active]:before:block bg-warning/30 data-[state=active]:bg-warning/50 dark:bg-orange-500"
          tabIndex={-1}
          data-orientation="horizontal"
          data-radix-collection-item=""
        >
          <span className="h-10 w-10 rounded-full absolute -top-3 -right-3 ring-8 bg-orange-200 ring-orange-100 dark:bg-orange-300 dark:ring-orange-400"></span>
          <span className="text-sm text-default-800 dark:text-primary-foreground font-semibold capitalize relative z-10">
            Value
          </span>
          <span className="text-lg font-semibold text-warning/80 dark:text-primary-foreground">
            536
          </span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected="false"
          aria-controls="radix-:ro:-content-conversation"
          data-state="inactive"
          id="radix-:ro:-trigger-conversation"
          className="justify-center whitespace-nowrap rounded-sm h-full text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=active]:text-foreground cursor-pointer flex flex-col gap-1.5 p-4 overflow-hidden items-start relative before:absolute before:left-1/2 before:-translate-x-1/2 before:bottom-1 before:h-[2px] before:w-9 before:bg-primary/50 dark:before:bg-primary-foreground before:hidden data-[state=active]:shadow-none data-[state=active]:before:block bg-success/30 data-[state=active]:bg-success/50 dark:bg-green-500"
          tabIndex={-1}
          data-orientation="horizontal"
          data-radix-collection-item=""
        >
          <span className="h-10 w-10 rounded-full absolute -top-3 -right-3 ring-8 bg-green-200 ring-green-100 dark:bg-green-300 dark:ring-green-400"></span>
          <span className="text-sm text-default-800 dark:text-primary-foreground font-semibold capitalize relative z-10">
            Launch Date
          </span>
          <span className="text-lg font-semibold text-success/80 dark:text-primary-foreground">
            21
          </span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected="false"
          aria-controls="radix-:ro:-content-newuser"
          data-state="inactive"
          id="radix-:ro:-trigger-newuser"
          className="justify-center whitespace-nowrap rounded-sm h-full text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=active]:text-foreground cursor-pointer flex flex-col gap-1.5 p-4 overflow-hidden items-start relative before:absolute before:left-1/2 before:-translate-x-1/2 before:bottom-1 before:h-[2px] before:w-9 before:bg-primary/50 dark:before:bg-primary-foreground before:hidden data-[state=active]:shadow-none data-[state=active]:before:block bg-info/30 data-[state=active]:bg-info/50 dark:bg-cyan-500"
          tabIndex={-1}
          data-orientation="horizontal"
          data-radix-collection-item=""
        >
          <span className="h-10 w-10 rounded-full absolute -top-3 -right-3 ring-8 bg-cyan-200 ring-cyan-100 dark:bg-cyan-300 dark:ring-cyan-400"></span>
          <span className="text-sm text-default-800 dark:text-primary-foreground font-semibold capitalize relative z-10">
            Molecule
          </span>
          <span className="text-lg font-semibold text-info/80 dark:text-primary-foreground">
            3321
          </span>
        </button>
      </div>
    </>
  );
};

export default Buttons;
