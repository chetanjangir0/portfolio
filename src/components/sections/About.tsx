import { Card } from "@/components/ui/card"
// import Link from "next/link"

export default function About() {
  return (
    <>
      <div className="space-y-6">
        <h2 className="text-purple-blue text-2xl">About Me</h2>
        <Card className="p-6 bg-card border-card-border">
          <p className="mb-4">$ cat about.txt</p>
          <div className="text-green">
            <ul className="flex flex-col gap-2">
              <li>🐝 I have completed my undergraduate studies at <span className="text-blue">National Institute of Technology Srinagar</span></li>
              <li>👾 I&apos;m exploring <span className="text-blue">Web Development</span> and <span className="text-blue">Networking</span></li>
              <li>👩‍💻 Most of my experience is in <span className="text-blue">full stack development</span> and <span className="text-blue">Interactive Projects</span></li>
            </ul>
          </div>
          {/*<p className="mt-4 text-blue">Experience:</p>
         <ul className="list-disc list-inside mt-2 text-purple">
            <li>Machine Learning Intern @ Meta</li>
            <li>Director of Engineering @ <Link className="text-blue underline" href="https://bitsofgood.org/">Bits of Good</Link> a Hack4Impact Chapter</li>
            <li>Previously @ Ericsson</li>
          </ul>*/}
        </Card>
      </div>
    </>
  )
}
