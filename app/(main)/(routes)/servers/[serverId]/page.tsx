import { redirectToSignIn } from "@clerk/nextjs";

import { currentProfile } from "@/lib/current-profie";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

interface ServerIdPageProps {
  params: {
    serverId: string;
  }
};

const ServerIdPage = async ({
  params
}: ServerIdPageProps) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  const server = await db.server.findUnique({
    where: {
      id: params.serverId,
      members: {
        some: {
          profileId: profile.id,
        }
      }
    },
    include: {
      channels: {
        where: {
          name: "general"
        },
        orderBy: {
          createdAt: "asc"
        }
      }
    }
  })

    const initalChannel = server?.channels[0];

    if (initalChannel?.name !== "general") {
      return null;
    }
    return redirect(`/servers/${params.serverId}/channels/${initalChannel?.id}`)
}
 
export default ServerIdPage;