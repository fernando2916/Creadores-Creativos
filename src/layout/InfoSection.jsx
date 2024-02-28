export const InfoSection = ({ title, img, children, className }) => {
  return (
    <section className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 p-3 mt-10 items-center ">
        <div className={`mx-5 lg:mx-24 ${className}`}>{img}</div>
        <div className=" mx-5 lg:mx-24">
          <h2 className="font-semibold text-5xl">{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
};
