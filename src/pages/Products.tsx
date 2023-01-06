import Layout from "../components/Layout";
import MainTitle from "../components/MainTitle";
import Store from "../components/Store";

export default function Products() {
    return (
        <Layout title="Incredible products">
            <MainTitle>Products</MainTitle>
            <Store />
        </Layout>
    )
}