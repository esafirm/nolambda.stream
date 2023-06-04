import React, { useEffect, useState } from 'react'

import mobilecomponents from '@/data/mobilecomponents/main.json'
import AutocompleteInput from '@/components/mobilecomponents/AutoCompleteInput'

import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getAllFilesFrontMatter, getFileBySlug } from '@/lib/mdx'

import { PageSEO } from '@/components/SEO'

interface MobileComponent {
  compose: MobileComponentInfo
  flutter: MobileComponentInfo
}

interface MobileComponentInfo {
  name: string
}

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
      openai_key: process.env.OPENAI_API_KEY,
    },
  }
}

/* Render */
/* ------------------------------------------ */

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

const Description = ({ desc }) => {
  const { mdxSource, frontMatter } = desc

  return (
    <div className="w-full">
      <MDXLayoutRenderer layout={'PostSimple'} mdxSource={mdxSource} frontMatter={frontMatter} />
    </div>
  )
}

async function requestCompletion(text: string) {
  const openAiParameter = {
    model: 'gpt-3.5-turbo',
    temperature: 0.9,
    stream: false,
    messages: [
      {
        role: 'user',
        content: text,
      },
    ],
  }

  return fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify(openAiParameter),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log('API response', res.result)
      return res.result
    })
}

const AskAi = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="my-8 flex flex-col items-center justify-center">
      {isLoaded ? (
        <div>This is loaded</div>
      ) : (
        <button
          className="flex flex-row items-center justify-center rounded-md border p-2 dark:hover:bg-gray-600"
          onClick={() => {
            requestCompletion("What's the equivalent of Jetpack compose Box in Flutter?")
            setIsLoaded(true)
          }}
        >
          Ask the AI for the equivalent
        </button>
      )}
    </div>
  )
}

const ComposeSection = ({ selectedCompose, setSelectedComponent, composeDesc }) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <img
          className="mx-2 my-8 h-8 w-8"
          src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjcgNzQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNS45OTkgMi42NjNhNS4wMSA1LjAxIDAgMCAwLTQuOTk4IDBsLTI2LjUgMTUuMjUzYTQuOTk0IDQuOTk0IDAgMCAwLTEuMTk4Ljk2MmwxMS4xMDggNi4zNjZjLjI2OC0uMjkuNTgtLjU0LjkzMS0uNzQ0bDE2LjE1Ni05LjM0MmE0IDQgMCAwIDEgNC4wMDQgMEw1MS42NTcgMjQuNWMuMzUxLjIwMy42NjQuNDU1LjkzMi43NDRsMTEuMTA4LTYuMzY2YTQuOTkxIDQuOTkxIDAgMCAwLTEuMTk4LS45NjJsLTI2LjUtMTUuMjUzWm0yOC43MjMgMTcuOTMzLTExLjE4MyA2LjQwOGMuMDc2LjMxLjExNi42MzIuMTE2Ljk1OXYxNy43OTRhNCA0IDAgMCAxLTEuOTU4IDMuNDRsLTE2LjIzNSA5LjYzOGEzLjk5OCAzLjk5OCAwIDAgMS0uOTYyLjQxMnYxMi42M2E1LjAwNSA1LjAwNSAwIDAgMCAxLjQyOC0uNTY5bDI2LjYyLTE1LjczQTQuOTg2IDQuOTg2IDAgMCAwIDY1IDUxLjI4NFYyMi4yMzdjMC0uNTY3LS4wOTctMS4xMi0uMjc4LTEuNjRaTTIgMjIuMjM3YzAtLjU2Ny4wOTctMS4xMi4yNzgtMS42NGwxMS4xODMgNi40MDdjLS4wNzYuMzEtLjExNi42MzItLjExNi45NTl2MTguNjMzYTQgNCAwIDAgMCAyLjA4IDMuNTA5bDE2LjA3NCA4LjhjLjMyLjE3NC42NTYuMzAyIDEuMDAxLjM4NHYxMi42MzhhNS4wMDUgNS4wMDUgMCAwIDEtMS41MTctLjUzM0w0LjYwMyA1Ny4wMkE0Ljk4NyA0Ljk4NyAwIDAgMSAyIDUyLjY0MlYyMi4yMzdaTTMwLjAwMi45MzVhNy4wMTQgNy4wMTQgMCAwIDEgNi45OTYgMGwyNi41IDE1LjI1M0E2Ljk4IDYuOTggMCAwIDEgNjcgMjIuMjM4djI5LjA0N2E2Ljk4IDYuOTggMCAwIDEtMy40MzMgNi4wMDlsLTI2LjYyIDE1LjczMWE3LjAxNCA3LjAxNCAwIDAgMS02LjkyMy4xMkwzLjY0NCA1OC43NzFBNi45ODEgNi45ODEgMCAwIDEgMCA1Mi42NDFWMjIuMjM4YTYuOTggNi45OCAwIDAgMSAzLjUwMi02LjA1TDMwLjAwMi45MzZabS04LjYwNCAyNy41NTIgMTAuNTgyLTYuMTFjLjk0LS41NDIgMi4xLS41NDIgMy4wNCAwbDEwLjU4MiA2LjExYTIuOTk2IDIuOTk2IDAgMCAxIDEuNTAzIDIuNTkzdjExLjY1M2MwIDEuMDU2LS41NiAyLjAzNC0xLjQ3MyAyLjU3NmwtMTAuNjQzIDYuMzA4YTMuMDQ0IDMuMDQ0IDAgMCAxLTMuMDA5LjA1MmwtMTAuNTItNS43NWEyLjk5NiAyLjk5NiAwIDAgMS0xLjU2NS0yLjYyN1YzMS4wOGMwLTEuMDY4LjU3My0yLjA1NiAxLjUwMy0yLjU5M1oiIGZpbGw9IiNmZmYiLz48L3N2Zz4="
        />
        <p className="text-xl">Compose</p>
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
      <AskAi />
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
      </PageLayout>
    </div>
  )
}

export default Page
