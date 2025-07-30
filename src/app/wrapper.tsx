"use client";
import React, { PropsWithChildren } from "react";
import { PlanningsContextProvider } from "../components/PlanningsContext";

const Wrapper = (props: PropsWithChildren) => {
  return <PlanningsContextProvider>{props.children}</PlanningsContextProvider>;
};

export default Wrapper;
