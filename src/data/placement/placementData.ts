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
import sahulPandey from "../../assets/images/placements/placement-overview/placement-records/images/sahul-pandey.jpeg";
import harshitaShukla from "../../assets/images/placements/placement-overview/placement-records/images/harshita-shukla.jpg";
import tusharSuryavanshi from "../../assets/images/placements/placement-overview/placement-records/images/tushar-suryavanshi.jpg";
import suryanshuPandey from "../../assets/images/placements/placement-overview/placement-records/images/suryanshu-pandey.jpg";
import muskanSingh from "../../assets/images/placements/placement-overview/placement-records/images/muskan-singh.jpg";
import ayushTiwari from "../../assets/images/placements/placement-overview/placement-records/images/ayush-tiwarijpg.jpg";
import shatakshiDubey from "../../assets/images/placements/placement-overview/placement-records/images/shatakshi-jpg.jpg";
import shivangiGupta from "../../assets/images/placements/placement-overview/placement-records/images/shivangi-gupta.jpg";
import rohanKumar from "../../assets/images/placements/placement-overview/placement-records/images/rohan-kumar-.jpg";
import saurabhYadav from "../../assets/images/placements/placement-overview/placement-records/images/saurav-yadav.jpg";
import ananyaShukla from "../../assets/images/placements/placement-overview/placement-records/images/ananya-shukla.jpg";
import nausheenBano from "../../assets/images/placements/placement-overview/placement-records/images/nausheen-bano.jpg";
import anshikaRathore from "../../assets/images/placements/placement-overview/placement-records/images/anshika-rathorejpg.jpg";
import anjaneeKumarYadav from "../../assets/images/placements/placement-overview/placement-records/images/anjanee-kumar-.jpg";
import shreyaBajpai from "../../assets/images/placements/placement-overview/placement-records/images/shreya-bajpai.jpg";
import arunimaSrivastava from "../../assets/images/placements/placement-overview/placement-records/images/arunima-srivastavajpg.jpg";
import shivendraPratapSingh from "../../assets/images/placements/placement-overview/placement-records/images/shivendra-pratap-singh.jpg";
import vanshikaVerma from "../../assets/images/placements/placement-overview/placement-records/images/vanshika-verma-.jpg";
import sakshiSoni from "../../assets/images/placements/placement-overview/placement-records/images/sakshi-soni.jpg";
import meghnaTiwari from "../../assets/images/placements/placement-overview/placement-records/images/meghna-tiwari-.jpg";
import prashantManiTripathi from "../../assets/images/placements/placement-overview/placement-records/images/prashant-mani-.jpg";
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
import teachnook from "../../assets/images/placements/placement-overview/placement-records/logos/teachnook.png";
import eteam from "../../assets/images/placements/placement-overview/placement-records/logos/eteam.png";
import codeyoung from "../../assets/images/placements/placement-overview/placement-records/logos/codeyoung.png";
import academor from "../../assets/images/placements/placement-overview/placement-records/logos/academor.png";
import tikona from "../../assets/images/placements/placement-overview/placement-records/logos/tikona.png";
import hikeeduc from "../../assets/images/placements/placement-overview/placement-records/logos/hikeeduc.png";
import registerkaro from "../../assets/images/placements/placement-overview/placement-records/logos/registerkaro.png";
import accenture from "../../assets/images/placements/placement-overview/placement-records/logos/accenture.png";
import acres99 from "../../assets/images/placements/placement-overview/placement-records/logos/99acres.png";
import hdfcLife from "../../assets/images/placements/placement-overview/placement-records/logos/hdfc-life.png";
import airtel from "../../assets/images/placements/placement-overview/placement-records/logos/airtel.png";
import ptc_industries from "../../assets/images/placements/placement-overview/placement-records/logos/ptc-industries.png";
// import josh_technology from "../../assets/images/placements/placement-overview/placement-records/logos/josh-technology.png";
import cognizant from "../../assets/images/placements/placement-overview/placement-records/logos/cognizant.png";
import qss from "../../assets/images/placements/placement-overview/placement-records/logos/qss.png";
import jeevasnathi from "../../assets/images/placements/placement-overview/placement-records/logos/jeevasnathi.png";
import torrent_power from "../../assets/images/placements/placement-overview/placement-records/logos/torrent-power.png";
import internshala from "../../assets/images/placements/placement-overview/placement-records/logos/torrent-power.png";
import download from "../../assets/images/placements/placement-overview/placement-records/logos/download.png";
// import download1 from "../../assets/images/placements/placement-overview/placement-records/logos/download1.png";
import download2 from "../../assets/images/placements/placement-overview/placement-records/logos/download2.png";
import adverb from "../../assets/images/placements/placement-overview/placement-records/logos/addverb.png";
import ck from "../../assets/images/placements/placement-overview/placement-records/logos/ck.png";
import classic from "../../assets/images/placements/placement-overview/placement-records/logos/classic.png";
import adani from "../../assets/images/placements/placement-overview/placement-records/logos/adani.png";
import priyanshuYyadavMin from "../../assets/images/placements/placement-overview/placement-records/images/priyanshu-yadav-min-.jpg";
import snehaPalMin from "../../assets/images/placements/placement-overview/placement-records/images/sneha-pal-min-.jpeg";
import sudiptaChattargi from "../../assets/images/placements/placement-overview/placement-records/images/sudipta-chattargi-mba.jpg";
import khushbooSaxenaMin from "../../assets/images/placements/placement-overview/placement-records/images/khushboo-saxena-min.jpg";
import rahulBail from "../../assets/images/placements/placement-overview/placement-records/images/rahul-bail-08-min-.jpg";
import vatsalaRai from "../../assets/images/placements/placement-overview/placement-records/images/vatsala-rai--.jpeg";
import vishakhaSingh from "../../assets/images/placements/placement-overview/placement-records/images/vishakha-singh-min-jpg.jpg";
import pooja from "../../assets/images/placements/placement-overview/placement-records/images/pooja.jpg";
import abhishekTiwari from "../../assets/images/placements/placement-overview/placement-records/images/abhishek-tiwari.jpg";
import vibhavPathak from "../../assets/images/placements/placement-overview/placement-records/images/vibhav-pathak.jpg";
import janhviSrivastava from "../../assets/images/placements/placement-overview/placement-records/images/janhvi-srivastava-min.jpg";
import shreyaNigam from "../../assets/images/placements/placement-overview/placement-records/images/shreya-nigam.jpg";
import arvilRishi from "../../assets/images/placements/placement-overview/placement-records/images/arvil-rishi-hitalia-.jpeg";
import satyamVishwakarma from "../../assets/images/placements/placement-overview/placement-records/images/satyam-vishwakarma.jpeg";
import sujeetMaurya from "../../assets/images/placements/placement-overview/placement-records/images/sujeet-maurya-.jpg";
import akshayKumar from "../../assets/images/placements/placement-overview/placement-records/images/akshay-kumar.jpg";
import gungun from "../../assets/images/placements/placement-overview/placement-records/images/gungun-.jpg";
import nehaSingh from "../../assets/images/placements/placement-overview/placement-records/images/neha-singh-.jpg";
import supriyaRai from "../../assets/images/placements/placement-overview/placement-records/images/supriya-rai-.jpeg";
import tejasvaMaurya from "../../assets/images/placements/placement-overview/placement-records/images/tejasva-maurya-.jpg";
import satyendraKumar from "../../assets/images/placements/placement-overview/placement-records/images/satyendra-kumar.jpg";
import amanSingh from "../../assets/images/placements/placement-overview/placement-records/images/aman-singh.jpg";
import simranSingh from "../../assets/images/placements/placement-overview/placement-records/images/simran-singh.jpg";
import alviZaheer from "../../assets/images/placements/placement-overview/placement-records/images/alvia-zaheer-.jpg";
import anshikaTiwari from "../../assets/images/placements/placement-overview/placement-records/images/anshika-.jpg";
import shubhangiGupta from "../../assets/images/placements/placement-overview/placement-records/images/shubhangi-gupta-.jpg";
import anjaliSinghBisht from "../../assets/images/placements/placement-overview/placement-records/images/anjali-singh-bisht-.jpg";
import atulVerma from "../../assets/images/placements/placement-overview/placement-records/images/atul-verma-.jpg";
import anshulPandey from "../../assets/images/placements/placement-overview/placement-records/images/anshul-pandey-mba-.jpeg";
import anshikaShukla from "../../assets/images/placements/placement-overview/placement-records/images/anshika-shukla-.jpg";
import pankajGupta from "../../assets/images/placements/placement-overview/placement-records/images/pankaj-gupta--.jpeg";
import pawanKumarSingh from "../../assets/images/placements/placement-overview/placement-records/images/pawan-kumar-.jpeg";
import ujjawalPratapSingh from "../../assets/images/placements/placement-overview/placement-records/images/ujjawal-pratap-singh.jpeg";
import vishalPratap from "../../assets/images/placements/placement-overview/placement-records/images/vishal-pratap-singh-.jpg";
import harshUpadhyay from "../../assets/images/placements/placement-overview/placement-records/images/harsh-upadhyay-min-.jpg";
// adani
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
      image: ataaKhan,
      companyLogo: sap,
      package: "16.00 LPA",
    },
    {
      id: 2,
      name: "Tushar Trivedi",
      degree: "B.Tech. in Computer Science Engineering",
      image: tusharTrivedi,
      companyLogo: sap,
      package: "16.00 LPA",
    },
    {
      id: 3,
      name: "Nikhil Kumar Tewari",
      degree: "B.C.A. (Bachelor of Computer Applications)",
      image: nikhilTiwari,
      companyLogo: planetSpark,
      package: "6.18 LPA",
    },
    {
      id: 4,
      name: "Sahul Pandey",
      degree: "B.B.A. (Bachelor of Business Administration)",
      image: sahulPandey,
      companyLogo: "https://srmu.ac.in/storage/recruiters/corizo-15022401483366.png",
      package: "4.20 LPA",
    },
    {
      id: 5,
      name: "Harshita Shukla",
      degree: "B.Tech. in Biotechnology",
      image: harshitaShukla,
      companyLogo: "https://srmu.ac.in/storage/recruiters/corizo-15022401483366.png",
      package: "4.20 LPA",
    },
    {
      id: 6,
      name: "Tushar Suryavanshi",
      degree: "B.Sc.(Hons.) in Agriculture",
      image: tusharSuryavanshi,
      companyLogo: "https://srmu.ac.in/storage/recruiters/corizo-15022401483366.png",
      package: "4.20 LPA",
    },
    {
      id: 7,
      name: "Aman Sinha",
      degree: "M.B.A. (Master of Business Administration)",
      image: amanSinha,
      companyLogo: jaroEducation,
      package: "7.50 LPA",
    },
    {
      id: 8,
      name: "Harshita Awasthi",
      degree: "M.Sc. in Biotechnology",
      image: harshitaAwasthi,
      companyLogo: jaroEducation,
      package: "7.50 LPA",
    },
    {
      id: 9,
      name: "Anmol Mishra",
      degree: "B.Tech. in Computer Science Engineering",
      image: anmolMishra,
      companyLogo: planetSpark,
      package: "7.00 LPA",
    },
    {
      id: 10,
      name: "Ishika Jindal",
      degree: "B.Tech. in Electrical Engineering",
      image: ishikaJindal,
      companyLogo: planetSpark,
      package: "7.00 LPA",
    },
    {
      id: 11,
      name: "Suryanshu Pandey",
      degree: "B.Com. (Bachelor of Commerce)",
      image: suryanshuPandey,
      companyLogo: teachnook,
      package: "6.00 LPA",
    },
    {
      id: 12,
      name: "Muskan Singh",
      degree: "B.Sc.(Hons.) in Biotechnology",
      image: muskanSingh,
      companyLogo: teachnook,
      package: "6.00 LPA",
    },
    {
      id: 13,
      name: "Sonal",
      degree: "B.Sc.(Hons.) in Agriculture",
      image: sonal,
      companyLogo: eteam,
      package: "3.00 LPA",
    },
    {
      id: 14,
      name: "Kriti Mishra",
      degree: "B.B.A. (Bachelor of Business Administration)",
      image: kritiMishra,
      companyLogo: jaroEducation,
      package: "7.50 LPA",
    },
    {
      id: 15,
      name: "Ayush Tiwari",
      degree: "M.B.A. (Master of Business Administration)",
      image: ayushTiwari,
      companyLogo: teachnook,
      package: "9.00 LPA",
    },
    {
      id: 16,
      name: "Shatakshi Dubey",
      degree: "M.B.A. (Master of Business Administration)",
      image: shatakshiDubey,
      companyLogo: teachnook,
      package: "9.00 LPA",
    },
    {
      id: 17,
      name: "Shivangi Gupta",
      degree: "M.B.A. (Master of Business Administration)",
      image: shivangiGupta,
      companyLogo: teachnook,
      package: "9.00 LPA",
    },
    {
      id: 18,
      name: "Rohan Kumar",
      degree: "M.B.A. (Master of Business Administration)",
      image: rohanKumar,
      companyLogo: teachnook,
      package: "9.00 LPA",
    },
    {
      id: 19,
      name: "Saurabh Yadav",
      degree: "M.B.A. (Master of Business Administration)",
      image: saurabhYadav,
      companyLogo: teachnook,
      package: "9.00 LPA",
    },
    {
      id: 20,
      name: "Ananya Shukla",
      degree: "M.B.A. (Master of Business Administration)",
      image: ananyaShukla,
      companyLogo: teachnook,
      package: "9.00 LPA",
    },
    {
      id: 21,
      name: "Nausheen Bano",
      degree: "M.B.A. (Master of Business Administration)",
      image: nausheenBano,
      companyLogo: teachnook,
      package: "9.00 LPA",
    },
    {
      id: 22,
      name: "Anshika Rathore",
      degree: "M.B.A. (Master of Business Administration)",
      image: anshikaRathore,
      companyLogo: teachnook,
      package: "9.00 LPA",
    },
    {
      id: 23,
      name: "Anjanee Kumar Yadav",
      degree: "M.C.A. (Master of Computer Application)",
      image: anjaneeKumarYadav,
      companyLogo: teachnook,
      package: "9.00 LPA",
    },
    {
      id: 24,
      name: "Shreya Bajpai",
      degree: "B.Tech. in Biotechnology",
      image: shreyaBajpai,
      companyLogo: codeyoung,
      package: "3.88 LPA",
    },
    {
      id: 25,
      name: "Arunima Srivastava",
      degree: "B.Tech. in Electrical Engineering",
      image: arunimaSrivastava,
      companyLogo: teachnook,
      package: "6.00 LPA",
    },
    {
      id: 26,
      name: "Shivendra Pratap Singh",
      degree: "M.C.A. (Master of Computer Application)",
      image: shivendraPratapSingh,
      companyLogo: teachnook,
      package: "9.00 LPA",
    },
    {
      id: 27,
      name: "Vanshika Verma",
      degree: "M.B.A. (Master of Business Administration)",
      image: vanshikaVerma,
      companyLogo: academor,
      package: "8.00 LPA",
    },
    {
      id: 28,
      name: "Sakshi Soni",
      degree: "M.B.A. (Master of Business Administration)",
      image: sakshiSoni,
      companyLogo: tikona,
      package: "8.00 LPA",
    },
    {
      id: 29,
      name: "Meghna Tiwari",
      degree: "B.Tech. in Biotechnology",
      image: meghnaTiwari,
      companyLogo: hikeeduc,
      package: "6.42 LPA",
    },
    {
      id: 30,
      name: "Prashant Mani Tripathi",
      degree: "B.Sc.(Hons.) in Agriculture",
      image: prashantManiTripathi,
      companyLogo: registerkaro,
      package: "6.00 LPA",
    },
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
      image: aryanSinghRajpoot,
      companyLogo: accenture,
      package: "3.40 LPA",
    },
    {
      id: 2,
      name: "Shiv Tiwari",
      degree: "B.C.A. (Bachelor of Computer Applications)",
      image: shivJiTiwari,
      companyLogo: accenture,
      package: "3.40 LPA",
    },
    {
      id: 3,
      name: "Sachin Dubey",
      degree: "B.C.A. (Bachelor of Computer Applications)",
      image: sachinDubey,
      companyLogo: accenture,
      package: "3.40 LPA",
    },
    {
      id: 4,
      name: "Abhishek Gupta",
      degree: "B.B.A. (Bachelor of Business Administration)",
      image: abhishekGupta,
      companyLogo: tcs,
      package: "2.60 LPA",
    },
    {
      id: 5,
      name: "Amit Singh",
      degree: "B.B.A. (Bachelor of Business Administration)",
      image: amitSingh,
      companyLogo: tcs,
      package: "2.60 LPA",
    },
    {
      id: 6,
      name: "Anup Singh",
      degree: "B.B.A. (Bachelor of Business Administration)",
      image: anupSingh,
      companyLogo: tcs,
      package: "2.60 LPA",
    },
    {
      id: 7,
      name: "Arun Kumar Yadav",
      degree: "B.Com. (Bachelor of Commerce)",
      image: arunKumarYadav,
      companyLogo: tcs,
      package: "2.60 LPA",
    },
    {
      id: 8,
      name: "Dev Kumar",
      degree: "B.B.A. (Bachelor of Business Administration)",
      image: devKumar,
      companyLogo: tcs,
      package: "2.60 LPA",
    },
    {
      id: 9,
      name: "Abhishek Gupta",
      degree: "B.B.A. (Bachelor of Business Administration)",
      image: abhishekGuptaMin,
      companyLogo: learningRoute,
      package: "6.06 LPA",
    },
    {
      id: 10,
      name: "Anant N.P. Shukla",
      degree: "B.Com. (Bachelor of Commerce)",
      image: anantShukla,
      companyLogo: learningRoute,
      package: "6.06 LPA",
    },
    {
      id: 11,
      name: "Priyanshu Yadav",
      degree: "M.B.A. (Master of Business Administration)",
      image: priyanshuYyadavMin,
      companyLogo: learningRoute,
      package: "6.06 LPA",
    },
    {
      id: 12,
      name: "Sneha Pal",
      degree: "M.B.A. (Master of Business Administration)",
      image: snehaPalMin,
      companyLogo: learningRoute,
      package: "6.06 LPA",
    },
    {
      id: 13,
      name: "Sudipta",
      degree: "B.B.A. (Bachelor of Business Administration)",
      image: sudiptaChattargi,
      companyLogo: learningRoute,
      package: "6.06 LPA",
    },
    {
      id: 14,
      name: "Khushboo Saxena",
      degree: "M.B.A. (Master of Business Administration)",
      image: khushbooSaxenaMin,
      companyLogo: registerkaro,
      package: "6.48 LPA",
    },
    {
      id: 15,
      name: "Rahul Bali",
      degree: "B.Tech. in Computer Science Engineering",
      image: rahulBail,
      companyLogo: registerkaro,
      package: "6.60 LPA",
    },
    {
      id: 16,
      name: "Vatsala Rai",
      degree: "B.C.A. (Bachelor of Computer Applications)",
      image: vatsalaRai,
      companyLogo: registerkaro,
      package: "6.00 LPA",
    },
    {
      id: 17,
      name: "Vishakha Singh",
      degree: "M.B.A. (Master of Business Administration)",
      image: vishakhaSingh,
      companyLogo: registerkaro,
      package: "3.00 LPA",
    },
    {
      id: 18,
      name: "Pooja Singh",
      degree: "M.B.A. (Master of Business Administration)",
      image: pooja,
      companyLogo: acres99,
      package: "5.08 LPA",
    },
    {
      id: 19,
      name: "Abhishek Tiwari",
      degree: "M.B.A. (Master of Business Administration)",
      image: abhishekTiwari,
      companyLogo: hdfcLife,
      package: "4.75 LPA",
    },
    {
      id: 20,
      name: "Vibhav Pathak",
      degree: "M.B.A. (Master of Business Administration)",
      image: vibhavPathak,
      companyLogo: hdfcLife,
      package: "4.75 LPA",
    },
    {
      id: 21,
      name: "Janhvi Srivastava",
      degree: "M.B.A. (Master of Business Administration)",
      image: janhviSrivastava,
      companyLogo: airtel,
      package: "4.50 LPA",
    },
    {
      id: 22,
      name: "Shreya Nigam",
      degree: "B.Tech. in Computer Science Engineering",
      image: shreyaNigam,
      companyLogo: sap,
      package: "6.52 LPA",
    },
    {
      id: 23,
      name: "Arvil Rishi Hitalia",
      degree: "B.Tech. in Mechanical Engineering",
      image: arvilRishi,
      companyLogo: ptc_industries,
      package: "2.64 LPA",
    },
    {
      id: 24,
      name: "Satyam Vishwakarma",
      degree: "B.Tech. in Electrical Engineering",
      image: satyamVishwakarma,
      companyLogo: ptc_industries,
      package: "2.50 LPA",
    },
    {
      id: 25,
      name: "Sujeet Maurya",
      degree: "B.Tech. in Electrical Engineering",
      image: sujeetMaurya,
      companyLogo: ptc_industries,
      package: "2.50 LPA",
    },
    {
      id: 26,
      name: "Akshay Kumar",
      degree: "B.Tech. in Computer Science Engineering",
      image: akshayKumar,
      companyLogo: sap,
      package: "6.52 LPA",
    },
    {
      id: 28,
      name: "Gungun",
      degree: "M.B.A. (Master of Business Administration)",
      image: gungun,
      companyLogo: jaroEducation,
      package: "12.16 LPA",
    },
    {
      id: 29,
      name: "Neha Singh",
      degree: "M.B.A. (Master of Business Administration)",
      image: nehaSingh,
      companyLogo: jaroEducation,
      package: "12.16 LPA",
    },
    {
      id: 30,
      name: "Supriya Rai",
      degree: "M.B.A. (Master of Business Administration)",
      image: supriyaRai,
      companyLogo: jaroEducation,
      package: "6.78 LPA",
    },
    {
      id: 31,
      name: "Tejasva Maurya",
      degree: "B.Tech. in Computer Science Engineering",
      image: tejasvaMaurya,
      companyLogo: cognizant,
      package: "6.75 LPA",
    },
    {
      id: 32,
      name: "Satyendra Kumar",
      degree: "B.Tech. in Computer Science Engineering",
      image: satyendraKumar,
      companyLogo: qss,
      package: "7.20 LPA",
    },
    {
      id: 33,
      name: "Aman Singh",
      degree: "B.Tech. in Computer Science Engineering",
      image: amanSingh,
      companyLogo: qss,
      package: "7.20 LPA",
    },
    {
      id: 34,
      name: "Simran Singh",
      degree: "M.B.A. (Master of Business Administration)",
      image: simranSingh,
      companyLogo: planetSpark,
      package: "6.50 LPA",
    },
    {
      id: 35,
      name: "Alviya Zaheer",
      degree: "B.Tech. in Computer Science Engineering",
      image: alviZaheer,
      companyLogo: planetSpark,
      package: "6.50 LPA",
    },
    {
      id: 36,
      name: "Anshika Tiwari",
      degree: "M.B.A. (Master of Business Administration)",
      image: anshikaTiwari,
      companyLogo: planetSpark,
      package: "6.50 LPA",
    },
    {
      id: 37,
      name: "Shubhangi Gupta",
      degree: "B.Tech. in Computer Science Engineering",
      image: shubhangiGupta,
      companyLogo: hikeeduc,
      package: "6.42 LPA",
    },
    {
      id: 38,
      name: "Anjali Singh Bisht",
      degree: "M.B.A. (Master of Business Administration)",
      image: anjaliSinghBisht,
      companyLogo: jeevasnathi,
      package: "4.60 LPA",
    },
    {
      id: 39,
      name: "Atul Verma",
      degree: "B.Tech. in Electrical Engineering",
      image: atulVerma,
      companyLogo: torrent_power,
      package: "4.50 LPA",
    },
    {
      id: 40,
      name: "Anshul Pandey",
      degree: "M.B.A. (Business Analytics) with L&T",
      image: anshulPandey,
      companyLogo: internshala,
      package: "6.60 LPA",
    },
    {
      id: 41,
      name: "Anshika Shukla",
      degree: "M.B.A. (Master of Business Administration)",
      image: anshikaShukla,
      companyLogo: download,
      package: "5.20 LPA",
    },

    {
      id: 43,
      name: "Pankaj Gupta",
      degree: "B.Tech. in Civil Engineering",
      image: pankajGupta,
      companyLogo: download2,
      package: "4.25 LPA",
    },
    {
      id: 44,
      name: "Pawan Kumar Singh",
      degree: "B.Tech. in Civil Engineering",
      image: pawanKumarSingh,
      companyLogo: download2,
      package: "4.25 LPA",
    },
    {
      id: 45,
      name: "Ujjawal Pratap Singh",
      degree: "B.Tech. in Civil Engineering",
      image: ujjawalPratapSingh,
      companyLogo: download2,
      package: "4.25 LPA",
    },
    {
      id: 46,
      name: "Sudipta",
      degree: "B.B.A. (Bachelor of Business Administration)",
      image: sudiptaChattargi,
      companyLogo: adverb,
      package: "5.00 LPA",
    },
    {
      id: 47,
      name: "Vatsala Rai",
      degree: "B.C.A. (Bachelor of Computer Applications)",
      image: vatsalaRai,
      companyLogo: ck,
      package: "4.50 LPA",
    },
    {
      id: 48,
      name: "Vishal Pratap Singh",
      degree: "M.B.A. (Master of Business Administration)",
      image: vishalPratap,
      companyLogo: classic,
      package: "4.50 LPA",
    },
    {
      id: 49,
      name: "Harsh Upadhyay",
      degree: "M.B.A. (Master of Business Administration)",
      image: harshUpadhyay,
      companyLogo: classic,
      package: "4.50 LPA",
    },
    {
      id: 50,
      name: "Navish Kumar Singh",
      degree: "B.Tech. in Electronics & Communication Engineering",
      image: avatar,
      companyLogo: adani,
      package: "LPA",
    },
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
    description: "More than 10 Years of Experience in Shaping Brilliant Careers",
    width: "w-[320px]",
  },
  {
    number: "1500+",
    title: "Job Offers",
    description: "given by 250+ top Companies",
    width: "w-[320px]",
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

import img1 from "../../assets/images/placements/student-testimonials/testimonial1.jpg";
import img2 from "../../assets/images/placements/student-testimonials/testimonial2.jpg";
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
import img13 from "../../assets/images/placements/student-testimonials/333-28022405450187.jpg";
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
      image: img1,
    },
    {
      text: "SRMU Placement team has been very cooperative. Students and Faculties welcome new learning opportunities. The eagerness to learn and grow help us improve our service offering to the institution from an industry perspective too.",
      author: "Mr. Dheeraj Chhabra",
      title: "Co-Founder & Director at Learning Routes",
      image: img2,
    },
    {
      text: "Shri Ramswaroop group has been one of the most premier educational groups of UP. It speaks volume about the efforts Ramswaroop group management, Faculty and T&P put into bring the students to the level of excellence they have achieved. Students at Ramswaroop group are competent, passionate and goal oriented which is equivalent to the student quality of any premium group across India.",
      author: "Mr. Saurabh Singh",
      title: "Associate Manager at HCL Technologies",
      image: img3,
    },
    {
      text: "Very Well Managed and coordinated. Communication & Other personality of the students is well groomed.",
      author: "Mr. Ankur Gahlawat",
      title: "HR at Torrent Power",
      image: img4,
    },
    {
      text: "Great Initiatives & properly Coordinated. It was great platform to understand talent pool.",
      author: "Ms. Laveena Nihalani",
      title: "Consultant at Capgemini",
      image: img5,
    },
    {
      text: "Professionalism, sincerity and passion to do something for their students beyond limits has been the major strength of Shri Ramswaroop Group.",
      author: "Ms. Sonal Arora",
      title: "Senior HR Manager at Accenture",
      image: img6,
    },
    {
      text: "The arrangement was good, Appreciated the efforts of students.",
      author: "Ms. Surbhi Jaiswal",
      title: "HR at Just Dial",
      image: img7,
    },
    {
      text: "Great feeling to be back as the recruiter of my own college. It was indeed an honor to be a part of the organization.",
      author: "Mr. Mohit Goel",
      title: "Product Manager at SAP",
      image: img8,
    },
    {
      text: "Shri Ramswaroop Memorial Group have come a long way. We have seen the students grow in every level when compared to the before and after status of students taking the E-Learning’s and internships too. We look forward to being a part of the growth of Shri Ramswaroop Memorial in the days to come.",
      author: "Ms. Mary Niang",
      title: "Campus HR at Cognizant",
      image: img9,
    },
    {
      text: "Students are good and trained well in the area. Good brand building embedded in the system.",
      author: "Mr. Amit Vikram",
      title: "Business Consulting (Digital Transformation) at Cognizant",
      image: img10,
    },
    {
      text: "SRMGPC Placement team has been very cooperative. Students and faculties welcome new learning opportunities. The eagerness to learn and grow helps us improve our service offering to the Institution from an Industry perspective too.",
      author: "Mr. Ashesh Prasad",
      title: "Senior Manager Capability Building at TATA Steel",
      image: img11,
    },
    {
      text: "Confident students, eager to learn. Reputed institute with good quality of students.",
      author: "Mr. Mustafa Shahanshah",
      title: "CTO at Alpha Fortress Private Limited",
      image: img12,
    },
    {
      text: "Students have good command over the subjects and can comprehend well. They seem to have been groomed considering overall aspects.",
      author: "Mr. Amit Jauhari",
      title: "Regional Head-Talent Acquisition (North India) at Tata Consultancy Services",
      image: img13,
    },
  ],
  students: [
    {
      text: "SRMU provides the ambiance and serenity necessary for the pursuit of academic excellence. The central library of university is fully digitized. E-learning with web resources has also been provided. Excellent labs for gaining practical knowledge. Highly educated faculty with excellent teaching pedagogy.",
      author: "Harshit Sinha",
      title: "B.Tech. in ME (Batch: 2018), Placed in Byjus Think and Learn Pvt. Ltd.",
      image: img14,
    },
    {
      text: "Our university is the best because here, the students live with full enthusiasm and energy. Our university has good infrastructure. It has a very quiet and green environment, which students need during their study. The interaction of teachers is very good. The hostel rooms are very clean and good. They provide a good meal to the students every time.",
      author: "Anoop Dubey",
      title: "B.Tech. in ME (Batch: 2022), Placed in Hettich India Pvt. Ltd.",
      image: img15,
    },
    {
      text: "We were concerned about our future achievement, but once college was underway, everyone could see how the teachers played an important role in enhancing our education and gave us a pleasant and educated environment. After finishing the first year, we had the opportunity to meet our teachers and friends in person. We were all very excited to do so, and we also had great time taking part in various events and making a lot of memories. Now, we have got some special, lifelong friends. Finally, the college offered me a whole lot of career placement options, from which I chose to be placed with SBI Mutual Fund. I wanted to thank my professors for helping me prepare for this as well as our placement cell.",
      author: "Anurag Mathur",
      title: "M.B.A. (Batch: 2022), Placed in SBI Mutual Fund",
      image: img16,
    },
    {
      text: "My experience at Ramswaroop University is great and memorable. The mentors at Ramswaroop University helped me enhance my academic and interpersonal skills. I am thankful to Training & Placement cell for providing a platform to enhance my skills and an opportunity to showcase them. In the last I am saying that The World is here at Ram Swaroop University.",
      author: "Avinash Gupta",
      title: "M.B.A. (Batch: 2022), Placed in B’orze Heager",
      image: img17,
    },
    {
      text: "I am grateful to SRMU placement cell for providing us a platform to enhance our skills and their role in locating job opportunities to showcase them. Their constant support has landed me the first job of my career.",
      author: "Zuhu Fatima",
      title: "B.Tech. in CSE (Batch: 2020), Placed in Capgemini",
      image: img18,
    },
    {
      text: "My sincere appreciation & gratitude to the Faculty & Placement Department. I am very grateful to them for effectively and sincerely helping me to grab first ever opportunity that came into my life.",
      author: "Ayush Srivastav",
      title: "B.Tech. in CSE (Batch: 2020), Placed in Cognizant",
      image: img19,
    },
  ],
};

