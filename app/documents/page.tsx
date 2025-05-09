import Link from "next/link"
import { FileText, Download, ArrowLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DocumentsPage() {
  return (
    <div className="container py-12 max-w-5xl">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Research Homepage</span>
        </Link>
      </div>

      <h1 className="text-3xl font-bold tracking-tighter md:text-4xl mb-8">Research Documents</h1>

      <Tabs defaultValue="papers" className="w-full">
        <TabsList className="grid w-full max-w-md mb-8 grid-cols-3">
          <TabsTrigger value="papers">Research Papers</TabsTrigger>
          <TabsTrigger value="presentations">Presentations</TabsTrigger>
          <TabsTrigger value="data">Data Files</TabsTrigger>
        </TabsList>

        <TabsContent value="papers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Main Research Paper</CardTitle>
              <CardDescription>Complete academic publication on knock knee biomechanics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 rounded-md border">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Biomechanics of Knock Knee (Genu Valgum)</p>
                    <p className="text-sm text-muted-foreground">Full research paper with all findings (5.7MB)</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href="/files/knock-knee-research-paper.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 text-sm"
                  >
                    <FileText className="h-3.5 w-3.5" />
                    <span>View</span>
                  </a>
                  <a
                    href="/files/knock-knee-research-paper.pdf"
                    download
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Supporting Publications</CardTitle>
              <CardDescription>Additional papers and literature reviews</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-md border">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Literature Review: Genu Valgum</p>
                    <p className="text-sm text-muted-foreground">Comprehensive review of related research (3.5MB)</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href="/files/knock-knee-literature-review.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 text-sm"
                  >
                    <FileText className="h-3.5 w-3.5" />
                    <span>View</span>
                  </a>
                  <a
                    href="/files/knock-knee-literature-review.pdf"
                    download
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-md border">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Methodology Paper</p>
                    <p className="text-sm text-muted-foreground">Detailed research methodology (2.3MB)</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href="/files/knock-knee-methodology.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 text-sm"
                  >
                    <FileText className="h-3.5 w-3.5" />
                    <span>View</span>
                  </a>
                  <a
                    href="/files/knock-knee-methodology.pdf"
                    download
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-md border">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Clinical Implications</p>
                    <p className="text-sm text-muted-foreground">Paper on treatment approaches (1.8MB)</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href="/files/knock-knee-clinical-implications.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 text-sm"
                  >
                    <FileText className="h-3.5 w-3.5" />
                    <span>View</span>
                  </a>
                  <a
                    href="/files/knock-knee-clinical-implications.pdf"
                    download
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="presentations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Research Presentations</CardTitle>
              <CardDescription>Slides and presentation materials</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-md border">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Main Research Presentation</p>
                    <p className="text-sm text-muted-foreground">Complete presentation slides (8.2MB)</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href="/files/knock-knee-presentation.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 text-sm"
                  >
                    <FileText className="h-3.5 w-3.5" />
                    <span>View</span>
                  </a>
                  <a
                    href="/files/knock-knee-presentation.pdf"
                    download
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-md border">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Conference Poster</p>
                    <p className="text-sm text-muted-foreground">Research poster for academic conference (5.1MB)</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href="/files/knock-knee-poster.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 text-sm"
                  >
                    <FileText className="h-3.5 w-3.5" />
                    <span>View</span>
                  </a>
                  <a
                    href="/files/knock-knee-poster.pdf"
                    download
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-md border">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Video Presentation</p>
                    <p className="text-sm text-muted-foreground">Recorded presentation with narration (42MB)</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href="/files/knock-knee-video-presentation.mp4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 text-sm"
                  >
                    <FileText className="h-3.5 w-3.5" />
                    <span>View</span>
                  </a>
                  <a
                    href="/files/knock-knee-video-presentation.mp4"
                    download
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="data" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Research Data</CardTitle>
              <CardDescription>Raw and processed data files</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-md border">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Raw Data Spreadsheet</p>
                    <p className="text-sm text-muted-foreground">Excel file with all measurements (4.2MB)</p>
                  </div>
                </div>
                <a
                  href="/files/knock-knee-raw-data.xlsx"
                  download
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download</span>
                </a>
              </div>

              <div className="flex items-center justify-between p-4 rounded-md border">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Statistical Analysis</p>
                    <p className="text-sm text-muted-foreground">Detailed statistical methods and results (2.8MB)</p>
                  </div>
                </div>
                <a
                  href="/files/knock-knee-statistics.pdf"
                  download
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download</span>
                </a>
              </div>

              <div className="flex items-center justify-between p-4 rounded-md border">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Motion Capture Data</p>
                    <p className="text-sm text-muted-foreground">3D motion capture files (ZIP, 18.5MB)</p>
                  </div>
                </div>
                <a
                  href="/files/knock-knee-motion-capture.zip"
                  download
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download</span>
                </a>
              </div>

              <div className="flex items-center justify-between p-4 rounded-md border">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Force Plate Data</p>
                    <p className="text-sm text-muted-foreground">Ground reaction force measurements (3.7MB)</p>
                  </div>
                </div>
                <a
                  href="/files/knock-knee-force-data.csv"
                  download
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
