import CertificatesItem from '@/app/certificates/components/certificates-item'
import { certificates } from '@/constants'
import React from 'react'

const CertificatesList = () => {
  return (
    <div className="mx-auto flex flex-col gap-8 pl-5 pr-5 lg:container lg:gap-5">
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-5">
        {certificates.map((certificate) => (
          <CertificatesItem key={certificate.id} certificate={certificate}/>
        ))}
      </div>
    </div>
  )
}

export default CertificatesList