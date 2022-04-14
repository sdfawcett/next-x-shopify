import React, { useState, useEffect } from 'react'

export default function ProductOptions({ name, values, selectedOptions, setOptions, productInventory, selectedVariant }) {
  
  return (
    <fieldset className="mt-3 mb-3 z-10 mx-4 xs:mx-0">
      <legend className="text-xl dark:text-new-beige font-semibold">{name}</legend>
      <div className="inline-flex items-center flex-wrap">
        {
          values.map(value => {
            const id = `option-${name}-${value}`
            const checked = selectedOptions[name] === value

            return (
              <label key={id} htmlFor={id}>
                <input
                  className="sr-only"
                  type="radio"
                  id={id}
                  name={`option-${name}`}
                  value={value}
                  checked={checked}
                  onChange={() => {
                    setOptions(name, value)
                  }}
                />
                <div className={`p-2 mt-3 text-lg block cursor-pointer font-bold shadow-[0_4px_0_0_rgba(0,0,0,1)] border-2 border-black hover:bg-lightest-green mr-3 ${checked ? "text-white bg-lighter-green dark:bg-lightest-green dark:text-bg-green rounded border border-gray-900" : "text-gray-900 rounded border border-gray-900 dark:text-white dark:border-new-beige"}`}>
                  <span className="px-2">{value}</span>
                </div>
              </label>
            )
          })
        }
      </div>
    </fieldset>
  )
}