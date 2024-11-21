interface IconProps {
  profileImgRef: string;
  onclicked: () => void;
}

export default function Icons({ profileImgRef, onclicked }: IconProps) {
  return (
    <button
      onClick={onclicked}
      className="size-7 rounded-full outline outline-2 outline-offset-2 outline-dark_moss_green-500 bg-dark_moss_green-500 text-dark_moss_green-500"
    >
      <img
        src={profileImgRef}
        alt=""
        className="size-full object-cover rounded-full"
      />
    </button>
  );
}
