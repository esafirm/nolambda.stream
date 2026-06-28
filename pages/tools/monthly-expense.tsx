import React, { useState, useRef, useEffect } from 'react'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'

type Mode = 'select' | 'import' | 'qna' | 'results'

type ExpenseEntry = {
  category: string
  amount: number
  group: string
}

type Question = {
  id: string
  subcategory: string
  group: string
  question: string
}

type ChatMessage = {
  role: 'assistant' | 'user'
  text: string
}

type QnaPhase = 'greeting' | 'questioning' | 'grill-prompt' | 'grilling' | 'done'

const formatIDR = (num: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num)

const formatNum = (num: number) => new Intl.NumberFormat('id-ID').format(num)

function parseDecimalStr(s: string): number {
  if (s.includes(',')) {
    return parseFloat(s.replace(/\./g, '').replace(',', '.')) || 0
  }
  if (/\.\d{1,2}$/.test(s)) {
    return parseFloat(s) || 0
  }
  return parseFloat(s.replace(/\./g, '')) || 0
}

function parseIndonesianNumber(val: string): number {
  let s = val.trim()
  s = s.replace(/^[Rr][Pp]\s*/, '').trim()
  if (!s) return 0

  let multiplier = 1
  const suffixMatch = s.match(/\s*(miliar|milyar|m|juta|jt|ribu|rb|k)\s*$/i)
  if (suffixMatch) {
    const sfx = suffixMatch[1].toLowerCase()
    if (sfx === 'miliar' || sfx === 'milyar' || sfx === 'm') {
      multiplier = 1_000_000_000
    } else if (sfx === 'juta' || sfx === 'jt') {
      multiplier = 1_000_000
    } else if (sfx === 'ribu' || sfx === 'rb' || sfx === 'k') {
      multiplier = 1_000
    }
    s = s.slice(0, suffixMatch.index).trim()
  }

  s = s.replace(/\s+/g, '')
  if (!s) return 0

  return Math.round(parseDecimalStr(s) * multiplier)
}

function evalMathExpression(val: string): number {
  let s = val.trim()
  if (!s) return 0

  s = s.replace(/\s*[Rr][Pp]\s*/g, ' ').trim()

  s = s.replace(/([\d.,]+)\s*(miliar|milyar|m|juta|jt|ribu|rb|k)\b/gi, (_m, num, suffix) => {
    const sfx = suffix.toLowerCase()
    let mult = 1
    if (sfx === 'miliar' || sfx === 'milyar' || sfx === 'm') mult = 1_000_000_000
    else if (sfx === 'juta' || sfx === 'jt') mult = 1_000_000
    else if (sfx === 'ribu' || sfx === 'rb' || sfx === 'k') mult = 1_000
    return String(Math.round(parseDecimalStr(num) * mult))
  })

  s = s.replace(/([\d.,]+)/g, (_m, num) => String(parseDecimalStr(num)))
  s = s.replace(/[^\d+\-*/().\s]/g, '')

  if (!s) return 0

  try {
    return Math.round(new Function('return (' + s + ')')())
  } catch {
    return 0
  }
}

function evalAnswer(val: string): { amount: number; isYearly: boolean } {
  const lower = val.toLowerCase()
  const hasYearlyKeyword = /\b(tahun|tahunan|yearly|annual|annually|pertahun|setahun)\b/.test(lower)
  const hasDivision = /\/\s*\d/.test(val)

  const expr = val.replace(
    /\b(tahun|tahunan|yearly|annual|annually|pertahun|setahun|bulan|bulanan|monthly|month)\b/gi,
    ''
  )

  const amount = evalMathExpression(expr)

  return {
    amount: hasYearlyKeyword && !hasDivision ? Math.round(amount / 12) : amount,
    isYearly: hasYearlyKeyword && !hasDivision,
  }
}

