import Layout from "../components/Layout";
import fetch from 'isomorphic-unfetch';
import { Component } from "react";
import Error from './_error';

export default class About extends Component {

    static async getInitialProps() {
        const res = await fetch("https://api.github.com/users/g0ng0n-dev");
        const status = res.status > 200 ? res.status : false;
        const data = await res.json();

        return { user: data, status }
    }

    render(){
        const { user, status } = this.props;

        if (status) {
            return <Error status={status} />
        }


        return (
            <Layout title="About">
                <p>{user.name}</p>
                <img src={user.avatar_url} alt="logo Javascript" height="200px"/>
            </Layout>
        )
    }
}
