import React from 'react'

import PageTitle from '../../../global/PageTitle/PageTitle'
import './TaxDocument.css'

const TaxDocument = () => {
    return (
        <div>
        <PageTitle title="My Tax Documents" />
        <div className="taxDocument-main">
            <p>No Current Documents Available</p>
        </div>
        </div>
    )
}

export default TaxDocument
