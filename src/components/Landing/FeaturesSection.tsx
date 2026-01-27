import Image from "next/image";
import GradientButton from "../shared/GradientButton";

type FeaturesSectionProps = {
  onStartConversation?: () => void;
};

const features = [
  {
    image: "/images/feature-icon-1.svg",
    title: "Audience Aware Reasoning",
    description:
      "The chatbot begins every interaction by analyzing who the explanation is for—age, background, prior knowledge, and needs—then shapes tone, vocabulary, structure, and examples specifically for that audience",
    gradient:
      "linear-gradient(112.45deg, #38B2C0 -10.01%, #1D82E2 11.79%, #197BE7 30.53%, #248ED9 69.26%, #3CBABA 116.28%)",
  },
  {
    image: "/images/feature-icon-2.svg",
    title: "Learning Science–Driven Explanations",
    description:
      "Built on research about how the brain processes information, it delivers explanations with intentional sequencing, cognitive chunking, scaffolding, and narrative flow so concepts feel intuitive and stick.",
    gradient: "linear-gradient(111.99deg, #FA8C54 -28.56%, #FB31BB 116.9%)",
  },
  {
    image: "/images/feature-icon-3.svg",
    title: "Custom Analogy Generation Engine",
    description:
      "Instead of generic examples, it creates meaningful analogies tailored to the user's audience using context, relevance, and real-world experiences—making complex STEM ideas instantly relatable.",
    gradient: "linear-gradient(111.99deg, #5D58E8 -28.56%, #EB22DA 116.9%)",
  },
];

const FeaturesSection = ({ onStartConversation }: FeaturesSectionProps) => {
  return (
    <div
      id="features"
      className="min-h-screen pt-[100px] pb-[150px] lg:pt-[200px] lg:pb-[300px] px-5 w-full bg-white-4"
    >
      <div className="w-full max-w-[1240px] mx-auto flex flex-col gap-12">
        <div className="space-y-[2px] w-full max-w-[843px] mx-auto">
          <h3 className="font-medium text-[16px] leading-[16px] tracking-0 text-blue-1 text-center">
            Features
          </h3>
          <div className="flex flex-col gap-6">
            <h1 className="font-medium text-[28px] leading-[100%] lg:text-[48px] tracking-0 text-black-2 text-center">
              Features that Make Every Chat Smarter
            </h1>
            <p className="font-normal text-[16px] leading-[32px] tracking-0 text-black-2 text-center">
              Sometimes you need more than a great explanation—you need a
              partner who can help you deliver it with clarity and impact.
              Jessica Burgess, The STEM Translator™, offers expert coaching,
              workshops and one-one guidance rooted in learning science and
              years of professional experience.  Schedule a free 30- minute
              consultation to get started
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-[1240px] mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-[20px] shadow-1 flex flex-col"
            >
              {/* Header */}
              <div
                className="h-[191px] flex items-center justify-center rounded-t-[20px] overflow-hidden"
                style={{ backgroundImage: feature.gradient }}
              >
                <div className="w-[80px] h-[80px] sm:w-[96px] sm:h-[96px] rounded-xl flex items-center justify-center">
                  <Image
                    src={feature.image}
                    alt="feature icon"
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              {/* Content */}
              <div className="p-[18px] flex flex-col gap-2">
                <h3 className="font-medium text-[20px] leading-[100%] tracking-0 text-black">
                  {feature.title}
                </h3>
                <p className="font-normal text-[16px] leading-[24px] tracking-0 text-black-2">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <GradientButton
          type="button"
          onClick={onStartConversation}
          className="w-fit mx-auto"
        >
          Start Conversation
        </GradientButton>
      </div>
    </div>
  );
};

export default FeaturesSection;
