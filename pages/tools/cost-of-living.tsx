import React, { useState, useMemo, useRef, useEffect } from 'react'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

const POPULAR_CITIES = [
  'Jakarta',
  'Bandung',
  'Surabaya',
  'Yogyakarta',
  'Denpasar',
  'Singapore',
  'Kuala Lumpur',
  'Bangkok',
  'Manila',
  'Ho Chi Minh City',
  'Tokyo',
  'Seoul',
  'Hong Kong',
  'Taipei',
  'Beijing',
  'Shanghai',
  'London',
  'Berlin',
  'Amsterdam',
  'Paris',
  'Dublin',
  'New York',
  'San Francisco',
  'Los Angeles',
  'Toronto',
  'Sydney',
  'Melbourne',
  'Dubai',
  'Mumbai',
  'Istanbul',
]

const CATEGORY_LABELS = {
  housing: {
    label: 'Housing',
    icon: 'M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
  },
  food: {
    label: 'Food & Dining',
    icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7',
  },
  transport: {
    label: 'Transport',
    icon: 'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9m-18.375 2.25L3 14.25m18.375-9L21 14.25M21 14.25h-4.875m-12 0H3',
  },
  lifestyle: {
    label: 'Lifestyle',
    icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5',
  },
}

const ITEM_LABELS = {
  rent_1br_center: 'Rent 1BR (Center)',
  rent_1br_outside: 'Rent 1BR (Outside)',
  utilities: 'Utilities (Monthly)',
  internet: 'Internet (Monthly)',
  meal_inexpensive: 'Meal (Inexpensive)',
  meal_midrange: 'Meal (Mid-range 2p)',
  groceries: 'Groceries (Monthly)',
  cappuccino: 'Cappuccino',
  monthly_pass: 'Transit Pass (Monthly)',
  gas_1l: 'Gasoline (1L)',
  taxi_start: 'Taxi Start',
  gym: 'Gym (Monthly)',
  cinema: 'Cinema Ticket',
  beer: 'Domestic Beer (0.5L)',
}

function formatCurrency(amount, symbol, currency) {
  if (!amount && amount !== 0) return '-'
  try {
    const locale = currency === 'IDR' ? 'id-ID' : 'en-US'
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency || 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  } catch {
    return `${symbol || ''}${amount?.toLocaleString() || ''}`
  }
}

function percentDiff(a, b) {
  if (!a || !b) return 0
  return Math.round(((b - a) / a) * 100)
}

function SvgIcon({ d, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  )
}

