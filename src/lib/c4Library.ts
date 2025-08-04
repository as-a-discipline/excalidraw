// Define the library item types based on Excalidraw's schema
interface LibraryItem {
  status: "published" | "unpublished";
  elements: any[]; // We could type this more strictly if needed
  id?: string;
  created?: number;
}

interface ExcalidrawLibrary {
  type: "excalidrawlib";
  version: number;
  source: string;
  libraryItems: LibraryItem[];
}

// Import and parse the library file
const c4LibraryRaw = await fetch('/src/resources/c4-architecture.excalidrawlib')
  .then(res => res.json()) as ExcalidrawLibrary;

export const libraryItems = c4LibraryRaw.libraryItems;
