import React, { useState } from 'react'
import fs from 'fs'
import path from 'path'
import { load } from 'js-yaml'
import PhotoGallery from '@/components/PhotoGallery'

interface Place {
  name: string
  code: string
}

interface TravelPhoto {
  url: string
  caption: string
  location: string
}

interface VisitedData {
  world: string[]
  indonesia: string[]
}

interface Member {
  name: string
  avatar?: string
  color?: string
  visited: VisitedData
  planned?: VisitedData
  photos?: TravelPhoto[]
}

interface WorldChecksProps {
  nations: Place[]
  provinces: Place[]
  members: Member[]
}

export async function getStaticProps() {
  const dataDirectory = path.join(process.cwd(), 'data', 'wanderlist')

  const nationsFilePath = path.join(dataDirectory, 'world_nations.yaml')
  const nationsYaml = fs.readFileSync(nationsFilePath, 'utf8')
  const nations: Place[] = (load(nationsYaml) as Place[]) || []

  const provincesFilePath = path.join(dataDirectory, 'indonesia_provinces.yaml')
  const provincesYaml = fs.readFileSync(provincesFilePath, 'utf8')
  const provinces: Place[] = (load(provincesYaml) as Place[]) || []

  const membersDirectory = path.join(dataDirectory, 'members')
  const memberFiles = fs.readdirSync(membersDirectory).filter((file) => file.endsWith('.yaml'))

  const members: Member[] = memberFiles.map((file) => {
    const memberFilePath = path.join(membersDirectory, file)
    const memberYaml = fs.readFileSync(memberFilePath, 'utf8')
    return load(memberYaml) as Member
  })

  return {
    props: {
      nations,
      provinces,
      members,
    },
  }
}

const getFlagEmoji = (countryCode: string) => {
  if (!countryCode || typeof countryCode !== 'string' || countryCode.length !== 2) {
    return ''
  }
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0))
  return String.fromCodePoint(...codePoints)
}

const colorMap: Record<string, { ring: string; bg: string; text: string; border: string }> = {
  'indigo-500': {
    ring: 'ring-indigo-500',
    bg: 'bg-indigo-500',
    text: 'text-indigo-500',
    border: 'border-indigo-500',
  },
  'pink-500': {
    ring: 'ring-pink-500',
    bg: 'bg-pink-500',
    text: 'text-pink-500',
    border: 'border-pink-500',
  },
  'green-500': {
    ring: 'ring-green-500',
    bg: 'bg-green-500',
    text: 'text-green-500',
    border: 'border-green-500',
  },
}

