import SiteChrome from "@/components/ns/SiteChrome";
import HomeBody from "@/components/ns/HomeBody";
import { HomeMotion } from "@/components/ns/SiteMotion";

export default function Home() {
  return (
    <SiteChrome>
      <HomeBody />
      <HomeMotion />
    </SiteChrome>
  );
}