export type Drive = {
  id: number;
  companyName: string;
  companyLogo: string;
  dateOfVisit: string;
  description: string;
};


// 2023
import img2023_1 from "../../assets/images/placements/placement-drive/2023/1.png";
import img2023_2 from "../../assets/images/placements/placement-drive/2023/2.png";
import img2023_3 from "../../assets/images/placements/placement-drive/2023/3.png";
import img2023_4 from "../../assets/images/placements/placement-drive/2023/4.png";
import img2023_5 from "../../assets/images/placements/placement-drive/2023/5.png";
import img2023_6 from "../../assets/images/placements/placement-drive/2023/6.png";
import img2023_7 from "../../assets/images/placements/placement-drive/2023/7.png";
import img2023_8 from "../../assets/images/placements/placement-drive/2023/8.png";
import img2023_9 from "../../assets/images/placements/placement-drive/2023/9.png";
import img2023_10 from "../../assets/images/placements/placement-drive/2023/10.png";
import img2023_11 from "../../assets/images/placements/placement-drive/2023/11.png";
import img2023_12 from "../../assets/images/placements/placement-drive/2023/12.png";
import img2023_13 from "../../assets/images/placements/placement-drive/2023/13.png";
import img2023_14 from "../../assets/images/placements/placement-drive/2023/14.png";
import img2023_15 from "../../assets/images/placements/placement-drive/2023/15.png";
import img2023_16 from "../../assets/images/placements/placement-drive/2023/16.png";
import img2023_17 from "../../assets/images/placements/placement-drive/2023/17.png";
import img2023_18 from "../../assets/images/placements/placement-drive/2023/18.png";
import img2023_19 from "../../assets/images/placements/placement-drive/2023/19.png";
import img2023_20 from "../../assets/images/placements/placement-drive/2023/20.png";
import img2023_21 from "../../assets/images/placements/placement-drive/2023/21.png";
import img2023_22 from "../../assets/images/placements/placement-drive/2023/22.png";
import img2023_23 from "../../assets/images/placements/placement-drive/2023/23.png";
import img2023_24 from "../../assets/images/placements/placement-drive/2023/24.png";
import img2023_25 from "../../assets/images/placements/placement-drive/2023/25.png";
import img2023_26 from "../../assets/images/placements/placement-drive/2023/26.png";

