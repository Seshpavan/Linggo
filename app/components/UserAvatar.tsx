import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/app/components/ui/avatar"
import { cn } from "@/lib/utils"
import Image from "next/image";

export default function UserAvatar({
    name,
    image,
    className
}: {
    name?: string | null;
    image?: string | null;
    className?: string;
}) {
    return (
        <Avatar className={cn('bg-white text-black', className)}>
            { image && (
                <Image
                src={image}
                alt={name || "User name"}
                width={40}
                height={40}

                referrerPolicy="no-referrer"
                className="rounded-full"
                />
            )}
            {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
            <AvatarFallback 
            delayMs={1000}
            className="dark:bg-white dark:text-black text-lg ">
                {name
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("")}
            </AvatarFallback>
        </Avatar>
    )
}
