interface LabeledCard {
    title: string;
    href:string;
    number: number;
}

export default function CardStats({ title, href, number }: LabeledCard) {
  return (
    <div className="w-full bg-silver_lake_blue-200 text-silver_lake_blue-900 p-4 flex gap-4 rounded-md">
      <img src={href} alt="" className="size-16 object-cover" />
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-3xl font-bold">{number}</p>
      </div>
    </div>
  );
}