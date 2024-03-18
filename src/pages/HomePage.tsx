import AuthDialog from "@/components/Auth/AuthDialog";
import CardList from "@/components/CardList";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import ToastMessage from "@/components/ToastMessage";

function HomePage() {
  return (
    <>
      <Navbar />
      <AuthDialog />
      <Form />
      <CardList />
      <ToastMessage />
      <Footer />
    </>
  );
}

export default HomePage;
