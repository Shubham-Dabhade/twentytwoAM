import React, { useEffect, useState } from 'react';
import "./work.css";
import Work_Carousel from './Work_Carousel/Work_Carousel';
import Company_Carousel from './Company_Carousel/Company_Carousel';

import work_data from '../../work_details';

const Work = () => {

    const [workData, setWorkData] = useState();
    const [amount, setAmount] = useState(0);
    const [currentComp, setCurrenComp] = useState(1);

    const [workImages,setWorkImages] = useState([]);
    const [workNames, setWorkNames]= useState([]);
    const [logoName,setLogoName] = useState();
    const [logoImage, setLogoImage] = useState();

    const total_work = work_data.length;




    useEffect(()=>{

        work_data.forEach((data)=>{
            if (data.id === currentComp){
                setWorkData(data);
                setAmount(data.amount);
                setWorkImages(data?.workImage);
                setWorkNames(data?.workName);
                setLogoName(data?.logoName);
                setLogoImage(data?.logoImage);
            }
        });

        // if(currentComp<=total_work){
        //     setTimeout(()=>{
        //         setCurrenComp(currentComp+1);
        //     },amount*3000);
        // }
        // if(currentComp > total_work){
        //     setCurrenComp(1);
        // }
    },[currentComp])

    // console.log("current")
    // console.log(workNames);



  return (
    <div className='Work'>
        <div className='inside-work-container'>
            <Work_Carousel workIn={workData} workImage={workImages? workImages : work_data[0].workImage} workNames={workNames?workNames :work_data[0].workName} amount={amount} currentComp={currentComp}/>
            <Company_Carousel workIn={workData} logoImage={logoImage} logoName={logoName} currentComp={currentComp}/>
        </div>
    </div>
  )
}

export default Work;