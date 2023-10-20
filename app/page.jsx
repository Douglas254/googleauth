import UserInfo from "@/components/UserInfo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen grid place-items-center -mt-24">
      <UserInfo />
    </div>
  );
}
