import Image from "next/image";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

export default function ServiceCard({ image, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full md:w-64 transition hover:scale-105">
      <Image src={image} alt={title} className="h-40 w-full object-cover" width={100} height={100} />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
}
