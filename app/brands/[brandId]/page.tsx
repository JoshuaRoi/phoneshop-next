import React from 'react'

type PageProps = {
    params: {
        brandId: string
    }
}
export default function page({ params }: PageProps) {
    return (
        <div>{params.brandId}</div>
    )
}