// 2024
import img2024_1 from "../../assets/images/placements/placement-drive/2024/1.png";
import img2024_2 from "../../assets/images/placements/placement-drive/2024/2.png";
import img2024_3 from "../../assets/images/placements/placement-drive/2024/3.png";
import img2024_4 from "../../assets/images/placements/placement-drive/2024/4.png";
import img2024_5 from "../../assets/images/placements/placement-drive/2024/5.png";
import img2024_6 from "../../assets/images/placements/placement-drive/2024/6.png";
import img2024_7 from "../../assets/images/placements/placement-drive/2024/7.png";
import img2024_8 from "../../assets/images/placements/placement-drive/2024/8.png";
import img2024_9 from "../../assets/images/placements/placement-drive/2024/9.png";
import img2024_10 from "../../assets/images/placements/placement-drive/2024/10.png";
import img2024_11 from "../../assets/images/placements/placement-drive/2024/11.png";
import img2024_12 from "../../assets/images/placements/placement-drive/2024/12.png";
import img2024_13 from "../../assets/images/placements/placement-drive/2024/13.png";
import img2024_14 from "../../assets/images/placements/placement-drive/2024/14.png";
import img2024_15 from "../../assets/images/placements/placement-drive/2024/15.png";
import img2024_16 from "../../assets/images/placements/placement-drive/2024/16.png";
import img2024_17 from "../../assets/images/placements/placement-drive/2024/17.png";
import img2024_18 from "../../assets/images/placements/placement-drive/2024/18.png";
import img2024_19 from "../../assets/images/placements/placement-drive/2024/19.png";
import img2024_20 from "../../assets/images/placements/placement-drive/2024/20.png";
import img2024_21 from "../../assets/images/placements/placement-drive/2024/21.png";
import img2024_22 from "../../assets/images/placements/placement-drive/2024/22.png";
import img2024_23 from "../../assets/images/placements/placement-drive/2024/23.png";
import img2024_24 from "../../assets/images/placements/placement-drive/2024/24.png";
import img2024_25 from "../../assets/images/placements/placement-drive/2024/25.png";

