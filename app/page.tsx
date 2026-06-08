import { AutomationSection } from "@/components/AutomationSection";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProfileSection } from "@/components/ProfileSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { TestingSection } from "@/components/TestingSection";

export default function Page() {
  return (
    <main className="w-full">
      <Header />
      <HeroSection />
      <ProfileSection />
      <TestingSection />
      <AutomationSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
