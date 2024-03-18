import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Table from "@/components/Table";
import ToastMessage from "@/components/ToastMessage";

function AdminPage() {
  return (
    <>
      <Navbar />
      <Table />
      <ToastMessage />
      <Footer />
    </>
  );
}

export default AdminPage;
