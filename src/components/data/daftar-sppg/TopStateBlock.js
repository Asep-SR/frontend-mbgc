import React from "react";

const statisticsData = [
  {
    text: "Jumlah SPPG (existing saat ini)",
    title: "-",
    icon: "flaticon-home",
  },
  {
    text: "Jumlah SPPG Operasional",
    title: "-",
    icon: "flaticon-search-chart",
  },
  {
    text: "Jumlah Penerima Manfaat (orang)",
    title: "-",
    icon: "flaticon-review",
  },
  {
    text: "Jumlah Relawan (orang)",
    title: "-",
    icon: "flaticon-like",
  },
  // {
  //   text: "Jumlah SPPG Selesai IKL",
  //   title: "80",
  //   icon: "flaticon-like",
  // },
  // {
  //   text: "Jumlah SPPG Selesai IKL yang Memenuhi Syarat",
  //   title: "78",
  //   icon: "flaticon-like",
  // },
  // {
  //   text: "Jumlah SPPG Selesai IKL yang Belum Memenuhi Syarat",
  //   title: "2",
  //   icon: "flaticon-like",
  // },
  // {
  //   text: "Jumlah SPPG Mengikuti Pelatihan Keamanan Pangan (PKP)",
  //   title: "90",
  //   icon: "flaticon-like",
  // },
  // {
  //   text: "Jumlah SPPG Melakukan Pemeriksaan Sampel yang Memenuhi Syarat",
  //   title: "12",
  //   icon: "flaticon-like",
  // },
  // {
  //   text: "Jumlah SPPG Melakukan Pemeriksaan Sampel yang Tidak Memenuhi Syarat",
  //   title: "46",
  //   icon: "flaticon-like",
  // },
  // {
  //   text: "SPPG Memiliki SLHS",
  //   title: "12",
  //   icon: "flaticon-like",
  // },
  // {
  //   text: "SPPG Proses SLHS",
  //   title: "78",
  //   icon: "flaticon-like",
  // },
];

const TopStateBlock = () => {
  return (
    <>
      {statisticsData.map((data, index) => (
        <div key={index} className="col-sm-6 col-xxl-3">
          <div className="d-flex justify-content-between statistics_funfact">
            <div className="details">
              <div className="text fz25">{data.text}</div>
              <div className="title">{data.title}</div>
            </div>
            <div className="icon text-center">
              <i className={data.icon} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopStateBlock;
