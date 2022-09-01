import React, {useEffect , useState} from "react";
import axios from 'axios';
import Startups from "./startups";
import Menu from "./menu";

const Sirket = ({  }) => {

    const [sirket , setSirket ] = useState ([]);


    useEffect(() => {

        const fetchData = async() => {
            const {data} = await axios.get('http://localhost:3000/startup');
            setSirket(data);
        
        }

        fetchData();

        return () => {}
    },[]);

    

    return(
        <div>
            <Menu />

        {sirket.map((sirket, index) =>
                <Startups sirketAdi={sirket.sirketAdi}
                    fikir={sirket.fikir}
                    yatirimDegeri={sirket.yatirimDegeri}
                    kurucusu={sirket.kurucusu}
                    sektor={sirket.sektor}
                    kurulusu={sirket.kurulusu}
                    display={false}
                    link={sirket.link}
                    id={sirket.id}
                    key={index} />
            )}
            

        </div>

    )
 };

export default Sirket;