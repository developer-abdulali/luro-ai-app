import React from 'react'

interface Props {
    children: React.ReactNode
}

const Background = ({ children }: Props) => {
    return (
        <main id='background' className="flex-none min-h-screen bg-black text-white relative overflow-hidden">
            {children}
        </main>
    )
}

export default Background