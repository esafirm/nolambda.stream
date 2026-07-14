import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

const tools = [
  {
    title: 'WanderList',
    description:
      'Track visited and planned countries and Indonesian provinces. Keep a visual history of travels across the world.',
    href: '/wanderlist',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-primary-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
    badge: 'Travel',
  },
  {
    title: 'WFC Reviews',
    description:
      'Work From Cafe reviews. Discover places suitable for remote work, complete with internet speed benchmarks, rating scores, and accessibility.',
    href: '/wfc-reviews',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-primary-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.72 11.06A1.006 1.006 0 0 1 18 12v1a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-1a1 1 0 0 1 1-1h11.72Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 12h1a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-1"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 7c0-1.5 1-2 1-3M12 7c0-1.5 1-2 1-3M15 7c0-1.5 1-2 1-3"
        />
      </svg>
    ),
    badge: 'Remote Work',
  },
  {
    title: 'FIRE Calculator',
    description:
      'Financial Independence, Retire Early calculator. Plan your path to FI with projections, inflation adjustments, and year-by-year portfolio tracking for Indonesia.',
    href: '/tools/fire-calculator',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-primary-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
        />
      </svg>
    ),
    badge: 'Finance',
  },
  {
    title: 'Saham DCA Calculator',
    description:
      'Stock Dollar Cost Averaging calculator. Analyze average costs after multiple purchases, or calculate how many shares/lots at what price you need to buy to hit a target average price.',
    href: '/tools/saham-dca',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-primary-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 11h.01M9 11h.01M12 14h.01M15 11h.01M12 7h.01M15 7h.01M15 14h.01M15 17h.01M9 17h.01M9 14h.01M9 11h.01M9 7h.01M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"
        />
      </svg>
    ),
    badge: 'Finance',
  },
  {
    title: 'Monthly Expense Calculator',
    description:
      'Track and analyze your monthly expenses. Import from spreadsheets or answer AI-guided questions to get a complete breakdown of your spending.',
    href: '/tools/monthly-expense',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-primary-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
        />
      </svg>
    ),
    badge: 'Finance',
  },
  {
    title: 'Cost of Living Comparison',
    description:
      'Compare housing, food, transport, and lifestyle costs between two cities. Add your salary to see purchasing power parity and equivalent income needs.',
    href: '/tools/cost-of-living',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-primary-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
    badge: 'Lifestyle',
  },
]

export default function Tools() {
  return (
    <>
      <PageSEO
        title={`Tools - ${siteMetadata.author}`}
        description="A list of interactive utilities and tools built for finance, lifestyle, remote work, and travel tracking."
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Web Tools
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A curated suite of interactive web utilities to assist with daily tracking, planning,
            and calculation.
          </p>
        </div>

        <div className="py-12">
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="group relative flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-500 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-primary-500"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="rounded-lg bg-primary-50 p-3 text-primary-500 transition-colors group-hover:bg-primary-100 dark:bg-gray-800 dark:group-hover:bg-gray-700">
                      {tool.icon}
                    </div>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                      {tool.badge}
                    </span>
                  </div>
                  <div className="mt-4">
                    <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                      {tool.title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center text-sm font-semibold text-primary-500 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  Open Tool
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
