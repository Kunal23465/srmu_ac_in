import {
    BookOpenCheck,
    Factory,
    FlaskConical,
    GraduationCap,
    Lightbulb,
    Microscope,
    Settings,
    UsersRound,
} from "lucide-react";
import type { CustomDepartmentNewData, DepartmentActivityCardNew } from "../../../customs/department-page-new/CustomDepartmentNew";
import type { FacultyMember } from "../departmentOfComputerScienceAndEngineeringNew/DepartmentFaculty";
import drDevendraSinghPortrait from "../../../assets/images/institute-of-biosciences-and-technology-new/faculty/Dr Devendra Singh.png";
import drTabishQidwaiPortrait from "../../../assets/images/institute-of-biosciences-and-technology-new/faculty/Dr Tabish Qidwai.png";
import sunilKumarVermaPortrait from "../../../assets/images/institute-of-biosciences-and-technology-new/faculty/Sunil Kumar Verma.png";
import dikshaSinghPortrait from "../../../assets/images/institute-of-biosciences-and-technology-new/faculty/Diksha Singh.png";
import ayushiVermaPortrait from "../../../assets/images/institute-of-biosciences-and-technology-new/faculty/Er. Ayushi Verma.png";
import himanshuYadavPortrait from "../../../assets/images/institute-of-biosciences-and-technology-new/faculty/Er.Himanshu Yadav.png";
import rahulKYadavPortrait from "../../../assets/images/institute-of-biosciences-and-technology-new/faculty/Dr. Rahul K Yadav.png";
import vandanaChauhanPortrait from "../../../assets/images/institute-of-biosciences-and-technology-new/faculty/Vandana Chauhan.png";
import keertiKumarYadavPortrait from "../../../assets/images/institute-of-biosciences-and-technology-new/faculty/Dr.Keerti Kumar Yadav.png";
import raviKDeshwalPortrait from "../../../assets/images/institute-of-biosciences-and-technology-new/faculty/Dr. Ravi K Deshwal.png";
import bhawnaSrivastavaPortrait from "../../../assets/images/institute-of-biosciences-and-technology-new/faculty/Dr. Bhawna Srivastava.png";
import pratibhaGuptaPortrait from "../../../assets/images/institute-of-biosciences-and-technology-new/faculty/Dr. Pratibha Gupta.png";
import neerajGuptaPortrait from "../../../assets/images/institute-of-biosciences-and-technology-new/faculty/Dr. Neeraj Gupta.png";
import sankalpMisraPortrait from "../../../assets/images/institute-of-biosciences-and-technology-new/faculty/Dr. Sankalp Misra.png";
import sonalPrasadPortrait from "../../../assets/images/institute-of-biosciences-and-technology-new/faculty/Dr. Sonal Prasad.png";
import nootanSinghPortrait from "../../../assets/images/institute-of-biosciences-and-technology-new/faculty/Dr. Nootan Singh.png";
import neerajTiwariPortrait from "../../../assets/images/institute-of-biosciences-and-technology-new/faculty/Dr. Neeraj Tiwari.png";
import deeptiSinghPortrait from "../../../assets/images/institute-of-biosciences-and-technology-new/faculty/Dr. Deepti Singh.png";
import naushadAhmadPortrait from "../../../assets/images/institute-of-biosciences-and-technology-new/faculty/Mr. Naushad Ahmad.png";
import shrutiShuklaPortrait from "../../../assets/images/institute-of-biosciences-and-technology-new/faculty/Dr. Shruti Shukla.png";
import aparnaPortrait from "../../../assets/images/institute-of-biosciences-and-technology-new/faculty/Aparna.png";
import manyataSharmaPortrait from "../../../assets/images/institute-of-biosciences-and-technology-new/faculty/Dr. Manyata Sharma.png";
import anjaliPortrait from "../../../assets/images/institute-of-biosciences-and-technology-new/faculty/Dr. Anjali.png";
import shaliniSinghAssistantPortrait from "../../../assets/images/institute-of-biosciences-and-technology-new/faculty/Dr. Shalini Singh.png";
import shaliniSinghAssociatePortrait from "../../../assets/images/institute-of-biosciences-and-technology-new/faculty/Dr. Shalini Singh2.png";
import renuKharePortrait from "../../../assets/images/institute-of-biosciences-and-technology-new/faculty/Dr. Renu Khare.png";
import garimaGuptaPortrait from "../../../assets/images/institute-of-biosciences-and-technology-new/faculty/Dr. Garima Gupta.png";
import ankitaSrivastavaPortrait from "../../../assets/images/institute-of-biosciences-and-technology-new/faculty/Dr. Ankita Srivastava.png";
import srmuFacultyPlaceholder from "../../../assets/images/academics/institutes/faculty/default-img.webp";
import overviewImage from "../../../assets/images/academics/departments/group-scientists-wearing-lab-coat-working-laborato-28012512230911.webp";
import heroImage from "../../../assets/images/academics/departments/biotech-07022411273155.webp";
import labImage from "../../../assets/images/academics/departments/biotech-lab-07052412272588.webp";
import biotechImage from "../../../assets/images/academics/departments/biotech1-07052412253675.webp";
import csirCimapImage from "../../../assets/images/academics/institutes/csir-cimap.webp";
import ibstImage from "../../../assets/images/academics/institutes/ibst.webp";
import industryImage from "../../../assets/images/academics/institutes/industrial-csir.webp";
import foodSafetyImage from "../../../assets/images/academics/institutes/foodsafety.webp";
import researchPapersImage from "../../../assets/images/academics/institutes/researchpapers-.webp";
import researchDevelopmentImage from "../../../assets/images/academics/institutes/researchdevelopment.webp";
import interdisciplinaryResearchImage from "../../../assets/images/academics/institutes/interdisciplinaryresearch.webp";
import molecularBiologyIcon from "../../../assets/images/academics/institutes/biosciences-research-icons/molecular-biology.svg";
import microbialBiotechnologyIcon from "../../../assets/images/academics/institutes/biosciences-research-icons/microbial-biotechnology.svg";
import plantBiotechnologyIcon from "../../../assets/images/academics/institutes/biosciences-research-icons/plant-biotechnology.svg";
import healthcareBiotechnologyIcon from "../../../assets/images/academics/institutes/biosciences-research-icons/healthcare-biotechnology.svg";
import nanotechnologyIcon from "../../../assets/images/academics/institutes/biosciences-research-icons/nanotechnology.svg";
import {
    facultyDetailsOfBioScienceDepartment,
} from "../../../data/academics/faculty-of-biosciences/faculty-of-biosciences-data";
import {
    facultyDetailsOfBiotechnologyDepartment,
} from "../../../data/academics/faculty-of-biotechnology/faculty-of-biotechnology-data";

