import Layout from "@/components/layout";

export default function Home() {
  return (
    <div className="flex min-h-[50vh] justify-center bg-secondary">
      <div className="container grid bg-white lg:grid-cols-4">
        <div className="hidden bg-red-200 lg:block">sidebar</div>
        <div className="col-span-2">Slider</div>
        <div className="hidden bg-blue-200 lg:block">Promo banner</div>
      </div>
    </div>
  );
}
