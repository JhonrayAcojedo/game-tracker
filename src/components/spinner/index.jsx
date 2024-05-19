import { display } from '@mui/system'
import React from 'react'
import HashLoader from 'react-spinners/HashLoader'

const override= {
    display: 'block',
    margin: '100px auto',
}
const Spinner = ({loading}) => {
	return (
		<HashLoader color="#FFFFFF"
        loading={loading}
        cssOverride={override}
        size={150}/>

	)
}

export default Spinner
