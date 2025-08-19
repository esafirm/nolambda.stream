import React, { useState } from 'react'

import mobilecomponents from '@/data/mobilecomponents/main.json'
import AutocompleteInput from '@/components/mobilecomponents/AutoCompleteInput'
import AskAiWrapper from '@/components/mobilecomponents/AskAi'

import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getAllFilesFrontMatter, getFileBySlug } from '@/lib/mdx'

import { PageSEO } from '@/components/SEO'
import { MobileComponent } from '@/lib/mobile-components'

const flutterData = mobilecomponents.map((component) => component.flutter.name).sort()
const composeData = mobilecomponents.map((component) => component.compose.name).sort()

const flutterLookupMap = new Map(
  mobilecomponents.map((component) => [component.flutter.name, component])
)

const composeLookupMap = new Map(
  mobilecomponents.map((component) => [component.compose.name, component])
)

console.log('fluttedata', flutterData)
console.log('composedata', composeData)

/* Static Props */
/* ------------------------------------------ */

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('mobilecomponents/code')
  const desc = {}

  for (let post of posts) {
    const fetched = await getFileBySlug('mobilecomponents/code', post.slug)
    desc[post.slug] = fetched
  }
  return {
    props: {
      desc,
    },
  }
}

/* Render */
/* ------------------------------------------ */

