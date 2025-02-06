"use client"

import { CldImage } from 'next-cloudinary';

const CertificateLatest = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050816] p-4">
      <div className="container max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1.5fr,1fr] gap-8 items-center">
          {/* Left Section */}
          <div className="text-white space-y-6 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Data Science
              <br />
              Professional Certificate
            </h1>
            <div className="space-y-2 text-gray-300">
              <p className="text-lg">Acquired on: dd/mm/yyyy</p>
              <p className="text-lg">By: IBM on Coursera</p>
            </div>
          </div>

          {/* Right Section - Certificate Image */}
          <div className="relative">
            <div className="bg-transparent rounded-lg shadow-2xl overflow-hidden">
            <CldImage width="600" height="600" sizes='100vw' src="Portfolio/certificates/SPRKML" alt='profile pic' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CertificateLatest