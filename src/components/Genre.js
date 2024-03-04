"use client";

const Genre = ({ options, onSelect }) => {
  return (
    <div className="relative inline-block text-left grid grid-cols-12 gap-2">
      {options?.map((option, i) => (
        <button
          key={i}
          className="rounded-full bg-slate-200 p-2 leading-6 font-mono hover:bg-slate-600 hover:text-slate-200 focus:bg-slate-600 focus:text-slate-200"
          onClick={(e) => {
            e.preventDefault();
            document.title = `${option} - Live TV`;
            onSelect(option);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Genre;
