import Layout from "../components/Layout";
import Link from 'next/link';
import { withRouter } from 'next/router';

const Post = ({ router }) => (
    <Layout title={router.query.title}>
        <p style={{ width: "80vw" }}>Lorem impsun</p>
    </Layout>
)
export default withRouter(Post);
