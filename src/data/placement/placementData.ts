import * as Yup from "yup";
import { customeOverViewType } from "../../types/home-data-type";
import { TableRowData } from "../../types/table-data-types";
import Placement_Policy from "../../assets/pdf/placement/placement-policies/placement-policy-191223122840-060324102152.pdf";
import Early_Joining_Policy from "../../assets/pdf/placement/placement-policies/early-joining-policy-191223122925-060324102214.pdf";
import Industrial_Visit_Policy from "../../assets/pdf/placement/placement-policies/industrial-visit-policy-191223123100-060324102231.pdf";
import { AlumniRegistrationField } from "../../types/placement-type";
import shivam from "../../assets/images/placements/placement-overview/placement-records/images/shivam-agarwal.jpg";
import prashansha from "../../assets/images/placements/placement-overview/placement-records/images/prashansha-.jpg";
import gaurav from "../../assets/images/placements/placement-overview/placement-records/images/gaurav-kumar-chaturvedi.jpg";
import amaan from "../../assets/images/placements/placement-overview/placement-records/images/amaan-abidin.jpg";
import sudhanshu from "../../assets/images/placements/placement-overview/placement-records/images/sudhanshu-.jpg";
import ankur from "../../assets/images/placements/placement-overview/placement-records/images/-ankur-singhjpeg.jpeg";
import vidushi from "../../assets/images/placements/placement-overview/placement-records/images/vidushi-sharma.jpg";
import anushka from "../../assets/images/placements/placement-overview/placement-records/images/anushka-kanoujia.jpg";
import aditi from "../../assets/images/placements/placement-overview/placement-records/images/aditi-vikram.jpg";
import gauravTiwari from "../../assets/images/placements/placement-overview/placement-records/images/gaurav-tiwari.jpg";
import arpita from "../../assets/images/placements/placement-overview/placement-records/images/arpita-tiwari.jpg";
import aryan from "../../assets/images/placements/placement-overview/placement-records/images/aryan-verma.jpg";
import prakrati from "../../assets/images/placements/placement-overview/placement-records/images/prakrati-saraswat.jpg";
import akarsh from "../../assets/images/placements/placement-overview/placement-records/images/akarsh-verma.jpg";
import sachin from "../../assets/images/placements/placement-overview/placement-records/images/sachin-kumar-singhjpg.jpg";
import lovkush from "../../assets/images/placements/placement-overview/placement-records/images/lovkush-pandey.jpg";
import aditya from "../../assets/images/placements/placement-overview/placement-records/images/aditya-mishra.jpg";
import nekesh from "../../assets/images/placements/placement-overview/placement-records/images/nekesh-.jpg";
import prem from "../../assets/images/placements/placement-overview/placement-records/images/prem-prakash-verma.jpg";
import abhishekGiri from "../../assets/images/placements/placement-overview/placement-records/images/abhishek-giri.jpg";
import shreyaRastogi from "../../assets/images/placements/placement-overview/placement-records/images/shreya-rastogi.jpg";
import kundan from "../../assets/images/placements/placement-overview/placement-records/images/kundan-pandey.jpg";
import tanya from "../../assets/images/placements/placement-overview/placement-records/images/tanya-jaiswal.jpg";
import ajay from "../../assets/images/placements/placement-overview/placement-records/images/ajay-kumar-pandey.jpg";
import titiksha from "../../assets/images/placements/placement-overview/placement-records/images/titiksha-sonkar.png";
import prakash from "../../assets/images/placements/placement-overview/placement-records/images/prakash-bajpai.jpg";
import kaushik from "../../assets/images/placements/placement-overview/placement-records/images/kaushik-upadhyay.jpg";
import gloria from "../../assets/images/placements/placement-overview/placement-records/images/gloria-babu.jpg";
import chandra from "../../assets/images/placements/placement-overview/placement-records/images/chandra-prabha.jpg";
import sourabh from "../../assets/images/placements/placement-overview/placement-records/images/sourabh-yadav.jpg";
import aditiYadav from "../../assets/images/placements/placement-overview/placement-records/images/aditi-yadav.jpg";
import vaibhav from "../../assets/images/placements/placement-overview/placement-records/images/vaibhav-jaiswal.png";
import mritunjay from "../../assets/images/placements/placement-overview/placement-records/images/mritunjay-singh.jpg";
import utkarsh from "../../assets/images/placements/placement-overview/placement-records/images/utkarsh-gupta.jpeg";
import abhay from "../../assets/images/placements/placement-overview/placement-records/images/abhaya-nigam.jpg";
import sap from "../../assets/images/placements/placement-overview/placement-records/logos/sap.png";
import learningRoute from "../../assets/images/placements/placement-overview/placement-records/logos/learning-route.png";
import hettich from "../../assets/images/placements/placement-overview/placement-records/logos/hettich.png";
import beacon from "../../assets/images/placements/placement-overview/placement-records/logos/beacon.png";
import learningShala from "../../assets/images/placements/placement-overview/placement-records/logos/learningshala.png";
import planetSpark from "../../assets/images/placements/placement-overview/placement-records/logos/planet-spark.png";
import windmoller from "../../assets/images/placements/placement-overview/placement-records/logos/windmoller.png";
import mycaptin from "../../assets/images/placements/placement-overview/placement-records/logos/mycaptin.png";
import integratedResources from "../../assets/images/placements/placement-overview/placement-records/logos/integrated-resources.png";
import byjus from "../../assets/images/placements/placement-overview/placement-records/logos/byjus.png";
import eduyoga from "../../assets/images/placements/placement-overview/placement-records/logos/eduyoga.png";
import tcs from "../../assets/images/placements/placement-overview/placement-records/logos/tcs.png";
import jaroEducation from "../../assets/images/placements/placement-overview/placement-records/logos/jaro-education.png";
import salesken from "../../assets/images/placements/placement-overview/placement-records/logos/salesken.png";
import ataaKhan from "../../assets/images/placements/placement-overview/placement-records/images/ataa-khan-.jpg";
import tusharTrivedi from "../../assets/images/placements/placement-overview/placement-records/images/tushar-trivedi.jpg";
import nikhilTiwari from "../../assets/images/placements/placement-overview/placement-records/images/nikhil-tiwari.jpg";
import amanSinha from "../../assets/images/placements/placement-overview/placement-records/images/aman-sinha.jpg";
import harshitaAwasthi from "../../assets/images/placements/placement-overview/placement-records/images/harshita-awasthi.jpg";
import anmolMishra from "../../assets/images/placements/placement-overview/placement-records/images/anmol-mishra.jpg";
import ishikaJindal from "../../assets/images/placements/placement-overview/placement-records/images/ishika-jindal.jpg";
import sonal from "../../assets/images/placements/placement-overview/placement-records/images/sonal.jpg";
import kritiMishra from "../../assets/images/placements/placement-overview/placement-records/images/kriti-mishra.jpg";
// import sahulPandey from "../../assets/images/placements/placement-overview/placement-records/images/sahul-pandey.jpeg";
// import harshitaShukla from "../../assets/images/placements/placement-overview/placement-records/images/harshita-shukla.jpg";
// import tusharSuryavanshi from "../../assets/images/placements/placement-overview/placement-records/images/tushar-suryavanshi.jpg";
// import suryanshuPandey from "../../assets/images/placements/placement-overview/placement-records/images/suryanshu-pandey.jpg";
// import muskanSingh from "../../assets/images/placements/placement-overview/placement-records/images/muskan-singh.jpg";
// import ayushTiwari from "../../assets/images/placements/placement-overview/placement-records/images/ayush-tiwarijpg.jpg";
// import shatakshiDubey from "../../assets/images/placements/placement-overview/placement-records/images/shatakshi-jpg.jpg";
// import shivangiGupta from "../../assets/images/placements/placement-overview/placement-records/images/shivangi-gupta.jpg";
// import rohanKumar from "../../assets/images/placements/placement-overview/placement-records/images/rohan-kumar-.jpg";
// import saurabhYadav from "../../assets/images/placements/placement-overview/placement-records/images/saurav-yadav.jpg";
// import ananyaShukla from "../../assets/images/placements/placement-overview/placement-records/images/ananya-shukla.jpg";
// import nausheenBano from "../../assets/images/placements/placement-overview/placement-records/images/nausheen-bano.jpg";
// import anshikaRathore from "../../assets/images/placements/placement-overview/placement-records/images/anshika-rathorejpg.jpg";
// import anjaneeKumarYadav from "../../assets/images/placements/placement-overview/placement-records/images/anjanee-kumar-.jpg";
// import shreyaBajpai from "../../assets/images/placements/placement-overview/placement-records/images/shreya-bajpai.jpg";
// import arunimaSrivastava from "../../assets/images/placements/placement-overview/placement-records/images/arunima-srivastavajpg.jpg";
// import shivendraPratapSingh from "../../assets/images/placements/placement-overview/placement-records/images/shivendra-pratap-singh.jpg";
// import vanshikaVerma from "../../assets/images/placements/placement-overview/placement-records/images/vanshika-verma-.jpg";
// import sakshiSoni from "../../assets/images/placements/placement-overview/placement-records/images/sakshi-soni.jpg";
// import meghnaTiwari from "../../assets/images/placements/placement-overview/placement-records/images/meghna-tiwari-.jpg";
// import prashantManiTripathi from "../../assets/images/placements/placement-overview/placement-records/images/prashant-mani-.jpg";
import avatar from "../../assets/images/placements/placement-overview/placement-records/images/avatar-1.jpg";
import aryanSinghRajpoot from "../../assets/images/placements/placement-overview/placement-records/images/aryan-singh-rajpoot.png";
import shivJiTiwari from "../../assets/images/placements/placement-overview/placement-records/images/shiv-ji-tiwari.png";
import sachinDubey from "../../assets/images/placements/placement-overview/placement-records/images/sachin-dubey.jpg";
import abhishekGupta from "../../assets/images/placements/placement-overview/placement-records/images/abhishek-gupta.jpg";
import amitSingh from "../../assets/images/placements/placement-overview/placement-records/images/amit-singh.jpeg";
import anupSingh from "../../assets/images/placements/placement-overview/placement-records/images/anup-singh.jpeg";
import arunKumarYadav from "../../assets/images/placements/placement-overview/placement-records/images/arun-kumar-yadav.jpeg";
import devKumar from "../../assets/images/placements/placement-overview/placement-records/images/dev-kumar-min.jpg";
import abhishekGuptaMin from "../../assets/images/placements/placement-overview/placement-records/images/abhishek-gupta-min.jpg";
import anantShukla from "../../assets/images/placements/placement-overview/placement-records/images/anant-n.p-shukla-min.jpeg";


