'use client'
import TranslateComponent from './googleTranslate'
import { usePathname } from 'next/navigation'

export default function LayoutGoogleTranslate() {
    const pathname = usePathname()
    return <>{pathname !== '/' && <TranslateComponent />}</>
}
