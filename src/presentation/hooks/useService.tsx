import { servicesContext } from 'presentation/context/services'
import React from 'react'

const useServices = () => React.useContext(servicesContext)

export default useServices
