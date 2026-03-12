"use client";

import { useEffect } from "react";

export default function Analytics() {
  useEffect(() => {
    import("../lib/firebase");
  }, []);
  return null;
}
