function ServicesSkeleton() {
  return (
    <section className="pt-8 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center animate-pulse">
            <div className="w-20 h-20 bg-gray-300 rounded-full" />

            <div className="mt-6 w-40 h-4 bg-gray-300 rounded" />

            <div className="mt-2 w-52 h-3 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSkeleton;
