import React, { useState } from 'react'
import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

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
  const nations: Place[] = yaml.load(nationsYaml) as Place[]

  // Read provinces data
  const provincesFilePath = path.join(dataDirectory, 'indonesia_provinces.yaml')
  const provincesYaml = fs.readFileSync(provincesFilePath, 'utf8')
  const provinces: Place[] = yaml.load(provincesYaml) as Place[]

  // Read members data
  const membersDirectory = path.join(dataDirectory, 'members')
  const memberFiles = fs.readdirSync(membersDirectory).filter((file) => file.endsWith('.yaml'))

  const members: Member[] = memberFiles.map((file) => {
    const memberFilePath = path.join(membersDirectory, file)
    const memberYaml = fs.readFileSync(memberFilePath, 'utf8')
    return yaml.load(memberYaml) as Member
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
  const [selectedMembers, setSelectedMembers] = useState<Member[]>([])

  // Initialize selectedMembers with the first member if available
  React.useEffect(() => {
    if (members.length > 0 && selectedMembers.length === 0) {
      setSelectedMembers([members[0]])
    }
  }, [members, selectedMembers])

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

  const getVisitingMember = (placeCode: string, category: 'world' | 'indonesia') => {
    if (selectedMembers.length === 0) return null
    return selectedMembers.find((member) => member.visited[category].includes(placeCode))
  }

  const isVisited = (placeCode: string, category: 'world' | 'indonesia') => {
    return getVisitingMember(placeCode, category) !== null
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-3xl font-bold">Visited Places Checklist</h1>

      <div className="mb-6 flex space-x-4">
        {members.map((member) => (
          <div
            key={member.name}
            className={`relative h-16 w-16 cursor-pointer overflow-hidden rounded-full transition-all duration-200 ease-in-out
              ${
                selectedMembers.some((m) => m.name === member.name)
                  ? `ring-4 ring-${member.color}`
                  : 'ring-2 ring-gray-300 hover:ring-indigo-400 dark:ring-gray-700'
              }`}
            onClick={() => toggleMemberSelection(member)}
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

      {selectedMembers.length > 0 && (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
              World Nations (
              {new Set(selectedMembers.flatMap((member) => member.visited.world)).size}/
              {nations.length})
            </h2>
            <ul className="space-y-2">
              {nations.map((nation) => {
                const visitingMember = getVisitingMember(nation.code, 'world')
                return (
                  <li key={nation.code} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={isVisited(nation.code, 'world')}
                      readOnly
                      className={`form-checkbox h-5 w-5 rounded ${
                        visitingMember ? `text-${visitingMember.color}` : 'text-gray-400'
                      }`}
                    />
                    <span className="ml-2 text-lg">
                      {getFlagEmoji(nation.code)} {nation.name}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Indonesian Provinces (
              {new Set(selectedMembers.flatMap((member) => member.visited.indonesia)).size}/
              {provinces.length})
            </h2>
            <ul className="space-y-2">
              {provinces.map((province) => {
                const visitingMember = getVisitingMember(province.code, 'indonesia')
                return (
                  <li key={province.code} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={isVisited(province.code, 'indonesia')}
                      readOnly
                      className={`form-checkbox h-5 w-5 rounded ${
                        visitingMember ? `text-${visitingMember.color}` : 'text-gray-400'
                      }`}
                    />
                    <span className="ml-2 text-lg text-gray-900 dark:text-gray-100">
                      {province.name}
                    </span>
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