const PageLayout = ({ children }) => {
  return (
    <div className="flex w-full flex-col">
      {children
        .filter((c) => c !== null)
        .map((child) => (
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

const Description = ({ desc }) => {
  const { mdxSource, frontMatter } = desc

  return (
    <div className="w-full">
      <MDXLayoutRenderer layout={'PostSimple'} mdxSource={mdxSource} frontMatter={frontMatter} />
    </div>
  )
}

const ComposeSection = ({ selectedCompose, setSelectedComponent, composeDesc }) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <img
          className="mx-2 my-8 h-8 w-8"
          src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjcgNzQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNS45OTkgMi42NjNhNS4wMSA1LjAxIDAgMCAwLTQuOTk4IDBsLTI2LjUgMTUuMjUzYTQuOTk0IDQuOTk0IDAgMCAwLTEuMTk4Ljk2MmwxMS4xMDggNi4zNjZjLjI2OC0uMjkuNTgtLjU0LjkzMS0uNzQ0bDE2LjE1Ni05LjM0MmE0IDQgMCAwIDEgNC4wMDQgMEw1MS42NTcgMjQuNWMuMzUxLjIwMy42NjQuNDU1LjkzMi43NDRsMTEuMTA4LTYuMzY2YTQuOTkxIDQuOTkxIDAgMCAwLTEuMTk4LS45NjJsLTI2LjUtMTUuMjUzWm0yOC43MjMgMTcuOTMzLTExLjE4MyA2LjQwOGMuMDc2LjMxLjExNi42MzIuMTE2LjY1OXYxNy43OTRhNCA0IDAgMCAxLTEuOTU4IDMuNDRsLTE2LjIzNSA5LjYzOGEzLjk5OCAzLjk5OCAwIDAgMS0uOTYyLjQxMnYxMi42M2E1LjAwNSA1LjAwNSAwIDAgMCAxLjQyOC0uNTY5bDI2LjYyLTE1LjczQTQuOTg2IDQuOTg2IDAgMCAwIDY1IDUxLjI4NFYyMi4yMzdjMC0uNTY3LS4wOTctMS4xMi0uMjc4LTEuNjRaTTIgMjIuMjM3YzAtLjU2Ny4wOTctMS4xMi4yNzgtMS42NGwxMS4xODMgNi40MDdjLS4wNzYuMzEtLjExNi42MzIt.116.959v18.633a4 4 0 0 0IDIwOCAzLjUwOWwxNi4wNzQgOC44Yy4zMi4xNzQuNjU2LjMwMiAxLjAwMS4zODR2MTIuNjM4YTUuMDA1IDUuMDA1IDAgMCAxLTEuNTE3LS41MzNMMC42MDMgNTcuMDJBNC45ODcgNC.503IDAgMCAxIDIgNTIuNjQxVjIyLjIzN1pNMzAuMDAyLjkzNWE3LjAxNCA3LjAxNCAwIDAgMSA2Ljk5NiAwbDI2LjUgMTUuMjUzQTYuOTggNi.58IDAgMCAxIDY3IDIyLjIzOHYyOS4wNDdhNi45OCA2.98IDAgMCAxLTMuNDMzIDYuMDA5bC0yNi42MiAxNS43MzFhNy4wMTQgNy4wMTQgMCAwIDEtNi45MjMuMTI0TDMuNjQ0IDU4Ljc3MUE2LjY4MSA2.58MSAwIDAgMSAwIDUyLjY0MVYyMi4yMzhhNi45OCA6.58IDAgMCAxIDMuNTAyLTYuMDVMMzAuMDAyLjkzNlptLTguNjA0IDI3LjU1MiAxMC41ODItNi4xMWMuOTQtLjU0MiAyLjEtLjU0MiAzLjA0IDBsMTAuNTgyIDYuMTFhMi45OTYgMi45OTYgMCAwIDEgMS41MDMgMi41OTN2MTEuNjUzYzAgMS4wNTYtLjU2IDIuMDM0LTEuNDczIDIuNTc2bC0xMC42NDMgNi4zMDhhMy4wNDQgMy4wNDQgMCAwIDEtMy4wMDkuMDUybC0xMC41Mi01Ljc1YTIuOTk2IDIuOTk2IDAgMCAxLTEuNTY1LTIuNjI3VjMxLjA4YzAtMS4wNjguNTczLTIuMDU2IDEuNTAzLTIuNTkzWiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="
        />
      </div>
      <AutocompleteInput
        placeholder="Box"
        options={composeData}
        selected={selectedCompose?.name}
        onValueChange={(selected) => {
          setSelectedComponent(composeLookupMap.get(selected))
        }}
      />
      {composeDesc ? <Description desc={composeDesc} /> : null}
    </>
  )
}

const FlutterSection = ({ selectedFlutter, setSelectedComponent, flutterDesc }) => {
  return (
    <>
      <img
        className="mx-auto h-24 w-24"
        src="https://storage.googleapis.com/cms-storage-bucket/ec64036b4eacc9f3fd73.svg"
      />
      <AutocompleteInput
        placeholder="Container"
        options={flutterData}
        selected={selectedFlutter?.name}
        onValueChange={(selected) => {
          setSelectedComponent(flutterLookupMap.get(selected))
        }}
      />
      {flutterDesc ? <Description desc={flutterDesc} /> : null}
    </>
  )
}

const Header = () => {
  return (
    <>
      <h1 className="mb-2 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Mobile Components
      </h1>
      <p className="mb-10 text-xl">
        Finds out the equivalent components across mobile app development frameworks
      </p>
    </>
  )
}

const Page = ({ desc }) => {
  const [selectedComponent, setSelectedComponent] = useState<MobileComponent>()

  const selectedFlutter = selectedComponent?.flutter
  const selectedCompose = selectedComponent?.compose

  const flutterDesc = selectedComponent ? desc[`${selectedFlutter.name}.flutter`] : null
  const composeDesc = selectedComponent ? desc[`${selectedCompose.name}.compose`] : null

  return (
    <div>
      <PageSEO title="Mobile Components" description="Mobile Components" />
      <Header />
      <PageLayout>
        <FlutterSection
          selectedFlutter={selectedFlutter}
          setSelectedComponent={setSelectedComponent}
          flutterDesc={flutterDesc}
        />
        <ComposeSection
          selectedCompose={selectedCompose}
          setSelectedComponent={setSelectedComponent}
          composeDesc={composeDesc}
        />

        {flutterDesc ? (
          <AskAiWrapper selectedCompose={selectedCompose} selectedFlutter={selectedFlutter} />
        ) : null}
      </PageLayout>
    </div>
  )
}

export default Page
