import { Helmet } from 'react-helmet-async'
import CentralLibraryComp from '../../../components/campus-life/central-library/CentralLibraryComp'

const CentralLibraryPage = () => {
    return (
        <div>
            <Helmet>
                <title>Central Library | Shri Ramswaroop Memorial University (SRMU), Lucknow</title>
                <meta name="description" content="Explore the Central Library at SRMU, Lucknow – a hub of academic excellence offering a vast collection of books, journals, e-resources, digital access, and research support. Empowering students and faculty with world-class learning and reference facilities." />
            </Helmet>
            
            <CentralLibraryComp />
            
            </div>
    )
}

export default CentralLibraryPage