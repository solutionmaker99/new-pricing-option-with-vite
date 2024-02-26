import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-purple-700 rounded-lg p-4 text-white">
      <h4 className="mb-3 text-center">
        <span className="text-7xl font-bold">${price}</span>
        <span className="text-2xl">/month</span>
      </h4>
      <h2 className="text-4xl text-center my-12">{name}</h2>

      {features.map((feature, idx) => (
        <Feature key={idx} feature={feature}></Feature>
      ))}
      <button className="btn-accent mx-[40%] w-36 rounded-lg py-4 mt-4">
        Enroll Now
      </button>
    </div>
  );
};

export default PriceOption;
