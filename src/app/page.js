import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import OverView from "@/components/OverView";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <main className="px-4  sm:px-[3vw] overflow-hidden relative md:px-[5vw] lg:px-[7vw] xl:px-[9vw] w-full h-full flex flex-col items-center justify-center ">
      <HeroSection />
      <AboutSection />
      <OverView />
      <WorkSection />
      <ContactSection />
    </main>
  )
}