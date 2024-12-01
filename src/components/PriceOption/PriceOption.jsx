import PriceOptions from "../PriceOptions/PriceOptions";

const PriceOption = () => {
  const pricingOptionsb = [
    {
      id: 1,
      name: "Basic Plan",
      price: 19.99,
      features: [
        "Access to gym during off-peak hours",
        "Locker access",
        "1 complimentary personal training session",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 39.99,
      features: [
        "Access to gym anytime",
        "Locker access",
        "3 complimentary personal training sessions",
        "Access to group classes",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 59.99,
      features: [
        "24/7 gym access",
        "Locker and towel service",
        "Unlimited personal training sessions",
        "Priority booking for classes",
        "Access to sauna and steam room",
      ],
    },
  ];


return (
  <div className="m-12">
    <h2 className="text-5xl font-bold mb-10 text-center">Best Prices in The Jamalpur Town</h2>
    <div className="grid md:grid-cols-3 gap-6">
    {pricingOptionsb.map((option) => (
      <PriceOptions key={option.id} option={option} />
    ))}
    </div>
  </div>
);
};
export default PriceOption;
