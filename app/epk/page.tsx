'use client'
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'
import '../globals.css'

export default function Epk() {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,).toString();

  return (
    <>
      <div className='hidden md:grid grid-cols-2 gap-x-4'>
        <div className='col-span-1'>
          <Document file='EPK.pdf'>
            <Page
              renderAnnotationLayer={false}
              renderTextLayer={false}
              pageNumber={1} />
          </Document>
        </div>
        <div className='col-span-1'>
          <Document file='EPK.pdf'>
            <Page
              renderAnnotationLayer={false}
              renderTextLayer={false}
              pageNumber={2} />
          </Document>
        </div>
      </div>

      <div className='md:hidden block'>
        <Document
          className='mb-4'
          file='EPK.pdf'>
          <Page
            width={window.innerWidth}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            pageNumber={1} />
        </Document>
        <Document file='EPK.pdf'>
          <Page
            width={window.innerWidth}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            pageNumber={2} />
        </Document>
      </div>

      <div className='w-full cursor-pointer rounded-md bg-black/10 hover:bg-black/20 dark:bg-white/10 shadow-sm dark:hover:bg-white/20 text-center mt-4 py-2'>
        <a
          href="https://firebasestorage.googleapis.com/v0/b/lanefujikado-d3727.appspot.com/o/Press%20Kit%20Fujixsan.zip?alt=media&token=d09e25ba-9fd1-400a-852b-870ebc0da28c"
          className=" px-3 py-2 text-2xl font-semibold dark:text-gray-300 text-gray-700" download>
          <div className='flex justify-center align-middle'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
            </svg>
            Download Press Kit (.zip)
          </div>
        </a>
      </div>
    </>
  );
}