import Link from 'next/link'
import Layout from "../components/Layout";

const About = () => (
    <Layout title="About">
        <Link href="/">
            <a>Go To Home</a>
        </Link>
        <p>A Javascript Programmer</p>
        <img src="/public/static/js-logo.jpeg" alt="logo Javascript" height="200px"/>
    </Layout>
)

export default About;
