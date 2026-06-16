"use client";

import { createContext, useContext } from "react";

const SiteContentContext = createContext<any[]>([]);

export function SiteContentProvider({ initialContent, children, isPreview }: { initialContent: any[], children: React.ReactNode, isPreview?: boolean }) {
  return (
    <SiteContentContext.Provider value={initialContent}>
      {children}
    </SiteContentContext.Provider>
  );
}

export function useSiteContent(section: string, defaultData: Record<string, string>) {
  const context = useContext(SiteContentContext);
  const found = context.find(c => c.section === section);
  
  if (found && found.content) {
    try {
      const parsed = JSON.parse(found.content);
      // Merge parsed data over default data
      const merged = { ...defaultData };
      for (const key in parsed) {
        if (parsed[key] !== undefined && parsed[key] !== "") {
          merged[key] = parsed[key];
        }
      }
      return merged;
    } catch (e) {
      console.error("Failed to parse site content for section:", section, e);
      return defaultData;
    }
  }
  return defaultData;
}
