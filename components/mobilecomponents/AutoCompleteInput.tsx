import React, { useEffect, useState, useRef } from 'react'

interface AutocompleteInputProps {
  options: string[]
  selected: string
  placeholder?: string
  onValueChange: (option: string) => void
}

const AutocompleteInput: React.FC<AutocompleteInputProps> = ({
  options,
  onValueChange,
  selected,
  placeholder,
}) => {
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options)
  const [value, setValue] = useState<string>(selected)
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (selected) {
      setValue(selected)
    } else {
      setValue('')
    }
  }, [selected])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setIsDropdownVisible(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setValue(inputValue)
    setFilteredOptions(
      options.filter((option) => option.toLowerCase().startsWith(inputValue.toLowerCase()))
    )
    setIsDropdownVisible(true)
    onValueChange(inputValue)
  }

  const handleOptionClick = (option: string) => {
    setValue(option)
    setIsDropdownVisible(false)
    onValueChange(option)
  }

  return (
    <>
      <div className="flex flex-col" ref={inputRef}>
        <div className="flex flex-row">
          <input
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-center text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={handleInputChange}
          />
        </div>
        <div className="relative w-full dark:bg-gray-800">
          {isDropdownVisible && (
            <ul className="absolute w-full rounded-md border transition-opacity dark:bg-gray-800">
              {filteredOptions.map((option) => (
                <li
                  key={`${option}-option`}
                  className="px-4 py-2 transition-all hover:bg-gray-300 dark:hover:bg-gray-600"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}

export default AutocompleteInput