function CityInput({ value, onChange, placeholder, icon }) {
  const [focused, setFocused] = useState(false)
  const [filter, setFilter] = useState('')
  const ref = useRef(null)

  const suggestions = useMemo(() => {
    if (!filter) return POPULAR_CITIES.slice(0, 8)
    const q = filter.toLowerCase()
    return POPULAR_CITIES.filter((c) => c.toLowerCase().includes(q)).slice(0, 8)
  }, [filter])

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setFocused(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div className="relative flex-1" ref={ref}>
      <div className="relative">
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <SvgIcon d={icon} className="h-5 w-5 text-gray-400" />
          </div>
        )}
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setFilter(e.target.value)
            onChange(e.target.value)
          }}
          onFocus={() => setFocused(true)}
          placeholder={placeholder}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pl-10 text-sm text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:border-primary-400"
        />
      </div>
      {focused && suggestions.length > 0 && (
        <div className="absolute z-20 mt-1 w-full rounded-lg border border-gray-200 bg-white py-1 shadow-lg dark:border-gray-700 dark:bg-gray-800">
          {suggestions.map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => {
                onChange(city)
                setFilter('')
                setFocused(false)
              }}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              {city}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function CategoryBar({ label, valueA, valueB, formatA, formatB }) {
  const max = Math.max(valueA, valueB, 1)
  const pctA = (valueA / max) * 100
  const pctB = (valueB / max) * 100
  const diff = percentDiff(valueA, valueB)

  return (
    <div className="mb-3">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{label}</span>
        {diff !== 0 && (
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
              diff > 0
                ? 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400'
                : 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400'
            }`}
          >
            {Math.abs(diff)}% {diff > 0 ? 'more' : 'less'}
          </span>
        )}
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center gap-3">
          <span className="w-28 text-right text-xs font-medium text-gray-900 dark:text-gray-100 tabular-nums">
            {formatA(valueA)}
          </span>
          <div className="flex-1">
            <div className="h-3.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
              <div
                className="h-full rounded-full bg-primary-500 transition-all duration-500"
                style={{ width: `${pctA}%` }}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-28 text-right text-xs font-medium text-gray-900 dark:text-gray-100 tabular-nums">
            {formatB(valueB)}
          </span>
          <div className="flex-1">
            <div className="h-3.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
              <div
                className="h-full rounded-full bg-indigo-500 transition-all duration-500"
                style={{ width: `${pctB}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CategorySection({ category, dataA, dataB, formatA, formatB }) {
  const meta = CATEGORY_LABELS[category]
  if (!meta || !dataA || !dataB) return null

  const items = Object.keys(ITEM_LABELS).filter((k) => dataA[k] != null && dataB[k] != null)
  if (items.length === 0) return null

  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center gap-2 border-b border-gray-200 pb-2 dark:border-gray-700">
        <SvgIcon d={meta.icon} className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{meta.label}</h3>
      </div>
      {items.map((key) => (
        <CategoryBar
          key={key}
          label={ITEM_LABELS[key]}
          valueA={dataA[key]}
          valueB={dataB[key]}
          formatA={formatA}
          formatB={formatB}
        />
      ))}
    </div>
  )
}

function LoadingSkeleton() {
  return (
    <div className="mt-10 space-y-6">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="animate-pulse space-y-3">
          <div className="h-5 w-1/4 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="h-4 w-28 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-3.5 flex-1 rounded-full bg-gray-200 dark:bg-gray-700" />
            </div>
            <div className="flex items-center gap-3">
              <div className="h-4 w-28 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-3.5 flex-1 rounded-full bg-gray-200 dark:bg-gray-700" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function CostOfLiving() {
  const [cityA, setCityA] = useState('')
  const [cityB, setCityB] = useState('')
  const [salary, setSalary] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [swapped, setSwapped] = useState(false)

  const handleCompare = async () => {
    if (!cityA.trim() || !cityB.trim()) return
    if (cityA.trim().toLowerCase() === cityB.trim().toLowerCase()) {
      setError('Select two different cities to compare')
      return
    }
    setLoading(true)
    setError('')
    setResult(null)
    setSwapped(false)

    try {
      const res = await fetch('/api/cost-of-living', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cityA: cityA.trim(),
          cityB: cityB.trim(),
          salary: salary ? parseInt(salary.replace(/[^0-9]/g, ''), 10) || 0 : 0,
        }),
      })

      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || 'Failed to fetch comparison data')
      }

      const data = await res.json()
      if (!data.cityA || !data.cityB) {
        throw new Error('Invalid response from comparison service')
      }
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  const handleSwap = () => {
    setCityA(cityB)
    setCityB(cityA)
    setResult(null)
    setSwapped(!swapped)
  }

  const formatA = (v) => {
    if (!result) return ''
    return formatCurrency(v, result.cityA.currencySymbol, result.cityA.currency)
  }

  const formatB = (v) => {
    if (!result) return ''
    return formatCurrency(v, result.cityB.currencySymbol, result.cityB.currency)
  }

  return (
    <>
      <PageSEO
        title={`Cost of Living Comparison - ${siteMetadata.author}`}
        description="Compare cost of living between cities. Side-by-side analysis of housing, food, transport, and lifestyle costs with purchasing power parity."
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Cost of Living Comparison
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Compare housing, food, transport, and lifestyle costs between two cities. Add your
            salary to see purchasing power parity.
          </p>
        </div>

        <div className="py-8">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="flex flex-col gap-4 md:flex-row md:items-end">
                <CityInput
                  value={cityA}
                  onChange={setCityA}
                  placeholder="e.g. Jakarta"
                  icon="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <button
                  onClick={handleSwap}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors hover:border-primary-500 hover:text-primary-500 dark:border-gray-600 dark:text-gray-400 dark:hover:border-primary-400 dark:hover:text-primary-400"
                  title="Swap cities"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                    />
                  </svg>
                </button>
                <CityInput
                  value={cityB}
                  onChange={setCityB}
                  placeholder="e.g. Singapore"
                  icon="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </div>

              <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end">
                <div className="flex-1">
                  <label className="mb-1 block text-xs font-medium text-gray-500 dark:text-gray-400">
                    Your Salary in {cityA || 'City A'} (optional)
                  </label>
                  <input
                    type="text"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    placeholder="e.g. 15000000"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:border-primary-400"
                  />
                </div>
                <button
                  onClick={handleCompare}
                  disabled={loading || !cityA.trim() || !cityB.trim()}
                  className="flex h-11 items-center gap-2 rounded-lg bg-primary-500 px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-primary-400"
                >
                  {loading ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Comparing...
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        />
                      </svg>
                      Compare
                    </>
                  )}
                </button>
              </div>

              {error && (
                <div className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {error}
                  </div>
                </div>
              )}
            </div>

            {loading && <LoadingSkeleton />}

            {result && !loading && (
              <div className="mt-8 space-y-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-primary-200 bg-primary-50/50 p-5 dark:border-primary-900/50 dark:bg-primary-900/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                          {result.cityA.name}
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {result.cityA.country} &middot; {result.cityA.currency}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                          {result.cityA.costIndex || '-'}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Cost Index</div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-indigo-200 bg-indigo-50/50 p-5 dark:border-indigo-900/50 dark:bg-indigo-900/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                          {result.cityB.name}
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {result.cityB.country} &middot; {result.cityB.currency}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                          {result.cityB.costIndex || '-'}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Cost Index</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  {['housing', 'food', 'transport', 'lifestyle'].map((cat) => (
                    <CategorySection
                      key={cat}
                      category={cat}
                      dataA={result.cityA.categories?.[cat]}
                      dataB={result.cityB.categories?.[cat]}
                      formatA={formatA}
                      formatB={formatB}
                    />
                  ))}
                </div>

                {result.salaryComparison && (
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                    <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">
                      Purchasing Power
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800/50">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Your Salary in</p>
                        <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                          {formatCurrency(
                            result.salaryComparison.cityASalary,
                            result.cityA.currencySymbol,
                            result.cityA.currency
                          )}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {result.cityA.name}
                        </p>
                      </div>
                      <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800/50">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Equivalent in</p>
                        <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                          {formatCurrency(
                            result.salaryComparison.equivalentSalaryInCityB,
                            result.cityB.currencySymbol,
                            result.cityB.currency
                          )}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {result.cityB.name}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 rounded-xl bg-primary-50 p-4 dark:bg-primary-900/10">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">
                          {result.salaryComparison.purchasingPowerRatio > 1
                            ? '📈'
                            : result.salaryComparison.purchasingPowerRatio < 0.5
                            ? '💸'
                            : '⚖️'}
                        </span>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                            Purchasing Power Ratio:{' '}
                            <strong>
                              {result.salaryComparison.purchasingPowerRatio.toFixed(2)}x
                            </strong>
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {result.salaryComparison.purchasingPowerRatio > 1.1
                              ? `Your money goes ${result.salaryComparison.purchasingPowerRatio.toFixed(
                                  1
                                )}x further in ${result.cityB.name}`
                              : result.salaryComparison.purchasingPowerRatio < 0.9
                              ? `${result.cityB.name} is ${(
                                  1 / result.salaryComparison.purchasingPowerRatio
                                ).toFixed(1)}x more expensive than ${result.cityA.name}`
                              : 'Similar purchasing power between the two cities'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
