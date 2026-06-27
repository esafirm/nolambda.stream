import React, { useState, useMemo, useCallback, useRef } from 'react'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

const formatIDR = (num: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num)
const formatNum = (num: number) =>
  new Intl.NumberFormat('id-ID', { maximumFractionDigits: 2 }).format(num)
const parseInput = (val: string): number => {
  const p = parseFloat(val.replace(/[^0-9,]/g, '').replace(/,/g, '.'))
  return isNaN(p) ? 0 : p
}
const stripNonDigits = (v: string) => v.replace(/\D/g, '')
const dotsToNum = (v: string) => parseFloat(v.replace(/\./g, '')) || 0

type FireStrategy = 'standard' | 'lean' | 'coast' | 'barista'
type YearData = {
  year: number
  age: number
  calendarYear: number
  portfolio: number
  annualExpense: number
  targetCorpus: number
  isFi: boolean
}
type CalcResults = {
  isValid: boolean
  fireNumber: number
  futureAnnualExpense: number
  currentAnnualExpense: number
  currentPortfolio: number
  yearsToRetire: number
  ageAtRetire: number
  progressPercent: number
  annualSavings: number
  projection: YearData[]
  fiYear: number | null
  fiAge: number | null
  isOnTrack: boolean
  shortfallMonthly: number
  coastFireNumber: number
  isCoastReady: boolean
  leanFireNumber: number
  baristaFireNumber: number
  gapAnnualExpense: number
}

