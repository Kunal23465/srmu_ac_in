import React, { useEffect } from 'react'
import ProgramFinderPage from '../ProgramFinderPage'
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { fetchProgramTypeIntroByUrl } from '../../../store/program-type-intro/ProgramTypeIntroThunk';
import SeoHead from '../../../components/seo/SeoHead';
import PageNotFound from '../../PageNotFound';


const ProgramTypePage: React.FC = () => {
    const location = useLocation();
    const dispatch = useDispatch<AppDispatch>();
// 18-04-2025

 const allowedPaths = ['after-class-10th', 'after-class-12th','after-polytechnic','after-graduation','after-post-graduation','industry-honors'];
    const currentPath = location.pathname.slice(1);

    const isValidPath = allowedPaths.includes(currentPath);
// 18-04-2025


    const { data: programByIntroData } = useSelector((state: RootState) => state.getProgramByIntro);

    const fallbackTitle =
        "Explore Diverse Academic Programs with SRMU&#039;s Program Finder | Shri Ramswaroop Memorial University";
    const fallbackDescription =
        "Discover a range of undergraduate, postgraduate, and diploma programs at Shri Ramswaroop Memorial University. Use SRMU&#039;s Program Finder to explore courses, specializations, and career paths tailored to your goals.";
    const seoTitle = programByIntroData?.metaTitle || fallbackTitle;
    const seoDescription = programByIntroData?.metaDescription || fallbackDescription;

    useEffect(() => {
        const finalUrl = location.pathname.slice(1);
        dispatch(fetchProgramTypeIntroByUrl(finalUrl));
    }, [location.pathname, dispatch]);
 useEffect(() => {
        if (isValidPath) {
            dispatch(fetchProgramTypeIntroByUrl(currentPath));
        }
    }, [location.pathname, dispatch, isValidPath]);

    if (!isValidPath) {
        return <PageNotFound />;
    }
    return (
        <div>
            <SeoHead
                title={seoTitle}
                description={seoDescription}
                pathname={location.pathname}
            />
          

            <ProgramFinderPage />
        </div>
    )
}

export default ProgramTypePage