'use client'
import { Document, Page, pdfjs } from 'react-pdf'
import Modal from "../../components/modal";
import { useState } from 'react';
import { useIsClient } from '@/utils/is-client-ctx';

export default function Epk() {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString();
  const [openModal, setOpenModal] = useState(false)
  const isClient = useIsClient()

  return (
    <>
      <Modal open={openModal} onModalClose={() => setOpenModal(false)} >
        <div className='block'>
          <Document
            className='mb-4 flex justify-center'
            file='EPK.pdf'>
            <Page
              canvasBackground='transparent'
              width={isClient ? (window.innerWidth / 2) : 0}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              pageNumber={1} />
          </Document>
          <Document
            className='flex justify-center'
            file='EPK.pdf'>
            <Page
              canvasBackground='transparent'
              width={isClient ? (window.innerWidth / 2) : 0}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              pageNumber={2} />
          </Document>
        </div>
      </Modal>
      <div id='epk' className="my-8">
        <div className="mx-auto">
          <div className="relative overflow-hidden bg-gray-900 px-6 py-20">
            <img
              className="absolute inset-0 h-full w-full object-cover brightness-150 saturate-0"
              src="/epk_background.png"
              alt="EPK Background Image"
            />
            <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
            <div className="absolute -left-80 -top-56 transform-gpu blur-3xl" aria-hidden="true">
              <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ffa17f] to-[#00223e] opacity-[0.45]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <div
              className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ffa17f] to-[#00223e] opacity-25"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <div className="relative mx-auto">
              {/* <h1 className="text-3xl">Press Kit</h1> */}
              <div className='flex justify-center mb-4'>
                <img className="h-44 w-auto" src="press_kit_logo.png" alt="" />
              </div>
              <figure>
                <div className="grid-cols-2 space-x-6 flex justify-center">
                  <div className="col-span-1">
                    <button
                      type="button"
                      onClick={() => setOpenModal(true)}
                      className="rounded-md bg-transparent px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 transition ease-in-out duration-500 hover:bg-gray-50 hover:text-gray-900"
                    >
                      View Press Kit
                    </button>
                  </div>
                  <div className="col-span-1">
                    <a
                      href="https://firebasestorage.googleapis.com/v0/b/lanefujikado-d3727.appspot.com/o/Press%20Kit%20Fujixsan.zip?alt=media&token=e383a3a6-e8ce-43c9-b35e-8f9331ab827e"
                      type="button"
                      className="rounded-md bg-transparent px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 transition ease-in-out duration-500 hover:bg-gray-50 hover:text-gray-900"
                    >
                      Download Press Kit (.zip)
                    </a>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