// 2025
import img2025_1 from "../../assets/images/placements/placement-drive/2025/1.png";
import img2025_2 from "../../assets/images/placements/placement-drive/2025/2.png";
import img2025_3 from "../../assets/images/placements/placement-drive/2025/3.png";
import img2025_4 from "../../assets/images/placements/placement-drive/2025/4.png";
import img2025_5 from "../../assets/images/placements/placement-drive/2025/5.png";
import img2025_6 from "../../assets/images/placements/placement-drive/2025/6.png";
import img2025_7 from "../../assets/images/placements/placement-drive/2025/7.png";
import img2025_8 from "../../assets/images/placements/placement-drive/2025/8.png";
import img2025_9 from "../../assets/images/placements/placement-drive/2025/9.png";
import img2025_10 from "../../assets/images/placements/placement-drive/2025/10.png";
import img2025_11 from "../../assets/images/placements/placement-drive/2025/11.png";
import img2025_12 from "../../assets/images/placements/placement-drive/2025/12.png";
import img2025_13 from "../../assets/images/placements/placement-drive/2025/13.png";
import img2025_14 from "../../assets/images/placements/placement-drive/2025/14.png";
import img2025_15 from "../../assets/images/placements/placement-drive/2025/15.png";
import img2025_16 from "../../assets/images/placements/placement-drive/2025/16.png";
import img2025_17 from "../../assets/images/placements/placement-drive/2025/17.png";
import img2025_18 from "../../assets/images/placements/placement-drive/2025/18.png";
import img2025_19 from "../../assets/images/placements/placement-drive/2025/19.png";
import img2025_20 from "../../assets/images/placements/placement-drive/2025/20.png";
import img2025_21 from "../../assets/images/placements/placement-drive/2025/21.png";
import img2025_22 from "../../assets/images/placements/placement-drive/2025/22.png";
import img2025_23 from "../../assets/images/placements/placement-drive/2025/23.png";
import img2025_24 from "../../assets/images/placements/placement-drive/2025/24.png";
import img2025_25 from "../../assets/images/placements/placement-drive/2025/25.png";
import img2025_26 from "../../assets/images/placements/placement-drive/2025/26.png";
export const placementData: Record<string, Drive[]> = {
  "2023": [
    {
      id: 1,
      companyName: "Aditya Birla Group",
      companyLogo: img2023_1,
      dateOfVisit: "10 December, 2022",
      description: "Aditya Birla Group businesses are global powerhouses across sectors such as metals, pulp and fibre, chemicals, textiles, carbon black, telecom and cement.",
    },
    {
      id: 2,
      companyName: "Collabera",
      companyLogo: img2023_2,
      dateOfVisit: "23 November, 2022",
      description: "Collabera Inc is a global IT consulting company with headquarters in Basking Ridge, New Jersey, and Asia Pacific headquarters in Vadodara, Gujarat.",
    },
    {
      id: 3,
      companyName: "Corizo",
      companyLogo: img2023_3,
      dateOfVisit: "31 January, 2023",
      description: "Corizo is an edtech platform providing internships, professional training programs, career guidance, and mentorship.",
    },
    {
      id: 4,
      companyName: "Coditas",
      companyLogo: img2023_4,
      dateOfVisit: "25 August, 2022",
      description: "Coditas is a new-age offshore product development organization offering services across the full software development lifecycle.",
    },
    {
      id: 5,
      companyName: "Tech Mahindra",
      companyLogo: img2023_5,
      dateOfVisit: "23 August, 2022",
      description: "Tech Mahindra is an Indian multinational IT services and consulting company, part of the Mahindra Group.",
    },
    {
      id: 6,
      companyName: "Anix",
      companyLogo: img2023_6,
      dateOfVisit: "07 November, 2022",
      description: "Anix is a skill development organization with over a decade of experience working with government bodies and educational institutions.",
    },
    {
      id: 7,
      companyName: "Codeyoung",
      companyLogo: img2023_7,
      dateOfVisit: "17 January, 2023",
      description: "Codeyoung is an online platform where children learn creative coding, problem-solving, and innovation through live classes.",
    },
    {
      id: 8,
      companyName: "PlanetSpark",
      companyLogo: img2023_8,
      dateOfVisit: "15 December, 2022",
      description: "PlanetSpark focuses on developing communication and leadership skills for learners from childhood to adulthood.",
    },
    {
      id: 9,
      companyName: "TATA AIG Insurance",
      companyLogo: img2023_9,
      dateOfVisit: "03 September, 2022",
      description: "Tata AIG General Insurance Company Limited is a joint venture between Tata Group and American International Group (AIG).",
    },
    {
      id: 10,
      companyName: "YES Bank",
      companyLogo: img2023_10,
      dateOfVisit: "01 March, 2023",
      description: "YES Bank provides comprehensive digital banking services across retail, SME, wholesale, and rural segments.",
    },
    {
      id: 11,
      companyName: "Zenus Group",
      companyLogo: img2023_11,
      dateOfVisit: "15 November, 2022",
      description: "Zenus Group is a telecom company established in 2012, providing solutions for service providers and equipment manufacturers.",
    },
    {
      id: 12,
      companyName: "Speed Volvo",
      companyLogo: img2023_12,
      dateOfVisit: "27 January, 2023",
      description: "Speed Volvo is committed to delivering exceptional customer service in automobile sales and servicing.",
    },
    {
      id: 13,
      companyName: "PVR Cinemas",
      companyLogo: img2023_13,
      dateOfVisit: "31 January, 2023",
      description: "PVR Cinemas is India’s largest movie theatre chain with more than 400 screens across 70 cities.",
    },
    {
      id: 14,
      companyName: "Pulsus Healthtech",
      companyLogo: img2023_14,
      dateOfVisit: "30 November, 2022",
      description: "Pulsus Healthtech is a scientific and medical publisher specializing in open-access and peer-reviewed journals.",
    },
    {
      id: 15,
      companyName: "Jaro Education",
      companyLogo: img2023_15,
      dateOfVisit: "25 November, 2022",
      description: "Jaro Education is India’s leading online higher education company and a pioneer in executive education.",
    },
    {
      id: 16,
      companyName: "Integrated Resources",
      companyLogo: img2023_16,
      dateOfVisit: "02 March, 2023",
      description: "Integrated Resources delivers premium talent solutions backed by over 20 years of industry experience.",
    },
    {
      id: 17,
      companyName: "Learning Route",
      companyLogo: img2023_17,
      dateOfVisit: "29 August, 2022",
      description: "Learning Route helps professionals choose the right courses aligned with their interests and career goals.",
    },
    {
      id: 18,
      companyName: "Vastu Housing Finance",
      companyLogo: img2023_18,
      dateOfVisit: "08 November, 2022",
      description: "Vastu Housing Finance Corporation provides affordable housing finance solutions to underserved segments.",
    },
    {
      id: 19,
      companyName: "MyCaptain",
      companyLogo: img2023_19,
      dateOfVisit: "01 December, 2022",
      description: "MyCaptain offers cohort-based courses helping students and early professionals build modern career skills.",
    },
    {
      id: 20,
      companyName: "Paytm",
      companyLogo: img2023_20,
      dateOfVisit: "30 August, 2022",
      description: "Paytm led India’s digital payments revolution and supports millions of merchants with payment solutions.",
    },
    {
      id: 21,
      companyName: "SkillVertex",
      companyLogo: img2023_21,
      dateOfVisit: "17 January, 2023",
      description: "SkillVertex provides industry-focused upskilling programs for students and working professionals.",
    },
    {
      id: 22,
      companyName: "Torrent Group",
      companyLogo: img2023_22,
      dateOfVisit: "15 September, 2023",
      description: "Torrent Group operates in healthcare and power sectors and has expanded into city gas distribution.",
    },
    {
      id: 23,
      companyName: "Hettich",
      companyLogo: img2023_23,
      dateOfVisit: "23 August, 2022",
      description: "Hettich is a global manufacturer of furniture fittings, headquartered in Germany.",
    },
    {
      id: 24,
      companyName: "EduGorilla",
      companyLogo: img2023_24,
      dateOfVisit: "04 March, 2023",
      description: "EduGorilla is an edtech company providing exam preparation resources through online and offline channels.",
    },
    {
      id: 25,
      companyName: "TCS",
      companyLogo: img2023_25,
      dateOfVisit: "20 August, 2022",
      description: "Tata Consultancy Services (TCS) is a global IT services company and part of the Tata Group.",
    },
    {
      id: 26,
      companyName: "Red Bull India Pvt. Ltd.",
      companyLogo: img2023_26,
      dateOfVisit: "—",
      description: "Red Bull India Pvt. Ltd. is part of the global Red Bull brand, known for its energy drinks and strong presence in sports and youth culture.",
    },
  ],

  "2024": [
    {
      id: 1,
      companyName: "Amazon",
      companyLogo: img2024_1,
      dateOfVisit: "11 September, 2023",
      description:
        "Amazon is guided by principles such as customer obsession, passion for invention, commitment to operational excellence, and long-term thinking, striving to be Earth’s most customer-centric company.",
    },
    {
      id: 2,
      companyName: "CEDCOSS",
      companyLogo: img2024_2,
      dateOfVisit: "14 September, 2023",
      description: "Founded in 2010, CEDCOSS focuses on development and customization of open-source software, delivering efficient and quality-driven IT solutions.",
    },
    {
      id: 3,
      companyName: "Birlasoft",
      companyLogo: img2024_3,
      dateOfVisit: "10 January, 2024",
      description: "Birlasoft is a global leader in Cloud, AI, and Digital technologies, combining deep domain expertise with enterprise solutions.",
    },
    {
      id: 4,
      companyName: "Corizo",
      companyLogo: img2024_4,
      dateOfVisit: "24 August, 2023",
      description: "Corizo bridges the gap between formal education and industry requirements through internships, professional training, and mentorship.",
    },
    {
      id: 5,
      companyName: "HCL",
      companyLogo: img2024_5,
      dateOfVisit: "21 November, 2023",
      description: "HCL delivers innovative technology solutions powered by a global workforce of over 224,700 professionals across 60 countries.",
    },
    {
      id: 6,
      companyName: "Ericsson",
      companyLogo: img2024_6,
      dateOfVisit: "31 January, 2024",
      description: "Ericsson is a global leader in information and communication technology, headquartered in Stockholm, Sweden, with operations worldwide.",
    },
    {
      id: 7,
      companyName: "Teachnook",
      companyLogo: img2024_7,
      dateOfVisit: "20 February, 2024",
      description: "Teachnook is an e-learning platform focused on practical, outcome-based learning and industry-oriented hiring solutions.",
    },
    {
      id: 8,
      companyName: "SAP",
      companyLogo: img2024_8,
      dateOfVisit: "18 July, 2023",
      description: "SAP develops enterprise software solutions that help organizations of all sizes run their businesses efficiently and sustainably.",
    },
    {
      id: 9,
      companyName: "Intellipaat",
      companyLogo: img2024_9,
      dateOfVisit: "06 February, 2024",
      description: "Intellipaat is a global professional training provider offering certification programs in data science, AI, cloud, and emerging technologies.",
    },
    {
      id: 10,
      companyName: "Muthoot Finance",
      companyLogo: img2024_10,
      dateOfVisit: "30 September, 2023",
      description: "Muthoot Finance is India’s largest gold loan NBFC, offering financial services including loans, insurance, and money transfer solutions.",
    },
    {
      id: 11,
      companyName: "HDFC Sales",
      companyLogo: img2024_11,
      dateOfVisit: "16 December, 2023",
      description: "HDFC Sales, a subsidiary of HDFC Bank, provides customized solutions in mortgages, life insurance, and general insurance.",
    },
    {
      id: 12,
      companyName: "BYJU'S",
      companyLogo: img2024_12,
      dateOfVisit: "13 October, 2023",
      description: "BYJU'S is one of the world’s largest edtech companies, offering innovative learning programs for students across the globe.",
    },
    {
      id: 13,
      companyName: "IndiaMART",
      companyLogo: img2024_13,
      dateOfVisit: "02 December, 2023",
      description: "IndiaMART is India’s largest B2B online marketplace, connecting buyers and suppliers across multiple industries.",
    },
    {
      id: 14,
      companyName: "Subros",
      companyLogo: img2024_14,
      dateOfVisit: "12 January, 2024",
      description: "Subros Limited is India’s leading manufacturer of thermal products for automotive applications, in collaboration with Denso.",
    },
    {
      id: 15,
      companyName: "eTeam",
      companyLogo: img2024_15,
      dateOfVisit: "10 September, 2023",
      description: "eTeam promotes a high-performance corporate culture through internal training and continuous professional development.",
    },
    {
      id: 16,
      companyName: "Accosts Remedies Pvt. Ltd.",
      companyLogo: img2024_16,
      dateOfVisit: "04 November, 2023",
      description: "Accosts Remedies has over 32 years of experience in manufacturing and distributing pharmaceutical medicines.",
    },
    {
      id: 17,
      companyName: "Motherson",
      companyLogo: img2024_17,
      dateOfVisit: "21 February, 2024",
      description: "Motherson is one of the world’s largest automotive component manufacturers serving global vehicle brands.",
    },
    {
      id: 18,
      companyName: "JBM Auto",
      companyLogo: img2024_18,
      dateOfVisit: "31 October, 2023",
      description: "JBM Auto Limited manufactures auto systems and operates in the e-mobility and electric bus segment.",
    },
    {
      id: 19,
      companyName: "Krishna Maruti Group",
      companyLogo: img2024_19,
      dateOfVisit: "08 January, 2024",
      description: "Krishna Maruti Group is a leading automotive component manufacturer and an ancillary of Maruti Suzuki.",
    },
    {
      id: 20,
      companyName: "KP Reliable Group",
      companyLogo: img2024_20,
      dateOfVisit: "20 September, 2023",
      description: "KP Reliable Group is a quality assurance company providing inspection and quality control services across industries.",
    },
    {
      id: 21,
      companyName: "Royal Enfield",
      companyLogo: img2024_21,
      dateOfVisit: "15 November, 2023",
      description: "Royal Enfield is the world’s oldest motorcycle brand in continuous production, headquartered in Chennai, India.",
    },
    {
      id: 22,
      companyName: "Pulsus",
      companyLogo: img2024_22,
      dateOfVisit: "10 January, 2024",
      description: "Pulsus is a global healthcare and medical publishing organization serving professionals across multiple continents.",
    },
    {
      id: 23,
      companyName: "99acres",
      companyLogo: img2024_23,
      dateOfVisit: "31 October, 2023",
      description: "99acres is India’s leading property portal enabling buyers, sellers, and agents to connect efficiently.",
    },
    {
      id: 24,
      companyName: "Base Infra Solutions",
      companyLogo: img2024_24,
      dateOfVisit: "22 December, 2023",
      description: "Base Infra Solutions is a fast-growing proptech platform offering real estate and mortgage solutions across India.",
    },
    {
      id: 25,
      companyName: "Chetu",
      companyLogo: img2024_25,
      dateOfVisit: "26 November, 2023",
      description: "Chetu is a US-based software development company delivering custom technology solutions with a global workforce.",
    },
  ],

  "2025": [
    {
      id: 1,
      companyName: "Zimyo",
      companyLogo: img2025_1,
      dateOfVisit: "25 September, 2024",
      description:
        "Zimyo is a cutting-edge HR and payroll software company that simplifies workforce management through innovative and user-friendly solutions, including employee engagement, performance tracking, and seamless payroll processing.",
    },
    {
      id: 2,
      companyName: "99acres",
      companyLogo: img2025_2,
      dateOfVisit: "26 November, 2024",
      description:
        "99acres is a leading Indian real estate platform that facilitates buying, selling, and renting residential and commercial properties, offering extensive listings, price trends, and locality insights.",
    },
    {
      id: 3,
      companyName: "Accenture",
      companyLogo: img2025_3,
      dateOfVisit: "14 October, 2024",
      description:
        "Accenture is a global professional services company specializing in IT consulting, digital transformation, and cloud solutions to drive innovation and business growth.",
    },
    {
      id: 4,
      companyName: "Addverb",
      companyLogo: img2025_4,
      dateOfVisit: "30 September, 2024",
      description:
        "Addverb is a leading robotics and automation company delivering advanced solutions in warehouse automation, robotics, and industrial IoT to enhance supply chain efficiency.",
    },
    {
      id: 5,
      companyName: "AIS (Asahi India Glass)",
      companyLogo: img2025_5,
      dateOfVisit: "01 October, 2024",
      description: "AIS is India’s leading integrated glass solutions provider for automotive and architectural applications, offering sustainable, high-quality glass products.",
    },
    {
      id: 6,
      companyName: "CapitalVia",
      companyLogo: img2025_6,
      dateOfVisit: "25 November, 2024",
      description: "CapitalVia is a financial advisory firm specializing in real-time market research and investment guidance for stock and commodity markets.",
    },
    {
      id: 7,
      companyName: "Cognizant",
      companyLogo: img2025_7,
      dateOfVisit: "15 October, 2024",
      description: "Cognizant is a global technology and professional services company focused on digital transformation, IT consulting, and business process optimization.",
    },
    {
      id: 8,
      companyName: "DeltaX",
      companyLogo: img2025_8,
      dateOfVisit: "04 October, 2024",
      description: "DeltaX is an AI-driven digital marketing platform that optimizes advertising performance through automation and data-driven insights.",
    },
    {
      id: 9,
      companyName: "EZ Works",
      companyLogo: img2025_9,
      dateOfVisit: "13 November, 2024",
      description: "EZ Works provides technology-driven solutions aimed at simplifying everyday tasks and enhancing efficiency for businesses and individuals.",
    },
    {
      id: 10,
      companyName: "Godrej Agrovet",
      companyLogo: img2025_10,
      dateOfVisit: "26 September, 2024",
      description: "Godrej Agrovet is a diversified agribusiness company focusing on animal feed, crop protection, seeds, and processed foods, promoting sustainable farming.",
    },
    {
      id: 11,
      companyName: "GrayQuest",
      companyLogo: img2025_11,
      dateOfVisit: "22 November, 2024",
      description: "GrayQuest is a fintech company providing flexible education financing solutions for institutions and students.",
    },
    {
      id: 12,
      companyName: "Jaro Education",
      companyLogo: img2025_12,
      dateOfVisit: "14 November, 2024",
      description: "Jaro Education offers online higher education programs in collaboration with top universities, focusing on career-oriented learning.",
    },
    {
      id: 13,
      companyName: "JBM Group",
      companyLogo: img2025_13,
      dateOfVisit: "04 October, 2024",
      description: "JBM Group is a diversified conglomerate operating in automotive, engineering, and renewable energy sectors.",
    },
    {
      id: 14,
      companyName: "JTC",
      companyLogo: img2025_14,
      dateOfVisit: "26 September, 2024",
      description: "JTC provides integrated services across construction, engineering, and technology solutions with a focus on sustainability.",
    },
    {
      id: 15,
      companyName: "Learning Routes",
      companyLogo: img2025_15,
      dateOfVisit: "08 October, 2024",
      description: "Learning Routes offers professional development and skill-building programs through digital and on-site learning models.",
    },
    {
      id: 16,
      companyName: "MoneySukh",
      companyLogo: img2025_16,
      dateOfVisit: "07 October, 2024",
      description: "MoneySukh is a financial advisory platform providing personalized investment and wealth management solutions.",
    },
    {
      id: 17,
      companyName: "PTC Industries",
      companyLogo: img2025_17,
      dateOfVisit: "16 November, 2024",
      description: "PTC Industries is a manufacturer of precision investment castings serving aerospace, defense, automotive, and energy sectors.",
    },
    {
      id: 18,
      companyName: "Railtech Infraventure",
      companyLogo: img2025_18,
      dateOfVisit: "21 November, 2024",
      description: "Railtech Infraventure provides infrastructure solutions for the railway sector, including construction, maintenance, and signaling services.",
    },
    {
      id: 19,
      companyName: "Red Bull",
      companyLogo: img2025_19,
      dateOfVisit: "27 September, 2024",
      description: "Red Bull is a globally recognized energy drink company known for premium beverages and strong sports and esports sponsorships.",
    },
    {
      id: 20,
      companyName: "RegisterKaro",
      companyLogo: img2025_20,
      dateOfVisit: "29 November, 2024",
      description: "RegisterKaro simplifies business registration and legal compliance services for startups and entrepreneurs.",
    },
    {
      id: 21,
      companyName: "Reliable Data Services",
      companyLogo: img2025_21,
      dateOfVisit: "05 October, 2024",
      description: "Reliable Data Services provides IT solutions including data processing, analytics, and software development.",
    },
    {
      id: 22,
      companyName: "SBI General Insurance",
      companyLogo: img2025_22,
      dateOfVisit: "19 November, 2024",
      description: "SBI General Insurance offers a wide range of general insurance products including health, motor, home, and travel insurance.",
    },
    {
      id: 23,
      companyName: "Calvin Klein",
      companyLogo: img2025_23,
      dateOfVisit: "04 December, 2024",
      description: "Calvin Klein is a global fashion brand known for minimalist and modern designs across apparel, accessories, and fragrances.",
    },
    {
      id: 24,
      companyName: "Torrent Gas",
      companyLogo: img2025_24,
      dateOfVisit: "12 November, 2024",
      description: "Torrent Gas provides clean and affordable PNG and CNG energy solutions as part of the Torrent Group.",
    },
    {
      id: 25,
      companyName: "Torrent Power",
      companyLogo: img2025_25,
      dateOfVisit: "14 November, 2024",
      description: "Torrent Power is a major Indian power utility engaged in electricity generation, transmission, and distribution.",
    },
    {
      id: 26,
      companyName: "Vidhyashala",
      companyLogo: img2025_26,
      dateOfVisit: "03 December, 2024",
      description: "Vidhyashala is an educational platform focused on providing quality learning experiences through courses, tutoring, and academic resources.",
    },
  ],
};
