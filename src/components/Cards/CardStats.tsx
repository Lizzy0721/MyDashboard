interface LabeledCard {
  Title: string;
  href: string;
  Number: number;
}

export default function CardStats({ Title, href, Number }: LabeledCard) {
  return (
    <div className="w-full bg-silver_lake_blue-200 text-silver_lake_blue-900 p-4 flex gap-4 rounded-md">
      <img src={href} alt="" className="size-16 object-cover" />
      <div>
        <p className="font-medium">{Title}</p>
        <p className="text-3xl font-bold">{Number}</p>
      </div>
    </div>
  );
}
