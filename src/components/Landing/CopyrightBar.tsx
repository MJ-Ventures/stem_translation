const CopyrightBar = () => {
  return (
    <div className="py-[17px] px-5 lg:px-[80px] flex items-center justify-between gap-4" style={{ background: "linear-gradient(112.45deg, #38B2C0 -10.01%, #1D82E2 11.79%, #197BE7 30.53%, #248ED9 69.26%, #3CBABA 116.28%)"}}>
        <p className="font-medium text-[16px] leading-[100%] tracking-0 text-white">Copyright 2025 - STEM Translation Co.</p>
        <div className="flex items-center gap-4">
            <p className="font-medium text-[16px] leading-[100%] tracking-0 text-white">Terms of Service</p>
            <div className="w-px h-[16px] bg-white" />
            <p className="font-medium text-[16px] leading-[100%] tracking-0 text-white">Privacy Policy</p>
        </div>
    </div>
  )
}

export default CopyrightBar