const makeCard = (
    tag: string,
    title: string,
    speaker: string,
    description: string,
    img: string,
): DepartmentActivityCardNew => ({ tag, title, speaker, shortDesc: description, readMore: description, img });

const providedIbstFacultyNames = new Set([
    "Dr. Devendra Singh",
    "Dr. Tabish Qidwai",
    "Sunil Kumar Verma",
    "Dr. Divya Srivastava",
    "Dr. Shalini Maurya",
    "Dr. Kunal Singh",
    "Diksha Singh",
    "Er. Ayushi Verma",
    "Er. Himanshu Yadav",
    "Dr. Rahul K Yadav",
    "Dr. Ravi K Deshwal",
    "Dr. Bhawna Srivastava",
    "Dr. Pratibha Gupta",
    "Dr. Neeraj Gupta",
    "Dr. Sankalp Misra",
    "Dr. Sonal Prasad",
    "Dr. Nootan Singh",
    "Dr. Neeraj Tiwari",
    "Dr. Deepti Singh",
    "Mr. Naushad Ahmad",
    "Dr. Shruti Shukla",
    "Aparna",
    "Dr. Manyata Sharma",
    "Dr. Anjali",
    "Dr. Renu Khare",
    "Dr. Garima Gupta",
    "Dr. Ankita Srivastava",
]);

