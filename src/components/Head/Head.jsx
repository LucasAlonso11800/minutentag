import Head from "next/head";

export default function CustomHead({title}){
    return (
        <Head>
            <meta charset="UTF-8"/>
	        <title>{title}</title>
            <link rel="shortcut icon" href="Beer.png" type="image/x-icon" />
        </Head>
    )
}