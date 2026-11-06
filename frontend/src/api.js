export const API_BASE = import.meta.env.DEV
  ? "http://localhost:5000"
  : "/api";

export const getInitials = (name) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
