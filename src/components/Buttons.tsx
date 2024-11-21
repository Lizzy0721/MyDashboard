import { ReactNode } from "react";
import { Link } from "react-router-dom";

function Navbuttons({
  children,
  linkref,
  isClicked,
}: {
  children: ReactNode;
  linkref: string;
  isClicked: () => void;
}) {
  return (
    <Link to={linkref}>
      <button
        onClick={isClicked}
        className="w-full my-3 py-3 px-4 flex items-center justify-start gap-x-2 text-base font-medium text-grass-300 bg-transparent rounded-md hover:bg-dark_moss_green-300 hover:text-straw-100 hover:font-bold active:bg-dark_moss_green-200"
      >
        {children}
      </button>
    </Link>
  );
}

export default Navbuttons;
