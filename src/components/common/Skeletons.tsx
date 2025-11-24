export const HeroSkeleton = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-slate-900">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="h-6 w-48 bg-slate-700/50 rounded-full animate-pulse"></div>
            <div className="space-y-4">
              <div className="h-12 w-full bg-slate-700/50 rounded animate-pulse"></div>
              <div className="h-12 w-5/6 bg-slate-700/50 rounded animate-pulse"></div>
            </div>
            <div className="space-y-3">
              <div className="h-6 w-full bg-slate-700/50 rounded animate-pulse"></div>
              <div className="h-6 w-4/5 bg-slate-700/50 rounded animate-pulse"></div>
            </div>
            <div className="flex gap-4">
              <div className="h-12 w-32 bg-slate-700/50 rounded-lg animate-pulse"></div>
              <div className="h-12 w-40 bg-slate-700/50 rounded-lg animate-pulse"></div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="h-96 w-full bg-slate-700/50 rounded-2xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SectionSkeleton = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 space-y-4">
          <div className="h-10 w-96 bg-slate-200 rounded mx-auto animate-pulse"></div>
          <div className="h-6 w-64 bg-slate-200 rounded mx-auto animate-pulse"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-slate-50 rounded-xl p-6 space-y-4">
              <div className="h-12 w-12 bg-slate-200 rounded-lg animate-pulse"></div>
              <div className="h-6 w-3/4 bg-slate-200 rounded animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-slate-200 rounded animate-pulse"></div>
                <div className="h-4 w-5/6 bg-slate-200 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="h-48 bg-slate-200 animate-pulse"></div>
      <div className="p-6 space-y-4">
        <div className="h-6 w-3/4 bg-slate-200 rounded animate-pulse"></div>
        <div className="space-y-2">
          <div className="h-4 w-full bg-slate-200 rounded animate-pulse"></div>
          <div className="h-4 w-5/6 bg-slate-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export const PageSkeleton = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSkeleton />
      <SectionSkeleton />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
