import React, { useMemo } from 'react'
import ProgramFinderPage from '../ProgramFinderPage'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { Helmet } from 'react-helmet-async'

const ProgramTypePage: React.FC = () => {
    const { data } = useSelector((state: RootState) => state.programMenu)
    const location = useLocation();
    console.log("location", location)

    const slugToTitle = (slug = "") =>
        slug
            .replace(/^\/+/, "")
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase())

    // ✅ derive program type directly from URL
    const programTypeValue = useMemo(() => {
        return slugToTitle(location.pathname)
    }, [location.pathname])

    // ✅ filter AFTER value is ready
    const dataForMeta = useMemo(() => {
        return data.filter(
            (item) => item.programFlagName === programTypeValue
        )
    }, [data, programTypeValue])

    // console.log("programTypeValue:", programTypeValue)

    return (
        <div>
            {
                dataForMeta[0] && <Helmet>
                    {/* @ts-ignore */}
                    <title>{dataForMeta[0].metaTitle}</title>
                    {/* @ts-ignore */}
                    <meta name="description" content={dataForMeta[0].metaDescription} />
                </Helmet>
            }

            <ProgramFinderPage />
        </div>
    )
}

export default ProgramTypePage