const ibstFaculty: FacultyMember[] = Array.from(
    new Map(
        [...facultyDetailsOfBiotechnologyDepartment, ...facultyDetailsOfBioScienceDepartment]
            .map((member) => [member.name, member] as const),
    ).values(),
).map((member): FacultyMember => {
    if (member.name === "Dr. Devendra Singh") {
        return {
            name: member.name,
            role: "Assistant Professor",
            img: drDevendraSinghPortrait,
            qualification: "PhD",
            experience: "5.5 Years",
            email: "devendrasingh.ibst@srmu.ac.in",
            contact: "9458662132",
            specialization: ["Microbiology", "Drug Designing", "IPR", "Bioprocess", "Pharmaceutical Biotechnology"],
            expertise: "Assistant Professor in biotechnology with research interests in medical microbiology and drug design.",
        };
    }

    if (member.name === "Dr. Tabish Qidwai") {
        return {
            name: member.name,
            role: "Professor",
            img: drTabishQidwaiPortrait,
            isHod: true,
            qualification: "PhD",
            experience: "14 Years",
            email: "tabish.ibst@srmu.ac.in",
            contact: "9140631326",
            specialization: ["Functional Genomics", "Computational Biology", "Immunology"],
            expertise: "Professor with research interests in functional genomics, computational biology, immunology, and infectious disease.",
        };
    }

    if (member.name === "Er. Sunil Kumar Verma") {
        return {
            name: "Sunil Kumar Verma",
            role: "Assistant Professor",
            img: sunilKumarVermaPortrait,
            qualification: "M.Tech BT",
            experience: "9 Years",
            email: "sunilkrverma.ibst@srmu.ac.in",
            contact: "9451386221",
            specialization: ["Immunology", "Environmental Biotechnology", "Cancer Biology"],
            expertise: "Research interests include cancer biology, nanotechnology, and environmental biotechnology.",
        };
    }

    if (member.name === "Dr. Divya Srivastava") {
        return {
            name: member.name,
            role: "Assistant Professor",
            img: member.image,
            qualification: "Ph.D.",
            experience: "7 Years",
            email: "divyasrivastava.ibst@srmu.ac.in",
            contact: "9450317889",
            specialization: [
                "Agricultural Biotechnology",
                "Environmental Biotechnology",
                "Microbial Biotechnology",
                "Plant Protection",
                "Bioprocess Engineering",
            ],
            expertise: "Research focuses on plant–microbe interactions, microbial bioformulations, sustainable agriculture, and climate-resilient crop production.",
        };
    }

    if (member.name === "Dr. Shalini Maurya") {
        return {
            name: member.name,
            role: "Assistant Professor",
            img: member.image,
            qualification: "PhD",
            experience: "2 Years",
            email: "shalinimaurya.ibst@srmu.ac.in",
            contact: "8957777612",
            specialization: ["Immunoinformatics", "Immunology", "Bioinformatics", "Microbiology"],
            expertise: "Research interests include immunoinformatics, immunology, bioinformatics, and microbiology.",
        };
    }

    if (member.name === "Dr. Kunal Singh") {
        return {
            name: member.name,
            role: "Assistant Professor",
            img: srmuFacultyPlaceholder,
            qualification: "Ph.D.",
            experience: "2026–2027",
            email: "kunalsingh.apibst@srmu.ac.in",
            contact: "9473912456",
            specialization: ["New Product Development", "Bakery", "Meat and Meat Products"],
            expertise: "Research focus: new product development.",
        };
    }

    if (member.name === "Er. Diksha Singh") {
        return {
            name: "Diksha Singh",
            role: "Assistant Professor",
            img: dikshaSinghPortrait,
            qualification: "M.Tech",
            experience: "4.5 Years",
            email: "dikshasingh.ibst@srmu.ac.in",
            contact: "9621539396",
            specialization: ["Food Processing", "Food Packaging", "Food Development", "Food Biotechnology"],
            expertise: "Research interests include food processing, food packaging, and food development.",
        };
    }

    if (member.name === "Er. Ayushi Verma") {
        return {
            name: member.name,
            role: "Assistant Professor",
            img: ayushiVermaPortrait,
            qualification: "M.Tech in Industrial Biotechnology",
            experience: "4 Years",
            email: "ayushiverma.ibst@srmu.ac.in",
            contact: "9621682562",
            specialization: ["Plant Biotechnology", "Environmental Biotechnology", "Molecular Biology"],
            expertise: "Research interests span plant biotechnology, environmental biotechnology, and industrial biotechnology.",
        };
    }

    if (member.name === "Er. Himanshu Yadav") {
        return {
            name: member.name,
            role: "Assistant Professor",
            img: himanshuYadavPortrait,
            qualification: "M.Tech",
            experience: "3 Years",
            email: "himanshuyadav.ibst@srmu.ac.in",
            contact: "8382802271",
            specialization: [
                "Biomaterials and Drug Delivery",
                "Biochemical Engineering",
                "Bioprocessing",
                "Biopharmaceuticals",
                "Biorefining Engineering",
            ],
            expertise: "Research interests include biomaterials and drug delivery, biochemical engineering, biopharmaceuticals, and biophysics.",
        };
    }

    if (member.name === "Dr Rahul Yadav") {
        return {
            name: "Dr. Rahul K Yadav",
            role: "Assistant Professor",
            img: rahulKYadavPortrait,
            qualification: "Ph.D.",
            experience: "2025–26",
            email: "rahulkumaryadav.ibst@srmu.ac.in",
            contact: "9771896014",
            specialization: ["Molecular Biology", "Cell Biology", "Genetic Engineering"],
            expertise: "Research focus: molecular biology.",
        };
    }

    if (member.name === "Dr. Ravi Kumar Deshwal") {
        return {
            name: "Dr. Ravi K Deshwal",
            role: "Assistant Professor",
            img: raviKDeshwalPortrait,
            qualification: "PhD",
            experience: "18 Years",
            email: "ravideshwal.ibst@srmu.ac.in",
            contact: "9760184916",
            specialization: ["Molecular Biology", "Microbiology", "Infectious and Non-Infectious Diseases"],
            expertise: "Research interests include microbiology, cell biology, molecular biology, and infectious and non-infectious diseases.",
        };
    }

    if (member.name === "Dr. Bhawna Srivastava") {
        return {
            name: member.name,
            role: "Assistant Professor",
            img: bhawnaSrivastavaPortrait,
            qualification: "Ph.D.",
            experience: "3 Years",
            email: "bhawnasrivastava.bio@srmu.ac.in",
            contact: "9936245935",
            specialization: ["Food Technology", "Food and Nutrition", "Product Development", "Value-Added Foods", "Food Coatings"],
            expertise: "Research focuses on weaning food development, value-added products from underutilized green leafy vegetables, and carnauba wax coatings.",
        };
    }

    if (member.name === "Dr. Pratibha Gupta") {
        return {
            name: member.name,
            role: "Assistant Professor",
            img: pratibhaGuptaPortrait,
            qualification: "Ph.D.",
            experience: "5 Years",
            email: "pratibhagupta.bio@srmu.ac.in",
            contact: "9990738826",
            specialization: ["Plant Biotechnology", "Plant Stress Studies", "Biochemical Analysis"],
            expertise: "Research focuses on plant tissue culture, biotic and abiotic stress studies, and biochemical analysis of plants, microbes, and soil.",
        };
    }

    if (member.name === "Dr. Neeraj Gupta") {
        return {
            name: member.name,
            role: "Professor",
            img: neerajGuptaPortrait,
            qualification: "Ph.D.",
            experience: "12 Years+",
            email: "neeraj.bio@srmu.ac.in",
            contact: "9936423569",
            specialization: ["Biochemistry", "Microbial Enzyme Production", "Enzyme Engineering", "Proteomics"],
            expertise: "Research interests include biochemistry, microbial enzyme production, enzyme engineering, and proteomics.",
        };
    }

    if (member.name === "Dr. Sankalp Misra") {
        return {
            name: member.name,
            role: "Assistant Professor",
            img: sankalpMisraPortrait,
            qualification: "Ph.D.",
            experience: "4 Years",
            email: "sankalpmisra.ibst@srmu.ac.in",
            contact: "9453315356",
            specialization: ["Soil Microbiology", "Plant–Microbe Interactions", "Biofertilizers", "Sustainable Agriculture", "Metagenomics"],
            expertise: "Research spans soil microbiology, plant–microbe interactions, biofertilizers, sustainable agriculture, metagenomics, and plant stress biology.",
        };
    }

    if (member.name === "Dr. Sonal Prasad") {
        return {
            name: member.name,
            role: "Assistant Professor",
            img: sonalPrasadPortrait,
            qualification: "PhD",
            experience: "10 Years",
            email: "sonalprasad.ibst@srmu.ac.in",
            contact: "7233059586",
            specialization: ["Nutraceuticals", "Food Technology", "Dietetics", "Food Safety", "Nutrition Science"],
            expertise: "Research focuses on bioactive compounds, antioxidant and phytochemical activity, microbiological analysis, and therapeutic diets.",
        };
    }

    if (member.name === "Dr. Nootan Singh") {
        return {
            name: member.name,
            role: "Assistant Professor",
            img: nootanSinghPortrait,
            qualification: "PhD",
            experience: "1 Year",
            email: "nootansingh.ibst@srmu.ac.in",
            contact: "7080907037",
            specialization: ["Computer-Aided Drug Design", "Molecular Docking", "Molecular Dynamics Simulation", "ADME Analysis", "QSAR"],
            expertise: "Research focuses on pharmacokinetics and drug-likeness of anticancer phytoconstituents using ADMET, molecular docking, and simulation studies.",
        };
    }

    if (member.name === "Dr. Neeraj Tiwari") {
        return {
            name: member.name,
            role: "Assistant Professor",
            img: neerajTiwariPortrait,
            qualification: "PhD",
            experience: "5 Years",
            email: "neerajtiwari.ibst@srmu.ac.in",
            contact: "8563004303",
            specialization: ["Neurobiology", "Immunology", "Natural Product Research"],
            expertise: "Research focuses on therapeutic approaches for infectious and non-infectious diseases and the potential of natural products in neurodegenerative disorders.",
        };
    }

    if (member.name === "Dr. Deepti Singh") {
        return {
            name: member.name,
            role: "Assistant Professor",
            img: deeptiSinghPortrait,
            qualification: "Ph.D.",
            experience: "2 Years",
            email: "deeptisingh.ibst@srmu.ac.in",
            contact: "9151584608",
            specialization: ["Microbial Enzyme Production", "Bioprocess Optimization", "Microbial Techniques", "Biodegradation", "Bioremediation"],
            expertise: "Research focuses on microbial enzyme production and optimization, enzyme engineering and kinetics, and molecular biology.",
        };
    }

    if (member.name === "Mr. Naushad Ahmad") {
        return {
            name: member.name,
            role: "Assistant Professor",
            img: naushadAhmadPortrait,
            qualification: "M.Sc.",
            experience: "4 Years",
            email: "naushadahmad.ibst@srmu.ac.in",
            contact: "9005419377",
            specialization: ["Molecular Biology", "Plant Biotechnology", "Animal Biotechnology"],
            expertise: "Research includes transcriptome-based marker gene studies in Withania somnifera and aquatic animal disease surveillance.",
        };
    }

    if (member.name === "Dr. Shruti Shukla") {
        return {
            name: member.name,
            role: "Assistant Professor",
            img: shrutiShuklaPortrait,
            qualification: "Ph.D.",
            experience: "4 Years",
            email: "shrutishukla.ibst@srmu.ac.in",
            contact: "9044838505",
            specialization: ["Plant–Microbe Interactions", "Soil Microbiology", "Environmental Microbiology", "Plant Growth-Promoting Microorganisms"],
            expertise: "Research focuses on plant–microbe interactions, soil microbial ecology, environmental microbiology, and sustainable agriculture.",
        };
    }

    if (member.name === "Ms. Aparna") {
        return {
            name: "Aparna",
            role: "Assistant Professor",
            img: aparnaPortrait,
            qualification: "Ph.D.",
            experience: "4 Years",
            email: "aparna.ibst@srmu.ac.in",
            contact: "9559036561",
            specialization: ["Nutraceuticals and Functional Food", "New Product Development", "Value-Added Products", "Bioactive Compounds"],
            expertise: "Research focuses on functional-food development, food-waste valorization, green extraction of bioactive compounds, and food-related encapsulation and nanomaterials.",
        };
    }

    if (member.name === "Dr. Manyata Sharma") {
        return {
            name: member.name,
            role: "Assistant Professor",
            img: manyataSharmaPortrait,
            qualification: "PhD",
            experience: "1 Year",
            email: "manyatasharma.ibst@srmu.ac.in",
            contact: "8795773294",
            specialization: ["Plant Growth-Promoting Rhizobacteria (PGPR)", "Plant Growth Promotion", "Plant–Microbe Interactions"],
            expertise: "Research focuses on PGPR and beneficial plant–microbe interactions that promote plant growth.",
        };
    }

    if (member.name === "Dr. Anjali") {
        return {
            name: member.name,
            role: "Assistant Professor",
            img: anjaliPortrait,
            qualification: "PhD",
            experience: "3 Years",
            email: "anjali.ibst@srmu.ac.in",
            contact: "9871021821",
            specialization: ["Medical Microbiology", "Drug Designing", "Drug Synthesis"],
            expertise: "Research focuses on antimicrobial drug discovery, bioactive compounds from medicinal plants, microbial biofilms, and antimicrobial screening.",
        };
    }

    if (member.name === "Dr. Renu Khare") {
        return {
            name: member.name,
            role: "Assistant Professor",
            img: renuKharePortrait,
            qualification: "PhD",
            experience: "4 Years",
            email: "renukhare.ibst@srmu.ac.in",
            contact: "6388357575",
            specialization: ["Plant Tissue Culture", "Microbial Technology", "Aflatoxin Detection"],
            expertise: "Research focuses on aflatoxin production, purification, and characterization, and in vitro regeneration and genetic transformation of Sorghum bicolor.",
        };
    }

    if (member.name === "Dr. Garima Gupta") {
        return {
            name: member.name,
            role: "Assistant Professor",
            img: garimaGuptaPortrait,
            qualification: "Ph.D.",
            experience: "8 Years",
            email: "garimagupta.ibst@srmu.ac.in",
            contact: "6394783594",
            specialization: ["Plant–Microbe Interactions", "Environmental Microbiology", "Mycology and Mushrooms", "Metabolomics and Molecular Biology", "Bioremediation"],
            expertise: "Research interests include plant–microbe interactions, environmental microbiology, mycology, metabolomics, bioremediation, and sustainable bioenergy.",
        };
    }

    if (member.name === "Dr. Ankita Srivastava") {
        return {
            name: member.name,
            role: "Assistant Professor",
            img: ankitaSrivastavaPortrait,
            qualification: "Ph.D.",
            experience: "15 Years (Post-Ph.D.)",
            email: "ankitasrivastava.ibst@srmu.ac.in",
            contact: "9415633080",
            specialization: ["Biochemistry", "Food Safety", "Food Toxicology", "Food Biotechnology", "Food Analysis"],
            expertise: "Research focuses on food safety and toxicology, food biochemistry, host–parasite interactions, nutritional toxicity, and lifestyle diseases.",
        };
    }

    return {
        name: member.name,
        role: member.designation,
        img: member.image,
    };
}).filter((member) => providedIbstFacultyNames.has(member.name)).concat({
    name: "Vandana Chauhan",
    role: "Assistant Professor",
    img: vandanaChauhanPortrait,
    qualification: "M.Tech",
    experience: "N/A",
    email: "vandanachauhan.ibst@srmu.ac.in",
    contact: "8707701509",
    specialization: ["Analytical Techniques in Bioprocess", "Downstream Processing", "Enzyme Catalysis"],
    expertise: "Research focus: enzymatic catalysis.",
}, {
    name: "Dr. Keerti Kumar Yadav",
    role: "Assistant Professor",
    img: keertiKumarYadavPortrait,
    qualification: "PhD",
    experience: "3 Years",
    email: "keertikumaryadav.ibst@srmu.acc.in",
    contact: "7836071067",
    specialization: ["Cancer Biology", "Bioinformatics", "Systems Biology"],
    expertise: "Research interests include bioinformatics, systems biology, computational biology, and cancer biology.",
}, {
    id: "shalini-singh-assistant-professor",
    name: "Dr. Shalini Singh",
    role: "Assistant Professor",
    img: shaliniSinghAssistantPortrait,
    qualification: "PhD",
    experience: "2 Years",
    email: "shalinisinghap.ibst@srmu.ac.in",
    contact: "9554706551",
    specialization: ["Enzymology", "Toxicology", "Protein Biochemistry"],
    expertise: "Research focuses on purification and characterization of cysteine proteases and heavy metal toxicity.",
}, {
    id: "shalini-singh-associate-professor",
    name: "Dr. Shalini Singh",
    role: "Associate Professor",
    img: shaliniSinghAssociatePortrait,
    qualification: "Ph.D.",
    experience: "17 Years",
    email: "shalinisingh.ibst@srmu.ac.in",
    contact: "919501000000",
    specialization: ["Microbiology", "Microbial Technology", "Environmental Biotechnology", "Sustainable Waste Management", "Fermentation Technology"],
    expertise: "Research interests include microbiology, microbial technology, environmental biotechnology, sustainable waste management, fermentation technology, and bioremediation.",
});

