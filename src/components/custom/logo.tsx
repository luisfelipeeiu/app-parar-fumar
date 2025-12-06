import { Flame } from "lucide-react";

interface LogoProps {
  variant?: "horizontal" | "vertical" | "icon";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Logo({ variant = "horizontal", size = "md", className = "" }: LogoProps) {
  const sizes = {
    sm: { icon: "w-6 h-6", text: "text-lg", container: "gap-2" },
    md: { icon: "w-8 h-8", text: "text-2xl", container: "gap-3" },
    lg: { icon: "w-12 h-12", text: "text-4xl", container: "gap-4" },
  };

  const currentSize = sizes[size];

  // Apenas ícone
  if (variant === "icon") {
    return (
      <div className={`relative ${className}`}>
        <div
          className={`${currentSize.icon} rounded-full flex items-center justify-center`}
          style={{
            background: "linear-gradient(135deg, #00C36F 0%, #004E8A 100%)",
          }}
        >
          <Flame className="w-2/3 h-2/3 text-white" />
        </div>
      </div>
    );
  }

  // Logo horizontal (padrão)
  if (variant === "horizontal") {
    return (
      <div className={`flex items-center ${currentSize.container} ${className}`}>
        <div
          className={`${currentSize.icon} rounded-full flex items-center justify-center flex-shrink-0`}
          style={{
            background: "linear-gradient(135deg, #00C36F 0%, #004E8A 100%)",
          }}
        >
          <Flame className="w-2/3 h-2/3 text-white" />
        </div>
        <span
          className={`${currentSize.text} font-bold`}
          style={{
            background: "linear-gradient(135deg, #00C36F 0%, #004E8A 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          QuitSmokePro
        </span>
      </div>
    );
  }

  // Logo vertical
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <div
        className={`${currentSize.icon} rounded-full flex items-center justify-center`}
        style={{
          background: "linear-gradient(135deg, #00C36F 0%, #004E8A 100%)",
        }}
      >
        <Flame className="w-2/3 h-2/3 text-white" />
      </div>
      <span
        className={`${currentSize.text} font-bold text-center`}
        style={{
          background: "linear-gradient(135deg, #00C36F 0%, #004E8A 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        QuitSmokePro
      </span>
    </div>
  );
}
