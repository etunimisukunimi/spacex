import { useState, useEffect } from "react";

export function NavigationButton({ children, href = "" }) {
  return (
    <a className="button" href={href}>
      {children}
    </a>
  );
}
