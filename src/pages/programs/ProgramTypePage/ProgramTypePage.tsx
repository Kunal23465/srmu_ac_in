import React from 'react'
import ProgramFinderPage from '../ProgramFinderPage'
// import { useLocation } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { RootState } from '../../../store'
// import PageNotFound from '../../PageNotFound'
// import { normalizeProgramRouteSlug, resolveTopLevelProgramRoute } from '../../../utils/programCategoryRoute'
// import SeoHead from '../../../components/seo/SeoHead'
// import { SITE_NAME, humanizeSlug } from '../../../utils/seo'

const ProgramTypePage: React.FC = () => {
    // const { data } = useSelector((state: RootState) => state.programMenu)
    // const location = useLocation();
    // const routeSlug = useMemo(() => normalizeProgramRouteSlug(location.pathname), [location.pathname]);
    // const routeMatch = useMemo(() => resolveTopLevelProgramRoute(routeSlug), [routeSlug]);
    // const routeLabel = useMemo(() => humanizeSlug(routeSlug || "programs"), [routeSlug]);

    // const dataForMeta = useMemo(() => {
    //     if (!routeMatch) {
    //         return null;
    //     }

    //     if (routeMatch.kind === "programFlag") {
    //         return data.find((item) => normalizeProgramRouteSlug(item.programFlagSlug || item.programFlagName || "") === routeMatch.slug) || null;
    //     }

    //     return data
    //         .flatMap((item) => item.disciplines || [])
    //         .find((discipline) => normalizeProgramRouteSlug(discipline.disciplineSlug || discipline.disciplineName || "") === routeMatch.slug) || null;
    // }, [data, routeMatch])

    // if (!routeMatch) {
    //     return <PageNotFound />
    // }

    return (
        <div>
            {/* <SeoHead
                title={dataForMeta?.metaTitle || `${dataForMeta?.programFlagName || dataForMeta?.disciplineName || routeLabel} Programs | ${SITE_NAME}, Lucknow`}
                description={
                    dataForMeta?.metaDescription ||
                    `Explore ${dataForMeta?.programFlagName || dataForMeta?.disciplineName || routeLabel} programs at ${SITE_NAME}, Lucknow. Check courses, eligibility, fees, and admissions details.`
                }
                pathname={location.pathname}
            /> */}

            <ProgramFinderPage />
        </div>
    )
}

export default ProgramTypePage