export const instituteOfBiosciencesAndTechnologyNewData: CustomDepartmentNewData = {
    navSections: [
        { id: "overview", label: "Overview" },
        { id: "programs", label: "Programmes" },
        { id: "labs", label: "Labs & Practical Learning" },
        { id: "events", label: "Activities" },
        { id: "faculty", label: "Faculty" },
        { id: "faq", label: "FAQs" },
    ],
    hero: {
        prefix: "Department of",
        title: "Biosciences and Technology",
        backgroundImage: heroImage,
        stats: [
            { v: "5", l: "Featured Guest Lectures", delay: "0ms" },
            { v: "3", l: "Industry and Research Visits", delay: "90ms" },
            { v: "2", l: "Scientific Workshops", delay: "180ms" },
            { v: "9", l: "Research Contributions", delay: "270ms" },
        ],
        quickStats: [
            { value: "5", label: "Featured Guest Lectures" },
            { value: "3", label: "Industry and Research Visits" },
            { value: "2", label: "Scientific Workshops" },
            { value: "9", label: "Research Contributions (2025–2026)" },
        ],
    },
    overview: {
        headingBefore: "About the",
        headingHighlight: "Department of Biosciences and Technology at SRMU",
        subtitle: "Interdisciplinary education and research in biological sciences",
        paragraphs: [
            "The Department of Biosciences and Technology (DBST) at Shri Ramswaroop Memorial University (SRMU) was established in 2012 with the introduction of the B.Tech. in Biotechnology program. The department subsequently expanded its academic offerings with a Ph.D. program in biotechnology in 2013, followed by B.Sc. (Hons.), M.Sc., and M.Tech. programs in 2015.",
            "The department focuses on the study and application of biological sciences to address challenges in healthcare, agriculture, food science, medicine, and environmental sustainability. Its academic and research activities cover emerging areas such as molecular biology, genome editing, microbial technology, plant biotechnology, immunology, nanotechnology, and environmental biotechnology.",
            "Through expert interactions, industrial visits, workshops, and research publications, the department encourages students and faculty members to engage with scientific developments and practical applications. Collaborative research and knowledge exchange with established scientific institutions further contribute to its academic environment.",
            "The department comprises two academic units—Faculty of Biotechnology and Faculty of Biosciences—bringing together interdisciplinary teaching and research in biological sciences.",
        ],
        preview: "The Department of Biosciences and Technology (DBST) at Shri Ramswaroop Memorial University (SRMU) was established in 2012 with the introduction of the B.Tech. in Biotechnology program.",
        image: overviewImage,
        imageAlt: "Researchers working together in a biotechnology laboratory",
    },
    missionVision: {
        missionItems: [
            "To provide quality education in biotechnology and biosciences through a strong foundation in fundamental and applied biological sciences.",
            "To encourage research, innovation, and interdisciplinary learning in emerging areas of biotechnology and life sciences.",
            "To develop scientific skills among students through practical exposure, expert interactions, workshops, and industry visits.",
            "To promote collaborative research addressing challenges in healthcare, agriculture, food safety, and environmental sustainability.",
            "To nurture responsible professionals and researchers who can contribute to scientific advancement and societal development.",
        ],
        visionText: "To foster an academic and research environment where biotechnology and biosciences can be applied to address fundamental biological questions and challenges in healthcare, agriculture, food safety, medicine, and environmental sustainability.",
    },
    programHeadingBefore: "Explore",
    programHeadingHighlight: "Programmes",
    programs: [
        {
            category: "Undergraduate Programmes",
            mobileLabel: "UG",
            badge: "Undergraduate",
            icon: GraduationCap,
            programs: [
                { title: "B.Tech. in Biotechnology", description: "An undergraduate programme in biological engineering and applied biotechnology.", icon: FlaskConical, link: "/program/b-tech-biotechnology" },
                { title: "B.Sc. (Hons.) in Biotechnology", description: "An undergraduate programme in biotechnology and life sciences.", icon: Microscope, link: "/program/b-sc-hons-biotechnology" },
            ],
        },
        {
            category: "Postgraduate Programmes",
            mobileLabel: "PG",
            badge: "Postgraduate",
            icon: BookOpenCheck,
            programs: [
                { title: "M.Sc. in Biotechnology", description: "Advanced study in biotechnology and biosciences.", icon: Microscope, link: "/program/m-sc-biotechnology" },
                { title: "M.Tech. in Biotechnology", description: "Postgraduate study in biotechnology and biological engineering.", icon: Settings, link: "/program/m-tech-biotechnology" },
            ],
        },
        {
            category: "Doctoral Programme",
            mobileLabel: "Ph.D.",
            badge: "Doctoral",
            icon: BookOpenCheck,
            programs: [
                { title: "Ph.D. in Biotechnology", description: "The department introduced its doctoral programme in biotechnology in 2013.", icon: Microscope, link: "/ph-d-notification-session-2026-27" },
            ],
        },
    ],
    labs: {
        headingBefore: "Research &",
        headingHighlight: "Practical Learning",
        intro: "The Department of Biosciences and Technology promotes research-oriented learning through scientific investigations, academic collaborations, expert interactions, and exposure to industry practices. Students can explore the applications of biological sciences through these research areas:",
        items: [
            { num: "01", title: "Molecular Biology & Genome Editing", desc: "Explore molecular mechanisms, genetic regulation, and genome-editing approaches for applications in agriculture and healthcare.", accent: "#FFB703", iconSrc: molecularBiologyIcon, animClass: "lab-icon-orbital" },
            { num: "02", title: "Microbial Biotechnology", desc: "Study beneficial microorganisms, microbial interactions, and their applications in agriculture, environmental management, and biotechnology.", accent: "#1B4F91", iconSrc: microbialBiotechnologyIcon, animClass: "lab-icon-pulse" },
            { num: "03", title: "Plant Biotechnology & Sustainable Agriculture", desc: "Explore plant growth-promoting microorganisms, nanofertilizers, crop productivity, and environmental resilience.", accent: "#14284E", iconSrc: plantBiotechnologyIcon, animClass: "lab-icon-float" },
            { num: "04", title: "Healthcare & Medical Biotechnology", desc: "Study cancer research, liquid biopsy, immunology, infectious diseases, and emerging biomedical applications.", accent: "#FFB703", iconSrc: healthcareBiotechnologyIcon, animClass: "lab-icon-stack" },
            { num: "05", title: "Nanotechnology & Biosciences", desc: "Investigate nanomaterials and their potential applications in healthcare, agriculture, and biological systems.", accent: "#1B4F91", iconSrc: nanotechnologyIcon, animClass: "lab-icon-glow" },
            { num: "06", title: "Environmental Biotechnology", desc: "Study microbial ecosystem services, environmental stress management, and sustainable biological solutions.", accent: "#14284E", icon: Factory, animClass: "lab-icon-network" },
        ],
    },
    highlights: {
        headingBefore: "Biological Sciences for",
        headingHighlight: "Real-World Challenges",
        items: [
            { num: "01", title: "Interdisciplinary Teaching", desc: "Faculty of Biotechnology and Faculty of Biosciences bring together teaching and research across biological sciences.", icon: UsersRound },
            { num: "02", title: "Research and Innovation", desc: "Students and faculty engage with scientific investigations and emerging research methodologies.", icon: Lightbulb },
            { num: "03", title: "Practical Scientific Skills", desc: "Workshops, expert interactions, and visits help students connect academic learning with practical applications.", icon: FlaskConical },
            { num: "04", title: "Collaborative Research", desc: "Academic collaborations and knowledge exchange connect the department with established scientific institutions.", icon: BookOpenCheck },
        ],
    },
    events: {
        headingBefore: "Learning from Experts in",
        headingHighlight: "Biotechnology and Biosciences",
        intro: "The Department of Biosciences and Technology regularly organizes expert lectures to familiarize students with emerging scientific developments, research methodologies, and practical applications in biotechnology and biosciences.",
        cardsEyebrow: "Featured Guest Lectures",
        cards: [ 
            makeCard("GUEST LECTURE", "Bacillus subtilis: A Potent Biological Control Agent", "Dr. Poonam Singh · Senior Principal Scientist · CSIR-National Botanical Research Institute (CSIR-NBRI), Lucknow · 13 February 2026", "", csirCimapImage),
            makeCard("GUEST LECTURE", "Genome Editing: A New Era for Crop Improvement", "Dr. Vidhu A. Sane · Chief Scientist, Department of Molecular Biology and Biotechnology · CSIR-NBRI, Lucknow · 6 October 2025", "", biotechImage),
            makeCard("GUEST LECTURE", "Use of AI Tools in Healthcare and Teaching Innovations", "Dr. Santosh Kumar · Principal Scientist · CSIR-Central Drug Research Institute (CSIR-CDRI), Lucknow · 20 November 2025", "", ibstImage),
            makeCard("GUEST LECTURE", "Epigenetics in Health and Diseases", "Dr. Kulwant Singh · Associate Professor, Stem Cell Research Centre, Department of Haematology · SGPGIMS, Lucknow · 24 April 2024", "", industryImage),
            makeCard("GUEST LECTURE", "Environment and Health: Biotechnological Interventions in Current Perspectives", "Dr. V. P. Sharma · Chief Scientist and Professor, AcSIR · CSIR-Indian Institute of Toxicology Research, Lucknow · 30 August 2024", "", labImage),
        ],
    },
    activitySections: [
        {
            id: "industry-exposure",
            eyebrow: "Connecting Biotechnology Education with Industry and Research Institutions",
            heading: "",
            intro: "Industrial and institutional visits provide students with opportunities to observe scientific processes, understand research environments, and explore the practical applications of biotechnology.",
            cards: [
                makeCard("INSTITUTIONAL VISIT", "National Botanical Research Institute (CSIR-NBRI)", [
                    "Date: 27 February 2026",
                    "Location: Rana Pratap Marg, Lucknow",
                    "Theme: Women in Science: Catalyzing Viksit Bharat",
                    "Occasion: National Science Day",
                    "Participants: M.Sc., B.Tech., and B.Sc. Biotechnology students",
                ].join("\n"), "", csirCimapImage),
                makeCard("INDUSTRY VISIT", "Prospera Biotech", [
                    "Date: 8 April 2026",
                    "Location: Zaidpur, Barabanki, Uttar Pradesh",
                    "Visit Focus: Industry practices and biotechnology applications",
                    "Participants: B.Tech. and B.Sc. Biotechnology students",
                ].join("\n"), "", industryImage),
                makeCard("INDUSTRY VISIT", "Amul Banas Dairy", [
                    "Date: 15 November 2025",
                    "Location: Sultanpur Road, Lucknow",
                    "Visit Focus: Applied processes in food and biotechnology",
                    "Participants: B.Tech. and B.Sc. Biotechnology students",
                ].join("\n"), "", foodSafetyImage),
            ],
        },
        {
            id: "workshops",
            eyebrow: "Building Practical Skills Through Scientific Workshops",
            heading: "",
            intro: "The department organizes workshops to strengthen students' practical knowledge, professional skills, and understanding of emerging opportunities in biotechnology and related fields.",
            cards: [
                makeCard("WORKSHOP", "Workshop on Entrepreneurship and Skill Development", "10–14 June 2024 · One week · Online · Organized with the SRMU Internal Quality Assurance Cell (IQAC)", "A one-week online workshop organized by the Department of Biosciences and Technology in collaboration with the Internal Quality Assurance Cell (IQAC), Shri Ramswaroop Memorial University. The focus was entrepreneurship and skill development.", ibstImage),
                makeCard("WORKSHOP", "General Awareness on Food Safety of Daily Life Commodities", "One-day workshop · Guest speakers: Dr. Ankita Yadav and Ms. Pallavi Tiwari, Food Safety Officers, FSDA", "A one-day workshop focused on creating awareness about food safety and the quality of everyday commodities.", foodSafetyImage),
            ],
        },
        {
            id: "hackathons",
            eyebrow: "Hackathons & Conferences",
            heading: "",
            intro: "Students of Shri Ramswaroop Memorial University actively participate in technical competitions, international conferences, and innovation-driven events, showcasing their knowledge, research capabilities, and problem-solving skills.",
            cards: [
                makeCard("HACKATHON", "VIVEKA: The Intelligence 5.0", [
                    "Student: Shweta Ojha",
                    "Event: Hack-A-Thon",
                    "Organizer: Tech Fusion Club, SRMU",
                    "Event: VIVEKA: The Intelligence 5.0 (Techfest 2K26)",
                    "Date: 18–20 February 2026",
                    "Achievement: Certificate of Participation",
                    "Tagline: #HackLearnWinSmile",
                ].join("\n"), "", ibstImage),
                makeCard("CONFERENCE", "Best Poster Presentation at SI:BRIRF 2.0", [
                    "Student: Astha Maurya",
                    "Institution: Shri Ramswaroop Memorial University",
                    "Conference: International Conference on Sustainable Innovation: Bridging Research and Industry for a Resilient Future 2.0 (SI:BRIRF 2.0)",
                    "Presentation Title: STBTPP002 - Nanobiotechnology for Achieving Environmental Sustainability",
                    "Date: 9 - 11 April 2026",
                    "Venue: Shri Ramswaroop Memorial University, Barabanki, Uttar Pradesh",
                    "Achievement: Best Poster Presentation",
                ].join("\n"), "", researchPapersImage),
                makeCard("INTERNATIONAL CHALLENGE", "NASA International Space Apps Challenge 2025", [
                    "Student: Akash Singh",
                    "Event: NASA International Space Apps Challenge 2025",
                    "Achievement: Galactic Problem Solver - Certificate of Participation",
                    "Date: 4 - 5 October 2025",
                    "Recognition: Outstanding participation and efforts towards addressing challenges on Earth and in space.",
                ].join("\n"), "", researchDevelopmentImage),
            ],
        },
        {
            id: "research-publications",
            eyebrow: "Research Contributions in Biotechnology and Biosciences (2025–2026)",
            heading: "",
            intro: "",
            cards: [
                makeCard("RESEARCH CONTRIBUTION", "Clinical Evidence on BCG Vaccination and COVID-19 Infection: A Systematic Review", "Praneta Yadav, Arpita Singh, Manju Kumari, Sunil Kumar Verma, Devendra Singh · Respiratory Investigation · 2026", "Affiliation: Faculty of Biotechnology, Department of Biosciences and Technology, Shri Ramswaroop Memorial University, Barabanki, Uttar Pradesh, India.", researchPapersImage),
                makeCard("RESEARCH CONTRIBUTION", "Liquid Biopsy in Modern Medicine: Advancing Diagnostics from Molecular Insights to Clinical Practice", "Vivek Kumar Dhiman, Stuti Srivastava, Manju Kumari, Devendra Singh · Clinical and Translational Oncology · 2026", "Affiliation: Faculty of Biotechnology, Department of Biosciences and Technology, Shri Ramswaroop Memorial University, Barabanki, Uttar Pradesh, India.", researchDevelopmentImage),
                makeCard("RESEARCH CONTRIBUTION", "Large Language Models and Multimodal AI as Clinical Copilots in Allergy Clinics", "Sunil Kumar Verma, Stuti Srivastava, Manju Kumari, Devendra Singh, Veena Singh, Bineet Kumar Gupta · Allergy Medicine · 2026", "Full title: Large Language Models (LLMs) and Multimodal AI as Clinical Copilots in Allergy Clinics: Opportunities, Pitfalls, and Regulatory Horizons. Affiliation: Faculty of Biotechnology, Department of Biosciences and Technology, SRMU, Lucknow, Uttar Pradesh, India.", interdisciplinaryResearchImage),
                makeCard("RESEARCH CONTRIBUTION", "Sustained-Release Fertilizers for Nutrient-Use Efficiency and Environmental Resilience", "Vivek Kumar Dhiman, Rakesh Kumar, Babit Kumar Thakur, Vinay Kumar Dhiman, Mukul Sharma, Prashant Sharma, Garima Rana, Ritesh Verma, Devendra Singh · Journal of Environmental Chemical Engineering · 2026", "Full title: Sustained-Release Fertilizers for Nutrient-Use Efficiency and Environmental Resilience: A Critical and Integrative Review. Affiliation: Faculty of Biotechnology, Department of Biosciences and Technology, SRMU, Lucknow–Deva Road, Barabanki, Uttar Pradesh, India.", researchDevelopmentImage),
                makeCard("RESEARCH CONTRIBUTION", "Bioefficiency and Profile of Lignocellulolytic Enzymes in Oyster Mushroom", "Roshan Lal Gautam, Shweta Singh, Devendra Singh, Siya Ram, Ram Naraian · Vegetos · 2026", "Full title: Bioefficiency and Profile of Lignocellulolytic Enzymes in Oyster Mushroom (Pleurotus florida) Cultured on the Substrate with Dried Mango Leaves. Affiliation: Faculty of Biotechnology, Department of Biosciences and Technology, SRMU, Barabanki, Uttar Pradesh, India.", labImage),
                makeCard("RESEARCH CONTRIBUTION", "Millet Starch Digestibility: Structural Characteristics, Processing Strategies, and Nutritional Implications", "Rakesh Raghunathan, Prashant Anil Pawase, Aniket M. Pathare, Diksha Singh, Gaurav Chandola, Swasti Mudgal, Omar Bashir, Mudasir Ahmad · Food and Humanity · 2026", "Affiliation: Department of Biosciences and Technology, Shri Ramswaroop Memorial University, Lucknow, India.", foodSafetyImage),
                makeCard("RESEARCH CONTRIBUTION", "The Biostimulant Role of Microbial Exopolysaccharides: Mechanisms and Agricultural Applications", "Sankalp Misra, Salimi Fatemah, Farrokh Parisa · World Journal of Microbiology and Biotechnology · 2026", "Affiliation: Faculty of Biosciences, Department of Biosciences and Technology, Shri Ramswaroop Memorial University, Barabanki, Uttar Pradesh, India.", interdisciplinaryResearchImage),
                makeCard("RESEARCH CONTRIBUTION", "Bacillus spp. and Jeotgalicoccus huakuii Induce Rice Growth and Salt Stress Resilience", "Sankalp Misra, Semwal Pradeep, Umrao Vaishali, Mishra Shashank Kumar, Shirke Pramod Anand, Chauhan Puneet Singh · Environmental Sustainability · 2026", "The research examines eco-physiological adaptations associated with rice growth and salt stress resilience. Affiliation: Faculty of Biosciences, Department of Biosciences and Technology, SRMU, Barabanki, Uttar Pradesh, India.", labImage),
                makeCard("RESEARCH CONTRIBUTION", "Harnessing Endophytes and Multi-Omics for Sustainable Colchicine", "Semwal Pradeep, Majhi Basudev, Shivhare Radha, Mishra Shashank Kumar, Sankalp Misra, Chauhan Puneet Singh · World Journal of Microbiology and Biotechnology · 2026", "Affiliation: Faculty of Biosciences, Department of Biosciences and Technology, Shri Ramswaroop Memorial University, Barabanki, Uttar Pradesh, India.", researchPapersImage),
            ],
        },
    ],
    career: {
        heading: "Career Opportunities in Biotechnology and Biosciences",
        items: [
            ["Biotechnology", "Researcher"],
            ["Molecular", "Biologist"],
            ["Microbiology", "Professional"],
            ["Clinical Research", "Associate"],
            ["Plant Biotechnology", "Specialist"],
            ["Environmental", "Biotechnologist"],
        ],
        descriptions: [],
    },
    facultySection: {
        members: ibstFaculty,
        subheading: "Faculty of Biotechnology and Faculty of Biosciences bring together teaching and research expertise across biological sciences.",
        featuredDescription: "The Department's academic and research activities connect biotechnology, biosciences, and interdisciplinary scientific work.",
        featuredLabel: "IBST Leadership",
        profileDescription: "Faculty members teach and conduct research across biotechnology and biosciences, including molecular biology, microbial technology, plant biotechnology, immunology, and environmental biotechnology.",
        showResearchShowcase: false,
    },
    faq: [
        { q: "When was the Department of Biosciences and Technology established?", a: "The Department was established in 2012 with the introduction of the B.Tech. in Biotechnology program. A Ph.D. program in Biotechnology followed in 2013, with B.Sc. (Hons.), M.Sc., and M.Tech. programs introduced in 2015." },
        { q: "Which academic units are part of IBST?", a: "The Department comprises the Faculty of Biotechnology and the Faculty of Biosciences." },
        { q: "What research areas can students explore?", a: "Research areas include molecular biology and genome editing, microbial biotechnology, plant biotechnology and sustainable agriculture, healthcare and medical biotechnology, nanotechnology and biosciences, and environmental biotechnology." },
        { q: "What practical learning opportunities are available?", a: "Students can take part in expert lectures, industrial and institutional visits, scientific workshops, research activities, and collaborative learning." },
        { q: "Which institutions have hosted student visits?", a: "The supplied activities include visits to CSIR-NBRI, Prospera Biotech, and Amul Banas Dairy." },
        { q: "Where can students find placement information?", a: "The placements section on this page provides the university's placement information and employer details." },
    ],
    showFaculty: true,
    showScholarships: true,
    showBlogs: true,
    showCareerDescriptionCards: false,
};


