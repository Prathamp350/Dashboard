const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-4`}>
      <img
        src="../public/assets/atul-logo.png" // Correct path if you're using `public` folder in Next.js or Vite
        alt="Atul Logo"
        className="h-14 w-auto"
      />

      {/* Text next to logo */}
      <div className="flex flex-col leading-tight">
        <span className="text-[23px] font-semibold text-gray-600 font-playfair">
          SAFETY TRAINING PORTAL
        </span>
      </div>
    </div>
  );
};

export default Logo;