const CATEGORY_GROUPS = [
  { key: 'Housing', label: 'Housing', color: 'bg-teal-500' },
  { key: 'Food', label: 'Food & Dining', color: 'bg-emerald-500' },
  { key: 'Transport', label: 'Transportation', color: 'bg-blue-500' },
  { key: 'Insurance', label: 'Insurance', color: 'bg-amber-500' },
  { key: 'Debt', label: 'Debt', color: 'bg-rose-500' },
  { key: 'Lifestyle', label: 'Lifestyle', color: 'bg-violet-500' },
  { key: 'Savings', label: 'Savings', color: 'bg-indigo-500' },
  { key: 'Health', label: 'Health', color: 'bg-pink-500' },
  { key: 'Other', label: 'Other', color: 'bg-gray-500' },
]

const PREDEFINED_QUESTIONS: Question[] = [
  {
    id: 'rent',
    subcategory: 'Rent',
    group: 'Housing',
    question: 'How much do you pay for rent or mortgage each month?',
  },
  {
    id: 'utilities',
    subcategory: 'Utilities',
    group: 'Housing',
    question: 'How much for utilities (electricity, water, gas) per month?',
  },
  {
    id: 'internet',
    subcategory: 'Internet',
    group: 'Housing',
    question: 'How much for internet and phone bills per month?',
  },
  {
    id: 'groceries',
    subcategory: 'Groceries',
    group: 'Food',
    question: 'How much do you spend on groceries per month?',
  },
  {
    id: 'eatingOut',
    subcategory: 'Eating Out',
    group: 'Food',
    question: 'How much do you spend eating out per month?',
  },
  {
    id: 'coffee',
    subcategory: 'Coffee',
    group: 'Food',
    question: 'How much for coffee, beverages, or snacks per month?',
  },
  {
    id: 'fuel',
    subcategory: 'Fuel',
    group: 'Transport',
    question: 'How much for fuel or public transit per month?',
  },
  {
    id: 'parking',
    subcategory: 'Parking',
    group: 'Transport',
    question: 'How much for parking or tolls per month?',
  },
  {
    id: 'rides',
    subcategory: 'Ride Share',
    group: 'Transport',
    question: 'How much for ride-sharing or taxis per month?',
  },
  {
    id: 'healthInsurance',
    subcategory: 'Health Insurance',
    group: 'Insurance',
    question: 'How much for health insurance per month?',
  },
  {
    id: 'lifeInsurance',
    subcategory: 'Life Insurance',
    group: 'Insurance',
    question: 'How much for life or other insurance per month?',
  },
  {
    id: 'debt',
    subcategory: 'Debt',
    group: 'Debt',
    question: 'How much do you pay toward credit card or loan debt per month?',
  },
  {
    id: 'entertainment',
    subcategory: 'Entertainment',
    group: 'Lifestyle',
    question: 'How much for entertainment (movies, concerts, hobbies) per month?',
  },
  {
    id: 'shopping',
    subcategory: 'Shopping',
    group: 'Lifestyle',
    question: 'How much for shopping (clothes, gadgets, etc) per month?',
  },
  {
    id: 'subscriptions',
    subcategory: 'Subscriptions',
    group: 'Lifestyle',
    question: 'How much for subscriptions (Netflix, Spotify, cloud, etc) per month?',
  },
  {
    id: 'savings',
    subcategory: 'Savings',
    group: 'Savings',
    question: 'How much do you save or invest per month?',
  },
  {
    id: 'health',
    subcategory: 'Health',
    group: 'Health',
    question: 'How much for gym, medical, or wellness per month?',
  },
  {
    id: 'misc',
    subcategory: 'Other',
    group: 'Other',
    question: 'Any other expenses not covered? How much per month?',
  },
]

function assignGroup(category: string): string {
  const lower = category.toLowerCase()
  for (const q of PREDEFINED_QUESTIONS) {
    if (lower.includes(q.subcategory.toLowerCase())) return q.group
  }
  return 'Other'
}

function getActiveQuestions(expenses: ExpenseEntry[]): Question[] {
  const covered = new Set(expenses.map((e) => e.category.toLowerCase()))
  return PREDEFINED_QUESTIONS.filter(
    (q) => !Array.from(covered).some((c) => c.includes(q.subcategory.toLowerCase()))
  )
}

