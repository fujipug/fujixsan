'use client'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'

export default function Modal({ children, open, onModalClose }: { children: any, open: boolean, onModalClose: (open: boolean) => void }) {
  return (
    <Dialog
      open={open}
      onClose={() => onModalClose(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

      {/* Full-screen scrollable container */}
      <div className="fixed inset-0 w-full overflow-y-auto">
        {/* Container to center the panel */}
        <div className="flex min-h-full items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="mx-auto w-max-md rounded bg-gray-600 p-8">
            {children}
            <div className='flex justify-end'>
              <button
                type="button"
                onClick={() => onModalClose(false)}
                className="rounded-md bg-white/40 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20 mt-6"
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}