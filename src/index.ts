import { FC } from 'react'

type Hook<T> = (initial?: any) => T;

export const useScoped = <T>(hook: Hook<T>): T => {
  return hook();
}

export const Scope: FC<{inital?: any}> = () => {
  return null;
}