export const placementOverviewplacementData: Record<string, Student[]> = {
  "2023": [
    {
      id: 1,
      name: "Shivam Agarwal",
      degree: "B.Tech. in Computer Science Engineering",
      companyLogo: sap,
      package: "9.00 LPA",
      image: shivam,
    },
    {
      id: 2,
      name: "Prashansha Srivastava",
      degree: "B.Tech. in Biotechnology",
      companyLogo: learningRoute,
      package: "5.70 LPA",
      image: prashansha,
    },
    {
      id: 3,
      name: "Gaurav Kumar Chaturvedi",
      degree: "B.Tech. in Mechanical Engineering",
      companyLogo: hettich,
      package: "4.20 LPA",
      image: gaurav,
    },
    {
      id: 4,
      name: "Md Amaan Abidin",
      degree: "B.Tech. in Mechanical Engineering",
      companyLogo: hettich,
      package: "4.20 LPA",
      image: amaan,
    },
    {
      id: 5,
      name: "Sudhanshu Ranjan",
      degree: "B.Tech. in Electrical Engineering",
      companyLogo: hettich,
      package: "4.20 LPA",
      image: sudhanshu,
    },
    {
      id: 6,
      name: "Ankur Singh",
      degree: "M.B.A. (Master of Business Administration)",
      image: ankur,

      companyLogo: beacon,
      package: "5.89 LPA",
    },
    {
      id: 7,
      name: "Vidushi Sharma",
      degree: "B.Sc.(Hons.) in Biotechnology",
      image: vidushi,
      companyLogo: learningShala,
      package: "5.04 LPA",
    },
    {
      id: 8,
      name: "Anushka Kanojia",
      degree: "M.B.A. (Master of Business Administration)",
      image: anushka,

      companyLogo: learningShala,
      package: "5.64 LPA",
    },
    {
      id: 9,
      name: "Aditi Vikram",
      degree: "B.Tech. in Biotechnology",
      image: aditi,
      companyLogo: planetSpark,
      package: "6.50 LPA",
    },
    {
      id: 10,
      name: "Gaurav Tiwari",
      degree: "B.Tech. in Electrical Engineering",
      image: gauravTiwari,
      companyLogo: windmoller,
      package: "4.50 LPA",
    },
    {
      id: 11,
      name: "Arpita Tiwari",
      degree: "B.Sc.(Hons.) in Biotechnology",
      companyLogo: mycaptin,
      package: "5.50 LPA",
      image: arpita,
    },
    {
      id: 12,
      name: "Aryan Verma",
      degree: "B.Com.(Hons.) with L&T",
      companyLogo: mycaptin,
      package: "5.50 LPA",
      image: aryan,
    },
    {
      id: 13,
      name: "Prakrati Saraswat",
      degree: "B.Sc.(Hons.) in Agriculture",
      companyLogo: mycaptin,
      package: "5.50 LPA",
      image: prakrati,
    },
    {
      id: 14,
      name: "Akarsh Verma",
      degree: "B.Sc.(Hons.) in Agriculture",
      companyLogo: integratedResources,
      package: "3.47 LPA",
      image: akarsh,
    },
    {
      id: 15,
      name: "Sachin Kumar Singh",
      degree: "B.Tech. in Computer Science Engineering",
      companyLogo: byjus,
      package: "8.00 LPA",
      image: sachin,
    },
    {
      id: 16,
      name: "Lovkush Pandey",
      degree: "B.Tech. in Computer Science Engineering",
      companyLogo: byjus,
      package: "8.00 LPA",
      image: lovkush,
    },
    {
      id: 17,
      name: "Aditya Mishra",
      degree: "B.Tech. in Computer Science Engineering",
      companyLogo: byjus,
      package: "8.00 LPA",
      image: aditya,
    },
    {
      id: 18,
      name: "Nekesh",
      degree: "B.Tech. in Computer Science Engineering",
      companyLogo: byjus,
      package: "8.00 LPA",
      image: nekesh,
    },
    {
      id: 19,
      name: "Prem Prakash Verma",
      degree: "B.Tech. in Computer Science Engineering",
      companyLogo: byjus,
      package: "8.00 LPA",
      image: prem,
    },
    {
      id: 20,
      name: "Abhishek Giri",
      degree: "B.Tech. in Computer Science Engineering",
      companyLogo: byjus,
      package: "8.00 LPA",
      image: abhishekGiri,
    },
    {
      id: 21,
      name: "Shreya Rastogi",
      degree: "B.C.A. (Bachelor of Computer Applications)",
      companyLogo: byjus,
      package: "8.00 LPA",
      image: shreyaRastogi,
    },
    {
      id: 22,
      name: "Kundan Pandey",
      degree: "B.C.A. (Bachelor of Computer Applications)",
      companyLogo: byjus,
      package: "8.00 LPA",
      image: kundan,
    },
    {
      id: 23,
      name: "Tanya Jaiswal",
      degree: "B.Sc.(Hons.) in Biotechnology",
      companyLogo: byjus,
      package: "8.00 LPA",
      image: tanya,
    },
    {
      id: 24,
      name: "Ajay Kumar Pandey",
      degree: "B.Sc.(Hons.) in Biotechnology",
      companyLogo: byjus,
      package: "8.00 LPA",
      image: ajay,
    },
    {
      id: 25,
      name: "Titiksha Sonkar",
      degree: "B.B.A. (Bachelor of Business Administration)",
      companyLogo: byjus,
      package: "8.00 LPA",
      image: titiksha,
    },
    {
      id: 26,
      name: "Prakash",
      degree: "B.B.A. (Bachelor of Business Administration)",
      companyLogo: byjus,
      package: "8.00 LPA",
      image: prakash,
    },
    {
      id: 27,
      name: "Kaushik Kumar Upadhyay",
      degree: "B.Tech. in Mechanical Engineering",
      companyLogo: byjus,
      package: "8.00 LPA",
      image: kaushik,
    },
    {
      id: 28,
      name: "Gloria Babu",
      degree: "B.Sc.(Hons.) in Agriculture",
      companyLogo: eduyoga,
      package: "4.50 LPA",
      image: gloria,
    },
    {
      id: 29,
      name: "Chandra Prabha",
      degree: "M.Sc. in Biotechnology",
      companyLogo: byjus,
      package: "8.00 LPA",
      image: chandra,
    },
    {
      id: 30,
      name: "Sourabh Yadav",
      degree: "B.Sc. in Information Technology",
      companyLogo: byjus,
      package: "8.00 LPA",
      image: sourabh,
    },
    {
      id: 31,
      name: "Aditi Yadav",
      degree: "B.Com.(Hons.) with L&T",
      companyLogo: byjus,
      package: "8.00 LPA",
      image: aditiYadav,
    },
    {
      id: 32,
      name: "Vaibhav Jaiswal",
      degree: "B.Sc.(Hons.) in Agriculture",
      companyLogo: byjus,
      package: "8.00 LPA",
      image: vaibhav,
    },
    {
      id: 33,
      name: "Mritunjay Singh",
      degree: "B.Tech. in Computer Science Engineering",
      companyLogo: tcs,
      package: "8.20 LPA",
      image: mritunjay,
    },
    {
      id: 34,
      name: "Utkarsh Gupta",
      degree: "M.B.A. (Master of Business Administration)",
      companyLogo: jaroEducation,
      package: "8.46 LPA",
      image: utkarsh,
    },
    {
      id: 35,
      name: "Abhay Nigam",
      degree: "B.Tech. in Computer Science Engineering",
      companyLogo: salesken,
      package: "9.00 LPA",
      image: abhay,
    },
  ],
  "2024": [
    {
      id: 1,
      name: "Md Ataa Khan",
      degree: "B.Tech. in Computer Science Engineering",
      image:
       ataaKhan,
      companyLogo:
       sap,
      package: "16.00 LPA",
    },
    {
      id: 2,
      name: "Tushar Trivedi",
      degree: "B.Tech. in Computer Science Engineering",
      image:
        tusharTrivedi,
      companyLogo:
       sap,
      package: "16.00 LPA",
    },
    {
      id: 3,
      name: "Nikhil Kumar Tewari",
      degree: "B.C.A. (Bachelor of Computer Applications)",
      image:
       nikhilTiwari,
      companyLogo:
      planetSpark,
      package: "6.18 LPA",
    },
    // {
    //   id: 4,
    //   name: "Sahul Pandey",
    //   degree: "B.B.A. (Bachelor of Business Administration)",
    //   image:
    //     sahulPandey,
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/corizo-15022401483366.png",
    //   package: "4.20 LPA",
    // },
    // {
    //   id: 5,
    //   name: "Harshita Shukla",
    //   degree: "B.Tech. in Biotechnology",
    //   image:
    //   harshitaShukla,
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/corizo-15022401483366.png",
    //   package: "4.20 LPA",
    // },
    // {
    //   id: 6,
    //   name: "Tushar Suryavanshi",
    //   degree: "B.Sc.(Hons.) in Agriculture",
    //   image:
    //    tusharSuryavanshi,
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/corizo-15022401483366.png",
    //   package: "4.20 LPA",
    // },
    {
      id: 7,
      name: "Aman Sinha",
      degree: "M.B.A. (Master of Business Administration)",
      image:
       amanSinha,
      companyLogo:
        jaroEducation,
      package: "7.50 LPA",
    },
    {
      id: 8,
      name: "Harshita Awasthi",
      degree: "M.Sc. in Biotechnology",
      image:
        harshitaAwasthi,
      companyLogo:
       jaroEducation,
      package: "7.50 LPA",
    },
    {
      id: 9,
      name: "Anmol Mishra",
      degree: "B.Tech. in Computer Science Engineering",
      image:
        anmolMishra,
      companyLogo:
       planetSpark ,
      package: "7.00 LPA",
    },
    {
      id: 10,
      name: "Ishika Jindal",
      degree: "B.Tech. in Electrical Engineering",
      image:
       ishikaJindal,
      companyLogo:
        planetSpark,
      package: "7.00 LPA",
    },
    // {
    //   id: 11,
    //   name: "Suryanshu Pandey",
    //   degree: "B.Com. (Bachelor of Commerce)",
    //   image:
    //   suryanshuPandey,
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/teachnook-15022401523156.png",
    //   package: "6.00 LPA",
    // },
    // {
    //   id: 12,
    //   name: "Muskan Singh",
    //   degree: "B.Sc.(Hons.) in Biotechnology",
    //   image:
    //     muskanSingh,
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/teachnook-15022401523156.png",
    //   package: "6.00 LPA",
    // },
    {
      id: 13,
      name: "Sonal",
      degree: "B.Sc.(Hons.) in Agriculture",
      image:
        sonal,
      companyLogo:
        "https://srmu.ac.in/storage/recruiters/eteam-15022401335783.png",
      package: "3.00 LPA",
    },
    {
      id: 14,
      name: "Kriti Mishra",
      degree: "B.B.A. (Bachelor of Business Administration)",
      image:
       kritiMishra,
      companyLogo:
        jaroEducation,
      package: "7.50 LPA",
    },
    // {
    //   id: 15,
    //   name: "Ayush Tiwari",
    //   degree: "M.B.A. (Master of Business Administration)",
    //   image:
    //     ayushTiwari,
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/teachnook-15022401523156.png",
    //   package: "9.00 LPA",
    // },
    // {
    //   id: 16,
    //   name: "Shatakshi Dubey",
    //   degree: "M.B.A. (Master of Business Administration)",
    //   image:
    //     shatakshiDubey,
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/teachnook-15022401523156.png",
    //   package: "9.00 LPA",
    // },
    // {
    //   id: 17,
    //   name: "Shivangi Gupta",
    //   degree: "M.B.A. (Master of Business Administration)",
    //   image:
    //    shivangiGupta,
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/teachnook-15022401523156.png",
    //   package: "9.00 LPA",
    // },
    // {
    //   id: 18,
    //   name: "Rohan Kumar",
    //   degree: "M.B.A. (Master of Business Administration)",
    //   image:
    //     rohanKumar,
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/teachnook-15022401523156.png",
    //   package: "9.00 LPA",
    // },
    // {
    //   id: 19,
    //   name: "Saurabh Yadav",
    //   degree: "M.B.A. (Master of Business Administration)",
    //   image:
    //     saurabhYadav,
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/teachnook-15022401523156.png",
    //   package: "9.00 LPA",
    // },
    // {
    //   id: 20,
    //   name: "Ananya Shukla",
    //   degree: "M.B.A. (Master of Business Administration)",
    //   image:ananyaShukla,
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/teachnook-15022401523156.png",
    //   package: "9.00 LPA",
    // },
    // {
    //   id: 21,
    //   name: "Nausheen Bano",
    //   degree: "M.B.A. (Master of Business Administration)",
    //   image:
    //    nausheenBano,
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/teachnook-15022401523156.png",
    //   package: "9.00 LPA",
    // },
    // {
    //   id: 22,
    //   name: "Anshika Rathore",
    //   degree: "M.B.A. (Master of Business Administration)",
    //   image:
    //     anshikaRathore,
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/teachnook-15022401523156.png",
    //   package: "9.00 LPA",
    // },
    // {
    //   id: 23,
    //   name: "Anjanee Kumar Yadav",
    //   degree: "M.C.A. (Master of Computer Application)",
    //   image:
    //    anjaneeKumarYadav,
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/teachnook-15022401523156.png",
    //   package: "9.00 LPA",
    // },
    // {
    //   id: 24,
    //   name: "Shreya Bajpai",
    //   degree: "B.Tech. in Biotechnology",
    //   image:
    //    shreyaBajpai,
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/codeyoung-1502240158321.png",
    //   package: "3.88 LPA",
    // },
    // {
    //   id: 25,
    //   name: "Arunima Srivastava",
    //   degree: "B.Tech. in Electrical Engineering",
    //   image:
    //    arunimaSrivastava,
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/teachnook-15022401523156.png",
    //   package: "6.00 LPA",
    // },
    // {
    //   id: 26,
    //   name: "Shivendra Pratap Singh",
    //   degree: "M.C.A. (Master of Computer Application)",
    //   image:
    //    shivendraPratapSingh,
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/teachnook-15022401523156.png",
    //   package: "9.00 LPA",
    // },
    // {
    //   id: 27,
    //   name: "Vanshika Verma",
    //   degree: "M.B.A. (Master of Business Administration)",
    //   image:
    //     vanshikaVerma,
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/academor-15022402044735.png",
    //   package: "8.00 LPA",
    // },
    // {
    //   id: 28,
    //   name: "Sakshi Soni",
    //   degree: "M.B.A. (Master of Business Administration)",
    //   image:
    //    sakshiSoni,
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/tikona-15022401165623.png",
    //   package: "8.00 LPA",
    // },
    // {
    //   id: 29,
    //   name: "Meghna Tiwari",
    //   degree: "B.Tech. in Biotechnology",
    //   image:
    //    meghnaTiwari,
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/hikeeducation-15022402074593.png",
    //   package: "6.42 LPA",
    // },
    // {
    //   id: 30,
    //   name: "Prashant Mani Tripathi",
    //   degree: "B.Sc.(Hons.) in Agriculture",
    //   image:
    //    prashantManiTripathi,
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/registerkaro-15022402095393.png",
    //   package: "6.00 LPA",
    // },
    {
      id: 31,
      name: "Siya Rai",
      degree: "B.Tech. in Electronics & Communication Engineering",
      image: avatar,
      companyLogo: avatar,
      package: "12 LPA",
    },
  ],
  "2025": [
    {
      id: 1,
      name: "Aryan Singh Rajpoot",
      degree: "B.C.A. (Bachelor of Computer Applications)",
      image:
        aryanSinghRajpoot,
      companyLogo:
        "https://srmu.ac.in/storage/recruiters/accenture1-19022412430348.png",
      package: "3.40 LPA",
    },
    {
      id: 2,
      name: "Shiv Tiwari",
      degree: "B.C.A. (Bachelor of Computer Applications)",
      image:
       shivJiTiwari,
      companyLogo:
        "https://srmu.ac.in/storage/recruiters/accenture1-19022412430348.png",
      package: "3.40 LPA",
    },
    {
      id: 3,
      name: "Sachin Dubey",
      degree: "B.C.A. (Bachelor of Computer Applications)",
      image:
        sachinDubey,
      companyLogo:
        "https://srmu.ac.in/storage/recruiters/accenture1-19022412430348.png",
      package: "3.40 LPA",
    },
    {
      id: 4,
      name: "Abhishek Gupta",
      degree: "B.B.A. (Bachelor of Business Administration)",
      image:
       abhishekGupta,
      companyLogo:
        "https://srmu.ac.in/storage/recruiters/tcs-09022401312329.png",
      package: "2.60 LPA",
    },
    {
      id: 5,
      name: "Amit Singh",
      degree: "B.B.A. (Bachelor of Business Administration)",
      image:
        amitSingh,
      companyLogo:
        "https://srmu.ac.in/storage/recruiters/tcs-09022401312329.png",
      package: "2.60 LPA",
    },
    {
      id: 6,
      name: "Anup Singh",
      degree: "B.B.A. (Bachelor of Business Administration)",
      image:
      anupSingh,
      companyLogo:
        "https://srmu.ac.in/storage/recruiters/tcs-09022401312329.png",
      package: "2.60 LPA",
    },
    {
      id: 7,
      name: "Arun Kumar Yadav",
      degree: "B.Com. (Bachelor of Commerce)",
      image:
       arunKumarYadav,
      companyLogo:
        "https://srmu.ac.in/storage/recruiters/tcs-09022401312329.png",
      package: "2.60 LPA",
    },
    {
      id: 8,
      name: "Dev Kumar",
      degree: "B.B.A. (Bachelor of Business Administration)",
      image:
       devKumar,
      companyLogo:
        "https://srmu.ac.in/storage/recruiters/tcs-09022401312329.png",
      package: "2.60 LPA",
    },
    {
      id: 9,
      name: "Abhishek Gupta",
      degree: "B.B.A. (Bachelor of Business Administration)",
      image:
       abhishekGuptaMin,
      companyLogo:
        "https://srmu.ac.in/storage/recruiters/learning-route-15022402130568.png",
      package: "6.06 LPA",
    },
    {
      id: 10,
      name: "Anant N.P. Shukla",
      degree: "B.Com. (Bachelor of Commerce)",
      image:
       anantShukla,
      companyLogo:
        "https://srmu.ac.in/storage/recruiters/learning-route-15022402130568.png",
      package: "6.06 LPA",
    },
    // {
    //   id: 11,
    //   name: "Priyanshu Yadav",
    //   degree: "M.B.A. (Master of Business Administration)",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/priyanshu-yadav-min-19052512212764.JPG",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/learning-route-15022402130568.png",
    //   package: "6.06 LPA",
    // },
    // {
    //   id: 12,
    //   name: "Sneha Pal",
    //   degree: "M.B.A. (Master of Business Administration)",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/sneha-pal-min-19052512214969.jpeg",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/learning-route-15022402130568.png",
    //   package: "6.06 LPA",
    // },
    // {
    //   id: 13,
    //   name: "Sudipta",
    //   degree: "B.B.A. (Bachelor of Business Administration)",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/sudipta-chattargi-mba-min-19052512221551.JPG",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/learning-route-15022402130568.png",
    //   package: "6.06 LPA",
    // },
    // {
    //   id: 14,
    //   name: "Khushboo Saxena",
    //   degree: "M.B.A. (Master of Business Administration)",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/khushboo-saxena-min-19052512313554.JPG",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/registerkaro-15022402095393.png",
    //   package: "6.48 LPA",
    // },
    // {
    //   id: 15,
    //   name: "Rahul Bali",
    //   degree: "B.Tech. in Computer Science Engineering",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/rahul-bail-08-min-19052512320968.JPG",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/registerkaro-15022402095393.png",
    //   package: "6.60 LPA",
    // },
    // {
    //   id: 16,
    //   name: "Vatsala Rai",
    //   degree: "B.C.A. (Bachelor of Computer Applications)",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/vatsala-rai-min-1905251232384.jpeg",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/registerkaro-15022402095393.png",
    //   package: "6.00 LPA",
    // },
    // {
    //   id: 17,
    //   name: "Vishakha Singh",
    //   degree: "M.B.A. (Master of Business Administration)",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/vishakha-singh-min-19052512330980.JPG",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/registerkaro-15022402095393.png",
    //   package: "3.00 LPA",
    // },
    // {
    //   id: 18,
    //   name: "Pooja Singh",
    //   degree: "M.B.A. (Master of Business Administration)",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/pooja-19052512352240.jpg",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/99acreslogo-22022412423843.png",
    //   package: "5.08 LPA",
    // },
    // {
    //   id: 19,
    //   name: "Abhishek Tiwari",
    //   degree: "M.B.A. (Master of Business Administration)",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/abhishek-tiwari-19052512375326.jpg",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/hdfc-life-21022405134724.png",
    //   package: "4.75 LPA",
    // },
    // {
    //   id: 20,
    //   name: "Vibhav Pathak",
    //   degree: "M.B.A. (Master of Business Administration)",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/vibhav-pathak-1905251241307.jpg",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/hdfc-life-21022405134724.png",
    //   package: "4.75 LPA",
    // },
    // {
    //   id: 21,
    //   name: "Janhvi Srivastava",
    //   degree: "M.B.A. (Master of Business Administration)",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/janhvi-srivastava-min-1905251258158.JPG",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/airtel-15022412124176.png",
    //   package: "4.50 LPA",
    // },
    // {
    //   id: 22,
    //   name: "Shreya Nigam",
    //   degree: "B.Tech. in Computer Science Engineering",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/shreya-nigam-b.tech-cs-19052503434613.jpg",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/sap-09022402071812.png",
    //   package: "6.52 LPA",
    // },
    // {
    //   id: 23,
    //   name: "Arvil Rishi Hitalia",
    //   degree: "B.Tech. in Mechanical Engineering",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/arvil-rishi-hitalia-min-19052503481218.jpeg",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/ptc-industries-20022401163764.png",
    //   package: "2.64 LPA",
    // },
    // {
    //   id: 24,
    //   name: "Satyam Vishwakarma",
    //   degree: "B.Tech. in Electrical Engineering",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/satyam-vishwakarma-min-1--1905250349408.jpeg",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/ptc-industries-20022401163764.png",
    //   package: "2.50 LPA",
    // },
    // {
    //   id: 25,
    //   name: "Sujeet Maurya",
    //   degree: "B.Tech. in Electrical Engineering",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/sujeet-maurya-min-19052503491914.JPG",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/ptc-industries-20022401163764.png",
    //   package: "2.50 LPA",
    // },
    // {
    //   id: 26,
    //   name: "Akshay Kumar",
    //   degree: "B.Tech. in Computer Science Engineering",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/akshay-kumar-cs-1905250357044.jpg",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/sap-09022402071812.png",
    //   package: "6.52 LPA",
    // },
    // {
    //   id: 27,
    //   name: "Akshay Kumar",
    //   degree: "B.Tech. in Computer Science Engineering",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/img-20240615-wa0001-akshay-kumar-21052510372132.jpg",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/josh-technology-20052511194750-removebg-preview-22052504291754.png",
    //   package: "14.23 LPA",
    // },
    // {
    //   id: 28,
    //   name: "Gungun",
    //   degree: "M.B.A. (Master of Business Administration)",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/gungun-min-21052510395167.JPG",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/jaro-education-15022412042127.png",
    //   package: "12.16 LPA",
    // },
    // {
    //   id: 29,
    //   name: "Neha Singh",
    //   degree: "M.B.A. (Master of Business Administration)",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/neha-singh-min-21052510404722.JPG",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/jaro-education-15022412042127.png",
    //   package: "12.16 LPA",
    // },
    // {
    //   id: 30,
    //   name: "Supriya Rai",
    //   degree: "M.B.A. (Master of Business Administration)",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/supriya-rai-min-21052510420011.jpeg",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/jaro-education-15022412042127.png",
    //   package: "6.78 LPA",
    // },
    // {
    //   id: 31,
    //   name: "Tejasva Maurya",
    //   degree: "B.Tech. in Computer Science Engineering",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/tejasva-maurya-14-21052511075526.JPG",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/cognizant-09022401240828.png",
    //   package: "6.75 LPA",
    // },
    // {
    //   id: 32,
    //   name: "Satyendra Kumar",
    //   degree: "B.Tech. in Computer Science Engineering",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/satyendra-kumar-b.tech-cs-min-22052502272560.jpg",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/qss-technosoft-21052501502590-removebg-preview-22052504251311.png",
    //   package: "7.20 LPA",
    // },
    // {
    //   id: 33,
    //   name: "Aman Singh",
    //   degree: "B.Tech. in Computer Science Engineering",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/aman-singh-b.tech-cs-min-22052502275557.JPG",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/qss-technosoft-21052501502590-removebg-preview-22052504251311.png",
    //   package: "7.20 LPA",
    // },
    // {
    //   id: 34,
    //   name: "Simran Singh",
    //   degree: "M.B.A. (Master of Business Administration)",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/simran-singh-min-22052502310799.JPG",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/planet-spark-15022401461281-removebg-preview-22052504274790.png",
    //   package: "6.50 LPA",
    // },
    // {
    //   id: 35,
    //   name: "Alviya Zaheer",
    //   degree: "B.Tech. in Computer Science Engineering",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/alvia-zaheer-min-22052502321325.JPG",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/planet-spark-15022401461281-removebg-preview-22052504274790.png",
    //   package: "6.50 LPA",
    // },
    // {
    //   id: 36,
    //   name: "Anshika Tiwari",
    //   degree: "M.B.A. (Master of Business Administration)",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/anshika-tiwari-min-22052502345811.JPG",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/planet-spark-15022401461281-removebg-preview-22052504274790.png",
    //   package: "6.50 LPA",
    // },
    // {
    //   id: 37,
    //   name: "Shubhangi Gupta",
    //   degree: "B.Tech. in Computer Science Engineering",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/shubhangi-gupta-160-min-1--22052503145813.JPG",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/hikeeducation-15022402074593.png",
    //   package: "6.42 LPA",
    // },
    // {
    //   id: 38,
    //   name: "Anjali Singh Bisht",
    //   degree: "M.B.A. (Master of Business Administration)",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/anjali-singh-bisht-min-22052503205856.JPG",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/jeevasnathi-logo-22022412572511.png",
    //   package: "4.60 LPA",
    // },
    // {
    //   id: 39,
    //   name: "Atul Verma",
    //   degree: "B.Tech. in Electrical Engineering",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/atul-verma-min-1--22052503231679.JPG",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/torrent-power-20022401442397.png",
    //   package: "4.50 LPA",
    // },
    // {
    //   id: 40,
    //   name: "Anshul Pandey",
    //   degree: "M.B.A. (Business Analytics) with L&T",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/anshul-pandey-mba-22052503465829.jpeg",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/internshala-22052503253825-removebg-preview-22052504302229.png",
    //   package: "6.60 LPA",
    // },
    // {
    //   id: 41,
    //   name: "Anshika Shukla",
    //   degree: "M.B.A. (Master of Business Administration)",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/anshika-shukla-min-2205250348294.JPG",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/download-7-removebg-preview-22052504270622.png",
    //   package: "5.20 LPA",
    // },
    // {
    //   id: 42,
    //   name: "Anshika Shukla",
    //   degree: "M.B.A. (Master of Business Administration)",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/anshika-shukla-min-1--22052503495782.JPG",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/images-22052503285128-removebg-preview-2205250431341.png",
    //   package: "5.04 LPA",
    // },
    // {
    //   id: 43,
    //   name: "Pankaj Gupta",
    //   degree: "B.Tech. in Civil Engineering",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/pankaj-gupta--22052504192080.jpeg",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/download-10-removebg-preview-22052504314963.png",
    //   package: "4.25 LPA",
    // },
    // {
    //   id: 44,
    //   name: "Pawan Kumar Singh",
    //   degree: "B.Tech. in Civil Engineering",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/pawan-kumar-singh-22052504201442.jpeg",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/download-10-removebg-preview-22052504314963.png",
    //   package: "4.25 LPA",
    // },
    // {
    //   id: 45,
    //   name: "Ujjawal Pratap Singh",
    //   degree: "B.Tech. in Civil Engineering",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/ujjawal-pratap-singh-22052504213117.jpeg",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/download-10-removebg-preview-22052504314963.png",
    //   package: "4.25 LPA",
    // },
    // {
    //   id: 46,
    //   name: "Sudipta",
    //   degree: "B.B.A. (Bachelor of Business Administration)",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/sudipta-chattargi-mba-2205250438183.JPG",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/addverb-22052503390973-removebg-preview-22052504420529.png",
    //   package: "5.00 LPA",
    // },
    // {
    //   id: 47,
    //   name: "Vatsala Rai",
    //   degree: "B.C.A. (Bachelor of Computer Applications)",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/vatsala-rai--22052504385881.jpeg",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/download-8-removebg-preview-22052504413515.png",
    //   package: "4.50 LPA",
    // },
    // {
    //   id: 48,
    //   name: "Vishal Pratap Singh",
    //   degree: "M.B.A. (Master of Business Administration)",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/vishal-pratap-singh-min-22052504451314.JPG",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/download-9-removebg-preview-22052504434343.png",
    //   package: "4.50 LPA",
    // },
    // {
    //   id: 49,
    //   name: "Harsh Upadhyay",
    //   degree: "M.B.A. (Master of Business Administration)",
    //   image:
    //     "https://srmu.ac.in/storage/institute-student-placed-href/harsh-upadhyay-min-22052504454062.JPG",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/download-9-removebg-preview-22052504434343.png",
    //   package: "4.50 LPA",
    // },
    // {
    //   id: 50,
    //   name: "Navish Kumar Singh",
    //   degree: "B.Tech. in Electronics & Communication Engineering",
    //   image: "https://srmu.ac.in/themes/images/avatar-1.jpg",
    //   companyLogo:
    //     "https://srmu.ac.in/storage/recruiters/adani-09022401502286.png",
    //   package: "LPA",
    // },
  ],
};

