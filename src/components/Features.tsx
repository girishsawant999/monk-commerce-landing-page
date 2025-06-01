import { Box, CircleArrowUp, Gift, ShoppingCart } from "lucide-react";
import MotionWrapper from "./MotionWrapper";

const FEATURES_DATA = [
  {
    icon: ShoppingCart,
    title: "Tiered rewards bar in cart",
    description:
      "Gamify your theme's native cart by adding a progress bar with tiered rewards (free shipping, gifts etc) at different cart value milestones.",
  },
  {
    icon: Gift,
    title: "Gift with purchase",
    description:
      "Auto add gifts to a customer's cart based on their eligibility criteria or give them a choice to select gifts from multiple options.",
  },
  {
    icon: Box,
    title: "Pre-checkout upsells",
    description:
      "Display highly targeted and relevant upsells/cross sells at the product and cart pages to nudge customers to add more products to their order.",
  },
  {
    icon: CircleArrowUp,
    title: "Post checkout upsell",
    description:
      "Display targted upsells & cross sells after an order is placed, right before the 'thank you' page. Works with just a single click & is high converting.",
  },
];

const Features = () => {
  return (
    <MotionWrapper className="bg-radial-gradient-primary p-8 py-14">
      <div className="grid grid-cols-2 gap-5 container mx-auto">
        <MotionWrapper className="text-center mb-8 col-span-2">
          <h2 className="text-3xl font-bold text-white mb-4">
            Features that drive AOV
          </h2>
          <p className="text-gray-200">
            Monk Commerce offers a suite of features designed to enhance your
            store's average order value (AOV) and improve customer experience.
          </p>
        </MotionWrapper>
        {FEATURES_DATA.map((feature, index) => (
          <MotionWrapper
            key={index}
            className="bg-white rounded-lg p-6 shadow-lg flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <feature.icon
                className="text-primary-900 size-6"
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-semibold text-primary-900">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-600">{feature.description}</p>
          </MotionWrapper>
        ))}
      </div>
    </MotionWrapper>
  );
};

export default Features;
