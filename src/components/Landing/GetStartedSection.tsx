import Image from 'next/image'
import GradientButton from '../shared/GradientButton'

const GetStartedSection = () => {
  return (
    <div className="min-h-screen py-[100px] lg:py-[200px] px-5 lg:px-[100px] w-full bg-white flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-center">
        <div className="flex-1 flex flex-col">
            <span className="font-medium text-[16px] leading-[16px] tracking-0 text-blue-1 mb-1">Get Started</span>            
            <div className='flex flex-col gap-6'>
                <h1 className="font-medium text-[28px] lg:text-[56px] leading-[100%] tracking-0 text-black-2">Try the Chatbot- Let&apos;s Make STEM Make Sense</h1>
                <p className='font-normal text-[16px] leading-[32px] tracking-0 text-black-2 w-full max-w-[524px]'>Your audience deserves explanations that make sense the first time. Use the chatbot now and elevate every STEM conversation you have.</p>
            </div>
            <GradientButton className="mt-12 w-fit">Start Conversation</GradientButton>
        </div>
        <div className="bg-white-5 rounded-[24px] h-[400px] w-full lg:min-w-[473px] lg:max-w-[473px] overflow-hidden">
            <Image src="/images/person-2.svg" alt="STEM Translation Chatbot Preview"  width={100} height={100}  className="w-full h-full object-cover" />
        </div>
    </div>
  )
}

export default GetStartedSection