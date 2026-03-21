type DeferredSectionFallbackProps = {
  minHeight: number;
};

const DeferredSectionFallback = ({ minHeight }: DeferredSectionFallbackProps) => (
  <div
    aria-hidden="true"
    className="mx-auto my-5 w-full max-w-7xl animate-pulse rounded-[32px] bg-slate-100/90"
    style={{ minHeight }}
  />
);

export default DeferredSectionFallback;
