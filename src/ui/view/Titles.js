export const Title = ({ title }) => (
  <div className="py-10">
    <h1 className="font-bold text-3xl text-center md:text-5xl">{title}</h1>
  </div>
);

export const Subtitle = ({ subtitle }) => (
  <div className="px-5 py-2 sm:py-5">
    <h2 className="font-bold text-xl">{subtitle}</h2>
  </div>
);