export const PlacementCellOverviewData: customeOverViewType = {
  heading: "Placement Cell",
  content:
    "At SRMU, we are proud to have been home to 12000+ well-placed alumni worldwide—our contribution to fueling national growth by providing top-notch talent to various corporate houses. SRMU ensures students unleash their full potential, reaching professional excellence. Hence, our integrated Training and Placement Department tirelessly transforms students' dreams and aspirations into reality.",
};
export const PlacementCellTopFooterData = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];

export const studentTestimonialOverviewData: customeOverViewType = {
  heading: "All Testimonial",
  content:
    "Student testimonials serve as invaluable reflections of the educational experience within an institution, offering insights into the impact of academic programs, faculty engagement, and the overall campus environment. These testimonials, often shared voluntarily by students, provide a firsthand account of their journey, highlighting the strengths of the educational institution, personal growth, and the effectiveness of learning methodologies. Student testimonials not only offer prospective students a glimpse into the vibrant and supportive community but also act as a testament to the institution's commitment to delivering a transformative and enriching academic experience.",
};
export const StudentTestimonialTopFooterData = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];

export const PlacementPoliciesOverviewData: customeOverViewType = {
  heading: "Placement Policies",
  content:
    "University placement policies encompass a set of guidelines and strategies designed to facilitate the successful transition of students from academic studies to the professional realm. These policies typically involve collaboration with industries, organizing placement drives, career counseling, and skill development initiatives to enhance students' employability. Universities often cultivate partnerships with various companies and organizations, creating a bridge between students and potential employers. Additionally, placement policies may incorporate internships, workshops, and industry-oriented curricula to ensure students are well-equipped for the demands of the job market. The ultimate goal is to empower graduates with the necessary skills and knowledge to secure fulfilling and relevant employment opportunities upon completing their education.",
};