function ModeCard({
  icon,
  title,
  desc,
  badge,
  onClick,
}: {
  icon: React.ReactNode
  title: string
  desc: string
  badge: string
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center rounded-2xl border-2 border-gray-200 bg-white p-8 text-center transition-all hover:-translate-y-1 hover:border-primary-500 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900 dark:hover:border-primary-500"
    >
      <div className="mb-4 rounded-xl bg-primary-50 p-4 text-primary-500 dark:bg-gray-800">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{desc}</p>
      <span className="mt-4 rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
        {badge}
      </span>
    </button>
  )
}

function CategoryBar({
  label,
  amount,
  total,
  color,
  index,
}: {
  label: string
  amount: number
  total: number
  color: string
  index: number
}) {
  const pct = total > 0 ? (amount / total) * 100 : 0
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="font-medium text-gray-700 dark:text-gray-300">{label}</span>
        <span className="text-gray-500 dark:text-gray-400">
          {formatIDR(amount)}
          <span className="ml-2 text-xs text-gray-400">({pct.toFixed(1)}%)</span>
        </span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
        <div
          className={`h-full rounded-full transition-all duration-700 ${color}`}
          style={{ width: `${pct}%`, transitionDelay: `${index * 100}ms` }}
        />
      </div>
    </div>
  )
}

