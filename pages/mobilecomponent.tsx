import React, { useState } from 'react'

import mobilecomponents from '@/data/mobilecomponents/main.json'
import AutocompleteInput from '@/components/mobilecomponents/AutoCompleteInput'

interface MobileComponent {
  compose: MobileComponentInfo
  flutter: MobileComponentInfo
}

interface MobileComponentInfo {
  name: string
  links: InfoLink[]
}

interface InfoLink {
  title: string
  link: string
}

const flutterData = mobilecomponents.map((component) => component.flutter.name)
const composeData = mobilecomponents.map((component) => component.compose.name)

const flutterLookupMap = new Map(
  mobilecomponents.map((component) => [component.flutter.name, component])
)

const composeLookupMap = new Map(
  mobilecomponents.map((component) => [component.compose.name, component])
)

console.log('fluttedata', flutterData)
console.log('composedata', composeData)

const CenterText = ({ text }) => <p className="p-4 text-center">{text}</p>

const SectionContainer = ({ topText, children }) => {
  return (
    <>
      <CenterText text={topText} />
      {children}
    </>
  )
}

const PageLayout = ({ children }) => {
  return (
    <div className="flex w-full flex-col">
      {children.map((child) => (
        <div
          key={child.props.topText}
          className="mb-8 flex w-full flex-col justify-center rounded-md border border-gray-300 p-4"
        >
          {child}
        </div>
      ))}
    </div>
  )
}

const Links = ({ links }: { links: InfoLink[] }) => {
  return (
    <div className="flex flex-col p-4">
      {links.map((link: InfoLink, index: number) => (
        <div className="flex" key={link.title}>
          <p className="text-sm font-semibold">{index + 1}.</p>
          <a
            className="px-2 text-sm font-semibold text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            href={link.link}
          >
            {link.title}
          </a>
        </div>
      ))}
    </div>
  )
}

const Page = () => {
  const [selectedComponent, setSelectedComponent] = useState<MobileComponent>()

  return (
    <div>
      <PageLayout>
        <SectionContainer topText={'Flutter'}>
          <AutocompleteInput
            options={flutterData}
            selected={selectedComponent?.flutter?.name}
            onValueChange={(selected) => {
              setSelectedComponent(flutterLookupMap.get(selected))
            }}
          />
          {selectedComponent ? <Links links={selectedComponent.flutter.links} /> : null}
        </SectionContainer>
        <SectionContainer topText={'Jetpack Compose'}>
          <AutocompleteInput
            options={composeData}
            selected={selectedComponent?.compose?.name}
            onValueChange={(selected) => {
              setSelectedComponent(composeLookupMap.get(selected))
            }}
          />

          {selectedComponent ? <Links links={selectedComponent.compose.links} /> : null}
        </SectionContainer>
      </PageLayout>
    </div>
  )
}

export default Page
