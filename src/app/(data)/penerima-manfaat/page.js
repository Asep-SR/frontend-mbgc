import DefaultHeader from "@/components/common/DefaultHeader";
import MobileMenu from "@/components/common/mobile-menu";
import Footer from "@/components/property/dashboard/Footer";
import PenerimaManfaatTable from "@/components/tables/PenerimaManfaatTable";
import data from "@/data/penerima-manfaat.json";
import PenerimaManfaatBlock from "@/components/data/daftar-sppg/PenerimaManfaatBlock";
import ClientOnlyTable from "@/components/tables/ClientOnlyTable";

export const metadata = {
  title: "Penerima Manfaat || MBGC - Satgas Percepatan MBG Kabupaten Ciamis",
};

export default async function DashboardHomePage() {

  return (
    <>
      <DefaultHeader />
      <MobileMenu />
      <div className="dashboard_content_wrapper">
        <div className="dashboard dashboard_wrapper">
          <div className="dashboard__main pl0-md">
            <div className="dashboard__content bgc-f7">
              <div className="row pb40">
                <div className="col-lg-12">
                  <div className="dashboard_title_area">
                    <h2>Penerima Manfaat</h2>
                    <p className="text">Menampilkan data per Kecamatan hingga tingkat Desa/Kelurahan</p>
                  </div>
                </div>
              </div>

              <div className="row">
                <PenerimaManfaatBlock />
              </div>

              {/* <div className="row">
                <div className="col-lg-12">
                    <div className="datatable-wrapper">
                        <ClientOnlyTable data={data} component={PenerimaManfaatTable} />
                    </div>
                </div>
              </div> */}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
