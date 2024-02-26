import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Gym Package",
      features: [
        "Access to all gym equipment",
        "Group fitness classes",
        "24/7 access",
        "Free parking",
        "Free parking",
      ],
      price: 49,
    },
    {
      id: 2,
      name: "Intermediate Gym Package",
      features: [
        "Access to all gym equipment",
        "Group fitness classes",
        "Personal training session (1 per month)",
        "24/7 access",
        "Free parking",
      ],
      price: 79,
    },

    {
      id: 4,
      name: "Premium Gym Package",
      features: [
        "Access to all gym equipment",
        "Group fitness classes",
        "Personal training sessions (3 per month)",
        "24/7 access",
        "Free parking",
      ],
      price: 129,
    },
  ];

  return (
    <div className="mx-40">
      <h2 className="text-5xl font-bold text-center text-purple-600 my-8">
        Best Gym Of The Town
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