export default function MonthlyExpense() {
  const [mode, setMode] = useState<Mode>('select')
  const [expenses, setExpenses] = useState<ExpenseEntry[]>(() => {
    if (typeof window === 'undefined') return []
    try {
      const saved = localStorage.getItem('monthly-expenses')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })
  const [importText, setImportText] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analyzeError, setAnalyzeError] = useState('')
  const [parsedExpenses, setParsedExpenses] = useState<
    { category: string; amount: number }[] | null
  >(null)

  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputValue, setInputValue] = useState('')
  const [qnaPhase, setQnaPhase] = useState<QnaPhase>('greeting')
  const [currentQIndex, setCurrentQIndex] = useState(0)
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([])
  const [isGrilling, setIsGrilling] = useState(false)
  const [grillQuestions, setGrillQuestions] = useState<Question[]>([])
  const [grillQIndex, setGrillQIndex] = useState(0)
  const [isEditingExpenses, setIsEditingExpenses] = useState(false)

  const chatEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const lastAnswerAddedRef = useRef(false)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (qnaPhase === 'questioning' || qnaPhase === 'grilling') {
      inputRef.current?.focus()
    }
  }, [qnaPhase, currentQIndex, grillQIndex])

  useEffect(() => {
    try {
      localStorage.setItem('monthly-expenses', JSON.stringify(expenses))
    } catch {
      /* empty */
    }
  }, [expenses])

  function startImport() {
    setMode('import')
    setAnalyzeError('')
    setParsedExpenses(null)
    setImportText('')
  }

  function startQna() {
    setMode('qna')
    const qs = getActiveQuestions(expenses)
    setActiveQuestions(qs)
    setQnaPhase('questioning')
    setCurrentQIndex(0)

    const msgs: ChatMessage[] = [
      {
        role: 'assistant',
        text: "Let's figure out your monthly expenses! I'll ask you a few questions. Just type the amount or say 'skip' to pass.",
      },
    ]
    if (qs.length > 0) {
      msgs.push({ role: 'assistant', text: qs[0].question })
    } else {
      msgs.push({
        role: 'assistant',
        text: "It looks like we already have all the data we need from your import. Want me to do a deeper analysis? Click 'Grill me' below or skip to results.",
      })
      setQnaPhase('grill-prompt')
    }
    setMessages(msgs)
  }

  async function handleAnalyze() {
    if (!importText.trim()) return
    setIsAnalyzing(true)
    setAnalyzeError('')

    try {
      const res = await fetch('/api/ai/expense', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: importText.trim(), type: 'parse' }),
      })

      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || 'Failed to analyze')
      }

      const data = await res.json()

      if (data.error) throw new Error(data.error)

      if (Array.isArray(data) && data.length > 0) {
        setParsedExpenses(
          data.map((d: { category: string; amount: number }) => ({
            category: d.category,
            amount: Math.round(d.amount),
          }))
        )
      } else {
        setAnalyzeError('Could not parse the data. Try a different format.')
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong'
      setAnalyzeError(message)
    } finally {
      setIsAnalyzing(false)
    }
  }

  function handleImportConfirm() {
    if (!parsedExpenses) return
    const newExpenses: ExpenseEntry[] = parsedExpenses.map((e) => ({
      category: e.category,
      amount: e.amount,
      group: assignGroup(e.category),
    }))
    setExpenses((prev) => [...prev, ...newExpenses])
    startQna()
  }

  function handleParsedEdit(index: number, value: string) {
    if (!parsedExpenses) return
    const next = [...parsedExpenses]
    next[index] = { ...next[index], amount: parseIndonesianNumber(value) }
    setParsedExpenses(next)
  }

  function handleChatSubmit(e: React.FormEvent) {
    e.preventDefault()
    const val = inputValue.trim()
    if (!val) return
    setInputValue('')

    if (qnaPhase === 'questioning') {
      handleQuestionAnswer(val)
    } else if (qnaPhase === 'grilling') {
      handleGrillAnswer(val)
    }
  }

  function handleQuestionAnswer(val: string) {
    const q = activeQuestions[currentQIndex]
    const isSkip = val.toLowerCase() === 'skip'
    const { amount: num, isYearly } = isSkip ? { amount: 0, isYearly: false } : evalAnswer(val)

    lastAnswerAddedRef.current = num > 0
    setMessages((prev) => [
      ...prev,
      {
        role: 'user',
        text: isSkip ? 'Skipped' : formatIDR(num) + (isYearly ? '/bln' : ''),
      },
    ])

    if (num > 0) {
      setExpenses((prev) => [...prev, { category: q.subcategory, amount: num, group: q.group }])
    }

    const nextIndex = currentQIndex + 1
    if (nextIndex < activeQuestions.length) {
      setCurrentQIndex(nextIndex)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', text: activeQuestions[nextIndex].question },
        ])
      }, 300)
    } else {
      setQnaPhase('grill-prompt')
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            text: "Great, that's all my questions! Want me to analyze your spending and ask some personalized follow-up questions?",
          },
        ])
      }, 300)
    }
  }

  function handleGrillAnswer(val: string) {
    const q = grillQuestions[grillQIndex]
    const isSkip = val.toLowerCase() === 'skip'
    const { amount: num, isYearly } = isSkip ? { amount: 0, isYearly: false } : evalAnswer(val)

    lastAnswerAddedRef.current = num > 0
    setMessages((prev) => [
      ...prev,
      {
        role: 'user',
        text: isSkip ? 'Skipped' : formatIDR(num) + (isYearly ? '/bln' : ''),
      },
    ])

    if (num > 0) {
      setExpenses((prev) => [...prev, { category: q.subcategory, amount: num, group: q.group }])
    }

    const nextIndex = grillQIndex + 1
    if (nextIndex < grillQuestions.length) {
      setGrillQIndex(nextIndex)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', text: grillQuestions[nextIndex].question },
        ])
      }, 300)
    } else {
      setQnaPhase('done')
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', text: "Excellent! Here's your complete expense breakdown." },
        ])
      }, 300)
    }
  }

  function handleEditLastAnswer() {
    setMessages((prev) => {
      for (let i = prev.length - 1; i >= 0; i--) {
        if (prev[i].role === 'user') return prev.slice(0, i)
      }
      return prev
    })

    if (lastAnswerAddedRef.current) {
      setExpenses((prev) => prev.slice(0, -1))
      lastAnswerAddedRef.current = false
    }

    if (qnaPhase === 'questioning') {
      setCurrentQIndex((prev) => Math.max(0, prev - 1))
    } else if (qnaPhase === 'grilling') {
      setGrillQIndex((prev) => Math.max(0, prev - 1))
    }
  }

  async function handleGrillMe() {
    setIsGrilling(true)
    const expenseSummary = expenses.map((e) => `${e.category}: ${formatIDR(e.amount)}`).join(', ')

    try {
      const res = await fetch('/api/ai/expense', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: expenseSummary, type: 'grill' }),
      })

      if (!res.ok) throw new Error('Failed')

      const data = await res.json()
      const qs = data.questions

      if (Array.isArray(qs) && qs.length > 0) {
        const mapped: Question[] = qs.map(
          (q: { question: string; context?: string }, i: number) => ({
            id: `grill-${i}`,
            subcategory: q.context || 'Other',
            group: q.context || 'Other',
            question: q.question,
          })
        )

        setGrillQuestions(mapped)
        setGrillQIndex(0)
        setQnaPhase('grilling')

        if (mode === 'results') {
          setMode('qna')
          setMessages([
            { role: 'assistant', text: 'Let me ask you a few personalized follow-up questions:' },
            { role: 'assistant', text: mapped[0].question },
          ])
        } else {
          setMessages((prev) => [
            ...prev,
            { role: 'assistant', text: 'Great questions! Let me ask:' },
            { role: 'assistant', text: mapped[0].question },
          ])
        }
      } else {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', text: "Nothing more to ask! Here's your expense breakdown." },
        ])
        setQnaPhase('done')
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: "Couldn't generate questions. Let's move to results!" },
      ])
      setQnaPhase('done')
    } finally {
      setIsGrilling(false)
    }
  }

  function calcGroupTotals() {
    const grouped: Record<string, number> = {}
    for (const e of expenses) {
      const g = assignGroup(e.category)
      grouped[g] = (grouped[g] || 0) + e.amount
    }
    return CATEGORY_GROUPS.filter((g) => g.key !== 'Savings')
      .map((g) => ({
        ...g,
        amount: grouped[g.key] || 0,
      }))
      .filter((g) => g.amount > 0)
  }

  const groupTotals = calcGroupTotals()
  const grandTotal = groupTotals.reduce((s, g) => s + g.amount, 0)
  const savingsAmount = expenses
    .filter((e) => assignGroup(e.category) === 'Savings')
    .reduce((s, e) => s + e.amount, 0)
  const hasMissingCategories = PREDEFINED_QUESTIONS.filter((q) => q.group !== 'Savings').some(
    (q) =>
      !expenses.some(
        (e) => e.category.toLowerCase() === q.subcategory.toLowerCase() && e.amount > 0
      )
  )

  function handleExpenseAmountChange(index: number, value: string) {
    const amount = parseIndonesianNumber(value)
    setExpenses((prev) => {
      const next = [...prev]
      next[index] = { ...next[index], amount }
      return next
    })
  }

  function handleDeleteExpense(index: number) {
    setExpenses((prev) => prev.filter((_, i) => i !== index))
  }

  function handleReset() {
    setMode('select')
    setExpenses([])
    setMessages([])
    setParsedExpenses(null)
    setImportText('')
    setAnalyzeError('')
    setQnaPhase('greeting')
    setCurrentQIndex(0)
    setGrillQuestions([])
    setGrillQIndex(0)
    setIsGrilling(false)
    setIsEditingExpenses(false)
    lastAnswerAddedRef.current = false
    try {
      localStorage.removeItem('monthly-expenses')
    } catch {
      /* empty */
    }
  }

  const lastUserMsgIndex = (() => {
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].role === 'user') return i
    }
    return -1
  })()

  return (
    <>
      <PageSEO
        title={`Monthly Expense Calculator - ${siteMetadata.author}`}
        description="Track and analyze your monthly expenses. Import from spreadsheets or answer a few questions to get a complete breakdown of your spending."
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-6 pt-6 md:space-y-5">
          <div className="flex items-center gap-3">
            {mode !== 'select' && (
              <button
                onClick={() => setMode('select')}
                className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
            <div>
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-13">
                Monthly Expense Calculator
              </h1>
              <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
                {mode === 'select' && 'Choose how you want to enter your expenses.'}
                {mode === 'import' && 'Paste your expense data for AI analysis.'}
                {mode === 'qna' && 'Answer a few questions about your spending.'}
                {mode === 'results' && 'Your monthly spending at a glance.'}
              </p>
            </div>
          </div>
        </div>

        <div className="py-8">
          {mode === 'select' && (
            <div className="mx-auto max-w-2xl">
              {expenses.length > 0 && (
                <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                        Previous Session
                      </p>
                      <p className="mt-1 text-2xl font-extrabold text-gray-900 dark:text-gray-100">
                        {formatIDR(grandTotal)}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => setMode('results')}
                        className="rounded-xl bg-primary-600 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-primary-700"
                      >
                        View Details
                      </button>
                      <button
                        onClick={startImport}
                        className="rounded-xl border border-gray-300 px-5 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gray-50 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-800"
                      >
                        Add More
                      </button>
                      <button
                        onClick={handleReset}
                        className="text-xs font-medium text-gray-400 underline transition-colors hover:text-gray-600 dark:hover:text-gray-300"
                      >
                        Start Fresh
                      </button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {groupTotals.map((g, i) => (
                      <CategoryBar
                        key={g.key}
                        label={g.label}
                        amount={g.amount}
                        total={grandTotal}
                        color={g.color}
                        index={i}
                      />
                    ))}
                  </div>
                  <div className="mt-3 text-right text-xs text-gray-400">
                    {expenses.length} item{expenses.length > 1 ? 's' : ''}
                  </div>
                </div>
              )}
              <div className="grid gap-6 sm:grid-cols-2">
                <ModeCard
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                  }
                  title="Import Data"
                  desc="Paste your expense records from Excel, CSV, or notes. AI will parse and organize them."
                  badge="Paste & Analyze"
                  onClick={startImport}
                />
                <ModeCard
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                      />
                    </svg>
                  }
                  title="Chat with me"
                  desc="Answer a few guided questions about your spending categories one at a time."
                  badge="Interactive Q&A"
                  onClick={startQna}
                />
              </div>
            </div>
          )}

          {mode === 'import' && (
            <div className="mx-auto max-w-2xl space-y-6">
              {!parsedExpenses ? (
                <div className="space-y-4">
                  <textarea
                    value={importText}
                    onChange={(e) => setImportText(e.target.value)}
                    placeholder={`Paste your expense data here...\n\nExample:\nRent: Rp 5.000.000\nElectricity: Rp 500.000\nGroceries: Rp 1.500.000\nTransport: Rp 1.200.000\nInsurance: Rp 400.000\n\nTip: supports Indonesian notation (76jt, 500rb, 1,5jt)`}
                    rows={10}
                    className="block w-full rounded-xl border border-gray-300 bg-white p-4 text-sm text-gray-900 transition-all placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:focus:border-primary-500"
                  />
                  {analyzeError && <p className="text-sm text-red-500">{analyzeError}</p>}
                  <button
                    onClick={handleAnalyze}
                    disabled={isAnalyzing || !importText.trim()}
                    className="rounded-xl bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isAnalyzing ? 'Analyzing...' : 'Analyze with AI'}
                  </button>
                  <p className="text-xs leading-relaxed text-gray-400">
                    Supports: Excel/CSV copy-paste, structured notes, Indonesian format (Rp
                    5.000.000). AI extracts categories and normalizes to monthly amounts.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
                    <div className="border-b border-gray-200 bg-gray-50 px-4 py-2 dark:border-gray-700 dark:bg-gray-800">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Parsed Expenses
                      </span>
                    </div>
                    <div className="divide-y divide-gray-100 dark:divide-gray-800">
                      {parsedExpenses.map((e, i) => (
                        <div key={i} className="flex items-center gap-3 px-4 py-3">
                          <span className="min-w-0 flex-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                            {e.category}
                          </span>
                          <div className="relative w-40">
                            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 text-xs text-gray-400">
                              Rp
                            </span>
                            <input
                              type="text"
                              inputMode="numeric"
                              value={formatNum(e.amount)}
                              onChange={(e) => handleParsedEdit(i, e.target.value)}
                              className="block w-full rounded-lg border border-gray-200 bg-white py-1.5 pl-8 pr-2.5 text-right text-sm text-gray-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={handleImportConfirm}
                      className="rounded-xl bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-700"
                    >
                      Looks good — Continue
                    </button>
                    <button
                      onClick={() => setParsedExpenses(null)}
                      className="rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-600 transition-all hover:bg-gray-50 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-800"
                    >
                      Re-analyze
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {mode === 'qna' && (
            <div className="mx-auto max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                {(qnaPhase === 'questioning' || qnaPhase === 'grilling') && (
                  <>
                    <span className="text-xs font-medium text-gray-400">
                      {qnaPhase === 'questioning'
                        ? `Question ${Math.min(currentQIndex + 1, activeQuestions.length)} of ${
                            activeQuestions.length
                          }`
                        : `Follow-up ${grillQIndex + 1} of ${grillQuestions.length}`}
                    </span>
                    <div className="h-1 flex-1 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                      <div
                        className="h-full rounded-full bg-primary-500 transition-all duration-300"
                        style={{
                          width:
                            qnaPhase === 'questioning'
                              ? `${(currentQIndex / Math.max(activeQuestions.length, 1)) * 100}%`
                              : `${(grillQIndex / Math.max(grillQuestions.length, 1)) * 100}%`,
                        }}
                      />
                    </div>
                  </>
                )}
                {qnaPhase === 'grill-prompt' && (
                  <span className="text-xs font-medium text-amber-500">Grill Mode Available</span>
                )}
                {qnaPhase === 'done' && (
                  <span className="text-xs font-medium text-emerald-500">Complete</span>
                )}
              </div>

              <div className="mb-4 max-h-[420px] space-y-3 overflow-y-auto rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
                {messages.map((msg, i) => {
                  const showAvatar = i === 0 || messages[i - 1]?.role !== msg.role
                  return (
                    <div
                      key={i}
                      className={`flex items-end gap-2 ${
                        msg.role === 'user' ? 'flex-row-reverse' : ''
                      }`}
                    >
                      {showAvatar && (
                        <div
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                            msg.role === 'assistant'
                              ? 'bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400'
                              : 'bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
                          }`}
                        >
                          {msg.role === 'assistant' ? 'AI' : 'U'}
                        </div>
                      )}
                      <div
                        className={`flex items-center gap-1.5 max-w-[75%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                          msg.role === 'user'
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                        }`}
                        style={{
                          borderBottomLeftRadius:
                            msg.role === 'assistant' && showAvatar ? '4px' : undefined,
                          borderBottomRightRadius:
                            msg.role === 'user' && showAvatar ? '4px' : undefined,
                        }}
                      >
                        <span className="flex-1">{msg.text}</span>
                        {msg.role === 'user' &&
                          i === lastUserMsgIndex &&
                          (qnaPhase === 'questioning' || qnaPhase === 'grilling') && (
                            <button
                              onClick={handleEditLastAnswer}
                              className="shrink-0 rounded-md p-1 text-white/60 transition-colors hover:bg-white/20 hover:text-white"
                              title="Edit answer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3.5 w-3.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                              </svg>
                            </button>
                          )}
                      </div>
                    </div>
                  )
                })}
                <div ref={chatEndRef} />
              </div>

              {(qnaPhase === 'questioning' || qnaPhase === 'grilling') && (
                <form onSubmit={handleChatSubmit} className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    inputMode="numeric"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="e.g. 5jt, 500rb, 46jt/12, 60jt/tahun, or 'skip'..."
                    className="block flex-1 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim()}
                    className="rounded-xl bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-700 disabled:opacity-50"
                  >
                    Send
                  </button>
                </form>
              )}

              {qnaPhase === 'grill-prompt' && (
                <div className="flex gap-3">
                  <button
                    onClick={handleGrillMe}
                    disabled={isGrilling}
                    className="rounded-xl bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-700 disabled:opacity-50"
                  >
                    {isGrilling ? 'Thinking...' : 'Grill me'}
                  </button>
                  <button
                    onClick={() => {
                      setQnaPhase('done')
                      setMessages((prev) => [
                        ...prev,
                        { role: 'assistant', text: "Alright! Here's your expense breakdown." },
                      ])
                    }}
                    className="rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-600 transition-all hover:bg-gray-50 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-800"
                  >
                    Skip — See Results
                  </button>
                </div>
              )}

              {qnaPhase === 'done' && (
                <button
                  onClick={() => setMode('results')}
                  className="rounded-xl bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-700"
                >
                  View My Expense Breakdown
                </button>
              )}
            </div>
          )}

          {mode === 'results' && (
            <div className="mx-auto max-w-2xl space-y-8">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-900">
                <p className="text-sm font-medium uppercase tracking-wider text-gray-400">
                  Total Monthly Expenses
                </p>
                <p className="mt-2 text-4xl font-extrabold text-gray-900 dark:text-gray-100">
                  {formatIDR(grandTotal)}
                </p>
              </div>

              {savingsAmount > 0 && (
                <div className="rounded-xl border border-dashed border-indigo-200 bg-indigo-50/50 p-5 text-center dark:border-indigo-900 dark:bg-indigo-900/20">
                  <p className="text-xs font-medium uppercase tracking-wider text-indigo-400">
                    Savings & Investment (not an expense)
                  </p>
                  <p className="mt-1 text-xl font-bold text-indigo-600 dark:text-indigo-400">
                    {formatIDR(savingsAmount)}
                  </p>
                </div>
              )}

              {groupTotals.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    Spending by Category
                  </h3>
                  {groupTotals.map((g, i) => (
                    <CategoryBar
                      key={g.key}
                      label={g.label}
                      amount={g.amount}
                      total={grandTotal}
                      color={g.color}
                      index={i}
                    />
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                {hasMissingCategories && (
                  <button
                    onClick={() => {
                      const qs = getActiveQuestions(expenses)
                      setActiveQuestions(qs)
                      setMessages([
                        {
                          role: 'assistant',
                          text: "Let's fill in the gaps! Answer the remaining questions.",
                        },
                        { role: 'assistant', text: qs[0]?.question || 'All done!' },
                      ])
                      setCurrentQIndex(0)
                      setQnaPhase('questioning')
                      setMode('qna')
                    }}
                    className="rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-600 transition-all hover:bg-gray-50 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-800"
                  >
                    Fill Missing Categories
                  </button>
                )}
                <button
                  onClick={() => {
                    setMode('qna')
                    handleGrillMe()
                  }}
                  disabled={isGrilling}
                  className="rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-600 transition-all hover:bg-gray-50 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 disabled:opacity-50"
                >
                  {isGrilling ? 'Thinking...' : 'AI Grill Mode'}
                </button>
                <Link
                  href="/tools/fire-calculator"
                  className="rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-600 transition-all hover:bg-gray-50 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-800"
                >
                  Use in FIRE Calculator →
                </Link>
              </div>

              <div className="rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-700">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    All Expenses
                  </h3>
                  <button
                    onClick={() => setIsEditingExpenses(!isEditingExpenses)}
                    className="rounded-lg px-3 py-1.5 text-xs font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                  >
                    {isEditingExpenses ? 'Done' : 'Edit'}
                  </button>
                </div>
                <div className="divide-y divide-gray-100 dark:divide-gray-800">
                  {expenses.length === 0 && (
                    <p className="px-4 py-6 text-center text-sm text-gray-400">No expenses yet.</p>
                  )}
                  {expenses.map((e, i) => {
                    const groupColor =
                      CATEGORY_GROUPS.find((g) => g.key === e.group)?.color ?? 'bg-gray-500'
                    return (
                      <div key={i} className="flex items-center gap-3 px-4 py-3">
                        <span className={`inline-block h-7 w-1 rounded-full ${groupColor}`} />
                        <span className="min-w-0 flex-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                          {e.category}
                        </span>
                        {isEditingExpenses ? (
                          <>
                            <div className="relative w-36">
                              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 text-xs text-gray-400">
                                Rp
                              </span>
                              <input
                                type="text"
                                inputMode="numeric"
                                value={formatNum(e.amount)}
                                onChange={(ev) => handleExpenseAmountChange(i, ev.target.value)}
                                className="block w-full rounded-lg border border-gray-200 bg-white py-1.5 pl-8 pr-2.5 text-right text-sm text-gray-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                              />
                            </div>
                            <button
                              onClick={() => handleDeleteExpense(i)}
                              className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/20"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                          </>
                        ) : (
                          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                            {formatIDR(e.amount)}
                          </span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
