// We ban use of `useDispatch/useSelector` in the codebase in favor of the typed hooks,
// but this is the one file that needs them
// eslint-disable-next-line no-restricted-imports
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook} from "react-redux";
import type { RootState, AppDispatch } from "../store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
