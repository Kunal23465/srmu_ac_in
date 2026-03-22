import { Suspense, lazy, type ComponentType, type FC } from "react";

type RouteModule<P> = {
  default: ComponentType<P>;
};

export type PreloadableRouteComponent<P = Record<string, never>> = FC<P> & {
  preload?: () => Promise<RouteModule<P>>;
};

const RouteChunkFallback = () => <div aria-hidden="true" className="min-h-[40vh]" />;

export const lazyPage = <P,>(loader: () => Promise<RouteModule<P>>): PreloadableRouteComponent<P> => {
  let LoadedComponent: ComponentType<P> | null = null;
  let pendingModulePromise: Promise<RouteModule<P>> | null = null;

  const loadModule = () => {
    if (!pendingModulePromise) {
      pendingModulePromise = loader().then((module) => {
        LoadedComponent = module.default;
        return module;
      });
    }

    return pendingModulePromise;
  };

  const LazyComponent = lazy(loadModule);

  const WrappedComponent: PreloadableRouteComponent<P> = (props) => (
    LoadedComponent ? (
      <LoadedComponent {...props} />
    ) : (
      <Suspense fallback={<RouteChunkFallback />}>
        <LazyComponent {...props} />
      </Suspense>
    )
  );

  WrappedComponent.preload = loadModule;

  return WrappedComponent;
};
