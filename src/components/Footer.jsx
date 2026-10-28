import { Linkedin, GitHub, Instagram, Mail } from "react-feather";

export default function Footer() {
    return (
        <div className="app-container flex justify-between mt-8 xl:mt-15">
            <h1 className="font-text text-sm xl:text-lg">© 2026. created By Hatim Elbakkali</h1>
            <div className="flex gap-2">
                <Linkedin className="size-6 xl:size-8" strokeWidth={1.5} />
                <GitHub className="size-6 xl:size-8" strokeWidth={1.5} />
                <Instagram className="size-6 xl:size-8" strokeWidth={1.5} />
                <Mail className="size-6 xl:size-8" strokeWidth={1.5} />
            </div>
        </div>
    )
}