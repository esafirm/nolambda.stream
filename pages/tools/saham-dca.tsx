import React, { useState, useMemo } from 'react'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function SahamDca() {
  // Tabs: 'calculator' (Standard DCA) or 'planner' (Target Avg Planner)
  const [activeTab, setActiveTab] = useState<'calculator' | 'planner'>('calculator')

  // Unit mode: true = Lots (1 lot = 100 shares), false = Shares
  const [isLotMode, setIsLotMode] = useState<boolean>(true)

  // Standard DCA Calculator State
  const [calcCurrentPrice, setCalcCurrentPrice] = useState<string>('')
  const [calcCurrentQty, setCalcCurrentQty] = useState<string>('')
  const [calcNewPrice, setCalcNewPrice] = useState<string>('')
  const [calcNewQty, setCalcNewQty] = useState<string>('')

  // Target Planner State
  const [planCurrentPrice, setPlanCurrentPrice] = useState<string>('')
  const [planCurrentQty, setPlanCurrentQty] = useState<string>('')
  const [planTargetPrice, setPlanTargetPrice] = useState<string>('')
  const [solveMode, setSolveMode] = useState<'qty' | 'price'>('qty')
  const [planSolveMarketPrice, setPlanSolveMarketPrice] = useState<string>('')
  const [planSolveTargetQty, setPlanSolveTargetQty] = useState<string>('')

  // Stock data lookup state
  const [tickerSearch, setTickerSearch] = useState<string>('')
  const [stockData, setStockData] = useState<{
    symbol: string
    name: string
    price: number
  } | null>(null)
  const [isFetchingStock, setIsFetchingStock] = useState<boolean>(false)
  const [stockError, setStockError] = useState<string>('')

  const handleFetchStock = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!tickerSearch) return
    setIsFetchingStock(true)
    setStockError('')
    setStockData(null)
    try {
      const res = await fetch(`/api/stock?ticker=${encodeURIComponent(tickerSearch)}`)
      if (!res.ok) {
        const errData = await res.json()
        throw new Error(errData.error || 'Failed to fetch stock price')
      }
      const data = await res.json()
      setStockData(data)
    } catch (err) {
      setStockError(err instanceof Error ? err.message : 'Failed to find ticker')
    } finally {
      setIsFetchingStock(false)
    }
  }

  const applyToCurrentPrice = (price: number) => {
    setCalcCurrentPrice(price.toString())
    setPlanCurrentPrice(price.toString())
  }

  const applyToNewPrice = (price: number) => {
    setCalcNewPrice(price.toString())
    setPlanSolveMarketPrice(price.toString())
  }

  // Helper formatting functions
  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(num)
  }

  const formatNum = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      maximumFractionDigits: 2,
    }).format(num)
  }

  // Safe parsing helper
  const parseInput = (val: string): number => {
    if (!val) return 0
    const parsed = parseFloat(val.replace(/,/g, '.'))
    return isNaN(parsed) ? 0 : parsed
  }

  // Real-time Standard DCA Calculation
  const dcaResults = useMemo(() => {
    const p1 = parseInput(calcCurrentPrice)
    const q1 = parseInput(calcCurrentQty)
    const p2 = parseInput(calcNewPrice)
    const q2 = parseInput(calcNewQty)

    if (q1 <= 0 || p1 <= 0) {
      return {
        isValid: false,
        currentTotal: 0,
        newTotal: 0,
        combinedTotal: 0,
        combinedQty: 0,
        newAvgPrice: 0,
        priceDiff: 0,
        priceDiffPercent: 0,
      }
    }

    const multiplier = isLotMode ? 100 : 1
    const currentTotal = p1 * q1 * multiplier
    const newTotal = p2 * q2 * multiplier
    const combinedQty = q1 + q2
    const combinedTotal = currentTotal + newTotal

    // Avg price is per share. In lot mode, total qty of shares = combinedQty * 100.
    // Total price is combinedTotal.
    // avg = combinedTotal / (combinedQty * 100) = ( (p1*q1*100) + (p2*q2*100) ) / ((q1+q2)*100) = (p1*q1 + p2*q2)/(q1+q2)
    // The multiplier cancels out for the average price itself.
    const newAvgPrice = combinedQty > 0 ? (p1 * q1 + p2 * q2) / combinedQty : 0
    const priceDiff = newAvgPrice - p1
    const priceDiffPercent = p1 > 0 ? (priceDiff / p1) * 100 : 0

    return {
      isValid: true,
      currentTotal,
      newTotal,
      combinedTotal,
      combinedQty,
      newAvgPrice,
      priceDiff,
      priceDiffPercent,
    }
  }, [calcCurrentPrice, calcCurrentQty, calcNewPrice, calcNewQty, isLotMode])

  // Real-time Target Planner Calculation
  const plannerResults = useMemo(() => {
    const p1 = parseInput(planCurrentPrice)
    const q1 = parseInput(planCurrentQty)
    const pt = parseInput(planTargetPrice)

    if (p1 <= 0 || q1 <= 0 || pt <= 0) {
      return { isValid: false, message: 'Please fill in current position and target price.' }
    }

    const multiplier = isLotMode ? 100 : 1
    const currentTotal = p1 * q1 * multiplier

    if (solveMode === 'qty') {
      const pn = parseInput(planSolveMarketPrice)
      if (pn <= 0) {
        return { isValid: false, message: 'Please enter a valid purchase market price.' }
      }

      // Formula: Qn = Qc * (Pc - Pt) / (Pt - Pn)
      const numerator = p1 - pt
      const denominator = pt - pn

      if (numerator === 0) {
        return {
          isValid: true,
          actionPossible: true,
          message:
            'Your current average price is already equal to the target price. No purchase needed.',
          requiredQtyExact: 0,
          requiredQtyRounded: 0,
          totalInvestmentNeeded: 0,
          resultingAvg: pt,
        }
      }

      // Check if target is possible
      // 1. Averaging down: current price > target. We must buy at a price lower than target.
      // 2. Averaging up: current price < target. We must buy at a price higher than target.
      const isAveragingDown = p1 > pt
      const isPossible = isAveragingDown ? pn < pt : pn > pt

      if (!isPossible) {
        return {
          isValid: true,
          actionPossible: false,
          warning: isAveragingDown
            ? `Cannot average down to Rp ${formatNum(pt)} if the purchase price is Rp ${formatNum(
                pn
              )}. The purchase price must be lower than your target average price.`
            : `Cannot average up to Rp ${formatNum(pt)} if the purchase price is Rp ${formatNum(
                pn
              )}. The purchase price must be higher than your target average price.`,
        }
      }

      const qnExact = q1 * (numerator / denominator)
      const qnRounded = Math.ceil(qnExact)
      const totalInvestmentNeeded = qnRounded * pn * multiplier

      // Calculate actual resulting average after rounding up the purchase quantity
      const resultingAvg = (p1 * q1 + pn * qnRounded) / (q1 + qnRounded)

      return {
        isValid: true,
        actionPossible: true,
        requiredQtyExact: qnExact,
        requiredQtyRounded: qnRounded,
        totalInvestmentNeeded,
        resultingAvg,
        isAveragingDown,
      }
    } else {
      // Solve for Buy Price
      const qn = parseInput(planSolveTargetQty)
      if (qn <= 0) {
        return { isValid: false, message: 'Please enter a valid target buy quantity.' }
      }

      // Formula: Pn = (Pt * (Qc + Qn) - Qc * Pc) / Qn
      const requiredPrice = (pt * (q1 + qn) - q1 * p1) / qn
      const totalInvestmentNeeded = qn * requiredPrice * multiplier

      const isAveragingDown = p1 > pt
      const isPossible = requiredPrice > 0

      return {
        isValid: true,
        actionPossible: isPossible,
        requiredPrice,
        totalInvestmentNeeded,
        resultingAvg: pt,
        isAveragingDown,
        warning: !isPossible
          ? `Mathematically impossible. To reach Rp ${formatNum(pt)} with only ${formatNum(qn)} ${
              isLotMode ? 'lots' : 'shares'
            }, the price would have to be negative (${formatIDR(
              requiredPrice
            )}). Try planning with a larger buy quantity.`
          : requiredPrice < 50
          ? `Warning: The required purchase price is Rp ${formatNum(
              requiredPrice
            )}, which is below the IDX stock price floor (Rp 50). This might not be tradeable.`
          : null,
      }
    }
  }, [
    planCurrentPrice,
    planCurrentQty,
    planTargetPrice,
    solveMode,
    planSolveMarketPrice,
    planSolveTargetQty,
    isLotMode,
  ])

  return (
    <>
      <PageSEO
        title={`Saham DCA Calculator - ${siteMetadata.author}`}
        description="Calculate stock Dollar Cost Averaging (DCA) average prices and plan transactions to reach your target average price."
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* Header */}
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                Saham DCA Calculator
              </h1>
              <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                Determine your stock portfolio's new average cost or map out purchases to achieve a
                target average price.
              </p>
            </div>
            <Link
              href="/tools"
              className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:text-primary-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Tools
            </Link>
          </div>
        </div>

        {/* Interactive Workspace */}
        <div className="py-8">
          {/* Controls bar */}
          <div className="mb-8 flex flex-col items-center justify-between gap-4 rounded-xl bg-gray-50 p-4 dark:bg-gray-800 sm:flex-row">
            {/* Navigation Tabs */}
            <div className="flex rounded-lg bg-gray-200 p-1 dark:bg-gray-900">
              <button
                onClick={() => setActiveTab('calculator')}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
                  activeTab === 'calculator'
                    ? 'bg-white text-gray-900 shadow-sm dark:bg-gray-800 dark:text-gray-100'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                DCA Cost Calculator
              </button>
              <button
                onClick={() => setActiveTab('planner')}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
                  activeTab === 'planner'
                    ? 'bg-white text-gray-900 shadow-sm dark:bg-gray-800 dark:text-gray-100'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                Target Avg Planner
              </button>
            </div>

            {/* Shares/Lots Switch */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Trading Unit:
              </span>
              <div className="inline-flex rounded-lg bg-gray-200 p-1 dark:bg-gray-900">
                <button
                  onClick={() => setIsLotMode(true)}
                  className={`rounded-md px-3 py-1 text-xs font-semibold transition-all ${
                    isLotMode
                      ? 'bg-primary-500 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
                  }`}
                >
                  Lots (100 sh)
                </button>
                <button
                  onClick={() => setIsLotMode(false)}
                  className={`rounded-md px-3 py-1 text-xs font-semibold transition-all ${
                    !isLotMode
                      ? 'bg-primary-500 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
                  }`}
                >
                  Shares
                </button>
              </div>
            </div>
          </div>

          {/* Calculator Layout */}
          <div className="grid gap-8 lg:grid-cols-12">
            {/* LEFT COLUMN: Inputs Form */}
            <div className="lg:col-span-5">
              {/* Live Stock Price Lookup Widget */}
              <div className="mb-6 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Live IDX Market Price Lookup
                </h3>
                <form onSubmit={handleFetchStock} className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={tickerSearch}
                      onChange={(e) => setTickerSearch(e.target.value)}
                      placeholder="Enter ticker (e.g. BBRI, TLKM, GOTO)"
                      className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-sm text-gray-900 uppercase placeholder:normal-case focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-primary-500"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isFetchingStock || !tickerSearch}
                    className="inline-flex items-center rounded-lg bg-primary-500 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {isFetchingStock ? 'Loading...' : 'Search'}
                  </button>
                </form>

                {stockError && (
                  <p className="mt-2 text-xs text-red-500 dark:text-red-400">⚠️ {stockError}</p>
                )}

                {stockData && (
                  <div className="mt-4 rounded-xl bg-gray-50 p-4 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 transition-all">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-gray-900 dark:text-gray-100">
                          {stockData.symbol}
                        </div>
                        <div className="text-xs text-gray-400 dark:text-gray-500 line-clamp-1 max-w-[180px] sm:max-w-[240px]">
                          {stockData.name}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-extrabold text-primary-500">
                          {formatIDR(stockData.price)}
                        </div>
                        <div className="text-[10px] text-gray-400">Live price</div>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-gray-200/50 dark:border-gray-700/50 grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => applyToCurrentPrice(stockData.price)}
                        className="rounded-lg border border-gray-200 bg-white py-1.5 px-2 text-[10px] font-semibold text-gray-700 hover:bg-gray-50 hover:text-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-all"
                      >
                        Use as Current Avg
                      </button>
                      <button
                        type="button"
                        onClick={() => applyToNewPrice(stockData.price)}
                        className="rounded-lg border border-gray-200 bg-white py-1.5 px-2 text-[10px] font-semibold text-gray-700 hover:bg-gray-50 hover:text-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-all"
                      >
                        Use as Buy/Market Price
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {activeTab === 'calculator' ? (
                /* Standard DCA Calculator Form */
                <div className="space-y-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    Current Portfolio Position
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="calcCurrentPrice"
                        className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400"
                      >
                        Avg Buy Price
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-400 sm:text-sm">Rp</span>
                        </div>
                        <input
                          id="calcCurrentPrice"
                          type="number"
                          value={calcCurrentPrice}
                          onChange={(e) => setCalcCurrentPrice(e.target.value)}
                          placeholder="e.g. 5000"
                          className="block w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-primary-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="calcCurrentQty"
                        className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400"
                      >
                        Quantity ({isLotMode ? 'Lots' : 'Shares'})
                      </label>
                      <input
                        id="calcCurrentQty"
                        type="number"
                        value={calcCurrentQty}
                        onChange={(e) => setCalcCurrentQty(e.target.value)}
                        placeholder={isLotMode ? 'e.g. 10' : 'e.g. 1000'}
                        className="mt-2 block w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-primary-500"
                      />
                    </div>
                  </div>

                  <hr className="border-gray-100 dark:border-gray-800" />

                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    New Purchase Details
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="calcNewPrice"
                        className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400"
                      >
                        Purchase Price
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-400 sm:text-sm">Rp</span>
                        </div>
                        <input
                          id="calcNewPrice"
                          type="number"
                          value={calcNewPrice}
                          onChange={(e) => setCalcNewPrice(e.target.value)}
                          placeholder="e.g. 4000"
                          className="block w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-primary-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="calcNewQty"
                        className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400"
                      >
                        Quantity ({isLotMode ? 'Lots' : 'Shares'})
                      </label>
                      <input
                        id="calcNewQty"
                        type="number"
                        value={calcNewQty}
                        onChange={(e) => setCalcNewQty(e.target.value)}
                        placeholder={isLotMode ? 'e.g. 5' : 'e.g. 500'}
                        className="mt-2 block w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-primary-500"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      onClick={() => {
                        setCalcCurrentPrice('')
                        setCalcCurrentQty('')
                        setCalcNewPrice('')
                        setCalcNewQty('')
                      }}
                      className="text-sm font-semibold text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      Clear Inputs
                    </button>
                  </div>
                </div>
              ) : (
                /* Target Planner Form */
                <div className="space-y-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    Current Portfolio Position
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="planCurrentPrice"
                        className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400"
                      >
                        Avg Buy Price
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-400 sm:text-sm">Rp</span>
                        </div>
                        <input
                          id="planCurrentPrice"
                          type="number"
                          value={planCurrentPrice}
                          onChange={(e) => setPlanCurrentPrice(e.target.value)}
                          placeholder="e.g. 5000"
                          className="block w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-primary-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="planCurrentQty"
                        className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400"
                      >
                        Quantity ({isLotMode ? 'Lots' : 'Shares'})
                      </label>
                      <input
                        id="planCurrentQty"
                        type="number"
                        value={planCurrentQty}
                        onChange={(e) => setPlanCurrentQty(e.target.value)}
                        placeholder={isLotMode ? 'e.g. 10' : 'e.g. 1000'}
                        className="mt-2 block w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-primary-500"
                      />
                    </div>
                  </div>

                  <hr className="border-gray-100 dark:border-gray-800" />

                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    Target Average Objective
                  </h3>
                  <div>
                    <label
                      htmlFor="planTargetPrice"
                      className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400"
                    >
                      Target Average Price
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-400 sm:text-sm">Rp</span>
                      </div>
                      <input
                        id="planTargetPrice"
                        type="number"
                        value={planTargetPrice}
                        onChange={(e) => setPlanTargetPrice(e.target.value)}
                        placeholder="e.g. 4500"
                        className="block w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-primary-500"
                      />
                    </div>
                  </div>

                  <hr className="border-gray-100 dark:border-gray-800" />

                  {/* Solve Switch */}
                  <div>
                    <div className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                      I want to find out...
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setSolveMode('qty')}
                        className={`flex flex-col items-center justify-center p-4 rounded-xl border text-center transition-all duration-200 focus:outline-none ${
                          solveMode === 'qty'
                            ? 'border-primary-500 bg-primary-50/40 text-primary-600 dark:border-primary-500 dark:bg-primary-950/20 dark:text-primary-400 ring-2 ring-primary-500/20 shadow-sm'
                            : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-gray-200'
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mb-1.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-xs font-bold leading-tight">Quantity to Buy</span>
                        <span className="mt-1 text-[10px] text-gray-400 dark:text-gray-500 font-normal">
                          Solve required lots/shares
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSolveMode('price')}
                        className={`flex flex-col items-center justify-center p-4 rounded-xl border text-center transition-all duration-200 focus:outline-none ${
                          solveMode === 'price'
                            ? 'border-primary-500 bg-primary-50/40 text-primary-600 dark:border-primary-500 dark:bg-primary-950/20 dark:text-primary-400 ring-2 ring-primary-500/20 shadow-sm'
                            : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-gray-200'
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mb-1.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-xs font-bold leading-tight">Purchase Price</span>
                        <span className="mt-1 text-[10px] text-gray-400 dark:text-gray-500 font-normal">
                          Solve target stock price
                        </span>
                      </button>
                    </div>
                  </div>

                  {solveMode === 'qty' ? (
                    <div>
                      <label
                        htmlFor="planSolveMarketPrice"
                        className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400"
                      >
                        At what market price will you buy?
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-400 sm:text-sm">Rp</span>
                        </div>
                        <input
                          id="planSolveMarketPrice"
                          type="number"
                          value={planSolveMarketPrice}
                          onChange={(e) => setPlanSolveMarketPrice(e.target.value)}
                          placeholder="e.g. 4000"
                          className="block w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-primary-500"
                        />
                      </div>
                      <p className="mt-1.5 text-xs text-gray-400">
                        Calculates number of lots/shares needed to reach target if bought at this
                        price.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <label
                        htmlFor="planSolveTargetQty"
                        className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400"
                      >
                        How many {isLotMode ? 'lots' : 'shares'} are you buying?
                      </label>
                      <input
                        id="planSolveTargetQty"
                        type="number"
                        value={planSolveTargetQty}
                        onChange={(e) => setPlanSolveTargetQty(e.target.value)}
                        placeholder={isLotMode ? 'e.g. 5' : 'e.g. 500'}
                        className="mt-2 block w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-primary-500"
                      />
                      <p className="mt-1.5 text-xs text-gray-400">
                        Calculates the stock purchase price required to hit your target average
                        price.
                      </p>
                    </div>
                  )}

                  <div className="flex justify-end pt-2">
                    <button
                      onClick={() => {
                        setPlanCurrentPrice('')
                        setPlanCurrentQty('')
                        setPlanTargetPrice('')
                        setPlanSolveMarketPrice('')
                        setPlanSolveTargetQty('')
                      }}
                      className="text-sm font-semibold text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      Clear Inputs
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: Results Dashboard */}
            <div className="lg:col-span-7">
              {activeTab === 'calculator' ? (
                /* DCA Calculator Output Dashboard */
                <div className="space-y-6">
                  {/* Results Summary Box */}
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                      Calculated Result
                    </h4>

                    {dcaResults.isValid ? (
                      <div className="mt-6">
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          New Average Price
                        </div>
                        <div className="mt-1.5 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
                          {formatIDR(dcaResults.newAvgPrice)}
                          <span className="ml-1 text-lg font-medium text-gray-400">/ share</span>
                        </div>

                        {/* Cost comparison pill */}
                        <div className="mt-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold shadow-sm bg-white dark:bg-gray-800">
                          <span className="text-gray-500 dark:text-gray-400">Difference:</span>
                          <span
                            className={
                              dcaResults.priceDiff === 0
                                ? 'text-gray-600'
                                : dcaResults.priceDiff < 0
                                ? 'text-green-500 dark:text-green-400'
                                : 'text-red-500 dark:text-red-400'
                            }
                          >
                            {dcaResults.priceDiff > 0 ? '+' : ''}
                            {formatIDR(dcaResults.priceDiff)} (
                            {formatNum(dcaResults.priceDiffPercent)}%)
                          </span>
                          <span className="text-gray-400 text-[10px]">
                            {dcaResults.priceDiff < 0
                              ? '(Averaged Down)'
                              : dcaResults.priceDiff > 0
                              ? '(Averaged Up)'
                              : ''}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="py-12 text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mx-auto h-12 w-12 text-gray-300 dark:text-gray-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 11h.01M9 11h.01M12 14h.01M15 11h.01M12 7h.01M15 7h.01M15 14h.01M15 17h.01M9 17h.01M9 14h.01M9 11h.01M9 7h.01M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"
                          />
                        </svg>
                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                          Enter your current holdings to see live results.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Detailed Cards Grid */}
                  {dcaResults.isValid && (
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                        <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                          Total Quantity
                        </div>
                        <div className="mt-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
                          {formatNum(dcaResults.combinedQty)} {isLotMode ? 'Lots' : 'Shares'}
                        </div>
                        <div className="mt-1 text-xs text-gray-400">
                          {isLotMode
                            ? `Equivalent to ${formatNum(dcaResults.combinedQty * 100)} shares`
                            : 'Raw shares count'}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                        <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                          Total Portfolio Cost
                        </div>
                        <div className="mt-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
                          {formatIDR(dcaResults.combinedTotal)}
                        </div>
                        <div className="mt-1 text-xs text-gray-400">
                          Current: {formatIDR(dcaResults.currentTotal)} | New:{' '}
                          {formatIDR(dcaResults.newTotal)}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Portfolio Breakdown Widget */}
                  {dcaResults.isValid && dcaResults.combinedQty > 0 && (
                    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                      <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Portfolio Contribution Weight
                      </h4>
                      {/* Bar Visualization */}
                      <div className="h-4 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800 flex">
                        <div
                          style={{
                            width: `${
                              (parseInput(calcCurrentQty) / dcaResults.combinedQty) * 100
                            }%`,
                          }}
                          className="h-full bg-primary-500"
                        />
                        <div
                          style={{
                            width: `${(parseInput(calcNewQty) / dcaResults.combinedQty) * 100}%`,
                          }}
                          className="h-full bg-teal-500"
                        />
                      </div>
                      <div className="mt-4 flex items-center justify-between text-xs font-medium">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-primary-500 inline-block" />
                          <span className="text-gray-600 dark:text-gray-400">
                            Current Position:{' '}
                            {formatNum((parseInput(calcCurrentQty) / dcaResults.combinedQty) * 100)}
                            %
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-teal-500 inline-block" />
                          <span className="text-gray-600 dark:text-gray-400">
                            New Purchase:{' '}
                            {formatNum((parseInput(calcNewQty) / dcaResults.combinedQty) * 100)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* Target Planner Output Dashboard */
                <div className="space-y-6">
                  {/* Results Summary Box */}
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                      Planner Results
                    </h4>

                    {!plannerResults.isValid ? (
                      <div className="py-12 text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mx-auto h-12 w-12 text-gray-300 dark:text-gray-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                          {plannerResults.message ||
                            'Fill out the details to calculate target planning.'}
                        </p>
                      </div>
                    ) : !plannerResults.actionPossible ? (
                      /* Warn target is mathematically impossible */
                      <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
                        <div className="flex items-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mt-0.5 h-5 w-5 text-red-500 shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div className="ml-3">
                            <h5 className="text-sm font-bold text-red-800 dark:text-red-300">
                              Action Impossible
                            </h5>
                            <p className="mt-1 text-sm text-red-700 dark:text-red-400 leading-relaxed">
                              {plannerResults.warning}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Valid possible output */
                      <div className="mt-6">
                        {solveMode === 'qty' ? (
                          <>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                              Required Purchase Quantity
                            </div>
                            <div className="mt-1.5 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
                              {formatNum(plannerResults.requiredQtyRounded || 0)}{' '}
                              <span className="text-lg font-medium text-gray-400">
                                {isLotMode ? 'Lots' : 'Shares'}
                              </span>
                            </div>
                            <p className="mt-1 text-xs text-gray-400">
                              Exact formula result:{' '}
                              {formatNum(plannerResults.requiredQtyExact || 0)}{' '}
                              {isLotMode ? 'lots' : 'shares'} (Rounded up to nearest unit)
                            </p>

                            <div className="mt-6 border-t border-gray-200 dark:border-gray-800 pt-4 grid gap-4 sm:grid-cols-2">
                              <div>
                                <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                  Capital Required
                                </div>
                                <div className="mt-1 text-lg font-bold text-gray-900 dark:text-gray-100">
                                  {formatIDR(plannerResults.totalInvestmentNeeded || 0)}
                                </div>
                              </div>
                              <div>
                                <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                  Estimated Resulting Avg
                                </div>
                                <div className="mt-1 text-lg font-bold text-teal-600 dark:text-teal-400">
                                  {formatIDR(plannerResults.resultingAvg || 0)} / sh
                                </div>
                              </div>
                            </div>

                            {/* Informative helper text */}
                            <div className="mt-4 rounded-xl border border-teal-100 bg-teal-50/50 p-4 dark:border-teal-900/30 dark:bg-teal-950/20 text-xs text-teal-800 dark:text-teal-400">
                              <span className="font-bold">DCA Strategy:</span> Buying{' '}
                              {formatNum(plannerResults.requiredQtyRounded || 0)}{' '}
                              {isLotMode ? 'lots' : 'shares'} at{' '}
                              {formatIDR(parseInput(planSolveMarketPrice))} will successfully pull
                              your average down from {formatIDR(parseInput(planCurrentPrice))} to{' '}
                              {formatIDR(plannerResults.resultingAvg || 0)} per share.
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                              Required Stock Price
                            </div>
                            <div className="mt-1.5 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
                              {formatIDR(plannerResults.requiredPrice || 0)}
                              <span className="ml-1 text-lg font-medium text-gray-400">
                                / share
                              </span>
                            </div>

                            {plannerResults.warning && (
                              <div className="mt-3 text-xs font-semibold text-yellow-600 dark:text-yellow-400">
                                ⚠️ {plannerResults.warning}
                              </div>
                            )}

                            <div className="mt-6 border-t border-gray-200 dark:border-gray-800 pt-4 grid gap-4 sm:grid-cols-2">
                              <div>
                                <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                  Capital Required
                                </div>
                                <div className="mt-1 text-lg font-bold text-gray-900 dark:text-gray-100">
                                  {formatIDR(plannerResults.totalInvestmentNeeded || 0)}
                                </div>
                              </div>
                              <div>
                                <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                  Target Avg
                                </div>
                                <div className="mt-1 text-lg font-bold text-teal-600 dark:text-teal-400">
                                  {formatIDR(plannerResults.resultingAvg || 0)} / sh
                                </div>
                              </div>
                            </div>

                            <div className="mt-4 rounded-xl border border-teal-100 bg-teal-50/50 p-4 dark:border-teal-900/30 dark:bg-teal-950/20 text-xs text-teal-800 dark:text-teal-400">
                              <span className="font-bold">DCA Strategy:</span> You need the stock
                              market price to drop (or rise) to{' '}
                              {formatIDR(plannerResults.requiredPrice || 0)} so that purchasing{' '}
                              {formatNum(parseInput(planSolveTargetQty))}{' '}
                              {isLotMode ? 'lots' : 'shares'} achieves your{' '}
                              {formatIDR(plannerResults.resultingAvg || 0)} average price goal.
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
