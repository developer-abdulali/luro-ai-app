import React from "react";

const SectionBadge = ({ title }: { title: string }) => {
  return (
    <div className="px-4 py-1 rounded-full bg-primary/20 cursor-pointer select-none">
      <div className="bg-[linear-gradient(110deg,#6d28d9,45%,#c4b5fd,55%,#6d28d9)] bg-[length:250%_100%] bg-clip-text animate-background-shine text-sm text-transparent font-medium">
        {title}
      </div>
    </div>
  );
};

export default SectionBadge;
