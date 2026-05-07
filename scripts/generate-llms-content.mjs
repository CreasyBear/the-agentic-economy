import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

const siteUrl = 'https://agentic-economy.ai'
const root = process.cwd()
const essaysDir = path.join(root, 'content', 'essays')
const publicDir = path.join(root, 'public')
const llmsDir = path.join(publicDir, 'llms')
const llmsEssaysDir = path.join(llmsDir, 'essays')

await mkdir(llmsEssaysDir, { recursive: true })

const files = (await readdir(essaysDir))
  .filter((file) => file.endsWith('.mdx'))
  .sort((a, b) => a.localeCompare(b))

const essays = []

for (const file of files) {
  const sourcePath = path.join(essaysDir, file)
  const raw = await readFile(sourcePath, 'utf8')
  const { body, data } = parseFrontmatter(raw, file)
  const slug = readRequired(data, 'slug')
  const title = readRequired(data, 'title')
  const description = readRequired(data, 'description')
  const order = Number(readRequired(data, 'order'))
  const canonical = `${siteUrl}/writing/${slug}`
  const cleanBody = cleanMdx(body)
  const exportPath = `llms/essays/${slug}.md`
  const markdown = [
    `# ${title}`,
    '',
    `Canonical: ${canonical}`,
    `Description: ${description}`,
    `Source: content/essays/${file}`,
    '',
    cleanBody,
    '',
  ].join('\n')

  await writeFile(path.join(publicDir, exportPath), markdown, 'utf8')

  essays.push({
    canonical,
    description,
    exportPath: `/${exportPath}`,
    order,
    slug,
    sourcePath: `content/essays/${file}`,
    title,
    markdown,
  })
}

essays.sort((a, b) => a.order - b.order)

await writeFile(
  path.join(llmsDir, 'index.json'),
  `${JSON.stringify(
    {
      generatedAt: '2026-05-07T00:00:00Z',
      site: siteUrl,
      essays: essays.map(({ markdown: _markdown, ...essay }) => essay),
    },
    null,
    2,
  )}\n`,
  'utf8',
)

await writeFile(path.join(publicDir, 'llms.txt'), buildLlmsTxt(essays), 'utf8')
await writeFile(
  path.join(publicDir, 'llms-full.txt'),
  buildLlmsFull(essays),
  'utf8',
)

function parseFrontmatter(raw, filename) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?/)
  if (!match) throw new Error(`Missing frontmatter in ${filename}`)

  const data = {}
  for (const line of match[1].split('\n')) {
    const separator = line.indexOf(':')
    if (separator === -1) continue
    const key = line.slice(0, separator).trim()
    const value = line
      .slice(separator + 1)
      .trim()
      .replace(/^["']|["']$/gu, '')
    data[key] = value
  }

  return {
    data,
    body: raw.slice(match[0].length),
  }
}

function readRequired(data, key) {
  const value = data[key]
  if (!value) throw new Error(`Missing ${key} in essay frontmatter`)
  return value
}

function cleanMdx(body) {
  return body
    .replace(/^import .+;\n?/gmu, '')
    .replace(/<\/?AgenticPayload>\n?/gmu, '')
    .replace(/\n{3,}/gu, '\n\n')
    .trim()
}

function buildLlmsFull(essays) {
  const header = [
    '# The Agentic Economy',
    '',
    'The Agentic Economy is a field site for software agency: software that can act, coordinate, and influence systems beyond the interface.',
    '',
    '## Position',
    '',
    'Software is beginning to act across systems built for people. Agency now moves through data, markets, institutions, and the physical world.',
    '',
    '## Canonical Pages',
    '',
    '- Home: https://agentic-economy.ai/',
    '- Thesis: https://agentic-economy.ai/thesis',
    '- Atlas: https://agentic-economy.ai/atlas',
    '- Handshake: https://agentic-economy.ai/handshake',
    '- Writing: https://agentic-economy.ai/writing',
    '- Team: https://agentic-economy.ai/team',
    '',
    '## Machine-Readable Essay Exports',
    '',
    ...essays.map(
      (essay) =>
        `- [${essay.title}](${siteUrl}${essay.exportPath}) — ${essay.description}`,
    ),
    '',
    '## Full Essays',
    '',
  ]

  const sections = essays.flatMap((essay) => [
    `---`,
    '',
    `# ${essay.title}`,
    '',
    `Canonical: ${essay.canonical}`,
    `Machine-readable export: ${siteUrl}${essay.exportPath}`,
    `Description: ${essay.description}`,
    '',
    essay.markdown.replace(/^# .+\n\n/u, '').trim(),
    '',
  ])

  return `${header.join('\n')}${sections.join('\n')}`.trimEnd() + '\n'
}

function buildLlmsTxt(essays) {
  return (
    [
      '# The Agentic Economy',
      '',
      '> Infrastructure for Software that Acts.',
      '',
      'The Agentic Economy studies software agency moving through data, markets, institutions, and the physical world.',
      '',
      '## Primary Claims',
      '',
      '- Software is beginning to act across systems built for people.',
      '- Agency now moves through data, markets, institutions, and the physical world.',
      '- As capabilities become callable, access control moves from systems to powers.',
      '- Before agents act, authority has to travel with them.',
      '',
      '## Core Pages',
      '',
      '- [Thesis](https://agentic-economy.ai/thesis): The field view.',
      '- [Atlas](https://agentic-economy.ai/atlas): A visual map of software agency.',
      '- [Handshake](https://agentic-economy.ai/handshake): A primitive for authority before agentic action.',
      '- [Writing](https://agentic-economy.ai/writing): Essays and field insights.',
      '- [Team](https://agentic-economy.ai/team): Joel Chan.',
      '',
      '## Writing',
      '',
      ...essays.map(
        (essay) =>
          `- [${essay.title}](${essay.canonical}): [Markdown export](${siteUrl}${essay.exportPath})`,
      ),
      '',
      '## Machine-Readable Files',
      '',
      '- [Sitemap](https://agentic-economy.ai/sitemap.xml)',
      '- [Essay Index](https://agentic-economy.ai/llms/index.json)',
      '- [Full Essay Corpus](https://agentic-economy.ai/llms-full.txt)',
      '- [Brandkit](https://agentic-economy.ai/brand/brandkit.json)',
      '- [Reasoning JSON](https://agentic-economy.ai/reasoning.json)',
      '- [AI Discovery](https://agentic-economy.ai/ai-discovery.json)',
      '- [AI Manifest](https://agentic-economy.ai/.well-known/ai-manifest.json)',
      '',
    ]
      .join('\n')
      .trimEnd() + '\n'
  )
}
