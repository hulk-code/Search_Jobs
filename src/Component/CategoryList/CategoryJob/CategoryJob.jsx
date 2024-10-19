import accounts from "../../../assets/icons/accounts.png";
import chip from "../../../assets/icons/chip.png";
import creative from "../../../assets/icons/creative.png";
import marketing from "../../../assets/icons/marketing.png";

const CategoryJob = ({ categoryJob }) => {
  const { logo, category_name, availability } = categoryJob;
  return (
    <div
      className="bg-slate-50 p-5 hover:bg-amber-50
         hover:scale-105 hover:shadow-lg hover:shadow-sky-500 
         transition-all duration-300 ease-in-out rounded-lg m-5"
    >
      <img
        src={accounts}
        alt=""
        className="transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <h1 className="text-gray-800 hover:text-red-400 font-bold">
        {category_name}
      </h1>
      <p className="text-gray-600 hover:text-red-400">{availability}</p>
    </div>
  );
};

export default CategoryJob;