const WorldChecks: React.FC<WorldChecksProps> = ({ nations, provinces, members }) => {
  const [selectedMembers, setSelectedMembers] = useState<Member[]>(() => {
    return members && members.length > 0 ? [members[0]] : []
  })

  const toggleMemberSelection = (memberToToggle: Member) => {
    setSelectedMembers((prevSelected) => {
      if (prevSelected.length === 1 && prevSelected[0].name === memberToToggle.name) {
        return prevSelected
      }
      if (prevSelected.some((m) => m.name === memberToToggle.name)) {
        return prevSelected.filter((m) => m.name !== memberToToggle.name)
      } else {
        return [...prevSelected, memberToToggle]
      }
    })
  }

  const handleMemberKeyPress = (event: React.KeyboardEvent, member: Member) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggleMemberSelection(member)
    }
  }

  const getVisitingMember = (placeCode: string, category: 'world' | 'indonesia') => {
    if (selectedMembers.length === 0) return null
    return selectedMembers.find((member) => member.visited?.[category]?.includes(placeCode)) || null
  }

  const getPlanningMember = (placeCode: string, category: 'world' | 'indonesia') => {
    if (selectedMembers.length === 0) return null
    return selectedMembers.find((member) => member.planned?.[category]?.includes(placeCode)) || null
  }

  const allPhotos = members.flatMap((m) => (m.photos || []).map((p) => ({ ...p })))
  const uniquePhotos = allPhotos.filter(
    (photo, index, self) => index === self.findIndex((p) => p.url === photo.url)
  )

  const worldVisited = new Set(selectedMembers.flatMap((m) => m.visited?.world || [])).size
  const indonesiaVisited = new Set(selectedMembers.flatMap((m) => m.visited?.indonesia || [])).size

  return (
    <div className="min-h-screen">
      <style>{`
        @keyframes jumpy {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-jumpy {
          display: inline-block;
          animation: jumpy 1.5s infinite ease-in-out;
        }
      `}</style>

      <div className="mx-auto mb-10 max-w-6xl px-4 pt-8">
        <div className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          <svg
            className="h-4 w-4"
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
          Travel Tracker
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
          Wanderlist
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Tracking the places we&apos;ve been and the adventures ahead.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8">
          <div className="mb-6 flex flex-wrap items-center gap-4">
            {members.map((member) => {
              const isSelected = selectedMembers.some((m) => m.name === member.name)
              const colors = colorMap[member.color || 'indigo-500'] || colorMap['indigo-500']
              return (
                <div
                  key={member.name}
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleMemberSelection(member)}
                  onKeyDown={(e) => handleMemberKeyPress(e, member)}
                  className={`group flex cursor-pointer items-center gap-3 rounded-xl border-2 px-4 py-3 transition-all duration-200 ${
                    isSelected
                      ? `${colors.border} bg-white shadow-lg shadow-${member.color}/10 dark:bg-gray-800`
                      : 'border-gray-200 bg-white/70 hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800/70 dark:hover:border-gray-600'
                  }`}
                >
                  <div
                    className={`relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full transition-all duration-200 ${
                      isSelected
                        ? `${colors.ring} ring-4`
                        : 'ring-2 ring-gray-300 dark:ring-gray-600'
                    }`}
                  >
                    {member.avatar ? (
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gray-200 text-sm font-bold text-gray-600 dark:bg-gray-600 dark:text-gray-300">
                        {member.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')
                          .toUpperCase()
                          .substring(0, 2)}
                      </div>
                    )}
                  </div>
                  <div>
                    <p
                      className={`text-sm font-semibold ${
                        isSelected
                          ? 'text-gray-900 dark:text-gray-100'
                          : 'text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      {member.name}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      {member.visited?.world?.length || 0} countries &middot;{' '}
                      {member.visited?.indonesia?.length || 0} provinces
                    </p>
                  </div>
                  {isSelected && (
                    <div
                      className={`ml-auto flex h-6 w-6 items-center justify-center rounded-full ${colors.bg}`}
                    >
                      <svg
                        className="h-3.5 w-3.5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {worldVisited}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    of {nations.length} countries visited
                  </p>
                </div>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                <div
                  className="h-full rounded-full bg-primary-500 transition-all duration-500"
                  style={{ width: `${(worldVisited / nations.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {indonesiaVisited}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    of {provinces.length} provinces visited
                  </p>
                </div>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                <div
                  className="h-full rounded-full bg-amber-500 transition-all duration-500"
                  style={{ width: `${(indonesiaVisited / provinces.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {
                      new Set(
                        selectedMembers.flatMap((m) => [
                          ...(m.visited?.world || []),
                          ...(m.visited?.indonesia || []),
                        ])
                      ).size
                    }
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    total destinations visited
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8 flex flex-wrap items-center gap-4 rounded-xl border border-gray-200 bg-white/50 p-4 dark:border-gray-700 dark:bg-gray-800/50">
            <div className="flex items-center gap-2">
              <span className="inline-block animate-jumpy rounded-md bg-gray-500 px-2 py-0.5 text-[10px] font-bold text-white">
                Visited
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Been there</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block animate-jumpy rounded-md border border-dashed border-gray-400 px-2 py-0.5 text-[10px] font-bold text-gray-500 dark:border-gray-500 dark:text-gray-400">
                Planned
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Next stop</span>
            </div>
          </div>

          {selectedMembers.length > 0 && (
            <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
              <section>
                <h2 className="mb-5 text-xl font-bold text-gray-900 dark:text-gray-100">
                  World Nations
                  <span className="ml-2 text-sm font-normal text-gray-500">
                    ({worldVisited}/{nations.length})
                  </span>
                </h2>
                <div className="space-y-1.5">
                  {nations.map((nation) => {
                    const visitingMember = getVisitingMember(nation.code, 'world')
                    const planningMember = getPlanningMember(nation.code, 'world')
                    const visited = !!visitingMember
                    const planned = !!planningMember && !visited
                    const colors =
                      colorMap[visitingMember?.color || planningMember?.color || 'indigo-500']

                    return (
                      <div
                        key={nation.code}
                        className={`flex items-center justify-between rounded-lg px-4 py-2.5 transition-colors ${
                          visited || planned
                            ? 'bg-gray-50 dark:bg-gray-800/80'
                            : 'text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800/50'
                        }`}
                      >
                        <span className="flex items-center gap-2 text-sm">
                          <span className="text-base">{getFlagEmoji(nation.code)}</span>
                          <span>{nation.name}</span>
                        </span>
                        {visited && (
                          <span
                            className={`animate-jumpy rounded-md ${colors.bg} px-2 py-0.5 text-[10px] font-bold text-white`}
                          >
                            Visited
                          </span>
                        )}
                        {planned && (
                          <span
                            className={`animate-jumpy rounded-md border border-dashed ${colors.border} ${colors.text} px-2 py-0.5 text-[10px] font-bold`}
                          >
                            Planned
                          </span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </section>

              <section>
                <h2 className="mb-5 text-xl font-bold text-gray-900 dark:text-gray-100">
                  Indonesian Provinces
                  <span className="ml-2 text-sm font-normal text-gray-500">
                    ({indonesiaVisited}/{provinces.length})
                  </span>
                </h2>
                <div className="space-y-1.5">
                  {provinces.map((province) => {
                    const visitingMember = getVisitingMember(province.code, 'indonesia')
                    const planningMember = getPlanningMember(province.code, 'indonesia')
                    const visited = !!visitingMember
                    const planned = !!planningMember && !visited
                    const colors =
                      colorMap[visitingMember?.color || planningMember?.color || 'indigo-500']

                    return (
                      <div
                        key={province.code}
                        className={`flex items-center justify-between rounded-lg px-4 py-2.5 transition-colors ${
                          visited || planned
                            ? 'bg-gray-50 dark:bg-gray-800/80'
                            : 'text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800/50'
                        }`}
                      >
                        <span className="text-sm">{province.name}</span>
                        {visited && (
                          <span
                            className={`animate-jumpy rounded-md ${colors.bg} px-2 py-0.5 text-[10px] font-bold text-white`}
                          >
                            Visited
                          </span>
                        )}
                        {planned && (
                          <span
                            className={`animate-jumpy rounded-md border border-dashed ${colors.border} ${colors.text} px-2 py-0.5 text-[10px] font-bold`}
                          >
                            Planned
                          </span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </section>
            </div>
          )}

          {uniquePhotos.length > 0 && (
            <section className="mb-16">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    Photo Gallery
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {uniquePhotos.length} memories from our travels
                  </p>
                </div>
              </div>
              <PhotoGallery photos={uniquePhotos} />
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

export default WorldChecks
