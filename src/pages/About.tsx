import AboutCompany from "../components/AboutCompany";
import Layout from "../components/Layout";
import MainTitle from "../components/MainTitle";

export default function About() {
    return (
        <Layout title="About my project">
            <MainTitle>About</MainTitle>
            <AboutCompany />
        </Layout>
    )
}