export const alumniRegistrationTopFooterData = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];
export const PlacementPoliciesTopFooterData = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];

export const policiesPdfData: TableRowData[] = [
  {
    id: 1,
    title: "Placement Policy",
    download: { type: "pdf", url: Placement_Policy },
  },
  {
    id: 2,
    title: "Early Joining Policy",
    download: { type: "pdf", url: Early_Joining_Policy },
  },
  {
    id: 3,
    title: "Industrial Visit Policy",
    download: { type: "pdf", url: Industrial_Visit_Policy },
  },
];
export const alumniRegistrationOverviewData: customeOverViewType = {
  heading: "Alumni Registration",
  content: "",
};

export const alumniRegistrationFormData: AlumniRegistrationField[] = [
  {
    id: 1,
    labelname: "Name",
    name: "name",
    placeholder: "Enter your full name",
    type: "text",
  },
  {
    id: 2,
    labelname: "Contact No.",
    name: "contactNo",
    placeholder: "Enter Contact No",
    type: "text",
  },
  {
    id: 3,
    labelname: "Email",
    name: "email",
    placeholder: "Enter Email Id",
    type: "email",
  },
  {
    id: 4,
    labelname: "Passing Year",
    name: "passingYear",
    placeholder: "Enter your Passing Year",
    type: "text",
  },
  {
    id: 5,
    labelname: "Course Level",
    name: "courseLevel",
    placeholder: "Select Course Level",
    type: "select",
    options: [
      { id: 1, name: "Undergraduate", value: "undergraduate" },
      { id: 2, name: "Postgraduate", value: "postgraduate" },
      { id: 3, name: "Diploma", value: "diploma" },
      { id: 4, name: "Certificate", value: "certificate" },
    ],
  },
  {
    id: 6,
    labelname: "Program",
    name: "program",
    placeholder: "Select Program",
    type: "select",
    options: [
      { id: 1, name: "B.Tech", value: "btech" },
      { id: 2, name: "MBA", value: "mba" },
      { id: 3, name: "MCA", value: "mca" },
      { id: 4, name: "PhD", value: "phd" },
      { id: 5, name: "Other", value: "other" },
    ],
  },
  {
    id: 7,
    labelname: "Current Employer",
    name: "currentEmployer",
    placeholder: "Enter your Current Employer",
    type: "text",
  },
];

