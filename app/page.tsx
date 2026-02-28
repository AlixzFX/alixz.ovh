import { H1, H2, P } from "@/components/typography";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Suspense } from "react";
import { Wakatime } from "@/components/wakatime";
import { MyBarChartSkeleton } from "@/components/bar-chart";
import { WakatimeHint } from "@/components/wakatime-hint";

export default function Page() {
  return <>
    <H1>alixz.ovh</H1>

    <P>editing and programming are what makes my kokoro go dokidoki :D</P>
    <div className="inline-flex gap-4 mt-4">
      <Link target="_blank" href="https://gitea.alixz.ovh/alixz">
        <Button variant="outline" className="w-full">alixz <Github /></Button>
      </Link>
    </div>

    <H2 className="mt-4">projects</H2>
    <Card className="relative mx-auto w-full pt-0 mt-3">
      <div className="relative">
        <Image
          src="/uwu2x.jpg"
          alt="uwu2x cover"
          className="relative w-full object-cover h-64"
          width={1920} height={1080}
        />
        <div className="absolute top-4 right-2 rotate-12">
          <div className="px-2 py-2 rounded-md border-2 border-destructive bg-red-200 dark:bg-red-900 text-destructive">
            <span className="text-xs font-black whitespace-pre-line text-center block tracking-wide">
              {"7,000 monthly\nactive users"}
            </span>
          </div>
        </div>
      </div>
      <CardHeader className="gap-2">
        <CardTitle>uwu2x</CardTitle>
        <CardDescription>
          a video processing tool integrated into Adobe After Effects that enhances clip quality and smoothness using AI.
          <br />
          <div className="inline-flex gap-4 mt-3">
            <Link target="_blank" href="https://www.youtube.com/watch?v=lmhZMG4wl-M">
              <Button variant="outline" className="w-full">Trailer <ExternalLink /></Button>
            </Link>
            <Link target="_blank" href="https://uwu2x.alixz.ovh">
              <Button variant="outline" className="w-full">uwu2x.alixz.ovh <ExternalLink /></Button>
            </Link>
          </div>
        </CardDescription>
      </CardHeader>
    </Card>

    <H2 className="mt-4">
      monthly coding stats{" "}
      <span className="inline-flex align-middle mb-0.5">
        <WakatimeHint />
      </span>
    </H2>
    <Suspense fallback={<MyBarChartSkeleton className="mt-2" />}>
      <Wakatime className="mt-2" />
    </Suspense>
  </>;
}