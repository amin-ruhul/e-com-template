import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

function MegaDropDown({ dropDownData }) {
  return (
    <section className="min-w-[25rem] columns-2 space-y-5 rounded-b-md border bg-white p-4">
      {dropDownData.map((dropDown) => (
        <div key={dropDown.slug}>
          <Link href={`/${dropDown.slug}`}>
            <div className="flex items-center gap-4">
              <div className="relative h-[2.5rem] w-[2.5rem] shrink-0">
                <Image src={dropDown.imageUrl} alt="store-image" fill />
              </div>
              <p>{dropDown.value}</p>
            </div>
          </Link>
        </div>
      ))}
      <div>
        <Link href="/">
          <div className="flex items-center gap-4">
            <p>View All</p>
            <div className="relative h-[2.5rem] w-[2.5rem] shrink-0"></div>
          </div>
        </Link>
      </div>
    </section>
  );
}

MegaDropDown.propTypes = {
  dropDownData: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      value: PropTypes.string,
      imageUrl: PropTypes.string,
    })
  ),
};

export default MegaDropDown;