// Initial Values
export const initialValuesForAlumniRegistration = {
  name: "",
  contactNo: "",
  email: "",
  passingYear: "",
  courseLevel: "",
  program: "",
  currentEmployer: "",
  consent: false,
};

// Yup Validation Schema
export const validationSchemaForAlumniRegistration = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  contactNo: Yup.string()
    .required("Contact No. is required")
    .matches(/^[0-9]{10}$/, "Contact No. must be 10 digits"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  passingYear: Yup.string()
    .required("Passing Year is required")
    .matches(/^[0-9]{4}$/, "Enter a valid 4-digit year"),
  courseLevel: Yup.string().required("Course Level is required"),
  program: Yup.string().required("Program is required"),
  currentEmployer: Yup.string().required("Current Employer is required"),
  consent: Yup.boolean().oneOf([true], "Consent is required"),
});
export const PlacementOverviewData: customeOverViewType = {
  heading: "Placement Overview",
  content: `At SRMU, we transform aspirations into tangible careers.
The key to achieving this goal is our dynamic Placement Cell Team, a group of dedicated students and professionals who are committed to equipping outgoing SRMU students with the essential skills, knowledge, and confidence required to excel in the competitive job market.
Leveraging extensive connections with industry professionals and recruiters, our track record speaks volumes as we consistently place students in leading companies, ensuring a pathway to success right from day one.`,
};

