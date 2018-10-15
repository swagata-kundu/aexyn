import { PREV_STEP, NEXT_STEP } from './types';

export function next() {
  return {
    type: NEXT_STEP,
  };
}

export function prev() {
  return {
    type: PREV_STEP,
  };
}

