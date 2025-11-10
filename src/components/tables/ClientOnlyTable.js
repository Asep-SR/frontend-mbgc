"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

export default function ClientOnlyTable({ data, component = "NestedDataTable", ...rest }) {
  const [mounted, setMounted] = useState(false);

  // Dynamically import based on the string name
  const DynamicComponent = dynamic(() => import(`./${component}`), { ssr: false });

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return <DynamicComponent data={data} {...rest} />;
}