export const placementOverviewStayWithUsData = [
  {
    number: "12000+",
    title: "Students Success Stories",
    description:
      "More than 10 Years of Experience in Shaping Brilliant Careers",
    width: "w-[220px]",
  },
  {
    number: "1500+",
    title: "Job Offers",
    description: "given by 250+ top Companies",
    width: "w-[220px]",
  },
  {
    number: "90%*",
    title: "Placement",
    description: "Students Placed in CMM level-5 Companies",
    width: "mx-w-[260px]",
  },
];

type Student = {
  id: number;
  name: string;
  degree: string;
  companyLogo: string;
  package: string;
  image: string;
};
export interface Testimonial {
  text: string;
  author: string;
  title: string;
  image: string; 
}




import img1 from "../../assets/images/placements/student-testimonials/img-20240131-wa0002-3101240315444.jpg";
import img2 from "../../assets/images/placements/student-testimonials/img-20240131-wa0003-31012403282192.jpg";
import img3 from "../../assets/images/placements/student-testimonials/picture1-31012403350939.png";
import img4 from "../../assets/images/placements/student-testimonials/picture3-01022412241850.png";
import img5 from "../../assets/images/placements/student-testimonials/picture4-01022412273742.png";
import img6 from "../../assets/images/placements/student-testimonials/picture5-01022412303944.png";
import img7 from "../../assets/images/placements/student-testimonials/picture6-0102240129089.png";
import img8 from "../../assets/images/placements/student-testimonials/picture7-01022401361283.png";
import img9 from "../../assets/images/placements/student-testimonials/fhv-28022405261954.jpg";
import img10 from "../../assets/images/placements/student-testimonials/picture8-01022401475584.png";
import img11 from "../../assets/images/placements/student-testimonials/1-28022405352914.jpg";
import img12 from "../../assets/images/placements/student-testimonials/211-28022405403816.jpg";
import img13 from "../../assets/images/placements/student-testimonials/333-28022405450187.jpg"
import img14 from "../../assets/images/placements/student-testimonials/1111111-min-29022401052590.jpg";
import img15 from "../../assets/images/placements/student-testimonials/anoop-min-29022401213035.jpg";
import img16 from "../../assets/images/placements/student-testimonials/mathur-29022401292061.jpg";
import img17 from "../../assets/images/placements/student-testimonials/avi-29022401325983.jpg";
import img18 from "../../assets/images/placements/student-testimonials/a1-05102312223362.jpg";
import img19 from "../../assets/images/placements/student-testimonials/a2-05102312300115.jpg";

