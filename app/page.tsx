import Analytics from "@/components/Analytics";
import Cards from "@/components/Cards";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";

export default function Home() {
    return (
        <div className="bg-[#000300]">
            <Hero />
            <Analytics />
            <Newsletter />
            <Cards />
        </div>
    );
}
