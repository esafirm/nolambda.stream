import React, { useState, useRef, useCallback, useEffect } from 'react'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import portfolioData from '@/data/porto-progress.json'

const HIDDEN = '••••••'

type PortfolioKey = 'combined' | 'stockbit' | 'bibit' | 'gotrade'
type Tone = 'up' | 'down' | 'neutral'

type Platform = { key: string; label: string; desc: string; pl: number }
type StockbitHolding = { symbol: string; pl: number; redacted: boolean }
type BibitAllocation = { name: string; percent: number; color: string }
type GoTradePosition = { symbol: string; name: string; pl: number; redacted: boolean }
type Snapshot = {
  progressToRE: number
  platforms: Platform[]
  stockbit: { portfolioPL?: number; holdings: StockbitHolding[] }
  bibit: { value?: number; target?: number; allocations: BibitAllocation[] }
  gotrade: { portfolioPL?: number; positions: GoTradePosition[] }
}

function toneFromPL(pl: number): Tone {
  return pl > 0 ? 'up' : pl < 0 ? 'down' : 'neutral'
}

function formatPL(pl: number): string {
  return `${pl > 0 ? '+' : ''}${pl.toFixed(1)}%`
}

const ALLOCATION_COLORS: Record<string, { bar: string; text: string }> = {
  emerald: { bar: 'bg-emerald-500', text: 'text-emerald-600 dark:text-emerald-400' },
  sky: { bar: 'bg-sky-500', text: 'text-sky-600 dark:text-sky-400' },
  purple: { bar: 'bg-purple-500', text: 'text-purple-600 dark:text-purple-400' },
}

function HiddenValue({ className = '' }: { className?: string }) {
  return (
    <span
      className={`select-none tracking-widest text-inherit ${className}`}
      aria-label="Private value (hidden)"
    >
      {HIDDEN}
    </span>
  )
}

function DeltaBadge({ pl, variant = 'default' }: { pl: number; variant?: 'default' | 'solid' }) {
  const tone = toneFromPL(pl)
  const toneClasses =
    variant === 'solid'
      ? tone === 'up'
        ? 'bg-white text-green-600'
        : tone === 'down'
        ? 'bg-white text-red-600'
        : 'bg-white text-gray-500'
      : tone === 'up'
      ? 'bg-green-500/15 text-green-500'
      : tone === 'down'
      ? 'bg-red-500/15 text-red-500'
      : 'bg-gray-500/15 text-gray-400'
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${toneClasses}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        {tone === 'up' ? (
          <path
            fillRule="evenodd"
            d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586l3.293-3.293A1 1 0 0012 7z"
            clipRule="evenodd"
          />
        ) : tone === 'down' ? (
          <path
            fillRule="evenodd"
            d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v1.586l-4.293-4.293a1 1 0 00-1.414 0L8 8.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414l3.293 3.293A1 1 0 0012 13z"
            clipRule="evenodd"
          />
        ) : (
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clipRule="evenodd"
          />
        )}
      </svg>
      {formatPL(pl)}
    </span>
  )
}

function StatPL({ pl }: { pl?: number }) {
  if (pl === undefined) return <HiddenValue />
  const tone = toneFromPL(pl)
  const color =
    tone === 'up' ? 'text-emerald-400' : tone === 'down' ? 'text-red-500' : 'text-gray-400'
  return <span className={color}>{formatPL(pl)}</span>
}

function RedactedText({
  redacted,
  children,
  className = '',
  barClassName = 'h-3.5 w-16',
}: {
  redacted?: boolean
  children: React.ReactNode
  className?: string
  barClassName?: string
}) {
  if (redacted) {
    return (
      <span
        className={`inline-block select-none rounded bg-gray-300 align-middle dark:bg-gray-700 ${barClassName}`}
        aria-label="Redacted"
      />
    )
  }
  return <span className={className}>{children}</span>
}

