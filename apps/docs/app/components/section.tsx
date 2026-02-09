export function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-20 first:mt-0">
      <h2 className="text-primary text-xl font-semibold tracking-tight md:text-2xl">
        {title}
      </h2>
      {description && (
        <p className="text-secondary mt-2 text-sm leading-relaxed">
          {description}
        </p>
      )}
      <div className="mt-8">{children}</div>
    </section>
  );
}
