
import './App.css';
import { Excalidraw } from '@excalidraw/excalidraw';
import { useState, useEffect } from 'react';
import { welcomeElements } from './welcomeMessage';

function App() {
  const [excalidrawAPI, setExcalidrawAPI] = useState<any>(null);

  useEffect(() => {
    if (!excalidrawAPI) return;

    const libraries = [
      'https://libraries.excalidraw.com/libraries/dmitry-burnyshev/c4-architecture.excalidrawlib',
      'https://libraries.excalidraw.com/libraries/shellerbrand/canvases.excalidrawlib'
    ];

    Promise.all(
      libraries.map(url => 
        fetch(url)
          .then(response => response.json())
          .then(data => {
            console.log('Library data from ' + url + ':', data);
            if (data.libraryItems?.length) {
              return data.libraryItems;
            } else if (data.library?.length) {
              // Transform old library format into the new format
              return data.library.map((item: any) => ({
                status: "published",
                elements: Array.isArray(item) ? item : [item],
                id: item[0]?.id || Math.random().toString(36).substring(2),
                created: Date.now()
              }));
            } else {
              console.warn('No library items found in', url);
              return [];
            }
          })
      )
    )
      .then(results => {
        const allLibraryItems = results.flat();
        
        console.log('Processed library items:', allLibraryItems);
        
        if (allLibraryItems.length > 0) {
          excalidrawAPI.updateLibrary({
            libraryItems: allLibraryItems,
            openLibraryMenu: true
          });
        } else {
          console.error('No valid library items found');
        }
      })
      .catch(error => console.error('Error loading libraries:', error));
  }, [excalidrawAPI]);

  return (
    <div className="excalidraw-wrapper">
      <Excalidraw
        initialData={{
          appState: {
            viewBackgroundColor: "#ffffff",
            currentItemRoughness: 0,
            shouldCacheIgnoreZoom: true,
            gridSize: 20,
            openSidebar: { name: "library" },
            defaultSidebarDockedPreference: true,
            selectedElementIds: {
              "welcome-title": true,
              "support-text": true
            },
            selectedGroupIds: {
              "welcome-message-group": true
            }
          },
          elements: welcomeElements
        }}
        gridModeEnabled
        excalidrawAPI={setExcalidrawAPI}
        UIOptions={{
          canvasActions: {
            toggleTheme: true,
            loadScene: true
          },
          dockedSidebarBreakpoint: 0  // Always show sidebar in docked mode
        }}
      />
    </div>
  );
}

export default App
