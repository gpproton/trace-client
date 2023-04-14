/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref, onBeforeMount, onBeforeUnmount } from 'vue';
import { defineStore } from 'pinia';
import { useMapState } from './index';
import { useRouting } from './Routing';
import * as L from 'leaflet';

export const useContextmenu = defineStore('app.map.contextMenu', () => {
  const mapState = useMapState();
  const routingState = useRouting();
  const contextMenuOptions = ref({
    contextmenu: true,
    contextmenuWidth: 165,
  });
  const contextMenuItems = ref<Array<any>>([]);
  const defaultContextMenuItems = [
    {
      icon: '/bootstrap-icons/geo.svg',
      text: 'Center Here',
      callback: (e: any) => {
        mapState.mapInstance.panTo(e.latlng);
      },
    },
    '-',
    {
      icon: '/bootstrap-icons/geo-alt.svg',
      text: 'Show Point',
      callback: (e: any) => {
        L.popup()
          .setLatLng(e.latlng)
          .setContent(
            `<div>${Number(e.latlng.lat).toFixed(5)}, ${Number(
              e.latlng.lng
            ).toFixed(5)}</div>`
          )
          .openOn(mapState.mapInstance);
      },
    },
    '-',
    {
      icon: '/bootstrap-icons/compass.svg',
      text: 'Route to point',
      callback: () => true,
    },
    '-',
    {
      icon: '/bootstrap-icons/arrow-repeat.svg',
      text: 'Route between points',
      callback: (e: any) => {
        routingState.addRoute(e);
      },
    },
    '-',
    {
      icon: '/bootstrap-icons/list-task.svg',
      text: 'New Task',
      callback: () => true,
    },
  ];

  defaultContextMenuItems.map((item: any) => {
    // item.icon = 'bootstrap-icons/arrow-repeat.svg';
    // item.text = 'contextmenu';
    return item;
  });
  onBeforeMount(() => {
    contextMenuItems.value = defaultContextMenuItems;
  });

  onBeforeUnmount(() => {
    contextMenuItems.value = defaultContextMenuItems;
  });

  return {
    contextMenuOptions,
    contextMenuItems,
  };
});
