"use client";
import { useEffect, useState } from "react";

export function useLocalStorageSync(key, initialValue) {
  const [value, setValue] = useState(initialValue);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(key);
      if (stored) {
        try {
          setValue(JSON.parse(stored));
        } catch (parseError) {
          // If JSON parsing fails, use the stored value as-is
          console.warn(
            `Could not parse JSON for key "${key}", using raw value:`,
            parseError.message,
          );
          setValue(stored);
        }
      }
    } catch (error) {
      console.error(`Failed to access localStorage key "${key}":`, error);
    }
    setIsLoaded(true);
  }, [key]);

  // Listen for storage changes from other tabs
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === key && event.newValue) {
        try {
          try {
            setValue(JSON.parse(event.newValue));
          } catch (parseError) {
            // If JSON parsing fails, use the value as-is
            console.warn(
              `Could not parse JSON for key "${key}", using raw value:`,
              parseError.message,
            );
            setValue(event.newValue);
          }
        } catch (error) {
          console.error(`Failed to handle storage change for "${key}":`, error);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key]);

  // Save to localStorage when value changes
  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return { value, updateValue, isLoaded };
}
