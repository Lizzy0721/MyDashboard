export default function Dropdown({
  arrayOfOptions,
}: {
  arrayOfOptions: string[];
}) {
  return (
    <div className="absolute ml-4 w-40 bg-white rounded-lg shadow-md space-y-2 p-2">
      {arrayOfOptions.map((anOption) => (
        <button
          key={anOption}
          className="block size-full p-2 text-left rounded-lg hover:bg-yellow-100 hover:text-amber-600 hover:font-medium"
        >
          {anOption}
        </button>
      ))}
    </div>
  );
}
