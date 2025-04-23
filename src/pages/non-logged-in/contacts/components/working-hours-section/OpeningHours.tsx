const OpeningHours = ({ children, title }: { title: string; children: string }) => {
  return (
    <section className="flex flex-col items-center justify-center gap-y-3">
      <h5 className="text-brand-white text-body-lg font-semibold">{title}</h5>
      <p className="text-primary-light text-caption opacity-80">{children}</p>
    </section>
  );
};

export default OpeningHours;