const SvgIcon = ({ d, className }: { d: string; className?: string }) => (
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

const ICONS = {
  standard:
    'M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z',
  lean: 'M12 3v17.25m0 0c-3.472 0-6.29-.79-6.29-2.25 0-1.46 2.818-2.25 6.29-2.25s6.29.79 6.29 2.25c0 1.46-2.818 2.25-6.29 2.25z',
  coast:
    'M21 11.25c0-4.97-4.03-9-9-9s-9 4.03-9 9m18 0H3m18 0v2.25m0-2.25c0 .884-.084 1.748-.246 2.586M3 11.25c0-.884.084-1.748.246-2.586M3 11.25H.75M3 11.25v2.25',
  barista:
    'M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z',
  person: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0',
  wallet:
    'M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3',
  chart:
    'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
  check:
    'M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z',
  alert:
    'M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z',
  fire: 'M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z',
  info: 'M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z',
  chevronDown: 'M19.5 8.25l-7.5 7.5-7.5-7.5',
  book: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25',
}

const STRATEGIES = [
  {
    id: 'standard' as FireStrategy,
    title: 'Standard FIRE',
    desc: 'Full retirement with your current lifestyle.',
    tagline: 'Full retirement',
    color: 'teal',
  },
  {
    id: 'lean' as FireStrategy,
    title: 'Lean FIRE',
    desc: 'Retire earlier by reducing to a frugal lifestyle.',
    tagline: 'Frugal & minimalist',
    color: 'emerald',
  },
  {
    id: 'coast' as FireStrategy,
    title: 'Coast FIRE',
    desc: 'Stop saving — let your investments grow on their own.',
    tagline: 'Stop saving',
    color: 'blue',
  },
  {
    id: 'barista' as FireStrategy,
    title: 'Barista FIRE',
    desc: 'Part-time work covers partial expenses.',
    tagline: 'Part-time work',
    color: 'amber',
  },
] as const

const CALC_EXPLANATIONS: Record<FireStrategy, { title: string; lines: string[] }> = {
  standard: {
    title: 'How Standard FIRE is calculated',
    lines: [
      'Your target retirement corpus = (future annual expenses) ÷ (SWR).',
      'Future annual expenses = current annual expenses × (1 + inflation rate)^years until retirement.',
      'The calculator projects your portfolio growing year-by-year with monthly savings and investment returns, then checks if it reaches the target by your target retirement age.',
    ],
  },
  lean: {
    title: 'How Lean FIRE is calculated',
    lines: [
      'Lean FIRE uses the same formula but with a reduced (frugal) monthly expense amount instead of your actual expenses.',
      'By lowering your expenses, you reduce the target corpus needed — meaning you can reach FI earlier or with less savings.',
      'The comparison card shows how much your target shrinks compared to Standard FIRE.',
    ],
  },
  coast: {
    title: 'How Coast FIRE is calculated',
    lines: [
      'Coast FIRE answers: "How much do I need today so my current savings grow to the Standard FIRE target by retirement age without any more contributions?"',
      'Formula: Coast Number = Standard FIRE target ÷ (1 + return rate)^years until retirement.',
      "If your current savings ≥ Coast Number, you've reached Coast FIRE — compound growth does the rest. No further savings required.",
    ],
  },
  barista: {
    title: 'How Barista FIRE is calculated',
    lines: [
      'Barista FIRE assumes part-time work covers part of your expenses. Only the remaining gap needs to be funded by investments.',
      'Annual gap = (monthly expenses − part-time income) × 12. This gap is inflated to retirement age, then divided by SWR.',
      'The result is a lower target corpus than Standard FIRE, reflecting your partial income during retirement.',
    ],
  },
}

const C = {
  teal: {
    border: 'border-teal-500',
    bg: 'bg-teal-50 dark:bg-teal-950/20',
    ring: 'ring-teal-500/20',
    dot: 'bg-teal-500',
    iconText: 'text-teal-600 dark:text-teal-400',
    iconBg: 'bg-teal-100 dark:bg-teal-900/30',
    badge: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400',
  },
  emerald: {
    border: 'border-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-950/20',
    ring: 'ring-emerald-500/20',
    dot: 'bg-emerald-500',
    iconText: 'text-emerald-600 dark:text-emerald-400',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/30',
    badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  },
  blue: {
    border: 'border-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-950/20',
    ring: 'ring-blue-500/20',
    dot: 'bg-blue-500',
    iconText: 'text-blue-600 dark:text-blue-400',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  },
  amber: {
    border: 'border-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-950/20',
    ring: 'ring-amber-500/20',
    dot: 'bg-amber-500',
    iconText: 'text-amber-600 dark:text-amber-400',
    iconBg: 'bg-amber-100 dark:bg-amber-900/30',
    badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  },
} as const

function RupiahInput({
  id,
  value,
  onChange,
  placeholder,
  hint,
}: {
  id: string
  value: string
  onChange: (v: string) => void
  placeholder: string
  hint?: string
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const formatted = value ? formatNum(dotsToNum(value)) : ''

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value
    const digits = stripNonDigits(raw)
    onChange(digits || '')
  }

  return (
    <div>
      <div className="relative mt-1">
        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2.5">
          <span className="rounded bg-gray-100 px-1 py-0.5 text-[10px] font-semibold text-gray-500 dark:bg-gray-700 dark:text-gray-400">
            Rp
          </span>
        </span>
        <input
          ref={inputRef}
          id={id}
          type="text"
          inputMode="numeric"
          value={formatted}
          onChange={handleChange}
          placeholder={placeholder}
          className="block w-full rounded-lg border border-gray-300 bg-white py-1.5 pl-11 pr-2.5 text-sm text-gray-900 transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-primary-500"
        />
      </div>
      {hint && <p className="mt-0.5 text-[10px] text-gray-400">{hint}</p>}
    </div>
  )
}

function StatusCard({
  type,
  title,
  desc,
  action,
}: {
  type: 'success' | 'warning' | 'error'
  title: string
  desc: string
  action?: React.ReactNode
}) {
  const styles = {
    success: {
      border: 'border-teal-300',
      bg: 'bg-teal-50',
      darkBorder: 'dark:border-teal-800',
      darkBg: 'dark:bg-teal-950/20',
      icon: 'text-teal-600',
      iconBg: 'bg-teal-100',
      title: 'text-teal-900',
      desc: 'text-teal-700',
      darkTitle: 'dark:text-teal-200',
      darkDesc: 'dark:text-teal-300',
    },
    warning: {
      border: 'border-yellow-300',
      bg: 'bg-yellow-50',
      darkBorder: 'dark:border-yellow-800',
      darkBg: 'dark:bg-yellow-950/20',
      icon: 'text-yellow-600',
      iconBg: 'bg-yellow-100',
      title: 'text-yellow-900',
      desc: 'text-yellow-700',
      darkTitle: 'dark:text-yellow-200',
      darkDesc: 'dark:text-yellow-300',
    },
    error: {
      border: 'border-red-300',
      bg: 'bg-red-50',
      darkBorder: 'dark:border-red-800',
      darkBg: 'dark:bg-red-950/20',
      icon: 'text-red-600',
      iconBg: 'bg-red-100',
      title: 'text-red-900',
      desc: 'text-red-700',
      darkTitle: 'dark:text-red-200',
      darkDesc: 'dark:text-red-300',
    },
  }[type]
  return (
    <div
      className={`rounded-xl border-2 ${styles.border} ${styles.bg} ${styles.darkBorder} ${styles.darkBg} p-4`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${styles.iconBg} ${styles.icon}`}
        >
          {type === 'success' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          ) : type === 'warning' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <div className="min-w-0">
          <div className={`text-sm font-bold ${styles.title} ${styles.darkTitle}`}>{title}</div>
          <p className={`mt-0.5 text-sm leading-relaxed ${styles.desc} ${styles.darkDesc}`}>
            {desc}
          </p>
          {action && <div className="mt-2">{action}</div>}
        </div>
      </div>
    </div>
  )
}

export default function FireCalculator() {
  const [strategy, setStrategy] = useState<FireStrategy>('standard')
  const [currentAge, setCurrentAge] = useState('30')
  const [retireAge, setRetireAge] = useState('55')
  const [monthlyExpense, setMonthlyExpense] = useState('5000000')
  const [currentSavings, setCurrentSavings] = useState('100000000')
  const [monthlySavings, setMonthlySavings] = useState('2000000')
  const [returnRate, setReturnRate] = useState('10')
  const [inflationRate, setInflationRate] = useState('4')
  const [swr, setSwr] = useState('4')
  const [leanExpense, setLeanExpense] = useState('3000000')
  const [baristaIncome, setBaristaIncome] = useState('3000000')
  const [startYear, setStartYear] = useState(String(new Date().getFullYear()))
  const [infoStrategy, setInfoStrategy] = useState<FireStrategy | null>(null)
  const [showTerms, setShowTerms] = useState(false)
  const [showStrategySection, setShowStrategySection] = useState(true)
  const hasCollapsed = useRef(false)

  const activeMeta = STRATEGIES.find((s) => s.id === strategy)!
  const sc = C[activeMeta.color]

  const results = useMemo<CalcResults>(() => {
    const age = parseInput(currentAge)
    const targetAge = parseInput(retireAge)
    const monthlyExp = parseInput(monthlyExpense)
    const savings = parseInput(currentSavings)
    const monthlySave = parseInput(monthlySavings)
    const ret = parseInput(returnRate) / 100
    const infl = parseInput(inflationRate) / 100
    const wdRate = parseInput(swr) / 100
    const leanExp = parseInput(leanExpense)
    const baristaInc = parseInput(baristaIncome)
    const sy = parseInput(startYear) || new Date().getFullYear()
    if (!age || !targetAge || !monthlyExp || wdRate <= 0 || targetAge <= age)
      return {
        isValid: false,
        fireNumber: 0,
        futureAnnualExpense: 0,
        currentAnnualExpense: 0,
        currentPortfolio: 0,
        yearsToRetire: 0,
        ageAtRetire: 0,
        progressPercent: 0,
        annualSavings: 0,
        projection: [],
        fiYear: null,
        fiAge: null,
        isOnTrack: false,
        shortfallMonthly: 0,
        coastFireNumber: 0,
        isCoastReady: false,
        leanFireNumber: 0,
        baristaFireNumber: 0,
        gapAnnualExpense: 0,
      }
    const years = targetAge - age
    const annualExp = monthlyExp * 12
    const annualSave = monthlySave * 12
    const realRet = (1 + ret) / (1 + infl) - 1
    const leanAnnualExp = leanExp * 12
    const baristaGap = Math.max(0, monthlyExp - baristaInc) * 12
    const futureAnnualExp = annualExp * Math.pow(1 + infl, years)
    const fireNum = futureAnnualExp / wdRate
    const futureLeanAnnualExp = leanAnnualExp * Math.pow(1 + infl, years)
    const leanFireNum = futureLeanAnnualExp / wdRate
    const futureBaristaGap = baristaGap * Math.pow(1 + infl, years)
    const baristaFireNum = futureBaristaGap / wdRate
    const coastFireNum = fireNum / Math.pow(1 + ret, years)
    const isCoastReady = savings >= coastFireNum
    const projection: YearData[] = []
    let portfolio = savings
    let fiYear: number | null = null
    for (let y = 0; y <= Math.max(years, 50); y++) {
      const expAtYear = annualExp * Math.pow(1 + infl, y)
      const targetAtYear = expAtYear / wdRate
      const isFi = portfolio >= targetAtYear
      projection.push({
        year: y,
        age: age + y,
        calendarYear: sy + y,
        portfolio: Math.round(portfolio),
        annualExpense: Math.round(expAtYear),
        targetCorpus: Math.round(targetAtYear),
        isFi,
      })
      if (isFi && fiYear === null) fiYear = y
      portfolio = portfolio * (1 + ret) + annualSave
    }
    const progressPct = fireNum > 0 ? Math.min((savings / fireNum) * 100, 100) : 0
    const isOnTrack = fiYear !== null && fiYear <= years
    let shortfallMonthly = 0
    if (!isOnTrack && fiYear !== null && fiYear > years) {
      const ap = projection[years]?.portfolio || 0
      const tp = projection[years]?.targetCorpus || 0
      if (ap < tp) {
        const gap = tp - ap
        const fvf = (Math.pow(1 + realRet, years) - 1) / realRet
        if (fvf > 0) shortfallMonthly = gap / fvf / 12
      }
    }
    return {
      isValid: true,
      fireNumber: Math.round(fireNum),
      futureAnnualExpense: Math.round(futureAnnualExp),
      currentAnnualExpense: Math.round(annualExp),
      currentPortfolio: Math.round(savings),
      yearsToRetire: years,
      ageAtRetire: targetAge,
      progressPercent: progressPct,
      annualSavings: Math.round(annualSave),
      projection,
      fiYear,
      fiAge: fiYear !== null ? age + fiYear : null,
      isOnTrack,
      shortfallMonthly: Math.round(shortfallMonthly),
      coastFireNumber: Math.round(coastFireNum),
      isCoastReady,
      leanFireNumber: Math.round(leanFireNum),
      baristaFireNumber: Math.round(baristaFireNum),
      gapAnnualExpense: Math.round(baristaGap),
    }
  }, [
    currentAge,
    retireAge,
    monthlyExpense,
    currentSavings,
    monthlySavings,
    returnRate,
    inflationRate,
    swr,
    leanExpense,
    baristaIncome,
    startYear,
  ])

  const activeFireNumber = useMemo(() => {
    if (!results.isValid) return 0
    switch (strategy) {
      case 'lean':
        return results.leanFireNumber
      case 'barista':
        return results.baristaFireNumber
      default:
        return results.fireNumber
    }
  }, [strategy, results])
  const activeProgressPct = useMemo(
    () =>
      !results.isValid || activeFireNumber <= 0
        ? 0
        : Math.min((results.currentPortfolio / activeFireNumber) * 100, 100),
    [results, activeFireNumber]
  )
  const activeExpense = useMemo(() => {
    if (!results.isValid) return 0
    switch (strategy) {
      case 'lean':
        return parseInput(leanExpense) * 12
      case 'barista':
        return results.gapAnnualExpense
      default:
        return results.currentAnnualExpense
    }
  }, [strategy, results, leanExpense])

  const statusType = results.isValid
    ? results.isOnTrack
      ? 'success'
      : results.fiYear !== null
      ? 'warning'
      : 'error'
    : null

  return (
    <>
      <PageSEO
        title={`FIRE Calculator - ${siteMetadata.author}`}
        description="Plan your path to Financial Independence and Retire Early (FIRE) with projections customized for Indonesia."
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-3 pb-5 pt-5 md:pb-6">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h1 className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl md:text-3xl">
                FIRE Calculator
              </h1>
              <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
                Plan your Financial Independence journey for Indonesia.
              </p>
            </div>
            <Link
              href="/tools"
              className="inline-flex shrink-0 items-center rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-xs font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:text-primary-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 sm:px-3 sm:py-1.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-3 w-3"
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
              Back
            </Link>
          </div>

          {/* Collapsible Strategy Selector */}
          <div
            className={`rounded-xl border-2 transition-all ${
              showStrategySection && !hasCollapsed.current
                ? 'border-primary-400 bg-primary-50/30 shadow-sm ring-2 ring-primary-500/20 dark:border-primary-600 dark:bg-primary-950/10'
                : 'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900'
            }`}
          >
            <button
              onClick={() => {
                hasCollapsed.current = true
                setShowStrategySection(!showStrategySection)
              }}
              className="flex w-full items-center justify-between gap-2 p-3 text-left sm:p-4"
            >
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-lg ${
                    showStrategySection && !hasCollapsed.current
                      ? 'bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400'
                      : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'
                  }`}
                >
                  <SvgIcon d={ICONS.fire} className="h-3.5 w-3.5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300">
                  Strategy
                </span>
                <span className="rounded-full bg-primary-100 px-2 py-0.5 text-[10px] font-semibold text-primary-700 dark:bg-primary-900/30 dark:text-primary-400">
                  {STRATEGIES.find((s) => s.id === strategy)!.title}
                </span>
                {showStrategySection && !hasCollapsed.current && (
                  <span className="animate-pulse rounded-full bg-primary-500/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
                    Choose
                  </span>
                )}
              </div>
              <SvgIcon
                d={ICONS.chevronDown}
                className={`h-3.5 w-3.5 text-gray-400 transition-transform ${
                  showStrategySection ? 'rotate-180' : ''
                }`}
              />
            </button>

            {showStrategySection && (
              <div className="border-t border-gray-100 px-3 pb-3 pt-2 dark:border-gray-800 sm:px-4 sm:pb-4 sm:pt-3">
                {/* Strategy cards - icon + title in one row */}
                <div className="flex flex-col gap-2 sm:grid sm:grid-cols-2 sm:gap-2.5">
                  {STRATEGIES.map((s) => {
                    const isSelected = strategy === s.id
                    const cc = C[s.color]
                    return (
                      <button
                        key={s.id}
                        onClick={() => setStrategy(s.id)}
                        className={`group relative rounded-xl border-2 p-2.5 text-left transition-all sm:p-3 ${
                          isSelected
                            ? `${cc.border} ${cc.bg} shadow-sm ${cc.ring} ring-2`
                            : 'border-gray-200 bg-white hover:border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-gray-600'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg sm:h-8 sm:w-8 ${
                              isSelected
                                ? `${cc.iconBg} ${cc.iconText}`
                                : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'
                            }`}
                          >
                            <SvgIcon d={ICONS[s.id]} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-xs font-bold text-gray-900 dark:text-gray-100 sm:text-sm">
                              {s.title}
                            </div>
                            <div
                              className={`mt-0 text-[10px] leading-snug sm:text-xs ${
                                isSelected ? 'text-gray-600 dark:text-gray-400' : 'text-gray-400'
                              }`}
                            >
                              {isSelected ? s.desc : s.tagline}
                            </div>
                          </div>
                          <div
                            role="button"
                            tabIndex={0}
                            onClick={(e) => {
                              e.stopPropagation()
                              setInfoStrategy(infoStrategy === s.id ? null : s.id)
                            }}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.stopPropagation()
                                setInfoStrategy(infoStrategy === s.id ? null : s.id)
                              }
                            }}
                            className={`flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors ${
                              infoStrategy === s.id
                                ? `${cc.iconBg} ${cc.iconText}`
                                : 'text-gray-300 hover:text-gray-500 dark:text-gray-600 dark:hover:text-gray-400'
                            }`}
                            title="How this is calculated"
                          >
                            <SvgIcon d={ICONS.info} className="h-3 w-3" />
                          </div>
                          {isSelected && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 shrink-0 text-gray-700 dark:text-gray-300"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                      </button>
                    )
                  })}
                </div>

                {/* Calculation info panel */}
                {infoStrategy &&
                  (() => {
                    const exp = CALC_EXPLANATIONS[infoStrategy]
                    const s = STRATEGIES.find((x) => x.id === infoStrategy)!
                    const cc = C[s.color]
                    return (
                      <div
                        className={`mt-2.5 rounded-xl border-2 ${cc.border} ${cc.bg} p-3 sm:p-4`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <div
                              className={`flex h-6 w-6 items-center justify-center rounded-lg ${cc.iconBg}`}
                            >
                              <SvgIcon d={ICONS.info} className={`h-3.5 w-3.5 ${cc.iconText}`} />
                            </div>
                            <span className={`text-xs font-bold ${cc.iconText}`}>{exp.title}</span>
                          </div>
                          <button
                            onClick={() => setInfoStrategy(null)}
                            className="flex h-5 w-5 items-center justify-center rounded-full text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                          >
                            <SvgIcon d="M6 18L18 6M6 6l12 12" className="h-3 w-3" />
                          </button>
                        </div>
                        <ul className="mt-2.5 space-y-1.5">
                          {exp.lines.map((line, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400"
                            >
                              <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-40" />
                              {line}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  })()}
              </div>
            )}
          </div>
        </div>

        <div className="py-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
            {/* LEFT COLUMN */}
            <div className="w-full shrink-0 lg:w-[380px]">
              <div className="space-y-3">
                {/* Profile */}
                <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-4">
                  <div className="border-l-4 border-primary-500 pl-2.5">
                    <div className="flex items-center gap-1.5">
                      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary-50 text-primary-600 dark:bg-primary-950/30 dark:text-primary-400">
                        <SvgIcon d={ICONS.person} className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300">
                        Your Profile
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2.5">
                    <div>
                      <label
                        htmlFor="currentAge"
                        className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400"
                      >
                        Age
                      </label>
                      <input
                        id="currentAge"
                        type="number"
                        value={currentAge}
                        onChange={(e) => setCurrentAge(e.target.value)}
                        placeholder="30"
                        className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-900 transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="retireAge"
                        className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400"
                      >
                        Retire
                      </label>
                      <input
                        id="retireAge"
                        type="number"
                        value={retireAge}
                        onChange={(e) => setRetireAge(e.target.value)}
                        placeholder="55"
                        className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-900 transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-primary-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Finances */}
                <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-4">
                  <div className="border-l-4 border-primary-500 pl-2.5">
                    <div className="flex items-center gap-1.5">
                      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary-50 text-primary-600 dark:bg-primary-950/30 dark:text-primary-400">
                        <SvgIcon d={ICONS.wallet} className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300">
                        Finances
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 space-y-2.5">
                    <div>
                      <label
                        htmlFor="monthlyExpense"
                        className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400"
                      >
                        Monthly Expenses
                      </label>
                      <RupiahInput
                        id="monthlyExpense"
                        value={monthlyExpense}
                        onChange={setMonthlyExpense}
                        placeholder="5000000"
                      />
                    </div>
                    {strategy === 'lean' && (
                      <div>
                        <label
                          htmlFor="leanExpense"
                          className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400"
                        >
                          Lean Expenses (frugal)
                        </label>
                        <RupiahInput
                          id="leanExpense"
                          value={leanExpense}
                          onChange={setLeanExpense}
                          placeholder="3000000"
                          hint="Monthly expenses after downsizing."
                        />
                      </div>
                    )}
                    {strategy === 'barista' && (
                      <div>
                        <label
                          htmlFor="baristaIncome"
                          className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400"
                        >
                          Part-Time Income
                        </label>
                        <RupiahInput
                          id="baristaIncome"
                          value={baristaIncome}
                          onChange={setBaristaIncome}
                          placeholder="3000000"
                          hint="Income offsetting your expenses."
                        />
                      </div>
                    )}
                    <div>
                      <label
                        htmlFor="currentSavings"
                        className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400"
                      >
                        Savings & Investments
                      </label>
                      <RupiahInput
                        id="currentSavings"
                        value={currentSavings}
                        onChange={setCurrentSavings}
                        placeholder="100000000"
                      />
                    </div>
                    {strategy !== 'coast' && (
                      <div>
                        <label
                          htmlFor="monthlySavings"
                          className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400"
                        >
                          Monthly Savings
                        </label>
                        <RupiahInput
                          id="monthlySavings"
                          value={monthlySavings}
                          onChange={setMonthlySavings}
                          placeholder="2000000"
                        />
                      </div>
                    )}
                    {strategy === 'coast' && (
                      <div className="rounded-lg border border-blue-100 bg-blue-50/50 px-2.5 py-1.5 dark:border-blue-900/30 dark:bg-blue-950/10">
                        <span className="flex items-center gap-1.5 text-[10px] font-semibold text-blue-700 dark:text-blue-400">
                          <span className="flex h-1.5 w-1.5 rounded-full bg-blue-500" />
                          Coast mode: no savings needed
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Assumptions */}
                <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-4">
                  <div className="border-l-4 border-primary-500 pl-2.5">
                    <div className="flex items-center gap-1.5">
                      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary-50 text-primary-600 dark:bg-primary-950/30 dark:text-primary-400">
                        <SvgIcon d={ICONS.chart} className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300">
                        Assumptions
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {[
                      {
                        id: 'returnRate',
                        label: 'Return',
                        val: returnRate,
                        set: setReturnRate,
                        hint: '10',
                      },
                      {
                        id: 'inflationRate',
                        label: 'Inflation',
                        val: inflationRate,
                        set: setInflationRate,
                        hint: '4',
                      },
                      { id: 'swr', label: 'SWR', val: swr, set: setSwr, hint: '4' },
                    ].map((f) => (
                      <div key={f.id}>
                        <label
                          htmlFor={f.id}
                          className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400"
                        >
                          {f.label}
                        </label>
                        <div className="relative mt-1">
                          <input
                            id={f.id}
                            type="number"
                            value={f.val}
                            onChange={(e) => f.set(e.target.value)}
                            placeholder={f.hint}
                            className="block w-full rounded-lg border border-gray-300 bg-white py-1.5 pr-6 pl-2 text-sm text-gray-900 transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-primary-500"
                          />
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1.5 text-[11px] font-medium text-gray-400">
                            %
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-[10px] text-gray-400">Indonesia inflation: 3-5%</span>
                    <button
                      onClick={() => {
                        setCurrentAge('30')
                        setRetireAge('55')
                        setMonthlyExpense('5000000')
                        setCurrentSavings('100000000')
                        setMonthlySavings('2000000')
                        setReturnRate('10')
                        setInflationRate('4')
                        setSwr('4')
                        setLeanExpense('3000000')
                        setBaristaIncome('3000000')
                        setStrategy('standard')
                        setStartYear(String(new Date().getFullYear()))
                      }}
                      className="text-[10px] font-semibold text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      Reset
                    </button>
                  </div>
                </div>

                {/* Terms Glossary */}
                <div className="rounded-xl border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
                  <button
                    onClick={() => setShowTerms(!showTerms)}
                    className="flex w-full items-center justify-between gap-2 p-3 text-left sm:p-4"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary-50 text-primary-600 dark:bg-primary-950/30 dark:text-primary-400">
                        <SvgIcon d={ICONS.book} className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300">
                        Terms Glossary
                      </span>
                    </div>
                    <SvgIcon
                      d={ICONS.chevronDown}
                      className={`h-3.5 w-3.5 text-gray-400 transition-transform ${
                        showTerms ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {showTerms && (
                    <div className="border-t border-gray-100 px-3 pb-3 pt-2 dark:border-gray-800 sm:px-4 sm:pb-4">
                      <div className="space-y-3">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-primary-500" />
                            <span className="text-xs font-bold text-gray-900 dark:text-gray-100">
                              SWR (Safe Withdrawal Rate)
                            </span>
                          </div>
                          <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                            The percentage of your portfolio you can withdraw each year — adjusted
                            for inflation — without running out of money over a 30+ year retirement.
                            The classic <strong>4% rule</strong> (from the Trinity Study) means you
                            need <strong>25×</strong> your annual expenses. A lower SWR (e.g. 3.5%)
                            is more conservative but requires a larger corpus.
                          </p>
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-amber-500" />
                            <span className="text-xs font-bold text-gray-900 dark:text-gray-100">
                              Why expenses increase each year
                            </span>
                          </div>
                          <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                            Inflation erodes purchasing power over time. Expenses that cost{' '}
                            <strong>Rp 60 million/year</strong> today will cost more in the future.
                            The calculator inflates your expenses at the <em>inflation rate</em>{' '}
                            each year until retirement, so your target corpus reflects actual future
                            purchasing power needed.
                          </p>
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-teal-500" />
                            <span className="text-xs font-bold text-gray-900 dark:text-gray-100">
                              Real Return (Return − Inflation)
                            </span>
                          </div>
                          <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                            Investment growth and inflation work against each other. The calculator
                            uses a <strong>real return</strong> — (1 + return rate) ÷ (1 + inflation
                            rate) − 1 — to project portfolio growth &ldquo;in today&rsquo;s
                            money.&rdquo; For example, 10% return with 4% inflation gives a ~5.8%
                            real return.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Results */}
            <div className="flex min-w-0 flex-1 flex-col gap-4">
              {!results.isValid ? (
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-800 dark:bg-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-8 w-8 text-gray-300 dark:text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>
                  <p className="mt-2 text-xs text-gray-500">
                    Enter your details to see projections.
                  </p>
                </div>
              ) : (
                <>
                  {/* Coast FIRE Card */}
                  {strategy === 'coast' && (
                    <div
                      className={`rounded-xl border p-4 ${
                        results.isCoastReady
                          ? 'border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/20'
                          : 'border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                        <span
                          className={`flex h-1.5 w-1.5 rounded-full ${
                            results.isCoastReady ? 'bg-blue-500' : 'bg-gray-400'
                          }`}
                        />
                        Coast FIRE Status
                      </div>
                      <div className="mt-3">
                        <div className="text-xs text-gray-500">Coast FIRE Number</div>
                        <div className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl">
                          {formatIDR(results.coastFireNumber)}
                        </div>
                        <p className="text-xs text-gray-400">
                          Need today to reach {formatIDR(results.fireNumber)} by{' '}
                          {results.ageAtRetire}
                        </p>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">Progress</span>
                          <span className="font-bold text-gray-900 dark:text-gray-100">
                            {formatNum(
                              Math.min(
                                (results.currentPortfolio / results.coastFireNumber) * 100,
                                100
                              )
                            )}
                            %
                          </span>
                        </div>
                        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                          <div
                            className={`h-full rounded-full transition-all duration-700 ${
                              results.isCoastReady ? 'bg-blue-500' : 'bg-primary-500'
                            }`}
                            style={{
                              width: `${Math.min(
                                (results.currentPortfolio / results.coastFireNumber) * 100,
                                100
                              )}%`,
                            }}
                          />
                        </div>
                      </div>
                      {results.isCoastReady ? (
                        <div className="mt-3 rounded-lg border border-blue-200 bg-white px-3 py-2 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-gray-800 dark:text-blue-400">
                          Reached Coast FIRE! Your savings will grow to{' '}
                          {formatIDR(results.fireNumber)} without additional contributions.
                        </div>
                      ) : (
                        <p className="mt-2 text-xs text-gray-400">
                          Need{' '}
                          <span className="font-semibold text-gray-700 dark:text-gray-300">
                            {formatIDR(results.coastFireNumber - results.currentPortfolio)}
                          </span>{' '}
                          more.
                        </p>
                      )}
                    </div>
                  )}

                  {/* FIRE Target */}
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
                    <div className="flex flex-wrap items-center justify-between gap-1.5">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                        <span className={`flex h-1.5 w-1.5 rounded-full ${sc.dot}`} />
                        {activeMeta.title} Target
                      </div>
                      {strategy !== 'standard' && strategy !== 'coast' && (
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${sc.badge}`}
                        >
                          vs {formatIDR(results.fireNumber)}
                        </span>
                      )}
                      {strategy === 'coast' && (
                        <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                          Standard: {formatIDR(results.fireNumber)}
                        </span>
                      )}
                    </div>
                    <div className="mt-3">
                      <div className="text-xs text-gray-500">Retirement Corpus Needed</div>
                      <div className="mt-0.5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-4xl">
                        {formatIDR(activeFireNumber)}
                      </div>
                      <div className="mt-0.5 text-xs text-gray-400">
                        {strategy === 'lean'
                          ? `${formatIDR(
                              results.futureAnnualExpense
                            )} projected annual expenses (lean) at ${results.ageAtRetire}`
                          : strategy === 'barista'
                          ? `${formatIDR(Math.round(activeExpense))} projected annual gap at ${
                              results.ageAtRetire
                            }`
                          : `${formatIDR(
                              results.futureAnnualExpense
                            )} projected annual expenses at ${results.ageAtRetire}`}
                        · {swr}% SWR
                      </div>
                    </div>
                    {strategy !== 'coast' && (
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">Progress</span>
                          <span className="font-bold text-gray-900 dark:text-gray-100">
                            {formatNum(activeProgressPct)}%
                          </span>
                        </div>
                        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                          <div
                            className="h-full rounded-full bg-primary-500 transition-all duration-700"
                            style={{ width: `${Math.min(activeProgressPct, 100)}%` }}
                          />
                        </div>
                        <p className="mt-0.5 text-[10px] text-gray-400">
                          Saved: {formatIDR(results.currentPortfolio)} of{' '}
                          {formatIDR(activeFireNumber)}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Status - prominent */}
                  {strategy !== 'coast' && statusType && (
                    <StatusCard
                      type={statusType}
                      title={
                        statusType === 'success'
                          ? "You're on track for FIRE! 🔥"
                          : statusType === 'warning'
                          ? 'Delayed — but still possible'
                          : 'Not on track — adjustments needed'
                      }
                      desc={
                        statusType === 'success'
                          ? `At your current savings rate, you'll reach financial independence at age ${results.fiAge}. That's within your target of ${results.ageAtRetire}.`
                          : statusType === 'warning'
                          ? `You'll reach FI at age ${results.fiAge} (${
                              results.fiYear
                            } years), but your target is ${results.ageAtRetire}. You're ${
                              results.fiYear - results.yearsToRetire
                            } years behind schedule.`
                          : `With the current settings, your portfolio won't reach the FIRE target within a reasonable timeframe. Try increasing your savings rate, adjusting return expectations, or choosing a Lean/Barista strategy.`
                      }
                      action={
                        !results.isOnTrack && results.shortfallMonthly > 0 ? (
                          <div className="rounded-lg border border-yellow-200 bg-white px-3 py-2 dark:border-yellow-800 dark:bg-gray-800">
                            <span className="text-xs font-semibold text-yellow-700 dark:text-yellow-400">
                              Recommended: save{' '}
                              <strong className="text-sm">
                                {formatIDR(results.shortfallMonthly)}
                              </strong>{' '}
                              more per month (total:{' '}
                              {formatIDR(
                                Math.round(results.annualSavings / 12 + results.shortfallMonthly)
                              )}
                              /month) to get back on track.
                            </span>
                          </div>
                        ) : undefined
                      }
                    />
                  )}

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                        {strategy === 'lean'
                          ? 'Lean Annual'
                          : strategy === 'barista'
                          ? 'Annual Gap'
                          : 'Annual Expenses'}
                      </div>
                      <div className="mt-1 text-sm font-bold text-gray-900 dark:text-gray-100 sm:text-base">
                        {formatIDR(activeExpense)}
                      </div>
                    </div>
                    <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                        {strategy === 'coast' ? 'Savings' : 'Annual Savings'}
                      </div>
                      <div className="mt-1 text-sm font-bold text-gray-900 dark:text-gray-100 sm:text-base">
                        {formatIDR(
                          strategy === 'coast' ? results.currentPortfolio : results.annualSavings
                        )}
                      </div>
                      {strategy !== 'coast' && (
                        <div className="text-[10px] text-gray-400">
                          {formatNum((results.annualSavings / results.currentAnnualExpense) * 100)}%
                          rate
                        </div>
                      )}
                    </div>
                    <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                        {results.fiAge !== null ? 'FI Age' : 'Target Age'}
                      </div>
                      <div className="mt-1 text-sm font-bold text-gray-900 dark:text-gray-100 sm:text-base">
                        {results.fiAge !== null ? results.fiAge : results.ageAtRetire}
                      </div>
                      {results.fiAge !== null && (
                        <div className="text-[10px] text-gray-400">FI in {results.fiYear}y</div>
                      )}
                    </div>
                  </div>

                  {/* Strategy insights */}
                  {strategy === 'lean' && (
                    <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-3 dark:border-emerald-900/30 dark:bg-emerald-950/10">
                      <div className="flex items-start gap-2">
                        <SvgIcon
                          d={ICONS.lean}
                          className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                        />
                        <p className="text-xs text-emerald-700 dark:text-emerald-400">
                          Reducing to <strong>{formatIDR(parseInput(leanExpense))}</strong>/month
                          cuts your target by{' '}
                          <strong>{formatIDR(results.fireNumber - results.leanFireNumber)}</strong>{' '}
                          ({formatNum((1 - results.leanFireNumber / results.fireNumber) * 100)}%).
                        </p>
                      </div>
                    </div>
                  )}
                  {strategy === 'barista' && (
                    <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-3 dark:border-amber-900/30 dark:bg-amber-950/10">
                      <div className="flex items-start gap-2">
                        <SvgIcon
                          d={ICONS.barista}
                          className="mt-0.5 h-4 w-4 shrink-0 text-amber-500"
                        />
                        <p className="text-xs text-amber-700 dark:text-amber-400">
                          Earning <strong>{formatIDR(parseInput(baristaIncome))}</strong>/month
                          part-time reduces your target by{' '}
                          <strong>
                            {formatIDR(results.fireNumber - results.baristaFireNumber)}
                          </strong>{' '}
                          ({formatNum((1 - results.baristaFireNumber / results.fireNumber) * 100)}
                          %).
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Projection Table */}
                  {strategy !== 'coast' && (
                    <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 px-3 py-2 dark:border-gray-800">
                        <div className="flex items-center gap-1.5">
                          <SvgIcon d={ICONS.chart} className="h-3.5 w-3.5 text-gray-400" />
                          <span className="text-xs font-bold text-gray-900 dark:text-gray-100">
                            Year-by-Year Projection
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <label htmlFor="startYearInput" className="text-[10px] text-gray-400">
                            From year
                          </label>
                          <input
                            id="startYearInput"
                            type="number"
                            value={startYear}
                            onChange={(e) => setStartYear(e.target.value)}
                            className="w-16 rounded-lg border border-gray-200 px-1.5 py-0.5 text-[11px] text-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                          />
                        </div>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                          <thead>
                            <tr className="border-b border-gray-100 bg-gray-50 text-[10px] font-semibold uppercase tracking-wider text-gray-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400">
                              <th className="px-3 py-2">Year</th>
                              <th className="px-3 py-2">Age</th>
                              <th className="px-3 py-2 text-right">Portfolio</th>
                              <th className="hidden px-3 py-2 text-right sm:table-cell">
                                Expenses
                              </th>
                              <th className="hidden px-3 py-2 text-right sm:table-cell">Target</th>
                              <th className="px-3 py-2 text-center">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                            {results.projection
                              .slice(
                                0,
                                Math.min(results.yearsToRetire + 5, results.projection.length)
                              )
                              .map((row) => (
                                <tr
                                  key={row.year}
                                  className={`${
                                    row.isFi
                                      ? 'bg-teal-50/50 dark:bg-teal-950/10'
                                      : row.year % 5 === 0
                                      ? 'bg-gray-50/50 dark:bg-gray-900/30'
                                      : ''
                                  }`}
                                >
                                  <td className="px-3 py-1.5 font-medium text-gray-900 dark:text-gray-100">
                                    {row.year === 0 ? `${row.calendarYear}` : row.calendarYear}
                                  </td>
                                  <td className="px-3 py-1.5 text-gray-600 dark:text-gray-400">
                                    {row.age}
                                  </td>
                                  <td className="px-3 py-1.5 text-right font-semibold text-gray-900 dark:text-gray-100">
                                    {formatIDR(row.portfolio)}
                                  </td>
                                  <td className="hidden px-3 py-1.5 text-right text-gray-500 sm:table-cell">
                                    {formatIDR(row.annualExpense)}
                                  </td>
                                  <td className="hidden px-3 py-1.5 text-right text-gray-500 sm:table-cell">
                                    {formatIDR(row.targetCorpus)}
                                  </td>
                                  <td className="px-3 py-1.5 text-center">
                                    {row.isFi ? (
                                      <span className="rounded-full bg-teal-100 px-1.5 py-0.5 text-[9px] font-semibold text-teal-700 dark:bg-teal-900/30 dark:text-teal-400">
                                        FI ✓
                                      </span>
                                    ) : row.year === results.fiYear ? (
                                      <span className="rounded-full bg-primary-100 px-1.5 py-0.5 text-[9px] font-semibold text-primary-700 dark:bg-primary-900/30 dark:text-primary-400">
                                        FI!
                                      </span>
                                    ) : (
                                      <span className="text-gray-300">—</span>
                                    )}
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                      {results.projection.length > results.yearsToRetire + 5 && (
                        <div className="border-t border-gray-100 px-3 py-1.5 text-center dark:border-gray-800">
                          <span className="text-[10px] text-gray-400">
                            First {results.yearsToRetire + 5} of {results.projection.length} years
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
