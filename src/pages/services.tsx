import Link from "next/link";
import {Header} from "@/components/Header/Header";
import {Menu} from "@/components/Menu/Menu";


const Services = () => {
    return (
        <>
            <Header handleClick={() => {}}/>
            <Menu />
            <h1>Services</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    )
}

export default Services;