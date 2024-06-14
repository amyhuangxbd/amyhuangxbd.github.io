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
                <Link href={`/nextjs-blog-deployment/threejs/animate`} >人物</Link>
                <Link href={`/nextjs-blog-deployment/threejs/ankou`} >threejs move</Link>
                <Link href={`/nextjs-blog-deployment/threejs/cybertruck`} >threejs cybertruck</Link>
                <Link href={`/nextjs-blog-deployment/threejs/level-one`} >level one</Link>
                <Link href={`/nextjs-blog-deployment/threejs/physics`} >physics</Link>
                <Link href={`/nextjs-blog-deployment/threejs/scrolling`} >scrolling</Link>
                <Link href={`/nextjs-blog-deployment/threejs/terials`} >terials</Link>

            </section>
        </div>
    );
};

export default Page;