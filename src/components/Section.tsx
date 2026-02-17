interface SectionProps {
  id: string;
  title: string;
  text: string;
  image: string;
  reverse?: boolean;
}

export function Section({
  id,
  title,
  text,
  image,
  reverse = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex items-center px-6 py-20 bg-neutral-900/60 text-white"
    >
      <div
        className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >

        <div className={`${reverse ? "md:order-2" : ""}`}>
          <img
            src={`${image}`}
            alt={title}
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">
            {title}
          </h2>

          <p className="text-lg text-neutral-300 leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}