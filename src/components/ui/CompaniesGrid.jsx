import Image from "next/image";

export default function CompaniesGrid({ data }) {
  return (
    <div className="h-[312px] lg:h-[200px] lg:flex-1 grid grid-cols-2 lg:grid-cols-5 border border-[#E4E4E7]">
      {data.map((company, i) => (
        <div
          key={i}
          className={`relative w-full flex items-center justify-center ${
            i === data.length - 1 ? "col-span-2 lg:col-span-1" : ""
          }`}
        >
          <Image
            src={company.src}
            alt={company.name}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}
