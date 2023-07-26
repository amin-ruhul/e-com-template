import Image from "next/image";

function MegaDropDown({ dropDownData }) {
  return (
    <section className="min-w-[400px] columns-2 space-y-5 rounded-b-md border bg-white p-4">
      {dropDownData.map((dropDown) => (
        <div className="flex items-center gap-4">
          <div className="relative h-[40px] w-[40px] shrink-0">
            <Image src="/assets/images/deluxe.jpeg" alt="store-image" fill />
          </div>
          <p>Deluxe Online</p>
        </div>
      ))}

      <div className="flex items-center gap-4">
        <p>View All</p>
        <div className="relative h-[40px] w-[40px] shrink-0"></div>
      </div>
    </section>
  );
}

export default MegaDropDown;
