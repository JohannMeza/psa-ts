import { createEvent } from '@cobuildlab/react-simple-state';
import { LayoutDrawerOpenProps, LayoutDrawerWidthProps } from './layout-types';

export const layoutDrawerWidth = createEvent<LayoutDrawerWidthProps>({
  initialValue: 240,
});
export const layourDrawerWidthError = createEvent<Error>();

export const layoutDrawerOpen = createEvent<LayoutDrawerOpenProps>({
  initialValue: false,
});
export const layourDrawerOpenError = createEvent<Error>();
