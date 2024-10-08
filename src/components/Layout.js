import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ title, content, children }) {
    const newTitle = `Yassin Portfolio | ${title}`;
    return (
        <>
            <Head>
                <title>{newTitle}</title>
                <meta name="description" content={content} />
            </Head>
            <Navbar />
            {children}
        </>
    )
}