export interface TestimonialData {
  recruiters: Testimonial[];
  students: Testimonial[];
}
export const testimonialData: TestimonialData = {
  recruiters: [
 {
    text: "It was a pleasure to have the students as a part of our foundation family. The team was full of energy, Knowledge, and ideas. The Students, volunteers, and placement team members were very co-operative and we are glad that the event was very successful. We look forward to have a synergistic relationship in Future and hire many more to join us from your esteemed institution for other projects.",
    author: "Ms. Smily Gupta",
    title: "Team Leader at Integrated Resource Inc.",
    image: img1
  },
  {
    text: "SRMU Placement team has been very cooperative. Students and Faculties welcome new learning opportunities. The eagerness to learn and grow help us improve our service offering to the institution from an industry perspective too.",
    author: "Mr. Dheeraj Chhabra",
    title: "Co-Founder & Director at Learning Routes",
    image: img2
  },
  {
    text: "Shri Ramswaroop group has been one of the most premier educational groups of UP. It speaks volume about the efforts Ramswaroop group management, Faculty and T&P put into bring the students to the level of excellence they have achieved. Students at Ramswaroop group are competent, passionate and goal oriented which is equivalent to the student quality of any premium group across India.",
    author: "Mr. Saurabh Singh",
    title: "Associate Manager at HCL Technologies",
    image: img3
  },
  {
    text: "Very Well Managed and coordinated. Communication & Other personality of the students is well groomed.",
    author: "Mr. Ankur Gahlawat",
    title: "HR at Torrent Power",
    image: img4
  },
  {
    text: "Great Initiatives & properly Coordinated. It was great platform to understand talent pool.",
    author: "Ms. Laveena Nihalani",
    title: "Consultant at Capgemini",
    image: img5
  },
  {
    text: "Professionalism, sincerity and passion to do something for their students beyond limits has been the major strength of Shri Ramswaroop Group.",
    author: "Ms. Sonal Arora",
    title: "Senior HR Manager at Accenture",
    image: img6
  },
  {
    text: "The arrangement was good, Appreciated the efforts of students.",
    author: "Ms. Surbhi Jaiswal",
    title: "HR at Just Dial",
    image: img7
  },
  {
    text: "Great feeling to be back as the recruiter of my own college. It was indeed an honor to be a part of the organization.",
    author: "Mr. Mohit Goel",
    title: "Product Manager at SAP",
    image: img8
  },
  {
    text: "Shri Ramswaroop Memorial Group have come a long way. We have seen the students grow in every level when compared to the before and after status of students taking the E-Learning’s and internships too. We look forward to being a part of the growth of Shri Ramswaroop Memorial in the days to come.",
    author: "Ms. Mary Niang",
    title: "Campus HR at Cognizant",
    image: img9
  },
  {
    text: "Students are good and trained well in the area. Good brand building embedded in the system.",
    author: "Mr. Amit Vikram",
    title: "Business Consulting (Digital Transformation) at Cognizant",
    image: img10
  },
  {
    text: "SRMGPC Placement team has been very cooperative. Students and faculties welcome new learning opportunities. The eagerness to learn and grow helps us improve our service offering to the Institution from an Industry perspective too.",
    author: "Mr. Ashesh Prasad",
    title: "Senior Manager Capability Building at TATA Steel",
    image: img11
  },
  {
    text: "Confident students, eager to learn. Reputed institute with good quality of students.",
    author: "Mr. Mustafa Shahanshah",
    title: "CTO at Alpha Fortress Private Limited",
    image: img12
  },
  {
    text: "Students have good command over the subjects and can comprehend well. They seem to have been groomed considering overall aspects.",
    author: "Mr. Amit Jauhari",
    title: "Regional Head-Talent Acquisition (North India) at Tata Consultancy Services",
    image: img13
  }
  ],
  students: [
{
    text: "SRMU provides the ambiance and serenity necessary for the pursuit of academic excellence. The central library of university is fully digitized. E-learning with web resources has also been provided. Excellent labs for gaining practical knowledge. Highly educated faculty with excellent teaching pedagogy.",
    author: "Harshit Sinha",
    title: "B.Tech. in ME (Batch: 2018), Placed in Byjus Think and Learn Pvt. Ltd.",
    image: img14
  },
  {
    text: "Our university is the best because here, the students live with full enthusiasm and energy. Our university has good infrastructure. It has a very quiet and green environment, which students need during their study. The interaction of teachers is very good. The hostel rooms are very clean and good. They provide a good meal to the students every time.",
    author: "Anoop Dubey",
    title: "B.Tech. in ME (Batch: 2022), Placed in Hettich India Pvt. Ltd.",
    image: img15
  },
  {
    text: "We were concerned about our future achievement, but once college was underway, everyone could see how the teachers played an important role in enhancing our education and gave us a pleasant and educated environment. After finishing the first year, we had the opportunity to meet our teachers and friends in person. We were all very excited to do so, and we also had great time taking part in various events and making a lot of memories. Now, we have got some special, lifelong friends. Finally, the college offered me a whole lot of career placement options, from which I chose to be placed with SBI Mutual Fund. I wanted to thank my professors for helping me prepare for this as well as our placement cell.",
    author: "Anurag Mathur",
    title: "M.B.A. (Batch: 2022), Placed in SBI Mutual Fund",
    image: img16
  },
  {
    text: "My experience at Ramswaroop University is great and memorable. The mentors at Ramswaroop University helped me enhance my academic and interpersonal skills. I am thankful to Training & Placement cell for providing a platform to enhance my skills and an opportunity to showcase them. In the last I am saying that The World is here at Ram Swaroop University.",
    author: "Avinash Gupta",
    title: "M.B.A. (Batch: 2022), Placed in B’orze Heager",
    image: img17
  },
  {
    text: "I am grateful to SRMU placement cell for providing us a platform to enhance our skills and their role in locating job opportunities to showcase them. Their constant support has landed me the first job of my career.",
    author: "Zuhu Fatima",
    title: "B.Tech. in CSE (Batch: 2020), Placed in Capgemini",
    image: img18
  },
  {
    text: "My sincere appreciation & gratitude to the Faculty & Placement Department. I am very grateful to them for effectively and sincerely helping me to grab first ever opportunity that came into my life.",
    author: "Ayush Srivastav",
    title: "B.Tech. in CSE (Batch: 2020), Placed in Cognizant",
    image: img19
  },
]
};


