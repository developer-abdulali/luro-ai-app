import { cn } from "@/functions/cn";

interface Props {
    className?: string;
    children: React.ReactNode;
}

const Wrapper = ({ className, children }: Props) => {
    return (
        <div className={cn('size-full mx-auto max-w-6xl px-4 md:px-12', className)}>{children}</div>
    )
}

export default Wrapper