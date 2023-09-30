import React from 'react'

function Header() {
    return (
        <>
            <div class="bg-green-600 text-white p-6">
                {/* <!-- 60% Dominant Color --> */}
                <h1>Main Heading</h1>
                <p>This is some content in the dominant color.</p>
            </div>

            <div class="bg-orange-300 text-gray-800 p-4">
                {/* <!-- 30% Secondary Color --> */}
                <button class="bg-secondary-500 hover:bg-secondary-600 text-white px-4 py-2 rounded">
                    Click Me
                </button>
            </div>

            <div class="bg-blue-400 text-white p-2">
                {/* <!-- 10% Accent Color --> */}
                <p>This is an accent element in the accent color.</p>
            </div>
            <div className='bg-green-500 text-center text-white text-3xl'>Header</div>
        </>

    )
}

export default Header