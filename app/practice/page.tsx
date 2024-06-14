import Link from "next/link";

const manifest = [{
    title: 'scroll',
    path: '/practice/scroll'
}]

const Page = () => {
    return (
        <div>
            <section>
                <h1>SVG</h1>
                
                <Link href={`/nextjs-blog-deployment/svg`} >Basic Graph</Link>
                <Link href={`/nextjs-blog-deployment/svg/bauble`} >Bauble</Link>
            </section>
            <section>
                <h1>threejs</h1>
                <Link href={`/nextjs-blog-deployment/animate`} >人物</Link>
                <Link href={`/nextjs-blog-deployment/ankou`} >threejs move</Link>
                <Link href={`/nextjs-blog-deployment/cybertruck`} >threejs cybertruck</Link>
                <Link href={`/nextjs-blog-deployment/level-one`} >level one</Link>
                <Link href={`/nextjs-blog-deployment/physics`} >physics</Link>
                <Link href={`/nextjs-blog-deployment/scrolling`} >scrolling</Link>
                <Link href={`/nextjs-blog-deployment/terials`} >terials</Link>

            </section>
        </div>
    );
};

export default Page;