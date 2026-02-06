import Image from "next/image";
import Link from "next/link";
import GradientButton from "../shared/GradientButton";

const CONSULTATION_URL = "https://meetings.hubspot.com/jessica1839";

const PersonalizedSupportSection = () => {
  return (
    <div className="min-h-screen py-25 lg:py-50 px-5 lg:px-25 w-full bg-white flex flex-col gap-12 lg:flex-row lg:justify-center lg:items-center">
      <div className="w-full lg:max-w-[500px] flex flex-col gap-11.75">
        <div className="bg-white-5 rounded-[10px] w-full lg:min-w-62.5 lg:max-w-62.5 min-h-62.5 max-h-62.5 overflow-hidden">
          <Image
            src="/images/person.svg"
            alt="Jessica Burgess - The STEM Translator"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <span className="font-medium text-[16px] leading-4 tracking-0 text-blue-1 mb-1">
            STEM Translation
          </span>
          <div className="flex flex-col gap-6">
            <h1 className="font-medium text-[28px] lg:text-[48px] leading-[100%] tracking-0 text-black-2">
              Need More Personalized Support?
            </h1>
            <p className="font-normal text-[16px] leading-8 tracking-0 text-black-2">
              Sometimes you need more than a great explanation—you need a
              partner who can help you deliver it with clarity and impact.
              Jessica Burgess, The STEM Translator™, offers expert coaching,
              workshops and one-one guidance rooted in learning science and
              years of professional experience. Check out our services or
              schedule a free 30-minute consultation to get started.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <Link href="/" className="inline-block">
                <GradientButton type="button" className="w-fit">
                  Check Out Services
                </GradientButton>
              </Link>
              <a
                href={CONSULTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-bold text-[16px] leading-[100%] tracking-0 py-2.5 px-5 rounded-[10px] border-2 border-blue-1 text-blue-1 hover:bg-blue-50/30 transition-colors"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedSupportSection;
