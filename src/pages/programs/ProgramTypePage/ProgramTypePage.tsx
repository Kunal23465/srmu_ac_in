import React, { useEffect } from 'react'
import ProgramFinderPage from '../ProgramFinderPage'
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { fetchProgramTypeIntroByUrl } from '../../../store/program-type-intro/ProgramTypeIntroThunk';
import SeoHead from '../../../components/seo/SeoHead';


const ProgramTypePage: React.FC = () => {
    const location = useLocation();
    const dispatch = useDispatch<AppDispatch>();

    const { data: programByIntroData, loading } = useSelector((state: RootState) => state.getProgramByIntro);

    useEffect(() => {
        const finalUrl = location.pathname.slice(1);
        dispatch(fetchProgramTypeIntroByUrl(finalUrl));
    }, [location.pathname, dispatch]);

    const isSeoReady = Boolean(programByIntroData?.metaTitle && programByIntroData?.metaDescription);

    if (loading || !isSeoReady) {
        return null;
    }

    console.log("programByIntroData",programByIntroData)
    return (
        <div>
            <SeoHead
                title={programByIntroData.metaTitle}
                description={programByIntroData.metaDescription}
                pathname={location.pathname}
            />

            <ProgramFinderPage />
        </div>
    )
}

export default ProgramTypePage