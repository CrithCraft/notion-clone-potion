"use client";

import { ChevronsLeftRight } from "lucide-react";
import { useUser } from "@clerk/clerk-react";

import {
    Avatar, 
    AvatarImage
} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export const UserItem = () => {
    const { user } = useUser();

    return (
        <DropdownMenuTrigger asChild>
            <div role="button" className="flex items-center text-sm p-3 w-full hover:bg-primary/5">
                <div className="gap-x-2 flex items-center max-w-[150px]">
                    <Avatar className="h-5 w-5">
                        <AvatarImage src={user?.imageUrl} />
                    </Avatar>
                    <span className="text-start font-medium line-clamp-1">
                        {user?.fullName}&apos;s Jotion
                    </span>
                </div>
            </div>
        </DropdownMenuTrigger>
    )
}