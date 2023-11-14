"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation"

import { cn } from "@/lib/utils";
import { ActionTooltip } from "@/components/action-tooltip";

interface NavigationItemProps {
    id: String;
    imageUrl: string;
    name: string;
}

export const NavigationItem = ({
    id,
    imageUrl,
    name
}: NavigationItemProps) => {
    const params = useParams();
    const router = useRouter();

    const onClick = () => {
        router.push(`/servers/${id}`)
    }

    return (
        <ActionTooltip
            side= "right"
            align= "center"
            label={name}
        >
            <button
                onClick= {onClick}
                className= "group relative flex items-center"               
            >
                <div className={cn(
                    "absolute left-0 bg-primary round-r-full transition-all w-[4px]",
                    params?.serverId !== id && "group-hover:h-[20px]",
                    // I had to switch 8 and 36 to get it to look correct?
                    params?.server === id ? "h-[8px]" : "h-[36px]" 
                    )} />
                <div className={cn(
                    "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transiton-all overflow-hidden",
                    params?.severId === id && "bg/primary10 text-primary rounded-[16px]"
                )}>
                    <Image
                        fill
                        src={imageUrl}
                        alt="Channel"
                        />
                
                </div>        
            </button>
        </ActionTooltip>
    )
    
}