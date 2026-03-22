import React, { useMemo } from 'react'
import ProgramFinderPage from '../ProgramFinderPage'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import PageNotFound from '../../PageNotFound'
import { normalizeProgramRouteSlug, resolveTopLevelProgramRoute } from '../../../utils/programCategoryRoute'
import SeoHead from '../../../components/seo/SeoHead'
import { SITE_NAME } from '../../../utils/seo'

const ProgramTypePage: React.FC = () => {
    const { data } = useSelector((state: RootState) => state.programMenu)
    const location = useLocation();
    const routeSlug = useMemo(() => normalizeProgramRouteSlug(location.pathname), [location.pathname]);
    const routeMatch = useMemo(() => resolveTopLevelProgramRoute(routeSlug), [routeSlug]);

    const dataForMeta = useMemo(() => {
        if (!routeMatch) {
            return null;
        }

        if (routeMatch.kind === "programFlag") {
            return data.find((item) => normalizeProgramRouteSlug(item.programFlagSlug || item.programFlagName || "") === routeMatch.slug) || null;
        }

        return data
            .flatMap((item) => item.disciplines || [])
            .find((discipline) => normalizeProgramRouteSlug(discipline.disciplineSlug || discipline.disciplineName || "") === routeMatch.slug) || null;
    }, [data, routeMatch])

    if (!routeMatch) {
        return <PageNotFound />
    }

    return (
        <div>
            {
                dataForMeta && <SeoHead
                    title={dataForMeta.metaTitle || `${dataForMeta.programFlagName || dataForMeta.disciplineName || "Programs"} | ${SITE_NAME}, Lucknow`}
                    description={dataForMeta.metaDescription || `Explore programs, admissions information, and eligibility details for ${dataForMeta.programFlagName || dataForMeta.disciplineName || "SRMU programs"}.`}
                    pathname={location.pathname}
                />
            }

            <ProgramFinderPage />
        </div>
    )
}

export default ProgramTypePage
