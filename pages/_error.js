import Layout from "../components/Layout";

export default ({status}) => (
    <Layout title="ERROR!!!">
        {status ? `Could not load your user data: Status Code ${status}` : "Couldn't get that page, Sorry!"}
    </Layout>
)