export type Drive = {
  id: number;
  companyName: string;
  companyLogo: string;
  dateOfVisit: string;
  description: string;
};

export const placementData: Record<string, Drive[]> = {
  "2023": [
    {
      id: 1,
      companyName: "TATA AIG Insurance",
      companyLogo:
        "/src/assets/images/placements/placement-overview/aditya-birla.png",
      dateOfVisit: "03 September, 2023",
      description:
        "Tata AIG General Insurance Company Limited is a joint venture company…",
    },
    {
      id: 2,
      companyName: "YES BANK",
      companyLogo:
        "/src/assets/images/placements/placement-overview/aditya-birla.png",

      dateOfVisit: "21 March, 2023",
      description:
        "At YES BANK, we are driven by a deep purpose and relentless commitment…",
    },
    {
      id: 3,
      companyName: "Zenus Group",
      companyLogo:
        "/src/assets/images/placements/placement-overview/aditya-birla.png",

      dateOfVisit: "15 November, 2022",
      description: "Zenus Group is a Telecom Company established in 2012…",
    },
    {
      id: 4,
      companyName: "Zenus Group",
      companyLogo:
        "/src/assets/images/placements/placement-overview/aditya-birla.png",

      dateOfVisit: "15 November, 2022",
      description: "Zenus Group is a Telecom Company established in 2012…",
    },
    {
      id: 5,
      companyName: "Zenus Group",
      companyLogo:
        "/src/assets/images/placements/placement-overview/aditya-birla.png",

      dateOfVisit: "15 November, 2022",
      description: "Zenus Group is a Telecom Company established in 2012…",
    },
  ],

  "2024": [
    {
      id: 6,
      companyName: "Accenture",
      companyLogo:
        "/src/assets/images/placements/placement-overview/aditya-birla.png",

      dateOfVisit: "01 April, 2024",
      description: "Accenture is a global professional services company…",
    },
    {
      id: 7,
      companyName: "Capgemini",
      companyLogo:
        "/src/assets/images/placements/placement-overview/aditya-birla.png",

      dateOfVisit: "15 June, 2024",
      description: "Capgemini is a French multinational IT services company…",
    },
    {
      id: 8,
      companyName: "Wipro",
      companyLogo:
        "/src/assets/images/placements/placement-overview/aditya-birla.png",

      dateOfVisit: "12 May, 2024",
      description: "Wipro is a leading global IT, consulting and BPO company…",
    },
  ],

  "2025": [
    {
      id: 9,
      companyName: "Cognizant",
      companyLogo:
        "/src/assets/images/placements/placement-overview/aditya-birla.png",

      dateOfVisit: "10 February, 2025",
      description:
        "Cognizant is an American multinational IT services company…",
    },
    {
      id: 10,
      companyName: "Puma",
      companyLogo:
        "/src/assets/images/placements/placement-overview/aditya-birla.png",

      dateOfVisit: "28 February, 2025",
      description: "PUMA is a world-leading sportswear company…",
    },
  ],
};