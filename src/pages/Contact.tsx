import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import MainTitle from "../components/MainTitle";

export default function Contact() {
    return (
        <Layout title="Contact me">
            <MainTitle>Contact</MainTitle>
            <ContactForm />
        </Layout>
    )
}