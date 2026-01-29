import { ShortLogo } from "@/src/components/brand";
import { Button } from "@/src/components/ui/button";
import { Separator } from "@/src/components/ui/separator";
import LoginSection from "./components/login-section";
import LoginHero from "./components/login-hero";

export default function Page() {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center font-inter bg-background">
            <div className="w-full max-w-[1600px] min-h-screen bg-background flex flex-col py-2">
                <div className="w-full flex justify-between items-center p-2 px-6">
                    <ShortLogo />
                    <Button appearance="outlined" variant="neutral">
                        VISIT WEBSITE
                    </Button>
                </div>
                <Separator />
                <div className="w-full flex-1 flex items-center px-6">
                    {/* <LoginSection /> */}
                    {/* <LoginHero /> */}
                </div>
            </div>
        </div>
    )
}
