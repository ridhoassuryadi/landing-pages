import ControlBar from "@components/ControlBar";
import Desktop from "@components/Desktop";
import Inbox from "@components/Inbox";
import Notifications from "@components/Notifications";
import TaskBar from "@components/TaskBar";
import TitleBar from "@components/TitleBar";
import Windows from "@components/Windows";
import { WavyBackground } from "@components/WavyBackground";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-background">
      <div className="flex h-full w-full flex-col bg-wallpaper">
        <WavyBackground className="mx-auto"></WavyBackground>
        <TitleBar />
        <Desktop />
        <Windows />
        <Notifications />
        <Inbox />
        <TaskBar />
        <ControlBar />
      </div>
    </div>
  );
}
