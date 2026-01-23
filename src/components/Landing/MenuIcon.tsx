type MenuIconProps = {
  onClick?: () => void;
}

const MenuIcon = ({ onClick }: MenuIconProps) => {
  return (
    <button onClick={onClick} className="flex flex-col gap-1.5 p-2 lg:hidden">
      <span className="w-6 h-0.5 bg-[#252525]"></span>
      <span className="w-6 h-0.5 bg-[#252525]"></span>
      <span className="w-6 h-0.5 bg-[#252525]"></span>
    </button>
  );
}

export default MenuIcon;