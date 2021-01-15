import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = ( { slug, title}) => (
    <li>
        <Link as={`/${slug}`} href={`post?title=${title}`}>
            <a>{title}</a>
        </Link>
    </li>
)

const Blog = () => (
    <Layout title="MyBlog">
        <ul>
            <PostLink slug="react-post" title="React" />
            <PostLink slug="vue-post" title="Vue" />
            <PostLink slug="angular-post" title="Angular" />
        </ul>
    </Layout>
)
export default Blog;
