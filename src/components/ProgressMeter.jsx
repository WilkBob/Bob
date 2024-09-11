const ProgressMeter = ({ currentID, sectionIDs }) => {
  return (
    <div
      className={`fixed hidden md:flex right-5 top-1/2 transform -translate-y-1/2} flex-col gap-2 z-50`}
    >
      {sectionIDs.map((id) => (
        <ProgressBox key={id} active={currentID === id} id={id} />
      ))}
    </div>
  );
};

const ProgressBox = ({ active, id }) => {
  return (
    <a
      href={`#${id}`}
      className={`block w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
        active
          ? "bg-teal-500 hover:bg-teal-700"
          : "bg-zinc-600 hover:bg-teal-700"
      }`}
    />
  );
};

export default ProgressMeter;
