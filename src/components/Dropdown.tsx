interface dropdownProps {
  categories: string[];
  handleSelectedCategory: (category: string) => void;
}

export default function Dropdown(dropdownProps: dropdownProps) {
  return (
    <menu className="absolute ml-4 w-40 bg-slate-50 rounded-lg shadow-md space-y-2 p-2">
      {dropdownProps.categories.map((category) => (
        <button
          key={category}
          onClick={() => dropdownProps.handleSelectedCategory(category)}
          className="block size-full p-2 text-left rounded-lg hover:bg-slate-100 hover:text-slate-600 hover:font-medium"
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </menu>
  );
}
