import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Project } from '../types';

interface ProjectMapProps {
  projects: Project[];
  onSelectProject: (projectId: string) => void;
  selectedRegion?: 'ALL' | 'Cairo' | 'North Coast';
  height?: string;
}

export const ProjectMap: React.FC<ProjectMapProps> = ({
  projects,
  onSelectProject,
  selectedRegion = 'ALL',
  height = '500px'
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container) return;

    // Safely remove any existing map instance
    if (mapInstanceRef.current) {
      try {
        mapInstanceRef.current.remove();
      } catch (e) {
        // Ignore cleanup errors
      }
      mapInstanceRef.current = null;
    }

    // Leaflet assigns _leaflet_id to the container DOM element.
    // If it exists, clear it to prevent "Map container is already initialized" error in React StrictMode
    if ((container as unknown as { _leaflet_id?: number })._leaflet_id) {
      delete (container as unknown as { _leaflet_id?: number })._leaflet_id;
    }

    try {
      // Default center: Egypt (between Cairo and North Coast)
      const map = L.map(container, {
        center: [30.5, 29.8],
        zoom: 7,
        scrollWheelZoom: false,
      });

      mapInstanceRef.current = map;

      // CartoDB Positron Tile Layer (Elegant light luxury theme)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(map);

      // Filter projects based on selected region
      const filteredProjects = selectedRegion === 'ALL'
        ? projects
        : projects.filter(p => p.region === selectedRegion);

      // Custom Icon Maker
      const createCustomIcon = (name: string, category: string) => {
        const isCommercial = category === 'COMMERCIAL';
        return L.divIcon({
          className: 'custom-map-marker',
          html: `
            <div class="relative group cursor-pointer">
              <div class="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 text-white rounded-full shadow-lg border border-neutral-700 hover:bg-black transition-all transform hover:scale-110">
                <span class="w-2 h-2 rounded-full ${isCommercial ? 'bg-amber-400' : 'bg-emerald-400'}"></span>
                <span class="text-xs font-bold font-mono tracking-wider">${name}</span>
              </div>
            </div>
          `,
          iconSize: [120, 36],
          iconAnchor: [60, 18]
        });
      };

      const bounds = L.latLngBounds([]);

      filteredProjects.forEach((project) => {
        if (!project.coordinates || typeof project.coordinates.lat !== 'number' || typeof project.coordinates.lng !== 'number') {
          return;
        }

        const { lat, lng } = project.coordinates;
        bounds.extend([lat, lng]);

        const marker = L.marker([lat, lng], {
          icon: createCustomIcon(project.name, project.category)
        }).addTo(map);

        // Popup Content
        const popupDiv = document.createElement('div');
        popupDiv.className = 'custom-map-popup shadow-xl rounded-xl overflow-hidden bg-white max-w-[260px]';
        popupDiv.innerHTML = `
          <div class="relative h-32 w-full overflow-hidden">
            <img src="${project.image}" alt="${project.name}" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <span class="absolute top-2 left-2 px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-white text-black">
              ${project.category}
            </span>
            <div class="absolute bottom-2 left-2 right-2 text-white">
              <h4 class="font-bold text-base leading-tight">${project.name}</h4>
              <p class="text-[11px] text-neutral-200">${project.location}</p>
            </div>
          </div>
          <div class="p-3 bg-white">
            <p class="text-[11px] text-neutral-600 line-clamp-2 mb-2">${project.shortDescription}</p>
            <button id="view-project-${project.id}" class="w-full py-1.5 bg-neutral-900 hover:bg-black text-white text-[11px] font-semibold tracking-wider uppercase rounded flex items-center justify-center gap-1 cursor-pointer">
              View Details
            </button>
          </div>
        `;

        marker.bindPopup(popupDiv, {
          className: 'custom-map-popup',
          closeButton: true,
          maxWidth: 280
        });

        marker.on('popupopen', () => {
          setTimeout(() => {
            const btn = document.getElementById(`view-project-${project.id}`);
            if (btn) {
              btn.onclick = (e) => {
                e.preventDefault();
                onSelectProject(project.id);
              };
            }
          }, 50);
        });
      });

      if (filteredProjects.length > 0 && bounds.isValid()) {
        map.fitBounds(bounds, { padding: [50, 50] });
      }
    } catch (err) {
      console.warn('Map initialization notice:', err);
    }

    return () => {
      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.remove();
        } catch (e) {
          // Ignore cleanup errors
        }
        mapInstanceRef.current = null;
      }
      if (container && (container as unknown as { _leaflet_id?: number })._leaflet_id) {
        delete (container as unknown as { _leaflet_id?: number })._leaflet_id;
      }
    };
  }, [projects, selectedRegion, onSelectProject]);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-neutral-200">
      <div ref={mapContainerRef} style={{ height }} className="w-full z-0" />
      
      {/* Map Legend */}
      <div className="absolute bottom-4 right-4 z-10 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-neutral-200 shadow-md flex items-center gap-4 text-xs font-semibold text-neutral-800">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          <span>Residential</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
          <span>Commercial</span>
        </div>
      </div>
    </div>
  );
};
