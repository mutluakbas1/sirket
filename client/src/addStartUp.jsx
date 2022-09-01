import  { useEffect , useState} from "react";

import Menu from "./menu";

import axios from 'axios';

const AddStartUp = ({ }) =>{

    const [sirketAdi , setSirketAdi] =useState('0');
    const [fikir , setFikir] =useState('0');
    const [yatirimDegeri , setYatirimDegeri] =useState('0');
    const [kurucusu , setKurucusu] =useState("0");
    const [sektor , setSektor] =useState('0');
    const [kurulusu , setKurulusu] =useState("0");

    const [displayResult, setDisplayResult] = useState(true);

    const startUpEkle = () => {

        axios.post('http://localhost:3000/add-startup', {
           sirketAdi: sirketAdi,
            fikir: fikir,
            yatirimDegeri: yatirimDegeri,
            kurucusu : kurucusu,
            sektor : sektor,
            kurulusu : kurulusu
          })
          .then(function (response) {
            console.log(response);
            setDisplayResult(false);
          })    
          .catch(function (error) {
            console.log(error);
          });
    }


    return(
       <div>
        <Menu />
        { (displayResult) ?
            <div >
                <div className="col-sm-4">

                    <label>Sirket Adi: </label>
                    <input type={'text'}
                        onChange={(e) => {
                            setSirketAdi(e.target.value);
                        }} />
                </div>

                <div className="col-sm-4">
                    <label>Fikir: </label>
                    <textarea rows="2" cols="32" type={'text'}
                        onChange={(e) => {
                            setFikir(e.target.value);
                        }} />
                </div>

                <div className="col-sm-4">
                    <label>Yatirim Degeri: </label>
                    <input  type={'text'}
                        onChange={(e) => {
                            setYatirimDegeri(e.target.value);
                        }} />
                </div>

                <div className="col-sm-4">
                    <label>Kurucusu: </label>
                    <input type={'text'}
                        onChange={(e) => {
                            setKurucusu(e.target.value);
                        }} />
                </div>

                <div className="col-sm-4">
                    <label>Kurulusu: </label>
                    <input type={'text'}
                        onChange={(e) => {
                            setKurulusu(e.target.value);
                        }} />
                </div>

                <div className="col-sm-4">
                    <label>Sektor: </label>
                    <input type={'text'}
                        onChange={(e) => {
                            setSektor(e.target.value);
                        }} />
                </div>

                <div className="col-sm-4">
                <button onClick={startUpEkle}>StartUp Ekle</button>
            </div> 
            </div>
             : <div>Start up added successfully</div> }
        

        </div>
    )
};

export default AddStartUp;