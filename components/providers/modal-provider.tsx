"use client";

import { useEffect, useState } from "react";

import { InviteModal } from "@/components/modals/invite-modal";
import { CreateServerModal } from "@/components/modals/create-server-modal";
import { EditServerModal } from "@/components/modals/edit-server-modal";
import { MembersModel } from "@/components/modals/members-modal";
import { CreateCHannelrModal } from "@/components/modals/create-channel-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
        <CreateServerModal />
        <InviteModal />
        <EditServerModal />
        <MembersModel />
        <CreateCHannelrModal />
        </>
    )
}