import React from "react";

const Startups = ({  display, sirketAdi, fikir, yatirimDegeri, kurucusu ,id, sektor , kurulusu
      }) => {

    return (
        <div className="div-bottom-border">

            {(display) ? <Menu /> : <></>}

          
            <div className="row">
              
                <div className="col-sm-4">

                    <p>{id}</p>

                    <p>Sirket Adi: {sirketAdi}</p>
                    <p>Fikir: {fikir}</p>
                    <p>Yatirim Degeri: {yatirimDegeri}</p>
                    <p>Kurucusu: {kurucusu}</p>
                    <p>Sektor: {sektor}</p>
                    <p>Kurulusu: {kurulusu}</p>

                </div>




            </div>
        </div>

    )
};


export default Startups;