function StockbitCard({
  tabs,
  portfolioPL,
  holdings,
}: {
  tabs: string[]
  portfolioPL?: number
  holdings: StockbitHolding[]
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-black text-white shadow-xl ring-1 ring-white/10">
      <div className="flex items-center justify-between px-5 pt-5">
        <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 ring-1 ring-white/10" />
        <div className="text-xl font-bold tracking-tight">Stockbit</div>
        <div className="flex items-center gap-4 text-gray-400">
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
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M7 9l5-5m0 0l5 5m-5-5v12"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>

      <div className="mt-5 flex px-5 text-xs font-bold tracking-widest text-gray-500">
        {tabs.map((t, i) => (
          <div key={t} className={`pb-3 ${i > 0 ? 'ml-8' : ''}`}>
            <span className={i === 0 ? 'text-emerald-400' : ''}>{t}</span>
            {i === 0 && <div className="mt-2 h-0.5 w-full rounded-full bg-emerald-400" />}
          </div>
        ))}
      </div>
      <div className="h-px w-full bg-white/10" />

      <div className="grid grid-cols-3 gap-y-6 px-5 py-6">
        <div>
          <div className="text-lg font-bold">
            <HiddenValue />
          </div>
          <div className="mt-1 text-xs text-gray-400">Trading Balance</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold">
            <HiddenValue />
          </div>
          <div className="mt-1 text-xs text-gray-400">Invested</div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold">
            <HiddenValue />
          </div>
          <div className="mt-1 text-xs text-gray-400">Open</div>
        </div>
        <div>
          <div className="text-lg font-bold">
            <StatPL pl={portfolioPL} />
          </div>
          <div className="mt-1 text-xs text-gray-400">Porto PnL</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-red-500">
            <HiddenValue />
          </div>
          <div className="mt-1 text-xs text-gray-400">Loss</div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold">
            <HiddenValue />
          </div>
          <div className="mt-1 text-xs text-gray-400">Total Equity</div>
        </div>
      </div>

      <div className="divide-y divide-white/10 border-t border-white/10">
        {holdings.map((m, i) => (
          <div key={`${m.symbol}-${i}`} className="flex items-center justify-between px-5 py-5">
            <div>
              <div className="text-base font-bold">
                <RedactedText redacted={m.redacted} barClassName="h-4 w-14 bg-gray-700">
                  {m.symbol}
                </RedactedText>
              </div>
              <div className="mt-1 text-sm text-gray-200">
                <HiddenValue />
              </div>
              <div className="mt-1 text-xs text-gray-500">Invested</div>
            </div>
            <div className="flex items-center gap-3">
              <DeltaBadge pl={m.pl} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function BibitAmount({ value, className = '' }: { value?: number; className?: string }) {
  if (value === undefined) return <HiddenValue className={className} />
  return <span className={className}>{value.toLocaleString('id-ID')}</span>
}

function BibitCard({
  portfolioName,
  value,
  target,
  allocations,
}: {
  portfolioName: string
  value?: number
  target?: number
  allocations: BibitAllocation[]
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="bg-emerald-50 px-5 pb-8 pt-5 dark:bg-emerald-950/30">
        <div className="flex items-center justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <div className="flex items-center gap-2 text-base font-bold text-gray-900 dark:text-gray-100">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </span>
            {portfolioName}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </div>

        <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">Nilai Portofolio</div>
        <div className="mt-1 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Rp <BibitAmount value={value} />
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Keuntungan</div>
            <div className="mt-1 font-semibold text-emerald-600 dark:text-emerald-400">
              Rp <HiddenValue />
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 dark:text-gray-400">Imbal Hasil</div>
            <div className="mt-1 flex items-center justify-end gap-1 font-semibold text-emerald-600 dark:text-emerald-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 3l7 9H3l7-9z" />
              </svg>
              <HiddenValue />
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 pt-5">
        <div className="flex items-center gap-3 rounded-xl border border-gray-100 px-4 py-3 dark:border-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-emerald-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="1" />
          </svg>
          <div>
            <div className="text-xs text-gray-400">Jumlah yang Harus Tercapai</div>
            <div className="text-sm font-bold text-gray-900 dark:text-gray-100">
              Rp
              <BibitAmount value={target} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between border-t border-gray-100 px-5 py-4 dark:border-gray-800">
          <span className="font-bold text-gray-900 dark:text-gray-100">Alokasi Saya</span>
          <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Ubah</span>
        </div>
        <div className="divide-y divide-gray-100 border-t border-gray-100 dark:divide-gray-800 dark:border-gray-800">
          {allocations.map((a) => {
            const colors = ALLOCATION_COLORS[a.color]
            return (
              <div key={a.name} className="flex gap-3 px-5 py-4">
                <div className={`w-1 shrink-0 rounded-full ${colors.bar}`} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900 dark:text-gray-100">{a.name}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Investasi</span>
                    <span className="font-bold text-gray-900 dark:text-gray-100">
                      Rp
                      <HiddenValue />
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-3 text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Alokasi</span>
                    <span className={`font-semibold ${colors.text}`}>{a.percent}%</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                      <div
                        className={`h-full rounded-full ${colors.bar}`}
                        style={{ width: `${a.percent}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function GoTradeCard({
  greetingName,
  portfolioPL,
  positions,
}: {
  greetingName: string
  portfolioPL?: number
  positions: GoTradePosition[]
}) {
  return (
    <div className="overflow-hidden rounded-2xl shadow-xl">
      <div className="relative bg-emerald-400 px-6 pb-10 pt-6 text-center text-white">
        <div className="mt-4 text-xl font-bold">
          Hey {greetingName}! <span aria-hidden>👋</span>
        </div>
        <div className="mt-1 text-base font-medium text-emerald-950/70">Ready to go trade?</div>

        <div className="mt-6 text-sm font-medium text-emerald-950/70">You have</div>
        <div className="mt-1 text-4xl font-extrabold tracking-tight">
          $<HiddenValue />
        </div>

        <div className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-emerald-950">
          <span>Porto PnL</span>
          {portfolioPL === undefined ? (
            <HiddenValue />
          ) : (
            <DeltaBadge pl={portfolioPL} variant="solid" />
          )}
        </div>
      </div>

      <div className="divide-y divide-gray-100 bg-white dark:divide-gray-800 dark:bg-gray-900">
        <div className="px-5 py-3 text-xs font-bold uppercase tracking-widest text-gray-400">
          Positions
        </div>
        {positions.map((o, i) => (
          <div key={`${o.symbol}-${i}`} className="flex items-center justify-between px-5 py-3">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                {o.redacted ? '?' : o.symbol.slice(0, 1)}
              </span>
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold text-gray-900 dark:text-gray-100">
                  <RedactedText redacted={o.redacted} barClassName="h-3.5 w-14">
                    {o.symbol}
                  </RedactedText>
                </div>
                <div className="truncate text-xs text-gray-400">
                  <RedactedText redacted={o.redacted} barClassName="h-3 w-20">
                    {o.name}
                  </RedactedText>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm font-bold text-gray-900 dark:text-gray-100">
                <HiddenValue />
              </div>
              <DeltaBadge pl={o.pl} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CombinedCard({
  platforms,
  progressToRE,
}: {
  platforms: Platform[]
  progressToRE: number
}) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-gray-700 dark:text-gray-300">Progress to RE</span>
          <span className="font-bold text-primary-600 dark:text-primary-400">{progressToRE}%</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className="h-full rounded-full bg-primary-500"
            style={{ width: `${progressToRE}%` }}
          />
        </div>
      </div>

      <div className="mt-6 divide-y divide-gray-100 dark:divide-gray-800">
        {platforms.map((p) => (
          <div key={p.key} className="flex items-center justify-between py-3">
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100">{p.label}</div>
              <div className="text-xs text-gray-400">{p.desc}</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right text-sm font-bold text-gray-900 dark:text-gray-100">
                <HiddenValue />
              </div>
              <DeltaBadge pl={p.pl} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const SNAPSHOTS: Record<string, Snapshot> = portfolioData.snapshots as Record<string, Snapshot>
const TIMELINE: string[] = Object.keys(SNAPSHOTS)

export default function PortfolioProgress() {
  const [active, setActive] = useState<PortfolioKey>('combined')
  const [period, setPeriod] = useState<string>(TIMELINE[0])
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  const snapshot = SNAPSHOTS[period]

  const TABS: { key: PortfolioKey; label: string; desc: string }[] = [
    { key: 'combined', label: 'Combined', desc: 'All platforms' },
    ...snapshot.platforms.map((p) => ({
      key: p.key as PortfolioKey,
      label: p.label,
      desc: p.desc,
    })),
  ]

  const filtered = TIMELINE.filter((t) => t.toLowerCase().includes(query.toLowerCase()))

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const select = (t: string) => {
    setPeriod(t)
    setQuery('')
    setOpen(false)
  }

  return (
    <>
      <PageSEO
        title={`Portfolio Progress - ${siteMetadata.author}`}
        description="A private, visual overview of my investment portfolios across Stockbit, Bibit, and GoTrade. All exact values are hidden."
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                Portfolio Progress
              </h1>
              <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                A privacy-first dashboard of my investments. Exact values are intentionally hidden.
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

        <div className="py-8">
          <div className="mb-8 flex flex-col items-center justify-between gap-4 rounded-xl bg-gray-50 p-4 dark:bg-gray-800 sm:flex-row">
            <div className="flex rounded-lg bg-gray-200 p-1 dark:bg-gray-900">
              {TABS.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setActive(t.key)}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
                    active === t.key
                      ? 'bg-white text-gray-900 shadow-sm dark:bg-gray-800 dark:text-gray-100'
                      : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="relative flex w-full items-center gap-3 sm:w-auto" ref={selectRef}>
              <span className="shrink-0 text-sm font-medium text-gray-600 dark:text-gray-400">
                Timeline:
              </span>
              <div className="relative flex-1 sm:w-48">
                <button
                  type="button"
                  onClick={() => setOpen((o) => !o)}
                  className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white py-2 px-3 text-sm font-medium text-gray-700 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-primary-500"
                >
                  <span>{period}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 text-gray-400 transition-transform ${
                      open ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {open && (
                  <div className="absolute right-0 left-0 z-20 mt-1 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
                    <div className="p-2">
                      <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search period..."
                        className="block w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:focus:border-primary-500"
                      />
                    </div>
                    <div className="max-h-56 overflow-y-auto">
                      {filtered.length === 0 ? (
                        <div className="px-3 py-2 text-sm text-gray-400">No matches</div>
                      ) : (
                        filtered.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => select(t)}
                            className={`block w-full px-3 py-2 text-left text-sm transition-colors ${
                              period === t
                                ? 'bg-primary-50 font-semibold text-primary-600 dark:bg-primary-950/30 dark:text-primary-400'
                                : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/50'
                            }`}
                          >
                            {t}
                          </button>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-2xl">
            {active === 'combined' && (
              <CombinedCard platforms={snapshot.platforms} progressToRE={snapshot.progressToRE} />
            )}
            {active === 'stockbit' && (
              <StockbitCard
                tabs={portfolioData.meta.stockbitTabs}
                portfolioPL={snapshot.stockbit.portfolioPL}
                holdings={snapshot.stockbit.holdings}
              />
            )}
            {active === 'bibit' && (
              <BibitCard
                portfolioName={portfolioData.meta.bibitPortfolioName}
                value={snapshot.bibit.value}
                target={snapshot.bibit.target}
                allocations={snapshot.bibit.allocations}
              />
            )}
            {active === 'gotrade' && (
              <GoTradeCard
                greetingName={portfolioData.meta.gotradeGreetingName}
                portfolioPL={snapshot.gotrade.portfolioPL}
                positions={snapshot.gotrade.positions}
              />
            )}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-gray-400 dark:text-gray-500">
            Shown as <HiddenValue /> to keep the numbers private. This page never stores or sends
            any portfolio data.
          </p>
        </div>
      </div>
    </>
  )
}
