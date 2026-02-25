import { H1, H2, H3, P } from "@/components/typography";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Link2 } from "lucide-react";

export default function Page() {
    return <>
        <H1>alixz.ovh</H1>
        <P>Editing and programming are what makes my kokoro go dokidoki :-)</P>
        <H2 className="mt-6">Projects</H2>
        <Card className="relative mx-auto w-full pt-0 mt-3">
            <Image
                src="/uwu2x.jpg"
                alt="uwu2x cover"
                className="relative w-full object-cover h-48"
                width={1920} height={1080}
            />
            <CardHeader>
                <CardTitle>uwu2x</CardTitle>
                <CardDescription>
                    An After Effects extension that improves the quality and the smoothness of clips, similar to what Topaz and Flowframes do, but in one click !
                    <br/><br/>
                    Used by 7000 people every month, and seen +300,000 times on Youtube.
                </CardDescription>
            </CardHeader>
            <CardFooter className="gap-4">
                <Link target="_blank" href="https://www.youtube.com/watch?v=vZzZFXzzWFU">
                    <Button className="w-full">Trailer <Link2></Link2></Button>
                </Link>
                <Link target="_blank" href="https://uwu2x.alixz.ovh">
                    <Button className="w-full">uwu2x.alixz.ovh <Link2></Link2></Button>
                </Link>
            </CardFooter>
        </Card>
    </>;
}