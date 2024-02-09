import AccountContent from "../../components/account/AccountContent";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

export default function Account() {
    return (
        <>
          <Header />
          <section className="account_body">
            <AccountContent />
          </section>
          <Footer />
        </>
      );
}