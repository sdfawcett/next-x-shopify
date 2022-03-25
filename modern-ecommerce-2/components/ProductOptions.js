import React, { useState, useEffect } from 'react'

export default function ProductOptions({ name, values, selectedOptions, setOptions, productInventory, selectedVariant }) {
  
  return (
    <fieldset className="mt-3 mb-3">
      <legend className="text-xl font-semibold">{name}</legend>
      <div className="inline-flex items-center flex-nowrap">
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
                <div className={`p-2 mt-3 text-lg block cursor-pointer hover:bg-gray-300 mr-3 ${checked ? "text-white bg-gray-900 dark:text-gray-900 dark:bg-white rounded border border-gray-900" : "text-gray-900 rounded border border-gray-900 dark:text-white dark:border-white"}`}>
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