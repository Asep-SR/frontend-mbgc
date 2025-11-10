import React from "react";

const statisticsData = [
  {
    text: "Jumlah Kecamatan Penerima Manfaat",
    title: "-",
    icon: "flaticon-home",
  },
  {
    text: "Jumlah Desa Penerima Manfaat",
    title: "-",
    icon: "flaticon-search-chart",
  },
  {
    text: "Jumlah Penerima Manfaat (orang)",
    title: "-",
    icon: "flaticon-review",
  },
  {
    text: "Jumlah Sekolah Penerima Manfaat",
    title: "-",
    icon: "flaticon-like",
  },
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
