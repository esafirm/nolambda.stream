import React, { useState } from 'react'
import fs from 'fs'
import path from 'path'
import { load } from 'js-yaml'

interface Place {
  name: string
  code: string
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
}

interface WorldChecksProps {
  nations: Place[]
  provinces: Place[]
  members: Member[]
}

export async function getStaticProps() {
  const dataDirectory = path.join(process.cwd(), 'data', 'wanderlist')

  // Read nations data
  const nationsFilePath = path.join(dataDirectory, 'world_nations.yaml')
  const nationsYaml = fs.readFileSync(nationsFilePath, 'utf8')
  const nations: Place[] = (load(nationsYaml) as Place[]) || []

  // Read provinces data
  const provincesFilePath = path.join(dataDirectory, 'indonesia_provinces.yaml')
  const provincesYaml = fs.readFileSync(provincesFilePath, 'utf8')
  const provinces: Place[] = (load(provincesYaml) as Place[]) || []

  // Read members data
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

const WorldChecks: React.FC<WorldChecksProps> = ({ nations, provinces, members }) => {
  // Initialize selectedMembers with the first member if available.
  // Using a state initializer function ensures it's set correctly on the first render (SSR and Client).
  const [selectedMembers, setSelectedMembers] = useState<Member[]>(() => {
    return members && members.length > 0 ? [members[0]] : []
  })

  const toggleMemberSelection = (memberToToggle: Member) => {
    setSelectedMembers((prevSelected) => {
      // If there's only one member selected and that member is the one we're trying to toggle, do nothing
      if (prevSelected.length === 1 && prevSelected[0].name === memberToToggle.name) {
        return prevSelected
      }

      if (prevSelected.some((m) => m.name === memberToToggle.name)) {
        // Member is already selected, remove them
        return prevSelected.filter((m) => m.name !== memberToToggle.name)
      } else {
        // Member is not selected, add them
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

  return (
    <div className="container mx-auto p-4">
      <style>{`
        @keyframes jumpy {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        .animate-jumpy {
          display: inline-block;
          animation: jumpy 1.5s infinite ease-in-out;
        }
      `}</style>
      <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100">Travel Tracker</h1>

      <div className="mb-8 flex space-x-4">
        {members.map((member) => (
          <div
            key={member.name}
            role="button"
            tabIndex={0}
            className={`relative h-16 w-16 cursor-pointer overflow-hidden rounded-full transition-all duration-200 ease-in-out
              ${
                selectedMembers.some((m) => m.name === member.name)
                  ? `ring-4 ring-${member.color || 'indigo-500'}`
                  : 'ring-2 ring-gray-300 hover:ring-indigo-400 dark:ring-gray-700'
              }`}
            onClick={() => toggleMemberSelection(member)}
            onKeyDown={(e) => handleMemberKeyPress(e, member)}
            title={member.name}
          >
            {member.avatar ? (
              <img src={member.avatar} alt={member.name} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gray-200 text-xl font-bold text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                {member.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .toUpperCase()
                  .substring(0, 2)}
              </div>
            )}
            <span className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 py-0.5 text-center text-xs text-white">
              {member.name}
            </span>
          </div>
        ))}
      </div>

      <div className="mb-8 flex items-center space-x-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <div className="flex items-center space-x-2">
          <span className="animate-jumpy rounded bg-gray-500 px-2 py-0.5 text-[10px] font-bold text-white">
            Visited
          </span>
          <span className="text-sm font-medium">Been there!</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="animate-jumpy rounded border border-dashed border-gray-500 px-2 py-0.5 text-[10px] font-bold text-gray-500">
            Planned
          </span>
          <span className="text-sm font-medium">Next stop!</span>
        </div>
      </div>

      {selectedMembers.length > 0 && (
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
              World Nations (
              {new Set(selectedMembers.flatMap((member) => member.visited?.world || [])).size}/
              {nations.length})
            </h2>
            <ul className="space-y-4">
              {nations.map((nation) => {
                const visitingMember = getVisitingMember(nation.code, 'world')
                const planningMember = getPlanningMember(nation.code, 'world')
                const visited = !!visitingMember
                const planned = !!planningMember && !visited

                return (
                  <li key={nation.code} className="flex flex-wrap items-center gap-2">
                    <span className="text-lg">
                      {getFlagEmoji(nation.code)} {nation.name}
                    </span>
                    {visited && (
                      <span
                        className={`animate-jumpy rounded px-2 py-0.5 text-[10px] font-bold text-white bg-${
                          visitingMember?.color || 'indigo-500'
                        }`}
                      >
                        Visited
                      </span>
                    )}
                    {planned && (
                      <span
                        className={`animate-jumpy rounded border border-dashed px-2 py-0.5 text-[10px] font-bold border-${
                          planningMember?.color || 'indigo-500'
                        } text-${planningMember?.color || 'indigo-500'}`}
                      >
                        Planned
                      </span>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Indonesian Provinces (
              {new Set(selectedMembers.flatMap((member) => member.visited?.indonesia || [])).size}/
              {provinces.length})
            </h2>
            <ul className="space-y-4">
              {provinces.map((province) => {
                const visitingMember = getVisitingMember(province.code, 'indonesia')
                const planningMember = getPlanningMember(province.code, 'indonesia')
                const visited = !!visitingMember
                const planned = !!planningMember && !visited

                return (
                  <li key={province.code} className="flex flex-wrap items-center gap-2">
                    <span className="text-lg text-gray-900 dark:text-gray-100">
                      {province.name}
                    </span>
                    {visited && (
                      <span
                        className={`animate-jumpy rounded px-2 py-0.5 text-[10px] font-bold text-white bg-${
                          visitingMember?.color || 'indigo-500'
                        }`}
                      >
                        Visited
                      </span>
                    )}
                    {planned && (
                      <span
                        className={`animate-jumpy rounded border border-dashed px-2 py-0.5 text-[10px] font-bold border-${
                          planningMember?.color || 'indigo-500'
                        } text-${planningMember?.color || 'indigo-500'}`}
                      >
                        Planned
                      </span>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default WorldChecks
