"use client";

import React, { useEffect } from "react";

function LoadJavasript() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return null;
}

export default LoadJavasript;
