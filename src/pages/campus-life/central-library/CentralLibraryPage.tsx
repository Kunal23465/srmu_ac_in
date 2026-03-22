import CentralLibraryComp from '../../../components/campus-life/central-library/CentralLibraryComp'
import SeoHead from '../../../components/seo/SeoHead'

const CentralLibraryPage = () => {
    return (
        <div>
            <SeoHead
                title="Central Library | Shri Ramswaroop Memorial University (SRMU), Lucknow"
                description="Explore the Central Library at SRMU, Lucknow - a hub of academic excellence offering a vast collection of books, journals, e-resources, digital access, and research support."
                pathname="/central-library"
            />
            
            <CentralLibraryComp />
            
            </div>
    )
}

export default CentralLibraryPage
