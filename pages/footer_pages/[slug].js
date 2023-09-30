import React from 'react'

import {useRouter} from 'next/router'

function index() {
    const router = useRouter()
  const slug = router.query.slug
    return (
    <div>Your Page {slug} is under Developement</div>
  )
}

export default index