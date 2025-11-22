'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function Search() {
    const [search, updateSearch] = useState('')

    const searchParams = useSearchParams()
    const router = useRouter()
    const pathName = usePathname()
    const updateFilter = (value: string) => {
        const params = new URLSearchParams(searchParams)
        if (value) {
            params.set('search', value)
        } else {
            params.delete('search')
        }

        router.replace(`${pathName}?${params.toString()}`)
    }

    useEffect(() => {
        const params = new URLSearchParams(searchParams)
        const searchParam = params.get('search')
        if(searchParam) {
            updateSearch(searchParam)
        } else {
            updateSearch('')
        }
    }, [])

    return (
        <>
        <div className="search">
            <div className="search-wrapper">
                <input value={search} onChange={(event) => { updateSearch(event.target.value) }} className="search-wrapper_input" type="text" />
                </div>
                <div className="search-btn">
                <button onClick={() => {updateFilter(search)}}></button>
                </div>
            </div>
        
        </>
    )
}